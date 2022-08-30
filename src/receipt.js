//Save receipt data
function saveData() {

    let patientId = document.querySelector('#patientId').value;
    let name = document.querySelector('#patientName').value;
    let age = document.querySelector('#patientAge').value;
    let gender = document.querySelector('#patientGender').value;
    let address = document.querySelector('#patientAddress').value;
    let phone = document.querySelector('#patientPhone').value;
    let fee = document.querySelector('#fee').value;
    let consultantId = document.querySelector('#consultant').value;

    let query = `SELECT * FROM Patients WHERE id = "${patientId}";`

    connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err.stack);
            return;
        }
        if (rows.length > 0) {
            query = `UPDATE Patients SET name = "${name}", age = "${age}", gender = "${gender}", address = "${address}", phone = "${phone}" WHERE id = "${patientId}";`

            connection.query(query, (err, rows, fields) => {
                if (err) {
                    console.log("An error ocurred performing the query.");
                    console.log(err.stack);
                    return;
                }
                
            });
        }else{
            query = `INSERT INTO Patients (id, name, age, gender, address, phone) VALUES ("${patientId}", "${name}", "${age}", "${gender}", "${address}", "${phone}");`

            connection.query(query, (err, rows, fields) => {
                if (err) {
                    console.log("An error ocurred performing the query.");
                    console.log(err.stack);
                    return;
                }
            });
        }
    });
    
    query = `INSERT INTO Consultations (patientId, consultantId, fee) VALUES ("${patientId}", "${consultantId}", "${fee}");`

    connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err.stack);
            return;
        }
    });
}


//Print the Receipt
function printData() {

    // console.log("hello");
    // // Add a table
    // var mytable = repDocObj.addTable("MyTable");
    // var tableRow;

    // // Row 1: the header of the table, columns titles
    // var header = mytable.getHeader();
    // tableRow = header.addRow();
    // tableRow.addCell("Description").setStyleAttributes("text-align:left; font-weight:bold; border:thin solid black;");
    // tableRow.addCell("Amount").setStyleAttributes("text-align:left; font-weight:bold; border:thin solid black;");

    // // Row 2: first data row of the table
    // tableRow = mytable.addRow();
    // tableRow.addCell("Workshop").setStyleAttributes("text-align:left; border:thin solid black;");
    // tableRow.addCell("2'600.00").setStyleAttributes("text-align:right; border:thin solid black;");

    // // Row 3: second data row of the table
    // tableRow = mytable.addRow();
    // tableRow.addCell("Material").setStyleAttributes("text-align:left; border:thin solid black;");
    // tableRow.addCell("76.00").setStyleAttributes("text-align:right; border:thin solid black;");

console.log("hiiii");



// window.print();

    //let WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    //WinPrint.document.write(document.querySelector(".container").innerHTML);
    // WinPrint.document.close();
    // WinPrint.focus();
    // WinPrint.print();
    // WinPrint.close();
    console.log("whyyyyy");

}

//Save and print receipt
document.querySelector("#receipt").addEventListener('submit', (e) => {
    e.preventDefault();
    saveData();
    printData();

});

