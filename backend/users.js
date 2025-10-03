// Simple in-memory user store for demo
const users = [];

// Find user by email
function findUserByEmail(email) {
  return users.find(u => u.email === email);
}

// Register user
function registerUser({ email, method }) {
  const existing = findUserByEmail(email);
  if (existing) {
    if (existing.method === method) {
      return { status: 'exists', message: 'User already exists' };
    } else {
      return { status: 'different', message: 'A user exists with a different option' };
    }
  }
  users.push({ email, method });
  return { status: 'success', message: 'User registered successfully' };
}

module.exports = { users, findUserByEmail, registerUser };
