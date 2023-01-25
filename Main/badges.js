const generateBadge = (answers) =>{
    if (answers.license === "MIT") {
      usedLicense =`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    }else if (answers.license === "GPL") {
      usedLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
    } else {
      usedLicense = "N/A"
    }
    return usedLicense;
}
module.exports = generateBadge