const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, this is a test page - DevOps POC Microservice');
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
    res.send('Hello! This version is automatically built and pushed to Docker Hub!');
});

app.listen(PORT, () => {
    console.log(`Microservice running on port ${PORT}`);
});