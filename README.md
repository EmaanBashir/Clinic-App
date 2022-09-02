# Application for Clinic Reception
A desktop application that generates and prints receipts and keeps record of patients in a clinic. 
<br><br>
Coded in *Electron Forge*: 
- Html 
- CSS 
- Bootstrap 
- Javascript
- MySQL 

## How to run the Application
Go t
- npm install

## How to create an electron application
https://adityasridhar.com/posts/desktop-apps-with-html-css-javascript#:~:text=Electron%20can%20be%20used%20to%20build%20Desktop%20Apps%20with%20HTML,Code%20as%20a%20desktop%20application.

- npm install -g electron-forge 
- electron-forge init simple-desktop-app-electronjs
- cd simple-desktop-app-electronjs
- npm start

## How to package the application
- npm run package

## How to create an installer
- npm run make

If images are included, they will not appear in the packaged application. In order to make the images appear,
- npm i --save electron-compile 
- Paste the following two lines at the start of the index.js file 
import { addBypassChecker } from 'electron-compile'; <br>
addBypassChecker((filePath) => { return filePath.indexOf(app.getAppPath()) === -1 && (/.jpg/.test(filePath) || /.jfif/.test(filePath) || /.png/.test(filePath)); })
 (This statement is used if jpg, jfif and png image types are used. Replace these with the required image type) <br>
  
  

