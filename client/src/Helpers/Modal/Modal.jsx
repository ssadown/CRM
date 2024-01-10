import React, { useContext } from 'react';
import ModalBlock from './ModalBlock';
import { ModalContext } from '../../Context/Context';

const Modal = () => {
    const modalIsOpen = useContext(ModalContext)
    return (
        <div className='modal-wrapper' onClick={() => {modalIsOpen.setModalOpen(false)}}>
            <ModalBlock/>
        </div>
    );
}

export default Modal;
