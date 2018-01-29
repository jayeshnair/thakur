'use strict'

const searchResults = require('./search');
const loginOtpResults = require('./login').loginOtpResults;
const confirmOtpResults = require('./login').confirmOtpResults;

module.exports = {
    searchResults,
    loginOtpResults,
    confirmOtpResults
}