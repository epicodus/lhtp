// script to fetch files from private github repo; uses github app authentication
// set env variables: GITHUB_APP_PEM_PATH, GITHUB_USER, GITHUB_APP_ID, GITHUB_INSTALLATION_ID

import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import axios from "axios";
import "dotenv/config";
import { reactifyStyles } from "./utils.js";

const { GITHUB_APP_PEM_PATH, GITHUB_USER, GITHUB_APP_ID, GITHUB_INSTALLATION_ID } = process.env;

export async function fetchFile({ repo, directory='', outDir, filename }) {
  const [{ content }] = await fetchGithubContent({ repo, directory, documents: [{ filename }] });
  fs.writeFileSync(path.join(outDir, filename), content);
}

export async function fetchDocusaurusDocs({ repo, directory='', outDir, documents }) {
  const fetchedDocuments = await fetchGithubContent({ repo, directory, documents });
  console.log(`\nPreparing ${fetchedDocuments.length} file(s) for Docusaurus in ${outDir}`);
  for (const { filename, content, frontMatter } of fetchedDocuments) {
    const mdx = frontMatter + reactifyStyles(content);
    fs.writeFileSync(path.join(outDir, filename), mdx);
  }
}

async function fetchGithubContent({ repo, directory='', documents }) {
  const installationAccessToken = await getInstallationAccessToken();
  const client = axios.create({
    baseURL: `https://api.github.com/repos/${GITHUB_USER}/${repo}/contents/${directory}`,
    headers: {
      Accept: "application/vnd.github.raw+json",
      Authorization: `Bearer ${installationAccessToken}`,
    },
  });
  console.log(`\nRetrieving ${documents.length} file(s) from ${repo}/${directory}`);
  let fetchedDocuments = [];
  for (const doc of documents) {
    console.log('fetching', doc.filename);
    const response = await client.get(doc.filename);
    fetchedDocuments.push({ ...doc, content: response.data });
  }
  return fetchedDocuments;
}

async function getInstallationAccessToken() {
  const jwtToken = generateJWT();
  const response = await axios.post(
    `https://api.github.com/app/installations/${GITHUB_INSTALLATION_ID}/access_tokens`,
    {},
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${jwtToken}`
      },
    }
  );
  return response.data.token;
}

function generateJWT() {
  const privateKey = fs.readFileSync(GITHUB_APP_PEM_PATH, 'utf-8');
  const payload = {
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60,
    iss: GITHUB_APP_ID,
  };
  const signOptions = {
    algorithm: 'RS256',
    header: {
      alg: 'RS256',
      typ: 'JWT',
    },
  };
  const token = jwt.sign(payload, privateKey, signOptions);
  return token;
}
