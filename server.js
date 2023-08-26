const http = require("http");
const app = require("./app/app");
const connectDB = require("./app/db/config")
require("dotenv").config();

connectDB();

http.createServer(app).listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT}`));