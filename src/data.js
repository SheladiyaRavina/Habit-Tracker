export const users = JSON.parse(localStorage.getItem('users')) || [];

export const saveUserToLocalStorage = (newUser) => {
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const updatedUsers = [...existingUsers, newUser];
  localStorage.setItem('users', JSON.stringify(updatedUsers));
};

export const validateLogin = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.find(user => user.email === email && user.password === password);
};
export const habitTemplates = JSON.parse(localStorage.getItem('habitTemplates')) || [];

export const saveHabitToLocalStorage = (newHabit) => {
  const existingHabits = JSON.parse(localStorage.getItem('habitTemplates')) || [];
  const updatedHabits = [...existingHabits, newHabit];
  localStorage.setItem('habitTemplates', JSON.stringify(updatedHabits));
};

export const deleteHabitFromLocalStorage = (id) => {
  const existingHabits = JSON.parse(localStorage.getItem('habitTemplates')) || [];
  const updatedHabits = existingHabits.filter(habit => habit.id !== id);
  localStorage.setItem('habitTemplates', JSON.stringify(updatedHabits));
};
