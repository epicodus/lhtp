"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[56778],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={title:"2. Introduction to React",id:"introduction_to_react",slug:"introduction_to_react",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/0ab_introduction_to_react.md"},l=void 0,o={unversionedId:"react_part_time_evening/react-fundamentals/introduction_to_react",id:"react_part_time_evening/react-fundamentals/introduction_to_react",title:"2. Introduction to React",description:"React is a JavaScript library used to create highly dynamic views. In this lesson, we'll explore its history, who uses it, and the functionality and benefits it offers.",source:"@site/docs/react_part_time_evening/4_react-fundamentals/0ab_introduction_to_react.md",sourceDirName:"react_part_time_evening/4_react-fundamentals",slug:"/react_part_time_evening/react-fundamentals/introduction_to_react",permalink:"/lhtp/react_part_time_evening/react-fundamentals/introduction_to_react",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Introduction to React",id:"introduction_to_react",slug:"introduction_to_react",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/0ab_introduction_to_react.md"},sidebar:"react_part_time_evening",previous:{title:"1. React Fundamentals Objectives",permalink:"/lhtp/react_part_time_evening/react-fundamentals/react_fundamentals_objectives"},next:{title:"3. The Virtual DOM",permalink:"/lhtp/react_part_time_evening/react-fundamentals/the_virtual_dom"}},s={},c=[{value:"History",id:"history",level:2},{value:"What is React?",id:"what-is-react",level:2},{value:"Who Uses React?",id:"who-uses-react",level:2},{value:"Why Use React?",id:"why-use-react",level:2},{value:"Component-Based",id:"component-based",level:3},{value:"Declarative",id:"declarative",level:3},{value:"Data Model Synchronization",id:"data-model-synchronization",level:3},{value:"The Efficient Virtual DOM",id:"the-efficient-virtual-dom",level:3},{value:"Easier to Create Single Page Applications",id:"easier-to-create-single-page-applications",level:3},{value:"JSX",id:"jsx",level:3},{value:"Support",id:"support",level:3},{value:"Library Benefits",id:"library-benefits",level:3},{value:"React Native",id:"react-native",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React is a JavaScript library used to create highly dynamic views. In this lesson, we'll explore its history, who uses it, and the functionality and benefits it offers."),(0,i.kt)("h2",{id:"history"},"History"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"React was developed at Facebook in 2011 for use in their newsfeed area. After continued issues with long load times, they needed to develop something fast and scalable enough to deal with extremely heavy traffic \u2014 ",(0,i.kt)("a",{parentName:"p",href:"https://newsroom.fb.com/company-info/"},"Facebook reported")," 1.28 billion daily active users in March 2017 alone."),(0,i.kt)("p",null,"In 2013, React was made open source. Since then, it has become extremely popular. Sites ranging from Instagram to AirBnB use it."),(0,i.kt)("h2",{id:"what-is-react"},"What is React?"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"What exactly is React? It's not an MVC like .NET or Rails. At its core, it's a ",(0,i.kt)("strong",{parentName:"p"},"library")," for developing the view layer. A library focuses on one piece of functionality and that's exactly what React does. It isn't concerned with the back-end of an application. Instead, it manages how user interfaces look and behave."),(0,i.kt)("p",null,"React is also ",(0,i.kt)("strong",{parentName:"p"},"highly dynamic"),". This means it can handle views that need to change a lot. React allows us to quickly and dynamically update the UI without reloading pages. Any application or site that requires frequent updates is a great candidate for React."),(0,i.kt)("h2",{id:"who-uses-react"},"Who Uses React?"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Here are a few companies, products, websites, and apps that use React's library:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.angieslist.com/"},"Angi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.airbnb.com/"},"AirBnB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://asana.com/"},"Asana")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.bbc.com/"},"BBC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://bleacherreport.com/"},"BleacherReport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.deviantart.com/"},"DeviantArt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.ebay.com/"},"Ebay")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.everlane.com/"},"Everlane")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/"},"Facebook")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.glassdoor.com"},"GlassDoor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.imdb.com/"},"IMDb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://imgur.com/"},"Imgur")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.instagram.com/"},"Instagram")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.intuit.com/"},"Intuit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.khanacademy.org/"},"Khan Academy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.lyft.com/"},"Lyft")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.netflix.com/"},"Netflix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nytimes.com/"},"New York Times")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.okcupid.com/"},"OKCupid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.patreon.com"},"Patreon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.paypal.com/us/home"},"Paypal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pinterest.com/"},"Pinterest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.quizup.com/en"},"QuizUp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/"},"Reddit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://seatgeek.com/"},"SeatGeek")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tesla.com/careers/"},"Tesla")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twitch.tv/"},"Twitch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://venmo.com/"},"Venmo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.wunderground.com"},"Weather Underground"))),(0,i.kt)("p",null,"And many, many more!  "),(0,i.kt)("h2",{id:"why-use-react"},"Why Use React?"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"React also has many other benefits as well, including:"),(0,i.kt)("h3",{id:"component-based"},"Component-Based"),(0,i.kt)("p",null,"React is component-based, which assists in organizing even the most complex user interfaces into small packages of dedicated functionality. We can also reuse components to keep projects organized and DRY."),(0,i.kt)("h3",{id:"declarative"},"Declarative"),(0,i.kt)("p",null,"React components are ",(0,i.kt)("strong",{parentName:"p"},"declarative"),". As we discussed in the last course section, declarative programming is when we write code that describes the intended end result instead of writing every single step required to reach that result. Writing declarative code saves us time because we don't need to explicitly state every step needed to reach the end result. Declarative code is also easier to read and understand."),(0,i.kt)("h3",{id:"data-model-synchronization"},"Data Model Synchronization"),(0,i.kt)("p",null,"Updating user interfaces to reflect changing application data is one of the most difficult challenges that web developers face on a day-to-day basis. React includes built-in functionality to automatically synchronize our data models with our user interface. That means when we update a piece of data in our application (called state), we can code our user interface to automatically update to reflect that change."),(0,i.kt)("h3",{id:"the-efficient-virtual-dom"},"The Efficient Virtual DOM"),(0,i.kt)("p",null,"React utilizes a ",(0,i.kt)("strong",{parentName:"p"},"virtual DOM"),". We'll explore what this is and how it works in the next lesson. This feature allows us to interact with the DOM more efficiently and with much less code than other libraries and frameworks.  "),(0,i.kt)("h3",{id:"easier-to-create-single-page-applications"},"Easier to Create Single Page Applications"),(0,i.kt)("p",null,"For a long time, all websites were multi-page applications. Many still are, including the MVC applications we created with Rails and .NET. Whenever we request to see information or complete an action, we navigate to a new page. For example, check out the way a user interacts with the multi-page site ",(0,i.kt)("a",{parentName:"p",href:"https://www.kiva.org"},"kiva.org"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/kiva-multi-page-app-example.gif",alt:"kiva-multi-page-app-example"})),(0,i.kt)("p",null,"Each time we request to see different information, we navigate to a new page entirely."),(0,i.kt)("p",null,"Now many popular sites like Gmail, Facebook, Instagram, and Twitter are ",(0,i.kt)("strong",{parentName:"p"},"single-page apps"),". They load a single HTML page and then dynamically update that page as necessary. This creates a smoother user experience due to the reduced number of page refreshes."),(0,i.kt)("p",null,"For instance, check out a user on Instagram's single-page application can navigate another user's profile. Notice how it differs from the experience above:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/instagram-spa-example.gif",alt:"instagram-spa-example"})),(0,i.kt)("p",null,"The user can complete multiple actions without navigating to a new page, reloading, or refreshing. The page the user is already on is simply updated dynamically."),(0,i.kt)("p",null,"However, despite the fewer number of pages, creating and maintaining single-page applications is considerably more difficult than making traditional multi-page sites. The DOM needs to be updated constantly. The data and the user interface must constantly be synchronized even though making DOM updates is an inefficient process."),(0,i.kt)("p",null,"React makes creating these modern single-page applications much easier due to its virtual DOM and data model synchronization capabilities."),(0,i.kt)("h3",{id:"jsx"},"JSX"),(0,i.kt)("p",null,"React uses a special syntax called ",(0,i.kt)("strong",{parentName:"p"},"JSX")," that allows developers to mix HTML with JavaScript. While not mandatory, developers report that JSX makes developing in React much easier. Nearly all React applications use JSX syntax. We'll use JSX, too."),(0,i.kt)("h3",{id:"support"},"Support"),(0,i.kt)("p",null,"Facebook maintains React. It is a large, established company with the resources to support and maintain React (and its documentation) into the foreseeable future. Our applications will be more stable if we use well-supported tools."),(0,i.kt)("h3",{id:"library-benefits"},"Library Benefits"),(0,i.kt)("p",null,"Because React is just a view library, developers have tremendous flexibility to build out other parts of their applications as they see fit."),(0,i.kt)("h3",{id:"react-native"},"React Native"),(0,i.kt)("p",null,"React developers can explore building mobile-friendly applications with ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/"},"React Native"),". Both React and React Native follow the same design patterns. Once you have a strong foundation in React, you'll be that much more prepared to build mobile-friendly."))}m.isMDXComponent=!0}}]);