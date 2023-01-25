// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (answers.license === "MIT") {
    usedLicense =`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }else if (answers.license === "GPL") {
    usedLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    usedLicense = "N/A"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
