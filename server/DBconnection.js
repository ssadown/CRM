const connect = async () => {
    const sql = require('./db')
    try {
        await sql.connect()
        console.log('Подключение прошло успешно')
    } catch (e) {
        console.log(e)
    }
}

module.exports = connect