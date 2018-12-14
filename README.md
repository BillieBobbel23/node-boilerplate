# node-boilerplate

A NodeJS boilerplate for building, watching, linting and testing various front-end assets.
Using GulpJS, Webpack and Jasmine.

![stats](https://david-dm.org/BillieBobbel23/node-boilerplate/status.svg)
![statsdev](https://david-dm.org/BillieBobbel23/node-boilerplate/dev-status.svg)

## Installation:

```
git clone https://github.com/BillieBobbel23/node-boilerplate tools &&
npm --prefix ./tools install ./tools
```

**Windows:**

```
git clone https://github.com/BillieBobbel23/node-boilerplate tools
cd tools
npm install
```

## Usage:

### Running scripts

**Directly:**    
In your CLI go to the `./tools` directory and run `npm run TASK_NAME`.    
Alternatively run it from the root folder by using a prefix ``npm run TASK_NAME --prefix ./tools``

**Automated**    
Add a reference to any task to your ``package.json`` to extend existing functionality
````
  "scripts": {
    "build": "npm run build --prefix ./tools"
  },
````

### Scripts

* ``npm run build`` :  Builds all Front-end assets to the output folder
* ``npm run watch`` : Starts streams for GulpJS and Webpack **Opens a new window**
* ``npm run lint`` : Lints output HTML, CSS and JS
* ``npm test`` : Runs tests on JS using Jasmine

and two subtasks:

* ``npm run clean`` :  Removes output folder
* ``npm run rebuild`` :  Runs *clean* followed by *build*

### Debugging
Clones [test-assets](https://github.com/BillieBobbel23/test-assets) into tools/debug to run the tasks against

* ``npm run debug:init`` : Runs all tasks on the debug package and output results
* ``npm run debug`` : Runs all tasks on the debug package and output results
