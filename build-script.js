const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/my-element-try-angular/runtime.js',
    './dist/my-element-try-angular/polyfills.js',
    './dist/my-element-try-angular/es2015-polyfills.js',
    './dist/my-element-try-angular/scripts.js',
    './dist/my-element-try-angular/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/element.js')
})();