import React, { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import GithubAccountAlert from "../Components/GithubAccountAlert";
import RepoCard from "../Components/RepoCard";
import AuthService from "../Services/AuthService";
import GithubService from "../Services/GithubService";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const isAuth = AuthService.isAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (code) {
      console.log(code);
      console.log(GithubService.requestGithubToken(code));
    }
  }, [code]);

  return (
    <div className="container my-4">
      {!isAuth && <Navigate to="/login" />}
      {!searchParams.get("code") && <GithubAccountAlert />}
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
    </div>
  );
}
