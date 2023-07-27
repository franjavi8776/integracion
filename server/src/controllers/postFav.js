import { Favorite } from "../DB_connection.js";

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).send("Faltan datos");
    }

    await Favorite.findOrCreate({
      where: { id, name, origin, status, image, species, gender },
    });

    const AllFavorites = await Favorite.findAll();
    return res.json(AllFavorites);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default postFav;
