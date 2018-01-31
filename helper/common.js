apiResponseTemplate = (message, data, contextOut = [], source = 'webhook') => {
    let apiResponse = {
        speech: message,
        displayText: message,
        data:{
            "google" : {
                "0": {
                    "id": "1175759845",
                    "title": "Hyundai Grand I10 Sportz 1.2 Kappa Vtvt, 2016, Petrol",
                    "image": "https://img01.olx.in/images_olxin/481354709_1_644x461_hyundai-grand-i10-sportz-12-kappa-vtvt-2016-petrol-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-grand-i10-sportz-1-2-kappa-vtvt-2016-petrol-ID1hzmQt.html"
                }
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