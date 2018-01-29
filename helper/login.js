const request = require('request');
const config = require('./../config/config');

getCategory = (cat) => {
    let category = (cat) ? cat.split(".").map(function (val) { return val }) : " ";
    return category[1];
}

generateUrl = () => {
    return `${config.endpoint.baseUrl}${location}/ajax/account/otplogin/?json=1`;
}

getLoginOtpResult = (url, userPhone, userToken callback) => {
    let searchResults = {};

    request.post(
        {
            method: 'POST',
            uri: url,
            headers: {
                'User-Agent': 'iPhone App Ver 5.0.1 / Mozilla/5.0 (iPhone; U; CPU iPhone OS 11_2_2 like Mac OS X; en-us) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D5145e',
                'content-type': 'application/json',
                'API-Version': '1.982',
                'token': userToken
            },
            formData: {
                phone: userPhone
            }
        },
        (error, res, body) => {
            if (error || res.statusCode !== 200) {
                return callback(error || {statusCode: res.statusCode});
            }
            callback(null, body);
        }
    );
};

loginOtpResults = (data, callback) => {
    const userPhone = data.phone;
    const userToken = data.token;
    const url = generateUrl();
    const results = getLoginOtpResult(url, userPhone, userToken, (err, body) => {
        console.log(body);
        if (err) {
            return callback(err);
        }
        callback(null, body);
    });
}

getConfirmOtpResult = (url, callback) => {
    let searchResults = {};
    request( url, { json: true }, (error, res, body) => {
        if (error || res.statusCode !== 200) {
            return callback(error || {statusCode: res.statusCode});
        }
        callback(null, body);
    });
};

confirmOtpResults = (data, callback) => {
    const catData = data.result.action;
    const category = getCategory(catData);
    const location = data.result.parameters.location ? data.result.parameters.location : "";
    const brand = data.result.parameters.brand ? `${data.result.parameters.brand}` : "";
    const url = generateUrl();
    const results = getConfirmOtpResult(url, (err, body) => {
        console.log(body);
        if (err) {
            return callback(err);
        }
        callback(null, body);
    });
}

module.exports = {
    loginOtpResults,
    confirmOtpResults
};