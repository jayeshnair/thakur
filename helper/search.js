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
toObject = (arr) =>  {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
}

createApiData = (arr) => {
    let adData = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        adData[i] = {
            "id": arr[i].id,
            "title": arr[i].title,
            "image": arr[i].photos[0][0],
            "url": arr[i].url
        }
    }
    return adData = toObject(adData);
}

getSearchResult = (url, callback) => {
    request( url, { json: true }, (error, res, body) => {
        if (error || res.statusCode !== 200) {
            return callback(error || {statusCode: res.statusCode});
        }
        let apiData = createApiData(body.ads);
        console.log(typeof apiData);
        callback(null, apiData);  
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
        callback(null, body);
    });
}

module.exports = { 
    searchResults
};