const request = require('request');
const config = require('./../config/config');

getCategory = (cat) => {
    let category = (cat) ? cat.split(".").map(function (val) { return val }) : " ";
    return category[1];
}

generateUrl = type => {
    let url = '';
    if (type == 'otp') {
        url = `${config.endpoint.baseUrl}/ajax/account/otplogin/?json=1`;
    }
    else if(type == 'verify') {
        url = `${config.endpoint.baseUrl}/ajax/account/otploginverify/?json=1`;
    }
    return url;
}

getLoginOtpResult = (url, userPhone, userToken, callback) => {
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
    const url = generateUrl('otp');
    const results = getLoginOtpResult(url, userPhone, userToken, (err, body) => {
        console.log(body);
        if (err) {
            return callback(err);
        }
        callback(null, body);
    });
}

getConfirmOtpResult = (url, hash, password, phone, userToken, callback) => {
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
                hash,
                'data[phone]': phone,
                'data[password]': password
            },
            json: true
        },
        (error, res, body) => {
            if (error || res.statusCode !== 200) {
                return callback(error || {statusCode: res.statusCode});
            }
            callback(null, body);
        }
    );
};

confirmOtpResults = (data, callback) => {
    const phone = data.phone;
    const hash = data.hash;
    const password = data.password;
    const userToken = data.token;
    const url = generateUrl('verify');
    const results = getConfirmOtpResult(url, hash, password, phone, userToken, (err, body) => {
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