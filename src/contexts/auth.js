
export const users = JSON.parse(localStorage.getItem('users')) || [];


export const saveUserToLocalStorage = (newUser) => {
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const updatedUsers = [...existingUsers, newUser];
  localStorage.setItem('users', JSON.stringify(updatedUsers));
};


export const validateLogin = (email, password, role) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  return users.find(user => user.email === email && user.password === password && user.role === role) || null;
};
