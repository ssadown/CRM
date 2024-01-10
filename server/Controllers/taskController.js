const sql = require('../db');

class Tasks {
    async addTask(req,res) {
        try {
            const {task_id, user_name, description, user_ip, user_id} = req.body;
            const newTask = await sql.query('INSERT INTO tasklist (task_id, user_name, description, user_ip, user_id) VALUES ($1,$2,$3,$4,$5) RETURNING *', [task_id, user_name, description, user_ip, user_id]);
            res.json(newTask.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to add task' });
        }
    }

    async putTask (req, res) {
        try {
            const {status, task_id} = req.body
            const updateTask = await sql.query(`UPDATE tasklist SET status = $1 where task_id = $2 RETURNING *`, [status, task_id])
            res.json(updateTask.rows)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Failed to update task'})
        }
    }

    async getTasks(req, res) {
        try {
            const getTasks = await sql.query('SELECT * FROM tasklist');
            res.json(getTasks.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to get tasks' });
        }
    }

    async deleteTask(req,res) {
        try {
            const task_id = req.params.task_id;
            const deleteTask = await sql.query('DELETE FROM tasklist WHERE task_id = $1', [task_id]);
            res.json(deleteTask.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete task' });
        }
    }
}

module.exports = new Tasks();
