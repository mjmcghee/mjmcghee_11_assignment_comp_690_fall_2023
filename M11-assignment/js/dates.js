//STEP 1
// const daysInMonth = (year, month) => {
//     return new Date(year, month, 0).getDate()
// }
// let d = new Date()
// let yearInput = prompt("Enter a year (ex. 1999).")
// if (isNaN(yearInput)) {
//     console.log('Enter a valid year (ex. 1999).')
//     throw new Error("Enter a valid year (ex. 1999).")
// } else {
//     console.log(yearInput)
// }
// let monthInput = Number(prompt("Enter the month (1-12).")) - 1
// if (monthInput > 11 || isNaN(monthInput)) {
//     console.log('Enter a valid month! (1-12)')
//     throw new Error("Enter a valid month. (1-12)")
// } else {
//     console.log(monthInput)
// }
// console.log(`There are ${daysInMonth(yearInput,monthInput)} days in the ${monthInput} month in the year ${yearInput}.`)

//STEP 2
// let yearInput = prompt("Enter a year (ex. 1999).")
// if (isNaN(yearInput)) {
//     console.log('Enter a valid year (ex. 1999).')
//     throw new Error("Enter a valid year (ex. 1999).")
// } else {
//     console.log(yearInput)
// }
// let monthInput = Number(prompt("Enter the month (1-12).")) - 1
// if (monthInput > 11 || isNaN(monthInput)) {
//     console.log('Enter a valid month! (1-12)')
//     throw new Error("Enter a valid month. (1-12)")
// } else {
//     console.log(monthInput)
// }
// let dateInput = prompt("Enter the date (1-31).")
// if (dateInput > 31 || isNaN(monthInput)) {
//     console.log('Enter a valid date! (1-31)')
//     throw new Error("Enter a valid date. (1-31)")
// } else {
//     console.log(dateInput)
// }
// let d = new Date(yearInput,monthInput,dateInput)
// console.log(d.toDateString().slice(4,7))

//STEP 3
// let yearInput = prompt("Enter a year (ex. 1999).")
// if (isNaN(yearInput)) {
//     console.log('Enter a valid year (ex. 1999).')
//     throw new Error("Enter a valid year (ex. 1999).")
// } else {
//     console.log(yearInput)
// }
// let monthInput = Number(prompt("Enter the month (1-12).")) - 1
// if (monthInput > 11 || isNaN(monthInput)) {
//     console.log('Enter a valid month! (1-12)')
//     throw new Error("Enter a valid month. (1-12)")
// } else {
//     console.log(monthInput)
// }
// let dateInput = prompt("Enter the date (1-31).")
// if (dateInput > 31 || isNaN(monthInput)) {
//     console.log('Enter a valid date! (1-31)')
//     throw new Error("Enter a valid date. (1-31)")
// } else {
//     console.log(dateInput)
// }
// let d = new Date(yearInput,monthInput,dateInput)
// if (d.getDay() == 0 || d.getDay() == 6) {
//     console.log(`Hooray! It's the weekend!`)
// } else {
//     console.log('That day is a weekday...bummer...')
// }

//STEP 4
// let yearInput = prompt("Enter a year (ex. 1999).")
// if (isNaN(yearInput)) {
//     console.log('Enter a valid year (ex. 1999).')
//     throw new Error("Enter a valid year (ex. 1999).")
// } else {
//     console.log(yearInput)
// }
// let monthInput = Number(prompt("Enter the month (1-12).")) - 1
// if (monthInput > 11 || isNaN(monthInput)) {
//     console.log('Enter a valid month! (1-12)')
//     throw new Error("Enter a valid month. (1-12)")
// } else {
//     console.log(monthInput)
// }
// let dateInput = prompt("Enter the date (1-31).")
// if (dateInput > 31 || isNaN(monthInput)) {
//     console.log('Enter a valid date! (1-31)')
//     throw new Error("Enter a valid date. (1-31)")
// } else {
//     console.log(dateInput)
// }
// let yesterday = Number(dateInput) - 1
// let lastMonth = Number(monthInput) - 1
// if (yesterday == 0 && Number(monthInput) == 0) {
//     yesterday = 31
//     lastMonth = 11
// } else  if (yesterday == 0) {
//         yesterday = 31
//     }

// let td
// let yd

// if (dateInput == 0 && Number(monthInput) == 0) {
//     td = new Date(yearInput,monthInput,dateInput)
//     yd = new Date(yearInput,lastMonth,yesterday)
// } else if (yesterday == 31) {
//     td = new Date(yearInput,monthInput,dateInput)
//     yd = new Date(yearInput,lastMonth,yesterday)
// } else {
//     td = new Date(yearInput,monthInput,dateInput)
//     yd = new Date(yearInput,monthInput,yesterday)
// }

// console.log(`Today is ${td.toDateString().slice(0,3)}.`)
// console.log(`Yesterday was ${yd.toDateString().slice(0,3)}.`)

//STEP 5
// let yearInput = prompt("Enter a year (ex. 1999).")
// if (isNaN(yearInput)) {
//     console.log('Enter a valid year (ex. 1999).')
//     throw new Error("Enter a valid year (ex. 1999).")
// } else {
//     console.log(yearInput)
// }
// let monthInput = Number(prompt("Enter the month (1-12).")) - 1
// if (monthInput > 11 || isNaN(monthInput)) {
//     console.log('Enter a valid month! (1-12)')
//     throw new Error("Enter a valid month. (1-12)")
// } else {
//     console.log(monthInput)
// }
// let dateInput = prompt("Enter the date (1-31).")
// if (dateInput > 31 || isNaN(monthInput)) {
//     console.log('Enter a valid date! (1-31)')
//     throw new Error("Enter a valid date. (1-31)")
// } else {
//     console.log(dateInput)
// }
// let d = new Date(yearInput,monthInput,dateInput)
// console.log(d.toDateString())
// console.log(d.toDateString().slice(0,1))