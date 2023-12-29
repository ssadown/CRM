import React, { useContext } from 'react';
import { UserContext } from '../Context/Context';
import exitSvg from '../images/exit.svg'
import { useExit } from '../Hooks/useExit';

const Navigation = () => {
    const currentUserInfo = useContext(UserContext)
    const { exit } = useExit()
    return (
        <nav>
            <h1>Диплом</h1>
            <h2>{currentUserInfo.userInfo.user_name} {currentUserInfo.userInfo.user_name ? <button onClick={exit}><img src={exitSvg} alt="Выход"/></button> : <button></button>}</h2>
        </nav>
    );
}

export default Navigation;
