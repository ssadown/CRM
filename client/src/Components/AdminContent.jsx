import { useEffect, useState } from "react"
import { useGetTasks } from "../Hooks/useGetTasks"
import Block from "./Admin/Block"

const AdminContent = () => {
    const { getTasks } = useGetTasks()
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchedTasks = await getTasks()
            setTasks(fetchedTasks)
        }
        fetchData()
    }, [getTasks])

    if (tasks.length > 0) {
        return (
            <main>
                <div className="content-main">
                    {tasks.map((task) => {
                        return (
                            <Block user_name={task.user_name} task_id={task.task_id}/>
                        )
                    })}
                </div>
            </main>
        );
    } else {
        return (
            <main>
                <div className="content-main">
                    <h1>Все задачи выполнены!</h1>
                </div>
            </main>
        )
    }
}

export default AdminContent;
