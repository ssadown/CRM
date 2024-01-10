import axios from "axios"

export const useAddUser = (userName, userPassword, userNickname, userIp, userRole, userDepartment, setErrorState) => {
    const addUser = async () => {
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
                    setErrorState(false)
                    await axios.post('http://localhost:5000/users', {
                        user_name: userName, 
                        user_password: userPassword,
                        user_role: userRole, 
                        user_nickname: userNickname, 
                        user_department: userDepartment, 
                        user_ip: userIp
                    })
                }
        } catch (error) {
            console.error(error)
        }
    }
    return addUser
}