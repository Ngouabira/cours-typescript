// Les boucles : for, while, do while, for in, for of

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i: number = 0;
while (i < 10) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i < 10);


let students: string[] = ["John", "Jane", "Jim", "Jill"];
for (let student of students) {
    console.log(student);
}

for (let i in students) {
    console.log(students[i]);
}



