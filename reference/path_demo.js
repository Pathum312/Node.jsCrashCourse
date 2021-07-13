const path = require('path');

// Gets the file name
console.log('File name: ' + path.basename(__filename));

// Gets the directory name
console.log('Directory name: ' + __dirname);

// Gets the file extension
console.log('File extension: ' + path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));