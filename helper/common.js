apiResponseTemplate = (message, data, contextOut = [], source = 'webhook') => {
    let apiResponse = {
        "speech": message,
        "displayText": message,
        "data":{
            "google" : JSON.parse(JSON.stringify(data))
        },
        "contextOut": contextOut,
        "source":source
    }
    return apiResponse;
}

module.exports = { 
    apiResponseTemplate
};