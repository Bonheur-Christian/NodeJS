const express = require('express');
const mysql = require('mysql2/promise');
const parser = require('body-parser');
const cors = require('cors')


const app = express();
app.use(cors())


app.use(express.urlencoded({ extended: true }));

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'holidays_db'
})

app.post('/submit', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const connection = await mysqlPool.getConnection();
        const [result] = await connection.query("INSERT INTO node_table (name, email, age) VALUES (?,?,?)",
            [name, email, age]);
        connection.release();
        console.log("form data inserted", result);
        res.send("form data recieved and saved in the database")
    } catch (error) {
        console.error("error occured", error);
        res.status(500).send("Internal server error");
    }




})

app.get('/data', async (req, res) => {
    try {
        const connection = await mysqlPool.getConnection();
        console.log("connection successful");
        const [rows, fields] = await connection.query('SELECT * FROM node_table');
        connection.release();
        res.json(rows);
        console.log(rows);

        console.log("data is successful retrieved");
    } catch (error) {
        console.error("error occured", error);
        res.status(500).send("Internal server error");
    }
})

app.delete('/delete', async (req, res) => {
    try {
        const connection = await mysqlPool.getConnection();
        const [rows, fields] = await connection.query("DELETE FROM node_table WHERE user_id = 6");
        connection.release();

        res.json(rows);

        console.log(rows);
    } catch (error) {
        console.error("error occured in ur codes", error);
        res.status(500).send("Internal server error", error);
    }

})

const port = 5500;

app.listen(port, () => {
    console.log("App is runnng on port ", port);
})