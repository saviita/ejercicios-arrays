//EJERCICIOS

//EJ1 Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.
const fiveNumbersArray = fiveNumbers => {
  const randomNumber = Math.floor(Math.random() * fiveNumbers.length);

  console.log(fiveNumbers[randomNumber]);
};
fiveNumbersArray([1, 2, 3, 4, 5]);

//EJ2 Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.
// - "La suma de todos los números es:[suma]"
// - "La media de todos los números es:[media]"
// - "El mayor es [mayor] y el menor es [menor]"
const threeNumberArray = threeNumbers => {
  const addition = threeNumbers[0] + threeNumbers[1] + threeNumbers[2];
  const average = addition / threeNumbers.length;
  const min = Math.min(threeNumbers[0], threeNumbers[1], threeNumbers[2]);
  const max = Math.max(threeNumbers[0], threeNumbers[1], threeNumbers[2]);

  console.log(`La suma de todos los números es ${addition}`);
  console.log(`La media de todos los números es ${average}`);
  console.log(`El mayor es ${max} y el menor es ${min}`);
};
threeNumberArray([5, 8, 2]);

//EJ3 Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.
const fiveArray = numbers => {
  randomNumber = Math.floor(Math.random() * 11);
  console.log(randomNumber);

  if (numbers.includes(randomNumber)) {
    const position = numbers.indexOf(randomNumber);

    console.log(`Contiene el número en la posición ${position}`);
  } else {
    console.log('No contiene ese número');
  }
};
fiveArray([2, 3, 4, 8, 6]);

//EJ4 Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.
const getEmptyArray = emptyArray => {
  const number1 = Math.floor(Math.random() * 101);
  const number2 = Math.floor(Math.random() * 101);
  const number3 = Math.floor(Math.random() * 101);

  emptyArray.push(number1, number2, number3);
  console.log(emptyArray);
};
getEmptyArray([]);

//EJ5 Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.
const getArrayFive = arrayFive => {
  const even = [];
  const odd = [];

  const randomNumber = Math.floor(Math.random() * 11);
  const result1 = randomNumber * arrayFive[0];
  const result2 = randomNumber * arrayFive[1];
  const result3 = randomNumber * arrayFive[2];
  const result4 = randomNumber * arrayFive[3];
  const result5 = randomNumber * arrayFive[4];

  if (result1 % 2 === 0) {
    even.push(result1);
  } else {
    odd.push(result1);
  }

  if (result2 % 2 === 0) {
    even.push(result2);
  } else {
    odd.push(result2);
  }

  if (result3 % 2 === 0) {
    even.push(result3);
  } else {
    odd.push(result3);
  }

  if (result4 % 2 === 0) {
    even.push(result4);
  } else {
    odd.push(result4);
  }

  if (result5 % 2 === 0) {
    even.push(result5);
  } else {
    odd.push(result5);
  }

  console.log(arrayFive, even, odd);
};
getArrayFive([4, 5, 9, 1, 6]);

//EJ6 Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.
const dniLetter = dniNumber => {
  const letter = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];
  const positionLetter = Number(dniNumber) % 23;

  console.log(dniNumber + letter[positionLetter]);
};
dniLetter('02625670');

//EJ7 Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']
const getThreeWords = threeWords => {
  const first1 = threeWords[0].charAt(0).toUpperCase();
  const last1 = threeWords[0].charAt(threeWords[0].length - 1).toUpperCase();

  const first2 = threeWords[1].charAt(0).toUpperCase();
  const last2 = threeWords[1].charAt(threeWords[1].length - 1).toUpperCase();

  const first3 = threeWords[2].charAt(0).toUpperCase();
  const last3 = threeWords[2].charAt(threeWords[2].length - 1).toUpperCase();

  const letter = [];
  letter.push(first1, last1, first2, last2, first3, last3);
  console.log(letter);

  /*let n = 0;
 const firstUpperCase = threeWords[n].charAt(0).toUpperCase();
 const lastUpperCase = threeWords[n].charAt(threeWords[n].length - 1).toUpperCase();
 word1 = `${firstUpperCase}, ${lastUpperCase}`;
 n++;
 word2 = `${firstUpperCase}, ${lastUpperCase}`;
 n++;
 word3 = `${firstUpperCase}, ${lastUpperCase}`;
 console.log(`${word1}, ${word2}, ${word3}`)*/
};
getThreeWords(['pájaros', 'zapato', 'móvil']);

// prettier / errorlens

const returnExample = (a, b) => a > b;
