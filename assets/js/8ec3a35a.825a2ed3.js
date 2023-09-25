"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25771],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(i),p=a,g=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return i?n.createElement(g,r(r({ref:t},c),{},{components:i})):n.createElement(g,r({ref:t},c))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var m=2;m<o;m++)r[m]=i[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},43263:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=i(87462),a=(i(67294),i(3905));const o={title:"Rewriting History with Git",id:"rewriting_history_with_git",slug:"rewriting_history_with_git",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/9_team-week/git_rewriting_history.md"},r=void 0,s={unversionedId:"intermediate_javascript_part_time_evening/team-week/rewriting_history_with_git",id:"intermediate_javascript_part_time_evening/team-week/rewriting_history_with_git",title:"Rewriting History with Git",description:"We always want to include clear and detailed messages with our commits. However, even the most careful developers can make mistakes. Thankfully, git offers several options to re-write commits.",source:"@site/docs/intermediate_javascript_part_time_evening/9_team-week/git_rewriting_history.md",sourceDirName:"intermediate_javascript_part_time_evening/9_team-week",slug:"/intermediate_javascript_part_time_evening/team-week/rewriting_history_with_git",permalink:"/lhtp/intermediate_javascript_part_time_evening/team-week/rewriting_history_with_git",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Rewriting History with Git",id:"rewriting_history_with_git",slug:"rewriting_history_with_git",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/9_team-week/git_rewriting_history.md"},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"Git with Collaborators: Workflow",permalink:"/lhtp/intermediate_javascript_part_time_evening/team-week/git_with_collaborators_workflow"},next:{title:"Learning More About Git",permalink:"/lhtp/intermediate_javascript_part_time_evening/team-week/learning_more_about_git"}},l={},m=[{value:"git log --oneline",id:"git-log---oneline",level:2},{value:"git commit --amend",id:"git-commit---amend",level:2},{value:"git rebase -i",id:"git-rebase--i",level:2},{value:"Changing old commit messages with git rebase -i",id:"changing-old-commit-messages-with-git-rebase--i",level:4},{value:"Combining Multiple Commits with git rebase -i",id:"combining-multiple-commits-with-git-rebase--i",level:4},{value:"Pushing Rewritten History to GitHub",id:"pushing-rewritten-history-to-github",level:2},{value:"Rebasing to Clean Merge",id:"rebasing-to-clean-merge",level:2}],c={toc:m},d="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We always want to include clear and detailed messages with our commits. However, even the most careful developers can make mistakes. Thankfully, git offers several options to re-write commits."),(0,a.kt)("p",null,"But first, note that we need to be very careful when modifying Git history. This is especially true if you are working collaboratively with others: If you modify an existing commit, it actually ",(0,a.kt)("em",{parentName:"p"},"removes")," the old commit from the project and makes a ",(0,a.kt)("em",{parentName:"p"},"new")," one in its place. If others are working on the same branch they will still have your old commits when they pull down any changes, and will be asked to merge your ",(0,a.kt)("em",{parentName:"p"},"rewritten")," commits with your ",(0,a.kt)("em",{parentName:"p"},"new")," commits. This can create a real mess. For that reason, ",(0,a.kt)("strong",{parentName:"p"},"you should not modify commit history on a branch others are also working on"),". "),(0,a.kt)("p",null,"However, in some circumstances it is necessary to modify your ",(0,a.kt)("strong",{parentName:"p"},"local")," commit history (that is, commits that exist locally on your machine, but have not been pushed to Github yet) before pushing your repository. In this lesson, we'll cover several ways to make changes to your Git commit history. "),(0,a.kt)("h2",{id:"git-log---oneline"},"git log --oneline"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We can see a project's commit history with the ",(0,a.kt)("inlineCode",{parentName:"p"},"git log")," command. And we can add the ",(0,a.kt)("inlineCode",{parentName:"p"},"--oneline")," flag to display the history in an easier to read format: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ git log --oneline\nd7e33de something css related\n32ccc0b do something with html\n9db82b6 update readme\n79e9de2 add readme\n827ad58 add initial files\n")),(0,a.kt)("p",null,"We can see that this project contains some poorly-worded commits. There are also two consecutive commits about the same feature. Let's clean up this Git commit history!"),(0,a.kt)("h2",{id:"git-commit---amend"},"git commit --amend"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"First we'll learn how to modify the ",(0,a.kt)("strong",{parentName:"p"},"most recent")," commit. Let's say we committed the right files, but we messed up the commit message. In this case we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit --amend")," to simply update the commit message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ git commit --amend -m "add styling to main page"\n')),(0,a.kt)("p",null,'This changes the commit message on the most recent commit from "something css related"  (as seen in the git log above) to "add styling to main page". Note that it also assigns that commit a new id, since it deleted the old commit and created a new one in its place. The Git history reflects the change:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ git log --oneline\n6ad9b62 add styling to main page\n32ccc0b do something with html\n9db82b6 update readme\n79e9de2 add readme\n827ad58 add initial files\n")),(0,a.kt)("p",null,"If we accidentally forgot to include a file in the previous commit, we could also use  ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit --amend")," to add a file to the previous commit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ git add index.html\n$ git commit --amend -m "add styling to main page"\n')),(0,a.kt)("h2",{id:"git-rebase--i"},"git rebase -i"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git commit --amend")," is an easy way to modify our most recent commit, but if we need to modify history going ",(0,a.kt)("em",{parentName:"p"},"further")," back then we'll need to use the powerful (but potentially dangerous!) ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase -i")," command. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git rebase -i"),' allows us to change commit messages and combine multiple commits by "squashing" them together. Be particularly careful with this command. It permanently deletes all commits from the point you\'re modifying onward, replacing them with new commits. '),(0,a.kt)("h4",{id:"changing-old-commit-messages-with-git-rebase--i"},"Changing old commit messages with git rebase -i"),(0,a.kt)("p",null,"Now, let's reword our second-to-last commit's message. If we type ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase -i HEAD~2")," it will launch the system editor, where we'll see a Git rebase file containing the two most recent commits. It will look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pick 32ccc0b do something with html\npick 6ad9b62 add styling to main page\n")),(0,a.kt)("p",null,"To reword some of the commit messages, we can change ",(0,a.kt)("inlineCode",{parentName:"p"},"pick")," before those lines to ",(0,a.kt)("inlineCode",{parentName:"p"},"reword"),", as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"reword 32ccc0b do something with html\npick 6ad9b62 add styling to main page\n")),(0,a.kt)("p",null,"When we save and close that file, we're immediately presented with a commit message file in the editor, allowing us to update the commit message we marked for rewording:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"do something with html\n\n# Please enter the commit message for your changes. Lines starting\n# with '#' will be ignored, and an empty message aborts the commit.\n#\n# Date:      Sat Mar 19 10:56:31 2016 -0700\n#\n# rebase in progress; onto 9db82b6\n# You are currently editing a commit while rebasing branch 'main' on '9db82b6'.\n#\n# Changes to be committed:\n#       modified:   index.html\n#\n")),(0,a.kt)("p",null,"Let's change the commit message at the top to ",(0,a.kt)("em",{parentName:"p"},"add welcome message to index.html"),". We save and close the file, and now the changes are reflected in the Git history:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ git log --oneline\n0e3e0bc add styling to main page\n1a940bb add welcome message to index.html\n9db82b6 update readme\n79e9de2 add readme\n827ad58 add initial files\n")),(0,a.kt)("p",null,"Note that the last two commits (the two we rebased) now have new id's, because the old commits were deleted and replaced with new ones."),(0,a.kt)("h4",{id:"combining-multiple-commits-with-git-rebase--i"},"Combining Multiple Commits with git rebase -i"),(0,a.kt)("p",null,'Now, let\'s say we want to combine multiple commits for one feature into a single commit before publishing to Github. We want to combine the "add readme" and "update readme" commits.  '),(0,a.kt)("p",null,"We can type ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase -i HEAD~4")," to bring up the four most recent commits in the rebase editor window. To combine a commit with the previous commit, we can change ",(0,a.kt)("inlineCode",{parentName:"p"},"pick")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"squash"),". "),(0,a.kt)("p",null,"Let's change ",(0,a.kt)("inlineCode",{parentName:"p"},"pick")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"squash"),' on the "update readme" commit in order to combine that one with the "add readme" commit directly preceding it: '),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pick 79e9de2 add readme\nsquash 9db82b6 update readme\npick 1a940bb add welcome message to index.html\npick 0e3e0bc add styling to main page\n")),(0,a.kt)("p",null,"After saving and closing this file, we're presented with a commit message file. We can write the commit message for the new ",(0,a.kt)("em",{parentName:"p"},"combined")," commit in this file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# This is a combination of 2 commits.\n# The first commit's message is:\n\nadd readme\n\n# This is the 2nd commit message:\n\nupdate readme\n\n")),(0,a.kt)("p",null,'We can update the first commit message to "create project readme" and simply delete the "update readme" line, since we\'re eliminating the second commit from our project:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# This is a combination of 2 commits.\n# The first commit's message is:\n\ncreate project readme\n\n# This is the 2nd commit message:\n\n")),(0,a.kt)("p",null,"After saving and closing that file, the Git history reflects the change:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ git history --oneline\n59e7083 add styling to main page\n2b1b367 add welcome message to index.html\n4c876ed create project readme\n827ad58 add initial files\n")),(0,a.kt)("h2",{id:"pushing-rewritten-history-to-github"},"Pushing Rewritten History to GitHub"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Again, be extremely careful when changing history on a public repository. Do not make history changes to a remote repository being worked on by other developers. However, you may push rewritten history to a public repository if you're the ",(0,a.kt)("em",{parentName:"p"},"only")," developer working on it. "),(0,a.kt)("p",null,"Normally you'll receive the following error if you push a project to Github, rewrite history, and then attempt to push the project again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ git push origin main\nTo https://github.com/epicodus-lessons/hello\n ! [rejected]        main -> main (non-fast-forward)\nerror: failed to push some refs to 'https://github.com/epicodus-lessons/hello'\nhint: Updates were rejected because the tip of your current branch is behind\nhint: its remote counterpart. Integrate the remote changes (e.g.\nhint: 'git pull ...') before pushing again.\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.\n")),(0,a.kt)("p",null,"This is simply because the local commits and remote commits no longer match. In order to force Github to throw away the old version of the project and replace it with the newly-edited local commit history, you must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git push origin main --force\n")),(0,a.kt)("h2",{id:"rebasing-to-clean-merge"},"Rebasing to Clean Merge"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase")," without the ",(0,a.kt)("inlineCode",{parentName:"p"},"-i"),' flag is often used for doing a "clean merge" of different branches. We won\'t cover this concept yet, simply know this option exists in case you encounter it in the future. '),(0,a.kt)("p",null,"Or, if you'd like to explore it now, you can find more information ",(0,a.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase"},"here"),"."))}h.isMDXComponent=!0}}]);