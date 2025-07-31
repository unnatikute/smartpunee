const bcrypt = require('bcryptjs');

async function run() {
  const plainPassword = '1234'; // Replace with your actual password
  const hash = await bcrypt.hash(plainPassword, 10);
  console.log('Your hashed password:', hash);
}

run();
