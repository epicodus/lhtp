"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[1911],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),m=n,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||i;return o?r.createElement(d,a(a({ref:t},u),{},{components:o})):r.createElement(d,a({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6679:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const i={title:"8. PRACTICE: GitHub Remote Repositories",id:"practice_github_remote_repositories",slug:"practice_github_remote_repositories",hide_table_of_contents:!0,sidebar_position:10,day:"monday",type:"exercise"},a=void 0,l={unversionedId:"git_html_and_css/practice_github_remote_repositories",id:"git_html_and_css/practice_github_remote_repositories",title:"8. PRACTICE: GitHub Remote Repositories",description:"The main version of our Hello World website is saved on the machines that we used to code the HTML file, hello-world.html.  It is also being tracked by Git in the local .git repository.  When we want to publish our code to the world (or just save it on the cloud so we can access it from any device), we want to store it in a remote repository.  In this lesson, we'll dive in to using GitHub to store our code remotely.",source:"@site/docs/1_git_html_and_css/1e_classwork_practice_github_remote_repositories.md",sourceDirName:"1_git_html_and_css",slug:"/git_html_and_css/practice_github_remote_repositories",permalink:"/lhtp/git_html_and_css/practice_github_remote_repositories",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"8. PRACTICE: GitHub Remote Repositories",id:"practice_github_remote_repositories",slug:"practice_github_remote_repositories",hide_table_of_contents:!0,sidebar_position:10,day:"monday",type:"exercise"},sidebar:"docs",previous:{title:"7. Git Best Practices",permalink:"/lhtp/git_html_and_css/git_best_practices"},next:{title:"9. PRACTICE: Command Line Git",permalink:"/lhtp/git_html_and_css/practice_command_line_git"}},s={},p=[{value:"Creating a GitHub repository",id:"creating-a-github-repository",level:2},{value:"Pushing to GitHub",id:"pushing-to-github",level:2},{value:"Cloning from GitHub",id:"cloning-from-github",level:2},{value:"Forking",id:"forking",level:2},{value:"Copying a Project",id:"copying-a-project",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The main version of our Hello World website is saved on the machines that we used to code the HTML file, ",(0,n.kt)("em",{parentName:"p"},"hello-world.html"),".  It is also being tracked by Git in the ",(0,n.kt)("strong",{parentName:"p"},"local")," ",(0,n.kt)("inlineCode",{parentName:"p"},".git")," repository.  When we want to publish our code to the world (or just save it on the cloud so we can access it from any device), we want to store it in a ",(0,n.kt)("strong",{parentName:"p"},"remote")," repository.  In this lesson, we'll dive in to using GitHub to store our code remotely."),(0,n.kt)("p",null,"First, let's talk about the difference between local and remote.  When we talk about a local repository, we mean one that is accessible only when using the device where it is saved. For example, the projects that you build on Epicodus machines have local ",(0,n.kt)("inlineCode",{parentName:"p"},".git")," repositories. If you want to see your code on another device, you will not be able to access it. A remote repository is one that is saved in a location outside of your device but still accessible by it. We will be saving our code remotely to repositories on GitHub.  "),(0,n.kt)("p",null,"Let's copy our local ",(0,n.kt)("inlineCode",{parentName:"p"},".git")," repository to a remote repository on GitHub now.  "),(0,n.kt)("h2",{id:"creating-a-github-repository"},"Creating a GitHub repository"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"First, we need to create the remote repository on GitHub.  Each pair partner creates a remote repository using their own GitHub account."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/new-repo-button.jpg",alt:"GitHub new repo button"})),(0,n.kt)("p",null,"Once logged in, we'll select the ",(0,n.kt)("em",{parentName:"p"},"New Repository")," or ",(0,n.kt)("em",{parentName:"p"},"New")," button to go to the ",(0,n.kt)("em",{parentName:"p"},"Create a new repository")," screen:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/cwtux2hnvka95px/create-new-repo.png?raw=1",alt:"GitHub new repository"})),(0,n.kt)("p",null,"Let's walk through the options we need to complete for our new repository."),(0,n.kt)("p",null,'First, we enter the repository name that matches the name of our project directory.  For this project, we\'ll enter "hello-world".  Though the description is optional, it can be helpful to our future selves and anyone else looking at our repository to see a quick description of its content.  '),(0,n.kt)("p",null,"You can have ",(0,n.kt)("em",{parentName:"p"},"public")," or ",(0,n.kt)("em",{parentName:"p"},"private")," repositories. A ",(0,n.kt)("em",{parentName:"p"},"public")," repository means that everyone can see the contents of the repository but as the owner of it, you will be the only person who can determine what code can be committed to it. A ",(0,n.kt)("em",{parentName:"p"},"private")," repository is one that only you can see.  We recommend that you set the repositories you create at Epicodus to ",(0,n.kt)("em",{parentName:"p"},"public")," so that you can show your journey as a developer through your code."),(0,n.kt)("p",null,"The last option asks whether or not to initialize the repository with a ",(0,n.kt)("strong",{parentName:"p"},"README"),".  A README file is a detailed description of the repository including information like authors, usage instructions and licensing.  ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"Do not check this box"),"."),"  We will be exploring what a README is and how we add it to our repositories in a future lesson."),(0,n.kt)("h2",{id:"pushing-to-github"},"Pushing to GitHub"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"With an empty repository awaiting our code, we can now follow the steps to ",(0,n.kt)("strong",{parentName:"p"},"push")," our code from our local repository to the remote repository."),(0,n.kt)("p",null,"In our project directory, we will make sure our code is working.  In this case, we open it in the browser and it looks good.  We also ensure that there aren't any outstanding changes that we still need to commit:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ git status\n")),(0,n.kt)("p",null,"Now we need to tell Git where our remote repository is by providing the web address.  We'll use the ",(0,n.kt)("inlineCode",{parentName:"p"},"git remote")," command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ git remote add al https://github.com/ada-lovelace/hello-world\n")),(0,n.kt)("p",null,"This command tells Git to store information about a remote repository that we gave the nickname,  ",(0,n.kt)("inlineCode",{parentName:"p"},"al")," (the initials for one partner \u2014 Ada Lovelace)  located at ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/epicodus-lessons/hello-world"},"https://github.com/epicodus-lessons/hello-world")),".  We could use any nickname for the remote but we've chosen ",(0,n.kt)("inlineCode",{parentName:"p"},"al")," for brevity and to be consistent with the initials we are using as pairs."),(0,n.kt)("p",null,"Note that ",(0,n.kt)("em",{parentName:"p"},"your")," command should contain the URL location for ",(0,n.kt)("em",{parentName:"p"},"your")," GitHub repo. Ours is ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/epicodus-lessons/hello-world")," in the example above, but yours will likely differ."),(0,n.kt)("p",null,"To see that Git has done this successfully, we can run this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ git remote -v\nal https://github.com/ada-lovelace/hello-world\n")),(0,n.kt)("p",null,"This shows us all the remotes stored in Git for this project.  In this case, we only have one, with the nickname ",(0,n.kt)("inlineCode",{parentName:"p"},"al"),"."),(0,n.kt)("p",null,"To push our code, which means we are copying it from the local to the remote, we run this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ git push al main\n")),(0,n.kt)("p",null,"This indicates that we should push code to the remote with the nickname ",(0,n.kt)("inlineCode",{parentName:"p"},"al")," from the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch. The ",(0,n.kt)("strong",{parentName:"p"},"main")," branch is now the default branch in git. The default branch used to be called the master branch in the past. However, GitHub has since updated the name due to the racist connotations of the term master when used in the programming industry. We strongly support this shift."),(0,n.kt)("p",null,"In the future, we'll see that we can have many copies of a repository on our local machines all in different stages of development. The ",(0,n.kt)("strong",{parentName:"p"},"main")," is always considered the main copy. Remember that the term master and main are technically interchangeable \u2014 but one doesn't have negative connotations while the other does."),(0,n.kt)("p",null,"For security reasons, only the owner of the remote GitHub repository is able to push code to it. This means that we need to enter our login information to confirm our ownership. That means we need to enter our username as well as a personal access token (PAT). To review the instructions on creating a PAT, see ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/creating-and-using-a-git-pat"},"Creating and Using a Git PAT"),". Once we've entered our credentials, our code is copied to the GitHub repository and we can see it online if we go to our GitHub repository URL ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/ada-lovelace/hello-world"},"https://github.com/ada-lovelace/hello-world")),". We can see the file structure and the commits in GUI form that we saw in our terminal. Note that the URL above is just an example that doesn't exist \u2014 your personal URL will be different."),(0,n.kt)("h2",{id:"cloning-from-github"},"Cloning from GitHub"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"So, how do we get our code back to our local from the remote? What if we push our code up to GitHub at Epicodus and want to work on it at home on our personal devices? To do this, we'll need to ",(0,n.kt)("strong",{parentName:"p"},"clone")," our GitHub repository on our local machines.  "),(0,n.kt)("p",null,"To practice this, let's delete our ",(0,n.kt)("inlineCode",{parentName:"p"},"hello-world")," project directory and clone it again from GitHub.  To delete a whole directory, we can't be in it so we'll go up a directory level and then remove it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ..\n$ rm -rf hello-world\n")),(0,n.kt)("p",null,"Poof!  Gone.  Now, if we want to copy it in the exact same location from GitHub, we get the URL for the remote repository and run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/ada-lovelace/hello-world\n")),(0,n.kt)("p",null,"As long as it's a public repository (and it probably will be), you won't need to enter your credentials. If it's a private repository, you will need to enter your credentials (if they aren't saved in a credential manager yet)."),(0,n.kt)("p",null,"Now an ",(0,n.kt)("inlineCode",{parentName:"p"},"ls")," shows us our directory is there with our code file in it.  Let's go into the project directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd hello-world\n")),(0,n.kt)("p",null,"If we do a ",(0,n.kt)("inlineCode",{parentName:"p"},"git log"),", we see that our commit history arrived with our directory and code.  "),(0,n.kt)("p",null,"If we run ",(0,n.kt)("inlineCode",{parentName:"p"},"git remote"),", we also see that our newly created local ",(0,n.kt)("inlineCode",{parentName:"p"},".git")," repository is automatically linked \u2014 with the nickname ",(0,n.kt)("strong",{parentName:"p"},"origin")," \u2014 to the remote repository from which we cloned."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ git remote\norigin\n")),(0,n.kt)("p",null,"If we make changes to the code and want to push again, we would be able to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"origin")," nickname that came with the repository from GitHub (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"git push origin main"),")."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'Note: only one location can be designated with the nickname "origin".  So, if we clone one project but want to push to two different repositories, they cannot both be nicknamed "origin".  That is another good reason to use your initials as the nickname of the remote repository.')),(0,n.kt)("p",null,"Whew!  This has been a mountain of Git concepts and terminology to explore.  Don't try and memorize this information.  Use the cheat sheets for reference to walk through set up and usage in your projects to come.  Before you know it, it'll become ingrained in your daily workflow.  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Be sure that you are not cloning a project inside of an existing local repository. In other words, you should ",(0,n.kt)("em",{parentName:"strong"},"not")," be inside of a project directory when you run the ",(0,n.kt)("inlineCode",{parentName:"strong"},"git clone")," command. Otherwise you'll end up with one git repository inside of another.")),(0,n.kt)("h2",{id:"forking"},"Forking"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"If you're working with a pair (and at Epicodus, you usually are), you might get a little jealous with all your co-authored code showing up on your pair's Github account. Don't worry, you can add the project to your account by ",(0,n.kt)("em",{parentName:"p"},"forking")," the repository."),(0,n.kt)("p",null,"When you're done working on a project with your pair and you've made your last push to your pair's account, visit the repository on Github (eg ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/your-pairs-name/hello-world"},"https://github.com/your-pairs-name/hello-world"),"). In the upper right corner, click Fork. The image below shows what the Fork button should look like."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/git-fork/forking_on_github.png",alt:"The 'Fork' button on GitHub."})),(0,n.kt)("p",null,"After GitHub does it's magic, you'll have a copy of the repo in your account."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Take note!")," If one of you makes a new commit and pushes it to your account, the change won't be reflected in the other one's account. You'll learn later how to keep your forked repositories in sync."),(0,n.kt)("h2",{id:"copying-a-project"},"Copying a Project"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Alternatively, if you want to have the project show up in your account as a repository and not as a fork, you can clone the project from your pair's account and then push it to your account. You'll need to remove the remote and add your own remote to do this. Here are the steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the account of the person that currently has the repository for the project. Clone the project to your desktop."),(0,n.kt)("li",{parentName:"ol"},'Create a new project in your Github account. Then click the green "Clone or download" button and copy the link provided.'),(0,n.kt)("li",{parentName:"ol"},"Go to the top level of the project directory of the project you cloned (from your pair's repository) in the terminal."),(0,n.kt)("li",{parentName:"ol"},"Check the remote repository with the command ",(0,n.kt)("inlineCode",{parentName:"li"},"git remote -v"),". You'll see something similar to the following code. The first word is the identifier for the remote repo, and the URL for the remote repo follows the identifier. In the following example, the identifier is ",(0,n.kt)("inlineCode",{parentName:"li"},"origin"),", but it might be the owner's initials or something else.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"origin  https://github.com/OWNER/REPOSITORY.git (fetch)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"origin  https://github.com/OWNER/REPOSITORY.git (push)"))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"To remove a remote repo, enter the command ",(0,n.kt)("inlineCode",{parentName:"li"},"git remote rm <identifier>")," where ",(0,n.kt)("inlineCode",{parentName:"li"},"<identifier>")," is the remote's identifier. ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the identifier is ",(0,n.kt)("inlineCode",{parentName:"li"},"origin"),", then the command will be ",(0,n.kt)("inlineCode",{parentName:"li"},"git remote rm origin"),". "),(0,n.kt)("li",{parentName:"ul"},"If the identifier is ",(0,n.kt)("inlineCode",{parentName:"li"},"fpk"),", you'd do ",(0,n.kt)("inlineCode",{parentName:"li"},"git remote rm fpk"),". "),(0,n.kt)("li",{parentName:"ul"},"Note that ",(0,n.kt)("inlineCode",{parentName:"li"},"rm"),' is a Git command for "remove".')),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Confirm that the remote has been removed by entering ",(0,n.kt)("inlineCode",{parentName:"li"},"git remote -v")," again. Nothing should show up. That means the remote has been removed. If it hasn't been removed correctly, return to step 4."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("inlineCode",{parentName:"li"},"git remote add origin [your-project-url-here]"),". You can use an identifier other than ",(0,n.kt)("inlineCode",{parentName:"li"},"origin"),". Make sure that you put in the project URL that you copied from the repository you created in ",(0,n.kt)("em",{parentName:"li"},"your")," account here."),(0,n.kt)("li",{parentName:"ol"},"You can confirm that the new remote is correctly linked with ",(0,n.kt)("inlineCode",{parentName:"li"},"git remote -v"),"."),(0,n.kt)("li",{parentName:"ol"},"Once the remote is correctly linked to the repository in your account, you can push the code to your repository.")),(0,n.kt)("p",null,"In order for your contributions to show up in Github (you'll learn more about Github contributions soon), you'll need to add any repositories where you have contributions to your account. Either forking or copying the project to your account will ensure that the project shows up in your Github contributions. They'll also be easily available for you to use and for others to see in your account. This is also helpful if you need access to a repository later \u2014 either because you want to work on it further or if you want to use it as a learning reference. If the original repository is deleted by your pair, you won't lose access as well."),(0,n.kt)("p",null,"Make sure you always fork or copy over projects you work on at the end of the day."))}h.isMDXComponent=!0}}]);