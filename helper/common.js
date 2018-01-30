apiResponseTemplate = (message, data, contextOut = [], source = 'webhook') => {
    let apiResponse = {
        speech: message,
        displayText: message,
        data:{
            data: data
        },
        contextOut:contextOut,
        source:source
    }
    return apiResponse;
}

module.exports = { 
    apiResponseTemplate
};