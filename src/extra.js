

const Student = "hemmlo";

let mysq = require('mysql');

let connectio = mysq.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'eyemed_db'
});

connectio.connect((err) => {
    if (err) {
        console.log(err.stack);
    }
    console.log("Connection successful");
});

let quer = `SELECT max(id) as id FROM Patients`;

async function e() {
    connection.query(quer, (err, rows, fields) => {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err.stack);
            return;
        }
    });
}

module.exports = { e };
const re = "sdfsfsfsd";