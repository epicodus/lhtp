"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[4037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,p=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(p,l(l({ref:t},d),{},{components:n})):a.createElement(p,l({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"6. PRACTICE: Tracking Changes with Git",id:"practice_tracking_changes_with_git",slug:"practice_tracking_changes_with_git",hide_table_of_contents:!0,sidebar_position:8,day:"monday",type:"exercise",url:"https://github.com/epicodus-classroom/test-intro/blob/main/1_git_html_and_css/1d_classwork_practice_tracking_changes_with_git.md"},l=void 0,r={unversionedId:"test_intro/git_html_and_css/practice_tracking_changes_with_git",id:"test_intro/git_html_and_css/practice_tracking_changes_with_git",title:"6. PRACTICE: Tracking Changes with Git",description:"We have our project directory created and our Git repository initialized.  Now, we can create the HTML file that will say hello to the world.  Let's make an empty file at the command line in our project directory:",source:"@site/docs/test_intro/1_git_html_and_css/1d_classwork_practice_tracking_changes_with_git.md",sourceDirName:"test_intro/1_git_html_and_css",slug:"/test_intro/git_html_and_css/practice_tracking_changes_with_git",permalink:"/lhtp/test_intro/git_html_and_css/practice_tracking_changes_with_git",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"6. PRACTICE: Tracking Changes with Git",id:"practice_tracking_changes_with_git",slug:"practice_tracking_changes_with_git",hide_table_of_contents:!0,sidebar_position:8,day:"monday",type:"exercise",url:"https://github.com/epicodus-classroom/test-intro/blob/main/1_git_html_and_css/1d_classwork_practice_tracking_changes_with_git.md"},sidebar:"test_intro",previous:{title:"5. PRACTICE: Git Project Setup",permalink:"/lhtp/test_intro/git_html_and_css/practice_git_project_setup"},next:{title:"7. Git Best Practices",permalink:"/lhtp/test_intro/git_html_and_css/git_best_practices"}},s={},c=[{value:"Git tracking",id:"git-tracking",level:2},{value:"Making Git commits",id:"making-git-commits",level:2}],d={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have our project directory created and our Git repository initialized.  Now, we can create the HTML file that will say hello to the world.  Let's make an empty file at the command line in our project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ touch hello-world.html\n")),(0,o.kt)("p",null,"Now, let's open our project directory in our text editor so that we can add some content to our empty HTML file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ code .\n")),(0,o.kt)("p",null,"Here is our project directory in a text editor with the empty file open.  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/git-tracking-changes/project-directory.png",alt:"Project directory screenshot"})),(0,o.kt)("p",null,"In the coming lessons, we are going to learn all about HTML but for now, copy and paste this text into your ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-world.html")," file into your text editor:"),(0,o.kt)("div",{class:"filename"},"hello-world/hello-world.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1> Hello World </h1>\n<h2> A program to greet the planet. </h2>\n\n<p>This page is an attempt to greet everyone on Earth using our various human languages.  We're interested to see how long our list can become.</p>\n\n<p>We'll start with languages that the Epicodus staff could offer without using Google. </p>\n\n<ul>\n  <li> English: Hello, world! </li>\n  <li> Spanish:  Hola, mundo! </li>\n  <li> Japanese: Konnichiwa, sekai! </li>\n  <li> French: Bonjour, monde! </li>\n  <li> Kinyarwanda: Mwirwe, isi! </li>\n</ul>\n")),(0,o.kt)("p",null,"We save our file in our text editor and see the circle on the ",(0,o.kt)("em",{parentName:"p"},"hello-world")," tab turn from a circle to an x.  If we aren't sure if our changes have been saved, this is the indicator we can use to double check.  No circle, changes saved."),(0,o.kt)("p",null,"We can view our HTML in the web browser by going to our Desktop GUI folder and double-clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-world.html"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/hello-world-browser.png",alt:"Hello world"})),(0,o.kt)("h2",{id:"git-tracking"},"Git tracking"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now, let's see what Git has done with our changes by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git status"),"."),(0,o.kt)("p",null,"Note that you should have run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git init")," in this directory in the last lesson. If you didn't, you'll get the following error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fatal: not a git repository (or any of the parent directories): .git\n")),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git init")," if you get the error above!"),(0,o.kt)("p",null,"Here's what we will see when we run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git status"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ git status\nOn branch main\n\nInitial commit\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\n    hello-world.html\n\nnothing added to commit but untracked files present (use "git add" to track)\n')),(0,o.kt)("p",null,"When we ask for the status, Git lets us know that there has been a new file added to our project directory but it is not being tracked because we haven't yet added it to the files for Git to track.  Let's do this now using the command Git tells us to use:  ",(0,o.kt)("inlineCode",{parentName:"p"},"git add"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git add hello-world.html\n")),(0,o.kt)("p",null,"Now when we run ",(0,o.kt)("inlineCode",{parentName:"p"},"git status"),", we see that adding our new file told Git that these are changes to start tracking. Git lets us know we have a new file that exists, but has not been committed.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Initial commit\n\nChanges to be committed:\n  (use "git rm --cached <file>..." to unstage)\n\n    new file:   hello-world.html\n')),(0,o.kt)("h2",{id:"making-git-commits"},"Making Git commits"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A commit in Git is a way of saving changes to the permanent history of our project.  Right now, our file is saved on our hard drive but it has not been committed to the historical log of the ",(0,o.kt)("em",{parentName:"p"},"Hello World")," website. When we make a commit, it is a snapshot of our work exactly as it exists at that moment. Let's commit our work now to the project history"),(0,o.kt)("p",null,"The command is ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git commit")," when working solo, or on a Windows machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ git commit -m "add initial HTML file with 5 languages saying hello"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PowerShell"},'> git commit -m "add initial HTML file with 5 languages saying hello"\n')),(0,o.kt)("p",null,"We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"git commit")," command followed by a succinct but descriptive message in ",(0,o.kt)("inlineCode",{parentName:"p"},'" "'),"after the ",(0,o.kt)("inlineCode",{parentName:"p"},"-m"),'.  For consistency, the message should complete the sentence, "This commit will...".  So, when looking at our commit we know that this commit will "add initial HTML file with 5 languages saying hello".  '),(0,o.kt)("p",null,"Let's look at our Git history now using the ",(0,o.kt)("inlineCode",{parentName:"p"},"git log")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git log\n\ncommit a9bf57dee7fb18b36900fd6f7b67bf12c84426ba\nAuthor: Ada Lovelace and Enrique de la Fuente <ada+enrique@>\nDate:   Tue Feb 23 11:29:00 2016 -0800\n\n    add initial HTML file with 5 languages saying hello\n")),(0,o.kt)("p",null,"Our initial commit has been assigned a unique identifier of numbers and letters, ",(0,o.kt)("inlineCode",{parentName:"p"},"a9bf57dee7fb18b36900fd6f7b67bf12c84426ba"),".  Forever more, if we want to see our HTML file as it exists right now, we can return to this unique commit."),(0,o.kt)("p",null,"Before we move on, we'll need to make a small change to our Git repository. Note that this may be confusing at first but it will become second nature. "),(0,o.kt)("p",null,"If you followed all the configuration instructions in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-configurations"},"Git Configurations")," lesson, you should be on the following branch when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git status"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"On branch main\n")),(0,o.kt)("p",null,"If you are on the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch instead, review the configuration lesson linked above to update the default. The default branch at Epicodus is the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,o.kt)("p",null,"You can also manually change the branch from ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," in a project by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git branch -M main\n")),(0,o.kt)("p",null,"This will update the default branch from ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"-M")," flag denotes that we are updating this branch."),(0,o.kt)("p",null,"If we run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git status")," again, we'll see that the problem has been addressed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"On branch main\n")),(0,o.kt)("p",null,"A couple of staff members just shared additional entries for our list! Let's updates to our HTML file to include them (again, simply copy and paste this HTML for now):"),(0,o.kt)("div",{class:"filename"},"hello-world/hello-world.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1> Hello World </h1>\n<h2> A program to greet the planet. </h2>\n\n<p>This page is an attempt to greet everyone on Earth using our various human languages.  We're interested to see how long our list can become. </p>\n\n<p>We'll start with languages that the Epicodus staff could offer without using Google. </p>\n\n<ul>\n  <li> English: Hello, world! </li>\n  <li> Spanish:  Hola, mundo! </li>\n  <li> Japanese: Konnichiwa, sekai! </li>\n  <li> French: Bonjour, monde! </li>\n  <li> Kinyarwanda: Mwirwe, isi! </li>\n  <li> German: Guten tag, Welt! </li>\n  <li> Pig Latin: ello-hay, orld-way! </li>\n</ul>\n")),(0,o.kt)("p",null,"After we save our updates in our text editor, let's look at what our ",(0,o.kt)("inlineCode",{parentName:"p"},"git status")," displays:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'On branch main\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n    modified:   hello-world.html\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')),(0,o.kt)("p",null,"It shows us that the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-world.html")," file has been modified. If we would like to commit these changes to our project history, we can add and commit them now.  "),(0,o.kt)("p",null,"So, how do we know when we should make a commit and how it should look? Don't worry. We'll cover this in the next lesson!"),(0,o.kt)("p",null,"Since we added a couple of additional lines to our HTML and are going to stop working on this code for a while, let's go ahead and add our file and commit our changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ git add hello-world.html\n$ git commit -m "add German and Pig Latin hellos"\n')),(0,o.kt)("p",null,"Here is our project's history now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git log\n\ncommit f7f936dea9c170288f96a48d7fe3dc6601b4407f\nAuthor: Ada Lovelace and Enrique de la Fuente <ada@>\nDate:   Tue Feb 23 12:16:21 2016 -0800\n\n    add German and Pig Latin hellos\n\ncommit a9bf57dee7fb18b36900fd6f7b67bf12c84426ba\nAuthor: Ada Lovelace and Enrique de la Fuente <ada+enrique@>\nDate:   Tue Feb 23 11:29:00 2016 -0800\n\n    add initial HTML file with 5 languages saying hello\n")),(0,o.kt)("p",null,"As our project grows, we will be able to run ",(0,o.kt)("inlineCode",{parentName:"p"},"git log")," to see how it has evolved from the beginning to its current state by reading each of our commit messages. The log also tells us the dates and authors of the code that was committed.  "),(0,o.kt)("p",null,"This may seem like more details than we want for a simple Hello World website but as we go you will see how using Git will make working on more complex tasks or in collaboration with a bigger team incredibly powerful for keeping code organized with each other and over time."),(0,o.kt)("p",null,"Let's take a final look at our website to see our changes."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/hello-world-browser-2.png",alt:"Hello world"})),(0,o.kt)("p",null,"Hurray! Hello, World!"))}u.isMDXComponent=!0}}]);