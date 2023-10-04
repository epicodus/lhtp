---
title: Installing node.js
id: installing-nodejs
slug: installing-nodejs
hide_table_of_contents: true
sidebar_position: 3
day: weekend
type: lesson
url: >-
  https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0c_installing_node_js.md
paginationNext: null
---

Before the first week of class, take time to ensure all necessary tools and frameworks are correctly installed on your personal machine, including those we will use later on in the course.

The JavaScript course will require `Node.js`. You are expected to install any tools you do not already have _before_ the course begins. Confirm each tool is functioning properly by following all instructions below.

## OSX Installation Instructions
<hr />

On OS X systems, install `Node.js` through `Homebrew` with the following command in your home directory:

```
$ brew install node
```

When installing `Node.js`, node package manager will also be installed. Node package manager is called `npm` for short. Confirm that `node` and `npm` are in place by checking the versions of each. First, restart your terminal, then enter in the following commands: 

```
$ node -v
v14.5.0
$ npm -v
6.14.5
```

`node` should be 12.x or higher and `npm` should be 6.x or higher. If you are installing Node for the first time now, you will be at a higher version than what's listed in our examples.

If you have an older version of `Node` already installed, upgrade through `Homebrew` by running `$ brew upgrade node`.

Complete the "Working with Node" section below to confirm your installation is functioning correctly.

### Homebrew Installation

If you do not have Homebrew installed yet, you may install it now by copy and pasting this command into the command line:

```shell
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This installs [Homebrew](http://brew.sh/) on your device, a package manager for OS X that makes it easy to install developer software.

Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:

For bash users:

```shell
$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
```

For zsh users:

```shell
$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.zshrc
```

## Windows / Linux Installation Instructions
<hr />

To install Node on other systems, go to the [Node website](https://nodejs.org/en/download/), then download and install the appropriate installer for your operating system. Note that there are two versions available to download: the _LTS_ version and the _Current_ version. _LTS_ is short for long-term support. Either version is fine. Note that node package manager (`npm`) will be installed along with `node`. Node package manager is called `npm` for short.

If you are using Windows, choose the _Windows Installer_ option for downloading. Use the Setup Manager for installation, clicking _Next_ through each setup window. This includes clicking _Next_ on the custom setup window as all the options are already preselected (_Node.js runtime_, _npm package manager_, _Online documentation shortcuts_, and _Add to PATH_). When you reach the final setup window, click _Install_.

Confirm that `node` and `npm` are in place by checking the versions of each. First, restart your terminal, then enter in the following commands: 

```
$ node -v
v14.5.0
$ npm -v
6.14.5
```

`node` should be version 12.x or higher and `npm` should be version 6.x or higher. Generally if you are choosing the most recent version of `node` (current or LTS), your version of `node` and `npm` should be higher than what's listed in our examples.

After installation is complete, go through the "Working with Node" section below to confirm your installation is functioning correctly.

## Working with Node
<hr />

Confirm Node.js is functioning correctly by creating a small test project. `cd` to your desktop and then input the following command:

```
$ echo "console.log('Hello world');" > hello.js
```

`echo` simply copies the string (the part inside double quotations), outputting it (`>`) into the file we specify (`hello.js`). You don't need to create `hello.js` ahead of time. `echo` will take care of that for you.

Now let's run this file with Node:

```shell
$ node hello.js
```

"Hello world" will be printed to the terminal. Once you are done, you can remove `hello.js` from your desktop.

Node.js is a JavaScript runtime environment just like the browser. In fact, Node.js's underlying JavaScript engine is V8, which is the same engine used in Google Chrome. The major difference between Node and a browser like Chrome is that the browser provides the runtime environment in the browser, whereas Node provides it on the command line. They also have slightly different capabilities, with the browser providing tools like the DOM, and Node providing tools like file system access.

We won't be doing much with Node.js as a runtime environment, though. We will mainly use it as a package manager to install JavaScript libraries in our projects.

<hr />

If you encounter any issues installing Node.js, there will be an opportunity to receive setup assistance from Epicodus staff. Ask your teacher in Scrum when setup assistance will be provided.
