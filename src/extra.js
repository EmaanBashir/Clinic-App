let qy = `SELECT max(id) as id FROM Patients`;
let idInp = document.querySelector("#patientId");
let idss;

const Student = "hemmlo";

const e =()=>{connection.query(qy, (err, rows, fields) => {
    if (err) {
        console.log("An error ocurred performing the query.");
        console.log(err.stack);
        return;
    }
    
});}


module.exports = {Student};