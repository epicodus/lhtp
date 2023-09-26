"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[21771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,d=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Git with Collaborators: Workflow",id:"git-with-collaborators-workflow",slug:"git-with-collaborators-workflow",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/git_with_collaborators_workflow.md"},i=void 0,l={unversionedId:"intermediate-javascript-part-time/team-week/git-with-collaborators-workflow",id:"intermediate-javascript-part-time/team-week/git-with-collaborators-workflow",title:"Git with Collaborators: Workflow",description:"When we work on a development project as a collaborator, we have commit privileges to the main repository on GitHub.  The development workflow for collaborators in a team takes advantage of some Git functionality that we don't often use on pair projects",source:"@site/docs/intermediate-javascript-part-time/9_team-week/git-with-collaborators-workflow.md",sourceDirName:"intermediate-javascript-part-time/9_team-week",slug:"/intermediate-javascript-part-time/team-week/git-with-collaborators-workflow",permalink:"/intermediate-javascript-part-time/team-week/git-with-collaborators-workflow",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Git with Collaborators: Workflow",id:"git-with-collaborators-workflow",slug:"git-with-collaborators-workflow",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/git_with_collaborators_workflow.md"},sidebar:"intermediate-javascript-part-time",previous:{title:"Git with Collaborators: Setup",permalink:"/intermediate-javascript-part-time/team-week/git-with-collaborators-setup"},next:{title:"Rewriting History with Git",permalink:"/intermediate-javascript-part-time/team-week/rewriting-history-with-git"}},c={},s=[{value:"Git Team Workflow",id:"git-team-workflow",level:2},{value:"1.  Setup Github Repo",id:"1--setup-github-repo",level:3},{value:"2.  Create Branches",id:"2--create-branches",level:3},{value:"3.  Code",id:"3--code",level:3},{value:"4.  Pull Origin Main into Local Main",id:"4--pull-origin-main-into-local-main",level:3},{value:"5. Resolve Conflicts (if necessary)",id:"5-resolve-conflicts-if-necessary",level:3},{value:"6.  Merge Local Feature into Local Main",id:"6--merge-local-feature-into-local-main",level:3},{value:"7.  Add Local Main Code to Origin Main",id:"7--add-local-main-code-to-origin-main",level:3},{value:"Pull Requests",id:"pull-requests",level:3},{value:"a.  Push Branch to Github",id:"a--push-branch-to-github",level:4},{value:"b.  Pull Request",id:"b--pull-request",level:4},{value:"c.  Review and Merge",id:"c--review-and-merge",level:4},{value:"Merge to Main",id:"merge-to-main",level:3},{value:"a.  Merge Feature into Main",id:"a--merge-feature-into-main",level:4},{value:"8.  Delete",id:"8--delete",level:3}],m={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When we work on a development project as a collaborator, we have commit privileges to the main repository on GitHub.  The development workflow for collaborators in a team takes advantage of some Git functionality that we don't often use on pair projects: ",(0,o.kt)("strong",{parentName:"p"},"Branching")," and ",(0,o.kt)("strong",{parentName:"p"},"merging"),".  Below is a ",(0,o.kt)("em",{parentName:"p"},"general")," outline of this workflow. Use this lesson as a reference when working on your group project this week:"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"git-team-workflow"},"Git Team Workflow"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"1--setup-github-repo"},"1.  Setup Github Repo"),(0,o.kt)("p",null,"Build a repo on Github and ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/lessons/git-with-collaborators-setup"},"add all team members as collaborators"),". Clone the GitHub main repo to each pair's desktop with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git clone <repo-url>"),". Navigate to the project with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd <project-directory-name>"),"."),(0,o.kt)("h3",{id:"2--create-branches"},"2.  Create Branches"),(0,o.kt)("p",null,"Each pair creates (and switches to) their own feature branch locally by running ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git checkout -b <branch-name>"),". Note that repos come with a main branch by default; you will not need to create one manually."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Tip: If you're ever uncertain which branch you're currently on, run ",(0,o.kt)("inlineCode",{parentName:"em"},"$ git branch"))),(0,o.kt)("h3",{id:"3--code"},"3.  Code"),(0,o.kt)("p",null,"Pairs complete work on their own branches, adding and committing throughout the process."),(0,o.kt)("h3",{id:"4--pull-origin-main-into-local-main"},"4.  Pull Origin Main into Local Main"),(0,o.kt)("p",null,"Before pushing work, pairs pull any new code teammates may have merged into the Github main branch (AKA ",(0,o.kt)("em",{parentName:"p"},"origin main")," or ",(0,o.kt)("em",{parentName:"p"},"remote main"),") into their local main branch.  "),(0,o.kt)("p",null,"This is done by navigating into local main  with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git checkout main"),", then running ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git pull origin main"),".  This pulls code from Github's main into the local main."),(0,o.kt)("p",null,"Generally speaking, this command triggers one of the following three results:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Example A -")," Pulling down no new changes"),".  There is no new content to pull into the local branch, it is already up-to-date."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git checkout main\nSwitched to branch 'main'\nYour branch is up-to-date with 'origin/main'.\n$ git pull origin main\nFrom https://github.com/test-user/my_project\n * branch            main     -> FETCH_HEAD\nAlready up-to-date.\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Example B -"),"  Pulling down new changes with no merge conflicts"),".  There was new content from the Github's main (also known as ",(0,o.kt)("em",{parentName:"p"},"origin main"),"), but Git was able to merge it into the branch automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git checkout main\nSwitched to branch 'main'\n$ git pull origin main\nremote: Counting objects: 3, done.\nremote: Compressing objects:' 100%%' (2/2), done.\nremote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0\nUnpacking objects:' 100%%' (3/3), done.\nFrom https://github.com/test-user/my_project\n * branch            main     -> FETCH_HEAD\n   2833d6c..51f2f03  main     -> origin/main\nUpdating 2833d6c..51f2d03\nFast-forward\n README.md | 1 +\n 1 file changed, 1 insertion(+)\n create mode 100644 README.md\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Example C -")," Pulling down new changes with merge conflicts"),".  There was new content from the Github's main, but Git was ",(0,o.kt)("em",{parentName:"p"},"not")," able to merge it into the branch automatically. The user will need to do so by hand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git checkout main\nSwitched to branch 'main'\n$ git pull origin main\nFrom https://github.com/test-user/my_project\n* branch            main     -> FETCH_HEAD\nAuto-merging index.html\nCONFLICT (content): Merge conflict in index.html\nAutomatic merge failed; fix conflicts and then commit the result.\n")),(0,o.kt)("h3",{id:"5-resolve-conflicts-if-necessary"},"5. Resolve Conflicts (if necessary)"),(0,o.kt)("p",null,"If conflicts occur (as seen in Example C above), conflict tags will appear in the impacted files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\n<<<<<<< HEAD\n   This is code from the local main branch!\n=======\n   This is code from the origin main branch!\n>>>>>>>\n....\n")),(0,o.kt)("p",null,"Content above the ",(0,o.kt)("inlineCode",{parentName:"p"},"=======")," refers to code from the branch you wish to update (in this case,  local main). Content below comes from the branch that is ",(0,o.kt)("em",{parentName:"p"},"not")," being updated  (in this case, Github's main). Resolve these conflicts by replacing everything between ",(0,o.kt)("inlineCode",{parentName:"p"},"<<<<<<<")," and ",(0,o.kt)("inlineCode",{parentName:"p"},">>>>>>>")," with the code you ultimately want in the project's 'final draft' or main. Then remove conflict tags, and commit the changes."),(0,o.kt)("h3",{id:"6--merge-local-feature-into-local-main"},"6.  Merge Local Feature into Local Main"),(0,o.kt)("p",null,"After gathering the most up-to-date code from main origin, ensure code in the local feature branch works correctly with code from the main branch by merging feature branch into local main."),(0,o.kt)("p",null,"Confirm you're still located in your local main branch by running ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git branch"),". Then, merge local feature into local main with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git merge <feature-branch-name>"),". If any merge conflicts occur, follow the steps above."),(0,o.kt)("h3",{id:"7--add-local-main-code-to-origin-main"},"7.  Add Local Main Code to Origin Main"),(0,o.kt)("p",null,"Pairs ensure the application still looks and functions correctly. Once everything is working as desired, the local version of the main branch can be added to origin main."),(0,o.kt)("p",null,"There are two primary ways to do this. If all of the collaborators for a project are not physically present to review code, then it is best practice to submit a Pull Request via GitHub so that each member has a chance to review the changes before any new code is added. If all collaborators are present and approve of the changes to the code, or if you are working solo, then it is acceptable to merge into main directly and push the updated main to Github."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If all collaborators are ",(0,o.kt)("strong",{parentName:"p"},"not")," present (most common):"),(0,o.kt)("h3",{id:"pull-requests"},"Pull Requests"),(0,o.kt)("h4",{id:"a--push-branch-to-github"},"a.  Push Branch to Github"),(0,o.kt)("p",null,"Feature code has been merged into local main branch successfully, and any subsequent refactoring committed. Push this to GitHub as the new feature branch by running ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git push origin <branch-name>"),"."),(0,o.kt)("h4",{id:"b--pull-request"},"b.  Pull Request"),(0,o.kt)("p",null,'A pull request is created by navigating to the feature branch on Github, selecting "New Pull Request" , clicking "Create Pull Request", and including a description of new features in the resulting form. Finally, "Create Pull Request" will create and send the request to project collaborators.  '),(0,o.kt)("h4",{id:"c--review-and-merge"},"c.  Review and Merge"),(0,o.kt)("p",null,"Repo owners and collaborators may then view this notification for more information, and options to merge the request into main.  More information on that is available ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/merging-a-pull-request/"},"here"),"."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If ",(0,o.kt)("strong",{parentName:"p"},"all")," collaborators are present, and have okay'd changes, or you are working solo:"),(0,o.kt)("h3",{id:"merge-to-main"},"Merge to Main"),(0,o.kt)("h4",{id:"a--merge-feature-into-main"},"a.  Merge Feature into Main"),(0,o.kt)("p",null,"Feature code has been merged into the local main branch successfully, and any subsequent refactoring committed. Contents of local main are then pushed directly into origin main by switching to main with",(0,o.kt)("inlineCode",{parentName:"p"},"$ git checkout main"),", and merging the appropriate feature branch into main with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ git merge <branch-name>"),"."),(0,o.kt)("p",null,"Again, the result should be very similar to one of the code snippets listed in Step 5. If examples A or B are received, there is either nothing new to merge or  new code was merged automatically. If something akin to example C is received, pairs must repeat Step 6 in order to resolve any merge conflicts."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"8--delete"},"8.  Delete"),(0,o.kt)("p",null,'If merging was successful, the feature branch may be deleted if it is no longer in use. The easiest way to do this is through the GitHub repo. Simply visit the repository, and select the "branches" option:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/git-with-collaborators-workflow/branch-option-in-github-repo.png",alt:"branches-option-in-github-repo"})),(0,o.kt)("p",null,'Then, in the "branches" area of your GitHub repository, select the red delete icon next to the branch your group would like to delete:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/git-with-collaborators-workflow/delete-branch-through-github.png",alt:"delete-option-in-github-repo"})))}u.isMDXComponent=!0}}]);