let users = [];

exports.createUser = (data) => {
  const newUser = {
    id: users.length + 1,
    name: data.name,
    email: data.email,
    password: data.password,
  };

  users.push(newUser);
  return newUser;
};

exports.login = (data) => {
  return users.find(
    (u) => u.email === data.email && u.password === data.password
  );
};

exports.getUsers = () => users;

exports.getUserById = (id) => {
  return users.find((u) => u.id === id);
};

exports.updateUser = (id, data) => {
  const user = users.find((u) => u.id === id);
  if (!user) return null;

  user.name = data.name || user.name;
  user.email = data.email || user.email;

  return user;
};

exports.deleteUser = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return false;

  users.splice(index, 1);
  return true;
};