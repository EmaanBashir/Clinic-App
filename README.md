# Application for Clinic Reception
A desktop application that generates and prints receipts and keeps record of patients in a clinic. 
<br><br>
Coded in *Electron Forge*: <br>
-Html <br>
-CSS <br>
-Bootstrap <br>
-Javascript <br>
-MySQL <br>

## How to run the Application
-

## How to make an electron application
https://adityasridhar.com/posts/desktop-apps-with-html-css-javascript#:~:text=Electron%20can%20be%20used%20to%20build%20Desktop%20Apps%20with%20HTML,Code%20as%20a%20desktop%20application. <br>

If images are included, they will not appear in the packaged application. In order to make the images appear, <br><Br>
-Run the command npm i --save electron-compile <br>
-Paste the following two lines at the start of the index.js file <br><br>
     import { addBypassChecker } from 'electron-compile'; <br>
     addBypassChecker((filePath) => { return filePath.indexOf(app.getAppPath()) === -1 && (/.jpg/.test(filePath) || /.jfif/.test(filePath) || /.png/.test(filePath)); }) <br>
 (This statement is used if jpg, jfif and png image types are used. Replace these with the required image type) <br>
  
  

