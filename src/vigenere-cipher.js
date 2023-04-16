const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(notReverse) {
    this.notReverse = notReverse;
  }
  encrypt(message, key) { 
    try {
      if (!message || !key) throw new Error("Incorrect arguments!");
      let eng = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      let myKey = "", result = "";
      let i = 0, j = 0;
      let myMessage = message.toUpperCase();
      while (i < myMessage.length) {
        if (eng.indexOf(myMessage[i]) != -1) myKey += key[j++ % key.length].toUpperCase(); 
        else myKey += myMessage[i];i++;
      }
      console.log(myMessage);
      console.log(myKey);
      for (i = 0; i < myMessage.length; i++) {
        let place = eng.indexOf(myMessage[i]);
        let shift = eng.indexOf(myKey[i]);
        let new_place = (place + shift) % (eng.length);
        if (eng.indexOf(myMessage[i]) != -1) {
          result += eng[new_place];
        } else {
          result += myMessage[i];
        }
        //console.log(total);
      }
      if(this.notReverse !== false) return result;
      else return result.split("").reverse().join("");
    } catch (er) {
      throw new Error(er.message);
    }
  }
  decrypt(encryptedMessage, key) {
     
    try {
      if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");
      let eng = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      let myKey = "", result = "";
      let i = 0, j = 0;
      let myMessage = encryptedMessage.toUpperCase();
      while (i < myMessage.length) {
        if (eng.indexOf(myMessage[i]) != -1) myKey += key[j++ % key.length].toUpperCase(); 
        else myKey += myMessage[i];i++;
      }
      console.log(myMessage);
      console.log(myKey);
      for (i = 0; i < myMessage.length; i++) {
        let place = eng.indexOf(myMessage[i]);
        let shift = eng.indexOf(myKey[i]);
        let new_place = (place - shift) % (eng.length);  
        if (eng.indexOf(myMessage[i]) != -1) {
          new_place >= 0 ? result += eng[new_place] : result += eng[eng.length + new_place];
        } else {
          result += myMessage[i];
        }
        //console.log(total);
      }
      if(this.notReverse !== false) return result;
      else return result.split("").reverse().join("");
    } catch (er) {
      throw new Error(er.message);
    }
  }
}
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))
module.exports = {
  VigenereCipheringMachine,
};
