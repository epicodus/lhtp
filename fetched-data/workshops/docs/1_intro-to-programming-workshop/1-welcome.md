---
title: Welcome
id: welcome
slug: welcome
hide_table_of_contents: true
sidebar_position: 1
day: weekend
type: lesson
url: 'https://github.com/epicodus-curriculum/workshops/blob/main/1_welcome.md'
paginationPrev: null
---

## Hello World!

Welcome to the Intro to Programming Workshop at Epicodus. This workshop is designed to give you a chance to experience working with some of the basic tools used in everyday web development. It doesn't matter if you've coded before or if this is your first time building a project. By completing this workshop you'll get a feel for what goes into building a basic website. You might also get a sense of whether this is the kind of career you might be interested in pursuing. You'll also get a feel for what attending Epicodus as a student is all about.

<hr />

## The Workshop

We'll begin with some food and a short hello from the members of the staff that will be helping today.

Then we'll dive into building a simple HTML webpage. Once that's complete, we'll add some CSS styling.

Next, we'll make our webpage interactive by using a bit of JavaScript.

Finally, we'll learn how to use Git, a piece of version control software, to track our changes and store our project remotely.

You'll also have the opportunity to ask questions about Epicodus and go through our application/interview process if you're interested in enrollment.

<hr />

## Today's Project

**Goal for the day**: Build an interactive website to track programming goals.

### Tools

Let's get familiar with the tools we'll be using today.

### Atom

Web developers commonly use a **text editor** to write and edit their code. A text editor is similar to other document editors that we might use to write a paper. Here at Epicodus, we use **Atom**, a free open-source text editor. You can download it for free at [atom.io](https://atom.io/). If you're using a computer at Epicodus, Atom is already installed and ready for use.

### The Terminal

Most developers also use a **Terminal** or **Command Line** program. A Terminal is a line-by-line command interface to your computer. It's a powerful tool that can do simple things like create and open files. It can also carry out more complicated tasks like building projects, managing complicated framework dependencies and running servers.

Let's open our **Terminal** program now. You should see something like the image below as well as a flashing cursor.

![example-terminal-screen](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/terminal_example.png)

The terminal runs from a single location on the computer just like a file or image within the folders on your desktop. With the cursor on the terminal, enter the following command to find out where the terminal is currently running.

```
pwd
```

Press `Enter`.

You'll see the terminal return a location such as `/Users/epicodus`. Let's use a command to move the working directory to the desktop so we can begin creating our project.

```
cd Desktop
```

The command `cd` means *change directory*. The terminal will then move to that directory. Use `pwd` again to see that we're now located at `/Users/epicodus/Desktop` or something along those lines. The prompt in front of the cursor has also changed its text. This is a good way to keep track of where you are on your computer and within your project.

Follow along with the following commands to create your new project. Press `Enter` after each command.

* `mkdir My_Project`: This will create a new folder (also known as a directory) on the desktop with the name `My_Project`. You can use any name you like, but we'll stick with this one.
* `touch My_Project/index.html`: This will create a new file within the `My_Project` directory called `index.html`. It's the first file we'll be editing today.
* `cd My_Project`: This will change our Terminal location to within our new directory.
* `atom .`: This will tell Atom to open our new directory. We're ready to start writing some code!

You've reached the end of the first lesson. Pat yourselves on the back! When you're ready for the next lesson, click the ```next``` button at the top of the page. 
