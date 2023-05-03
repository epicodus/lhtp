# LHTP 2.0 - Docusaurus

This is a rewrite of LHTP using Docusaurus 2, a React-based static site generator.

# Breaking changes - 2023-05-03

I moved everything into the main npm module, so you no longer need to run the fetch scripts from a submodule. You can now just use `npm run fetch` from the main project directory to fetch docs and images.

I've also changed the environment variables to be compatible with the deployment Github actions workflow. Note the changed names and the fact that PRIVATE_KEY is now the key itself, not the path to the file.

## Pulling course docs and images from GitHub

The scripts to pull content from private GitHub repos are written to work with a GitHub App.

For local development, add the following to `.env`:

#### **`.env`**
```
ORG = 'GITHUB_USER_OR_ORG_NAME'
APP_ID = 'GITHUB_APP_ID'
INSTALLATION_ID = 'GITHUB_APP_INSTALLATION_ID'
PRIVATE_KEY = 'GITHUB_APP_PEM_KEY'
```

Replace values defined at top of `scripts/fetchCourse.js`

Run the following:

```
npm run fetch
```

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
