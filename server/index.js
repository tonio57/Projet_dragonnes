const http = require("http");
const express = require('express');
const path = require('path');
// const app = require("./app");
//const port = 3000;
let app = express();
const port = 3001;
app.listen(port, () => {
    console.log(`Server démarré sur port : ${port}`);
});
 //app.set("port", port);
// const server = http.createServer(function(req,res){
// console.log("Serveur démarré");
// res.end("message envoyé");
// });
// server.listen(port);

// Configuration d'express
const distDir = '../src/';
app.use('/pages', express.static(path.join(__dirname, distDir, '/pages')));
app.use('/assets', express.static(path.join(__dirname, distDir, '/assets')));
app.use(express.json());

// Routes index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, distDir, 'pages/index.html'));
});