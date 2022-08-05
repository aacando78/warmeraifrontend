import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLinkedIn } from 'react-linkedin-login-oauth2';

// You can use provided image shipped by this package or using your own
import "../App.css";
function Login(props) {
  const {setUser,setToken} = props
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const saveDetails = userDetails => {
    localStorage.setItem('user',JSON.stringify(userDetails))
  }

  const saveToken = userDetails => {
    localStorage.setItem('token',JSON.stringify(userDetails))
  }
  const { linkedInLogin } = useLinkedIn({
    clientId: '77lq3v9klsrsmy',
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      setToken(code)
      saveToken(code)
      navigate("/dashboard")
    },
    onError: (error) => {
      alert(error);
    },
  });

  const login = () => {
    if (!email) alert("Please enter email");
    else if (!password) alert("Please enter password");
    const data = {
      "email":email,
      "password":password
    }

    const getRequestOptionPost = {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify(data)
    }
    fetch(`${process.env.REACT_APP_DOMAIN}user/api/login`,getRequestOptionPost)
        .then(async Response => {
          if(Response.ok){
            const json = await Response.json()
            setUser(json)
            setEmail("")
            setPassword("")
            saveDetails(json)
            navigate("/dashboard")
          }
          else if(Response.status === 400)
          {
             alert("Field is missing!!")
          }
          else if(Response.status === 500)
          {
            alert("Internal Error!!")
          }
        })
  };

  useEffect(() => {
    
  }, []);
  return (
    <div className="login">
      <div className="login__container">
      <div className="mb-5">
              <button className="waves-effect waves-light btn social linkedin" onClick={e => linkedInLogin()}>
                <i class="fa fa-linkedin"></i> Sign in with Linkedin
              </button>
            </div>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={e => login()}
        >
          Login
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;