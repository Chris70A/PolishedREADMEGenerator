// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const generateMarkdown = require("./utils/generateMarkdown")

//  array of questions for user input
const questions = [{

    type: "input",
        name: "title",
        message: "Name your Project.",
      },
      {
        type: "input",
        name: "description",
        message: "The purpose and functionality of this project.",
      },
      {
        type: "input",
        name: "screenshot",
        message: "Provide the image you want to use as the screenshot."
      },
      {
        type: "input",
        name: "link",
        message: "Provide a URL where a user can access your application."
      },
      {
        type: "checkbox",
        name: "license",
        message: "Select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: "input",
        name: "require",
        message: "List any project dependencies.",
      },
      {
        type: "input",
        name: "features",
        message: "Provide a list of features for this project.",
      },
      {
        type: "input",
        name: "usage",
        message:
          "How to Use This Application?",
      },
      {
        type: "input",
        name: "creator",
        message: "Provide your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: "Provide a email address.",
      },
      {
        type: "input",
        name: "contributors",
        message: "Provide a list of any contributors. (Use GitHub usernames)",
        default: "",
      },
      {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
   

}];


// function to write README file
function writeToFile(fileName, data) {
  //the writeFileSync method writes the data to the file by fileName.
return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
}

// uses inquirer module to give the users questions
function init() {
    inquirer.prompt(questions).then((responses) => { //takes the users response as an argument
        console.log("creating Polished README.md file..."); // displays message
        writeToFile("./README.md" , generateMarkdown({ ...responses })); // name the file and create markdown format responses
    });
}

// Function call to initialize app
init();