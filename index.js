// index.js

const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the Random Image API");
});

app.get("/api/image/random", async (req, res) => {
    try {
        // Fetch a random image from the picsum.photos API
        const response = await axios.get("https://picsum.photos/200", {
            responseType: "arraybuffer"
        });
        // Set the content type to the response content type
        res.set("Content-Type", response.headers["content-type"]);
        // Send the image data
        res.send(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching image", error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
