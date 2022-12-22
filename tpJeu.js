// Le jeu codé ci-dessous est un pierre, papier ciseau

const readline = require('readline'); // Cette fonction lis les entrées claviers
const rl = readline.createInterface({ // Créer une variable qui contient une interface
    input: process.stdin, // Lis les entrées
    output: process.stdout, // Lis les sorties
});

const types = ['pierre', 'feuille', 'ciseaux']; // Déclarartion des paramètres
const ordinateur = types[Math.floor(Math.random() * types.length)]; // Il va falloir attribuer un type à l'ordinateur, pour cela nous allons utiliser la fonction Math.random()


