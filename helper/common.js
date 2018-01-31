apiResponseTemplate = (message, data, contextOut = [], source = 'webhook') => {
    let apiResponse = {
        speech: message,
        displayText: message,
        data:{
            "google" : { 
                "test": {
                    "test":"helper/search.js",
                    "test2": "test2"
                },
                "test2": "test2"
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