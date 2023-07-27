import { User } from "../DB_connection.js";

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) res.status(400).send("Faltan Datos");

    const user = await User.findOrCreate({ where: { email, password } });

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default postUser;
