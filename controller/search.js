const helper = require('./../helper')

getSearchResults = (req, res) => {
    const data = req.body;
    const searchResults = helper.searchResults(data, (error, apiData) => {
        console.log(apiData);
        console.log("##########################################################################");
        let apiResponce = helper.apiResponseTemplate('Showing results', apiData);
        console.log(apiResponce);
        res.json(apiResponce);
        console.log("##########################################################################");
    });
}

module.exports = getSearchResults;