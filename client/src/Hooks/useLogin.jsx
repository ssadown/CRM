import axios from 'axios'
import { LoginContext, UserContext } from '../Context/Context'
import { useContext } from 'react'

export const useLogin = (user_nickname, password) => {
    const isLoginContext = useContext(LoginContext)
    const userInfoContext = useContext(UserContext)

    const login = async () => {
        const getInfoUserDB = await axios.get(`http://localhost:5000/users/${user_nickname}`)
        
        if (user_nickname === getInfoUserDB.data.user_nickname && password === getInfoUserDB.data.user_password) {
            localStorage.setItem('login', 'true')
            localStorage.setItem(`nickname`, `${user_nickname}`)
            localStorage.setItem(`user_id`, `${getInfoUserDB.data.user_id}`)
            userInfoContext.setUserInfo(getInfoUserDB.data)
            isLoginContext.setLogin(true)
        } else {
            return ('Пароль, либо логин, неправильные!')
        }
    }
    return { login }
}
