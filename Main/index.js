// Include packages needed for this application
const inquirer = require("inquirer");
const fs =require("fs");
const generateMD = require("./generateMD");

// Prompting user inputs
inquirer.prompt ([
    {
        type:"input",
        message:"What is the title of your project/repo?",
        name:"title"
    },

    {
        type:"input",
        message:"Provide a description of your project",
        name:"description"
    },

    {
        type:"list",
        message:"What kind of license(s) does your project require?",
        name:"license",
        choices: ["MIT", "GPL", "None"]
    },

    {
        type:"input",
        message:"What is your GitHub username?",
        name:"username"
    },

    {
        type:"input",
        message:"What is your email address?",
        name:"email" 
    },


    {
        type:"input",
        message:"What steps are required to install your app?",
        name:"installation"
    },

    {
        type:"input",
        message:"How does one use this app?",
        name:"usage"
    },

    {
        type:"input",
        message:"Who did you work with on this project? Please include links to GitHub profiles where applicable",
        name:"contributing"
    },

    {
        type:"input",
        message:"Please provide a test script for the user to test the project?",
        name:"tests"
    }
])
// log answers and write file
.then((answers) => {
    fs.writeFile("sampleREADME.md",generateMD(answers), err=> err?console.log(err):"" )
});
