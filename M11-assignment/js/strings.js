//STEP 1
// let userName = prompt("What is your name?")
// let charLength = userName.length
// alert(`Your name has ${charLength} letters!`)

//STEP 2
// let userName = prompt("What is your name?")
// let charLength = userName.length
// let charPos = prompt(`Pick a number between 0 and ${charLength-1}`)
// let letter = userName.charAt(charPos)
// alert(`The letter at ${charPos} is ${letter}`)

//STEP 3
// let firstName = prompt("What is your first name?")
// let lastName = prompt("What is your last name?")
// let fullName =  firstName.concat(' ',lastName)
// alert(`Your name is: ${fullName}`)

//STEP 4
// let foxy = "The quick brown fox jumps over the lazy fox."
// let index = foxy.indexOf('fox')
// alert(foxy)
// alert(`The first instance of the word 'fox' is at ${index}.`)

//STEP 5
// let foxy = "The quick brown fox jumps over the lazy fox."
// let index = foxy.lastIndexOf('fox')
// alert(foxy)
// alert(`The last instance of the word 'fox' is at ${index}.`)

//STEP 6
// let foxy = "The quick brown fox jumps over the lazy dog."
// alert(foxy)
// let fullName = prompt('What is your full name?')
// alert(foxy.replace('the lazy dog', fullName))

//STEP 7
// let foxy = "The quick brown fox jumps over the lazy dog."
// alert(foxy)
// let wordSearch = prompt('What word do you want to query?')
// let wordIndex = foxy.search(wordSearch) 
// if (wordIndex !== -1) {
//     alert(`${wordSearch} is located at index ${wordIndex}.`)
// } else {
//     alert(`${wordSearch} is not in the sentence.`)
// }

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog."
// alert(old_string)
// let index = old_string.indexOf('the lazy dog')
// alert(index)
// let new_string = old_string.slice(index)
// alert(new_string.toUpperCase())

//STEP 9
// let upperCaseString = "     THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG     "
// alert(upperCaseString)
// let formatString = upperCaseString.trim().toLowerCase()
// alert(formatString)

//STEP 10
// let quote = 'the quick brown fox jumps over the lazy dog!'
// alert(quote)
// const capitalize = (string) => {
//     return string[0].toUpperCase() + string.slice(1);
// }
// let caps = capitalize(quote)
// alert(caps)