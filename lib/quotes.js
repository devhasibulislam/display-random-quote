/**
 * Title: Utilities of quotes library
 * Description: Get all stored quotes at array form
 * Author: Hasibul Islam
 * Date: 13 June, 2022
 */

// add builtin dependency
const fs = require('fs');

// Quote object - module scaffolding
const quotes = {};

// get all quotes as an array form
quotes.getAllQuotes = function getAllQuotes() {

    // read text file containing quotes
    const quoteFileContents = fs.readFileSync(`${__dirname}/quotes.txt`, "utf-8");

    // convert strings into array
    const arrayOfQuotes = quoteFileContents.split(/\r?\n/);

    // return array of quotes to the user
    return arrayOfQuotes;
}

// print to console to check whether the function is working or not
// console.log(quotes.getAllQuotes());

module.exports = quotes;
