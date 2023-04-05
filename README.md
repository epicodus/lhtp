# LHTP - Docusaurus

This is a rewrite of LHTP using Docusaurus 2, a React-based static site generator.

### Configuration

The scripts to pull content from private GitHub repos are written to work with a GitHub App.

#### **`scripts/.env`**
```
GITHUB_USER = 'GITHUB_USER_OR_ORG_NAME'
GITHUB_INSTALLATION_ID = 'GITHUB_APP_INSTALLATION_ID'
GITHUB_APP_ID = 'GITHUB_APP_ID'
GITHUB_APP_PEM_PATH = 'LOCAL_PATH_TO_GITHUB_APP_KEY_PEM_FILE'
```

### Pulling docs from GitHub

Replace values defined at top of `scripts/fetchCourse.js`, then run the following **from within the scripts directory**:

```
npm install
npm start
```

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
