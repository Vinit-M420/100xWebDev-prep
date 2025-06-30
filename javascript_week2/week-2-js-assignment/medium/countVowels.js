/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiou';
    str = str.toLowerCase();
    
    for (let i =0; i<str.length ; i++){
      for (let j=0; j<=vowels.length;j++){
        if (str.split('')[i] === vowels.split('')[j]){
          count = count + 1;
        }
      }
    }
    //console.log(count)
    return count;
}

// console.log('vinit'.split(''));
// countVowels('vinit');

module.exports = countVowels;

