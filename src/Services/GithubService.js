const authenticateUrl = () => {
  return `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`;
};

const requestGithubToken = async (code) => {
  const token = await fetch(
    `https://shark-app-c39bg.ondigitalocean.app/token/${code}`
  );
  return token;
};

const GithubService = { authenticateUrl, requestGithubToken };

export default GithubService;
