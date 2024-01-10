import { useContext } from "react"
import { ModalContext } from "../../Context/Context"

export const useOpenModal = (user_id) => {
    const modalIsOpen = useContext(ModalContext)
    const getDataModal = () => {
        modalIsOpen.setModalOpen(true)
        modalIsOpen.setModalId(user_id)
    }
    return getDataModal
}