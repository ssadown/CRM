import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginContext, UserContext } from './Context/Context';
import LoginPage from './Pages/LoginPage';
import './styles/style.css'
import axios from 'axios';
import UserPage from './Pages/UserPage';
import AdminPage from './Pages/AdminPage';

const App = () => {
  const [isLogin, setLogin] = useState(false)
  const [userInfo, setUserInfo] = useState({})
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
    )
  } else if (isLogin && userInfo.user_role === 'Администратор') {
    return (    <UserContext.Provider value={{userInfo, setUserInfo}}>
    <LoginContext.Provider value={{isLogin, setLogin}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/admin" element={<AdminPage/>}/>
          <Route exact path="*" element={<Navigate to="/admin" replace/>}/>
        </Routes>
      </BrowserRouter> 
    </LoginContext.Provider>
  </UserContext.Provider>)
  }
}

export default App;
