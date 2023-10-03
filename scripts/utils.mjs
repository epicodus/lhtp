import fs from 'fs-extra';
import { createTwoFilesPatch } from 'diff';
import url from 'url';
import yaml from "js-yaml";
import inquirer from 'inquirer';

// *****************************************************************************
// THE WIDTH AND COLOR REPLACEMENTS HRER ARE A TEMPORARY SOLUTION FOR TESTING.
// THEY WILL ALSO MATCH CODE EXAMPLES THAT SHOULD NOT BE REPLACED!
// BEFORE DEPLOYMENT, ACTUALLY UPDATE THE MARKDOWN TO USE REACT STYLES

// replaces all style="" attributes with style={{...}} attributes
export function reactifyStyles(content) {
  const styleRegex = /style="([^"]+)"/g;
  const widthStyleRegex = /:(\s?\d+(?:px|%))/g;
  const colorStyleRegex = /color:\s*([a-zA-Z]+|\#[0-9a-fA-F]{6}|\#[0-9a-fA-F]{3})/g;

  function convertStyleToReactFormat(match, styleStr) {
    const convertedStyleStr = styleStr.split(';').join(', ');
    // console.log(`replacing style=${styleStr} with style={{${convertedStyleStr}}}`);
    return `style={{${convertedStyleStr}}}`;
  }

  const reactStyledContent = content.replace(styleRegex, convertStyleToReactFormat);
  const withReplacedWidthStyles = reactStyledContent.replace(widthStyleRegex, ":'$1%'");
  const withReplacedColorStyles = withReplacedWidthStyles.replace(colorStyleRegex, "color:'$1'");
  return withReplacedColorStyles;
}
// *****************************************************************************

export function clearDirectories(dirPaths) {
  for (const dirPath of dirPaths) {
    eraseDirectory(dirPath);
    fs.mkdirSync(dirPath);
  }
}

function eraseDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

export function readYamlFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContent);
  } catch (err) {
    console.error(`Error reading YAML file: ${err}`);
  }
}

export async function confirmAction({ message, theDefault = false }) {
  const { confirmation } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmation',
      message: message,
      default: theDefault,
    },
  ]);
  return Promise.resolve(confirmation); // returns boolean
}

export function titleToId(title) {
  return title.replace(/[_\s]/g, '-').replace(/[#:;-=?<>(),./]/g, '').toLowerCase();
}

export function parseGithubPath(path) {
    const pathname = url.parse(path).pathname
    const pathComponents = pathname.split('/').filter(Boolean);
    const [_, repo, __, ___, ...restOfPath] = pathComponents;
    const filename = restOfPath.pop();
    const directory = restOfPath.join('/');
    return { repo, directory, filename };
}

export function timeout(ms=50) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function canWriteFile(path, newContent) {
  if (await fs.pathExists(path)) {
    const existingContent = await fs.readFile(path, 'utf8');
    if (existingContent !== newContent) {
      const diff = createTwoFilesPatch(path, "New Content", existingContent, newContent);
      console.error(`File content for ${path} does not match. Diff:\n${diff}`);
      return false;
    }
  }
  return true;
}
