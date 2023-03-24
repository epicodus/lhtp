// Docusaurus plugin to fetch github content and save to appropriate folder within docs
// set env variables: GITHUB_APP_PEM_PATH, GITHUB_USER, GITHUB_APP_ID, GITHUB_INSTALLATION_ID
// Add into plugins section of docusaurus.config.js, for example:
// plugins: [
//   [
//     require.resolve("./plugins/fetch-github-content"),
//     {
//       repo: 'testing',
//       outDir: 'docs',
//       filenames: ['README.md', 'dei_1_independent_project.md']
//     }
//   ]
// ],

require('dotenv').config();
const fs = require("fs");
const path = require("path");
const jwt = require('jsonwebtoken');
const axios = require('axios');

const PEM_PATH = process.env.GITHUB_APP_PEM_PATH;
const USER = process.env.GITHUB_USER;
const APP_ID = process.env.GITHUB_APP_ID;
const INSTALLATION_ID = process.env.GITHUB_INSTALLATION_ID;

async function fetchGithubContent({ filenames, repo, outDir='docs' }) {
  const installationAccessToken = await getInstallationAccessToken();
  const documents = filenames;

  const client = axios.create({
    baseURL: `https://api.github.com/repos/${USER}/${repo}/contents/`,
    headers: {
      Accept: "application/vnd.github.raw+json",
      Authorization: `Bearer ${installationAccessToken}`,
    },
  });
  for (const document of documents) {
    const response = await client.get(document);
    fs.writeFileSync(path.join(outDir, document), response.data);
  }
}

async function getInstallationAccessToken() {
  const jwtToken = generateJWT();
  const response = await axios.post(
    `https://api.github.com/app/installations/${INSTALLATION_ID}/access_tokens`,
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
  const privateKey = fs.readFileSync(PEM_PATH, 'utf-8');

  const payload = {
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60,
    iss: APP_ID,
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

module.exports = function(context, opts) {
  return {
    name: "fetch-github-content",
    async loadContent() {
      await fetchGithubContent(opts);
    },
  };
};
