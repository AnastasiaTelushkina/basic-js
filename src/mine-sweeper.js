const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = Array(matrix.length).fill(0);
  for(let i =0;i<matrix.length;i++) result[i] = Array(matrix[i].length).fill(0);
  
  for (let i = 0; i< matrix.length; i++){ 
    for(let j = 0; j< matrix[i].length; j++){ 
      if(i == 0){
        if(j == 0){
          result[i][j] += [matrix[i+1][j],matrix[i][j+1],matrix[i+1][j+1]].filter((x)=>!!x).length;
        } else if(j>0 && j < matrix.length- 1) {
          result[i][j] += [matrix[i+1][j],matrix[i][j+1],matrix[i+1][j+1],matrix[i+1][j-1],matrix[i][j-1]].filter((x)=>!!x).length;
        } else if(j == matrix.length - 1) {
          result[i][j] += [matrix[i+1][j],matrix[i][j-1],matrix[i+1][j-1]].filter((x)=>!!x).length;
        }
      } else if(i>0 && i < matrix.length- 1) {
        if(j == 0){ 
          result[i][j] += [matrix[i+1][j],matrix[i][j+1],matrix[i+1][j+1],matrix[i-1][j+1],matrix[i-1][j]].filter((x)=>!!x).length;
        } else if(j>0 && j < matrix.length- 1) { 
          result[i][j] += [matrix[i+1][j],matrix[i][j+1],matrix[i+1][j+1],matrix[i+1][j-1],matrix[i][j-1],matrix[i-1][j],matrix[i-1][j-1],matrix[i-1][j+1]].filter((x)=>!!x).length;
        } else if(j == matrix.length - 1) { 
          result[i][j] += [matrix[i+1][j],matrix[i][j-1],matrix[i+1][j-1],matrix[i-1][j],matrix[i-1][j-1]].filter((x)=>!!x).length;
        } 
      } else if(i == matrix.length - 1) {
        if(j == 0){
          result[i][j] += [matrix[i][j+1],matrix[i-1][j+1],matrix[i-1][j]].filter((x)=>!!x).length;
        } else if(j>0 && j < matrix.length- 1) {
          result[i][j] += [matrix[i][j-1],matrix[i][j+1],matrix[i-1][j],matrix[i-1][j-1],matrix[i-1][j+1]].filter((x)=>!!x).length;
        } else if(j == matrix.length - 1) {
          result[i][j] += [matrix[i][j-1],matrix[i-1][j-1],matrix[i-1][j]].filter((x)=>!!x).length;
        }
      }
      
    }
  }
  return result;
} 
module.exports = {
  minesweeper
};
