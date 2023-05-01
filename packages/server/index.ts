import { server } from "./src/server";

const port = process.env.PORT || 9000;

// Server Start
server.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
