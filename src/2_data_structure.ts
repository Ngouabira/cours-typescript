// Les structures de données : array, tuple, object

//Les tableaux : array
let students: string[] = ["John", "Jane", "Jim", "Jill"];

let notes: number[] = [10, 20, 30, 40, 50];

//Les objets : object

let user = { name: "John", age: 20 };

let student: { name: string, age: number } = { name: "John", age: 20 };

//Les tuples : tuple
let person: [string, number] = ["John", 20];

//Les enums : enum
enum Color { RED, GREEN, BLUE }
let c: Color = Color.RED;

//Les sets : set
let set: Set<string> = new Set(["John", "Jane", "Jim", "Jill"]);
set.add("Paul");
console.log(set);

//Les maps : map
let map: Map<string, number> = new Map([["John", 20], ["Jane", 21], ["Jim", 22], ["Jill", 23]]);
map.set("Paul", 24);
console.log(map);

//Les interfaces : interface
interface User {
    name: string;
    age: number;
    email: string;
}

let user2: User = { name: "John", age: 20, email: "john@example.com" };
console.log(user);



