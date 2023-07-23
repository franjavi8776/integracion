import server from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env || 3001;

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
