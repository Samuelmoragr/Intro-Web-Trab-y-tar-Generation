let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Imprimir todas las personas en la lista
console.log(people);

// Eliminar "Dani" del array
people.splice(people.indexOf("Dani"), 1);

// Eliminar "Juan" del array
people.splice(people.indexOf("Juan"), 1);

// Mover "Luis" al inicio del array
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

// Agregar mi nombre al final del array
people.push("Samuel");

// Iterar y salir después de imprimir "Maria"
for (let person of people) {
    console.log(person);
    if (person === "Maria") break;
}

// Obtener el índice de "Maria"
console.log("Index of Maria:", people.indexOf("Maria"));

// Mostrar el array final
console.log("Final array:", people);