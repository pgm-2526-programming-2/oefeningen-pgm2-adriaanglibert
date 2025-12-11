const { getData } = require("../utils/file.utils");

function getAllQuotes(req, res) {
    res.json(getData('quotes.json'));
}

module.exports = {
    getAllQuotes
}