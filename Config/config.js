const mongoose = require("mongoose")

require('dotenv').config()

const config = mongoose.connect(process.env.mongo_url)

module.exports = {config}