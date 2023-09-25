"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),h=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=h(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=h(n),d=a,u=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return n?o.createElement(u,i(i({ref:t},s),{},{components:n})):o.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var h=2;h<r;h++)i[h]=n[h];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var o=n(87462),a=(n(67294),n(3905));const r={title:"Practicing the Git Workflow",id:"practicing_the_git_workflow",slug:"practicing_the_git_workflow",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/practicing_git_workflow.md"},i=void 0,l={unversionedId:"c_and_net/team-week/practicing_the_git_workflow",id:"c_and_net/team-week/practicing_the_git_workflow",title:"Practicing the Git Workflow",description:"We've covered the basics of using a git workflow \u2014 now it's time to practice a little. We recommend going through this practice before you actually start working on your group project. This way, you'll be more equipped to use this workflow, and to deal with any issues that come up.",source:"@site/docs/c_and_net/12_team-week/practicing_git_workflow.md",sourceDirName:"c_and_net/12_team-week",slug:"/c_and_net/team-week/practicing_the_git_workflow",permalink:"/c_and_net/team-week/practicing_the_git_workflow",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Practicing the Git Workflow",id:"practicing_the_git_workflow",slug:"practicing_the_git_workflow",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/practicing_git_workflow.md"},sidebar:"c_and_net",previous:{title:"Learning More About Git",permalink:"/c_and_net/team-week/learning_more_about_git"},next:{title:"Pull Requests with Branches",permalink:"/c_and_net/team-week/pull_requests_with_branches"}},c={},h=[],s={toc:h},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We've covered the basics of using a git workflow \u2014 now it's time to practice a little. We recommend going through this practice ",(0,a.kt)("em",{parentName:"p"},"before")," you actually start working on your group project. This way, you'll be more equipped to use this workflow, and to deal with any issues that come up."),(0,a.kt)("p",null,"This will be an extremely simple exercise \u2014 we will just make some small modifications to a README. That's because the goal here isn't to code, but to practice the workflow itself and also deal with a merge conflict."),(0,a.kt)("p",null,"Start by creating a new directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow-practice"),". It will have just one file: ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),"."),(0,a.kt)("div",{class:"filename"},"README.md"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hello!\n")),(0,a.kt)("p",null,"Next, let's run the ",(0,a.kt)("inlineCode",{parentName:"p"},"git init")," command. Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"git-workflow")," repository in GitHub and then connect it to this project using ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote add origin git-workflow"),". This will be a repository we can throw away later \u2014 it's just for practice!"),(0,a.kt)("p",null,"Save the code in the README and make your first commit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ git add .\n$ git commit -m "add greeting"\n')),(0,a.kt)("p",null,"Once the code is committed, push it to GitHub."),(0,a.kt)("p",null,"Next, let's create a new ",(0,a.kt)("em",{parentName:"p"},"local")," branch called ",(0,a.kt)("inlineCode",{parentName:"p"},"development"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git checkout -b development\n")),(0,a.kt)("p",null,"This will create a new branch ",(0,a.kt)("em",{parentName:"p"},"locally")," (the ",(0,a.kt)("inlineCode",{parentName:"p"},"-b")," flag), and then ",(0,a.kt)("inlineCode",{parentName:"p"},"checkout")," will automatically take us to that branch."),(0,a.kt)("p",null,"It's common for large companies to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"development")," branch. This isn't the production branch \u2014 instead, the developers will merge code into this branch, test that it works, and so on \u2014 ",(0,a.kt)("em",{parentName:"p"},"before")," it gets merged into the main branch, which is usually the production code. In this example, we'll just have the development branch along with the main branch to keep things simple. But in real world applications, there'd be additional feature branches which would get merged into the development branch first, and then tested, all before they are ever merged into main."),(0,a.kt)("p",null,"It's always a good idea to verify the branch we are on with ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git branch"),". That way, we won't accidentally start modifying code in the wrong branch."),(0,a.kt)("p",null,"If we run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git log"),", we'll see that our first commit is in this branch as well. This is expected \u2014 when we create a new branch, it copies the code of the branch we are in along with its commit history. This is great for creating experimental features or for testing code."),(0,a.kt)("p",null,"Now let's modify our README:"),(0,a.kt)("div",{class:"filename"},"README.md"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hola!\n")),(0,a.kt)("p",null,"Save and commit this code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ git add .\n$ git commit -m "change greeting to Spanish"\n')),(0,a.kt)("p",null,"At this point, this branch has diverged from the main branch. Couldn't we just merge it into main?"),(0,a.kt)("p",null,"Well, if we are working on the project alone, that would probably be fine. But that's not how development teams work in the real world. Other teams are ",(0,a.kt)("em",{parentName:"p"},"also")," making changes to the code."),(0,a.kt)("p",null,"So let's simulate that process. We'll make another change to our code, this time ",(0,a.kt)("em",{parentName:"p"},"directly in GitHub"),". This represents a second team working on the same code as us. They finished their update first and they've already merged their code into the main branch and pushed it to GitHub."),(0,a.kt)("p",null,"We can imitate this process by going to the repository in GitHub and clicking on the pencil icon, which allows us to modify the code directly in GitHub's UI."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/click-pencil-icon.png",alt:"Click on the pencil icon to make an update to the code."})),(0,a.kt)("p",null,"Now let's change the greeting to French in GitHubs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Bonjour!\n")),(0,a.kt)("p",null,"Name the commit ",(0,a.kt)("inlineCode",{parentName:"p"},'"change greeting to French"'),"."),(0,a.kt)("p",null,"Now we are getting closer to a real world process."),(0,a.kt)("p",null,"We now have a remote main branch in GitHub which has two commits. We have a local main branch which has one commit. And we have a local development branch which has two commits. All three of these branches ",(0,a.kt)("em",{parentName:"p"},"have different greetings"),"."),(0,a.kt)("p",null,"So now let's say we want to merge our development branch into main and push that code to GitHub. How would we go about doing that?"),(0,a.kt)("p",null,"Well, we need to switch back to the main branch and pull the latest code from GitHub. Then we need to switch back to the development branch, merge the code from main, make sure it is good to go, and then switch back to main and merge the development branch into main before we push it to GitHub. We'll walk through this whole process more slowly in a moment."),(0,a.kt)("p",null,"Why this convoluted workflow?"),(0,a.kt)("p",null,"Well, we don't ever want to merge experimental code into main until we know it works. If we have any merge conflicts or other problems, we want them to happen in the development branch. Once everything is fixed and good to go, we'll be ready to merge the code into the main branch, but not before then."),(0,a.kt)("p",null,"So now let's slow this down. Here's what we need to do locally. We are currently on the development branch. We need to switch over to the main branch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git checkout main\n")),(0,a.kt)("p",null,"Next, we need to pull the latest code from GitHub:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git pull origin main\n")),(0,a.kt)("p",null,"Now the main branch is up to date with the code that the other development team has already merged into main. We ",(0,a.kt)("em",{parentName:"p"},"could")," merge our development branch into the main branch, but that could potentially lead to a big mess, especially if there are merge conflicts. That's not a good workflow. Instead, we need to play it safe and switch over to the development branch. Alternatively, if we're really worried about making a mistake and messing up code on either the main or development branch, we could create a safety branch called something like ",(0,a.kt)("inlineCode",{parentName:"p"},"savepoint"),". This is one of the techniques suggested in ",(0,a.kt)("a",{parentName:"p",href:"http://think-like-a-git.net/sections/testing-out-merges/the-savepoint-pattern.html"},"Think Like A Git"),". It's not necessary to do this but it does create an extra layer of security when you're new to merging branches."),(0,a.kt)("p",null,"Now let's go back to the development branch. We're ready to merge the code from main ",(0,a.kt)("em",{parentName:"p"},"into")," development. This is a really good time to verify that we are on the correct branch with ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git branch"),". If we are on the wrong branch, we could seriously mess up our code when we try to merge!"),(0,a.kt)("p",null,"Once we've verified that we are on the development branch, we can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git merge main\n")),(0,a.kt)("p",null,"This will merge the main branch ",(0,a.kt)("em",{parentName:"p"},"into")," the branch we are on \u2014 the development branch."),(0,a.kt)("p",null,"Before we move on to the next step, what do you think is going to happen?"),(0,a.kt)("p",null,"If you guessed that there will be a merge conflict, you're correct."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git merge main\nAuto-merging README.md\nCONFLICT (content): Merge conflict in README.md\nAutomatic merge failed; fix conflicts and then commit the result.\n")),(0,a.kt)("p",null,"There have been two recent changes made to the code \u2014 how is Git supposed to know whether the greeting should be hola or bonjour?"),(0,a.kt)("p",null,"When there is a merge conflict, a list with the file (or files) that have merge conflicts will be printed to the command line. We can see this above: ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFLICT (content): Merge conflict in README.md"),"."),(0,a.kt)("p",null,"Merge conflicts can be scary. Fortunately, VS Code makes managing conflicts much easier. If we navigate to the application in VS Code, we'll see the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/merge-conflict.png",alt:"Image shows the merge conflict in VS Code."})),(0,a.kt)("p",null,"VS Code has helpfully organized the code into two parts: the ",(0,a.kt)("em",{parentName:"p"},"Current Change"),", which is the code from the branch we are on, and the ",(0,a.kt)("em",{parentName:"p"},"Incoming Change"),", which is the code coming from the branch we are merging. It's easy to remember which is which by thinking of the branch we are merging as being the ",(0,a.kt)("em",{parentName:"p"},"incoming")," branch and the branch we are on as being the ",(0,a.kt)("em",{parentName:"p"},"current")," branch."),(0,a.kt)("p",null,"We have several choices here. If we click ",(0,a.kt)("em",{parentName:"p"},"Accept Current Change"),", the text will just be ",(0,a.kt)("inlineCode",{parentName:"p"},"Hola!")," If we click ",(0,a.kt)("em",{parentName:"p"},"Accept Incoming Change"),", the code will just be ",(0,a.kt)("inlineCode",{parentName:"p"},"Bonjour!")," And if we ",(0,a.kt)("em",{parentName:"p"},"Accept Both Changes"),", the code will read:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hola!\nBonjour!\n")),(0,a.kt)("p",null,"Alternatively, we can modify the code directly \u2014 but if we do so, we have to make sure we remove ",(0,a.kt)("inlineCode",{parentName:"p"},"=======")," and ",(0,a.kt)("inlineCode",{parentName:"p"},">>>>>>> main")," from our code in addition to making the changes. Git inserts these lines automatically to show where the code diverges in each branch."),(0,a.kt)("p",null,"Because we are collaborative and both teams have done great work, we are going to ",(0,a.kt)("em",{parentName:"p"},"Accept Both Changes"),". Note that your use cases will vary greatly depending on the situation \u2014 sometimes you'll want both changes, sometimes you'll want just one, and sometimes you'll want parts of both \u2014 which means you'll need to update some of the code manually before declaring the merge a success and committing it."),(0,a.kt)("p",null,"Next, we are ready to save and commit our code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ git add .\n$ git commit -m "update code to include both greetings"\n')),(0,a.kt)("p",null,"At this point, we've cleared up the merge conflict on the development branch, and we've made sure that the conflict posed no risk to the main branch. Once we've verified our code looks good (hopefully by testing it), it's ready to merge into main. Now we can switch over to the main branch and merge our code again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git checkout main\n$ git merge development\n")),(0,a.kt)("p",null,"As we'll see, the merge will go smoothly. That's because we've taken care of the merge conflict in the other branch!"),(0,a.kt)("p",null,"At this point, we can safely push our code to the main branch."),(0,a.kt)("p",null,"While this example is very simple, it should hopefully make the whole process of merging code a bit clearer. Ideally, when working with your group, you should be working on different parts of the code and create different features \u2014 which means you won't run into as many merge conflicts. Make sure you practice a good git workflow by following the steps above when merging and dealing with merge conflicts."),(0,a.kt)("p",null,"If you're still feeling a bit foggy on these concepts, go ahead and repeat the process \u2014 add a few more files and then make different changes directly on GitHub and then on your development branch. This will give you the chance to work through a few more simple merge conflicts before you run into one that is potentially bigger and more confusing during your group project."))}m.isMDXComponent=!0}}]);