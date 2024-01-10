import React, { useContext } from 'react';
import Header from '../Components/Header';
import UsersListContent from '../Components/Admin/UsersListContent';
import Modal from '../Helpers/Modal/Modal';
import { ModalContext } from '../Context/Context';


const UsersListPage = () => {
    const modalIsOpen = useContext(ModalContext)
    return (
        <div className='wrapper'>
            {modalIsOpen.modalOpen ? <Modal/> : ''}
            <Header/>
            <UsersListContent/>
        </div>
    );
}

export default UsersListPage;
