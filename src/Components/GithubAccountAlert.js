import React from "react";
import GithubService from "../Services/GithubService";

export default function GithubAccountAlert() {
  return (
    <div
      className="alert alert-warning d-flex justify-content-between align-items-center"
      role="alert"
    >
      No github account linked yet
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => (window.location.href = GithubService.authenticateUrl())}
      >
        Link account
      </button>
    </div>
  );
}
