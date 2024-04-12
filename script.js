document.addEventListener('DOMContentLoaded', () => {
    // const account = document.getElementById('account');
    // fetchDataBtn.addEventListener('click', () => {
    //     fetch("/data")
    //         .then(response => response.json)
    //         .then(data => {
    //             account.textContent = JSON.stringify(data, null, 2);
    //         })
    //         .catch(error => console.log("error in fetching data", error));
    // })

    const deleteButton = document.getElementById("deletebtn");

    deleteButton.addEventListener('click', async () => {
        try {
            console.log("button is clicked");
            const response = await fetch("http://localhost:3000/delete", {
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
        }catch(error){
            console.error("error encountered",error);
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
