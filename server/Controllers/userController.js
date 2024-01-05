const sql = require('../db')
class User {
    async addUser(req,res) {
        const { user_name, user_password, user_role, user_nickname, user_departament} = req.body
        const newUser = await sql.query(`INSERT INTO users (user_name, user_password, user_role, user_nickname, user_departament) VALUES ($1,$2,$3,$4,$5) RETURNING *`, [user_name, user_password, user_role, user_nickname, user_departament])
        res.json(newUser.rows[0])
    }
    async getUsers(req, res) {
        const getUsers = await sql.query(`SELECT * FROM users`)
        res.json(getUsers.rows)
    }
    async getInfoUser(req, res) {
        const user_nickname =  req.params.user_nickname
        const getInfoUser = await sql.query(`SELECT * FROM users WHERE user_nickname = $1`, [user_nickname])
        res.json(getInfoUser.rows[0])
    }
}

module.exports = new User()