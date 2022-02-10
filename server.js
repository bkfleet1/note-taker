const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes'); // API ROUTES
// const htmlRoutes = require('./routes/htmlRoutes'); // HTML ROUTES

// MIDDLEWARE to parse incoming string or array data. Must include to POST data.
app.use(express.static('public')); // Makes the public path static
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// BROWSER ROUTE TO APIs AND PAGES
app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server started successfully & running on port ${PORT}`);
});


