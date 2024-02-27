const userRepository = (db) => {
  const getAllUsers = () => {
    db.all("SELECT * FROM users", (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  };

  // Get user by ID
  const getUserById = (userId) => {
    db.get("SELECT * FROM users WHERE id = ?", [userId], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (row) {
        res.json(row);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    });
  };

  // Add a new user with validation
  const addUser = (name) => {
    const insertUser = db.prepare("INSERT INTO users (name) VALUES (?)");
    insertUser.run(name, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(201).json({ message: "User added successfully" });
    });

    insertUser.finalize();
  };

  // Update user by ID
  const updateUserById = (userId, name) => {
    res.json({ message: "Update user by ID" });
  };

  // Delete user by ID
  const deleteUserById = (userId) => {
    res.json({ message: "Delete user by ID" });
  };

  return {
    getAllUsers,
    getUserById,
    addUser,
    updateUserById,
    deleteUserById,
  };
};

module.exports = userRepository;
