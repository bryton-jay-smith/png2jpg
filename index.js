// var pngIn = process.argv.slice(2);

var Jimp = require('jimp');
var fs = require('fs');

const Read = (dirname, onFileContent, onError) => {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      onError(err);
      return;
    }
  filenames.forEach((filename) => {
    Jimp.read(filename, (err, lenna) => {
      if (err) throw err;
      var filenew = str(filename+'.jpg');
      lenna.write(filenew);
    })
  })
  })
}

//Jimp.read('image.png', (err, lenna) => {
// if (err) throw err;
//  lenna
//    .quality(100)
//   .write('image.jpg');
//})
