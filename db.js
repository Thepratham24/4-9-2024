const mongoose= require("mongoose");          //QCeZLzFrtwJzpwxp

const mongoURI ="mongodb+srv://thepratham24:QCeZLzFrtwJzpwxp@cluster0.r4vrffj.mongodb.net/QuickBite?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB=async()=>{
    await mongoose.connect(mongoURI, { useNewUrlParser: true ,useUnifiedTopology: true }  , async (err, result) => {
        if (err) console.log("---", err)
        else {
            //jeha data insert hoya hai vo atlas ki vjah se aya hai cmd me query run kr k 
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");        //data fetch ho rha hai jo screen pe print hoga
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("food_Category");
                foodCategory.find({}).toArray( function (err, catdata){
                    if (err) console.log("--c", err);
                else {
                    global.food_items = data;
                    console.log("data")
                    global.foodCategory = catdata;
                }
                });
                
            })
        }
    });
}

module.exports = mongoDB;