import { LoginContext, UserContext } from '../Context/Context'
import { useContext } from 'react'

export const useExit = () => {
    const isLoginContext = useContext(LoginContext)
    const userInfoContext = useContext(UserContext)

    const exit = async () => {
            localStorage.removeItem('login')
            localStorage.removeItem(`nickname`)
            localStorage.removeItem(`user_id`)
            userInfoContext.setUserInfo({})
            isLoginContext.setLogin(false)
    }
    return { exit }
}
