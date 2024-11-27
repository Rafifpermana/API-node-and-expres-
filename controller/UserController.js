import User from "../model/UserModel.js";

const checkUser = async (req, res) => {
  const existingUser = await User.findOne({ where: { NPM } });
  if (existingUser) {
    return res.status(409).json({ message: "Conflict: User already exists" });
  }
};

export const getUser = async (req, res) => {
  const { NPM } = req.params;

  try {
    const user = await User.findOne({ where: { NPM } });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Not Found: User does not exist" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error: Error retrieving user", error });
  }
};

export const createUser = async (req, res) => {
  if (!NPM || !nama || !email || !password) {
    return res
      .status(400)
      .json({ message: "Bad Request: Missing required fields" });
  }

  try {
    const newUser = await User.create({
      NPM,
      nama,
      email,
      gender,
      alamat,
      password,
    });
    res
      .status(201)
      .json({ message: "User  created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error: Error creating user", error });
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
