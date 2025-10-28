const express = require("express");
const app = express();
const path = require('path');
const fs =require('fs').promises;

// app.get("/", (req,res) => res.send("Hello,world"));
app.get("/", async (req,res) => {
    try {
        const cheminFichier = path.join(__dirname, 'index.html');
        const content = await fs.readFile(cheminFichier,'utf8');
        res.send(content);
    } catch (err) {
        console.error('Erreur pou renvoyer index.html', err);
        res.status(500).send('Erreur serveur !');
    }
});
app.get("/contact", async (req,res) => {
    try {
        const cheminFichier = path.join(__dirname, 'contact.html');
        const content = await fs.readFile(cheminFichier,'utf8');
        res.send(content);
    } catch (err) {
        console.error('Erreur pou renvoyer contact.html', err);
        res.status(500).send('Erreur serveur !');
    }
});

app.use(async (req,res) => {
    try {
        const cheminFichier = path.join(__dirname, '404.html');
        const content = await fs.readFile(cheminFichier,'utf8');
        res.status(404).send(content);
    } catch (err) {
        console.error('Erreur pou renvoyer 404.html', err);
        res.status(500).send('Page non trouvé !!!');
    }
});


app.listen(7000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Votre apllication est lancé sur le 7000');
    
});