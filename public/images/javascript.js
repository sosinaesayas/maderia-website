const requireAll = require('require-all');

let allFiles = requireAll({
    dirname: __dirname + '/images'
});

console.log(allFiles);