import User from "../model/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["NPM", "nama", "email", "gender", "alamat", "password"],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const response = await User.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const response = await User.update(req.body, {
      where: {
        NPM: req.params.NPM,
      },
    });
    if (response) {
      return res.status(200).json({ message: "User update" });
    }
    res.status(400).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const response = await User.destroy({
      where: {
        NPM: req.params.NPM,
      },
    });
    if (response) {
      return res.status(200).json({ message: "User delete" });
    }
    res.status(400).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
