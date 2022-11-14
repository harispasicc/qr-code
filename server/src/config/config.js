require("dotenv").config();

module.exports = {
  mongo: process.env.DB,
  port: process.env.PORT,
};

// export default {
//   port: 5000,
//   mongo: "mongodb://localhost:27017/qrcode",
// };
