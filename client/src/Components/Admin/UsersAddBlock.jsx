import React, { useContext, useState } from 'react';
import UsersListInput from '../../Helpers/UsersListInput';
import UsersListButton from '../../Helpers/UsersListButton';
import { useAddUser } from '../../Hooks/useAddUser';
import { DepartmentContext, RoleContext } from '../../Context/Context';

const UsersAddBlock = () => {
    const [userName, setUserName] = useState('')
    const [userNickname, setUserNickname] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userIp, setUserIp] = useState('')
    const [error, setError] = useState(false)
    const [userDepartment, setUserDepartment] = useState('IT')
    const [userRole, setUserRole] = useState('Пользователь')
    const roleList = useContext(RoleContext)
    const departmentList = useContext(DepartmentContext)
    const addUser = useAddUser(userName, userPassword, userNickname, userIp, userRole, userDepartment, setError)

    return (
        <div className='users-list_add-block'>
            <UsersListInput
                placeholder='ФИО' 
                value={userName} 
                type='text' 
                setData={setUserName}
            />
            <UsersListInput
                placeholder='Логин пользователя' 
                value={userNickname} 
                type='text' 
                setData={setUserNickname}
            />
            <UsersListInput
                placeholder='Пароль' 
                value={userPassword} 
                type='text' 
                setData={setUserPassword}
            />
            <UsersListInput
                placeholder='IP-адрес' 
                value={userIp} 
                type='text' 
                setData={setUserIp}
            />
            <select value={userRole} onChange={(e) => {setUserRole(e.target.value)}}>
                {roleList.roleList.map((element) => {
                    return (
                        <option value={element.roleName} key={element.roleId}>{element.roleName}</option>
                    )
                })}
            </select>
            <select value={userDepartment} onChange={(e) => {setUserDepartment(e.target.value)}}>
                {departmentList.departmentList.map((element) => {
                    return (
                        <option value={element.departmentName} key={element.departmentId}>{element.departmentName}</option>
                    )
                })}
            </select>
            <UsersListButton onClick={addUser} buttonText='Добавить пользователя'/>
            <p className={error ? 'error-text show-error' : 'error-text'}> Не удалось добавить пользователя</p>
        </div>
    );
}

export default UsersAddBlock;
