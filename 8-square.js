const { argv } = require('node:process');
if (argv[2] === undefined || isNaN(argv[2])) {
  console.log('Missing size');
}
else {
  const size = parseInt(argv[2]);
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}