// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip


// const fs = require('fs');
// const path = require('path');

// // Change this to the directory you want to organize
// const directoryPath = './'; // Current directory

// // Create folders for extensions if they don't exist
// const extensions = ['jpg', 'png', 'pdf', 'zip','ppt','exe'];

// extensions.forEach(ext => {
//   const folder = path.join(directoryPath, ext);
//   if (!fs.existsSync(folder)) {
//     fs.mkdirSync(folder);
//   }
// });

// // Read all files in the directory
// fs.readdir(directoryPath, (err, files) => {
//   if (err) {
//     return console.error('Unable to scan directory:', err);
//   }

//   files.forEach(file => {
//     const ext = path.extname(file).slice(1).toLowerCase(); // Remove the dot and make lowercase get file extension 
//     if (extensions.includes(ext)) {
//       const oldPath = path.join(directoryPath, file);
//       const newPath = path.join(directoryPath, ext, file);

//       // Move file
//       fs.rename(oldPath, newPath, err => {
//         if (err) console.error(`Error moving ${file}:`, err);
//         else console.log(`Moved ${file} to ./${ext}/`);
//       });
//     }
//   });
// });


const fs = require('fs')
const path = require('path')

const dir = './';
const extensions = ['jpg', 'png', 'pdf', 'zip','ppt','exe'];

extensions.forEach(ext=>{
    const folder = path.join(dir,ext)
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder)
    }
})


// reading file
fs.readdir(dir, (err,files) =>{
    if(err){
        return console.log('unable to scan directory',err);
    }
    files.forEach(file =>{
        const ext = path.extname(file).slice(1).toLowerCase();
        if(extensions.includes(ext)){
            const oldpath = path.join(dir,file)
            const newpath = path.join(dir,ext,file)
  // moving file to folder 
           fs.rename(oldpath,newpath,err =>{
            if(err)console.error(`error moving ${file}`,err);
                else console.log(`moved ${file}`);
           })
        }
    } )
})