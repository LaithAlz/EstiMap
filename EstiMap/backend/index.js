const express = require("express");
const { spawn } = require("child_process");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3001;

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);

app.post("/predict", (req, res) => {
    const data = req.body;
    const pythonProcess = spawn('python3', ['predict.py', JSON.stringify(data)]);

    pythonProcess.stdout.on('data', (data) => {
        const prediction = data.toString();
        res.json({ predicted_price: prediction.trim() });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).send('An error occurred while processing the prediction.');
    });

    pythonProcess.on('error', (error) => {
        console.error(`Failed to start subprocess: ${error}`);
        res.status(500).send('Failed to start prediction process. Ensure Python is installed and accessible.');
    });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
