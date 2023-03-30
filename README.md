# LHTP - Docusaurus

This is a rewrite of LHTP using Docusaurus 2, a React-based static site generator.

### Configuration

The scripts to pull content from private GitHub repos are written to work with a GitHub App.

#### **`.env`**
```
GITHUB_USER = 'GITHUB_USER_OR_ORG_NAME'
GITHUB_INSTALLATION_ID = 'GITHUB_APP_INSTALLATION_ID'
GITHUB_APP_ID = 'GITHUB_APP_ID'
GITHUB_APP_PEM_PATH = 'LOCAL_PATH_TO_GITHUB_APP_KEY_PEM_FILE'
```

### Pulling docs from GitHub

In `scripts/fetchTrack.js`, replace values for constants defined at top of file, then, from the scripts directory:

```
npm install
node fetchTrack
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

---

To Do (very incomplete)
=======================

### Tests:

- playwright?

### Search:

- implement local search or use docsaurus remote method

### Sidebar:

- show label in sidebar for day of week and lesson vs exercise (data is embedded in doc front matter, pulled from layout yaml)

### Navbar:

- link to different tracks?
- add previous and next navigation to navbar?

### MDX components:

- StackBlitz

### Markdown processing:

MDX is not fully commonmark compatible. A number of changes are needed, including the following:

- change inline style="" to JSX style={{}}
- for inline styles, add quotes around red, #fff, #ffffff, 50%, 50px, etc
- change class to className
- self-closing tags must be explicity closed (easy to just do search & replace fix on content)
- Once Docusaurus (v3) switches to MDX v2, use of html in markdown may be even more limited

(Most of the above is handled temporarily by reactifyStyles function in my prep scripts, but that translation either needs to be made much more robust or the source files need to be changed.)

Other content changes to make for Docusaurus compatibility:

- Change format of code block titles to work with Docusaurus built-in code blocks

Also see this list of [mdx v1 jsx issues](https://docusaurus.io/docs/next/markdown-features/react#markdown-and-jsx-interoperability) and these notes on [mdx v2 markdown](https://github.com/micromark/mdx-state-machine#72-deviations-from-markdown), which will be used in future versions of Docusaurus.

---

Completed
=========

- pulls entire track from private github repo based on track and section layout files
- displays sections and lessons in correct order, with correct names, slugs, navigation links
- modifies style html properties to work with React (for dev - not robust)
- tabs that render markdown, can be used in content, and are built correctly during mdx->html build stage
