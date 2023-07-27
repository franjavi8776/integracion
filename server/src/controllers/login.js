import { User } from "../DB_connection.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email && !password) res.status(400).send("Faltan Datos");

    const user = await User.findOne({ where: { email } });

    if (!user) res.status(404).send("Usuario no encontrado");

    return user.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).send("Contraseña incorrecta");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default login;
