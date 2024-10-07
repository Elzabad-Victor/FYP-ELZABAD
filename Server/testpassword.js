const bcrypt = require('bcrypt');

const enteredPassword = 'abc'; // The password you want to test
const storedHash = '$2b$10$jq/f1Fguwn2lVRn2xU5NLOmv.AeMayuFFLrQ//SktN4h5nkUBF2RK'; // Your stored hashed password

const comparePasswords = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash);
  console.log('Password Match:', isMatch);
};

comparePasswords(enteredPassword, storedHash);
