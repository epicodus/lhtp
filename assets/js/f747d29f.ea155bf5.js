"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[94813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,d=m["".concat(c,".").concat(u)]||m[u]||h[u]||r;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Semantic Versioning",id:"semantic-versioning",slug:"semantic-versioning",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0g_semantic_versioning.md"},o=void 0,s={unversionedId:"intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/semantic-versioning",id:"intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/semantic-versioning",title:"Semantic Versioning",description:"When we install a JavaScript package, it will include a version number that looks something like this:",source:"@site/docs/intermediate-javascript-classic/4_test-driven-development-and-environments-with-javascript/0g-semantic-versioning.md",sourceDirName:"intermediate-javascript-classic/4_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/semantic-versioning",permalink:"/intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/semantic-versioning",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Semantic Versioning",id:"semantic-versioning",slug:"semantic-versioning",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0g_semantic_versioning.md"},sidebar:"intermediate-javascript-classic",previous:{title:"Creating a package.json with npm",permalink:"/intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/creating-a-packagejson-with-npm"},next:{title:"Installing Dependencies with npm: webpack and webpack-cli",permalink:"/intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/installing-dependencies-with-npm-webpack-and-webpack-cli"}},c={},l=[],p={toc:l},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When we install a JavaScript package, it will include a version number that looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"4.46.0\n")),(0,i.kt)("p",null,"In fact, this is the version of webpack we'll be installing in future lessons."),(0,i.kt)("p",null,"But what do these numbers even mean? Why are there multiple decimal points?"),(0,i.kt)("p",null,"This convention is used for ",(0,i.kt)("strong",{parentName:"p"},"semantic versioning"),". Semantic versioning just means that we are specifying the ",(0,i.kt)("strong",{parentName:"p"},"major")," version, the ",(0,i.kt)("strong",{parentName:"p"},"minor")," version, and the ",(0,i.kt)("strong",{parentName:"p"},"patch")," number. Semantic versioning is used in all sorts of software, not just npm packages."),(0,i.kt)("p",null,"It's important to understand these differences because you can run into a lot of trouble with your development environment otherwise."),(0,i.kt)("p",null,"The first number ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," is the ",(0,i.kt)("strong",{parentName:"p"},"major"),' version. Major versions represent "breaking" changes to software. This doesn\'t mean the software is broken \u2014 it just means that the package is no longer backwards compatible. If you are using version ',(0,i.kt)("inlineCode",{parentName:"p"},"3")," and you upgrade to version ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),' without actually updating your code to account for the changes, it will probably break your code. That\'s what "breaking changes" means. This is why software companies often use older ',(0,i.kt)("strong",{parentName:"p"},"legacy")," code. Legacy code just means the code isn't using the latest versions of all packages \u2014 and in some cases, the legacy code may be very old indeed. If a software company has a lot of code that's reliant on a specific package, they might not want to update to the latest version, even if it has great new features, because making that update will break the existing code."),(0,i.kt)("p",null,"In short, major versions mean major changes."),(0,i.kt)("p",null,"The second number (after the first decimal) is the ",(0,i.kt)("strong",{parentName:"p"},"minor")," version. In the number above, the minor version is ",(0,i.kt)("inlineCode",{parentName:"p"},"46"),". Minor version changes aren't breaking changes \u2014 and they are backwards compatible with other minor versions in that major version number. In other words, ",(0,i.kt)("inlineCode",{parentName:"p"},"4.46")," should be backwards compatible with ",(0,i.kt)("inlineCode",{parentName:"p"},"4.01")," because they have the same major version number. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"4.46")," wouldn't be backwards compatible with ",(0,i.kt)("inlineCode",{parentName:"p"},"3.99")," because they have a different major version number. "),(0,i.kt)("p",null,"Minor versions can still have updates or new functionality \u2014 it's just that they'll be backwards compatible with other minor versions in that major version. Keep in mind that minor versions can potentially introduce new bugs (as can new major versions), so having the latest version doesn't automatically mean that everything will be \"better\" \u2014 it just means updates have been made."),(0,i.kt)("p",null,"Finally, the third number (after the second decimal) is the ",(0,i.kt)("strong",{parentName:"p"},"patch number"),'. This is the number of patches that\'s been done on this minor version. A patch is something that "patches up" a bug or problem in the code.'),(0,i.kt)("p",null,"Let's look at the number above again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"4.46.0\n")),(0,i.kt)("p",null,"The major version is 4, the minor version is 46, and there have been 0 patches to this minor version."),(0,i.kt)("p",null,"As we mentioned before, this version number is for webpack, one of the most popular packages for JavaScript, React, and other JavaScript frameworks. It is well-funded and a large chunk of the JavaScript development community depends on it. Even so, it is ",(0,i.kt)("em",{parentName:"p"},"constantly")," being updated and changed \u2014 and even though it's a great piece of software, it has plenty of bugs, too."),(0,i.kt)("p",null,"At this point, you might wonder how semantic versioning applies to you. If you aren't building your own software and packages, why does it matter?"),(0,i.kt)("p",null,"Well, software packages don't always play nicely with each other. Let's say that the makers of package A make a major version change. In the process, they think about compatibility with package B and package C because they are both widely used and industry standard. However, they don't think about compatibility with package Z, which is instrumental to your project. If we update package A in our project and it doesn't play nicely with package Z, our project will break. We may get an instructive error message or we might not \u2014 after all, the makers of package Z might not even know about this breaking change yet \u2014 or they might be open source and not have the resources to address the issue quickly. To make matters worse, there's often very little documentation (or none at all) about conflicts between package versions, especially if it's a very recent issue or it involves a less common combination of packages."),(0,i.kt)("p",null,"This can even happen with minor versions or patch numbers. A change to the minor version or patch number just ensures that the changes are backwards compatible with itself \u2014 not every other package you might be using. That means even a change to a minor version or patch number in one package could cause an issue with another package we're working with, breaking our application. In fact, the more packages we work with, the more likely this becomes. We'll discuss how we can avoid these issues soon."),(0,i.kt)("p",null,"It's important to remember that developing software is an iterative process \u2014 software is constantly changing, which means new bugs are being introduced (and fixed). Sometimes that process is exciting, sometimes it's frustrating, and sometimes it's overwhelming. In fact, if a product is no longer being changed, it's probably not because it's stable and finished. More likely, it's obsolete and no longer being maintained!"),(0,i.kt)("p",null,"Also, before we move on \u2014 keep in mind that LearnHowToProgram.com follows the same iterative process. We, too, are constantly updating lessons to keep up with changes. In the process, we introduce (and fix) bugs. We also keep some legacy lessons and code because it doesn't always make sense to update to the latest, hottest version. "),(0,i.kt)("p",null,"As a developer, your job is to solve problems and overcome these challenges. Look at any bugs or issues you might run into as part of the process, whether they come from external projects, your own code, or even from LearnHowToProgram.com. We find that students do best when they keep their growth mindset and look at any issues they run into as positive challenges to learn from. After all, these are the exact challenges you'll run into the industry as well."))}h.isMDXComponent=!0}}]);