const fs = require('fs-extra');
const glob = require('glob');
const matter = require('gray-matter');
const path = require('path');

const getFrontMatterFromFilename = (filename) => {
  const fileWithoutExtension = path.basename(filename, path.extname(filename));
  const titlePart = fileWithoutExtension.replace(/^[^_]*_/, ''); // remove initial part (e.g., "0a_")
  const title = titlePart.replace(/[_-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const slug = titlePart;
  return {
    title,
    slug
  };
};

const addFrontMatterToFile = async (file) => {
  const fileContent = await fs.readFile(file, 'utf8');
  const existingFrontMatter = matter(fileContent);
  const newFrontMatter = getFrontMatterFromFilename(file);
  // const frontMatter = { ...existingFrontMatter.data, ...newFrontMatter };
  // console.log(newFrontMatter);
  // const frontMatter = newFrontMatter;

  const frontMatterYaml = matter.stringify('', newFrontMatter).trim();
  const newContent = frontMatterYaml + '\n\n' + existingFrontMatter.content.trim();

  // const newContent = matter.stringify(fileContent, frontMatter);
  await fs.writeFile(file, newContent);
};

const processFiles = async () => {
  const docsFolder = './docs'; // Replace this with the path to your docs folder if different
  const filePattern = `${docsFolder}/**/*.md?(x)`;
  const files = glob.sync(filePattern);

  for (const file of files) {
    await addFrontMatterToFile(file);
  }
};

processFiles().catch((error) => {
  console.error(error);
  process.exit(1);
});
