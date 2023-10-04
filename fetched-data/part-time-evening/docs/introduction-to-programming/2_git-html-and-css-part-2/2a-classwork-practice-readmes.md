---
title: 'Practice: Markdown by writing READMEs'
id: practice-markdown-by-writing-readmes
slug: practice-markdown-by-writing-readmes
hide_table_of_contents: true
sidebar_position: 12
day: sunday
type: exercise
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2a_classwork_practice_readmes.md
---

**Goal**: Now that you know how to clone repositories and how to write `README.md` files, let's practice by adding `README.md` files written in Markdown to the repositories you've created so far. Working as a pair, you will add a `README.md` to one of each student's previous projects.

## Warm Up
<hr />

* Why are READMEs important?
* What sections should be included in one? Why?
* How do we format READMEs?

## Code
<hr />

### Add READMEs to Your Projects

Let's add READMEs to projects that are currently in GitHub. This will give us additional practice with cloning existing repositories. All students in the pair or group of three should add a README to a project, taking their turn to drive.

If you are working on your personal computer and the project also exists on your desktop, first make sure the project is in GitHub (that means making sure that _all_ files are saved and the latest code has been committed and pushed). Then remove the directory from your desktop. (If you're worried about losing content, you can also rename the directory). Next, clone the project down from GitHub. It's important that we clone our existing repositories rather than just downloading the files. By using `git clone` we maintain the link to the git repository and can continue to make commits to the same project.

Let's start with this:

* Together with your pair, decide who will drive first.  The person with the keyboard will select a GitHub repository (such as `my-first-webpage`) from their account to clone and add a README to.
* Open Terminal and go to the Desktop folder. (Again, it is important not to clone one project into another project's folder.)
* Use `git clone` to clone the `my-first-webpage` repository from your GitHub.
* Type `ls` in the Terminal and you should see your project folder appear.
* Go into that project folder in the Terminal.
* Type `git log` to confirm that you are in the project folder and can see all of your git commits from your previous work on this project. (If this list of commits is long, you may have to press `q` to get back to the command line prompt.)
* Type `git remote -v` and you should see a remote link nicknamed `origin` to your remote repository URL. (Whenever we clone a project from GitHub the repository we cloned from is automatically included as a remote named origin).
* Create an empty `README.md` file by typing `touch README.md`.
* Open the project folder in Visual Studio Code by typing `code .`
* You should see your `my-first-webpage.html` file with all of your work, as well as the new, empty `README.md` file.
* Go ahead and write a `README.md` for your my-first-webpage project using the Markdown language, as discussed in the README lesson.
* The partner not on the keyboard should be a second set of eyes reviewing the Markdown as it is written.

After you finish updating your `my-first-webpage` project, the owner of the project you're currently working on will commit the new `README.md` file and push the updated project back up to their GitHub using the following instructions:

* `$ git add .` (the "`.`" allows you to add all files without needing to add each individually by name)
* `$ git commit -m "Add README"`
* `$ git status` to ensure that everything has been committed
* `$ git push origin main` to push your updated project back up to GitHub
* Check on GitHub to make sure that your README shows up correctly on the main project page.

Now that you've added a `README.md` to your my-first-webpage project, give the keyboard to your partner to allow your pair to do the same for one of their projects. Repeat the directions above.
