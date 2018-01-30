'use strict'

const searchResults = require('./search').searchResults;
const loginOtpResults = require('./login').loginOtpResults;
const confirmOtpResults = require('./login').confirmOtpResults;

module.exports = {
    searchResults,
    loginOtpResults,
    confirmOtpResults
}