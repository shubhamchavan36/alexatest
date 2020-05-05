const rp = require('request-promise');
const quoteHelper = {};

quoteHelper.getQuote = function(){
    return rp('https://jsonplaceholder.typicode.com/todos/1');

}

module.exports = quoteHelper;