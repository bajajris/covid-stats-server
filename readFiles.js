const fsPromises = require('fs').promises

module.exports = {
    getSchoolCovidSummary: async () => {
        return await fsPromises.readFile('schoolcovidsummary.json')
    },
    getSchoolCovidTesting: () => {
        return await fsPromises.readFile('schoolcovidtesting.json')
    },
    getSchoolPartnersActiveCovid: () => {
        return await fsPromises.readFile('schoolpartnersactivecovid.json')
    },
    getCasesByStatusAndPHU: () => {
        return await fsPromises.readFile('cases_by_status_and_phu.json')
    },
    getOngoingOutbreaks: () => {
        return await fsPromises.readFile('ongoing_outbreaks.json')
    }
}