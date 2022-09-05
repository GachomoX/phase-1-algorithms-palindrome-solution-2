function isPalindrome(word) {
  // Write your algorithm here
  for(let i=0; i<word.length/2; i++){
    const j = word.length-1-i;
    const startChar = word[i];
    const endChar = word[j];
    if (word[i]!==word[j]) return false;
  }
  return true;
}
isPalindrome('dad')

/* 
  Add your pseudocode here
   meaaning that the first letter compares with the last letter,second letteris the same
   as the second to last letter e.t.c
  iterate  from the begginning  to the middle
  check each letter to the correponding letter from the end
  if any letter don't much , return false
*/

/*
  Add written explanation of your solution here
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;