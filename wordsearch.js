const wordSearch = function(letters, word) {
  //function should return false if word matrix is an empty array
  if (letters.length === 0) {
    return false;
  }
  //store colunm and row lengths in variables
  const rowsLength = letters.length;
  const colsLength = letters[0].length;
  //use join() to change array element to string element so includes() can check for the letter combination horizontally later
  const horizontalJoin = letters.map(ls => ls.join(''));
  //create variable result as an empty array to collect transposed matrix
  let verticalResult = [];
  //iteration of cols
  for (let i = 0; i < colsLength; i ++) {
  //create an empty array of every iteration of cols
    verticalResult[i] = [];
    //iteration of rows
    for (let j = 0; j < rowsLength; j++) {
      //check for letter combination horizontally
      if (horizontalJoin[j].includes(word)) {
        return true;
      }
      //alter the position of row and cols in matrix
      verticalResult[i][j] = letters[j][i];
    }
    //check letter combination vertically
    const verticalJoin = verticalResult.map(ls => ls.join(''));
   
    if (verticalJoin[i].includes(word)) {
      return true;
    }
  }

  return false;
};


module.exports = wordSearch;


