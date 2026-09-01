// El código que se ejecuta dependerá de la opción que le pasemos por consola
// Si es 'original' se ejecutará el método originalWay()
// Si es 'readable' se ejecutará el método readableWay()

type possibleArg = 'original' | 'readable';

const arg: possibleArg = process.argv[2] as possibleArg;

if(arg === 'readable') readableWay();
else originalWay();

if (!arg) console.log('Bruh, usa el comando nub index.js <arg> original | readable')

// Hay muchas maneras de hacer este ejercicio
// Forma original de sergio:
function originalWay() {
  for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz")
      } else if(i % 3 ===0) {
          console.log("Fizz")
      } else if(i % 5 === 0) {
          console.log("Buzz")
      } else {
          console.log(i)
      }
  }
}

// Este es un ejemplo de refactor, el codigo si es mas complicado de lo que deberia pero es mas legible
// No siempre debe hacerse se esta manera, pero si es un código complejo y se puede hacer mas legible, entonces si
// Es una buena idea refactorizarlo.
function readableWay() {
  console.log('executing readable');
  let count = 1;
  const limit = 100;

  const conditionalFizzBuzz = (count: number) => {
    if (count % 3 === 0 && count % 5 === 0) return 0;
    if (count % 3 === 0) return 1;
    if (count % 5 === 0) return 2;
    return count;
  };

  const conditionMap: Record<number, string> = {
    0: 'FizzBuzz',
    1: 'Fizz',
    2: 'Buzz'
  };


  while (count <= limit) {
    const fizzBuzz = conditionMap[conditionalFizzBuzz(count)];
    console.log(fizzBuzz || count);
    count++;
  }
}
