//Establish MySQL Connection
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

        //Get the latest consultation from the db to print it
        let mrNo;

        let quer = `SELECT patientId, consultantId, fee, date FROM Consultations  
ORDER BY consultationId DESC LIMIT 1; `;


        connectio.query(quer, (err, rows, fields) => {
            if (err) {
                console.log("An error ocurred performing the query.");
                console.log(err.stack);
                return;
            }

            mrNo = rows[0].patientId;
            document.querySelector("#mrNo").innerHTML = mrNo;
            document.querySelector("#date").innerHTML = rows[0].date.toDateString();
            document.querySelector("#fee").innerHTML = rows[0].fee;
            document.querySelector("#mrNo1").innerHTML = mrNo;
            document.querySelector("#date1").innerHTML = rows[0].date.toDateString();
            document.querySelector("#fee1").innerHTML = rows[0].fee;
            switch (rows[0].consultantId) {
                case 0:
                    document.querySelector("#consultant").innerHTML = "Dr. Hamid Bashir";
                    document.querySelector("#speciality").innerHTML = "Medical Specialist";
                    document.querySelector("#consultant1").innerHTML = "Dr. Hamid Bashir";
                    document.querySelector("#speciality1").innerHTML = "Medical Specialist";
                    break;
                case 1:
                    document.querySelector("#consultant").innerHTML = "Dr. Naeem Altaf";
                    document.querySelector("#speciality").innerHTML = "Eye Specialist";
                    document.querySelector("#consultant1").innerHTML = "Dr. Naeem Altaf";
                    document.querySelector("#speciality1").innerHTML = "Eye Specialist";
                    break;
            }

            //Get the details of the latest patient
            quer = `SELECT * FROM Patients WHERE id = "${mrNo}"`;

            connectio.query(quer, (err, rows, fields) => {
                if (err) {
                    console.log("An error ocurred performing the query.");
                    console.log(err.stack);
                    return;
                }
                document.querySelector("#age").innerHTML = rows[0].age ? rows[0].age : '-';
                document.querySelector("#address").innerHTML = rows[0].address ? rows[0].address : '-';
                document.querySelector("#phone").innerHTML = rows[0].phone ? rows[0].phone : '-';
                document.querySelector("#age1").innerHTML = rows[0].age ? rows[0].age : '-';
                document.querySelector("#address1").innerHTML = rows[0].address ? rows[0].address : '-';
                document.querySelector("#phone1").innerHTML = rows[0].phone ? rows[0].phone : '-';
                switch (rows[0].gender) {
                    case 'm':
                        document.querySelector("#gender").innerHTML = 'male';
                        document.querySelector("#gender1").innerHTML = 'male';
                        break;
                    case 'f':
                        document.querySelector("#gender").innerHTML = 'female';
                        document.querySelector("#gender1").innerHTML = 'female';
                        break;
                    default:
                        document.querySelector("#gender").innerHTML = '-';
                        document.querySelector("#gender1").innerHTML = '-';
                }
                document.querySelector("#name").innerHTML = rows[0].name;
                document.querySelector("#name1").innerHTML = rows[0].name;

                //print the receipt
                window.print();

            });

        });

