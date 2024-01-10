const sql = require('../db')
class User {
    async addUser(req,res) {
        try {
            const { user_name, user_password, user_role, user_nickname, user_department, user_ip} = req.body
            const newUser = await sql.query(`INSERT INTO users (user_name, user_password, user_role, user_nickname, user_department, user_ip) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`, [user_name, user_password, user_role, user_nickname, user_department, user_ip])
            res.json(newUser.rows[0])
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Failed to add user'})
        }
    }
    async getUsers(req, res) {
        try {
            const getUsers = await sql.query(`SELECT * FROM users`)
            res.json(getUsers.rows)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Failed to get users'})
        }
    }
    async getInfoUser(req, res) {
        try {
            const user_nickname =  req.params.user_nickname
            const getInfoUser = await sql.query(`SELECT * FROM users WHERE user_nickname = $1`, [user_nickname])
            res.json(getInfoUser.rows[0])
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Failed to get user'})
        }
    }
    async deleteUser(req,res) {
        try {
            const user_id = req.params.user_id;
            const deleteUser = await sql.query('DELETE FROM users WHERE user_id = $1', [user_id]);
            res.json(deleteUser.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
    async putUser(req, res) {
        try {
            const { user_name, user_password, user_role, user_nickname, user_department, user_ip, user_id} = req.body
            const putUser = await sql.query('UPDATE users SET user_name = $1, user_password = $2, user_role =$3, user_nickname = $4, user_department = $5, user_ip = $6 where user_id = $7 RETURNING *', [user_name, user_password, user_role, user_nickname, user_department, user_ip, user_id])
            res.json(putUser.rows[0])
        } catch(error) {
            console.error(error)
            res.status(500).json({error: 'Failed to update user'})
        }
    }
}

module.exports = new User()