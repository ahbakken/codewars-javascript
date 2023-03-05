// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words reversed 
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
function spinWords(string){
  const myArray = string.split(' ');
  let revArray = []
  myArray.map(word => {
    if (word.length >= 5) {
      revArray.push(word.split('').reverse().join(''))
    }
    else { revArray.push(word) }
  })
  return revArray.join(' ')
}

spinWords("Hey fellow warriors") // "Hey wollef sroirraw"
console.log(spinWords("Hey fellow warriors"))