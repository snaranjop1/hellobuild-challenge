import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import GithubAccountAlert from "../Components/GithubAccountAlert";
import RepoCard from "../Components/RepoCard";
import AuthService from "../Services/AuthService";
import GithubService from "../Services/GithubService";
import RepoService from "../Services/RepoService";

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
        RepoService.saveRepos(res.data.viewer.repositories.nodes);
      });
    }
  }, [linked]);

  return (
    <div className="container my-4">
      {!isAuth && <Navigate to="/login" />}
      {!linked && <GithubAccountAlert />}
      <h1 className="display-1">Repo List</h1>
      <h2 className="display-4">Favorites</h2>
      <div className="container row d-flex gap-2">
        {favorites.map((repo) => {
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
      <h2 className="display-4 mt-4">All</h2>
      <input
        className="form-control form-control-lg mb-4"
        style={{ maxWidth: "20rem" }}
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setRepos(RepoService.searchRepo(e.target.value));
        }}
      ></input>
      <div className="container row d-flex gap-3">
        {repos.map((repo) => {
          return (
            <RepoCard
              key={repo.id}
              name={repo.name}
              url={repo.url}
              isPrivate={repo.isPrivate}
              showBtn
              favFunction={() => setFavorites((favs) => [...favs, repo])}
            />
          );
        })}
      </div>
    </div>
  );
}
