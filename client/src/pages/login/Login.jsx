import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

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
    try {
      const res = await fetch("https://booking-app-ue5a.onrender.com/api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json'},
        credentials: 'include'
      }).then(res => {

        if (res.status !== 200) {
          throw res;
        }

        return res.json();

      }).then(res => {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.details });
        navigate("/") 
      }
      )

    } catch (err) {
      err = err.json();
      console.log(err);

      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };


  return (
    <div className="login">
      {loading ? <LoadingSpinner /> : null}
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

