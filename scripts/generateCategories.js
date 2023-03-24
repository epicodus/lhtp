const fs = require('fs');
const path = require('path');

const contentDir = 'docs';

const createCategoryJsonFile = (dirPath, position) => {
  const categoryName = dirPath.split(path.sep).pop();
  const titlePart = categoryName.replace(/^[^_]*_/, ''); // remove initial part (e.g., "0a_")
  const label = titlePart.replace(/[_-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const categoryJson = {
    position,
    label,
  };

  const categoryJsonPath = path.join(dirPath, '_category_.json');
  fs.writeFileSync(categoryJsonPath, JSON.stringify(categoryJson, null, 2));
};

const walkSync = (dir, callback) => {
  const dirList = fs.readdirSync(dir).filter((file) => {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });

  // Sort directories by name
  dirList.sort();

  dirList.forEach((file, index) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      callback(fullPath, index + 1);
      walkSync(fullPath, callback);
    }
  });
};

walkSync(contentDir, createCategoryJsonFile);
