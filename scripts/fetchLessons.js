// script to go through YAML layout file, fetch content from GitHub, write to appropriate directories

import { fetchGithubContent } from "./fetchGithubContent.js";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

async function main() {
  const yamlFilePath = 'layout.yaml';
  const basePath = 'docs';
  
  const yamlContent = await readYamlFile(yamlFilePath);
  let { directory, repo, lessons } = yamlContent;
  lessons.forEach(lesson => { 
    lesson.repo = lesson.repo || repo; 
    lesson.directory = lesson.directory || directory;
  });
  const outDir = path.join(basePath, directory);

  eraseDirectory(outDir);
  createDirectory(outDir);
  fetchLessons(lessons, outDir);
}

async function fetchLessons(lessons, outDir) {
  for (const lesson of lessons) {
    const { filename, repo, directory } = lesson;
    await fetchGithubContent({
      outDir,
      repo,
      directory,
      filenames: [filename]
    });
  }
}

function eraseDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

function createDirectory(dirPath) {
  fs.mkdirSync(dirPath);
}

function readYamlFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContent);
  } catch (err) {
    console.error(`Error reading YAML file: ${err}`);
  }
}

main();


// fetchGithubContent({ 
//   repo: 'testing',
//   filenames: ['README.md'],
//   outDir: '../docs'
// });
