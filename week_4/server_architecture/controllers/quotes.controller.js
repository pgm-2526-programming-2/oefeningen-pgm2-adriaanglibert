const { getData } = require("../utils/file.utils");

function getAllQuotes(req, res) {
    try {
        res.json(getData('quotes.json'));
    } catch (error) {
        res.status(500);
        res.send(`Er ging iets mis: ${error.message}`);
    }
}

function getQuoteById(req, res) {
    // Params - Komt uit het endpoint, query komt van uit request.
    // console.log(req.params, req.query);
    const { questionId } = req.params; // const questionId = req.params.questionId;
    // Neem alle quotes - array
    const allQuotes = getData('quotes.json');
    // Zoeken in array? .find()
    const quoteWithId = allQuotes.find(quote => quote.id == questionId);
    // Response -> resultaat
    res.json(quoteWithId);
}

module.exports = {
    getAllQuotes,
    getQuoteById
}