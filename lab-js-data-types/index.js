/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const result = `${s1} ${s2} ${s3} ${s4} ${s5}`

// Print out the concatenated string
console.log(result)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const lastLetterPart1 = part1.charAt(3)
const lastLetterPart2 = part2.charAt(5)

const uppercased1 = lastLetterPart1.toUpperCase()
const uppercased2 = lastLetterPart2.toUpperCase()

const firstPart1 = part1.substring(0, 3)
const firstPart2 = part2.substring(0, 5)

const finalResult = `${firstPart1}${uppercased1}${firstPart2}${uppercased2}`

console.log(finalResult)





/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

const tip = billTotal * .15

console.log(billTotal)




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/


const randomNumber = Math.random() * 10 + 1
const floored = Math.floor(randomNumber)

console.log(floored)