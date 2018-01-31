apiResponseTemplate = (message, data, contextOut = [], source = 'webhook') => {
    let apiResponse = {
        speech: message,
        displayText: message,
        data:{
            "google" : "bbb "+Object.keys(data).length
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
        data: {
            "google": {
                "0": {
                    "id": "aaa "+Object.keys(data).length
                }
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