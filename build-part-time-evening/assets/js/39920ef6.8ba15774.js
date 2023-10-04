"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[57450],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=h(a),u=r,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var h=2;h<o;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=a(7896),r=(a(2784),a(30876));const o={title:"The CAP Theorem and BASE",id:"the-cap-theorem-and-base",slug:"the-cap-theorem-and-base",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0h_cap_theorem_old.md"},s=void 0,i={unversionedId:"react/react-with-nosql/the-cap-theorem-and-base",id:"react/react-with-nosql/the-cap-theorem-and-base",title:"The CAP Theorem and BASE",description:"In this lesson, we will discuss the CAP theorem, a key concept developed by the computer scientist Eric Brewer that governs why and how NoSQL databases are scalable and good for big data. We'll also touch on Eric Brewer's acronym BASE, which describes how NoSQL databases achieve the requirements of the CAP theorem when distributed across multiple locations.",source:"@site/docs/react/8_react-with-nosql/0h-cap-theorem-old.md",sourceDirName:"react/8_react-with-nosql",slug:"/react/react-with-nosql/the-cap-theorem-and-base",permalink:"/react/react-with-nosql/the-cap-theorem-and-base",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"The CAP Theorem and BASE",id:"the-cap-theorem-and-base",slug:"the-cap-theorem-and-base",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0h_cap_theorem_old.md"},sidebar:"react",previous:{title:"Introduction to NoSQL",permalink:"/react/react-with-nosql/introduction-to-nosql"},next:{title:"Setting up a Firebase Project, Firestore Database, and Web App",permalink:"/react/react-with-nosql/setting-up-a-firebase-project-firestore-database-and-web-app"}},l={},h=[{value:"The CAP Theorem",id:"the-cap-theorem",level:2},{value:"BASE",id:"base",level:2}],c={toc:h},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we will discuss the CAP theorem, a key concept developed by the computer scientist Eric Brewer that governs why and how NoSQL databases are scalable and good for big data. We'll also touch on Eric Brewer's acronym BASE, which describes how NoSQL databases achieve the requirements of the CAP theorem when distributed across multiple locations."),(0,r.kt)("p",null,"These are in contrast to the ACID theorem, which generally explains how SQL databases behave. We discussed the ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/ruby-and-rails/ruby-database-basics/acid-databases"},"ACID theorem")," in Ruby/Rails and C#/.NET, but if you need a refresher or didn't go through those courses, we recommend taking a look."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," You are not required to memorize this information or perfectly understand it. The goal is to give you a better idea of some of the tradeoffs in a distributed NoSQL system. "),(0,r.kt)("h2",{id:"the-cap-theorem"},"The CAP Theorem"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"While the ACID theorem includes four principles that a SQL database ",(0,r.kt)("strong",{parentName:"p"},"must")," follow, the CAP theorem is different. The CAP theorem argues that a database system can use ",(0,r.kt)("strong",{parentName:"p"},"at most")," two of its three principles. Let's look at those three principles and then explore why there needs to be a compromise."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Consistency"),": All users have access to the same data in the system at the same time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Availability"),": The data is always available for users.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Partition Tolerance"),": The system works across a distributed network (such as multiple servers)."))),(0,r.kt)("p",null,'One of the reasons that NoSQL is often better for big data is the fact that it is designed to be distributed across multiple locations. (On the other hand, SQL has traditionally been designed to work on just one node.) For instance, a big company might have database servers all over the world. If one of these databases goes down, there are always others to pick up the slack. This distribution is a huge advantage of NoSQL databases. This is the "P" in "CAP": ',(0,r.kt)("strong",{parentName:"p"},"partition tolerance"),"."),(0,r.kt)("p",null,"Because SQL databases have one node and NoSQL databases can have many, it is said that SQL databases ",(0,r.kt)("strong",{parentName:"p"},"scale vertically")," (on one server) while NoSQL databases ",(0,r.kt)("strong",{parentName:"p"},"scale horizontally")," across many servers."),(0,r.kt)("p",null,"However, if we have partition tolerance, we can't have both consistency and availability. We'll demonstrate why with an example."),(0,r.kt)("p",null,"Let's say you work for a company that has database servers in Beijing, New York, and London. A user in Shanghai makes an update to their account. That information is now going to be sent to a database. But which one? Even if it's sent to every single server, it will probably reach the server in Beijing first. If the database in Beijing updates immediately, it will no longer be ",(0,r.kt)("strong",{parentName:"p"},"consistent")," with the databases in New York and London, which don't have that update yet. On the other hand, if the server in Beijing waits for the other servers so they can all be updated simultaneously, the data will be consistent but we will be compromising ",(0,r.kt)("strong",{parentName:"p"},"availability")," \u2014 we are delaying the update to the Beijing server. It may not seem like a big deal with one update near Beijing, but a large company like Facebook or Google could be handling thousands of updates per second all over the world."),(0,r.kt)("p",null,"Since having a strong distributed system (partition tolerance) is a huge advantage of many NoSQL options, either consistency or availability are compromised. This doesn't even account for occasional network failures, which are inevitable. However, large companies will introduce redundancy \u2014 databases and servers that have overlapping functionality \u2014 so that if a server or database goes down then others can pick up the slack. Those network failures will result in further compromises to consistency or availability."),(0,r.kt)("p",null,"Most distributed systems want data to be available all of the time, which leads to a tradeoff in consistency. The goal, then, is what is called ",(0,r.kt)("strong",{parentName:"p"},"eventual consistency"),". This means that when the update to the database server happens in Beijing, the databases won't be consistent across all servers yet \u2014 but they will be consistent eventually."),(0,r.kt)("p",null,"This is in contrast to ",(0,r.kt)("strong",{parentName:"p"},"strong consistency"),", which means that everything has to be consistent everywhere at the same time (compromising either availability or partition tolerance). Strong consistency is a tenet of SQL databases. Technically, it's possible to create SQL databases across a distributed system. However, it's not very common yet."),(0,r.kt)("h2",{id:"base"},"BASE"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"There's another acronym called ",(0,r.kt)("strong",{parentName:"p"},"BASE"),', also developed by Eric Brewer, which describes how NoSQL databases achieve consistency. BASE states that a system should be "basically available, have a soft state, and eventually consistent."'),(0,r.kt)("p",null,"When a system is ",(0,r.kt)("strong",{parentName:"p"},"basically available"),", data is available most of the time. For instance, the data in the Beijing server won't be immediately available to the server in London. Also, database servers can and will fail, leading to downtime in availability."),(0,r.kt)("p",null,"When a database system has a ",(0,r.kt)("strong",{parentName:"p"},"soft state"),", it may update even when it hasn't been written to. When the server in London finally gets data from Beijing, it will update \u2014 but not because data was written directly to it. In order for data to become available and consistent, it may be written to the database at different times."),(0,r.kt)("p",null,"Finally, we have ",(0,r.kt)("strong",{parentName:"p"},"eventual consistency"),", which we just discussed. Eventually, the data in London will match the data in Beijing."),(0,r.kt)("p",null,"The CAP theorem is essential to understanding how distributed systems work. Meanwhile, the BASE acronym shows how the requirements of CAP can be loosened enough that every condition is more or less met \u2014 just not stringently."),(0,r.kt)("p",null,"By the way, Eric Brewer is vice-president of infrastructure at Google. His theorems aren't just concepts \u2014 they are widely applied at the world's largest software companies. We'll even see CAP and BASE come into play when we discuss how Firebase works."))}p.isMDXComponent=!0}}]);