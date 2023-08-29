const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB is Connected'))
.catch(err => console.log("DB not connected",err));
const app = express();
//middleware
app.use(express.json());

app.use('/', require('./routes/authRoutes'));  
const port =  8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));