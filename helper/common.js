apiResponseTemplate = (message, data, contextOut = [], source = 'webhook') => {
    let apiResponse = {
        speech: message,
        displayText: message,
        data:{
            "google" : data
        },
        contextOut:contextOut,
        source:source
    }
    return apiResponse;
}

apiResponseTemplateDef = (message, data, contextOut = [], source = 'webhook') => {
    let apiResponse = {
        speech: message,
        displayText: message,
        data:{
            "google" : {
                "test": "test"
            }
        },
        contextOut:contextOut,
        source:source
    }
    return apiResponse;
}

module.exports = { 
    apiResponseTemplate,
    apiResponseTemplateDef
};