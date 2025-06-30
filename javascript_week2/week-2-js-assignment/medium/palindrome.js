/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
    //console.log(1);
    return true;
  } else {
    //console.log(0);
    return false;
  }
}


module.exports = isPalindrome;

// expect(isPalindrome('hello')).toBe(false);
//          |                                            ^
//       11 |              expect(isPalindrome('openai')).toBe(false);
//       12 |              expect(isPalindrome('abcde')).toBe(false);
//       13 |      });