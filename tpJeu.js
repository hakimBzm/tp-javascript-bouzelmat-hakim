// Le jeu codé ci-dessous est un pierre, Ce code a été rédigr à l'aide de Kdaem Garnier, il se peut qu'il y ait quelques similarité mais en aucun cas du plagiat.

const readline = require('readline'); // Cette fonction lis les entrées claviers
const rl = readline.createInterface({ // Créer une variable qui contient une interface
    input: process.stdin, // Lis les entrées
    output: process.stdout, // Lis les sorties
});

const types = ['pierre', 'feuille', 'ciseaux']; // Déclarartion des paramètres
const ordinateur = types[Math.floor(Math.random() * types.length)]; // Il va falloir attribuer un type à l'ordinateur, pour cela nous allons utiliser la fonction Math.random()



function game() {
    rl.question('Choisissez  la pierre 💎, feuille 🧻 ou ciseau ✂️ : ', (choix) => { //Pose la question au joueur si il veut choisir la pierre, le papier ou le ciseau

        switch (choix) {
            case "pierre":
                if (ordinateur === 'ciseaux') {
                    console.log(`
█░█ █▀█ █░█ █▀   ▄▀█ █░█ █▀▀ ▀█   █▀▀ ▄▀█ █▀▀ █▄░█ █▀▀   █   █░░ ▀ █▀█ █▀█ █▀▄ █ █▄░█ ▄▀█ ▀█▀ █▀▀ █░█ █▀█   ▄▀█  █▀▀ █░█ █▀█ █ █▀ █
▀▄▀ █▄█ █▄█ ▄█   █▀█ ▀▄▀ ██▄ █▄   █▄█ █▀█ █▄█ █░▀█ ██▄   ▄   █▄▄ ░ █▄█ █▀▄ █▄▀ █ █░▀█ █▀█ ░█░ ██▄ █▄█ █▀▄   █▀█  █▄▄ █▀█ █▄█ █ ▄█ █
                    
                                           █▀▀ █ █▀ █▀▀ ▄▀█ █░█ ▀▄▀
                                           █▄▄ █ ▄█ ██▄ █▀█ █▄█ █░█`);
                    replay();
                } else if (ordinateur === 'feuille') {
                    console.log(`
█░█ █▀█ █░█ █▀   ▄▀█ █░█ █▀▀ ▀█   █▀█ █▀▀ █▀█ █▀▄ █░█   █   █░░ ▀ █▀█ █▀█ █▀▄ █ █▄░█ ▄▀█ ▀█▀ █▀▀ █░█ █▀█   ▄▀█  █▀▀ █░█ █▀█ █ █▀ █
▀▄▀ █▄█ █▄█ ▄█   █▀█ ▀▄▀ ██▄ █▄   █▀▀ ██▄ █▀▄ █▄▀ █▄█   ▄   █▄▄ ░ █▄█ █▀▄ █▄▀ █ █░▀█ █▀█ ░█░ ██▄ █▄█ █▀▄   █▀█  █▄▄ █▀█ █▄█ █ ▄█ █
                    
                                         █▀▀ █▀▀ █░█ █ █░░ █░░ █▀▀
                                         █▀░ ██▄ █▄█ █ █▄▄ █▄▄ ██▄`);
                    replay();
                } else {
                    console.log(`
█▀▀ █▀▀ ▄▀█ █░░ █ ▀█▀ █▀▀   █   █░░ ▀ █▀█ █▀█ █▀▄ █ █▄░█ ▄▀█ ▀█▀ █▀▀ █░█ █▀█   ▄▀█   █▀▀ █░█ █▀█ █ █▀ █  
██▄ █▄█ █▀█ █▄▄ █ ░█░ ██▄   ▄   █▄▄ ░ █▄█ █▀▄ █▄▀ █ █░▀█ █▀█ ░█░ ██▄ █▄█ █▀▄   █▀█   █▄▄ █▀█ █▄█ █ ▄█ █
                    
                                         █▀█ █ █▀▀ █▀█ █▀█ █▀▀
                                         █▀▀ █ ██▄ █▀▄ █▀▄ ██▄`);
                    replay();
                }
                break;
            case "feuille":
                if (ordinateur === "pierre") {
                    console.log(`

█░█ █▀█ █░█ █▀   ▄▀█ █░█ █▀▀ ▀█   █▀▀ ▄▀█ █▀▀ █▄░█ █▀▀   █   █░░ ▀ █▀█ █▀█ █▀▄ █ █▄░█ ▄▀█ ▀█▀ █▀▀ █░█ █▀█   ▄▀█
▀▄▀ █▄█ █▄█ ▄█   █▀█ ▀▄▀ ██▄ █▄   █▄█ █▀█ █▄█ █░▀█ ██▄   ▄   █▄▄ ░ █▄█ █▀▄ █▄▀ █ █░▀█ █▀█ ░█░ ██▄ █▄█ █▀▄   █▀█
                    
                                 █▀▀ █░█ █▀█ █ █▀ █   █▀█ █ █▀▀ █▀█ █▀█ █▀▀
                                 █▄▄ █▀█ █▄█ █ ▄█ █   █▀▀ █ ██▄ █▀▄ █▀▄ ██▄`);
                    replay();
                } else if (ordinateur === "ciseaux") {
                    console.log(`
                    
█░█ █▀█ █░█ █▀   ▄▀█ █░█ █▀▀ ▀█   █▀█ █▀▀ █▀█ █▀▄ █░█   █   █░░ ▀ █▀█ █▀█ █▀▄ █ █▄░█ ▄▀█ ▀█▀ █▀▀ █░█ █▀█   ▄▀█
▀▄▀ █▄█ █▄█ ▄█   █▀█ ▀▄▀ ██▄ █▄   █▀▀ ██▄ █▀▄ █▄▀ █▄█   ▄   █▄▄ ░ █▄█ █▀▄ █▄▀ █ █░▀█ █▀█ ░█░ ██▄ █▄█ █▀▄   █▀█

                                █▀▀ █░█ █▀█ █ █▀ █   █▀▀ █ █▀ █▀▀ ▄▀█ █░█ ▀▄▀
                                █▄▄ █▀█ █▄█ █ ▄█ █   █▄▄ █ ▄█ ██▄ █▀█ █▄█ █░█`);
                    replay();
                } else {
                    console.log(`
                    
█▀▀ █▀▀ ▄▀█ █░░ █ ▀█▀ █▀▀   █   █░░ ▀ █▀█ █▀█ █▀▄ █ █▄░█ ▄▀█ ▀█▀ █▀▀ █░█ █▀█   ▄▀█   █▀▀ █░█ █▀█ █ █▀ █
██▄ █▄█ █▀█ █▄▄ █ ░█░ ██▄   ▄   █▄▄ ░ █▄█ █▀▄ █▄▀ █ █░▀█ █▀█ ░█░ ██▄ █▄█ █▀▄   █▀█   █▄▄ █▀█ █▄█ █ ▄█ █

                                        █▀▀ █▀▀ █░█ █ █░░ █░░ █▀▀
                                        █▀░ ██▄ █▄█ █ █▄▄ █▄▄ ██▄`);
                    replay();
                }
                break;
            case "ciseaux":
                if (ordinateur === `feuille`) {
                    console.log(`
                    
█░█ █▀█ █░█ █▀   ▄▀█ █░█ █▀▀ ▀█   █▀▀ ▄▀█ █▀▀ █▄░█ █▀▀   █   █░░ ▀ █▀█ █▀█ █▀▄ █ █▄░█ ▄▀█ ▀█▀ █▀▀ █░█ █▀█   ▄▀█
▀▄▀ █▄█ █▄█ ▄█   █▀█ ▀▄▀ ██▄ █▄   █▄█ █▀█ █▄█ █░▀█ ██▄   ▄   █▄▄ ░ █▄█ █▀▄ █▄▀ █ █░▀█ █▀█ ░█░ ██▄ █▄█ █▀▄   █▀█

                                █▀▀ █░█ █▀█ █ █▀ █   █▀▀ █▀▀ █░█ █ █░░ █░░ █▀▀
                                █▄▄ █▀█ █▄█ █ ▄█ █   █▀░ ██▄ █▄█ █ █▄▄ █▄▄ ██▄`);
                } else if (ordinateur === "pierre") {
                    console.log(`
█░█ █▀█ █░█ █▀   ▄▀█ █░█ █▀▀ ▀█   █▀█ █▀▀ █▀█ █▀▄ █░█   █   █░░ ▀ █▀█ █▀█ █▀▄ █ █▄░█ ▄▀█ ▀█▀ █▀▀ █░█ █▀█   ▄▀█
▀▄▀ █▄█ █▄█ ▄█   █▀█ ▀▄▀ ██▄ █▄   █▀▀ ██▄ █▀▄ █▄▀ █▄█   ▄   █▄▄ ░ █▄█ █▀▄ █▄▀ █ █░▀█ █▀█ ░█░ ██▄ █▄█ █▀▄   █▀█
                    
                                  █▀▀ █░█ █▀█ █ █▀ █   █▀█ █ █▀▀ █▀█ █▀█ █▀▀
                                  █▄▄ █▀█ █▄█ █ ▄█ █   █▀▀ █ ██▄ █▀▄ █▀▄ ██▄`);
                } else {
                    console.log(`
                    
█▀▀ █▀▀ ▄▀█ █░░ █ ▀█▀ █▀▀   █   █░░ ▀ █▀█ █▀█ █▀▄ █ █▄░█ ▄▀█ ▀█▀ █▀▀ █░█ █▀█   ▄▀█   █▀▀ █░█ █▀█ █ █▀ █
██▄ █▄█ █▀█ █▄▄ █ ░█░ ██▄   ▄   █▄▄ ░ █▄█ █▀▄ █▄▀ █ █░▀█ █▀█ ░█░ ██▄ █▄█ █▀▄   █▀█   █▄▄ █▀█ █▄█ █ ▄█ █

                                        █▀▀ █ █▀ █▀▀ ▄▀█ █░█ ▀▄▀
                                        █▄▄ █ ▄█ ██▄ █▀█ █▄█ █░█`);
                }
                break;
            default:
                console.log(`
                Vous n avez rien choisis, veuillez choisir pierre 💎, papier 🧻, ou ciseaux ✂️`);
        }
    });
}

game();

function replay() {
    rl.question('Pour rejouer, appuyer sur O, sinon appuyer sur N', (choix) => {
        if (choix === 'O') {                                      //Si le joueur met O, le jeu recommence
            game();
        } else if (choix === 'N') {                               //Si le joueur met N, le jeu s'arrete
            rl.close();
        } else {
            console.log('Veuillez appuyer sur O(oui) ou N(Non)');//Si le joueur met autre chose, un message s'affiche
            game();
        }
    });
}


