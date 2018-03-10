# node-boilerplate

A NodeJS boilerplate for building, watching, linting and testing various front-end assets.
Using GulpJS, Webpack and Jasmine.

![stats](https://david-dm.org/BillieBobbel23/gulp-boilerplates/status.svg)
![statsdev](https://david-dm.org/BillieBobbel23/gulp-boilerplates/dev-status.svg)

## Installation:

``git clone https://github.com/BillieBobbel23/node-boilerplate && npm install``

## Usage
Depending on your needs run any of the following in the root folder of the project:

``npm run build`` :  Build all Front-end assets to the output folder

``npm run watch`` : Watch input folder for activity and triggers tasks for recompilation

``npm run lint`` : Lint the output code for inconsistencies

``npm run test`` : Tests the output folder using Jasmine

``npm run debug`` : Runs all tasks on a debug package ([test-assets](https://github.com/BillieBobbel23/test-assets)) for debugging
