// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

/*function reverseInt(n) {
  if(Math.sign(n) === -1) {
    return parseInt('-' + n.toString().split('-')[1].split('').reverse().join(''));
  }
  return parseInt(n.toString().split('').reverse().join(''));
}*/

/*
function reverseInt(n) {
  let done = false;
  let reversed = 0, reminder;
  while( n !== 0){
    reversed = reversed * 10 + n % 10;
    n = (n - (n % 10))/10;
  }
  return reversed;
}
*/

module.exports = reverseInt;
