// script.js
function romanToInteger(romano) {
    const valores = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    if (!romano || romano.trim() === '') {
        throw new Error('Input must be a valid Roman numeral.');
    }

    // Validación con expresión regular de romanos correctos (1 a 3999)
    const romanoValido = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!romanoValido.test(romano)) {
        throw new Error('Input must be a valid Roman numeral.');
    }

    let total = 0;
    let prev = 0;
    for (let i = romano.length - 1; i >= 0; i--) {
        const actual = valores[romano[i]];
        if (actual < prev) {
            total -= actual;
        } else {
            total += actual;
        }
        prev = actual;
    }

    return total;
}

function integerToRoman(num) {
    if (!Number.isInteger(num)) {
        throw new Error('The number must be an integer.');
    }
    if (num < 1 || num > 3999) {
        throw new Error('The number must be between 1 and 3999.');
    }

    const valores = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let romano = '';
    for (const [valor, simbolo] of valores) {
        while (num >= valor) {
            romano += simbolo;
            num -= valor;
        }
    }

    return romano;
}

function convertir() {
    const input = document.getElementById('input').value.trim().toUpperCase();
    let resultado = '';
    let numero = 0;

    try {
        if (/^\d+(\.\d+)?$/.test(input)) {
            if (input.includes('.')) throw new Error('The number must be an integer.');
            numero = parseInt(input, 10);
            resultado = integerToRoman(numero);
        } else if (/^[IVXLCDM]+$/.test(input)) {
            numero = romanToInteger(input);
            resultado = numero.toString();
        } else {
            throw new Error('Entrada inválida');
        }
    } catch (e) {
        resultado = 'Error: ' + e.message;
    }

    document.getElementById('resultado').innerText = resultado;

    // Solo generar soldados si la conversión fue exitosa
    if (!resultado.startsWith('Error')) {
        generarSoldados(numero);
    }
}

function generarSoldados(cantidad) {
    const contenedor = document.getElementById('soldados-container');
    contenedor.innerHTML = '';

    for (let i = 0; i < cantidad; i++) {
        const img = document.createElement('img');
        img.src = Math.random() < 0.9
            ? 'C:/Users/USUARIO/Desktop/Inigo.Munoz.alu132980/Images/soldado.png'
            : 'C:/Users/USUARIO/Desktop/Inigo.Munoz.alu132980/Images/cesar.png';
        img.classList.add('soldado');
        img.style.top = `${Math.random() * window.innerHeight}px`;
        img.style.left = `${Math.random() * window.innerWidth}px`;
        contenedor.appendChild(img);
    }
}