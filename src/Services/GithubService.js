const authenticateUrl = () => {
  return `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`;
};

const saveToken = (token) => {
  localStorage.setItem("github-token", token);
};

const GithubService = { authenticateUrl, saveToken };

export default GithubService;
