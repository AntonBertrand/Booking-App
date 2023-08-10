import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    console.log("Attempted login")
    try {
      const res = await fetch("https://booking-app-ue5a.onrender.com/api/auth/login", credentials, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        credentials: 'include'
      }).then(res => {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        console.log("Loggin success")
        navigate("/")
      })

    } catch (err) {
      console.log("Loggin Fail")
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <p>Hint: Try logging in as 'test' with password '123'</p>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

