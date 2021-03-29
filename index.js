const app = require("./src/app");
const { port } = require("./src/Config/AppConfig");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
