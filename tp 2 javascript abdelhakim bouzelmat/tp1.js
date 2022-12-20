const fs = require('fs');

fs.readFile('brouillionex1', 'utf-8', (err, data) =>{
    if (err) {
        console.log(err)//Si l'affichage ne renvoie pas la bonne information, afficher erreur
        return
    }
    console.log(data);//affiche le texte
})