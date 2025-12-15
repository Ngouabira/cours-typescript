//Les conditions : if, else, else if, switch

//Liste des opérateurs de comparaison : >, <, >=, <=, ==, !=, ===, !==
//Liste des opérateurs logiques : &&, ||, !


let age: number = 20;

if (age >= 18) {
    console.log("Vous êtes majeur");
} else {
    console.log("Vous êtes mineur");
}

//Avec un opérateur ternaire
let message: string = age >= 18 ? "Vous êtes majeur" : "Vous êtes mineur";
console.log(message);

switch (age) {
    case 18:
        console.log("Vous êtes majeur");
        break;
    default:
        console.log("Vous êtes mineur");
}