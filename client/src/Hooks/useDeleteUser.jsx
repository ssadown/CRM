import axios from "axios"

export const useDeleteUser = (user_id) => {
    const deleteUser = async () => {
        try {
            await axios.delete(`http://localhost:5000/users/${user_id}`)
        } catch (error) {
            console.error(error)
        }
    }
    return deleteUser
}