import { useEffect, useState } from "react"
import { useGetTasks } from "../../Hooks/useGetTasks"
import TaskBlock from "./TaskBlock"

const AdminContent = () => {
    const { getTasks } = useGetTasks()
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedTasks = await getTasks()
                setTasks(fetchedTasks)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [getTasks])

    if (tasks.length > 0) {
        return (
            <main>
                <div className="tasks-content__header">
                    <h1>Задачи</h1>
                </div>
                <div className="content-main">
                    {tasks.map((task) => {
                        return (
                            <TaskBlock tasks={task} key={task.task_id}/>
                        )
                    })}
                </div>
            </main>
        );
    } else {
        return (
            <main>
                <div className="tasks-content__header">
                    <h1>Задачи</h1>
                </div>
                <div className="content-main">
                    <h1>Все задачи выполнены!</h1>
                </div>
            </main>
        )
    }
}

export default AdminContent;
