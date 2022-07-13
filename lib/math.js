/**
 * Title: Utilities of math library
 * Description: Allow to get random number between range
 * Author: Hasibul Islam
 * Date: 13 July, 2022
 */

// Math object - module scaffolding
const math = {};

// get a random integer number between a range of minimum and maximum number
// exact random number reference: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
math.getIntegerRandomNumber = function getIntegerRandomNumber(minimumInteger, maximumInteger) {

    // store arguments to temporary variables
    const minimumIntegerNumber = minimumInteger;
    const maximumIntegerNumber = maximumInteger;

    // validate arguments whether they are number or not
    minimumInteger = typeof minimumIntegerNumber === 'number' ? minimumIntegerNumber : 0;
    maximumInteger = typeof maximumIntegerNumber === 'number' ? maximumIntegerNumber : 0;

    // approaching random finding appropriate rule to follow exact range
    const randomIntegerNumber = Math.floor(minimumIntegerNumber + Math.random() * (maximumIntegerNumber - minimumIntegerNumber + 1));

    // return random integer number to the user
    return randomIntegerNumber;
}

// print to console to check whether the function is working or not
// console.log(math.getIntegerRandomNumber(1, 7));

// export the library
module.exports = math;
