const express = require('express')
const { routing } = require('./routes/routes')
const app = express()
const port = 3001

app.use(express.json());

routing(app);

app.listen(port, () => console.log(`Product app listening on port ${port}!`))