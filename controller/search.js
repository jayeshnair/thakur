const helper = require('./../helper')

getSearchResults = (req, res) => {
    const data = req.body;
    const searchResults = helper.searchResults(data, (error, body) => {
        let apiResponce = helper.apiResponseTemplate('Showing results', body);
        res.send({
            "speech": "Showing results",
            "displayText": "Showing results",
            "data": {
                "google": {
                    "0": {
                        "id": "1144881785",
                        "title": "Hyundai Grand I10 Sports Edition 1.2l Kappa Vtvt, 2015, Cng",
                        "image": "https://img01.olx.in/images_olxin/481837221_1_644x461_hyundai-grand-i10-sports-edition-12l-kappa-vtvt-2015-cng-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-grand-i10-sports-edition-1-2l-kappa-vtvt-2015-cng-ID1ftO3f.html"
                    },
                    "1": {
                        "id": "1168038817",
                        "title": "Hyundai Verna Fluidic 1.6 Crdi Ex, 2013, Diesel",
                        "image": "https://img01.olx.in/images_olxin/481582403_1_644x461_hyundai-verna-fluidic-16-crdi-ex-2013-diesel-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-verna-fluidic-1-6-crdi-ex-2013-diesel-ID1h2YfL.html"
                    },
                    "2": {
                        "id": "1175427135",
                        "title": "Hyundai I10 Magna 1.2 Kappa2, 2012, Cng",
                        "image": "https://img01.olx.in/images_olxin/478659637_1_644x461_hyundai-i10-magna-12-kappa2-2012-cng-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-i10-magna-1-2-kappa2-2012-cng-ID1hxYib.html"
                    },
                    "3": {
                        "id": "1177212339",
                        "title": "2005 Hyundai Santro Xing petrol 35000 Kms",
                        "image": "https://img01.olx.in/images_olxin/482015767_1_644x461_2005-hyundai-santro-xing-petrol-35000-kms-mumbai.jpg",
                        "url": "https://www.olx.in/item/2005-hyundai-santro-xing-petrol-35000-kms-ID1hFsHN.html"
                    },
                    "4": {
                        "id": "1171595611",
                        "title": "Hyundai Santro Xing Gl, 2005, Petrol",
                        "image": "https://img01.olx.in/images_olxin/482035383_1_644x461_hyundai-santro-xing-gl-2005-petrol-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-santro-xing-gl-2005-petrol-ID1hhTxp.html"
                    },
                    "5": {
                        "id": "1172503679",
                        "title": "2004 Hyundai Santro Xing petrol 71000 Kms",
                        "image": "https://img01.olx.in/images_olxin/473119795_1_644x461_2004-hyundai-santro-xing-petrol-71000-kms-mumbai.jpg",
                        "url": "https://www.olx.in/item/2004-hyundai-santro-xing-petrol-71000-kms-ID1hlHLF.html"
                    },
                    "6": {
                        "id": "1177206637",
                        "title": "Hyundai Santro cng 68000 Kms 2001 year",
                        "image": "https://img01.olx.in/images_olxin/482030977_1_644x461_hyundai-santro-cng-68000-kms-2001-year-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-santro-cng-68000-kms-2001-year-ID1hFrdP.html"
                    },
                    "7": {
                        "id": "1174726317",
                        "title": "Hyundai Verna Fluidic 1.6 Crdi Sx, 2013, Diesel",
                        "image": "https://img01.olx.in/images_olxin/482036045_1_644x461_hyundai-verna-fluidic-16-crdi-sx-2013-diesel-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-verna-fluidic-1-6-crdi-sx-2013-diesel-ID1hw1YF.html"
                    },
                    "8": {
                        "id": "1152599617",
                        "title": "Hyundai I20 Sportz 1.2, 2013, Petrol",
                        "image": "https://img01.olx.in/images_olxin/482043249_1_644x461_hyundai-i20-sportz-12-2013-petrol-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-i20-sportz-1-2-2013-petrol-ID1g0bOp.html"
                    },
                    "9": {
                        "id": "1176144751",
                        "title": "Hyundai Grand I10 Asta At 1.2 Kappa Vtvt, 2015, Petrol",
                        "image": "https://img01.olx.in/images_olxin/482036959_1_644x461_hyundai-grand-i10-asta-at-12-kappa-vtvt-2015-petrol-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-grand-i10-asta-at-1-2-kappa-vtvt-2015-petrol-ID1hAYYD.html"
                    },
                    "10": {
                        "id": "1175136601",
                        "title": "Hyundai I20 Asta 1.2, 2014, Petrol",
                        "image": "https://img01.olx.in/images_olxin/482038377_1_644x461_hyundai-i20-asta-12-2014-petrol-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-i20-asta-1-2-2014-petrol-ID1hvKI9.html"
                    },
                    "11": {
                        "id": "1171594919",
                        "title": "Hyundai I20 Sportz 1.2, 2012, Petrol",
                        "image": "https://img01.olx.in/images_olxin/482036867_1_644x461_hyundai-i20-sportz-12-2012-petrol-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-i20-sportz-1-2-2012-petrol-ID1hhTmf.html"
                    },
                    "12": {
                        "id": "1176931253",
                        "title": "Hyundai I20 Asta 1.2 (o) With Sunroof, 2010, Petrol",
                        "image": "https://img01.olx.in/images_olxin/482038171_1_644x461_hyundai-i20-asta-12-o-with-sunroof-2010-petrol-mumbai.jpg",
                        "url": "https://www.olx.in/item/hyundai-i20-asta-1-2-o-with-sunroof-2010-petrol-ID1hEhA9.html"
                    }
                }
            },
            "contextOut": [],
            "source": "webhook"
        });
    });
}

module.exports = getSearchResults;