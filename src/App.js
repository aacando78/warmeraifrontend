import './App.css';
import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Example from './Components/Header/header';
import Main from './Components/Landing';
import {Route,Routes,useNavigate} from 'react-router-dom'
import New from './Components/Mailcomp/New';
import Register from './Components/Register';
import Login from './Components/Login';
import { LoginContext } from './Context/LoginContext';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import { Premium } from './Components/Premium';
import { Admin } from './Components/admin';
import { Final } from './Components/Mailcomp/final';

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
  const [open, setOpen] = React.useState(false);
  const [emailScore,setEmailScore] = React.useState('')
  const [email,setEmail] = React.useState('')
  const history = useNavigate()
  const openModal = (value) => {
    if(value === 'New Email')
    {
      setOpen(true)
    }
  }

  const handleClose = () => {setOpen(false)};

  const getEmaildata = () => {
    const data = {
      "email":user.email,
       "onlineProfileUrl":"abc",
       "typeOfUrl":"abc",
       "GoalOfEmail":"abc"
   }
    const getRequestOptionPost = {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
        "x-auth-token":user.token,
      },
      body:JSON.stringify(data)
    }
    fetch(`${process.env.REACT_APP_DOMAIN}user/api/getintros`,getRequestOptionPost)
        .then(async Response => {
          if(Response.ok){
          const json = await Response.json()
            setEmail(json)
            const getRequestOptionPost2 = {
              method:"POST",
              headers:{
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*",
                "x-auth-token":user.token,
              },
              body:JSON.stringify({"email":user.email})
            }
            fetch(`${process.env.REACT_APP_DOMAIN}user/api/emailscore`,getRequestOptionPost2)
            .then(async Response => {
              if(Response.ok){
                const json2 = await Response.json()
                setEmailScore(json2)
                handleClose()
                history("/view")
              }
            })
          }
          else if(Response.status === 500 || Response.status === 400)
          {
            alert("Internal Error")
          }
        })
  }
  React.useEffect(() =>{
    if(user)
    {
      const getUserData = () => {
        if (!user) alert("Please login first");
        
        const data = {
          "email":user.email,
        }
    
        const getRequestOptionPost = {
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "x-auth-token":user.token,
          },
          body:JSON.stringify(data)
        }
        fetch(`${process.env.REACT_APP_DOMAIN}user/api/getuserdata`,getRequestOptionPost)
            .then(async Response => {
              if(Response.ok){
                const json = await Response.json()
                json["token"] = user.token
                setUser(json)
              }
            })
      };
      getUserData() 
    }
    
  },[email,emailScore,token])
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
        <Route exact path="/view" element={<Final />} />
       </Routes> 
       </LoginContext.Provider>
    </div>)
  }

  return (
    <div >
      <LoginContext.Provider value={{user,token,setToken,setUser,setOpen,openModal}}>
      <Example />
      <Routes>
          {/* <Route exact path="/" element={</>} /> */}
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/new" element={<New open={open} handleClose={handleClose} getEmaildata={getEmaildata}/>} />
          <Route exact path="*" element={<Dashboard/>} />
          <Route exact path="/premium" element={<Premium user={user}/>} />
          <Route exact path="/admin" element={<Admin user={user}/>} />
          <Route exact path="/view" element={<Final email={email} emailScore={emailScore}/>} />
      </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
