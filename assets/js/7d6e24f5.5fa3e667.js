"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[40961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Modern JavaScript Development",id:"modern_javascript_development",slug:"modern_javascript_development",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0b_modern_javascript_development.md"},i=void 0,s={unversionedId:"intermediate_javascript_part_time_evening/test-driven-development/modern_javascript_development",id:"intermediate_javascript_part_time_evening/test-driven-development/modern_javascript_development",title:"Modern JavaScript Development",description:"Imagine we're part of a development team working on a huge application. The application is live and thousands of people visit our site everyday. It has hundreds of pages, JavaScript files, and dependencies (like Bootstrap, or any other library we can incorporate into our project). After all, it's a huge site and many people use it!",source:"@site/docs/intermediate_javascript_part_time_evening/5_test-driven-development/0b_modern_javascript_development.md",sourceDirName:"intermediate_javascript_part_time_evening/5_test-driven-development",slug:"/intermediate_javascript_part_time_evening/test-driven-development/modern_javascript_development",permalink:"/intermediate_javascript_part_time_evening/test-driven-development/modern_javascript_development",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Modern JavaScript Development",id:"modern_javascript_development",slug:"modern_javascript_development",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0b_modern_javascript_development.md"},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"Test Driven Development and Environments with JavaScript Objectives",permalink:"/intermediate_javascript_part_time_evening/test-driven-development/test_driven_development_and_environments_with_javascript_objectives"},next:{title:"Basic Project Structure",permalink:"/intermediate_javascript_part_time_evening/test-driven-development/basic_project_structure"}},l={},p=[{value:"Modern JavaScript Development",id:"modern-javascript-development",level:2},{value:"One Last Thing...",id:"one-last-thing",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Imagine we're part of a development team working on a huge application. The application is live and thousands of people visit our site everyday. It has hundreds of pages, JavaScript files, and dependencies (like Bootstrap, or any other library we can incorporate into our project). After all, it's a huge site and many people use it! "),(0,o.kt)("p",null,"Now imagine our site uses only the HTML, CSS and JavaScript techniques we've covered so far. Our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," page has one hundred script and link tags in it, each representing a JavaScript file or dependency we need. This would be very messy and hard to work with. A single small change to a file could break everything."),(0,o.kt)("p",null,"There'd also be another huge problem: our site would be incredibly slow. Each file we load has its own overhead. When multiplied over many files, that overhead quickly adds up and leads to lost customers and lost revenue. Our customers expect the site to load as quickly as possible and it should be reliable!"),(0,o.kt)("p",null,"We can actually get a sense of how many resources a site is loading via the ",(0,o.kt)("em",{parentName:"p"},"Network")," tab in Chrome Dev Tools. This tab shows all the resources that are being uploaded and downloaded when we visit a page. We can open Chrome Dev Tools, click on the ",(0,o.kt)("em",{parentName:"p"},"Network")," tab, and then visit any site we like to see this exchange of resources."),(0,o.kt)("p",null,"Let's take a look at Flickr's home page:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/flickr-network-panel-v2.gif",alt:"This shows all the resources being downloaded to the browser for Flickr's splash page."})),(0,o.kt)("p",null,"Notice the red box that pops up in the gif when we go to ",(0,o.kt)("a",{parentName:"p",href:"http://www.flickr.com"},"www.flickr.com")," \u2014 it's tracking the number of requests for resources that Flickr's homepage makes as it loads. At the end of the gif, the number of requests total to 94! That's a ton of resources! And that's just for Flickr's ",(0,o.kt)("em",{parentName:"p"},"splash page"),", without even logging in."),(0,o.kt)("h2",{id:"modern-javascript-development"},"Modern JavaScript Development"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In the world of modern JavaScript development, performance and reliability are extremely important. It's essential to optimize our applications so they run faster, whether in production or development. A site like Flickr seamlessly downloads many photos, files, and website styles, all while giving users a good experience. It's simply not possible to build efficient and resource-intensive sites like Flickr with just the basic tools we've been using so far."),(0,o.kt)("p",null,"As our applications grow bigger, we need to consider two very important issues. We need to make our lives easier, not harder, as developers. We also need to make our applications faster, too. However, these two goals often conflict with each other. Here are some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With very large applications, it's much easier to organize and understand the codebase if we break it down into smaller files. So far, we've only worked with single custom JavaScript files (",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js"),"), however, it's more common to have multiple JS files, each of which focuses on one slice of functionality in the entire application. As an example using our Address Book application, we might have one JS file for our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," business logic, and another JS file containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," business logic, and yet another containing the user interface logic. This is better for developers, especially in large applications! However, because each file has additional overhead to load, it takes longer for our machines to process them. Not so great for having fast, efficient applications...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clear variable names and easy-to-read syntax help developers write, read, and reason about code. However, our machines don't care whether a variable is named ",(0,o.kt)("inlineCode",{parentName:"p"},"veryClearlyNamed")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),". But there's one significant difference between the two \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," takes less space in memory. To make our applications load faster, our files should be smaller if possible. But that's hard for developers to read..."))),(0,o.kt)("p",null,"For example, take a look at a small chunk of ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/getting-started/download/"},"minified Bootstrap that we've downloaded"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'@charset "UTF-8";/*!\n* Bootstrap  v5.2.3 (https://getbootstrap.com/)\n* Copyright 2011-2022 The Bootstrap Authors\n* Copyright 2011-2022 Twitter, Inc.\n* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n*/:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color-rgb:33,37,41;--bs-body-bg-rgb:255,255,255;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n')),(0,o.kt)("p",null,"Good luck reading and understanding that! The truth is that the above code isn't for humans \u2014 but rather to make the files smaller so our machines can load them more quickly. It has automatically been ",(0,o.kt)("strong",{parentName:"p"},"minified")," (made smaller) to keep the file size as small as possible."),(0,o.kt)("p",null,"As we can see, a good developer experience and efficient applications can be at cross purposes. However, we can address the issues above by separating our code into ",(0,o.kt)("strong",{parentName:"p"},"development")," and ",(0,o.kt)("strong",{parentName:"p"},"production")," environments. Code in a development environment is convenient for developing \u2014 easier to read and work with, but slower. Code in a production environment is easier for machines to work with and much more efficient."),(0,o.kt)("p",null,"Because we aren't building polished, production-ready applications yet, we'll be focused on working in a development environment. Even so, we will still utilize tools to make our code more efficient and our lives easier as developers."),(0,o.kt)("p",null,"Here are some of the tools we'll learn to use in the following lessons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"npm")," (",(0,o.kt)("strong",{parentName:"p"},"Node Package Manager"),") will allow us to easily install and manage JavaScript packages in our projects. A package is also called a ",(0,o.kt)("strong",{parentName:"p"},"dependency"),", and it's any prepackaged code that we can download and use in our project. A good example of a dependency that we've used so far is Bootstrap, a style library that also uses JavaScript for interactivity.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"webpack")," is a module bundler that will ",(0,o.kt)("strong",{parentName:"p"},"concatenate")," and ",(0,o.kt)("strong",{parentName:"p"},"minify")," our code. A ",(0,o.kt)("strong",{parentName:"p"},"module")," is a file \u2014 JavaScript, CSS, an image, or another asset. That means we can write code that's easy for developers to read, and webpack will handle automatically concatenating all our files into just one file and then minify the code (like the Bootstrap example above). We can use webpack to add lots of other useful functionality to our projects as well.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Jest")," will allow us to write and run automated tests to ensure our business logic is working correctly. We will install the Jest package using npm, and it will be saved as a dependency in our project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We'll also install additional packages (dependencies) to improve our development experience:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"html-webpack-plugin"))," will allow us to easily generate HTML files based on templates."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"webpack-dev-server"))," will automatically reload our code in the browser as we make changes to it. Great for development!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"eslint"))," is a code analysis tool that we can set up to automatically review our code and notify us when any code is poorly-written or has errors. This helps us quickly identify and fix bugs.")))),(0,o.kt)("p",null,"We'll do all of these things and more in this section. In the process, we'll learn how to use new JavaScript features that were released with ES6 (released in 2015 as ECMAScript 2015, the latest stable release of JavaScript that is implemented in all modern browsers)."),(0,o.kt)("h2",{id:"one-last-thing"},"One Last Thing..."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The next two sections of class are going to look and feel very different from the work we've been doing. Specifically, these sections are a big step up in terms of difficulty. Up until this point, we've been taking things slowly and focusing on learning the fundamentals. From this point on, we're going to be writing our code the same way it's done in a professional setting. We're about to jump into the deep end."),(0,o.kt)("p",null,"Creating a development environment can feel very abstract and it's often difficult to debug when things go awry. This is a common feeling among developers both new and experienced. You may feel frustrated while going through these examples but keep pressing forward. While struggling through this material may feel frustrating at times, there is no other way to get comfortable with setting up and problem-solving environments than to just jump in. Do your best, accept partial understanding, and know that your efforts will benefit you not just at Epicodus but also in the programming industry. "),(0,o.kt)("p",null,"Right now, we are building the toolset we need to succeed as developers. That includes problem-solving, being patient with ourselves, managing frustration, and learning how to be comfortable even when we feel like we are in over our heads."))}m.isMDXComponent=!0}}]);