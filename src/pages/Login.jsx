import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!email) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      errs.email = "Invalid email format";
    if (!password) errs.password = "Password is required";
    if (password && password.length < 6) errs.password = "Password must be at least 6 characters";

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        alert(`Welcome back, ${user.name}!`);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setEmail("");
        setPassword("");
        setErrors({});
      } else {
        setErrors({ email: "Invalid email or password" });
      }
    }
  };

  return (
    <>
      <div className="container py-5" style={{ maxWidth: "500px" }}>
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="mt-3 text-center small">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
