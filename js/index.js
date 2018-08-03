const a = parseInt(prompt('Enter a :'));

function fib(a) {
  return a <= 1 ? a : fib(a - 1) + fib(a - 2);
}
const result = (fib(a));
alert( fib(a) ); // 2

