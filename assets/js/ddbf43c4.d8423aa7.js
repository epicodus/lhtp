"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[82474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(a),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const r={title:"Backend Course Preparation: Software Installation",id:"backend-course-preparation-software-installation",slug:"backend-course-preparation-software-installation",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/backend_course_software_installation.md"},s=void 0,i={unversionedId:"intermediate-javascript-part-time-evening/team-week/backend-course-preparation-software-installation",id:"intermediate-javascript-part-time-evening/team-week/backend-course-preparation-software-installation",title:"Backend Course Preparation: Software Installation",description:"It's time to prepare for the next course by installing all relevant software! Depending on what track you signed up for, you will install software for C#/.NET or Ruby/Rails.",source:"@site/docs/intermediate-javascript-part-time-evening/9_team-week/backend-course-software-installation.md",sourceDirName:"intermediate-javascript-part-time-evening/9_team-week",slug:"/intermediate-javascript-part-time-evening/team-week/backend-course-preparation-software-installation",permalink:"/intermediate-javascript-part-time-evening/team-week/backend-course-preparation-software-installation",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Backend Course Preparation: Software Installation",id:"backend-course-preparation-software-installation",slug:"backend-course-preparation-software-installation",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/backend_course_software_installation.md"},sidebar:"intermediate-javascript-part-time-evening",previous:{title:"Practicing the Git Workflow",permalink:"/intermediate-javascript-part-time-evening/team-week/practicing-the-git-workflow"},next:{title:"Journal #7",permalink:"/intermediate-javascript-part-time-evening/team-week/journal-7"}},l={},u=[{value:"Software Installation by Course",id:"software-installation-by-course",level:2},{value:"C#/.NET",id:"cnet",level:3},{value:"Ruby/Rails",id:"rubyrails",level:3},{value:"Installation Issues and Setup Assistance",id:"installation-issues-and-setup-assistance",level:2},{value:"Schedule and Expectations",id:"schedule-and-expectations",level:3},{value:"1. Before the course starts, every students installs all tools at home.",id:"1-before-the-course-starts-every-students-installs-all-tools-at-home",level:4},{value:"2. If any installation issue happens, troubleshoot them and take notes.",id:"2-if-any-installation-issue-happens-troubleshoot-them-and-take-notes",level:4},{value:"3. Follow your instructor&#39;s directions.",id:"3-follow-your-instructors-directions",level:4},{value:"4. Finish troubleshooting during the first class of the course.",id:"4-finish-troubleshooting-during-the-first-class-of-the-course",level:4}],c={toc:u},h="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It's time to prepare for the next course by installing all relevant software! Depending on what track you signed up for, you will install software for C#/.NET or Ruby/Rails. "),(0,o.kt)("p",null,"We have students install software during the weekend before team week for a couple of reasons. The first reason has to do with installation and configuration issues. It's normal to run into some issues when setting up your personal environment, and the way we deal with this is to work through the installation process early so that we can identify and address any issues sooner. "),(0,o.kt)("p",null,'The second reason is that you\'ll be ready to tackle the remaining pre-work for the next course when it comes time to complete it. Students are required complete pre-work for the next course before the first day of the course. Most students complete the pre-work during the weekend before the course starts, but you can start as early as you like. Take a moment to follow the link below to look at your upcoming course, and notice all of the sections that are labeled "pre-work": '),(0,o.kt)("p",null,"For full-time students:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/c-and-net"},"Full-time C# and .NET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/ruby-and-rails"},"Full-time Ruby and Rails"))),(0,o.kt)("p",null,"For part-time students:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/c-and-net-part-time"},"Part-time C# and.NET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/ruby-and-rails-part-time"},"Part-time Ruby and Rails"))),(0,o.kt)("h2",{id:"software-installation-by-course"},"Software Installation by Course"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Find the course you are signed up for below and install the necessary software."),(0,o.kt)("h3",{id:"cnet"},(0,o.kt)("a",{parentName:"h3",href:"#c-net"},"C#/.NET")),(0,o.kt)("p",null,"If you are in a track that includes the C# and .NET course, install the packages in the following lessons."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/c-and-net/getting-started-with-c/installing-c-and-net"},"Installing C# and .NET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/c-and-net/getting-started-with-c/installing-dotnet-script"},"Installing dotnet script")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/c-and-net/getting-started-with-c/installing-and-configuring-mysql"},"Installing and Configuring MySQL"))),(0,o.kt)("h3",{id:"rubyrails"},(0,o.kt)("a",{parentName:"h3",href:"#ruby-rails"},"Ruby/Rails")),(0,o.kt)("p",null,"If you are in a track that includes the Ruby and Rails course, install the packages in the following lessons."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/ruby-and-rails/getting-started-with-ruby/ruby-installation-and-setup"},"Ruby Installation and Setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/ruby-and-rails/getting-started-with-ruby/installing-ruby-on-mac"},"Installing Ruby on Mac")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/ruby-and-rails/getting-started-with-ruby/installing-ruby-on-windows"},"Installing Ruby on Windows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/ruby-and-rails/getting-started-with-ruby/installing-postgres"},"Installing Postgres"))),(0,o.kt)("h2",{id:"installation-issues-and-setup-assistance"},"Installation Issues and Setup Assistance"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Sometimes issues can arise in the installation process. Because setup issues naturally arise, students and teachers collaborate on solving setup issues together during an in-class troubleshooting session at the start of the backend course. Let's review the guidelines and expectations for that now. "),(0,o.kt)("h3",{id:"schedule-and-expectations"},"Schedule and Expectations"),(0,o.kt)("h4",{id:"1-before-the-course-starts-every-students-installs-all-tools-at-home"},"1. Before the course starts, every students installs all tools at home."),(0,o.kt)("p",null,"The first step is for you to take the time to install the necessary tools for the course at home. You start this process individually during the weekend before team week, and students often finish this process without help. If you run into any installation issues, that's ok. See #2 below."),(0,o.kt)("h4",{id:"2-if-any-installation-issue-happens-troubleshoot-them-and-take-notes"},"2. If any installation issue happens, troubleshoot them and take notes."),(0,o.kt)("p",null,"It's important to take notes and screen shots for any issues or error messages that comes up. You can then share these notes with your peers and teacher during the in-class troubleshooting session. It's also important to take the time to work through the issue yourself. Whatever you try in the troubleshooting process, take notes. The same goes for any helpful resources you find online. We recommend reading through terminal output and any error logs that come up in the installation process, as they can point what to look into that may be missing."),(0,o.kt)("h4",{id:"3-follow-your-instructors-directions"},"3. Follow your instructor's directions."),(0,o.kt)("p",null,'Your instructor may have further instructions for you as far as how or where they want you to take notes on any issues. Your instructor may also ask that you "check in" about how your installation process went on a spreadsheet or whiteboard so they can track issues and organize help. Whatever it is, make sure to follow your instructor\'s directions.'),(0,o.kt)("h4",{id:"4-finish-troubleshooting-during-the-first-class-of-the-course"},"4. Finish troubleshooting during the first class of the course."),(0,o.kt)("p",null,"For anyone who hasn't been able to resolve an installation issue, you will group up during the first class of the backend course and continue troubleshooting together. Your instructor will have more directions for you about grouping up, and they will be present and available during this time to also help troubleshoot installation issues. This troubleshooting session is focused on collaboration, so discuss your issues and share your notes with your peers. Situations happen where your classmate has solved a problem you are currently facing and has advice for you, and vice versa!"),(0,o.kt)("p",null,"As you work through your installations, keep in mind that it's common for environment issues to crop up and for them to take a while to resolve. This is why we begin the installation process over the weekend before team week and continue into the first class of the backend course. Make sure to do your part by troubleshooting any issues that come up, and by taking notes on what the issues are and what you did to try and fix them. "),(0,o.kt)("p",null,"If you have any questions or concerns, talk to your instructor about them as soon as you can."))}p.isMDXComponent=!0}}]);