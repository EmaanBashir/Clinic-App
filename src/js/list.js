let sql = require('mysql');
let gender, totalFee;

let conn = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'eyemed_db'
});

conn.connect((err) => {
    if (err) {
        console.log(err.stack);
    }
    console.log("Connection successful");
});

let loadData = (consultantId) => {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let anotherYear = currentMonth == 0 ? currentYear - 1 : currentYear;
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    document.querySelector("#currentMonth").innerHTML = months[currentMonth];
    document.querySelector("#previousMonth").innerHTML = months[(currentMonth + 11) % 12];
    document.querySelector('#tbody1').innerHTML = "";
    document.querySelector('#tbody2').innerHTML = "";
    let q = `SELECT * FROM Consultations INNER JOIN Patients ON patientId = id WHERE consultantId = "${consultantId}" AND YEAR(Consultations.date) = "${currentYear}" AND MONTH(Consultations.date) = "${currentMonth + 1}" ORDER BY consultationId DESC;`;

    conn.query(q, (err, rows, fields) => {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err.stack);
            return;
        }
        totalFee = 0;
        for (let i = 0; i < rows.length; i++) {
            switch (rows[i].gender) {
                case 'm':
                    gender = "male";
                    break;
                case 'f':
                    gender = "female";
                    break;
                default:
                    gender = "-";
            }
            totalFee += rows[i].fee;
            document.querySelector('#tbody1').innerHTML += `
                        <tr>
                            <th scope="row">${rows[i].patientId}</th>
                            <td>${rows[i].name}</td>
                            <td>${rows[i].age ? rows[i].age : '-'}</td>
                            <td>${gender}</td>
                            <td>${rows[i].date.toDateString()}</td>
                            <td>${rows[i].phone ? rows[i].phone : '-'}</td>
                            <td>${rows[i].address ? rows[i].address : '-'}</td>
                            <td>${rows[i].fee}</td>
                        </tr>`;
        }
        document.querySelector("#total1").innerHTML = totalFee;
    });

    let totalFee2
    q = `SELECT * FROM Consultations INNER JOIN Patients ON patientId = id WHERE consultantId = "${consultantId}" AND (YEAR(Consultations.date) = "${currentYear}" OR YEAR(Consultations.date) = "${anotherYear}") AND MONTH(Consultations.date) = "${currentMonth}" ORDER BY consultationId DESC;`;
    conn.query(q, (err, rows, fields) => {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err.stack);
            return;
        }
        totalFee2 = 0;
        for (let i = 0; i < rows.length; i++) {
            switch (rows[i].gender) {
                case 'm':
                    gender = "male";
                    break;
                case 'f':
                    gender = "female";
                    break;
                default:
                    gender = "-";
            }

            totalFee2 += rows[i].fee;
            document.querySelector('#tbody2').innerHTML += `
                        <tr>
                            <th scope="row">${rows[i].patientId}</th>
                            <td>${rows[i].name}</td>
                            <td>${rows[i].age ? rows[i].age : '-'}</td>
                            <td>${gender}</td>
                            <td>${rows[i].date.toDateString()}</td>
                            <td>${rows[i].phone ? rows[i].phone : '-'}</td>
                            <td>${rows[i].address ? rows[i].address : '-'}</td>
                            <td>${rows[i].fee}</td>
                        </tr>`;
        }
        document.querySelector("#total2").innerHTML = totalFee2;
    });
}

let consultantSelect = document.querySelector("#consultant");
consultantSelect.addEventListener('change', () => {
    loadData(consultantSelect.value);
});

loadData(0);
let backBtn = document.querySelector("#backBtn");
let printBtn = document.querySelector("#printBtn");
let containerLg = document.querySelector(".container-lg");

printBtn.addEventListener('click', () => {
    backBtn.style.display = "none";
    printBtn.style.display = "none";
    containerLg.classList.remove("p-5");
    containerLg.classList.remove("mt-5");
    window.print();
    containerLg.classList.add("p-5");
    containerLg.classList.add("mt-5");
    backBtn.style.display = "inline";
    printBtn.style.display = "inline"
})