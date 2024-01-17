//STEP 1
// const alphabetical = (wordInput) => {
//     // console.log('Function Start')
//     return wordInput.split("").sort().join("")
// }

// let userInput = prompt('Enter a word.')

// console.log(alphabetical(userInput))

//STEP 2
// let quote = 'the quick brown fox jumps over the lazy dog!'
// console.log(quote)
// let breakdown = quote.split(" ")
// console.log(breakdown)
// let caps = []
// const capitalize = (string) => {
//     caps.push(string[0].toUpperCase() + string.slice(1))
// }
// for (let i of breakdown) {
//     capitalize(i)
// }
// console.log(caps.join(" "))

//STEP 3
// let quote = 'the quick brown fox jumps over the lazy dog!'
// console.log(quote)
// let breakdown = quote.split(" ")
// let vowelCount = 0
// // let caps = []
// const vowels = (string) => {
//     for (let i of string) {
//         if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
//             vowelCount += 1
//         }
//     }
//     return vowelCount
// }
// console.log(vowels(quote))

//STEP 4
// const randomNum = () => {
//     let userInput = prompt("How long do you want to random string to be? (Input a number between 1-10.)")
//     if (isNaN(userInput) || userInput < 1 || userInput > 10) {
//         alert("Enter a valid number!")
//         randomNum();
//     } else {
//         let newArr = []
//         let randomChar = Math.random().toString(36)
//         for (let i of randomChar.split("")) {
//              if (Number(i) == typeof 'number') {
//                 newArr.push(String.fromCharCode(Number(i)+96))
//             } else {
//                 newArr.push(i)
//             }
//         }
//         newString = newArr.join("")
//         console.log(newString.slice(2,2+Number(userInput)))
//     }
// }

// randomNum()


//STEP 5
// let countryList = []
// let again
// let longest = 0
// let longestCountry

// const moveOn = () => {
//     toContinue = prompt('Enter another country? (y or n)').toLowerCase()
//     if (toContinue == 'y' || toContinue == 'n') {
//         return toContinue
//     } else {
//         console.log("Select 'y' or 'n'!")
//         toContinue = ""
//         moveOn()
//     }
// }

// do {
//     let userInput = prompt('Enter a country name.')
//     countryList.push(userInput)
//     again = moveOn()
//     console.log(again)
//     console.log(countryList)
// } while (again != 'n')

// for (let country of countryList) {
//     if (longest < country.length) {
//         longest = country.length
//         longestCountry = country
//     }
// }

// console.log(longestCountry)