apiResponseTemplate = (message, data, contextOut = [], source = 'webhook') => {
    let apiResponse = {
        speech: message,
        displayText: message,
        data:{
            "google" : {
                "hello": "yes"
            }
        },
        contextOut:contextOut,
        source:source
    }
    return apiResponse;
}

module.exports = { 
    apiResponseTemplate
};