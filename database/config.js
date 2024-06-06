const mongoose = require("mongoose");

 const dbConnection = async () => {
     try{
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Online');
     } catch(error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la DB');
     }
 }

 module.exports = {
    dbConnection
 }