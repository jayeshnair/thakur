const request = require('request');
const config = require('./../config/config');

getCategory = (cat) => {
    let category = (cat) ? cat.split(".").map(function (val) { return val }) : " ";
    return category[1];
}

generateApiUrl = (location, category, brand) => {
    if(brand == 'honda') {
        searchUrl = `${config.endpoint.baseUrl}${location}/${category}/cars-${brand}/?json=1`;
    }
    else {
        searchUrl = `${config.endpoint.baseUrl}${location}/${category}/${brand}/?json=1`;
    }
    return searchUrl;
}

getSearchResult = (url, callback) => {
    request( url, { json: true }, (error, res, body) => {
        if (error || res.statusCode !== 200) {
            return callback(error || {statusCode: res.statusCode});
        }
        callback(null, body);  
    });
};

searchResults = (data, callback) => {
    const catData = data.result.action;
    const category = getCategory(catData);
    const location = data.result.parameters.location ? data.result.parameters.location : "";
    const brand = data.result.parameters.brand ? `${data.result.parameters.brand}` : "";
    const url = generateApiUrl(location, category, brand);
    const results = getSearchResult(url, (err, body) => {
        if (err) {
            return callback(err);
        }
        console.log(body);
        callback(null, body);
    });
}

module.exports = { 
    searchResults
};