import React from "react";

export default function RepoCard({ name, url, isPrivate }) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{url}</h6>
      </div>
    </div>
  );
}
