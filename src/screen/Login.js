import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setcredentials]= useState({ email:"", password:""}) 
  let navigate = useNavigate()
  const handleSubmit= async(e)=>{
      e.preventDefault();                      //It is a synthetic event
      try {
        console.log(JSON.stringify({
          email: credentials.email,
          password: credentials.password
      }))
          const response = await fetch("http://localhost:5000/api/loginuser", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  email: credentials.email,
                  password: credentials.password                                          //jo b body me ata hai post req ki use string me bdl dena 
              })
          });
      
          if (!response.ok) {
              throw new Error('Network response was not ok');                            //agr response shi nhi hai to
          }
      
          const json = await response.json();
          console.log(json);
      
          if (json.success) {
            localStorage.setItem("userEmail", credentials.email);                                                //agr json ka response correct ata hai to 
            localStorage.setItem("authToken", json.authToken);                                                //agr json ka response correct ata hai to 
            console.log(localStorage.getItem("authToken"))
              console.log("Successfully signed up");
              navigate("/")
          } else {
            
              alert("Failed to sign up. Please try again.");
          }
      } catch (error) {
          console.error('Error:', error);
          alert("An error occurred. Please try again.",error);
      }
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})  ;      //jese hi usestate vala email activate hoga event activate ho jayega or sidha onChange event call krdega
  }
  return (
    
    <div>
        <div className="container">
        <form onSubmit= {handleSubmit}>
        
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control"name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp"onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password}id="exampleInputPassword1"onChange={onChange} />
          </div>

          <button type="submit" className=" m-3 btn btn-success">Login</button>
          <Link to="/creatuser" className="m-3 btn btn-danger"> New user </Link>
        </form >
      </div>
    
    </div>
  )
}