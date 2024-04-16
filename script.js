// const { response } = require("express");

document.addEventListener('DOMContentLoaded', () => {
    const account = document.getElementById('account');
    const fetchDataBtn = document.getElementById('userBtn');

    fetchDataBtn.addEventListener('click', () => {
        fetch("http://localhost:5500/data")
            .then(response => response.json())
            .then(data => {

                const name1 = document.createElement("p");// name
                name1.textContent = "Name:" + data[0].name;
                account.appendChild(name1);

                const email1 = document.createElement("p");
                email1.textContent = "Email:" + data[0].email;
                account.appendChild(email1);//email

                const age1 = document.createElement("p")
                age1.textContent = "Age:" + data[0].age;
                account.appendChild(age1);//age

                const name2 = document.createElement("p");
                name2.textContent = "Name:" + data[1].name;
                account.appendChild(name2);//name

                const email2 = document.createElement("p");
                email2.textContent = "Email:" + data[1].email;
                account.appendChild(email2);//email

                const age2 = document.createElement("p")
                age2.textContent = "Age:" + data[1].age;
                account.appendChild(age2);//age

                // account.innerHTML = JSON.stringify(data, null, 1);

            })
            .catch(error => console.log("error in fetching data", error));
    })

    const deleteButton = document.getElementById("deletebtn");

    deleteButton.addEventListener('click', async () => {
        try {
            console.log("button is clicked");
            const response = await fetch("http://localhost:5500/delete", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('failed to delete data');
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("error encountered", error);
        }

    })

})



// const mysql = require('mysql2/promise');
// const express = require('express');
// const bodyParser = require('body-parser');

// var app = express();

// app.use(express.urlencoded({ extended: true }));

// const mysqlPool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "holidays_db"
// });

// app.post('/submit', async (req, res) => {
//     const { name, email, age } = req.body;

//     try {
//         const connection = await mysqlPool.getConnection();
//         const [result] = await connection.query(
//             'INSERT INTO node_table (name, email, age) VALUES (?, ?, ?)',
//             [name, email, age]
//         );
//         connection.release();

//         console.log('Form data inserted:', result);
//         res.send("Form data received and stored in the database");
//     } catch (error) {
//         console.error('Error inserting form data:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.get('/data', async (req, res) => {
//     try {
//         const connection = await mysqlPool.getConnection();
//         console.log("connection successful");
//         const [rows, fields] = await connection.query("SELECT * FROM node_table");
//         connection.release();
//         res.json(rows);
//         console.log(rows);


//     } catch (error) {
//         console.error("MySQL error", error)
//         res.status(500).send("Internal server error");
//     }
// })



// const port = 3000;

// app.listen(port, () => {
//     console.log("App is running on port", port);
// });
