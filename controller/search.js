getSearchResults = (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
}

module.exports = getSearchResults;