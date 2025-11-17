export const registerUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem("runrhythmUser")) || {};
  if (users[username]) return false;
  users[username] = { password };
  localStorage.setItem("users", JSON.stringify(users));
  return true;
};

export const loginUser = (username, password) => {
  console.log(13231231);
  console.log(username, password);
  const users = JSON.parse(localStorage.getItem("runrhythmUser")) || {};
  console.log(users);
  return users[username]?.password === password;
};
