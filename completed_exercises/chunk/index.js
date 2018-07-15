// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  console.log(array, size);
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];
    console.log(last);
    if (!last || last.length === size) {
      chunked.push([element]);
      console.log('If cond', chunked);
    } else {
      last.push(element);
      console.log('else cond', last);
    }
  }
   console.log(chunked);
  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }

//   return chunked;
// }

/* function chunk(array, size) {
  const retArr = [];
  for (let i = 0; i < array.length; i += size) {
    retArr.push(array.slice(i, i+size));
  }
  console.log(retArr);
  return retArr;
} */

/* function chunk(array, size) {
  const retArr = [];
  let tempArr = [];
  for (let i = 1; i <= array.length; i++) {
    tempArr.push(array[i-1]);
    if(i%size === 0) {
      retArr.push(tempArr);
      tempArr = [];
    }
  }
  if(tempArr.length > 0) {
    retArr.push(tempArr);
    tempArr = [];
  }
  console.log(retArr);
  return retArr;
} */
