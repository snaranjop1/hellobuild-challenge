import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

export default function Login() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section className="vh-100 bg-dark">
      <div className="d-flex column justify-content-center align-items-center h-100">
        <div
          className="container rounded shadow bg-light p-4 m-2"
          style={{ maxWidth: 500 }}
        >
          <h1>Login</h1>
          {success && <Navigate to="/" replace={true} />}
          {error && (
            <div className="alert alert-danger" role="alert">
              Invalid Credentials
            </div>
          )}
          <form
            className="my-3"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              const password = e.target.password.value;

              setSuccess(AuthService.login(email, password));
              setError(!success);
            }}
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <p className="text-center">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
