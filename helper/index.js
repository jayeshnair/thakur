'use strict'

const searchResults = require('./search').searchResults;
const loginOtpResults = require('./login').loginOtpResults;
const confirmOtpResults = require('./login').confirmOtpResults;
const apiResponseTemplate = require('./common').apiResponseTemplate;

module.exports = {
    searchResults,
    loginOtpResults,
    confirmOtpResults,
    apiResponseTemplate
}