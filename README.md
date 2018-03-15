# node-boilerplate

A NodeJS boilerplate for building, watching, linting and testing various front-end assets.
Using GulpJS, Webpack and Jasmine.

![stats](https://david-dm.org/BillieBobbel23/node-boilerplate/status.svg)
![statsdev](https://david-dm.org/BillieBobbel23/node-boilerplate/dev-status.svg)

## Installation:

``git clone https://github.com/BillieBobbel23/node-boilerplate && npm install``

## Usage:
Depending on your needs run any of the following in the root folder of the project:

``npm run build`` :  Build all Front-end assets to the output folder

``npm run watch`` : **Spawns a new window for webpack** and watches input folders

``npm run lint`` : Lints output HTML, CSS and JS

``npm run test`` : Tests the output folder using Jasmine

### Debugging
Clones [test-assets](https://github.com/BillieBobbel23/test-assets) into tools/debug to run the tasks against

``npm run debug:init`` : Runs all tasks on the debug package and output results

### Flags
There are a few flags available for certain tasks:

``npm run debug:clean`` : **Removes the debug folder** and rebuilds it

``npm run build:clean`` :  **Removes the output folder** and rebuilds the assets
