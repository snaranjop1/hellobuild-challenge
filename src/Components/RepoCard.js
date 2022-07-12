import React from "react";

export default function RepoCard({
  name,
  url,
  isPrivate,
  favFunction,
  showBtn,
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{url}</h6>
        {showBtn && (
          <button className="btn" onClick={favFunction}>
            ⭐️
          </button>
        )}
      </div>
    </div>
  );
}
