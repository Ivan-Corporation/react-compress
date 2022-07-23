const fs = require('fs');

const getCombinedSize = (arrayOfFiles:any) => {
  let totalSize = 0;
  arrayOfFiles.forEach((filePath:any) => {
    totalSize += fs.statSync(filePath).size;
  });
  return totalSize;
};

module.exports = getCombinedSize;
export {}