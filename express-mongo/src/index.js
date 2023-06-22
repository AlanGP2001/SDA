require('@babel/register');
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const userRouters = require('./routes/user');
const productRouters = require('./routes/product');

const {getCredentials, getToken} = require('./utils/headers.js');
const {signToken, verifyToken, validateExpiration} = require('./utils/token.js');
const {getUser} = require('./utils/users.js');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRouters);
app.use('/api', productRouters);

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Conectado a la base de datos Atlas'))
    .catch((error) => { console.log(error) } )

app.get('/',(req, res)=> {
    res.send('Hola desde mi Api')
});

app.get("/private", (req, res) => {
    try {
      const token = getToken(req);
      const payload = verifyToken(token);
  
      validateExpiration(payload);
  
      res.send("Soy un EndPoint privado");
    } catch (error) {
      res.status(401).send({ error: error.message });
    }
  });

app.post("/token", (req, res) => {
    try {
      const { username, password } = getCredentials(req);
      const user = getUser(username, password);
      const token = signToken(user);
  
      res.send({ token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
});