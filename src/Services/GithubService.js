const getToken = () => {
  return localStorage.getItem("github-token");
};

const authenticateUrl = () => {
  return `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`;
};

const requestToken = async (code) => {
  const res = await fetch(
    `https://starfish-app-zbut6.ondigitalocean.app/token/${code}`
  );
  const res_1 = await res.json();
  return res_1.token && GithubService.saveToken(res_1.token);
};

const getRepos = async () => {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${getToken()}` },
    body: JSON.stringify({
      query:
        "query {\n  viewer {\n    login\n    repositories(first: 100) {\n      nodes {\n        id\n        name\n        url\n        isPrivate\n      }\n    }\n  }\n}",
    }),
  });
  return await res.json();
};

const saveToken = (token) => {
  localStorage.setItem("github-token", token);
};

const GithubService = {
  authenticateUrl,
  saveToken,
  getToken,
  requestToken,
  getRepos,
};

export default GithubService;
