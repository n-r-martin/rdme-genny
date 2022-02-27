// Function to generation Markdown based on deconstructed object passed from inquirer
const generateMarkdown = ({name, license, desc, install, usage, contribution, username, profileLink, email}) => {
  let licenseBadge;

  // Determine License Badge based on license selection from inquirer
  switch (license) {
    case license = 'Apache 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case license = 'GNU General Public License v3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case license = 'GNU General Public License v2.0':
      licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case license = 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case license = 'BSD 2-Clause "Simplified" License':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2-Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case license = 'BSD 3-Clause "New" or "Revised" License':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3-Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case license = 'Boost Software License v1.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case license = 'Creative Commons Zero v1.0 Universal':
      licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case license = 'Eclipse Public License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;
    case license = 'GNU Affero General Public License v3.0':
      licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case license = 'GNU Lesser General Public License v2.1':
      licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case license = 'Mozilla Public License v2.0':
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case license = 'The Unilicense':
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
  }

  // Retunr the markdown template to index.js so it can be written to the generated README.md file'
  return `# ${name}

  ${licenseBadge}
  <br />
  
  ${desc}
  <br />

  ## How to Install
  ${install}
  <br />

  ## Usage
  ${usage}
  <br />

  ## How to Contribute
  ${contribution}

  ## Contact
  If you have any questions, contact the creator at:

  * [${username}](${profileLink})
  * ${email}
  `
}
 
// Exporting function so it can be used in index.js
module.exports = {
  generateMarkdown
}
