---
title: Publishing Your Site with GitHub Pages
id: publishing-your-site-with-github-pages
slug: publishing-your-site-with-github-pages
hide_table_of_contents: true
sidebar_position: 6
day: weekend
type: lesson
url: >-
  https://github.com/epicodus-curriculum/workshops/blob/main/6_publishing_your_site_with_gh_pages.md
---

In this lesson, we'll learn how to publish our new site for the world to see. We'll briefly explore tools called **Git** and **GitHub** in order to publish our page online using a special tool known as **GitHub pages**.

### Git and GitHub

Professional web and software developers have a wide range of tools at their disposal to help build, monitor, and collaborate on projects. One of the most common types of software is called **version control software**. We can use version control to track all the changes we make to our code base. Instead of just saving, we "commit" code. Each commit represents a different place in a project's history. Version control makes it much easier to see how a project has evolved over time, which is very important in larger projects. It's also helpful if we need to go back to an older version of the software, which may be necessary if new code has bugs or is broken.

The most common version control software in use is called **Git**. Git is an open-source project that's easy to access via the command line or terminal. We can then use it with any number of code hosting services. Epicodus uses GitHub, one of the most popular code hosting services.

Let's open the terminal and enter a few commands. Git is complex software that does a lot more than we need it for today. Stick to these commands and you can't go wrong.

Make sure you're in the My_Project directory with `pwd`, then enter the following.

```
git init
```

This initializes a new git project.

Next, we'll configure git to use our user name and email. This is so the code we add to GitHub actually has our name on it.

```
git config user.name your_name (use quotes if you want to use a multiple word name)
```

```
git config user.email your_email
```

You're now set up as the author of this project. Any commit you make will have this user name and email attached to it.

Next, you'll need to create a [free GitHub account](http://GitHub.com). After creating the account you'll need to visit the email address you provided and click the link in the confirmation email GitHub has sent you.

Pick a good user name! If you decide to become a developer, your GitHub user name will likely end up on your resume. GitHub also functions as a social network for developers. You can connect with people, collaborate on projects, and even find cool new libraries and tools to use.

Once you successfully register for a GitHub account, you should see a welcome message like this:

![GitHub-welcome-message](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/github-welcome-message.png)

Now that you have an account, let's create a **repository** on GitHub. A **repository** is a place to store a project on your GitHub account. Each repository should contain just one project. To create a new repository (almost always called a **repo**) select the `+` option in the upper-right corner of the GitHub welcome page. Then, select _New repository_ from the dropdown menu, as seen in the image below:



![create-new-repo-option](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/create-new-repo.png)

This should take you to a screen that looks like this:



![create-new-repo-screen](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/create-new-repo%20(1).png)

Pick a clear, concise name for your repo. An example might be *workshop_project*. You don't need to alter any of the other options here besides your _Repository name_. After entering a name, click the _Create repository_ button. This should take you to a page that looks like this:




![new-empty-repository](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/new-empty-repo.png)

Now that we have a GitHub account we need to link the local copy of our project (on our computer) to what will become the remote copy (the new repo we've just created). Copy URL that GitHub gives you and return to the terminal.



![new-GitHub-repo-url](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/github-repo-url.png)

Enter the following line into the terminal:

```
git remote add your_name your_URL
```

**Note**: Replace `your_name` with your actual name and `your_URL` with the URL that GitHub supplied you.

This sets up a **remote** in your project. This links the local project on our machine with the remote repository stored online.

Next, enter the following commands.

```
git add .
```

```
git commit -m "add workshop project to git"
```

This will tell Git to collect all the work we've done today and store it in a **commit**. Once we've made a commit, we can then push all the information saved in that commit to GitHub.

Finally, enter the following:

```
git push your_name master
```

Git will ask you to enter your username and password for GitHub.

Once you've entered your password, Git will send the local version of your project from your computer to the repository you created on GitHub. You can view the files online by refreshing the browser page where you copied the GitHub URL.


![project-files-on-GitHub](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/project-successfully-pushed-to-github.png)

Let's take one last step. Let's use GitHub to host our project online.

Within your repo, click *Settings* at the top.



![GitHub-repo-settings-option](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/repo-settings-option.png)

In the settings area, scroll down until you see a box labelled GitHub Pages. Within this box, you'll see a dropdown reading _None_. Select *master branch* from the dropdown. Then click Save.



![publishing-to-gh-pages](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/Screen%20Shot%202017-04-07%20at%205.17.33%20PM.png)

It may take a minute to compile, but you can now scroll down to see the URL of your new hosted site. Put that URL in the browser and check out your live site!



![GitHub-pages-url](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/Screen%20Shot%202017-04-07%20at%205.19.14%20PM.png)
