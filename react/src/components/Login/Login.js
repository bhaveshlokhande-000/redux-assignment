import React, { useState } from "react";
import { auth } from "../../Service/auth";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = {
        email,
        password,
      };
      const response = await auth(userCredentials);
      if (response.success) {
        setEmail("");
        setPassword("");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userType", response.data.role);
        props.history.push("/home");
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  if (error) return error;
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50" style={{ marginTop: "10%" }}>
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={LoginHandler}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
