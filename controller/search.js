const helper = require('./../helper')

getSearchResults = (req, res) => {
    const data = req.body;
    const searchResults = helper.searchResults(data, (error, body) => {
        let apiResponce = helper.apiResponseTemplateDef('Showing results', body);
        if (Object.keys(body).length) {
            apiResponce = helper.apiResponseTemplate('Showing results', body);
        }
        
        res.send(apiResponce);
    });
}

module.exports = getSearchResults;