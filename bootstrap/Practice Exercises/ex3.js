function arraySumYProduct(numeros) {
    // Calculamos la suma usando reduce
    const sum = numeros.reduce((acc, num) => acc + num, 0);
    
    // Calculamos el producto usando reduce
    const product = numeros.reduce((acc, num) => acc * num, 1);
    
    // Imprimimos los resultados
    console.log(`La suma es ${sum}. El profucto es ${product}.`);
}

arraySumYProduct([1, 2, 3, 4]); // Output: The sum is 10. The product is 24.