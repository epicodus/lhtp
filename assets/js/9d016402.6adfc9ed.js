"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9344],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:e},p),{},{components:n})):a.createElement(h,l({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9269:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Installing C# and .NET",id:"installing_c_and_net",slug:"installing_c_and_net",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0c_installing_c_and_net.md"},l=void 0,o={unversionedId:"c_and_net_part_time_evening/getting-started-with-c/installing_c_and_net",id:"c_and_net_part_time_evening/getting-started-with-c/installing_c_and_net",title:"Installing C# and .NET",description:"First we'll install .NET, which provides access to the C# language. Follow along with instructions for your operating system below.",source:"@site/docs/c_and_net_part_time_evening/2_getting-started-with-c/0c_installing_c_and_net.md",sourceDirName:"c_and_net_part_time_evening/2_getting-started-with-c",slug:"/c_and_net_part_time_evening/getting-started-with-c/installing_c_and_net",permalink:"/c_and_net_part_time_evening/getting-started-with-c/installing_c_and_net",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installing C# and .NET",id:"installing_c_and_net",slug:"installing_c_and_net",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0c_installing_c_and_net.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Welcome to C#",permalink:"/c_and_net_part_time_evening/getting-started-with-c/welcome_to_c"},next:{title:"Installing dotnet-script",permalink:"/c_and_net_part_time_evening/getting-started-with-c/installing_dotnet_script"}},s={},c=[{value:"Installing the .NET SDK",id:"installing-the-net-sdk",level:2}],p={toc:c},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"First we'll install .NET, which provides access to the C# language. Follow along with instructions for your operating system below."),(0,r.kt)("h2",{id:"installing-the-net-sdk"},"Installing the .NET SDK"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"C# and .NET programming are fully supported on Mac operating systems. We can install .NET and C# on Mac, Windows, or Linux in a few steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you use a Mac computer, you need to determine whether your computer was made with the Apple Chip or Intel Chip, because there is a different SDK to download for each chip. ",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT211814"},"Follow this Apple support article to learn whether your computer has an Apple chip or Intel chip."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Download the .NET 6 SDK (Software Development Kit)"),". To view all download options for the .NET 6 SDK, ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},"visit this page"),". Or, click on any of the following links for an immediate download from Microsoft:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-windows-x64-installer"},"For Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-macos-arm64-installer"},"For Macs with Apple Chip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-macos-x64-installer"},"For Macs with Intel Chip"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open the file.")," This will launch an installer which will walk you through installation steps. Use the default settings the installer suggests.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Confirm the installation is successful.")," First, restart your command line shell (Terminal or GitBash) if it's already open, and then run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"$ dotnet --version"),". You should see something like this in response:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"6.0.402\n")),(0,r.kt)("p",null,"This means both .NET and C# are successfully installed and your computer recognizes the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet")," command."),(0,r.kt)("p",null,"In the next two lessons, we'll install ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," and MySQL."))}u.isMDXComponent=!0}}]);