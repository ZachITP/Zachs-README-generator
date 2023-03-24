
// Function call to load app

const fs = require('fs'); 
const inquirer = require('inquirer'); 

// linking the page where the README template is 
const loadpage = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
    {   //what is your GitHub username?
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        Run: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {   //what is your email?
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        Run: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        }

    },
    {   //what is the same of it?
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        Run: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false; 
            }
        }
    },
    {   //what does it do?
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        Run: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please describe what your project does!');
                return false; 
            }
        }
    }, 
    {   //what license does it use?
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU', 'Mozilla', 'Eclipse'],
        default: ["MIT"],
        Run: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false; 
            }
        }
    },
    {   //how do you install it?
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        Run: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter steps required to install your project!');
                return false; 
            }
        }
    },
    {   //how is it used?
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        Run: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please describe how you use this app!');
                return false; 
            }
        }
    },
    {   //what technology was used?
        type: 'input',
        name: 'technology',
        message: 'What technology was used to create this app?',
        Run: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please describe what technology was used to create this app!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be used to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How would the user get in contact with you to contribute to the repo?'
    }
]);
};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
     
        if (err) {
            console.log(err);
            return;
        // README has been created 
        } else {
            console.log("Narly Dude!!! The README has been created, you should see it in your project folder in the Explorer window")
        }
    })
}; 

// function call to initialize program
questions()
// getting user answers 
.then(answers => {
    return loadpage(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// report error
.catch(err => {
    console.log(err)
})
