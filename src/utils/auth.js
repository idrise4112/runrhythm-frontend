export const registerUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username]) return false;
  users[username] = { password };
  localStorage.setItem("users", JSON.stringify(users));
  return true;
};

export const loginUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || {};
  return users[username]?.password === password;
};
