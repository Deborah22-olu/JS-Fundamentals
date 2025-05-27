const { argv } = require('node:process');
if (argv[2] === undefined || isNaN(argv[2])) {
  console.log('Not a number');
}
else {
  console.log(`My number: ${parseInt(argv[2])}`);
}