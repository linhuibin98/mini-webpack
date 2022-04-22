const less = require('less');

function lessLoader(source) {
  console.log('less-loader==================');
  const cb = this.async();
  less.render(source, (err, output) => {
    cb(err, output.css, output.map);
  });
}

module.exports = lessLoader;