import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_URL } = process.env;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(`${API_URL}${id}`);
    const data = response.data;
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };
    character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export default getCharById;
