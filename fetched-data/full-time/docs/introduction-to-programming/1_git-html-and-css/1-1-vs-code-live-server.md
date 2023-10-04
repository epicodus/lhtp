---
title: VS Code Live Server
id: vs-code-live-server
slug: vs-code-live-server
hide_table_of_contents: true
sidebar_position: 8
day: monday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_1_vs_code_live_server.md
---

 Before we start writing HTML and creating our own webpages, we want to show you **Live Server** (not to be confused with Live Share): a VS Code extension that allows you to launch your web pages in the browser and reloads pages when changes are made.


You can open any HTML file in your browser without VS Code and without **Live Server**. However, without this extension, you would have to click the refresh button in the browser every time you made a change to the HTML document in order to see the changes displayed in the browser. This would become tedious very quickly. 


Everytime we make a change in our HTML document, we want to see the changes in our web browser instantly. **Live Server** updates your webpage when you save your HTML file.


## 	Using Live Server

To use **Live Server**, follow the directions under **Shortcuts to Start/Stop Server** on the [Live Server webpage](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). You can also install Live Server from this page if you haven’t already.

Try it out yourself as well. 

1. Create a file called in`index.html` (The file name can be whatever you want). 

2. Open that file in VS Code.

3. Copy and paste this HTML into your html file:

```
<!DOCTYPE html>
<html lang="en-US">
<body>
	<p>This website is running with Live Server!</p>
</body>
</html>	
```

4. Right click on that file and select “Open with Live Server.”  
The browser should open and you should see the text above displayed in the browser! Try editing the text in the HTML document to see what happens.


## Using Live Server with Live Share

**Live Share** is a separate VS Code extension that allows you to collaborate with others but it works well with **Live Server**. After you start a **Live Share** session, go to the **Live Share** session menu in VS Code. Below “Shared Servers” you will see an option to view the Live Server (highlighted in the image below). This allows anyone working with you, even if they’re remote, to also view your website.

![static image live server in live share menu](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/vscode-live-server-live-share-server-menu-example.png)


>Let's Pair Program!  
> **If Everyone in the pair group is sharing a computer:**  
Use Live Server without Live Share when working. Your pair group will not need to use Live Share regularly but be prepared to start a Live Share session if a remote peer or instructor needs to see your code.
>
> **If pairing remotely:**   
The person who starts the coding project on their computer will need to be the one to host the Live Share session and start the Live Server. From there, people in the pair group can switch off between who is driver and who is navigator by taking turns typing in the Live Share session.
