// script to fetch files from private github repo; uses github app authentication
// For Github workflow, set ORG and INSTALLATION_TOKEN env variables
// For local use, set ORG, PRIVATE_KEY, APP_ID, INSTALLATION_ID env variables

import fs from "fs-extra";
import path from "path";
import axios from "axios";
import "dotenv/config";
import { reactifyStyles } from "./utils.mjs";
import { getInstallationAccessToken } from "./getInstallationToken.mjs";
import { execSync } from 'child_process';
import config from "./config.mjs";

const INSTALLATION_ACCESS_TOKEN = process.env.INSTALLATION_TOKEN || await getInstallationAccessToken();

export async function fetchLayoutFile({ repo, directory, filename }) {
  await fetchFile({
    repo,
    directory,
    filename,
    outDir: config.scratch_directory_path,
  });
  return path.join(config.scratch_directory_path, filename);
}

export function fetchStaticPage({ repo, directory, filename }) {
  fetchFile({
    repo,
    directory,
    filename,
    outDir: config.local_docs_path,
  });
}

export async function fetchDocusaurusDocs({ repo, directory='', outDir, documents }) {
  const fetchedDocuments = await fetchGithubContent({ repo, directory, documents });
  console.log(`\nPreparing ${fetchedDocuments.length} file(s) for Docusaurus in ${outDir}`);
  for (const { filename, content, frontMatter } of fetchedDocuments) {
    const mdx = frontMatter + reactifyStyles(content);
    fs.writeFileSync(path.join(outDir, filename), mdx);
  }
}

export async function fetchImages({ repo }) {
  const repoUrl = `https://github.com/${config.org}/${repo}`;
  const tempImagesPath = path.join(config.scratch_directory_path, 'temp_images');
  const imagesPath = path.join(config.local_images_path, repo);
  try {
    execSync(`git clone ${repoUrl} ${tempImagesPath}`);
    await fs.ensureDir(imagesPath)
    await fs.copy(path.join(tempImagesPath, config.repo_images_path), imagesPath);
    await fs.remove(tempImagesPath);
    console.log('Images copied successfully.');
  } catch (error) {
    console.error('Error copying images:', error);
  }
}

async function fetchGithubContent({ repo, directory='', documents }) {
  const client = axios.create({
    baseURL: `https://api.github.com/repos/${config.org}/${repo}/contents/${directory}`,
    headers: {
      Accept: "application/vnd.github.raw+json",
      Authorization: `Bearer ${INSTALLATION_ACCESS_TOKEN}`,
    },
  });
  // console.log(`\nRetrieving ${documents.length} file(s) from ${repo}/${directory}`);
  let fetchedDocuments = [];
  for (const doc of documents) {
    // console.log('fetching', doc.filename);
    const response = await client.get(doc.filename);
    fetchedDocuments.push({ ...doc, content: response.data });
  }
  return fetchedDocuments;
}

export async function fetchFileContent({ repo, directory='', filename }) {
  const [{ content }] = await fetchGithubContent({ repo, directory, documents: [{ filename }] });
  return content;
}

export async function fetchFile({ repo, directory='', outDir, filename }) {
  const content = await fetchFileContent({ repo, directory, filename });
  fs.writeFileSync(path.join(outDir, filename), content);
}
