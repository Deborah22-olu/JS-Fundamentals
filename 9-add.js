const { argv } = require('node:process');
function add(a, b) {
  return a + b;
}
if (argv[2] === undefined || argv[3] === undefined || isNaN(argv[2]) || isNaN(argv[3])) {
  console.log('NaN');
}
else {
  const firstInt = parseInt(argv[2]);
  const secondInt = parseInt(argv[3]);
  console.log(add(firstInt, secondInt));
}