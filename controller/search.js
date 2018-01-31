const helper = require('./../helper')

getSearchResults = (req, res) => {
    const data = req.body;
    const searchResults = helper.searchResults(data, (error, apiData) => {
        let apiResponce = helper.apiResponseTemplate('Showing results', apiData);
        setTimeout(() => { 
            res.json(apiResponce);
        }, 2000);
    });
}

module.exports = getSearchResults;