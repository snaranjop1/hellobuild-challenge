import React from "react";

function Signup() {
  return (
    <section className="vh-100 bg-dark">
      <div className="d-flex column justify-content-center align-items-center h-100">
        <div
          className="container rounded shadow bg-light p-4 m-2"
          style={{ maxWidth: 500 }}
        >
          <h1>Sign Up</h1>
          <form className="my-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
          <p className="text-center">
            Already have an account? <a href="/">Login</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
