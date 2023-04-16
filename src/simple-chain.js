const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],
  getLength() {
     return this.arr.length;
  },
  addLink(value) { 
    if(typeof value === undefined) this.arr.push('');  
    else this.arr.push(String(value));
     
    return  this; 
  },
  removeLink(position) {
    try{
      if(!!position && !!this.arr[position - 1]) this.arr.splice(position - 1,1);
      else { this.arr = [];throw new Error('You can\'t remove incorrect link!'); }
      return this;
    } catch(er){
      throw new Error(er.message); 
    }
  },
  reverseChain() {
     this.arr = this.arr.reverse();
     return this;
  },
  finishChain() {
     let result = '( '+this.arr.join(' )~~( ') + ' )';
     this.arr = [];
     return result;
  }
}; 
module.exports = {
  chainMaker
};
