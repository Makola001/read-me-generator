const generateMD = (answers) =>{
    return `
    #  ${answers.title}
        https://github.com/${answers.username}/${answers.title}
    
    # Description
        ${answers.description}
    
    # Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributors] (#contributing)
        * [Tests] (#tests)
        * [Questions](#questions)
      
    # Installation
        ${answers.installation}
    
    # Usage
        ${answers.usage}
    
    # License
        The following license is used for this project:
        ${answers.license}
    
     # Contributing
        Collaborators on this project include:
        ${answers.contributing}
    
    # Tests
        The following test script can be used to execute an example of the project:
        ${answers.tests}
    
     # Questions
        For any questions, please reach out to: ${answers.email}`
}
module.exports = generateMD

