const fs = require("fs");
const path = require("path");

const DATA_STORE = path.join(__dirname, "data", "users.json");

const getUserByEmail = async (userEmail, allUsers = []) => {
  if (allUsers.length < 1) {
    const data = await readFromDataStore();
    allUsers = data.users;
  }
  userFound = allUsers.filter((user) => user.email == userEmail);
  if (userFound.length > 0) {
    return userFound[0];
  } else {
    return null;
  }
};

const readFromDataStore = async () => {
  try {
    data = fs.readFileSync(DATA_STORE, "utf8");
  } catch (error) {
    return { users: [] };
  }

  if (!data) return { users: [] };
  return JSON.parse(data);
};

module.exports = { getUserByEmail };
