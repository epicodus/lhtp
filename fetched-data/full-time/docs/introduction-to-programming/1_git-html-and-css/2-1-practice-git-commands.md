---
title: 'Practice: Git Commands'
id: practice-git-commands
slug: practice-git-commands
hide_table_of_contents: true
sidebar_position: 18
day: tuesday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_1_practice_git_commands.md
---

In the previous lesson, we initialized git in our project and walked through the status lifecycle of files. That was a lengthy walkthrough so let's now practice the most relevant points.

When you make changes in your project, you have the option to make a commit which will preserve a snapshot of your project at that moment. The steps are:



1. Make a change in your project. Such as, add a new line of code or delete lines of code.

2. Add those changes to be committed using: `git add name-of-file`
    * Additionally, you can include multiple file names in the `git add` command. Separate file names using a space. 
    * `git add .` adds all modified files without having to name all files.

3. Commit staged changes using: `git commit -m “brief message”`

    Repeat these steps as necessary. Recommend using `git status` after every step to check file status as you are learning. Use `git diff` often to see changes of modified files. Use `git log` to view your commit history.


    For this practice lesson, the goal is to start building good muscle memory. These git commands are the ones you will use most frequently in your workflow. Make a commit for every minor change and commit messages should be a single sentence description of the change.
