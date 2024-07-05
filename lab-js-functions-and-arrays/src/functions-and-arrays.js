// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2) {
    if (value1 > value2) {
        return value1
    } else {
        return value2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsToCheck) {

    if (wordsToCheck.length === 0) {
        return null
    }

    let longestOne = ''

    wordsToCheck.forEach((eachWord) => {
        if (eachWord.length > longestOne.length) {
            longestOne = eachWord
        }
    })

    return longestOne
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersToSum) {

    let sum = 0

    numbersToSum.forEach(function (eachNumber) {
        sum += eachNumber
    })

    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {

    if (numbers.length === 0) {
        return 0
    }

    const total = sumNumbers(numbers)

    const average = total / numbers.length

    return average
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToCheck) {

    if (words.length === 0) {
        return null
    }

    const isIncluded = words.includes(wordToCheck)

    return isIncluded
}
