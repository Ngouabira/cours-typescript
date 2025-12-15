// Les fonctions : function, arrow function, callback, promise, async/await

function sum(a: number, b: number): number {
    return a + b;
}

let sum2 = (a: number, b: number): number => a + b;

let sum3 = (a: number, b: number): number => {
    console.log(a + b);
    return a + b;
}

//Avec valeur par défaut
function sayHello(name: string = "John"): void {
    console.log(`Hello ${name}`);
}

