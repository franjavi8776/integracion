import { Favorite } from "../DB_connection.js";

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;

    await Favorite.destroy({ where: { id } });

    const AllFavorites = await Favorite.findAll();
    return res.json(AllFavorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default deleteFav;
