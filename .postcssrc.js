// https://github.com/michael-ciniawsky/postcss-load-config

var px2rem = require('postcss-px2rem-exclude');

module.exports = {
  "plugins": [px2rem({remUnit: 75, exclude: '/node_modules/'})]
}

/*module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}*/
