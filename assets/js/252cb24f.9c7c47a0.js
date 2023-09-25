"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[39722],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var o=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=o.createContext({}),m=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(i),d=a,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||n;return i?o.createElement(h,r(r({ref:t},p),{},{components:i})):o.createElement(h,r({ref:t},p))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var m=2;m<n;m++)r[m]=i[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},60936:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var o=i(87462),a=(i(67294),i(3905));const n={title:"5. Using Git in Your Workflow",id:"using_git_in_your_workflow",slug:"using_git_in_your_workflow",hide_table_of_contents:!0,sidebar_position:21,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/2_3_epicodus_using_git_in_your_workflow.md"},r=void 0,l={unversionedId:"introduction_to_programming_part_time/git-html-and-css/using_git_in_your_workflow",id:"introduction_to_programming_part_time/git-html-and-css/using_git_in_your_workflow",title:"5. Using Git in Your Workflow",description:"We\u2019ve covered a lot of information about why we use Git and how to manage repositories on GitHub. Now it's time to put it all together by discussing exactly how to use Git in your workflow and best practices when using Git.",source:"@site/docs/introduction_to_programming_part_time/1_git-html-and-css/2_3_epicodus_using_git_in_your_workflow.md",sourceDirName:"introduction_to_programming_part_time/1_git-html-and-css",slug:"/introduction_to_programming_part_time/git-html-and-css/using_git_in_your_workflow",permalink:"/lhtp/introduction_to_programming_part_time/git-html-and-css/using_git_in_your_workflow",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"5. Using Git in Your Workflow",id:"using_git_in_your_workflow",slug:"using_git_in_your_workflow",hide_table_of_contents:!0,sidebar_position:21,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/2_3_epicodus_using_git_in_your_workflow.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"4. GitHub and Remote Repositories",permalink:"/lhtp/introduction_to_programming_part_time/git-html-and-css/github_and_remote_repositories"},next:{title:"1. Thursday Schedule and Expectations",permalink:"/lhtp/introduction_to_programming_part_time/git-html-and-css/thursday_schedule_and_expectations"}},s={},m=[{value:"List of most relevant git commands",id:"list-of-most-relevant-git-commands",level:3},{value:"Co-Author Commit Trailers",id:"co-author-commit-trailers",level:2},{value:"Fixing past commit history",id:"fixing-past-commit-history",level:2},{value:"Git Best Practices",id:"git-best-practices",level:2},{value:"When to make commits",id:"when-to-make-commits",level:3},{value:"When writing commit messages",id:"when-writing-commit-messages",level:3},{value:"Git workflow",id:"git-workflow",level:2},{value:"When pair programming remotely:",id:"when-pair-programming-remotely",level:3},{value:"When working independently:",id:"when-working-independently",level:3}],p={toc:m},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We\u2019ve covered a lot of information about why we use Git and how to manage repositories on GitHub. Now it's time to put it all together by discussing exactly how to use Git in your workflow and best practices when using Git."),(0,a.kt)("h3",{id:"list-of-most-relevant-git-commands"},"List of most relevant git commands"),(0,a.kt)("p",null,"This is a list of all the git commands we have used so far."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git init")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Initializes a ",(0,a.kt)("inlineCode",{parentName:"li"},".git")," repository in your project. "),(0,a.kt)("li",{parentName:"ul"},"Required only once per project. "),(0,a.kt)("li",{parentName:"ul"},"Tracks changes made in the project."),(0,a.kt)("li",{parentName:"ul"},"If deleted local project history is lost. Hopefully you have a remote version of your project on GitHub you can clone in this event. "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git status")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Tells you the status of files: untracked, tracked (unmodified, modified, staged)."),(0,a.kt)("li",{parentName:"ul"},"Use frequently; especially after the ",(0,a.kt)("inlineCode",{parentName:"li"},"git add")," command and before making a commit."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git diff name-of-file")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Allows you to see what changes were made to a modified file. "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git add name-of-file")," ",(0,a.kt)("inlineCode",{parentName:"p"},"or "),"git add .`"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Adds files to be committed. "),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},".")," represents all files. Use it to add all modified files to staged."),(0,a.kt)("li",{parentName:"ul"},"Can also add multiple files but not all by leaving space between file names. Such as ",(0,a.kt)("inlineCode",{parentName:"li"},"git add name-of-file1 name-of-file2")," etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git commit -m \u201ccommit message here\u201d")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Used to take a snapshot of your project as it currently is at that moment in time."),(0,a.kt)("li",{parentName:"ul"},"Becomes part of your project's commit history."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git log")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Allows you to view commit history in the terminal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--oneline")," is an option for the ",(0,a.kt)("inlineCode",{parentName:"li"},"git log")," command. ",(0,a.kt)("inlineCode",{parentName:"li"},"git log --oneline")," just lists the commit ids and messages. "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git remote add origin url-to-remote-repo")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote add your-initials url-to-remote-repo")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u201corigin\u201d is the typical default name for urls to remote repos."),(0,a.kt)("li",{parentName:"ul"},"\u201cYour-initials\u201d represents renaming \u201corigin\u201d to your initials though you can rename origin to whatever you like. Useful to rename origin when working with other people. "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git push origin main")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"git push your-initials main")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Adds changes from local repository to remote repository on GitHub."),(0,a.kt)("li",{parentName:"ul"},"Recommend pushing changes at the end of each workday. ")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"New commands!")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git commit --amend -m \u201cnew message for most recent commit\u201d"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--amend")," is an option for the ",(0,a.kt)("inlineCode",{parentName:"li"},"git commit")," command"),(0,a.kt)("li",{parentName:"ul"},"Modifies the most recent commit message."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git rebase -i HEAD~n"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Allows you to bulk modify older commit messages. "),(0,a.kt)("li",{parentName:"ul"},"\u201cn\u201d represents the number of commits you want to edit starting from the first."),(0,a.kt)("li",{parentName:"ul"},"See GitHub Docs: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message#amending-older-or-multiple-commit-messages"},"Changing the message of older or multiple commit messages")," under \u201cAmending older or multiple versions\u201d.")))),(0,a.kt)("h2",{id:"co-author-commit-trailers"},"Co-Author Commit Trailers"),(0,a.kt)("p",null,"GitHub uses your commit history to create a collection called ",(0,a.kt)("strong",{parentName:"p"},"GitHub contributions")," in your GitHub profile page. As a brand new user to GitHub, your contributions will be sparse. That's okay, you\u2019ll make lots of commits in the future."),(0,a.kt)("p",null,"One reason to commit regularly while at Epicodus is that sometimes employers will look at your GitHub contribution calendar as evidence of experience."),(0,a.kt)("p",null,"For example, here are contributions of two graduates from the same Epicodus cohort. Their commits begin in January and end in May"),(0,a.kt)("p",null,"Graduate 1:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/TVgdR9P.png",alt:"more"})),(0,a.kt)("p",null,"Graduate 2:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/r1yhqKW.png",alt:"less"})),(0,a.kt)("p",null,"Graduate 1 made more commits than Graduate 2 while in the program. While the number of commits is not an indicator of meaningful work, having a spotty commit history or no commits will look bad for your coding portfolio, aka your GitHub account."),(0,a.kt)("p",null,"The takeaway here is to commit regularly as part of your workflow."),(0,a.kt)("p",null,"However, what about when pair programming remotely? Only the person who has the project on their computer can make commits and they end up as the only author on the commit."),(0,a.kt)("p",null,"We can fix that using a co-author ",(0,a.kt)("strong",{parentName:"p"},"commit trailer"),"."),(0,a.kt)("p",null,"Using a co-author commit trailer looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git commit -m \u201cAdd styled box to heading\n\nCo-authored-by: firstName lastName <emailAddress>\n")),(0,a.kt)("p",null,"The spacing is important. This is what it will look like in your terminal before hitting Enter:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/idXXTnz.png",alt:"commit trailer"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lastName"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"<emailAddress>")," should be the information your pair uses for their GitHub account. You can include additional co-authors by adding them to a new line in the commit message."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"git log")," you should see:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/qz7YaSi.png",alt:"git log commit trailer"}),"\t"),(0,a.kt)("p",null,"Finally, after pushing to the remote repository, you should see that this commit has a link to both author's GitHub accounts."),(0,a.kt)("p",null,"Here is further documentation about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors"},"creating commits with mulitple authors"),"."),(0,a.kt)("p",null,"Be aware that it may take time for the ",(0,a.kt)("strong",{parentName:"p"},"GitHub contributions")," to appear on your profile page but if they are not showing up after a few days then troubleshoot using this doc: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"},"Why are my contributions not showing up on my profile?")),(0,a.kt)("h2",{id:"fixing-past-commit-history"},"Fixing past commit history"),(0,a.kt)("p",null,"If you forget to co-author a commit, that is no problem. It is relatively easy to go back and alter commit history on your ",(0,a.kt)("strong",{parentName:"p"},"local")," repository."),(0,a.kt)("p",null,"Use the git command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git rebase -i HEAD~n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"n")," represents the number of commits you want to edit, starting from the most recent comment. For example, if I wanted to edit the last 4 commits, I use ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase -i HEAD~4")),(0,a.kt)("p",null,"Git should open a new file in VS Code."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note!",(0,a.kt)("br",{parentName:"p"}),"\n","If VS Code doesn\u2019t open and instead git wants you to make edits in your terminal, then revisit this lesson ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-configurations"},"Git configurations")," and make sure VS code is set up as Git's default editor.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/AFwFUEV.png",alt:"rebase first menu"})),(0,a.kt)("p",null,"VS code should open a edit window that looks something like the image above. At the top is the commit history of the project. Below are instructions for options available. The list is in ascending order; the red circle is next to the most recent commit made in the commit history. The red underlined words are what we feel are the most relevant options for you at this time. (Though play around with them all!)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pick")," is just leave the commit as is.\n",(0,a.kt)("inlineCode",{parentName:"p"},"reword")," means to use the commit but edit the message.\n",(0,a.kt)("inlineCode",{parentName:"p"},"squash")," is to use the commit but meld it into the previous commit (the one next above in the list). This is helpful if you forget to include a minor edit in a commit. You can make another commit and then meld the two."),(0,a.kt)("p",null,"Do use the options, replace the word ",(0,a.kt)("inlineCode",{parentName:"p"},"pick")," with any of the option names. Such as: "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/g0GTcqi.png",alt:"rebase commands"})),(0,a.kt)("p",null,"Then save and close the edit window. A new edit window will appear in VS code. The first thing Git wants us to resolve is the ",(0,a.kt)("inlineCode",{parentName:"p"},"squash")," command. We want to combine the very first and second commit into one. In this new edit window, Git is giving us an opportunity to edit the commit message if we please."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/WyT9zT7.png",alt:"rebase squash"})),(0,a.kt)("p",null,'(The last few letters of "languages" is in red because that commit message is a bit too long.)'),(0,a.kt)("p",null,"For this example this is how we chose to combine the commit messages."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/wjFCGOj.png",alt:"combine rebase"})),(0,a.kt)("p",null,"When you are happy with the commit message, save and close the edit window. "),(0,a.kt)("p",null,"Since we also chose to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"reword")," command on another commit, the edit window will open again. This time we are not combining commits, just editing the commit message of a single commit."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/N7j3TLd.png",alt:"reword rebase"})),(0,a.kt)("p",null,"This time we added our co-author commit trailer. When we are done we again save and close the file."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/8aNy8XR.png",alt:"reword cocommit"})),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"git log")," we can see our new local commit history. It looks like we forgot to add a co-author commit trailer to all commits. No problem, we can just run ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase")," again!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/zyFpCKc.png",alt:"final rebase result"})),(0,a.kt)("h2",{id:"git-best-practices"},"Git Best Practices"),(0,a.kt)("p",null,"Just like with any list of best practices, your standards might change depending on circumstances or on the company you work with in the future. The following are Git best practices based on convention and what practices we know to help beginners create good habits."),(0,a.kt)("h3",{id:"when-to-make-commits"},"When to make commits"),(0,a.kt)("p",null,"Typically, you make a commit when any of the following are true:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When a new feature or functionality is added to your project."),(0,a.kt)("li",{parentName:"ol"},"When a bug (an error) is fixed."),(0,a.kt)("li",{parentName:"ol"},"When we reach a stopping point or have been stuck for a long time.")),(0,a.kt)("p",null,"A long period of time may pass before any of these situations are true. For the sake of making it a habit to commit while you are learning, we recommend making a commit at least every 30 minutes."),(0,a.kt)("p",null,"When understanding when to make a commit, there aren't really any hard rules. However, there is definitely the problem of committing too much or not enough. It is more of a problem to not commit enough. Here are some common scenarios:"),(0,a.kt)("p",null,"Scenario 1:",(0,a.kt)("br",{parentName:"p"}),"\n","\u201cAva and Eli are pair programming. Since Ava and Eli are new to using Git, they decide to set up a timer and make a commit every 30 minutes. However, when it is time to commit, Ava and Eli feel like they haven\u2019t made any meaningful progress. Ava and Eli use the abbreviation WIP (Work in Progress) at the start of the commit message along with a brief description of progress made so far.\u201d"),(0,a.kt)("p",null,"Scenario 2:",(0,a.kt)("br",{parentName:"p"}),"\n","\u201cAva has been coding for a long time and making really great progress. However, Ava has forgotten to make commits the entire time. A lot of work has been done but it has no accompanying commit history. Ava has 5 modified files in her project. She could make 1 commit for all 5 files. Instead Ava decides to make 1 commit for each file, resulting in 5 commits. This was the better choice because Ava can more clearly describe the change to each file in separate commit messages. 5 commits also better reflects the amount of work Ava has done more so than 1 commit."),(0,a.kt)("p",null,"Scenario 3:",(0,a.kt)("br",{parentName:"p"}),"\n","\u201cEli spots several errors in their code. Eli is more experienced so they quickly know how they will fix the errors. Eli could fix all the errors and then make 1 commit. Instead, Eli decides to fix 1 error at a time then make a commit. This was a better choice because Eli can include a commit message for every error. Now Eli has a more robust commit history. If Eli encounters a similar error in the future, they can more easily reference their commit history."),(0,a.kt)("p",null,"Scenario 4:",(0,a.kt)("br",{parentName:"p"}),"\n","\u201cNick has completed a new feature in his project. He has added a form to his website that prompts visitors to fill out a fun quiz. Proud of his work, Nick makes a commit. However, just after Nick makes a commit, he notices he accidentally left out the last question in the quiz. Nick adds the question and makes another commit.\u201d"),(0,a.kt)("h3",{id:"when-writing-commit-messages"},"When writing commit messages"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Commits messages should be brief; generally 50 characters or less."),(0,a.kt)("br",{parentName:"li"}),"Commit messages are intended to be brief so they can be easily referenced. When looking through a big list of commit messages (such as when using ",(0,a.kt)("inlineCode",{parentName:"li"},"git log --oneline"),")  you don\u2019t want to have to read lengthy paragraphs of information. ")),(0,a.kt)("p",null,"For example, if you make a really long commit message, on GitHub the message will be cut off. You would have to click the ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," icon to see the whole message. That's annoying!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oFm7MjERRPAdzt3FQy-Robl-C0CsQ6hDfY8rZ5qO-1pomPQpKSFFqV5Lt487wjrO6AQ1hje5Ozb9SkdaimlJIJBKy0IXrEgx2kCMUr7wMKt7rndVcZXgRNC4u3jCMmMAZ95vkuOaH2WmR-xQo_anuA1Qrgxn1lwupqAxXXZslB570UGaiLezb1tLPxZgLy9KvQW3uRSAAecSQqgpAQesRYE6PkpBJ7mUyE39iexSxsz75goD9STw-0XHAeVoIEWnnrywf4gF0UjOGlbYOiXGiAZtz4l9bmqBA1_RNX0IvtUOJfWZD5ZW22sXffi9PrDU3PafcGp-iOY8u5Au2eF0UnE2X_4r76XiAO4RnlpBapXKmSwWPKOyR2TI1k38RxVEhBJMiHm75nL_sxDLM8J12PXX8xCx-oUwv95DGSWW8pwEIvHYenItRsSln50LS5Ex_RTBPzgDjP0ZKUsd5ms9nGD0v6Igqt6TqRrtc5RpqLtLA6HEllVUAYuitv3w3qqBM90cL1xbJKuuYx3db6X6mWE5U2z8JPb2wyDZUm0IVJ_bhYQOWIgzHYY9uB7yaB3VuOmzgu0M-HIXfds_aPiQGdBB2Gz5BCwYaiA3IoFAobWB0O5HgIGhKF1Pvj2T8yF6KdoVXTBvOPq6sISzavcjAUe0A6eBLyREGlG8Jphq2YG7etdCz0OqFhspc1Rk395e6IFuh7tL-SIIMiwQDMQGr6f5DxFL_oTjueHGq_1r_D-LQMS67vOr4yaSGuHm3X_sCex1wIJ1yVQ2f1pxIz6Wz6sCychYBqDTmQ_aI0jZm68dSKPB1_C6iyBzXlImCMoVyWR63I9Sa9aKw5XDycJggQW3AL0ZllOQQDcxwxB4tt1omF7Rq-djVOhmEgzXuR5oK9j4p8QFWqgynJPc_n5f0eUu0_-YRJqtjS23_v9LPD8vWdL5jxzaqhZwfK5bNk32NTk0yreiMtGpHlmfVDBI-LqcCg_Nww1TD5OktlrMKyXTHkRkWzmEzaNHCK8RWHYtKH_MscugdASsmBmcjR5Dq43moU_8WuN8iZ4Ag",alt:"too long commit"})),(0,a.kt)("p",null,"If you are not sure how to condense your commit message, that might be a sign your commit should be broken down to make several smaller commits."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Start a commit message with a present tense verb."),(0,a.kt)("br",{parentName:"li"}),"In the English language, a verb is a word used to describe an action, state or occurrence. These are examples of present tense verbs: fix, add, adjust, create, remove, delete, move, update.  ")),(0,a.kt)("p",null,"Starting a commit message with a present tense verb is generally considered best practice. That's to say, you\u2019re going to see exceptions and other conventional standards out there. "),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Can use labels WIP (work in progress) or BUGFIX at start of commit message.",(0,a.kt)("br",{parentName:"li"}),"This is an exception to the previous guideline. Using the WIP label is helpful when making regular commits to show progress but you haven\u2019t finished anything yet. Using the label BUGFIX is helpful to more easily reference your commit history.")),(0,a.kt)("p",null,"These are examples of good commits messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"Add personal bio to home page"\n"Add green and gold styling to navbar"\n"Add styled box to heading"\n"Add radio buttons to favorite color form"\n"Add README that lists completed features"\n"Update README to include project setup instructions"\n"Create hide function to hide form on sign up"\n"Write temp method to track current temperature"\n"WIP: updating navbar to add styles"\n"WIP: trying to fix bug in addMoney function"\n"WIP working on logic for Record class"\n"Fix typos in favorite things list"\n"BUGFIX: Fix overlapping text box on home page"\n')),(0,a.kt)("p",null,"The following are examples of bad commit messages:"),(0,a.kt)("p",null,"All of these commits are too vague"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"Update styles"\n"Fix bug"\n"Add forms"\n"Add business logic"\n')),(0,a.kt)("p",null,"These commits are too long and too detailed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"Add sidebar with a bulleted list of how to say hello in English, French, Kinyarwanda, Japanese, German, Spanish, and Pig Latin."\n"Add sidebar, navbar, page content, and complete styles for all pages plus add user interface code.\n')),(0,a.kt)("p",null,"These commits are too wordy and don\u2019t start with a present tense verb. With exceptions for using WIP (work in progress) or BUGFIX. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u201cIt will add favorite things list\u201d\n\u201cI added a info form to the front page\u201d\n\u201cWe completed writing setup instructions in README\n")),(0,a.kt)("h2",{id:"git-workflow"},"Git workflow"),(0,a.kt)("p",null,"Your Git workflow will change over time; especially when you start your next job after Epicodus. "),(0,a.kt)("h3",{id:"when-pair-programming-remotely"},"When pair programming remotely:"),(0,a.kt)("p",null,"Let's say Ava and Eli are pair programming:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ava creates a project directory on her computer. She initializes Git in the top level directory of the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"git init"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ava starts ",(0,a.kt)("strong",{parentName:"p"},"VS Code Live Share")," and ",(0,a.kt)("strong",{parentName:"p"},"VS Code Live Server")," so Eli can participate in pair programming.  ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ava and Eli pair program as usual, switching between being the driver and being the navigator.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Regardless of who is the driver, only Ava can access her terminal to use git commands. When it is time to commit, Ava uses the following git commands: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git add name-of-file")," ")),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git commit -m \u201cbrief message\n\nCo-authored-by: Firstname Lastname emailAddress\u201d\n")),(0,a.kt)("p",{parentName:"li"},"Ava includes Eli's information as a commit trailer in the commit message so Eli gets credit.  "),(0,a.kt)("p",{parentName:"li"},"Ava repeats this step as necessary throughout the pair programming session. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ava and Eli are done pair programming or have come to a good stopping point. Ava creates a remote repository on her GitHub account. Ava then connects her remote repository to her local repository using ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote add origin url-of-remote-repo")," in the top level directory of the project. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ava then pushes all changes from her local repository to her remote repository using ",(0,a.kt)("inlineCode",{parentName:"p"},"git push origin main"),"."),(0,a.kt)("p",{parentName:"li"},"Ava repeats this step periodically if additional changes have been made to her local repository.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Eli forks Ava's remote repository so a copy is on their GitHub account. If Ava and Eli continue to pair program on the same project, Eli can sync additional changes to their forked repository from the original via GitHub."))),(0,a.kt)("h3",{id:"when-working-independently"},"When working independently:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new project on your computer. Initialize Git in the top level directory of the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"git init")," ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ",(0,a.kt)("strong",{parentName:"p"},"VS Code Live Server\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Work as usual and make regular commits. When it is time to commit:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git add name-of-file")," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git commit -m \u201cbrief message\u201d")))),(0,a.kt)("p",{parentName:"li"},"Repeat this step as necessary to commit.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When at a good spotting point, create a remote repository on your GitHub account. Connect your remote repository to your local repository using ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote add origin url-of-remote-repo")," in the top level directory of the project. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Push changes to your remote repository using ",(0,a.kt)("inlineCode",{parentName:"p"},"git push origin main"),". Repeat this step periodically."))))}c.isMDXComponent=!0}}]);