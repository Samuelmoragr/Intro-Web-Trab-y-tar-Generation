function dobleArrayNumeros(numeros) {
    // Usamos el método map para duplicar cada valor del array
    const numerosIncrementados = numeros.map(num => num * 2);
    
    // Imprimimos el nuevo array
    console.log(numerosIncrementados);
}

// Ejemplo de uso
dobleArrayNumeros([1, 2, 4, 5]); // Output: [2, 4, 8, 10]