const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const axios = require("axios");

function generateJWT() {
  const privateKey = fs.readFileSync('epicodus-curriculum.private-key.pem', 'utf-8');
  const appId = process.env.GITHUB_APP_ID;

  const payload = {
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60,
    iss: appId,
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

async function getInstallationAccessToken() {
  const installationId = process.env.GITHUB_INSTALLATION_ID;
  const jwtToken = generateJWT();

  const response = await axios.post(
    `https://api.github.com/app/installations/${installationId}/access_tokens`,
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

async function fetchGithubContent() {
  const installationAccessToken = await getInstallationAccessToken();
  const sourceBaseUrl = "https://raw.githubusercontent.com/epicodus-classroom/testing/main";
  const outDir = "docs";
  const documents = ["README.md", 'dei_1_independent_project.md'];

  console.log('installationAccessToken', installationAccessToken);
  const client = axios.create({
    baseURL: "https://api.github.com/repos/epicodus-classroom/testing/contents/",
    headers: {
      Accept: "application/vnd.github.raw+json",
      Authorization: `Bearer ${installationAccessToken}`,
    },
  });
  console.log('client', client);

  for (const document of documents) {
    console.log('document', document);
    // const response = await client.get('https://api.github.com/repos/epicodus-classroom/testing/contents/README.md');
    const response = await client.get(document);
    fs.writeFileSync(path.join(outDir, document), response.data);
  }
}

module.exports = function () {
  return {
    name: "fetch-github-content",
    async loadContent() {
      await fetchGithubContent();
    },
  };
};
