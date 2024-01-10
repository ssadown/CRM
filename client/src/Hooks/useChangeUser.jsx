import axios from "axios"
import { ModalContext, UserContext } from "../Context/Context"
import { useContext } from "react"

export const useChangeUser = (userName, userPassword, userNickname, userIp, userRole, userDepartment, setErrorState, user_id) => {
    const modalIsOpen = useContext(ModalContext)
    const userInfoContext = useContext(UserContext)
    const changeUser = async () => {
        try {
            if (
                userName === '' ||
                userPassword === '' ||
                userNickname === '' ||
                userIp === '' ||
                userRole === null ||
                userDepartment === null
                ) {
                    setErrorState(true)
                    console.log('Одно из значений пустое')
                    return
                } else {
                    modalIsOpen.setModalOpen(false)
                    setErrorState(false)
                    await axios.put(`http://localhost:5000/users/`, {
                        user_name: userName, 
                        user_password: userPassword,
                        user_role: userRole, 
                        user_nickname: userNickname, 
                        user_department: userDepartment, 
                        user_ip: userIp,
                        user_id: user_id
                    })
                    if (localStorage.user_id === user_id.toString()) {
                        localStorage.removeItem(`nickname`)
                        const saveUserData = await axios.get(`http://localhost:5000/users/${userNickname}`)
                        userInfoContext.setUserInfo(saveUserData.data)
                        localStorage.setItem('nickname', `${userNickname}`)
                    }
                } 
        } catch (error) {
            console.error(error)
        }
    }
    return changeUser
}