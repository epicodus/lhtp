# To Do

### Sidebar:

- show label in sidebar for day of week and lesson vs exercise, also based on layout file


### Main page:

- show tabs


### Styling:

- color scheme, syntax highlighting


---

# Completed

- pulls entire track from private github repo based on track and section layout files
- displays sections and lessons in correct order, with correct names, slugs, navigation links
- modifies style html properties to work with React


---

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
