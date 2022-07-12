import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

function Signup() {
  const [done, setDone] = useState(false);

  return (
    <section className="vh-100 bg-dark">
      <div className="d-flex column justify-content-center align-items-center h-100">
        <div
          className="container rounded shadow bg-light p-4 m-2"
          style={{ maxWidth: 500 }}
        >
          <h1>Sign Up</h1>
          {done && <Navigate to="/login" replace={true} />}
          <form
            className="my-3"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const password = e.target.password.value;

              AuthService.signup(name, email, password);

              setDone(true);
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
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
              Submit
            </button>
          </form>
          <p className="text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
