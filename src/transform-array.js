const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) { 
  try {
    if (!Array.isArray(arr))
      throw new Error("\'arr\' parameter must be an instance of the Array!");
    else { 
      let newArr = arr.slice(0);
      for (let i = 0; i < newArr.length; i++) {
        //console.log(newArr[i])
        if (newArr[i] == "--discard-next" && i != newArr.length - 1) {
          if (
            newArr[i + 2] == "--double-prev" ||
            newArr[i + 2] == "--discard-prev"
          )
            newArr.splice(i, 3);
          else newArr.splice(i, 2);
          i--;
        } else if (newArr[i] == "--discard-prev" && i != 0) {
          newArr.splice(i - 1, 2);
        } else if (newArr[i] == "--double-next" && i != newArr.length - 1) {
          newArr.splice(i, 1, newArr[i + 1]);
        } else if (newArr[i] == "--double-prev" && i != 0) {
          newArr.splice(i, 1, newArr[i - 1]);
        }
        if (
          i == 0 &&
          (newArr[i] == "--double-prev" || newArr[i] == "--discard-prev")
        )
          newArr.splice(0, 1);
        if (
          i == newArr.length - 1 &&
          (newArr[i] == "--double-next" || newArr[i] == "--discard-next")
        )
          newArr.pop();
        //console.log(newArr)
      }
      return newArr;
    }
  } catch (er) {
    throw new Error(er.message);
  }
}
 
module.exports = {
  transform,
};
