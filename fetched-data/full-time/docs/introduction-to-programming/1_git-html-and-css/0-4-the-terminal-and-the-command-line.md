---
title: The Terminal and the Command Line
id: the-terminal-and-the-command-line
slug: the-terminal-and-the-command-line
hide_table_of_contents: true
sidebar_position: 5
day: monday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0_4_the_terminal_and_the_command_line.md
---

One of the first tools any new developer must become comfortable with is the **terminal**. No matter which language you learn to program in, you will use the **terminal** constantly.

Typically when we use computers we interact visually with what we see on the screen by moving our mouse and clicking. The visuals (the menus, buttons, etc) is called the graphical user interface (GUI). An example of interacting with the GUI on a computer is double clicking on a folder to open it.

However, when we are developing code, we often use our computer's **terminal** interface. The **terminal** is an area of the computer that allows us to interact with our computer using text-based commands instead of using our mouse. So instead of opening the folder by clicking on it, we would use the **terminal** to open that folder using a text command.

Why do this? The **terminal** interface allows you to navigate and work with your computer faster. Though using the terminal effectively takes time and practice so it will feel slow at first if you’re new to it. Once you become more comfortable you will find that typing commands is faster than moving the mouse and clicking as a means to interact with your computer. 


## Overview

Text-based commands, better known as **command prompts**, are prompts designed to elicit an action. **Command prompts** are typed in the command line of the terminal.

In this practice lesson, we are going to explore a small list of command prompts most relevant to you as a beginner developer.


### Command prompts you will practice:

* `cd`
* `mkdir`
* `pwd`
* `ls`
* `touch`
* `rm`, `rm -r`

### Important new terminology in this exercise:

* command prompt, command
* root
* directory, working directory, folder
* file types


## 	Exercise

 By the end of this exercise you should be able to use **command prompts** to:

1. Move around your computer.
2. Create folders
3. Create files
4. Open VS Code from the terminal. 

### Requirements

For Window users, the following exercise relies on you have installed Git Bash from the pre-work lesson: [Introduction to the Command Line](https://new.learnhowtoprogram.com/pre-work/getting-started-with-intro-to-programming/introduction-to-the-command-line) 


### Project Setup	

**Window users!** Open Git Bash.  

<img src="https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/terminal-and-command-line-git-bash-logo.png" alt="git bash logo" style={{width:'100px%', }}/>

**Mac users!** Open your built-in Bash terminal.  

<img src="https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/terminal-and-command-line-mac-terminal-logo.png" alt="static image of mac terminal icon" style={{width:'100px%', }}/>

Regardless of if you are a Mac or Windows user, the following exercise will work the same.


## 	Steps



>Let's pair program!
>
>We're going to complete this exercise by pair programming. We recommend reading through this entire lesson together before starting.
>
>We can't share write access to our computer's terminal when we pair program. Well we can, but we shouldn't because it presents a security risk. Your terminal is direct access to your computer. Someone malicious could do some serious harm if they are able to write in your terminal.  
>
>This is how we will pair program for this exercise:
>
>**If pairing remotely:**  
>The driver shares their screen in Discord so everyone in the pair group can see their terminal. Recommend everyone goes through the following lesson once as the driver.
>
>**If everyone in the pair group is sharing a computer:**  
>In this case, everyone actually does have access to the terminal. You don't need to share your screen in Discord. The driver will have control over the mouse and keyboard. The navigator(s) watch the driver. Recommend everyone goes through the following lesson once as the driver.
>
>As you write code, do your best to talk out loud what you are doing or what you are thinking. Don't be afraid to attempt when you don't know what to do. This helps you practice your technical communication skills and stay in communication with the navigator.
>
>The navigator is responsible for reading the instructions to the driver and watching for errors. As a navigator, do your best to keep the driver on track to achieve the goal of the exercise. Don't be afraid to kindly call out any typos the moment you see them.  

1. Navigate to the Desktop. In your terminal, type:
                
```
cd ~/Desktop
```

The **tilde** symbol (sounds like “til-duh”), sometimes called “the squiggly line,” represents the **root directory** of your computer. The **root directory** is the topmost **folder** in a file system. 

The terms **directory** and **folder** are often used interchangeably. For the majority of use cases, they both mean the same thing. If it helps to make some distinction, the term **directory **may in some context** **refer to how documents files and folders are structured on your computer. Whereas a **folder **is simply a space that stores files. Though again, don’t be surprised if these two terms are used as synonyms.


For these lessons we will use the term **directory** in most cases.


`cd` stands for “change directory.” This command allows you to navigate your computer via the terminal. Putting it all together, `cd ~/Desktop` reads basically as “navigate to the Desktop from the root directory.”

2. Confirm you are in the Desktop. In the terminal, type:

```
pwd 
```
The `pwd` command stands for “print working directory.”  “Working” as in “current”. This command writes the full path name of your working directory. In other words, the directory you are currently in. Directories are separated by a `/` slash symbol. From left to right, the **root directory** is represented by the first `/` slash on the left. The last **directory** listed by name is on the far right. The last **directory** listed is your current working **directory**.

 In your terminal, the response to `pwd` should look like this: `/path/to/Desktop`

“path/to/” is just shorthand to represent any directories between your **root directory** and the **Desktop**. It doesn’t matter what the in-between **directories** are called (they will vary depending on user settings and operating system) as long as the last **directory** is `Desktop`.

Another way you can confirm you are in the right directory is use the `ls` command. The `ls` command is short for “list.” In your terminal, type:

```
ls
```

The `ls` command lists all **files** and **directories** in your current working directory. The response to the `ls` command in your terminal will be a list of any **files** and **directories (folders) **on your desktop.

Your terminal will _likely _color code the items in the list depending on the type of **file** or if the item is a **directory**. The exact color coding depends on your user settings. There is more to the `ls` command but this is all that is most relevant to you at this time.

We have talked about **files** without giving them a technical description. All you need to know at this time is that a **file** is typically identified by a name followed by a `dot` extension type. For example, these are all examples of files: `notes.txt`, `favSong.mp3`, `towerDefense.exe`, `worksheet.pdf`. There are many more file types not listed here.

3. Create a **directory** on the Desktop. In your terminal type: 

```
mkdir my-first-project
```


The command `mkdir` stands for “make directory.” What do you think it does? Look at your Desktop and you should see a new **directory (folder)** called “my-first-project”.


Try now making several new directories naming them whatever you want. 


4. Delete those extra **directories** on the Desktop. In the terminal, type:

```
rm name-of-directory
```
The `rm` command stands for “remove.”  It can be used to delete files too. To delete a directory that is not empty, you will need to use `rm -r name-of-directory`.


>Caution!
>`rm -r` can be a dangerous command if you don't know what you are doing. The `-r` is a command option that stands for "recursive." Basically, this option will delete the directory AND everything in the directory. 
>If you are new to using command prompts, don't use this command option anywhere other than your Desktop and use it carefully. If you get an error or warning message when using this command, it is safer for now to just use your mouse and right-click to delete the directory and its contents.


>Tip!
>In your terminal, use the up and down arrow keys to use previously entered commands. 
>You can also press `tab` on your keyboard to automatically complete command options instead of needing to type everything out. 
>For example, let's pretend you have a folder in your current working directory called "tasmanianDevilPics" and you want to navigate to it.  You can type `cd ta` in your terminal, press tab, and the folder name will autocomplete.


5. Navigate into the “my-first-project” directory.  
You have all the knowledge necessary to complete this step without instruction.

>Let's Pair Program!
>Are you and your pair stuck on this step? If so, ask other pair groups in your cohort for guidance. If working remotely, use the text-channels in Discord and don't be shy about joining other voice-channels.
>
>If other pair groups are not able to help, reach out to an instructor.


6. Once you are in the “my-first-project” directory, create a **file**. In the terminal, type:  

``` 
touch hi.txt 
```

The `touch` command is commonly used to create **files**. The name of the command `touch` is not very indicative to what it's used for; it's actually not an abbreviation for anything. The name `touch` is meant to imply the file was modified in some way without opening, saving or closing it. Indeed, you just created (counts as modifying) a file without opening it at all. 


7. Open the current working directory, “my-first-project”, in VS Code. In terminal, type:

```
code .
```

The `code` command opens VS Code application and the “dot” `.` means to open everything in the current working directory.  

>Note!
>If you are getting an error message that states “code command not found” you need to revisit this prework lesson: [Text Editor: Visual Studio Code](https://new.learnhowtoprogram.com/pre-work/getting-started-with-intro-to-programming/text-editor-visual-studio-code).


If successful, VS Code will open and you will see the file `hi.txt` nested in a directory called `my-first-project` in the file explorer in the left of VS Code.

>Let's Pair Program!
>Before you and your pair move on, switch who is the driver and who is the navigator and repeat the exercise above. This gives everyone an opportunity to get hands-on practice.
>
>As the new driver, you need to create a new directory on your Desktop called "my-first-project". Next, you need to create a file inside that directory called "hi.txt". Lastly, open the newly created directory in VS Code. Challenge your memory by completing the steps above in the terminal without referring to the lessons. Remember to share your screen in Discord. If you are not sure what to do, that's okay! Let the navigator guide you.
>
>As the new navigator, if the driver wants you to guide them, first challenge your memory by guiding the driver without referring to the lessons. 
>
>If either of you are not sure what to do without referring to the lessons - don't worry about it! This is just an optional extra challenge to gauge your memory but it is not an indicator of how well you comprehend the material.  


## 	Wrap-up

Excellent! You should now have a beginner's understanding of command prompts. There are many other command prompts but the ones we just practiced are the most relevant to you at this time.


More experienced developers may rely solely on interacting with the terminal and using command prompts to navigate their computer. As a beginner though, that is not an expectation you should place on yourself. It is completely fine to use the mouse and click to navigate and perform actions using the user interface (what you see on the screen). You’ll get more practice interacting with the terminal and using command prompts over time.


>Note!
>If you are unfamiliar with the inner workings of a computer, it is best to use terminal command prompts only on your Desktop for now. This way you can immediately see the changes from your Desktop. 
Future lessons will not remind you to navigate to your Desktop. Going forward we will assume you know best where on your computer you want to keep coding projects and practice exercises. 



