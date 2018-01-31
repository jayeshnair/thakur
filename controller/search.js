const helper = require('./../helper')

getSearchResults = (req, res) => {
    const data = req.body;
    const searchResults = helper.searchResults(data, (error, body) => {
        let apiResponce = helper.apiResponseTemplate('Showing results', body);
        res.json(apiResponce);
    });
}

module.exports = getSearchResults;