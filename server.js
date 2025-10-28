// console.log("Test");

// const os = require('os');
// console.log(os.platform());

// let http = require('http');

// http.createServer(
//     function (req,res) {
//         res.writeHead(200, {'Content-Type' : 'text/plain'});
//         res.end('Bonjour la terre');
//     }
// ).listen(7000);

const http = require('http');
const fs = require('fs');
const path = require('path');
const portServer = 7000;

const server = http.createServer(
    (req,res) => {
        let cheminFichier = '';

        switch (req.url) {
            case '/':
                cheminFichier = path.join(__dirname, 'index.html');
                break;
            case '/contact':
                cheminFichier = path.join(__dirname, 'contact.html');
                break;     
            default:
                cheminFichier = path.join(__dirname, '404.html');
                break;       
        }
     
        fs.readFile(cheminFichier, 'utf8' , (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Erreur de chargement : ' + err);
            } else {
            res.writeHead(200, {'Content-Type' : 'text/html' });
            res.end(content);
            }
        })
    }
);

server.listen(
    portServer, '0.0.0.0', () => {
        console.log(`Votre serveur tourne sur le port : ${portServer}`);     
    }
);