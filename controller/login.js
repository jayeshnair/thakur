const helper = require('./../helper')

getLoginOtp = (req, res) => {
    const data = req.body;
    const loginOtpResults = helper.loginOtpResults(data, (error, body) =>{
        res.send(body)
    });
}

confirmOtp = (req, res) => {
    const data = req.body;
    const confirmOtpResults = helper.confirmOtpResults(data, (error, body) =>{
        res.send(body)
    });
}

module.exports = {
    getLoginOtp,
    confirmOtp
};