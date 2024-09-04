
const express = require("express")
const router = express.Router()                       //router bnaa liya for post request through router
const User = require("../Models/User")                 //user ko import krva liay

// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")

const bcrypt = require("bcryptjs");
const jwtSecret= "Mynamesprathamandabhiimandverygoodboy"

router.post("/creatuser",
        // username must be an email
        [body('email').isEmail(),
        // password must be at least 5 chars long
        body('name').isLength({ min: 5 }),
        body('password').isLength({ min: 5 })]
        , async (req, res) => {
                // Finds the validation errors in this request and wraps them in an object with handy functions
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() });
                }

                const salt = await bcrypt.genSalt(10);                               //password will be encrypted so not anybody can know the password rather tha the user
                let secPassword = await bcrypt.hash(req.body.password, salt)
                //async function to create user
                try {
                        await User.create({                                           //eh model de function ne
                                name: req.body.name,
                                password: secPassword,
                                email: req.body.email,
                                location: req.body.location
                        }).then(res.json({ success: true }))
                } catch (error) {
                        console.log("Error occured ------", error)
                        res.json({ success: false })
                }
        });


// email ko check krega agr to db me pdi hai to sara data bhej dega us email ka fir pasword match hoga agr to match kr gea to fir data login kra dega agr nhi to dekho
router.post("/loginuser",
        [body('email').isEmail(),
        body('password').isLength({ min: 5 })], async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() });
                }
                let email = req.body.email
                try {
                        let userdata = await User.findOne({ email });                  //jo b data db me is email se match krta oga vo use reponse k roop me send kr dega
                        if (!userdata) {
                                return res.status(400).json({ errors: "Try logging in with correct credentials " });
                        }
                        
                        const pwdCompare = await bcrypt.compare(req.body.password ,userdata.password)

                        if (pwdCompare >0 ) {
                                return res.status(400).json({ errors: "Try logging in with correct credentials: password wrong " });
                        }

                        const data ={
                                user:{
                                      id: userdata.id  
                                }
                        }
                        const authToken = jwt.sign(data,jwtSecret)
                        return res.json({ success: true, authToken:authToken });

                } catch (error) {
                        console.log("Error occured ------", error)
                        res.json({ success: false })
                }
        });

module.exports = router;