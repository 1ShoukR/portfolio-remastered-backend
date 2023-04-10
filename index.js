const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const projectsRoutes = require('./routes/projects');





const app = express();



app.use('/projects', projectsRoutes)

app.listen(PORT, console.log(`Listening on port ${PORT}`));