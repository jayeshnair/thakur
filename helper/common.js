apiResponseTemplate = (message, data, contextOut = [], source = 'webhook') => {
    let apiResponse = {
        "speech": message,
        "displayText": message,
        "data":{
            "google" : {"google": {
                "0": {
                    "id": "1168038817",
                    "title": "Hyundai Verna Fluidic 1.6 Crdi Ex, 2013, Diesel",
                    "image": "https://img01.olx.in/images_olxin/481582403_1_644x461_hyundai-verna-fluidic-16-crdi-ex-2013-diesel-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-verna-fluidic-1-6-crdi-ex-2013-diesel-ID1h2YfL.html"
                },
                "1": {
                    "id": "1147665695",
                    "title": "Hyundai Elite I20 Sportz 1.2, 2016, Petrol",
                    "image": "https://img01.olx.in/images_olxin/480022405_1_644x461_hyundai-elite-i20-sportz-12-2016-petrol-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-elite-i20-sportz-1-2-2016-petrol-ID1fFuh1.html"
                },
                "2": {
                    "id": "1174707833",
                    "title": "Hyundai Creta 1.6 Sx Plus Auto, 2016, Petrol",
                    "image": "https://img01.olx.in/images_olxin/477400305_1_644x461_hyundai-creta-16-sx-plus-auto-2016-petrol-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-creta-1-6-sx-plus-auto-2016-petrol-ID1huXax.html"
                },
                "3": {
                    "id": "1171595611",
                    "title": "Hyundai Santro Xing Gl, 2005, Petrol",
                    "image": "https://img01.olx.in/images_olxin/482035383_1_644x461_hyundai-santro-xing-gl-2005-petrol-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-santro-xing-gl-2005-petrol-ID1hhTxp.html"
                },
                "4": {
                    "id": "1172503679",
                    "title": "2004 Hyundai Santro Xing petrol 71000 Kms",
                    "image": "https://img01.olx.in/images_olxin/473119795_1_644x461_2004-hyundai-santro-xing-petrol-71000-kms-mumbai.jpg",
                    "url": "https://www.olx.in/item/2004-hyundai-santro-xing-petrol-71000-kms-ID1hlHLF.html"
                },
                "5": {
                    "id": "1177206637",
                    "title": "Hyundai Santro cng 68000 Kms 2001 year",
                    "image": "https://img01.olx.in/images_olxin/482030977_1_644x461_hyundai-santro-cng-68000-kms-2001-year-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-santro-cng-68000-kms-2001-year-ID1hFrdP.html"
                },
                "6": {
                    "id": "1174726317",
                    "title": "Hyundai Verna Fluidic 1.6 Crdi Sx, 2013, Diesel",
                    "image": "https://img01.olx.in/images_olxin/482036045_1_644x461_hyundai-verna-fluidic-16-crdi-sx-2013-diesel-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-verna-fluidic-1-6-crdi-sx-2013-diesel-ID1hw1YF.html"
                },
                "7": {
                    "id": "1176144751",
                    "title": "Hyundai Grand I10 Asta At 1.2 Kappa Vtvt, 2015, Petrol",
                    "image": "https://img01.olx.in/images_olxin/482036959_1_644x461_hyundai-grand-i10-asta-at-12-kappa-vtvt-2015-petrol-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-grand-i10-asta-at-1-2-kappa-vtvt-2015-petrol-ID1hAYYD.html"
                },
                "8": {
                    "id": "1175136601",
                    "title": "Hyundai I20 Asta 1.2, 2014, Petrol",
                    "image": "https://img01.olx.in/images_olxin/482038377_1_644x461_hyundai-i20-asta-12-2014-petrol-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-i20-asta-1-2-2014-petrol-ID1hvKI9.html"
                },
                "9": {
                    "id": "1171594919",
                    "title": "Hyundai I20 Sportz 1.2, 2012, Petrol",
                    "image": "https://img01.olx.in/images_olxin/482036867_1_644x461_hyundai-i20-sportz-12-2012-petrol-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-i20-sportz-1-2-2012-petrol-ID1hhTmf.html"
                },
                "10": {
                    "id": "1163583573",
                    "title": "Hyundai I10 Magna, 2010, Cng",
                    "image": "https://img01.olx.in/images_olxin/477429509_1_644x461_hyundai-i10-magna-2010-cng-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-i10-magna-2010-cng-ID1gKheZ.html"
                },
                "11": {
                    "id": "1177199939",
                    "title": "Hyundai Santro Xing petrol 58000 Kms 2006 year",
                    "image": "https://img01.olx.in/images_olxin/482018047_1_644x461_hyundai-santro-xing-petrol-58000-kms-2006-year-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-santro-xing-petrol-58000-kms-2006-year-ID1hFptN.html"
                },
                "12": {
                    "id": "1174735455",
                    "title": "Hyundai I10 Asta 1.2 At Kappa2 With Sunroof, 2011, Petrol",
                    "image": "https://img01.olx.in/images_olxin/477347119_1_644x461_hyundai-i10-asta-12-at-kappa2-with-sunroof-2011-petrol-mumbai.jpg",
                    "url": "https://www.olx.in/item/hyundai-i10-asta-1-2-at-kappa2-with-sunroof-2011-petrol-ID1hw4m3.html"
                }
            }}
        },
        "contextOut": contextOut,
        "source":source
    }
    return apiResponse;
}

module.exports = { 
    apiResponseTemplate
};