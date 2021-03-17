const express = require('express')
const app = express();
const port = 8888;
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content - Type, Accept");
    next();
})

app.listen(port, () => console.log(`Server running at localhost:
    ${port}!`))
