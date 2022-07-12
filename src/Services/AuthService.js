const signup = (name, email, password) => {
  localStorage.setItem("user", JSON.stringify({ name, email, password }));
};

const AuthService = { signup };

export default AuthService;
