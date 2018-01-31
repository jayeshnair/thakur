const helper = require('./../helper')

getSearchResults = (req, res) => {
    const data = req.body;
    const searchResults = helper.searchResults(data, (error, apiData) => {
        if(Object.keys(apiData).length !== 0 ) {
            let apiResponce = helper.apiResponseTemplate('Showing results', apiData);
            res.json(apiResponce);
        }
    });
}

module.exports = getSearchResults;