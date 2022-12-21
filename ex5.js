//Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.      
const fs = require('fs');
let name_file = 'brouillionex5.txt'
let content = 'Le fichier est modifié'
fs.appendFile('Newn Brouillionex5.txt', 'Mon contenu', function (err) 
{   
    if (err) throw err;   
    console.log('Fichier créé');
});
