import React, { useEffect, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("blue");
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const user = [
    { username: "ABC", password: "123" },
    { username: "DEF", password: "Admin2" },
    { username: "IJK", password: "Admin3" },
    { username: "LMN", password: "Admin4" },
  ];

  const login = () => {
    const isLoggedIn = user.some(
      (user) => user.username == username && user.password == password
    );
    setisLoggedIn(isLoggedIn);
    if (isLoggedIn) {
      setMessage("Login Successfully");
    } else {
      setMessage("Login Failed");
    }
  };
  useEffect(() => {
    if (isLoggedIn == null) {
      setColor("blue");
    } else if (isLoggedIn == true) {
      setColor("green");
    } else {
      setColor("red");
    }
  });
  return (
    <>
      <div className="login-form" style={{ background: color }}>
        <label htmlFor="username">UserName </label>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">PassWord </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <p>{message}</p>
        <button onClick={login} className="button">
          Submit
        </button>
      </div>
    </>
  );
};

export default Login;
