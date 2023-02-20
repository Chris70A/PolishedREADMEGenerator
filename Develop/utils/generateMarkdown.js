// generates a badge image URL for a license
function renderLicenseBadge(license) {
    if (license !== "none") { // If parameter is equal to "none" return a empty string
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;// If True
      }
      return ""; //empty string
}



function renderLicenseLink(license) {
    if (license !== "none") { // If parameter is equal to "none" return a empty string
        return ` "https://opensource.org/licenses/MIT"`; // If true return link
      }
      return ""; //empty string
}

//function that returns the license section of README

function getLicenseSection(data) {
    //method to search for the first line in the "data" array that starts with the string "## license" and stored in a variable
    const licenseIndex = data.findIndex(function(line) { 
      return line.toLowerCase().startsWith("## license"); 
    });
  
    if (licenseIndex === -1) { // If not return an empty string 
      return "";
    }
  
    const licenseSection = data.slice(licenseIndex + 1); // create a new array called licenseSection
    const endIndex = licenseSection.findIndex(function(line) { //searches for the first line that starts with the "#" character and returns its index.
      return line.startsWith("#");
    });
  
    if (endIndex === -1) { 
      return licenseSection.join("\n");
    } else {
      return licenseSection.slice(0, endIndex).join("\n");
    }
  }

//  returns the data input in the right format
function generateMarkdown(data) {
  
    return `# ${data.title} 
    
    ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Screenshot
  ![alt-text](${data.screenshot})
  ## Table of Contents
  * [Features](#features)
  * [Languages & Dependencies](#languagesanddependencies)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Features
  ${data.features}
  ## Languages & Dependencies
  ${data.require}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## license
  ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
    
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
  }
  
  module.exports = generateMarkdown; // export the markdown formatted string
  