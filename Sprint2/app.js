const { captureRejectionSymbol } = require('events');
const express = require('express');
const path = require('path');
const app = express();
const port = 3030;
app.use(express.static('Sprint2/public'));


app.get('/', (req, res)=> res.sendFile(path.join(__dirname,'./views','home.html')));
app.get('/carrito', (req, res)=> res.sendFile(path.join(__dirname,'./views','carrito.html')));
app.get('/detalleDeProducto', (req, res)=> res.sendFile(path.join(__dirname,'./views','detalleDeProducto.html')));
app.get('/login', (req, res)=> res.sendFile(path.join(__dirname,'./views','login.html')));
app.get('/registro', (req, res)=> res.sendFile(path.join(__dirname,'./views','registro.html')));


app.listen(port,() => console.log('Servidor corriendo en localhost:'+port));
