const allRoles = {
  user: ['register', 'login', 'getTodos', 'getTodo', 'createTodo'],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
