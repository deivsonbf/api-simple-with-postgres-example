const express = require('express')
const app = express()


app.use('/blog' , require('./routes/postsRoute'))


app.listen(3000)