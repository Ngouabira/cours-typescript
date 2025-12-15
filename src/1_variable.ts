// Les types de base : number, string, boolean, any, unknown, null, undefined

let age: number = 20;

let nom: string = "Gildas";

let isStudent: boolean = true;

const PI: number = 3.14;

//Type à éviter sauf si on est dans un cas très spécifique
let anyValue: any = "Hello";
anyValue = 123;

let unknownValue: unknown = "Hello";
unknownValue = 123;

let nullValue: null = null;

let undefinedValue: undefined = undefined;

//Les unions : union
let union: string | number = "Hello";
union = 123;