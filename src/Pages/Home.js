import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import GithubAccountAlert from "../Components/GithubAccountAlert";
import RepoCard from "../Components/RepoCard";
import AuthService from "../Services/AuthService";
import GithubService from "../Services/GithubService";

export default function Home() {
  const isAuth = AuthService.isAuth();
  const [repos, setRepos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [linked, setLinked] = useState(GithubService.getToken);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code && !GithubService.getToken()) {
      GithubService.requestToken(code).then(() => setLinked(true));
    }

    if (GithubService.getToken()) {
      GithubService.getRepos().then((res) => {
        setRepos(res.data.viewer.repositories.nodes);
      });
    }
  }, [linked]);

  return (
    <div className="container my-4">
      {!isAuth && <Navigate to="/login" />}
      {!linked && <GithubAccountAlert />}
      <h1 className="display-1">Repo List</h1>
      <h2 className="display-4">Favorites</h2>
      <div className="container row">
        {favorites.map((repo) => {
          return (
            <RepoCard
              name={repo.name}
              url={repo.url}
              isPrivate={repo.isPrivate}
            />
          );
        })}
      </div>
      <h2 className="display-4">All</h2>
      <div className="container row d-flex gap-2">
        {repos.map((repo) => {
          return (
            <RepoCard
              key={repo.id}
              name={repo.name}
              url={repo.url}
              isPrivate={repo.isPrivate}
            />
          );
        })}
      </div>
    </div>
  );
}
