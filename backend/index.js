const express = require('express');
const mongoose = require('./db');
const cors = require('cors');
const publicationsRouter = require('./routes/publications');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/publications', publicationsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
