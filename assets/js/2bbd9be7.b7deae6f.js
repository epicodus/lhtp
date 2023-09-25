"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25386],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),d=a,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||r;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},62554:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const r={title:"Git and GitHub",id:"git_and_github",slug:"git_and_github",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/pre-work-full-stack/blob/main/4_getting-started-with-intro-to-programming/0e_git_and_github.md"},i=void 0,l={unversionedId:"prework/getting-started-with-intro-to-programming/git_and_github",id:"prework/getting-started-with-intro-to-programming/git_and_github",title:"Git and GitHub",description:"When we get started writing a new program, the last thing we want to happen is to lose any of our hard work. To prevent this from happening, we will save versions of our code on our computer AND also save a version of our code on a location on the web.",source:"@site/docs/prework/4_getting-started-with-intro-to-programming/0e_git_and_github.md",sourceDirName:"prework/4_getting-started-with-intro-to-programming",slug:"/prework/getting-started-with-intro-to-programming/git_and_github",permalink:"/lhtp/prework/getting-started-with-intro-to-programming/git_and_github",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Git and GitHub",id:"git_and_github",slug:"git_and_github",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/pre-work-full-stack/blob/main/4_getting-started-with-intro-to-programming/0e_git_and_github.md"},sidebar:"prework",previous:{title:"Practice: Command Line",permalink:"/lhtp/prework/getting-started-with-intro-to-programming/practice_command_line"},next:{title:"Git Configurations",permalink:"/lhtp/prework/getting-started-with-intro-to-programming/git_configurations"}},s={},u=[{value:"Git",id:"git",level:2},{value:"GitHub",id:"github",level:2},{value:"Installing Git on Macs",id:"installing-git-on-macs",level:2},{value:"Installing Homebrew: A Package Manager",id:"installing-homebrew-a-package-manager",level:3},{value:"Additional Context: Shell Configuration Files",id:"additional-context-shell-configuration-files",level:3},{value:"Installing Git",id:"installing-git",level:3},{value:"Installing Git on Windows",id:"installing-git-on-windows",level:2},{value:"Creating a GitHub Account",id:"creating-a-github-account",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When we get started writing a new program, the last thing we want to happen is to lose any of our hard work. To prevent this from happening, we will save versions of our code on our computer AND also save a version of our code on a location on the web."),(0,a.kt)("p",null,"Later when we work in teams, there will be more versions of our code as each team member copies the main version to work on, share, review and merge into our final program (and NOT overwrite each other's work!). At Epicodus, we will learn to manage these different versions of our code using two tools: ",(0,a.kt)("strong",{parentName:"p"},"Git")," and ",(0,a.kt)("strong",{parentName:"p"},"GitHub"),"."),(0,a.kt)("h2",{id:"git"},(0,a.kt)("a",{parentName:"h2",href:"#git"},"Git")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Git is a ",(0,a.kt)("strong",{parentName:"p"},"version control system")," that we install on the computers where we write code. Git allows us take a snapshot of our program, called a ",(0,a.kt)("strong",{parentName:"p"},"commit"),", at important points along the way as we work.  "),(0,a.kt)("p",null,"You can think of a commit like a save point on a document that you are writing.  Although unlike a save, once a commit is made, it is permanently stored in the history of the project. A newer commit does not overwrite the previous commit. If we ever want to go back to the place in time where the commit was made, where all the files looked exactly as they did when we committed, we will be able to do so.  "),(0,a.kt)("p",null,"Additionally, commits are made with brief messages that describe the changes/additions being saved. For instance, if we were creating a basic website, and added a contact page with our email and phone number, when we saved those changes by committing we would include a message like ",(0,a.kt)("em",{parentName:"p"},'"Add contact page with email and phone number."'),"  Commit messages are written in present tense (i.e.: ",(0,a.kt)("em",{parentName:"p"},'"Add contact page..."')," not ",(0,a.kt)("em",{parentName:"p"},'"Added contact page..."'),")."),(0,a.kt)("h2",{id:"github"},(0,a.kt)("a",{parentName:"h2",href:"#github"},"GitHub")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"When we are ready to save the code from our computers to a location on the web, we will use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub"),".  GitHub allows us to create ",(0,a.kt)("strong",{parentName:"p"},"repositories")," to store the code and code history for each of our projects. A repository is what we call the container that holds all of the files from our project with all of the commits that have been made to it. GitHub is designed to work seamlessly with Git."),(0,a.kt)("p",null,"Each project that we create will be saved to a repository on GitHub. By the end of your time here, you will have a portfolio of your work represented by all of your GitHub repositories. LinkedIn will be your employment resume and GitHub will serve as your coding resume."),(0,a.kt)("p",null,"Do note that all repositories on GitHub are public by default, although it's possible to create private repos as well. Private repos are ",(0,a.kt)("em",{parentName:"p"},"not")," required for this course. It's standard practice for most developers to simply leave everything public, even if projects are still a work in progress."),(0,a.kt)("p",null,"We'll walk through exactly how to use both Git and GitHub in an upcoming lesson. For now, simply remember that Git is the tool we'll use to save all changes and additions to our code on the computer we're working on. GitHub is the online location we can upload our Git-managed code to for safekeeping."),(0,a.kt)("h2",{id:"installing-git-on-macs"},(0,a.kt)("a",{parentName:"h2",href:"#installing-git-on-macs"},"Installing Git on Macs")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Epicodus Macs already have Git installed."),"  To install Git on your personal Mac, follow these steps:"),(0,a.kt)("h3",{id:"installing-homebrew-a-package-manager"},(0,a.kt)("a",{parentName:"h3",href:"#installing-homebrew-a-package-manager"},"Installing Homebrew: A Package Manager")),(0,a.kt)("p",null,"First, go to the terminal and copy and paste this code at the prompt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("p",null,"This installs the package manager, ",(0,a.kt)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew"),", on your device. It may take a moment for Homebrew to download and install. This is perfectly normal. Depending on your machine's configuration, you ",(0,a.kt)("em",{parentName:"p"},"may")," also be prompted to enter the password for your user account."),(0,a.kt)("p",null,"Next, we'll need to configure our shell to correctly work with Homebrew. Enter the following command in the command line prompt so that Homebrew packages are run before the system versions of the same packages (which may be dated or not what we want). Take note: only run the command that corresponds to the shell that you are using. "),(0,a.kt)("p",null,"If you are using Bash:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile\n")),(0,a.kt)("p",null,"If you are using Zsh:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.zshrc\n")),(0,a.kt)("h3",{id:"additional-context-shell-configuration-files"},(0,a.kt)("a",{parentName:"h3",href:"#additional-context-shell-configuration-files"},"Additional Context: Shell Configuration Files")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".bash_profile")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc")," are the files that hold the configurations for our terminal's shell. When we start up our terminal applications (Git Bash or Terminal), the shell configurations in those files are applied to the session. We'll be adding to these files throughout the program. This information is for context only, so if you don't understand completely right now, that's completely fine. "),(0,a.kt)("p",null,"You can find these files in ",(0,a.kt)("inlineCode",{parentName:"p"},"~"),", your computer's home. In your terminal, enter these commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ~\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls -a\n")),(0,a.kt)("p",null,"The command ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -a")," will print all files in a directory, including files that are hidden. Files prefixed with a period ",(0,a.kt)("inlineCode",{parentName:"p"},".")," are hidden files. You should see your shell configuration file listed. "),(0,a.kt)("p",null,"Optionally, you can open these files in VS Code to look at the contents by running this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ code ~/.bash_profile\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ code ~/.zshrc\n")),(0,a.kt)("p",null,"If you get an error about the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," not being recognized, this means that you need to configure your shell to recognize that keyword. Review the setup and instructions for VS Code ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/text-editor-visual-studio-code#configuring-the-code-command"},"in this lesson"),". If you are still having issues, ask an instructor for help. It's not necessary to be able to view and open your shell configuration files right now."),(0,a.kt)("h3",{id:"installing-git"},(0,a.kt)("a",{parentName:"h3",href:"#installing-git"},"Installing Git")),(0,a.kt)("p",null,"Last, install Git with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install git\n")),(0,a.kt)("p",null,"Done!"),(0,a.kt)("h2",{id:"installing-git-on-windows"},(0,a.kt)("a",{parentName:"h2",href:"#installing-git-on-windows"},"Installing Git on Windows")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"After installing Git Bash on your Windows machine, as instructed in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/introduction-to-the-command-line"},"Introduction to the Command Line")," lesson, Git should be ready to use within your Git Bash program.  "),(0,a.kt)("h2",{id:"creating-a-github-account"},(0,a.kt)("a",{parentName:"h2",href:"#creating-a-github-account"},"Creating a GitHub Account")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If you have not already created a personal GitHub account to store your code, head over to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub website")," and sign up for a free account now.  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/github-account/github-account-signup.png",alt:"GitHub account signup"})),(0,a.kt)("p",null,"When creating an account, consider choosing a username that you will feel comfortable sharing in a professional setting.  Also, keep in mind that all of the work that you will be adding to your GitHub account is viewable to the public.  Make a commitment to always present the best version of your code. Again, your GitHub profile will serve as your resume and portfolio of coding abilities."),(0,a.kt)("p",null,"Make sure you use a unique password \u2014 not one that you've used for any other accounts. You should never reuse a password \u2014 if it's stolen, your other accounts can be accessed. We also suggest you turn on two-factor authentication (2FA) for GitHub so that you need to enter a code from your phone as well as your password. This way, if your password is stolen, hackers still can't access your account without your phone. Finally, we will be using PATs (personal access tokens) to access GitHub repositories from the command line. You will be logging into GitHub from the command line with your user name and a PAT, not your password."))}h.isMDXComponent=!0}}]);