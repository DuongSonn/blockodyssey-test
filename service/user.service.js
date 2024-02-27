const userRepository = require("../repository/user.repository");

const userServices = (db) => {
  const userRepo = userRepository(db);

  // Get all users
  const getAllUsers = (req, res) => {
    try {
      return userRepo.getAllUsers();
    } catch (error) {
      return res.status(500).json({ error: err.message });
    }
  };

  // Get user by ID
  const getUserById = (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      return userRepo.getUserById(userId);
    } catch (error) {
      return res.status(500).json({ error: err.message });
    }
  };

  // Add a new user with validation
  const addUser = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;
    try {
      return userRepo.addUser(name);
    } catch (error) {
      return res.status(500).json({ error: err.message });
    }
  };

  // Update user by ID
  const updateUserById = (req, res) => {
    try {
      const { name, id } = req.body;

      return userRepo.updateUserById(id, name);
    } catch (error) {
      return res.status(500).json({ error: err.message });
    }
  };

  // Delete user by ID
  const deleteUserById = (req, res) => {
    try {
      const userId = parseInt(req.params.id);

      return userRepo.deleteUserById(userId);
    } catch (error) {
      return res.status(500).json({ error: err.message });
    }
  };

  return {
    getAllUsers,
    getUserById,
    addUser,
    updateUserById,
    deleteUserById,
  };
};

module.exports = userServices;
