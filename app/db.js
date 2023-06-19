const { Client } = require('pg')
const { logger } = require('./loggers')

const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
})

client.connect()
client.query('select now()').then(
    res => logger.info('Connected to the db ' + res.rows[0].now)
)

module.exports = client