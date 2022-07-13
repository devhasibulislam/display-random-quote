/**
 * Title: Simple NodeJS applicaton
 * Description: Node application that display random quotes per interval
 * Author: Hasibul Islam
 * Date: 13 July, 2022
 */

// adding custom dependencies
const math = require('./lib/math');
const quotes = require('./lib/quotes');

// App object - module scaffolding
const app = {};

// time duration configuration
app.timeBetweenQuotes = {
    duration: 1000
};

app.getRandomQuote = function getRandomQuote() {
    // get all quotes as an array form
    const quotesArray = quotes.getAllQuotes();

    // get length of the consuming array
    const lengthOfQuotesArray = quotes.getAllQuotes().length;

    // get a random integer number as index
    const randomQuoteIndex = math.getIntegerRandomNumber(1, lengthOfQuotesArray);

    // get a quote based on random index
    const quote = quotesArray[randomQuoteIndex - 1];

    // display the random quote to the display
    console.log(quote);

    // add a separator to recognize each quote
    console.log('----------');
}

// function that call getRandomQuote infinite time to execute
app.displayRandomQuoteInfinitely = function displayRandomQuoteInfinitely() {

    // create an interval to identify each quote execute properly
    setInterval(app.getRandomQuote, app.timeBetweenQuotes.duration);
}

// call infinite looping function as displayRandomQuoteInfinitely
app.displayRandomQuoteInfinitely();
