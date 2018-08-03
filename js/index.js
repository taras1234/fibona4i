//const a = parseInt(prompt('Enter a number of fibonacci :'));
// 
//function fib(a) {
//  return a <= 1 ? a : fib(a - 1) + fib(a - 2);
//}
//const result = (fib(a));
//alert( fib(a) ); // 2

const n = parseInt(prompt('Enter n number of fibonacci :'))

function fib(n) {
  let a = 1,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(n) ); // 2
