const fsPromises = require('fs').promises

module.exports = {
    getSchoolCovidSummary: async () => {
        return await fsPromises.readFile('schoolcovidsummary.json')
    },
    getSchoolCovidTesting: async () => {
        return await fsPromises.readFile('schoolcovidtesting.json')
    },
    getSchoolPartnersActiveCovid: async () => {
        return await fsPromises.readFile('schoolpartnersactivecovid.json')
    },
    getCasesByStatusAndPHU: async () => {
        return await fsPromises.readFile('cases_by_status_and_phu.json')
    },
    getOngoingOutbreaks: async () => {
        return await fsPromises.readFile('ongoing_outbreaks.json')
    }
}