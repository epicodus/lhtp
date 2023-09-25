"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[71897],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24620:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"Installing dotnet-script",id:"installing_dotnet_script",slug:"installing_dotnet_script",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2_getting-started-with-c/0d_installing_dotnet_script.md"},i=void 0,o={unversionedId:"c_and_net_classic/getting-started-with-c/installing_dotnet_script",id:"c_and_net_classic/getting-started-with-c/installing_dotnet_script",title:"Installing dotnet-script",description:"Now that .NET 6 and C# are installed on our machines, we'll install dotnet-script.",source:"@site/docs/c_and_net_classic/2_getting-started-with-c/0d_installing_dotnet_script.md",sourceDirName:"c_and_net_classic/2_getting-started-with-c",slug:"/c_and_net_classic/getting-started-with-c/installing_dotnet_script",permalink:"/lhtp/c_and_net_classic/getting-started-with-c/installing_dotnet_script",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Installing dotnet-script",id:"installing_dotnet_script",slug:"installing_dotnet_script",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2_getting-started-with-c/0d_installing_dotnet_script.md"},sidebar:"c_and_net_classic",previous:{title:"Installing C# and .NET",permalink:"/lhtp/c_and_net_classic/getting-started-with-c/installing_c_and_net"},next:{title:"Installing and Configuring MySQL",permalink:"/lhtp/c_and_net_classic/getting-started-with-c/installing_and_configuring_mysql"}},s={},c=[{value:"dotnet-script",id:"dotnet-script",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Start the REPL",id:"start-the-repl",level:3}],p={toc:c},d="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that .NET 6 and C# are installed on our machines, we'll install ",(0,a.kt)("strong",{parentName:"p"},"dotnet-script"),"."),(0,a.kt)("h2",{id:"dotnet-script"},"dotnet-script"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"As mentioned in ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/getting-started-with-c/welcome-to-c"},"Welcome to C#"),", C# is a compiled language. In order to experiment with C#, we'll need a tool called a ",(0,a.kt)("strong",{parentName:"p"},"REPL"),", which stands for ",(0,a.kt)("strong",{parentName:"p"},"read-evaluate-print-loop"),". This allows us to run code a line at a time. This way we can practice, test, experiment, and have fun with C#."),(0,a.kt)("p",null,"We'll install and use a REPL called ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet-script"),". "),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"We can install ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet-script")," with the following terminal command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet tool install -g dotnet-script\n")),(0,a.kt)("p",null,"Note that .NET 6 needs to be installed for this command to work. If you just installed .NET 6, restart the terminal. Otherwise, you will not be able to run ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," commands."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Next, configure your bash or zsh environment variables to find the location of ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet-script"),". In the command line enter the following:"),(0,a.kt)("p",null,"For bash users:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 'export PATH=$PATH:~/.dotnet/tools' >> ~/.bash_profile\n")),(0,a.kt)("p",null,"For zsh users:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 'export PATH=$PATH:~/.dotnet/tools' >> ~/.zshrc\n")),(0,a.kt)("h3",{id:"start-the-repl"},"Start the REPL"),(0,a.kt)("p",null,"Now you can run the REPL! Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"$ dotnet-script")," in the command line and a prompt will open:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},">\n")),(0,a.kt)("p",null,"To try the REPL feature, enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'> string hello = "hello world";\n')),(0,a.kt)("p",null,"and then call the variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'> hello\n"hello world"\n')),(0,a.kt)("p",null,"To exit the REPL press ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + C "),"."))}u.isMDXComponent=!0}}]);