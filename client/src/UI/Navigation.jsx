import React, { useContext } from 'react';
import { UserContext } from '../Context/Context';
import exitSvg from '../images/exit.svg'
import { useExit } from '../Hooks/useExit';
import { Link } from 'react-router-dom'

const Navigation = () => {
    const currentUserInfo = useContext(UserContext)
    const { exit } = useExit()
    if (currentUserInfo.userInfo.user_role === 'Администратор') {
        return (
            <nav>
                <h1>Диплом</h1>
                <Link to="/tasks">Задачи</Link>
                <Link to="/users">Пользователи</Link>
                <h2>{currentUserInfo.userInfo.user_name} {currentUserInfo.userInfo.user_name ? <button onClick={exit}><img src={exitSvg} alt="Выход"/></button> : <button></button>}</h2>
            </nav>
        );
    } else {
        return (
            <nav>
                <h1>Диплом</h1>
                <h2>{currentUserInfo.userInfo.user_name} {currentUserInfo.userInfo.user_name ? <button onClick={exit}><img src={exitSvg} alt="Выход"/></button> : <button></button>}</h2>
            </nav>
        );
    }
}

export default Navigation;
