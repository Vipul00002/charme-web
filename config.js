const env = require("dotenv");
env.config();
PORT = process.env.PORT;

module.exports = { PORT };
