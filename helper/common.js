apiResponseTemplate = (message, data, contextOut = [], source = 'webhook') => {
    const botResponse = {
        text: "Testing",
        attachments: data
    }
    
    const apiResponse = {
        speech: message,
        displayText: message,
        data:{
            google : botResponse
        },
        "contextOut": contextOut,
        "source":source
    }
    return apiResponse;
}

module.exports = { 
    apiResponseTemplate
};