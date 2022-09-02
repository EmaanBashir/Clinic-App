# Application for Clinic Reception
A desktop application that generates and prints receipts and keeps record of patients in a clinic. 



Coded in *Electron Forge*: 
- Html 
- CSS 
- Bootstrap 
- Javascript
- MySQL 

## How to run the Application
- Download the code
- Go to the folder containing src folder
- npm install
- Download XAMPP and start apache and mysql (If they dont start automatically)
- Create db and required tables manually on localhost/phpmyadmin (DB structure given at the end)
- npm start

## How to create an electron application
https://adityasridhar.com/posts/desktop-apps-with-html-css-javascript#:~:text=Electron%20can%20be%20used%20to%20build%20Desktop%20Apps%20with%20HTML,Code%20as%20a%20desktop%20application.

- npm install -g electron-forge 
- electron-forge init simple-desktop-app-electronjs
- cd simple-desktop-app-electronjs
- npm start

## How to package the application
- npm run package

## How to create an installer
- npm run make <br>

If images are included, they will not appear in the packaged application. In order to make the images appear,
- npm i --save electron-compile 
- Paste the following two lines at the start of the index.js file <br>


import { addBypassChecker } from 'electron-compile';


addBypassChecker((filePath) => { return filePath.indexOf(app.getAppPath()) === -1 && (/.jpg/.test(filePath) || /.jfif/.test(filePath) || /.png/.test(filePath)); })


(This statement is used if jpg, jfif and png image types are used. Replace these with the required image type)
  
## How to run the application on client computer
- Install the application using the installer
- Download XAMPP
- Open XAMPP in admin mode
- Check the boxes next to apache and mysql (This will start apache and mysql automatically, whenever the system boots.)
- Create the db and required tables manually at localhost/phpmyadmin (DB structure given at the end)
- Run the application

## Database structure
**Database name:** eyemed_db <br>
**Table:** Consultations <br>
![image](https://user-images.githubusercontent.com/56760682/188235247-76c71dba-9567-4d15-9156-95ec5b7d5eff.png) <br>
**Table:** Patients <br>
![image](https://user-images.githubusercontent.com/56760682/188235493-3cbe4cae-cca4-435b-8c6e-b9e3804d7451.png) <br>
**Table:** Users <br>
![image](https://user-images.githubusercontent.com/56760682/188235536-cc828466-37de-4bd3-bb79-b61a7ae65524.png) <br>

