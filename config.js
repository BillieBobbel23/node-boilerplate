const CONFIG = {
  DIRECTORY_INPUT: "../src/",
  DIRECTORY_OUTPUT: "../../dist/",

  BUNDLE: {
    NAME: "bundle",
    EXT: {
      DEV: "dev",
      PRD: "prod",
      TST: "test"
    }
  },
  SRC: {
    ROOT: "../src/",
    JS: {
      PATH: "js/",
      NAME: "ecma"
      // Modify this (and webpack.common.js) if you have multiple .js entries
      // "NAME_TOO": "empty"
    },
    SCSS: {
      PATH: "scss/",
      NAME: "style.scss"
    },
    IMG: {
      PATH: "img/"
    },
    FONT: {
      PATH: "fonts/"
    }
  },
  DIST: {
    // Output is based on executors location
    ROOT: "../../../dist/",
    JS: {
      PATH: "js/"
    },
    CSS: {
      PATH: "css/",
      NAME: "style.min.css"
    },
    IMG: {
      PATH: "img/"
    },
    FONT: {
      PATH: "fonts/"
    }
  }
};
module.exports = CONFIG;
