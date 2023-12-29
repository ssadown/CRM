import React, { useState } from 'react';
import Input from '../Helpers/Input';
import Button from '../Helpers/Button';
import {useLogin} from '../Hooks/useLogin'

const LoginContent = () => {
    const [userNickname, setUserNickname] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useLogin(userNickname, password)
    return (
        <main>
            <div className="content-main">
                <Input placeholder="Никнейм" value={userNickname} type="text" setData={setUserNickname}/>
                <Input placeholder="Пароль" value={password} type="password" setData={setPassword}/>
                <Button buttonText="Войти" onClick={login}/>
            </div>
        </main>
    );
}

export default LoginContent;
