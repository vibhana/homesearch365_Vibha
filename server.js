// Import npm packages
const { isLabelWithInternallyDisabledControl } = require('@testing-library/user-event/dist/utils');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const routes = require('./routes/api');

// Step 2
mongoose.connect('mongodb://localhost:27017/HouseData', {
    useNewUrlParser: true
});



const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Mongoose is connected!!!!'))
// Data parsing
app.use(express.json());

// Step 3

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);




app.listen(PORT, console.log(`Server is starting at ${PORT}`));