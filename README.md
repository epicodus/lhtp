# LHTP - Docusaurus

This is a rewrite of LHTP using Docusaurus 2, a React-based static site generator.

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

To Do
=====

### Sidebar:

- show label in sidebar for day of week and lesson vs exercise, also based on layout file

### Styling:

- remark-code-title
- color scheme
- syntax highlighting

---

Completed
=========

- pulls entire track from private github repo based on track and section layout files
- displays sections and lessons in correct order, with correct names, slugs, navigation links
- modifies style html properties to work with React
- tabs that can render markdown during build stage
