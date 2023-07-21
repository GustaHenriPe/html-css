/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
  {
   name: 'QR GENERATOR 2000',
   message: 'Digite seu URL para ser processado em nossos computadores em um qrcode:',
   type: 'input',
   }])
    .then(function(answer){
    let respostaUsuario =  answer;
    fs.writeFile("URL.txt", respostaUsuario, (err)=>{
        if (err) throw err;
        console.log("The file has been saved!");
    });

 });


