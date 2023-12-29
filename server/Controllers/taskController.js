const sql = require('../db');

class Tasks {
    async addTask(req,res) {
        try {
            const {task_id, user_name} = req.body;
            const newTask = await sql.query('INSERT INTO tasklist (task_id, user_name) VALUES ($1,$2) RETURNING *', [task_id, user_name]);
            res.json(newTask.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to add task' });
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