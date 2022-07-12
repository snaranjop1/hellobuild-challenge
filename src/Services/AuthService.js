const signup = (name, email, password) => {
  localStorage.setItem("user", JSON.stringify({ name, email, password }));
};

const login = (email, password) => {
  const user = localStorage.getItem("user");

  if (user) {
    const parsedUser = JSON.parse(user);
    return email === parsedUser.email && password === parsedUser.password;
  }

  return false;
};

const isAuth = () => {
  return localStorage.getItem("user");
};

const AuthService = { signup, login, isAuth };

export default AuthService;
