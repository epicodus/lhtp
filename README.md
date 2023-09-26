# LHTP 2.0 - Docusaurus

This is a rewrite of LHTP using Docusaurus 2, a React-based static site generator.

## Pulling course docs and images from GitHub

The scripts to pull content from GitHub repos are written to work with a GitHub App.

For local development, add the following to `.env`:

#### **`.env`**
```
ORG = 'GITHUB_USER_OR_ORG_NAME'
APP_ID = 'GITHUB_APP_ID'
INSTALLATION_ID = 'GITHUB_APP_INSTALLATION_ID'
PRIVATE_KEY = 'GITHUB_APP_PEM_KEY'
```

Update values if needed in `config.yaml` in project root directory.

Run the following:

```
npm run fetch
```

This will build the docs directory, generate front matter and sidebars. It will also fetch static homepages and images. 
Images are placed in subdirectories of `static/images` named the same as the repo (e.g. `static/images/intro-curriculum`).

---

## Docusaurus

Once the docs are in place in the `docs` folder and the images in `static/images`, you can run Docusaurus itself.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
