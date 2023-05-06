"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[4041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,d=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return n?o.createElement(d,r(r({ref:t},h),{},{components:n})):o.createElement(d,r({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var m=2;m<i;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));const i={title:"4. Introduction to the Command Line",id:"introduction_to_the_command_line",slug:"introduction_to_the_command_line",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro-2/blob/main/0_getting_started_with_intro_to_programming/0b_introduction_to_the_command_line.md"},r=void 0,l={unversionedId:"test_intro_2/getting_started_with_intro_to_programming/introduction_to_the_command_line",id:"test_intro_2/getting_started_with_intro_to_programming/introduction_to_the_command_line",title:"4. Introduction to the Command Line",description:"One of the first tools any new web developer must become comfortable with is something called the command line. No matter which language you program in, you'll use it constantly.",source:"@site/docs/test_intro_2/0_getting_started_with_intro_to_programming/0b_introduction_to_the_command_line.md",sourceDirName:"test_intro_2/0_getting_started_with_intro_to_programming",slug:"/test_intro_2/getting_started_with_intro_to_programming/introduction_to_the_command_line",permalink:"/lhtp/test_intro_2/getting_started_with_intro_to_programming/introduction_to_the_command_line",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Introduction to the Command Line",id:"introduction_to_the_command_line",slug:"introduction_to_the_command_line",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro-2/blob/main/0_getting_started_with_intro_to_programming/0b_introduction_to_the_command_line.md"},sidebar:"test_intro_2",previous:{title:"3. Text Editor: Visual Studio Code",permalink:"/lhtp/test_intro_2/getting_started_with_intro_to_programming/text_editor_visual_studio_code"},next:{title:"5. Interacting with the Command Line",permalink:"/lhtp/test_intro_2/getting_started_with_intro_to_programming/interacting_with_the_command_line"}},s={},m=[{value:"Graphical User Interface",id:"graphical-user-interface",level:2},{value:"The Terminal",id:"the-terminal",level:2},{value:"Shells",id:"shells",level:3},{value:"Mac \u2014 Accessing the Terminal",id:"mac--accessing-the-terminal",level:3},{value:"Windows \u2014 Accessing the Terminal",id:"windows--accessing-the-terminal",level:3},{value:"Installing Git Bash",id:"installing-git-bash",level:4},{value:"The Prompt",id:"the-prompt",level:3},{value:"Command Notation",id:"command-notation",level:3}],h={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the first tools any new web developer must become comfortable with is something called the ",(0,a.kt)("strong",{parentName:"p"},"command line"),". No matter which language you program in, you'll use it constantly."),(0,a.kt)("p",null,"This lesson will walk through what the command line is, what it looks like, and how to access it. In the lesson following this one we'll learn how to interact with the command line by executing commands. Let's get started!"),(0,a.kt)("h2",{id:"graphical-user-interface"},(0,a.kt)("a",{parentName:"h2",href:"#help-conserve-habitat-for-pollinators"},"Graphical User Interface")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We often access computer programs through their ",(0,a.kt)("strong",{parentName:"p"},"Graphical User Interface")," (or ",(0,a.kt)("strong",{parentName:"p"},"GUI"),", for short). This is simply the visual component of a computer program."),(0,a.kt)("p",null,"For instance, word processing software (Microsoft Word, Google Docs, etc.) generally offers a GUI with whitespace to type in, a cursor to indicate where we're typing, and a variety of buttons, menus, and options to format our text. This is a GUI. It's the visual portion of a program we see and interact with."),(0,a.kt)("p",null,"An email inbox that displays each email's subject line, allows us to open an email to see its contents by clicking on it, and offers buttons to reply and format text is another example of a GUI, or graphical user interface."),(0,a.kt)("h2",{id:"the-terminal"},(0,a.kt)("a",{parentName:"h2",href:"#the-terminal"},"The Terminal")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"However, when we are developing code we often use our computer's terminal interface. The ",(0,a.kt)("strong",{parentName:"p"},"terminal")," is an area of the computer that allows us to do things with text-based commands, like create or delete a new file, instead of by clicking options in a graphical user interface. These text-based commands are typed into something called a ",(0,a.kt)("strong",{parentName:"p"},"command line"),".  "),(0,a.kt)("p",null,"You have probably navigated through the folders and files on a computer using a GUI like ",(0,a.kt)("em",{parentName:"p"},"Finder")," on a Mac, or ",(0,a.kt)("em",{parentName:"p"},"File Explorer")," on Windows. In the next lesson we'll learn how to create, update, delete and navigate to folders and files using the text-based terminal instead. We'll also see how the terminal provides access to extra commands ",(0,a.kt)("em",{parentName:"p"},"not")," available through a GUI."),(0,a.kt)("p",null,"Essentially, all you need to know right now is that a graphical user interface (GUI) allows users to interact with a computer through menus, buttons, and other visual options on the screen. The terminal, on the other hand, allows us to interact with a computer by typing text commands directly into the command line, which is housed in an area of the computer called the terminal."),(0,a.kt)("h3",{id:"shells"},(0,a.kt)("a",{parentName:"h3",href:"#shells"},"Shells")),(0,a.kt)("p",null,"The terminal runs a shell. A ",(0,a.kt)("strong",{parentName:"p"},"shell")," is a command line interpreter, a program that interprets text commands to access the computer, like creating or deleting a file. Shells have a specific set of commands specific to them that we can learn to use. Sometimes, shells have their own computer programming language, too. Shells are one way for developers to customize their experience in the command line interface (CLI). The terms ",(0,a.kt)("em",{parentName:"p"},"terminal")," and ",(0,a.kt)("em",{parentName:"p"},"shell")," are often used interchangeably. However, the terminal is a wrapper program that runs a shell, a separate program, which both work together to allow us to enter text-based commands to access our computer."),(0,a.kt)("p",null,"At Epicodus, we'll be using shells based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/bash/manual/html_node/index.html"},"Bash"),". ",(0,a.kt)("strong",{parentName:"p"},"We're sharing this information for context only,")," because we will be configuring our shells to run certain software. You don't need to worry about memorizing this information, or perfectly understanding it to continue forward.  "),(0,a.kt)("p",null,"Next, let's walk through how to access your own terminal and the command line it contains, so you can see how it works and what it looks like first hand."),(0,a.kt)("h3",{id:"mac--accessing-the-terminal"},(0,a.kt)("a",{parentName:"h3",href:"#mac-accessing-the-terminal"},"Mac \u2014 Accessing the Terminal")),(0,a.kt)("p",null,"On a Mac, the terminal can be accessed by opening an application conveniently named ",(0,a.kt)("strong",{parentName:"p"},"Terminal"),". This application is located in the ",(0,a.kt)("em",{parentName:"p"},"Utilities")," folder within your ",(0,a.kt)("em",{parentName:"p"},"Applications")," folder. "),(0,a.kt)("p",null,"You may also locate the Terminal program by clicking the magnifying glass icon at the upper right corner of the screen and typing ",(0,a.kt)("em",{parentName:"p"},"Terminal"),"."),(0,a.kt)("p",null,"Open your own Terminal using either of these two methods now. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Depending on what year your Mac was made, it will run either a ",(0,a.kt)("em",{parentName:"strong"},"Bash")," or ",(0,a.kt)("em",{parentName:"strong"},"Zsh")," shell.")," Zsh is very similar to Bash \u2014 the main difference is that it has ",(0,a.kt)("em",{parentName:"p"},"extended"),' functionality beyond Bash. Both shells work great for our purposes, so use whatever shell your Mac computer is shipped with. You can tell which shell you have by looking for "zsh" or "bash" in the title of the terminal window. Alternatively, once you\'ve completed this lesson and the next one, and you\'ve learned how to enter commands into the terminal, you can enter this command to confirm which shell you are using:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo $SHELL\n")),(0,a.kt)("p",null,"It will return the file path to the location of the shell program you are using. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/zsh"),"."),(0,a.kt)("h3",{id:"windows--accessing-the-terminal"},(0,a.kt)("a",{parentName:"h3",href:"#windows-accessing-the-terminal"},"Windows \u2014 Accessing the Terminal")),(0,a.kt)("p",null,"Windows comes with a terminal program called Command Prompt. You can access it by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd")," in the search bar in the bottom left corner. It can be useful for navigating through files trees, running executables, and so on. Unfortunately, Command Prompt doesn't have all of the capabilities we require. "),(0,a.kt)("p",null,"Windows also comes with PowerShell, a more powerful version of Command Prompt. PowerShell can run many of the commands that we need, but not all of them."),(0,a.kt)("p",null,"While there are many options out there, the shell that we recommend that best fits our needs is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://gitforwindows.org/"},"Git Bash")),". "),(0,a.kt)("h4",{id:"installing-git-bash"},(0,a.kt)("a",{parentName:"h4",href:"#installing-gitbash"},"Installing Git Bash")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you have not already installed Visual Studio Code by following the instructions in the previous lesson, do so now!")," We need to install VS Code first so that we can configure Git Bash to use it during installation. "),(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://gitforwindows.org/"},"Git Bash homepage")," and click on the ",(0,a.kt)("em",{parentName:"p"},"Download")," button. This may start an automatic download or take you to a page with the latest version of Git Bash with download options. If you have to select between a 32-bit or 64-bit installation, you can determine whether you have 32-bit or 64-bit Windows by following these ",(0,a.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/help/13443/windows-which-version-am-i-running"},"instructions"),". Then, download the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"exe")," file from the Git for Windows site. (If you have a package manager already installed, you can also choose to download the ",(0,a.kt)("inlineCode",{parentName:"p"},"tar.bz2")," version.) "),(0,a.kt)("p",null,"Next, follow these installation instructions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the downloaded file and then follow the instructions in the Setup menu. "),(0,a.kt)("li",{parentName:"ul"},'For "Select Destination Location", accept the defaults and click ',(0,a.kt)("em",{parentName:"li"},"Next"),"."),(0,a.kt)("li",{parentName:"ul"},'The next page should be "Select Components". If not, click ',(0,a.kt)("em",{parentName:"li"},"Next"),' until you reach "Select Components". Select these options:',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you wish to add Git Bash to the desktop, click ",(0,a.kt)("em",{parentName:"li"},"Additional icons"),", which should automatically click ",(0,a.kt)("em",{parentName:"li"},"On the Desktop"),". (Click ",(0,a.kt)("em",{parentName:"li"},"On the Desktop")," if necessary.)"),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("em",{parentName:"li"},"Windows Explorer Integration")," with the option ",(0,a.kt)("em",{parentName:"li"},"Git Bash Here"),". This will allow you to right click on a file and have an option to open Git Bash at that file's location."))),(0,a.kt)("li",{parentName:"ul"},"You will be clicking ",(0,a.kt)("em",{parentName:"li"},"Next")," for most of the prompts. However, there are a few important prompts that we want to change. Pay attention to these:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'When prompted to determine a default editor in "Choosing the default editor used by Git", the default is Vim, which is hard for beginners to use. Update this to ',(0,a.kt)("em",{parentName:"li"},"Use Visual Studio Code as Git's default editor"),"."),(0,a.kt)("li",{parentName:"ul"},'When prompted about "Adjusting the name of the initial branch in new repositories", the default is ',(0,a.kt)("em",{parentName:"li"},"Let Git Decide"),'. Instead, select the option to override to use a "main" branch. This will initialize all new projects with a branch called "main", which you will learn more about soon.'),(0,a.kt)("li",{parentName:"ul"},'When prompted about "Configuring the line endings conversion", make sure the option to ',(0,a.kt)("em",{parentName:"li"},"Checkout as Windows-style, commit Unix-style endings"),". This will enable us to better work on and share projects between Windows, Mac, and Linux computers."),(0,a.kt)("li",{parentName:"ul"},'When prompted to "Choose a credential helper", it\'s important that ',(0,a.kt)("em",{parentName:"li"},"Git Credential Manager")," is enabled. The default installation should have ",(0,a.kt)("em",{parentName:"li"},"Git Credential Manager")," selected but make sure to verify. This will allow you to save your secure Git credentials on your machine when we start using Git."))),(0,a.kt)("li",{parentName:"ul"},"Finally, click through ",(0,a.kt)("em",{parentName:"li"},"Next")," until you reach the ",(0,a.kt)("em",{parentName:"li"},"Install")," button and install the package. ")),(0,a.kt)("p",null,"When you are finished installing, open Git Bash!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Take note:")," you can change all of the installation options that you've just selected (in following our instructions) by re-running the Git Bash installer. As you learn more about coding and working with different languages, software and other tooling, you may find that you want to reconfigure your Git Bash for an improved experience."),(0,a.kt)("h3",{id:"the-prompt"},(0,a.kt)("a",{parentName:"h3",href:"#the-prompt"},"The Prompt")),(0,a.kt)("p",null,"When you first open the terminal, you should see a short snippet of text followed by a grey or blinking rectangle. This rectangle is your cursor. Where the cursor is located is the command line. The command line is where we will type and execute our text commands."),(0,a.kt)("p",null,"The snippet of text left of the cursor is the command line ",(0,a.kt)("strong",{parentName:"p"},"prompt"),". It contains brief contextual information, such as the user account you're logged into the computer with, and your current location."),(0,a.kt)("p",null,"For instance, the prompts on Epicodus computers look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"epicodus-5:~ Guest$\n")),(0,a.kt)("p",null,"In the example above:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"epicodus-5")," is the nickname of the computer we're using.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"~")," denotes that our current location is the home directory. (In programming, the ",(0,a.kt)("inlineCode",{parentName:"p"},"~")," symbol usually refers to 'home'.)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Guest")," informs us we're logged into an account named ",(0,a.kt)("inlineCode",{parentName:"p"},"Guest"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This is all followed by a dollar sign ",(0,a.kt)("inlineCode",{parentName:"p"},"$"),". This symbol denotes the end of the prompt and the beginning of the command line.  "))),(0,a.kt)("p",null,"Not all prompts look the exact same \u2014 including prompts on Windows. Depending on the names of your machine and the name of your user account, your own command line prompt will differ. So don't worry if yours appears different from examples here. That's completely normal."),(0,a.kt)("p",null,"For example, if our computer's name was ",(0,a.kt)("em",{parentName:"p"},'"school-machine"'),", and our account on that computer was named ",(0,a.kt)("em",{parentName:"p"},'"Jenny"'),", we'd see something like this instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"school-machine:~ Jenny$\n")),(0,a.kt)("p",null,"Both Bash (on Macs) and Git Bash (on Windows) shells use the ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," symbol for the prompt. "),(0,a.kt)("h3",{id:"command-notation"},(0,a.kt)("a",{parentName:"h3",href:"#command-notation"},"Command Notation")),(0,a.kt)("p",null,"In our curriculum and elsewhere, you'll often see Bash commands preceded by a ",(0,a.kt)("inlineCode",{parentName:"p"},"$"),". This means the command is meant to be executed in the command line. The dollar sign is the common notation to communicate this because most terminals display a dollar sign ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," at the end of their prompt."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"When you see the ",(0,a.kt)("inlineCode",{parentName:"strong"},"$")," symbol preceding a command in one of our lessons, know that you are not required to ",(0,a.kt)("em",{parentName:"strong"},"literally type")," a dollar sign into the command line. You will only type the command listed ",(0,a.kt)("em",{parentName:"strong"},"after")," the dollar sign. The dollar sign simply denotes that the command is meant to be executed in the command line.")),(0,a.kt)("p",null,"Great! Now that we understand the basics of the terminal and command line, let's practice. In the next lesson, we'll learn about the most frequently-used commands, how and when to execute them, and what they allow us to do."))}c.isMDXComponent=!0}}]);