"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[89795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"2. Configuring Application URLs to Run Two ASP.NET Core Applications",id:"configuring_application_urls_to_run_two_aspnet_core_applications",slug:"configuring_application_urls_to_run_two_aspnet_core_applications",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_building-an-api/1c_running_two_applications.md"},a=void 0,l={unversionedId:"c_and_net_classic/building-an-api/configuring_application_urls_to_run_two_aspnet_core_applications",id:"c_and_net_classic/building-an-api/configuring_application_urls_to_run_two_aspnet_core_applications",title:"2. Configuring Application URLs to Run Two ASP.NET Core Applications",description:"Over the next few days, we'll build an application that will make calls to the API we built in the first part of this section. In order to do this, we'll need to have two applications running simultaneously. However, if we try running two applications on the same port, we'll get the following error:",source:"@site/docs/c_and_net_classic/11_building-an-api/1c_running_two_applications.md",sourceDirName:"c_and_net_classic/11_building-an-api",slug:"/c_and_net_classic/building-an-api/configuring_application_urls_to_run_two_aspnet_core_applications",permalink:"/lhtp/c_and_net_classic/building-an-api/configuring_application_urls_to_run_two_aspnet_core_applications",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"2. Configuring Application URLs to Run Two ASP.NET Core Applications",id:"configuring_application_urls_to_run_two_aspnet_core_applications",slug:"configuring_application_urls_to_run_two_aspnet_core_applications",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_building-an-api/1c_running_two_applications.md"},sidebar:"c_and_net_classic",previous:{title:"1. Building an API - Part 1",permalink:"/lhtp/c_and_net_classic/building-an-api/building_an_api___part_1"},next:{title:"3. Journal #13 Discussion",permalink:"/lhtp/c_and_net_classic/building-an-api/journal_13_discussion"}},s={},p=[{value:"Changing Port Numbers in <code>Properties/launchSettings.json</code>",id:"changing-port-numbers-in-propertieslaunchsettingsjson",level:2},{value:"Configuring <code>WebHost.UseUrls()</code>",id:"configuring-webhostuseurls",level:2},{value:"Choose Your Preferred Port Numbers",id:"choose-your-preferred-port-numbers",level:2},{value:"The Ports We&#39;ll Use in the Cretaceous Park Example Projects",id:"the-ports-well-use-in-the-cretaceous-park-example-projects",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Over the next few days, we'll build an application that will make calls to the API we built in the first part of this section. In order to do this, we'll need to have two applications running simultaneously. However, if we try running two applications on the same port, we'll get the following error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Unhandled Exception: System.IO.IOException: Failed to bind to address https://127.0.0.1:5001: address already in use. ---\x3e Microsoft.AspNetCore.Connections.AddressInUseException: Address already in use ---\x3e System.Net.Sockets.SocketException: Address already in use\n")),(0,r.kt)("p",null,"Fortunately, this is easy to fix. We just need to specify a different port number for one of the applications we are running."),(0,r.kt)("p",null,"There are many ways to do this. We'll list two simple configurations here."),(0,r.kt)("h2",{id:"changing-port-numbers-in-propertieslaunchsettingsjson"},"Changing Port Numbers in ",(0,r.kt)("inlineCode",{parentName:"h2"},"Properties/launchSettings.json")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In our ASP.NET Core projects, we can add a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties/launchSettings.json")," with a number of configurations on how we want to run our projects: in what environment? What port number? Should a browser window be launched? Projects that are scaffolded with the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet new")," command come with these files. Here's a code snippet from a ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties/launchSettings.json")," file:"),(0,r.kt)("div",{class:"filename"},"Properties/launchSettings.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "project_name_here": {\n      "commandName": "Project",\n      "launchBrowser": true,\n      "applicationUrl": "https://localhost:5001;http://localhost:5000",\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    }\n')),(0,r.kt)("p",null,"Well, for our application to listen on a different port, we can simply update the ",(0,r.kt)("inlineCode",{parentName:"p"},'"applicationUrl"')," to specify different ports such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://localhost:5003;http://localhost:5004"'),". "),(0,r.kt)("h2",{id:"configuring-webhostuseurls"},"Configuring ",(0,r.kt)("inlineCode",{parentName:"h2"},"WebHost.UseUrls()")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Alternatively, we can update our ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," file to specify a port number via ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.hosting.hostingabstractionswebhostbuilderextensions.useurls?view=aspnetcore-6.0"},(0,r.kt)("inlineCode",{parentName:"a"},"builder.WebHost.UseUrls()")),":"),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\nWebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\nbuilder.WebHost.UseUrls("http://*:8080");    \n\n...\n')),(0,r.kt)("h2",{id:"choose-your-preferred-port-numbers"},"Choose Your Preferred Port Numbers"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You can pick whatever port numbers that you prefer. You may run into conflicts if you pick a port number that's already in use, like our MySQL server running on port 3306. If we try to use port 3306 and run our API, we'll get an error message similar to the following one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Unable to bind to http://localhost:3306 on the IPv6 loopback interface: 'An attempt was made to access a socket in a way forbidden by its access permissions.'.\n")),(0,r.kt)("h3",{id:"the-ports-well-use-in-the-cretaceous-park-example-projects"},"The Ports We'll Use in the Cretaceous Park Example Projects"),(0,r.kt)("p",null,"In the Cretaceous Park API example project, we'll assume the ports are ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:5001")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),". As noted in an earlier lesson, we'll use HTTP in development, so we'll make all requests to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),"."),(0,r.kt)("p",null,"For the Cretaceous Park Client (that we'll create in upcoming lessons), we'll assume the ports are ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:7277")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5187"),"."))}d.isMDXComponent=!0}}]);