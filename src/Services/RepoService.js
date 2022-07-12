const saveRepos = (repos) => {
  localStorage.setItem("repos", JSON.stringify(repos));
};

const searchRepo = (query) => {
  const repos = JSON.parse(localStorage.getItem("repos"));
  return repos.filter((repo) => repo.name.includes(query));
};

const RepoService = { saveRepos, searchRepo };

export default RepoService;
