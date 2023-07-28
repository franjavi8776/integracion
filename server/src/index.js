import server from "./app.js";
import { conn } from "./DB_connection.js";
import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env || 3001;

server.listen(PORT, async () => {
  await conn.sync({ force: false });
  console.log(`listening on port: ${PORT}`);
});
