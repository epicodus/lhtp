"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[43188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={title:"Installing and Configuring MySQL",id:"installing_and_configuring_mysql",slug:"installing_and_configuring_mysql",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0e_installing_and_configuring_mysql.md"},i=void 0,o={unversionedId:"c_and_net_classic/getting-started-with-c/installing_and_configuring_mysql",id:"c_and_net_classic/getting-started-with-c/installing_and_configuring_mysql",title:"Installing and Configuring MySQL",description:"MySQL is a type of database software used to create, edit, query, and manage SQL data.",source:"@site/docs/c_and_net_classic/2_getting-started-with-c/0e_installing_and_configuring_mysql.md",sourceDirName:"c_and_net_classic/2_getting-started-with-c",slug:"/c_and_net_classic/getting-started-with-c/installing_and_configuring_mysql",permalink:"/c_and_net_classic/getting-started-with-c/installing_and_configuring_mysql",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Installing and Configuring MySQL",id:"installing_and_configuring_mysql",slug:"installing_and_configuring_mysql",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0e_installing_and_configuring_mysql.md"},sidebar:"c_and_net_classic",previous:{title:"Installing dotnet-script",permalink:"/c_and_net_classic/getting-started-with-c/installing_dotnet_script"},next:{title:"Documentation and Resources",permalink:"/c_and_net_classic/getting-started-with-c/documentation_and_resources"}},s={},u=[{value:"MacOS",id:"macos",level:2},{value:"MySQL Community Server",id:"mysql-community-server",level:3},{value:"Configure Your Shell&#39;s Environment Variables",id:"configure-your-shells-environment-variables",level:3},{value:"Confirm That MySQL Community Server Is Working",id:"confirm-that-mysql-community-server-is-working",level:3},{value:"MySQL Workbench",id:"mysql-workbench",level:3},{value:"Windows",id:"windows",level:2},{value:"MySQL Web Installer",id:"mysql-web-installer",level:3},{value:"Install the Programs",id:"install-the-programs",level:3},{value:"Configure Your System Environment Variables",id:"configure-your-system-environment-variables",level:3},{value:"Confirm That Both Programs Are Working",id:"confirm-that-both-programs-are-working",level:3}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MySQL")," is a type of database software used to create, edit, query, and manage SQL data."),(0,l.kt)("p",null,"Follow the installation instructions below. We're going to installing two programs: ",(0,l.kt)("strong",{parentName:"p"},"MySQL Community Server")," and ",(0,l.kt)("strong",{parentName:"p"},"MySQL Workbench"),"."),(0,l.kt)("h2",{id:"macos"},"MacOS"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mysql-community-server"},"MySQL Community Server"),(0,l.kt)("p",null,"Start by downloading the MySQL Community Server .",(0,l.kt)("inlineCode",{parentName:"p"},"dmg")," file from the MySQL Community Server page:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Students with High Sierra or Mojave should ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/file/?id=484914"},"use this link"),". Scroll down and click the ",(0,l.kt)("em",{parentName:"p"},"No thanks, just start my download")," link.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Students with Catalina, Big Sur, Monterey or a newer OS ",(0,l.kt)("strong",{parentName:"p"},"and an Intel chip")," should ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/file/?id=508095"},"use this link"),". Scroll down and click the ",(0,l.kt)("em",{parentName:"p"},"No thanks, just start my download")," link.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Students with Catalina, Big Sur, Monterey or a newer OS ",(0,l.kt)("strong",{parentName:"p"},"and an M1 chip")," should ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/file/?id=508094"},"use this link"),". Scroll down and click the ",(0,l.kt)("em",{parentName:"p"},"No thanks, just start my download")," link."))),(0,l.kt)("p",null,"Next, follow along with the ",(0,l.kt)("strong",{parentName:"p"},"Installer")," until you reach the ",(0,l.kt)("strong",{parentName:"p"},"Configuration")," page. Once you've reached ",(0,l.kt)("strong",{parentName:"p"},"Configuration"),", select or set the following options (use default if not specified):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use Legacy Password Encryption."),(0,l.kt)("li",{parentName:"ul"},"Set password to ",(0,l.kt)("inlineCode",{parentName:"li"},"epicodus"),". You can use your own password if you want but ",(0,l.kt)("inlineCode",{parentName:"li"},"epicodus")," will be assumed in the lessons."),(0,l.kt)("li",{parentName:"ul"},"Click Finish.")),(0,l.kt)("h3",{id:"configure-your-shells-environment-variables"},"Configure Your Shell's Environment Variables"),(0,l.kt)("p",null,"Next, configure your shell environment variables to know where to locate the MySQL Community Server. Open the command line and enter the following command:"),(0,l.kt)("p",null,"For bash users:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 'export PATH=\"/usr/local/mysql/bin:$PATH\"' >> ~/.bash_profile\n")),(0,l.kt)("p",null,"For zsh users:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 'export PATH=\"/usr/local/mysql/bin:$PATH\"' >> ~/.zshrc\n")),(0,l.kt)("h3",{id:"confirm-that-mysql-community-server-is-working"},"Confirm That MySQL Community Server Is Working"),(0,l.kt)("p",null,"Restart your shell (GitBash or Terminal) to apply the changes you've made to your shell's environment variables. Alternatively, you can refresh your shell by typing in the following command:"),(0,l.kt)("p",null,"For bash:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ source ~/.bash_profile\n")),(0,l.kt)("p",null,"For zsh:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ source ~/.zshrc\n")),(0,l.kt)("p",null,"Next, verify MySQL installation by opening terminal and entering this command: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mysql -uroot -pepicodus\n")),(0,l.kt)("p",null,"You'll know it's working and connected if you gain access and see the MySQL command line. There will be an intro message, and the command prompt should look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> \n")),(0,l.kt)("p",null,"If it's not working, you'll likely get a ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql: command not found")," error."),(0,l.kt)("p",null,"You can exit the mysql program by entering ",(0,l.kt)("inlineCode",{parentName:"p"},"exit"),"."),(0,l.kt)("h3",{id:"mysql-workbench"},"MySQL Workbench"),(0,l.kt)("p",null,"Next, download the MySQL Workbench ",(0,l.kt)("inlineCode",{parentName:"p"},".dmg")," file from the MySQL Workbench page:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Students with High Sierra or Mojave should ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/file/?id=484391"},"use this link"),". Scroll down and click the ",(0,l.kt)("em",{parentName:"p"},"No thanks, just start my download")," link.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Students with Catalina will need to do a few more steps, since there is no readily available download page for the Workbench version we need. Follow these steps:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Navigate to the workbench download archives by ",(0,l.kt)("a",{parentName:"li",href:"https://downloads.mysql.com/archives/workbench/"},"clicking this link"),'. There will be two drop-down menus, one for "Product Version" and the other for "Operating System".'),(0,l.kt)("li",{parentName:"ul"},'For "Product Version", select "8.0.23"'),(0,l.kt)("li",{parentName:"ul"},'For "Operating System", select "macOS". '),(0,l.kt)("li",{parentName:"ul"},'Next, click the blue "Download" button for the package called "macOS (x86, 64-bit), DMG Archive".'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Students with Big Sur, Monterey, or a newer OS should ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/file/?id=507344"},"use this link"),". Scroll down and click the ",(0,l.kt)("em",{parentName:"p"},"No thanks, just start my download")," link."))),(0,l.kt)("p",null,"Next, install ",(0,l.kt)("strong",{parentName:"p"},"MySQL Workbench")," to Applications folder. Open MySQL Workbench from within the Applications folder."),(0,l.kt)("p",null,"Once opened, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"Local instance 3306")," server. You will need to enter the password you set. (We used ",(0,l.kt)("inlineCode",{parentName:"p"},"epicodus"),".) If it connects, you're all set!"),(0,l.kt)("h2",{id:"windows"},"Windows"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"These instructions are for Windows 10 and 11."),(0,l.kt)("h3",{id:"mysql-web-installer"},"MySQL Web Installer"),(0,l.kt)("p",null,"Start by downloading the MySQL Web Installer from the ",(0,l.kt)("a",{parentName:"p",href:"https://downloads.mysql.com/archives/get/p/25/file/mysql-installer-web-community-8.0.19.0.msi"},"MySQL Downloads")," page. This will allow you to install both the MySQL Community Server and the MySQL Workbench."),(0,l.kt)("h3",{id:"install-the-programs"},"Install the Programs"),(0,l.kt)("p",null,"Follow along with the installer:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Click "Yes" if prompted to update.'),(0,l.kt)("li",{parentName:"ul"},"Accept license terms."),(0,l.kt)("li",{parentName:"ul"},"Choose Custom setup type."),(0,l.kt)("li",{parentName:"ul"},"When prompted to Select Products and Features, choose the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Check the box that says "Enable the Select Features page to customize product features".'),(0,l.kt)("li",{parentName:"ul"},"MySQL Server 8.0.19 ",(0,l.kt)("strong",{parentName:"li"},"or the newest listed version"),'. This will be under "MySQL Servers > MySQL Server > MySQL Server 8.0". '),(0,l.kt)("li",{parentName:"ul"},"MySQL Workbench 8.0.19 ",(0,l.kt)("strong",{parentName:"li"},"or the newest listed version"),'. This will be under "Applications > MySQL Workbench > MySQL Workbench 8.0".'))),(0,l.kt)("li",{parentName:"ul"},'Select "Next", then "Execute". Wait for download and installation. (This can take a few minutes.)'),(0,l.kt)("li",{parentName:"ul"},"Advance through Configuration as follows:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'High Availability set to "Standalone".'),(0,l.kt)("li",{parentName:"ul"},'"Defaults are OK" under Type and Networking.'),(0,l.kt)("li",{parentName:"ul"},"Authentication Method set to Use Legacy Authentication Method."),(0,l.kt)("li",{parentName:"ul"},"Set password to ",(0,l.kt)("inlineCode",{parentName:"li"},"epicodus"),". You can use your own if you want but ",(0,l.kt)("inlineCode",{parentName:"li"},"epicodus")," will be assumed in the lessons."),(0,l.kt)("li",{parentName:"ul"},'Defaults are OK under Windows Service. Make sure that checkboxes are checked for the options "Configure MySQL Server as a Windows Service" and "Start the MySQL Server at System Startup". Under Run Windows Service as..., the "Standard System Account" should be selected.'))),(0,l.kt)("li",{parentName:"ul"},"Complete Installation process.")),(0,l.kt)("h3",{id:"configure-your-system-environment-variables"},"Configure Your System Environment Variables"),(0,l.kt)("p",null,"Next we need to make our GitBash shell recognize the command ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql"),' (more on this below) to open and run the MySQL console. We\'ll do this by configuring our system environment variables for "Path" so that the ',(0,l.kt)("inlineCode",{parentName:"p"},"mysql")," command can be recognized in any shell (including PowerShell as well as GitBash)."),(0,l.kt)("p",null,"To do this, we must include MySQL in the ",(0,l.kt)("strong",{parentName:"p"},'System Environment "Path" Variable'),". This is its own multi-step process. The image below shows the buttons we click starting at step #2 below. If you find the image is hard to read, open it in a new tab."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the Control Panel: ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Select "System and Security", then select "System". '),(0,l.kt)("li",{parentName:"ul"},'Select the option "Change Settings" within the section titled "Computer name, domain, and workgroup settings", and a pop-up window for "System Properties" will display. ')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},'Within the "System Properties" pop-up window:')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Select the "Advanced" tab,'),(0,l.kt)("li",{parentName:"ul"},'Then select the "Environment Variables..." button (red circle in image below); this will open a new window called "Environment Variables".')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},'Within the "Environment Variables" window, find the section called "System variables" which will have a table listing variable names and their values. In the table, find and double click "Path" under the "variable" column (red square in image below); this will open a new window called "Edit environment variable", listing all environment variables for "Path". ',(0,l.kt)("strong",{parentName:"li"},"Note:")," you won't and shouldn't have all of the same information in your system \"Path\" variables as shown in the image below.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'From this window, click "New" (green circle) and add the exact location of your Postgres installation (green square), and click OK (orange circle) to save your changes. Exit out of all of the windows.'),(0,l.kt)("li",{parentName:"ul"},"This location is likely ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin"),", but may differ depending on your specific installation.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/mysql-setting-system-env-variables-RESIZED.png",alt:"This image shows steps 2 and 3, both the windows and buttons that should be clicked."})),(0,l.kt)("h3",{id:"confirm-that-both-programs-are-working"},"Confirm That Both Programs Are Working"),(0,l.kt)("p",null,"Next, verify the MySQL Community Server installation by opening ",(0,l.kt)("strong",{parentName:"p"},"Windows PowerShell")," and entering this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mysql -uroot -pepicodus\n")),(0,l.kt)("p",null,"You'll know it's working and connected if you gain access and see the MySQL command line. There will be an intro message, and the command prompt should look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> \n")),(0,l.kt)("p",null,"You can exit the mysql program by entering ",(0,l.kt)("inlineCode",{parentName:"p"},"exit"),"."),(0,l.kt)("p",null,"Finally, open MySQL Workbench and select the ",(0,l.kt)("inlineCode",{parentName:"p"},"Local instance 3306")," server. You will need to enter the password you set. (We used ",(0,l.kt)("inlineCode",{parentName:"p"},"epicodus"),".) If it connects, you're all set."))}p.isMDXComponent=!0}}]);