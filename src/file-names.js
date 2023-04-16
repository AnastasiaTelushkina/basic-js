const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let files = {};
  let result = [];
  for (item of names){
    if(!!files[item]){
      files[item]++; 
      let newFile = item + `(${files[item] - 1})`
      result.push(newFile);
      files[newFile] = 1;
    }else{ 
      files[item] = 1; 
      result.push(item);
    }
  } 
  return result;
}
console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))
module.exports = {
  renameFiles
};
