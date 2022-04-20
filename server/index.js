const http = require("http");
const express = require('express');
const path = require('path');
const playerList = require('./data/player');

let app = express();
const port = 3001;
app.listen(port, () => {
    console.log(`Server démarré sur port : ${port}`);
});


// Configuration d'express
const distDir = '../src/';
app.use('/pages', express.static(path.join(__dirname, distDir, '/pages')));
app.use('/assets', express.static(path.join(__dirname, distDir, '/assets')));
app.use(express.json());

// Routes index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, distDir, 'index.html'));
});

// route renvoyant la liste des joueuses (dragonnes)
app.get('/players', (req, res) => {
    res.sendFile(path.join(__dirname, distDir, 'pages/liste.html'));
    res.send(playerList);
});
// route renvoyant la joueuse correspondante à l'id :id 
app.get('/player/:id', (req, res) => {
    res.sendFile(path.join(__dirname, distDir, 'pages/edit.html'));
    let playerId = parseInt(req.params.id);
    const player = playerList.find((player) => player.id === playerId);
    res.send(player);
});