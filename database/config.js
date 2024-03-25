const mongoose = require('mongoose');


const dbConnection = async() => {
    try{
        console.log(process.env.MONGODB_CNN);
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
           // useCreateIndex: true,
           // useFindAndModify: false
        });

            console.log('Base de datons online');
    } catch(error){
        throw new Error('Error al querer conectar a la DB');
    }

}


module.exports= {
    dbConnection
}