const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/inotebook"
const connectToMongo = () => { 
    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log("Connected to Mongo Successfully");}).catch(error=>{
            console.log(error);
        })}
    
module.exports = connectToMongo;