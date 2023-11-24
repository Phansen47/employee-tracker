const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'list',
    name: 'test',
    message: 'Does this work?',
    choices: ['Yes', 'No'],
  },
])
.then((answers) => {
  console.log('Answer:', answers.test);
})
.catch((error) => {
  console.error('Error:', error);
});

