const express = require('express')
const app = express();
const port = 8888;
const data = require('./readFiles')
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content - Type, Accept");
    next();
})

app.get('/schoolcovidsummary', (req, res) => {
    data.getSchoolCovidSummary().then((sData) => {
        res.send(sData);
    }, err => {
        res.send(err);
    })
})

app.get('/ongoing_outbreaks', (req, res) => {
    data.getOngoingOutbreaks().then((sData) => {
        res.send(sData);
    }, err => {
        res.send(err);
    })
})

app.get('/schoolpartnersactivecovid', (req, res) => {
    data.getSchoolPartnersActiveCovid().then((sData) => {
        res.send(sData);
    }, err => {
        res.send(err);
    })
})

app.get('/schoolcovidtesting', (req, res) => {
    data.getSchoolCovidTesting().then((sData) => {
        res.send(sData);
    }, err => {
        res.send(err);
    })
})

app.get('/cases_by_status_and_phu', (req, res) => {
    data.getCasesByStatusAndPHU().then((sData) => {
        res.send(sData);
    }, err => {
        res.send(err);
    })
})

app.listen(port, () => console.log(`Server running at localhost:
    ${port}!`))
