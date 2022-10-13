require("dotenv").config();

module.exports = {
  mongo: process.env.DB || "mongo://localhost:27017/qr-code",
  port: process.env.PORT || 5000,
};
