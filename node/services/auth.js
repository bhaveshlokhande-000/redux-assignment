const bcrypt = require("bcryptjs");

const matchPassword = async (password1, password2) => {
  const isMatch = await bcrypt.compare(password1, password2);
  return isMatch;
};

module.exports = {
  matchPassword,
};
