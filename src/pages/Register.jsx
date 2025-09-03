import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Invalid email format";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    if (form.confirm !== form.password) errs.confirm = "Passwords do not match";
    else if (form.confirm.length < 6)
      errs.confirm = "Confirm Password must be at least 6 characters";

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.some((u) => u.email === form.email);
    if (emailExists) errs.email = "This email is already registered";

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const newUser = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      alert("Registration successful! You can now login.");
      setForm({ name: "", email: "", password: "", confirm: "" });
    }
  };

  return (
    <>
      <div className="container py-5" style={{ maxWidth: "500px" }}>
        <h2 className="mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              className={`form-control ${errors.confirm ? "is-invalid" : ""}`}
              value={form.confirm}
              onChange={handleChange}
            />
            {errors.confirm && (
              <div className="invalid-feedback">{errors.confirm}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
        <p className="mt-3 text-center small">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
