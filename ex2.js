const array = [34, 25, 84, 99, 852, 1854, 957, 46, 54, 5]//Valeurs du tableau

function HighestNumber(array) {
    const max = Math.max(...array);
    console.log(max);//Affiche la plus grande valeurs
}

HighestNumber(array)//Appelle la fonction du tableau