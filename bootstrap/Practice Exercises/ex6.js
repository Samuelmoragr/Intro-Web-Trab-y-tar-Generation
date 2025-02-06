function ordenarNums(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar elementos si están en el orden incorrecto
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let numeros = [3, 6, 12, 5, 100, 1];
console.log(ordenarNums(numeros)); // Output: [1, 3, 5, 6, 12, 100]