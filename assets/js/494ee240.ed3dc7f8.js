"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[4570],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>p});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(o),d=i,p=c["".concat(u,".").concat(d)]||c[d]||h[d]||n;return o?r.createElement(p,a(a({ref:t},m),{},{components:o})):r.createElement(p,a({ref:t},m))}));function p(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<n;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1019:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=o(7462),i=(o(7294),o(3905));const n={title:"2. Commit Trailers and Github Contributions",id:"commit_trailers_and_github_contributions",slug:"commit_trailers_and_github_contributions",hide_table_of_contents:!0,sidebar_position:21,day:"tuesday",type:"lesson"},a=void 0,s={unversionedId:"git_html_and_css/commit_trailers_and_github_contributions",id:"git_html_and_css/commit_trailers_and_github_contributions",title:"2. Commit Trailers and Github Contributions",description:"There are many reasons why we should commit our code regularly. We can ensure that all the changes in our code are tracked, both major and minor. If something breaks in our code, we can return to a commit where we know the code is working. Finally, regular commits make it much easier for different people working in different places to track and contribute to a project.",source:"@site/docs/1_git_html_and_css/2ab_tracking_contributions_on_github.md",sourceDirName:"1_git_html_and_css",slug:"/git_html_and_css/commit_trailers_and_github_contributions",permalink:"/lhtp/git_html_and_css/commit_trailers_and_github_contributions",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"2. Commit Trailers and Github Contributions",id:"commit_trailers_and_github_contributions",slug:"commit_trailers_and_github_contributions",hide_table_of_contents:!0,sidebar_position:21,day:"tuesday",type:"lesson"},sidebar:"docs",previous:{title:"1. Tuesday Schedule and Expectations",permalink:"/lhtp/git_html_and_css/tuesday_schedule_and_expectations"},next:{title:"3. HTML Inline Elements and Attributes: <strong>, <em>, <img>, <a>, and More",permalink:"/lhtp/git_html_and_css/html_inline_elements_and_attributes_strong_em_img_a_and_more"}},u={},l=[{value:"GitHub Contributions",id:"github-contributions",level:2},{value:"Using Commit Trailers",id:"using-commit-trailers",level:2}],m={toc:l},c="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are many reasons why we should commit our code regularly. We can ensure that all the changes in our code are tracked, both major and minor. If something breaks in our code, we can return to a commit where we know the code is working. Finally, regular commits make it much easier for different people working in different places to track and contribute to a project."),(0,i.kt)("p",null,"However, even with these facts in place, it's often hard for Epicodus students to get into the swing of making regular commits. "),(0,i.kt)("h2",{id:"github-contributions"},"GitHub Contributions"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Here's one more motivation \u2014 the commits and repositories we make are tracked on our Github profile. These are collectively called ",(0,i.kt)("strong",{parentName:"p"},"GitHub contributions"),". You can see a calendar view of your GitHub contributions by navigating to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/"},"Github"),', signing in and clicking on your avatar in the upper right corner of the screen. Select "Your Profile" from the dropdown.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/uuiijqo8cean5xl/your-gh-profile.png?raw=1",alt:'Select "Your profile" from the dropdown in the upper right.'})),(0,i.kt)("p",null,"You'll see a graph that measures all of your GitHub contributions over the course of the year. Unless you were using GitHub regularly before you started Epicodus, you'll likely only have a few commits so far. This is totally fine and expected. However, over the course of your time at Epicodus, you will make hundreds \u2014 likely even thousands \u2014 of commits."),(0,i.kt)("p",null,"Here are the contributions of two graduates from the same Epicodus cohort. Their commits begin in January and end in May \u2014 the twenty weeks they were full-time Epicodus students. "),(0,i.kt)("p",null,"If you take a look, the first student made three times as many commits while they were a student at Epicodus."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/l5by5gfki7z9rcz/many-contributions.png?raw=1",alt:"This student has lots of contributions \u2014 about 1500."})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/1fo01eeahg9ukc1/few-contributions.png?raw=1",alt:"This student doesn't have as many contributions \u2014 about 500."})),(0,i.kt)("p",null,"Based on the commit histories above, which of these students do you think did more work? And just as importantly, which of these students was more diligent and thorough?"),(0,i.kt)("p",null,"There's actually no way to know for sure just based on this information, but the first student's commit history suggests that they did more consistent work throughout the program. Even though this may not be the case, first impressions do matter. Your resume and LinkedIn profile will contain links to your Github profile. While there are other, better ways for potential employers to see the work you've done, this is one of many little things that might make a difference."),(0,i.kt)("p",null,"Over a twenty-week period, assuming each of these full-time students only committed code from Monday through Friday, the first student made about fifteen commits per day while the second averaged five commits per day. While fifteen commits a day is solid, five commits is definitely not enough."),(0,i.kt)("p",null,"Overall, the quality of commits is more important than the quantity. You shouldn't just commit code in order to rack up more commits. However, you ",(0,i.kt)("em",{parentName:"p"},"should")," aim to commit code whenever you add a new feature, fix a bug, or get a test passing (you don't have to worry about tests yet)."),(0,i.kt)("h2",{id:"using-commit-trailers"},"Using Commit Trailers"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In addition to committing regularly, you'll need to make sure that your commits are actually attributed to you. A standard git commit is set up to only give attribution to one person. Since we usually pair program at Epicodus, you'll need to do a little extra work to ensure that both pairs get attribution for their work."),(0,i.kt)("p",null,"We can add co-authors in the command line by adding commit trailers when we write a commit message. Let's compare two commits. The first is a commit that we'd make if we were working solo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ git commit -m "Add README"\n')),(0,i.kt)("p",null,"Now, however, let's say that we have the good fortune of pair programming with Ada Lovelace and Grace Hopper, two notable figures in coding history. We want to make sure they get attributed for the work, too. We can add trailers like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ git commit -m "Add README\n>\n>\nCo-authored-by: Grace Hopper <github-email@super-programmer.com>\nCo-authored-by: Ada Lovelace <another-gh-email@super-programmer.com>"\n')),(0,i.kt)("p",null,"We start by writing our commit message as usual. However, instead of closing out our commit message with quote marks, we instead hit ",(0,i.kt)("em",{parentName:"p"},"Shift")," + ",(0,i.kt)("em",{parentName:"p"},"Enter")," twice, creating two lines of whitespace. (The ",(0,i.kt)("inlineCode",{parentName:"p"},">")," denotes that we've started a new line in the terminal and that we haven't completed our previous command.)"),(0,i.kt)("p",null,"For each co-author, we start by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"Co-authored-by:")," followed by a space. Next, we add the preferred name of the co-author as well as the email associated with their Github account. It's very important that the right email is added \u2014 otherwise, the co-author won't be correctly attributed in the commit."),(0,i.kt)("p",null,"Once we are done, we complete the commit with the usual quote marks. Grace Hopper and Ada Lovelace are now contributors on this commit. If we were working on a computer that has a different user in the global git configuration (",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/practice-git-project-setup"},"see Git Project Setup")," if you need a refresher), that user would also be a contributor."),(0,i.kt)("p",null,"Let's do one more example \u2014 this one will follow the example of having one user hosting a VS Code Live Share session with their pair. The host should already have a global git user and email set up on their machine. For that reason, the commit trailer only needs to include the pair that's being hosted (not the host)."),(0,i.kt)("p",null,"So if you were hosting a VS Code Live Share session with Ada Lovelace and you've already set up a global user on your machine, your commit would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ git commit -m "Add README\n>\n>\nCo-authored-by: Ada Lovelace <another-gh-email@super-programmer.com>"\n')),(0,i.kt)("p",null,"Once you push your code, you should verify that it's correctly showing both contributors in Github. Now you'll properly be attributed for your work \u2014 including on the commit graph in your Github profile."),(0,i.kt)("p",null,"For more information on creating a commit trailer, see ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors"},"Creating a commit with multiple authors"),"."),(0,i.kt)("p",null,"If your commits aren't showing up in the commit graph on your profile and you'd like to troubleshoot, see ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile"},"Why are my contributions not showing up on my profile?"),"."),(0,i.kt)("p",null,"If you want to read more about viewing your GitHub contributions, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile"},"Viewing contributions on your profile"),"."))}h.isMDXComponent=!0}}]);