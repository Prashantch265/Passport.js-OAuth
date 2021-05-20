const app = require("./express");
const sequelize = require("../database/models/index");

let port = process.env.PORT;

app.listen(port, () => console.log(`server started on ${port}`));

try {
  sequelize.sync({ force: true }).then(() => console.log("DB connected"));
} catch (err) {
  console.log(err);
}
