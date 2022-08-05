import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Register(props) {
  const {setUser} = props
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const history = useNavigate();
  const saveDetails = userDetails => {
    localStorage.setItem('user',JSON.stringify(userDetails))
  }
  const register = () => {
    if (!firstname) alert("Please enter firstname");
    else if (!lastname) alert("Please enter lastname");
    else if (!email) alert("Please enter email");
    else if (!password) alert("Please enter password");
    const data = {
      "firstname":firstname,
      "lastname":lastname,
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
    fetch(`${process.env.REACT_APP_DOMAIN}user/api/register`,getRequestOptionPost)
        .then(async Response => {
          if(Response.ok){
            const json = await Response.json()
            setUser(json)
            setLastName("")
            setEmail("")
            setPassword("")
            setFirstName("")
            saveDetails(json)
            history("/dashboard")
          }
          else if(Response.status === 401)
          {
             alert("User already Exist!!")
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
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;