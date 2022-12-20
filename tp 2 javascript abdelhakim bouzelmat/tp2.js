const fs = require('fs');

fs.readFile('brouillionex2.txt', 'utf-8', (err, data) =>{
    if (err) {
        console.log(err)//Si l'affichage ne renvoie pas la bonne information, afficher erreur
        return
    }
    console.log(data);//affiche le texte
})

let myNewData ="rrrr"

fs.writeFile('brouillionex2.txt', myNewData, function (err) {

    if (err){

        console.log(err);

    }

    console.log('Modification effectué : ', myNewData);

});