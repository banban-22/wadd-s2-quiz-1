// Marks 20%

// The ./books directory contains a random amount of directories and files.
// write a function to count the number of directories and files and
// returns a promise that resolves to an object with keys `files` for number of files and `directories` for number of directories.

// documentation for fs https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

const fs = require('fs').promises;
const path = require('path');

const booksDirPath = './books';

function count() {
  return new Promise(async (resolve, reject) => {
    try {
      const files = await fs.readdir(booksDirPath);
      let fileCount = 0;
      let dirCount = 0;

      for (const file of files) {
        const fileDirInfo = await fs.stat(path.join(booksDirPath, file));
        if (fileDirInfo.isFile()) {
          fileCount++;
        } else if (fileDirInfo.isDirectory()) {
          dirCount++;
        }
      }
      resolve({ files: fileCount, directories: dirCount });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = count;
