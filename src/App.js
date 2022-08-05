import './App.css';
import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Example from './Components/Header/header';
import Main from './Components/Landing';
import {Route,Routes} from 'react-router-dom'
import New from './Components/Mailcomp/New';
import Register from './Components/Register';
import Login from './Components/Login';
import { LoginContext } from './Context/LoginContext';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
function App() {
  const getUserDetails = () => {
    const userDetails =  JSON.parse(localStorage.getItem("user"))
    if(userDetails)
    return userDetails
    else
    return
  }

  const getLinkedDetails = () => {
    const userDetails =  JSON.parse(localStorage.getItem("token"))
    if(userDetails)
    return userDetails
    else
    return
  }
  const [user,setUser] = React.useState(getUserDetails());
  const [token,setToken] = React.useState(getLinkedDetails());
  React.useEffect(() =>{

  },[user,token])
  if(!user&&!token)
  {
    return(<div>
      <LoginContext.Provider value={{user,token,setToken,setUser}}>
       <Example />
       <Routes>
       <Route exact path="/" element={<Main/>} />
       <Route exact path="/register" element={<Register setUser={setUser}/>} />
        <Route exact path="/login" element={<Login setUser={setUser} setToken={setToken}/>} />
        <Route exact path="/linkedin" element={<LinkedInCallback />} />
       </Routes>
       </LoginContext.Provider>
    </div>)
  }

  return (
    <div >
      <LoginContext.Provider value={{user,token,setToken,setUser}}>
      <Example/>
      <Routes>
          {/* <Route exact path="/" element={</>} /> */}
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/new" element={<New/>} />
          <Route exact path="*" element={<Dashboard/>} />
      </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
