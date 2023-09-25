"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[40455],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(i),p=a,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return i?n.createElement(g,r(r({ref:t},c),{},{components:i})):n.createElement(g,r({ref:t},c))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},62807:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));const o={title:"Using Floats",id:"using_floats",slug:"using_floats",hide_table_of_contents:!0,sidebar_position:20,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_git-html-and-css-part-2/3e_using_floats.md"},r=void 0,l={unversionedId:"introduction_to_programming_part_time_evening/git-html-and-css-part-2/using_floats",id:"introduction_to_programming_part_time_evening/git-html-and-css-part-2/using_floats",title:"Using Floats",description:"So far, everything we've done has been laid out very simply, from top to bottom for block elements, and left to right for inline ones. But often we'll want to have text wrap around an image, or have a sidebar on one side, or create a page with multiple columns. We can design all of these layouts using floats.",source:"@site/docs/introduction_to_programming_part_time_evening/2_git-html-and-css-part-2/3e_using_floats.md",sourceDirName:"introduction_to_programming_part_time_evening/2_git-html-and-css-part-2",slug:"/introduction_to_programming_part_time_evening/git-html-and-css-part-2/using_floats",permalink:"/lhtp/introduction_to_programming_part_time_evening/git-html-and-css-part-2/using_floats",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Using Floats",id:"using_floats",slug:"using_floats",hide_table_of_contents:!0,sidebar_position:20,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_git-html-and-css-part-2/3e_using_floats.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Practice: HTML Divs and Spans, and CSS Sizing Units",permalink:"/lhtp/introduction_to_programming_part_time_evening/git-html-and-css-part-2/practice_html_divs_and_spans_and_css_sizing_units"},next:{title:"Practice: Using Floats",permalink:"/lhtp/introduction_to_programming_part_time_evening/git-html-and-css-part-2/practice_using_floats"}},s={},u=[],c={toc:u},m="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So far, everything we've done has been laid out very simply, from top to bottom for block elements, and left to right for inline ones. But often we'll want to have text wrap around an image, or have a sidebar on one side, or create a page with multiple columns. We can design all of these layouts using ",(0,a.kt)("strong",{parentName:"p"},"floats"),"."),(0,a.kt)("p",null,"Here's an example of how to have text wrap around an image. First, the HTML for a new page about walruses:"),(0,a.kt)("div",{class:"filename"},"walrus.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>The Walrus: a strange and noble creature</title>\n</head>\n<body>\n  <img src="img/walrus.jpg" alt="A walrus basking on a rock."/>\n  <p>The walrus is truly a majestic animal. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n</body>\n</html>\n')),(0,a.kt)("p",null,"And then the CSS rule:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"img {\n  float: left;\n}\n")),(0,a.kt)("p",null,'Check it out: the image "floats" to the left, and the text wraps around it. If your web browser isn\'t wide enough that the text extends below the bottom of the image, resize the window so that you can see how the text flows at the bottom of the page.'),(0,a.kt)("p",null,"You can also make the image float to the right as well. And if you'd like only certain images to float, you can just add a class to those images and only float images with that class."),(0,a.kt)("p",null,"Now let's use floats to create a sidebar:"),(0,a.kt)("div",{class:"filename"},"walrus.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>The Walrus: a strange and noble creature</title>\n</head>\n<body>\n  <h1>All about walruses</h1>\n  <div class="sidebar">\n    <h2>IRL</h2>\n    <p>Want to see walruses in real life? Here are some places to check out:</p>\n    <ul>\n      <li>The beach</li>\n      <li>The ocean</li>\n      <li>The bay</li>\n      <li>Rocks</li>\n    </ul>\n  </div>\n\n  <div class="main">\n    <p>The walrus is truly a majestic animal. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n  </div>\n</body>\n</html>\n')),(0,a.kt)("p",null,"And the CSS:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".sidebar {\n  width:' 30%%';\n  float: right;\n  background-color:'yellow';\n}\n")),(0,a.kt)("p",null,"Are you starting to see how this works? Let's do one more thing with floats and create a column layout:"),(0,a.kt)("div",{class:"filename"},"columns.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>Columns</title>\n</head>\n<body>\n  <h1>Check out these columns</h1>\n  <div class="column">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n  </div>\n\n  <div class="column">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n  </div>\n\n  <div class="column">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n  </div>\n</body>\n</html>\n')),(0,a.kt)("p",null,"CSS:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".column {\n  width:' 300px%';\n  float: left;\n}\n")),(0,a.kt)("p",null,"And now we have columns."),(0,a.kt)("p",null,"Floats are incredibly powerful and an important way to lay out your web pages."))}d.isMDXComponent=!0}}]);