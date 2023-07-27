import server from "./app.js";
import { sequelize } from "./DB_connection.js";
import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env || 3001;

server.listen(PORT, () => {
  sequelize.sync({ force: true });
  console.log(`listening on port: ${PORT}`);
});
