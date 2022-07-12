import axios from "axios";

const authenticateUrl = () => {
  return `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`;
};

const requestGithubToken = async (code) => {
  try {
    const res = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        code,
      }
    );

    return res.data;
  } catch (error) {
    return null;
  }
};

const GithubService = { authenticateUrl, requestGithubToken };

export default GithubService;
