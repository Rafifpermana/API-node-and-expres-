import User from "../model/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["NPM", "nama", "email", "gender", "alamat", "password"],
    });
    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const response = await User.create(req.body);
    res.status(201).json({ message: "User Created", data: response });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res
        .status(400)
        .json({ message: "Validation Error", errors: error.errors });
    } else {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
};

export const updateUser = async (req, res) => {
  try {
    const response = await User.update(req.body, {
      where: {
        NPM: req.params.NPM,
      },
    });
    if (response[0] === 1) {
      res.status(200).json({ message: "User Updated" });
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const response = await User.destroy({
      where: {
        NPM: req.params.NPM,
      },
    });
    if (response === 1) {
      res.status(200).json({ message: "User Deleted" });
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
