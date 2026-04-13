const userService = require("../services/userService");

exports.register = (req, res) => {
  const user = userService.createUser(req.body);
  res.status(201).json(user);
};

exports.login = (req, res) => {
  const user = userService.login(req.body);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json(user);
};

exports.getAllUsers = (req, res) => {
  res.json(userService.getUsers());
};

exports.getUserById = (req, res) => {
  const user = userService.getUserById(parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

exports.updateUser = (req, res) => {
  const user = userService.updateUser(parseInt(req.params.id), req.body);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

exports.deleteUser = (req, res) => {
  const success = userService.deleteUser(parseInt(req.params.id));

  if (!success) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ message: "User deleted" });
};