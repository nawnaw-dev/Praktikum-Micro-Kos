let users = [];

// CREATE USER
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

// LOGIN USER (FIXED + JELAS RESPONSE)
exports.login = (data) => {
  const user = users.find(
    (u) => u.email === data.email && u.password === data.password
  );

  if (!user) {
    return {
      success: false,
      message: "Login gagal: email atau password salah",
    };
  }

  return {
    success: true,
    message: "Login berhasil",
    data: user,
  };
};

// GET ALL USERS
exports.getUsers = () => {
  return users;
};

// GET BY ID
exports.getUserById = (id) => {
  return users.find((u) => u.id === id);
};

// UPDATE USER
exports.updateUser = (id, data) => {
  const user = users.find((u) => u.id === id);
  if (!user) {
    return {
      success: false,
      message: "User tidak ditemukan",
    };
  }

  user.name = data.name || user.name;
  user.email = data.email || user.email;
  user.password = data.password || user.password;

  return {
    success: true,
    message: "User berhasil diupdate",
    data: user,
  };
};

// DELETE USER
exports.deleteUser = (id) => {
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return {
      success: false,
      message: "User tidak ditemukan",
    };
  }

  users.splice(index, 1);

  return {
    success: true,
    message: "User berhasil dihapus",
  };
};