const CONFIG = {
  "DIRECTORY_INPUT": "../src/",
  "DIRECTORY_OUTPUT": "../../dist/",

  "BUNDLE": {
    "NAME": "bundle",
    "EXT": {
      "DEV": "dev",
      "PRD": "prod",
      "TST": "test"
    }
  },
  "SRC": {
    "JS": {
      "PATH": "../src/js/",
      "NAME": "not",
      "TEST": "empty"
    },
    "SCSS": {
      "PATH": "../src/scss",
      "NAME": "style.scss"
    }
  },
  "DIST": {
    "JS": {
      // ./tools/tools/webpack/
      "PATH": "../../../dist/js/"
    },
    "CSS": {
      "PATH": "../../../dist/css/",
      "NAME": "style.min.css"
    }
  }
};
module.exports = CONFIG;
