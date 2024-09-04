const express = require('express');
const path = require('path');
const router = require('./router')

const app = express();

//EJS Configuration
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Static File Configuration
app.use(express.static('public'))

//Reading Requisition Configuration
app.use(express.urlencoded({ extended: true}))

//Aplicattion Routes
app.use(router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Starting server...\nHomePag: http://localhost:${PORT}/`))

