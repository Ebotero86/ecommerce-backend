const express = require ('express');
const {getConnection } = require ('./bd/db-connect-mongo');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());


getConnection();

app.use(express.json());

app.use('/categoria', require('./router/categoria'));
app.use('/marca', require('./router/marca'));
app.use('/producto', require('./router/producto'));
app.use('/vendedor', require('./router/vendedor'));


app.listen(port, () => {
    console.log(`App escuchando peticiones en el puerto ${port}`);
});

