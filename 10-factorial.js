const { argv } = require('node:process');
function factorial(n) {
  if (n < 0 || isNaN(n)) {
    return 1;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
if (argv[2] === undefined || isNaN(argv[2])) {
  console.log(1);
}
else {
  const num = parseInt(argv[2]);
  console.log(factorial(num));
}