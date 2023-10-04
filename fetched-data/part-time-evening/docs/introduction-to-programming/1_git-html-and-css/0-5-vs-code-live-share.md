---
title: VS Code Live Share
id: vs-code-live-share
slug: vs-code-live-share
hide_table_of_contents: true
sidebar_position: 6
day: monday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0_5_vs_code_live_share.md
---

We’re building up to begin writing actual code but first we need to talk about VS Code **Live Share**: a collaboration tool that allows us to share a coding workspace with others.

Imagine you are writing code and you may be working with a peer or need help from an instructor. How do you share your code with them? Screen sharing is one option but it only allows other people to view your code. 

**Live Share** in contrast allows others to view and edit code on your computer. **Live Share** is a VS Code extension that is very popular in the tech field and makes remote collaboration a lot easier.


## Overview

### Requirements:

VS Code Live Share extension is installed following this lesson: [Installing and Using VS Code Live Share](https://new.learnhowtoprogram.com/pre-work/getting-started-with-working-remotely/installing-and-using-vs-code-live-share)

### Important new terminology in this exercise:

* Live Share, Live Share session
* Starting or hosting a Live Share session
* Joining and Live Share session


>Let's Pair Program!  
> **Everyone in the pair group is sharing a computer:**   
Go through the following instructions together. When you get to the point where you should join a Live Share session, collaborate with other pair groups in-person or reach out to a remote pair group on Discord.
>
> **If pairing remotely:**   
>Each person in the pair group should take a turn going through the lessons and hosting a Live Share session. Other members of the pair group can join that session.

### Project Setup for Live Share

Use the project you set up in the previous lesson or recreate it again if needed.

Open `my-first-project` in VS Code. 

You should see `hi.txt` in the left-hand pane of VS Code. This is called a file tree. Currently it is listing all the files in the `my-first-project` folder. 


If the tree isn’t showing, click the top left _Explorer_ icon (cirled in red).

![my first project file tree with explore icon circled in red](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/VSCodeLiveShare-Image-1.png)


## 	Collaborate with Live Share

Since **Live Share** is a well supported tool of VS Code, let's learn how to use Live Share by looking at the documentation.


Work through the steps on this page: [Collaborate with Live Share](https://code.visualstudio.com/learn/collaboration/live-share). By the end of this page you should successfully be able to start and join a **Live Share** session.


### A Few Notes:

* **Signing in via GitHub**.  
You will be prompted to sign in to use Live Share via your GitHub account. If you don’t have a GitHub account at this moment it is okay to continue as anonymous for now. \


* **The big blue “Share” button is the same as “Start collaboration session.”**  
Your Live Share menu might look different than the image example in the Live Share documentation. That's okay. Sometimes the user interface (UI) of programs change and the documentation is slow to update. This image below is closer to what you should expect but there may still be some differences. 

![example of live share menu in vs code](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/VSCodeLiveShare-Image-2.png)

* **Files need to be saved to work with Live Share.**  
**Live Share** may not initially share a file that is unsaved.


* **Click “Invite participants” to copy the invite link again.**  
When you start a **Live Share** session, a link to invite others to collaborate is automatically copied to your clipboard. If you need to get the link again, just click on “Invite participants”, which is highlighted in the image below.


![static image of invite participants button in live share](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/VSCodeLiveShare-Image-3.png)

* **How to stop a Live Share session.**

Hover your mouse over the Live Share menu and, across from “SESSION DETAILS”, will appear an icon circle with a strike through it. Click this icon to end the **Live Share** session.

![static image how to end live share session](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/VSCodeLiveShare-Image-4.png)


### Troubleshooting Live Share


If you’re running into a problem using **Live Share**, see if you can find a solution to that problem following [Microsoft's Troubleshooting Visual Studio Live Share](https://learn.microsoft.com/en-us/visualstudio/liveshare/troubleshooting) documentation. The tool you are using is VS Code.


Reach out to an instructor if there is still an issue before moving on.


### Useful Features of Live Share

Live share offers a lot of useful features but here are the most relevant ones for you at this time. Take the time you need now to explore these features and set up **Live Share** to your liking.

>Let's Pair Program!  
> The resources we're sharing on Live Share demonstrate that any participants in a Live Share session can work simultaneously. While this is an amazing feature, remember that it is not our goal for effective pair programming. Pair programming is not about outputting large amounts of code or getting work done as fast as possible. Right now we are using pair programming to learn from each other. 
>
>So remember, when working remotely, only one person at a time should be typing. 

* [Follow along with a collaborator](https://learn.microsoft.com/en-us/visualstudio/liveshare/use/coedit-follow-focus-visual-studio-code#follow-along-with-a-collaborator)  
These features allow you to more easily keep track of other participants in the **Live Share** session.

* [Enable accessibility features](https://learn.microsoft.com/en-us/visualstudio/liveshare/use/enable-accessibility-features-visual-studio-code)  
Explore these features and take time now to set them up if desired.

* [Coedit](https://learn.microsoft.com/en-us/visualstudio/liveshare/use/coedit-follow-focus-visual-studio-code)  
The start of this page offers some potential useful setup configurations.


* [Share a project and join a collaboration session in Visual Studio Code](https://learn.microsoft.com/en-us/visualstudio/liveshare/use/share-project-join-session-visual-studio-code)  
This page goes into more detail and additional options on how to start and join a **Live Share** session.


>Let's Pair Program!  
> Continue to try out Live Share within your pair group or with another pair group. Try having one person type one of the questions for other people in the Live Share session to answer.
>
>What is your favorite time of the day and why?  
>What is your dream job?  
> What are three of your favorite foods?  
> What would be the most exciting scientific discovery ever? (Examples: time travel, recreating dinosaurs, flying cars, etc.)  
>Would you rather travel back in time to meet your ancestors or to the future to meet your descendants? Why?  
> What is your most used emoji?  
What's your favorite sandwich and why?


## Wrap-up

**Live Share** is a robust tool but you’ll become more familiar with it over time. We’ll share more features of Live Share as they become relevant.

>Note!  
>The terminal is direct access to your computer. So for security reasons the custom is that the person who owns the computer should be the only one to type in their terminal. This might break the turn taking rules of pair programming at times. For example, the driver might need to ask the navigator to type something in the terminal because it's the navigator's terminal on their computer. By default VS Code restricts terminal access to Live Share participants to read-only.
