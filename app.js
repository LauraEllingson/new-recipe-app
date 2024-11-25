require("dotenv").config();
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const connectDB = require("./config/db");
const routes = require("./routes"); // Import routes/index.js

const app = express();

// Connect to MongoDB
connectDB();

// Configure Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Use routes from routes/index.js
app.use("/", routes);

// Default route (optional, can be defined in routes/index.js instead)
app.get("/", (req, res) => {
  res.render("index", { title: "Recipe Finder" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

