const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const colors = require('colors');
const generateSVG = require('./lib/generateSVG');

const questions = [
    {
        type: "input",
        message: "Enter the text to your logo",
        name: "text",
    },
    {
        type: "list",
        message: "Select your choice of text color",
        name: "textColor",
        choices: ["White", "Black"]
    },
    {
        type: "list",
        message: "Select your choice of shape",
        name: "shape",
        choices: ["Triangle", "Circle", "Square"],
    },
    {
        type: "list",
        message: "select your choice of shape color",
        name: "shapeColor",
        choices: ["Red", "Yellow", "Blue"]
    }];

    function writeToFile(fileName, data) {
        const scalableVectorGraphics = generateSVG(data);
    
        fs.writeFile(fileName, scalableVectorGraphics, 
           (err) => err ? console.log(colors.bgBrightRed(err))
           : console.log(colors.bgBrightGreen("success!")) 
        );
    };



//The application must include Triangle, Circle, and Square classes, 
//as well as tests for each of these classes using Jest.
//parent shape class, use inheritance to reuse the code in the child classes


//Each shape class should be tested for a render() method that returns a string 
//for the corresponding SVG file with the given shape color.



/* const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); */

/*
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);

    fs.writeFile(fileName, markdown, 
       (err) => err ? console.log(colors.bgBrightRed(err))
       : console.log(colors.bgBrightGreen("success!")) 
    );
}
 
function init() {
inquirer
    .prompt(questions).then((data) => {
        writeToFile("README.md", data);
    });
    };
*/
function init() {
inquirer
  .prompt(questions)
  .then((data) => { 
    writeToFile("logo.svg", data);
  })
};

init();