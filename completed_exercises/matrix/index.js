// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

/*
function matrix(n) {
  const result = [];
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let counter = 0;

  while (counter !== n * n) {
    // insertLeftToRight
    for (let i = startCol; i <= endCol; i++) {
      result[startRow] ? result[startRow].splice(i, 0, ++counter) : result.push([++counter]);
    }
    startRow += 1;
    console.log('LeftToRight');
    console.log(result, startRow, endRow, startCol, endCol);

    // insertTopToBottom
    for (let i = startRow; i <= endRow; i++) {
      result[i] ? result[i].splice(startCol, 0, ++counter) : result.push([++counter]);
    }
    endCol -= 1;
    console.log('TopToBottom');
    console.log(result, startRow, endRow, startCol, endCol);

    // insertRightToLeft
    for (let i = endCol; i >= startCol; i--) {
      result[endRow].splice(startCol, 0, ++counter);
    }
    endRow -= 1;
    console.log('RightToLeft');
    console.log(result, startRow, endRow, startCol, endCol);

    // insertBottomToTop
    for (let i = endRow; i >= startRow; i--) {
      result[i].splice(startCol, 0, ++counter);
    }
    startCol += 1
    console.log('BottomToTop');
    console.log(result, startRow, endRow, startCol, endCol);

  }
  return result;
}
*/

module.exports = matrix;
