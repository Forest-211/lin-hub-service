'use strict'
const mongoose = require('mongoose')
const { host, name, pwd, port, DBName } = require('../../config/db')

const uri = `mongodb://${host}/${DBName}:${port}`

await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

mongoose.on('error', () => {
    
})