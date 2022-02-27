// required packages stored in shorthand variables
const inquirer = require('inquirer');
const fs = require('fs');
const mdGenny = require('./utils/generateMarkdown.js');

// inquirer prompt used to collect information from user via the terminal
const promptUser = () => {
    return inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of your application?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Enter a brief description:',
                name: 'desc',
            },
            {
                type: 'list',
                message: 'Which license would you like to use?',
                name: 'license',
                choices: ['Apache 2.0', 
                        'GNU_General_Public_License_v3.0', 
                        'GNU General Public License v2.0', 
                        'MIT', 
                        'BSD 2-Clause "Simplified" License', 
                        'BSD 3-Clause "New" or "Revised" License', 
                        'Boost Software License v1.0',
                        'Creative Commons Zero v1.0 Universal', 
                        'Eclipse Public License 2.0', 
                        'GNU Affero General Public License v3.0', 
                        'GNU Lesser General Public License v2.1',
                        'Mozilla Public License v2.0', 
                        'The Unilicense'],
             },
             {
                type: 'input',
                message: 'How does the user install the application?',
                name: 'install',
             },
             {
                type: 'input',
                message: 'Anything the user should know about using the application?',
                name: 'usage',
             },
             {
                type: 'input',
                message: 'How can the user contribute to the application?',
                name: 'contribution',
             },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'Enter the url for your github profile:',
                name: 'profileLink',
            },
            {
                type: 'input',
                message: 'What email would you like to provide for questions about your application?',
                name: 'email',
            },
        ]);
};
  

// init function that is a series of promises to collect information from user and write the collected answers to a README file
const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('README.md', mdGenny.generateMarkdown(answers)))
    .then(() => console.log('Successfully generated README!'))
    .catch((err) => console.error(err));
};
 
///// APPLICATION GO BRRRRRRRR -----> 
init();
