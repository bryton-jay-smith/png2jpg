var Jimp = require('jimp');
var fs = require('fs');

// Read input files
fs.readdir(`./input`, (err, filenames) => {
    
    // Return if input error
    if (err) {
      console.log(`Error on load input directory:`+err);
      return;
    }
    
    // Actions to preform for each input file
    filenames.forEach((filename) => {
        
        // Load file
        Jimp.read(`./input/`+filename, (err, convert) => {
            
            // Return if error
            if (err) {
                console.log(`Error on load file`+filename+err);
                return;
            }
            
            // Save to ouput folder (as FILENAME.png.jpg)
            convert.write(`./output/`+filename+`.jpg`)
      })
    })
  })
