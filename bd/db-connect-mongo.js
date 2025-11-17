const mongoose = require('mongoose');

const getConnection = async () => {

    try {

        const url = 'mongodb+srv://BOTERO:Avatar2012@cluster0.w1folqe.mongodb.net/ecommerce-app-db?appName=Cluster0'
        await mongoose.connect(url);

        console.log('conexión exitosa')

    }catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    getConnection
}