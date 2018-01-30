apiResponseTemplate = (message, data, contextOut = [], source = 'webhook') => {
    let apiResponse = {
        speech: message,
        displayText: message,
        data:data,
        contextOut:contextOut,
        source:source
    }
    console.log(apiResponse);
    return apiResponse;
}

module.exports = { 
    apiResponseTemplate
};