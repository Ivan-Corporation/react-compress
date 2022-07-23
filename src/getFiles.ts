const fs = require('fs');
const path = require('path');

interface FilesTypes {
    dirPath: string,
    arrayOfFiles: any,
    filetypes:any,
    file: any
}

const _getFiles = ({dirPath, arrayOfFiles, filetypes}:FilesTypes) => {
  const files = fs.readdirSync(dirPath);
  files.forEach(({file}:FilesTypes) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = _getFiles(dirPath + '/' + file, arrayOfFiles, filetypes);
    } else {
      const filePath = path.join(dirPath, '/', file);
      if (filetypes.includes(path.extname(filePath))) {
        arrayOfFiles.push(filePath);
      }
    }
  });
  return arrayOfFiles;
};

const getFiles = ({dirPath, filetypes}:FilesTypes) => {
  return _getFiles(dirPath, [], filetypes);
};

module.exports = getFiles;
export {}