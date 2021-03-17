const fs = require("fs")
const fsPromises = require('fs').promises

module.exports = {
    getSchoolCovidSummary: async () => {
        return await fsPromises.readFile('schoolcovidsummary.json')
    },
    getSchoolCovidTesting: () => {
        return await fsPromises.readFile('schoolcovidtesting.json')
    }
}