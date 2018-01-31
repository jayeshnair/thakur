const helper = require('./../helper')

getSearchResults = (req, res) => {
    const data = req.body;
    const searchResults = helper.searchResults(data, (error, apiData) => {
        console.log(apiData);
        console.log("##########################################################################");
        // if(typeof apiData === 'undefined') {
            let apiResponce = helper.apiResponseTemplate('Showing results', apiData);
            res.json(apiResponce);
            console.log("##########################################################################");
        // }
    });
}

module.exports = getSearchResults;