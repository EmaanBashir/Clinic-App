
let query = `SELECT max(id) as id FROM Patients`;
let idInput = document.querySelector("#patientId");
let id;

connection.query(query, (err, rows, fields) => {
    if (err) {
        console.log("An error ocurred performing the query.");
        console.log(err.stack);
        return;
    }
    id = rows[0].id;
    idInput.value = id + 1;
    idInput.max = id + 1;
});

let patientAge = document.querySelector("#patientAge");
let patientGender = document.querySelector("#patientGender");
let patientName = document.querySelector("#patientName");
let patientAddress = document.querySelector("#patientAddress");
let patientPhone = document.querySelector("#patientPhone");
let changed = false;

//Old patient checkbox
let checkbox = document.querySelector("#old");
checkbox.addEventListener('change', () => {
    let old = checkbox.checked;
    if (old) {
        idInput.removeAttribute('disabled');
        idInput.value = idInput.defaultValue;
    } else {
        idInput.setAttribute('disabled', '');
        idInput.value = id + 1;
        if (changed) {
            patientAge.value = patientAge.defaultValue;
            patientGender.value = patientGender.defaultValue;
            patientName.value = patientName.defaultValue;
            patientAddress.value = patientAddress.defaultValue;
            patientPhone.value = patientPhone.defaultValue;
            changed = false;
        }
    }
})



idInput.addEventListener('keyup', () => {
    let num = idInput.value;
    if (changed) {
        patientAge.value = patientAge.defaultValue;
        patientGender.value = patientGender.defaultValue;
        patientName.value = patientName.defaultValue;
        patientAddress.value = patientAddress.defaultValue;
        patientPhone.value = patientPhone.defaultValue;
        changed = false;
    }
    if (num <= id) {

        query = `SELECT * from Patients WHERE id = '${num}'`;

        connection.query(query, (err, rows, fields) => {
            if (err) {
                console.log("An error ocurred performing the query.");
                console.log(err.stack);
                return;
            }
            if (rows.length > 0) {
                let patient = rows[0];
                patientAge.value = patient.age;
                patientGender.value = patient.gender;
                patientName.value = patient.name;
                patientAddress.value = patient.address;
                patientPhone.value = patient.phone;
                changed = true;
            }
        });
    }
})

