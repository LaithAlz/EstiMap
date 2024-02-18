const express = require("express");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");


const PORT = process.env.PORT || 3001;

connectDB();

const app = express();


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.use(express.json());




app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);






app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
