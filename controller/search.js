const helper = require('./../helper')

getSearchResults = (req, res) => {
    const data = req.body;
    const searchResults = helper.searchResults(data, (error, body) =>{
        res.send(body)
    });
}

module.exports = getSearchResults;