"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[30780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"3. Installing node.js",id:"installing_nodejs",slug:"installing_nodejs",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2_setting-up-javascript/0c_installing_node_js.md"},r=void 0,l={unversionedId:"intermediate_javascript/setting-up-javascript/installing_nodejs",id:"intermediate_javascript/setting-up-javascript/installing_nodejs",title:"3. Installing node.js",description:"Before the first week of class, take time to ensure all necessary tools and frameworks are correctly installed on your personal machine, including those we will use later on in the course.",source:"@site/docs/intermediate_javascript/2_setting-up-javascript/0c_installing_node_js.md",sourceDirName:"intermediate_javascript/2_setting-up-javascript",slug:"/intermediate_javascript/setting-up-javascript/installing_nodejs",permalink:"/lhtp/intermediate_javascript/setting-up-javascript/installing_nodejs",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. Installing node.js",id:"installing_nodejs",slug:"installing_nodejs",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2_setting-up-javascript/0c_installing_node_js.md"},sidebar:"intermediate_javascript",previous:{title:"2. JS Documentation and Resources",permalink:"/lhtp/intermediate_javascript/setting-up-javascript/js_documentation_and_resources"},next:{title:"1. Object-Oriented JavaScript Objectives",permalink:"/lhtp/intermediate_javascript/object-oriented-javascript/object_oriented_javascript_objectives"}},s={},p=[{value:"OSX Installation Instructions",id:"osx-installation-instructions",level:2},{value:"Homebrew Installation",id:"homebrew-installation",level:3},{value:"Windows / Linux Installation Instructions",id:"windows--linux-installation-instructions",level:2},{value:"Working with Node",id:"working-with-node",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before the first week of class, take time to ensure all necessary tools and frameworks are correctly installed on your personal machine, including those we will use later on in the course."),(0,a.kt)("p",null,"The JavaScript course will require ",(0,a.kt)("inlineCode",{parentName:"p"},"Node.js"),". You are expected to install any tools you do not already have ",(0,a.kt)("em",{parentName:"p"},"before")," the course begins. Confirm each tool is functioning properly by following all instructions below."),(0,a.kt)("h2",{id:"osx-installation-instructions"},"OSX Installation Instructions"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"On OS X systems, install ",(0,a.kt)("inlineCode",{parentName:"p"},"Node.js")," through ",(0,a.kt)("inlineCode",{parentName:"p"},"Homebrew")," with the following command in your home directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ brew install node\n")),(0,a.kt)("p",null,"When installing ",(0,a.kt)("inlineCode",{parentName:"p"},"Node.js"),", node package manager will also be installed. Node package manager is called ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," for short. Confirm that ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," are in place by checking the versions of each. First, restart your terminal, then enter in the following commands: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ node -v\nv14.5.0\n$ npm -v\n6.14.5\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node")," should be 12.x or higher and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," should be 6.x or higher. If you are installing Node for the first time now, you will be at a higher version than what's listed in our examples."),(0,a.kt)("p",null,"If you have an older version of ",(0,a.kt)("inlineCode",{parentName:"p"},"Node")," already installed, upgrade through ",(0,a.kt)("inlineCode",{parentName:"p"},"Homebrew")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"$ brew upgrade node"),"."),(0,a.kt)("p",null,'Complete the "Working with Node" section below to confirm your installation is functioning correctly.'),(0,a.kt)("h3",{id:"homebrew-installation"},"Homebrew Installation"),(0,a.kt)("p",null,"If you do not have Homebrew installed yet, you may install it now by copy and pasting this command into the command line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("p",null,"This installs ",(0,a.kt)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew")," on your device, a package manager for OS X that makes it easy to install developer software."),(0,a.kt)("p",null,"Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:"),(0,a.kt)("p",null,"For bash users:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile\n")),(0,a.kt)("p",null,"For zsh users:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.zshrc\n")),(0,a.kt)("h2",{id:"windows--linux-installation-instructions"},"Windows / Linux Installation Instructions"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To install Node on other systems, go to the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node website"),", then download and install the appropriate installer for your operating system. Note that there are two versions available to download: the ",(0,a.kt)("em",{parentName:"p"},"LTS")," version and the ",(0,a.kt)("em",{parentName:"p"},"Current")," version. ",(0,a.kt)("em",{parentName:"p"},"LTS")," is short for long-term support. Either version is fine. Note that node package manager (",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),") will be installed along with ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),". Node package manager is called ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," for short."),(0,a.kt)("p",null,"If you are using Windows, choose the ",(0,a.kt)("em",{parentName:"p"},"Windows Installer")," option for downloading. Use the Setup Manager for installation, clicking ",(0,a.kt)("em",{parentName:"p"},"Next")," through each setup window. This includes clicking ",(0,a.kt)("em",{parentName:"p"},"Next")," on the custom setup window as all the options are already preselected (",(0,a.kt)("em",{parentName:"p"},"Node.js runtime"),", ",(0,a.kt)("em",{parentName:"p"},"npm package manager"),", ",(0,a.kt)("em",{parentName:"p"},"Online documentation shortcuts"),", and ",(0,a.kt)("em",{parentName:"p"},"Add to PATH"),"). When you reach the final setup window, click ",(0,a.kt)("em",{parentName:"p"},"Install"),"."),(0,a.kt)("p",null,"Confirm that ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," are in place by checking the versions of each. First, restart your terminal, then enter in the following commands: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ node -v\nv14.5.0\n$ npm -v\n6.14.5\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node")," should be version 12.x or higher and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," should be version 6.x or higher. Generally if you are choosing the most recent version of ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," (current or LTS), your version of ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," should be higher than what's listed in our examples."),(0,a.kt)("p",null,'After installation is complete, go through the "Working with Node" section below to confirm your installation is functioning correctly.'),(0,a.kt)("h2",{id:"working-with-node"},"Working with Node"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Confirm Node.js is functioning correctly by creating a small test project. ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," to your desktop and then input the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ echo \"console.log('Hello world');\" > hello.js\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"echo")," simply copies the string (the part inside double quotations), outputting it (",(0,a.kt)("inlineCode",{parentName:"p"},">"),") into the file we specify (",(0,a.kt)("inlineCode",{parentName:"p"},"hello.js"),"). You don't need to create ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.js")," ahead of time. ",(0,a.kt)("inlineCode",{parentName:"p"},"echo")," will take care of that for you."),(0,a.kt)("p",null,"Now let's run this file with Node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ node hello.js\n")),(0,a.kt)("p",null,'"Hello world" will be printed to the terminal. Once you are done, you can remove ',(0,a.kt)("inlineCode",{parentName:"p"},"hello.js")," from your desktop."),(0,a.kt)("p",null,"Node.js is a JavaScript runtime environment just like the browser. In fact, Node.js's underlying JavaScript engine is V8, which is the same engine used in Google Chrome. The major difference between Node and a browser like Chrome is that the browser provides the runtime environment in the browser, whereas Node provides it on the command line. They also have slightly different capabilities, with the browser providing tools like the DOM, and Node providing tools like file system access."),(0,a.kt)("p",null,"We won't be doing much with Node.js as a runtime environment, though. We will mainly use it as a package manager to install JavaScript libraries in our projects."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If you encounter any issues installing Node.js, there will be an opportunity to receive setup assistance from Epicodus staff. Ask your teacher in Scrum when setup assistance will be provided."))}u.isMDXComponent=!0}}]);