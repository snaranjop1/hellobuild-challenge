const signup = (name, email, password) => {
  localStorage.setItem("user", JSON.stringify({ name, email, password }));
};

const login = (email, password) => {
  const user = localStorage.getItem("user");

  if (user) {
    return email === user.email && password === user.password;
  }

  return false;
};

const AuthService = { signup, login };

export default AuthService;
