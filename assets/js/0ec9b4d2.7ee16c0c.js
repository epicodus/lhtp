"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[10003],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),b=s,h=p["".concat(l,".").concat(b)]||p[b]||u[b]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},19489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const r={title:"ACID Databases",id:"acid_databases",slug:"acid_databases",hide_table_of_contents:!0,sidebar_position:37,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_database-basics/3c_acid_databases.md"},i=void 0,o={unversionedId:"c_and_net/database-basics/acid_databases",id:"c_and_net/database-basics/acid_databases",title:"ACID Databases",description:"One of the biggest advantages of SQL database is that they are incredibly stable. In computer science, the acronym ACID is used to describe the ways in which a SQL database is reliable. In this lesson, we'll cover ACID and why it is important. The content in this lesson isn't required for this section's independent project. However, it is a key part of understanding how SQL databases work and how they are different from noSQL databases. We will be using a NoSQL database in the React course.",source:"@site/docs/c_and_net/8_database-basics/3c_acid_databases.md",sourceDirName:"c_and_net/8_database-basics",slug:"/c_and_net/database-basics/acid_databases",permalink:"/lhtp/c_and_net/database-basics/acid_databases",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"ACID Databases",id:"acid_databases",slug:"acid_databases",hide_table_of_contents:!0,sidebar_position:37,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_database-basics/3c_acid_databases.md"},sidebar:"c_and_net",previous:{title:"Best Restaurants in Town (Two-day project)",permalink:"/lhtp/c_and_net/database-basics/best_restaurants_in_town_two_day_project"},next:{title:"Technical Interview Practice",permalink:"/lhtp/c_and_net/database-basics/technical_interview_practice"}},l={},c=[{value:"ACID Databases",id:"acid-databases",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"One of the biggest advantages of SQL database is that they are incredibly stable. In computer science, the acronym ",(0,s.kt)("strong",{parentName:"p"},"ACID")," is used to describe the ways in which a SQL database is reliable. In this lesson, we'll cover ",(0,s.kt)("strong",{parentName:"p"},"ACID")," and why it is important. The content in this lesson isn't required for this section's independent project. However, it is a key part of understanding how SQL databases work and how they are different from noSQL databases. We will be using a NoSQL database in the React course."),(0,s.kt)("h2",{id:"acid-databases"},"ACID Databases"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"A SQL database must have all of the following:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Atomicity"),": Just as an atom is undividable, the same must be true about a SQL database transaction. In other words, a transaction must either completely succeed or completely fail. For instance, if we were to make a query to return all of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Album"),"s from our database, we would expect ",(0,s.kt)("em",{parentName:"p"},"all")," results to be returned, not just most of them. If our database cannot return every result, then the query should fail. After all, our database wouldn't be very reliable if it only gave us some of the information we needed."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Consistency"),": A SQL database must be consistent. This simply means that a database must always be in a valid state. In order to enforce this, any data we add to our database must be valid according to the constraints imposed by our database. A SQL database will enforce consistency by rejecting invalid transactions."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Isolation"),": In a large database, there can be many transactions happening all at once or at different times. The principle of isolation states that regardless of how these transactions occur, the database will ultimately be in the same state after the transactions are complete. This may sound complicated, but it just means that SQL databases have to handle ",(0,s.kt)("strong",{parentName:"p"},"concurrency"),". We also have to handle concurrency as programmers, such as when we're working with API calls in JavaScript."),(0,s.kt)("p",null,"At the strictest level of isolation, this means there can only be one copy of a database on one server. Otherwise, we could have a database distributed across multiple servers and each part of the database could be in a different state. Here's an example. Imagine two users on opposite ends of the world using an application with only one database server. User one makes an update to an ",(0,s.kt)("inlineCode",{parentName:"p"},"Album")," (now it's sold out!) while user two wants to view that ",(0,s.kt)("inlineCode",{parentName:"p"},"Album")," and see if it's available. These transactions will occur in the order they reach the database and the data will remain reliable."),(0,s.kt)("p",null,"Now imagine that the application has two database servers. Only one of the servers can be updated at a time. If the second user's query hits the second database, they may be accessing data that is different from the data on the first server. This is called a ",(0,s.kt)("strong",{parentName:"p"},"dirty read")," and it violates the principle of isolation."),(0,s.kt)("p",null,"Isolation is extremely important for the reliability of a database. However, with larger databases isolation leads to a decline in performance. For that reason, it's common for this principle to be relaxed to improve performance."),(0,s.kt)("p",null,"Ultimately, there are many levels of isolation leading to various tradeoffs in reliability and performance."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Durability"),": Once a database transaction is complete, it remains complete. Data cannot be erased or changed without further transactions. This just means that SQL databases must retain their data even in the case of potential issues such as outages or power failures. For this reason, data is generally recorded in non-volatile memory, which does not need constant power like volatile memory does."),(0,s.kt)("p",null,"In general, SQL databases are at their strongest when we can use relationships and a clear schema to represent our data. If we can't clearly define a schema and we don't need relationships in our application, noSQL databases can be a better solution."))}u.isMDXComponent=!0}}]);