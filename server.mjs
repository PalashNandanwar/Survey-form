// Import required packages
import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import the cors package

const app = express();
const port = 5173;

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'survey'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all origins
app.use(cors());

// Endpoint to receive survey data
app.post('/submit-survey', (req, res) => {
    const surveyData = req.body;
    const { satisfiedProducts, pricesCompared, valueMoney, friendsFamily, improveServices } = surveyData;

    // Insert data into MySQL
    const query = 'INSERT INTO surveys (satisfied_products, prices_compared, value_money, friends_family, improveServices) VALUES (?, ?, ?, ?, ?)';
    const values = [satisfiedProducts, pricesCompared, valueMoney, friendsFamily, improveServices];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send({ success: false, error: 'Error saving survey data' }); // Send error response
        }

        console.log('Data inserted into database');
        res.send({ success: true }); // Send success response
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});