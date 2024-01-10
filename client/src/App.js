import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DepartmentContext, DescriptionContext, LoginContext, ModalContext, RoleContext, UserContext } from './Context/Context';
import LoginPage from './Pages/LoginPage';
import './styles/style.css'
import axios from 'axios';
import UserPage from './Pages/UserPage';
import AdminPage from './Pages/AdminPage';
import UsersListPage from './Pages/UsersListPage';

const App = () => {
  const [isLogin, setLogin] = useState(false)
  const [modalId, setModalId] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [userDescriptionTask, setUserDescriptionTask] = useState('')
  const [departmentList, setDepartmentList] = useState([
    {departmentId: 1, departmentName: 'Бухгалтерия'},
    {departmentId: 2, departmentName: 'IT'},
    {departmentId: 3, departmentName: 'Продажи'}
  ])
  const [roleList, setRoleList] = useState([
    {roleId: 1, roleName: 'Пользователь'},
    {roleId: 2, roleName: 'Администратор'}
  ])

  useEffect(() => {
    if (localStorage.getItem('login')) {
        setLogin(true)
    }
    const setUserDataStorage = async () => {
      if (localStorage.getItem('nickname')) {
        const saveUserData = await axios.get(`http://localhost:5000/users/${localStorage.nickname}`)
        setUserInfo(saveUserData.data)
      }
    }
    setUserDataStorage()
}, [])
  if (!isLogin) {
    return (
      <UserContext.Provider value={{userInfo, setUserInfo}}>
        <LoginContext.Provider value={{isLogin, setLogin}}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<LoginPage/>}/>
              <Route exact path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
          </BrowserRouter> 
        </LoginContext.Provider>
      </UserContext.Provider>
  );
  } else if (isLogin && userInfo.user_role === 'Пользователь') {
    return (
      <DescriptionContext.Provider value={{userDescriptionTask, setUserDescriptionTask}}>
        <UserContext.Provider value={{userInfo, setUserInfo}}>
          <LoginContext.Provider value={{isLogin, setLogin}}>
            <BrowserRouter>
              <Routes>
                <Route exact path="/user" element={<UserPage/>}/>
                <Route exact path="*" element={<Navigate to="/user" replace/>}/>
              </Routes>
            </BrowserRouter> 
          </LoginContext.Provider>
        </UserContext.Provider>
      </DescriptionContext.Provider>
    )
  } else if (isLogin && userInfo.user_role === 'Администратор') {
    return (
      <ModalContext.Provider value={{modalOpen, setModalOpen, modalId, setModalId}}>
        <DepartmentContext.Provider value={{departmentList, setDepartmentList}}>
          <RoleContext.Provider value={{roleList, setRoleList}}>
            <UserContext.Provider value={{userInfo, setUserInfo}}>
              <LoginContext.Provider value={{isLogin, setLogin}}>
                <BrowserRouter>
                  <Routes>
                    <Route exact path="/tasks" element={<AdminPage/>}/>
                    <Route exact path="/users" element={<UsersListPage/>}/>
                    <Route exact path="*" element={<Navigate to="/tasks" replace/>}/>
                  </Routes>
                </BrowserRouter> 
              </LoginContext.Provider>
            </UserContext.Provider>
          </RoleContext.Provider>
        </DepartmentContext.Provider>
      </ModalContext.Provider>
    )
  }
}

export default App;
