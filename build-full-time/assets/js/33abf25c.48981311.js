"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[19812],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(7896),o=(n(2784),n(30876));const i={title:"Centering Elements and Images",id:"centering-elements-and-images",slug:"centering-elements-and-images",hide_table_of_contents:!0,sidebar_position:44,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3ha_centering_elements_and_images.md"},r=void 0,s={unversionedId:"introduction-to-programming/git-html-and-css/centering-elements-and-images",id:"introduction-to-programming/git-html-and-css/centering-elements-and-images",title:"Centering Elements and Images",description:"It's common to want to center elements on a page \u2014 and as we've already learned, it's easy to do so with text. All we have to do is add the following property:",source:"@site/docs/introduction-to-programming/1_git-html-and-css/3ha-centering-elements-and-images.md",sourceDirName:"introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/centering-elements-and-images",permalink:"/introduction-to-programming/git-html-and-css/centering-elements-and-images",draft:!1,tags:[],version:"current",sidebarPosition:44,frontMatter:{title:"Centering Elements and Images",id:"centering-elements-and-images",slug:"centering-elements-and-images",hide_table_of_contents:!0,sidebar_position:44,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3ha_centering_elements_and_images.md"},sidebar:"introduction-to-programming",previous:{title:"Practice: Box Model",permalink:"/introduction-to-programming/git-html-and-css/practice-box-model"},next:{title:"Researching Online and Helpful Resources",permalink:"/introduction-to-programming/git-html-and-css/researching-online-and-helpful-resources"}},l={},m=[{value:"A Visual Review on Centering Elements with <code>margin: auto</code>",id:"a-visual-review-on-centering-elements-with-margin-auto",level:2}],c={toc:m},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It's common to want to center elements on a page \u2014 and as we've already learned, it's easy to do so with text. All we have to do is add the following property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"text-align: center;\n")),(0,o.kt)("p",null,"However, it's a little bit trickier to center boxes and images. "),(0,o.kt)("p",null,"Fortunately, it isn't too hard \u2014 as long as we understand a few important gotchas about CSS, which we'll cover in the following example. You won't be expected to center elements on the upcoming independent project. However, it's common for students to want to center elements in their projects and it can be frustrating when it's not working correctly."),(0,o.kt)("p",null,"Let's start with some HTML. We'll use the box model HTML code again with some changes added for spans and images:"),(0,o.kt)("div",{class:"filename"},"box-model.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>Box model</title>\n</head>\n<body>\n  <img src="cat.jpeg" class="centered-image"/>\n  <span class="my-class">Hi there!</span>\n  <div class="my-class">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>\n</body>\n</html>\n')),(0,o.kt)("p",null,"We have an image with a class of ",(0,o.kt)("inlineCode",{parentName:"p"},"centered-image")," as well as a span and a div, both which have the class ",(0,o.kt)("inlineCode",{parentName:"p"},"my-class"),". If you want to follow along, you'll have to add an image, whether it's a cat or something else. Don't forget that you'll need to update the image name in the HTML code to match the name of the file you use."),(0,o.kt)("p",null,"Here's the CSS so far:"),(0,o.kt)("div",{class:"filename"},"css/styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".my-class {\n  border:' 2px%' solid green;\n  padding:' 10px%';\n  background-color:'orange';\n  margin-top:' 20px%';\n  margin-bottom:' 20px%';\n  box-sizing: border-box;\n}\n\n.centered-image {\n  width:' 50%%';\n  height: auto;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".my-class")," uses the box model we learned about in the last lesson. ",(0,o.kt)("inlineCode",{parentName:"p"},".centered-image")," makes our image ",(0,o.kt)("strong",{parentName:"p"},"responsive"),", which means it will respond to the size of the browser window. This design approach is called ",(0,o.kt)("strong",{parentName:"p"},"responsive web design"),", which focuses on styling a webpage so that it looks good on all screen sizes. In this case, we are simply stating that the width of the image should be ",(0,o.kt)("inlineCode",{parentName:"p"},"50%")," of the browser and the height should automatically scale with it. Whenever we want an image to resize based on the browser window, we need to add a width that is a percentage."),(0,o.kt)("p",null,"Now let's take a look at how this looks in the browser:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Week-1-2020-images/non-centered-elements.png",alt:"Image of kitten along with boxes."})),(0,o.kt)("p",null,"Other than the kitten, this site isn't looking very visually appealing. The kitten image and the first box are side by side because they are ",(0,o.kt)("strong",{parentName:"p"},"inline")," elements. Spans are always inline elements and images are inline by default as well."),(0,o.kt)("p",null,"Meanwhile, the box on the bottom is a ",(0,o.kt)("strong",{parentName:"p"},"block")," element. That means it starts on a new line."),(0,o.kt)("p",null,"We learned about inline and block elements earlier in this section. We're bringing up the distinction again now because it's very important for centering elements. Let's demonstrate."),(0,o.kt)("p",null,"Here's the most common way to center an element that's not text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"margin: auto;\nwidth: [SET-WIDTH-HERE]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"margin: auto;")," is not very intuitive or easy to remember, but this property horizontally centers an element. However, it only works if a width is specified. This width can be a percentage or a fixed pixel width."),(0,o.kt)("p",null,"Let's add this rule to both of our classes:"),(0,o.kt)("div",{class:"filename"},"css/styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".my-class {\n  border:' 2px%' solid green;\n  padding:' 10px%';\n  background-color:'orange';\n  margin: auto;\n  margin-top:' 20px%';\n  margin-bottom:' 20px%';\n  width:' 50%%';\n  box-sizing: border-box;\n}\n\n.centered-image {\n  margin: auto;\n  width:' 50%%';\n  height: auto;\n}\n")),(0,o.kt)("p",null,"We've added ",(0,o.kt)("inlineCode",{parentName:"p"},"margin: auto;")," to both rules and ",(0,o.kt)("inlineCode",{parentName:"p"},"width:' 50%%'")," to ",(0,o.kt)("inlineCode",{parentName:"p"},".my-class"),". By the way, note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"margin: auto;")," rule is ",(0,o.kt)("em",{parentName:"p"},"above")," the other margin rules. This is because ",(0,o.kt)("inlineCode",{parentName:"p"},"margin: auto;")," sets the top and bottom margins as well. To override those default settings, we have to put ",(0,o.kt)("inlineCode",{parentName:"p"},"margin-top")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"margin-bottom")," below it. All properties are applied from top to bottom. It's kind of like if we painted a house green and then painted it red. The second rule overrides the first and the house ends up being red, not green."),(0,o.kt)("p",null,"Let's take a look at our page now:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Week-1-2020-images/bottom-box-centered.png",alt:"The bottom box is centered but the image and span aren't."})),(0,o.kt)("p",null,"As we can see here, our rule is working correctly for the bottom box but not for the image or the top box."),(0,o.kt)("p",null,"This is because both the image and the span are inline elements. We can not apply this margin rule to an inline element. To fix this issue, we need to tell our page that we want the element to be a block element, not the default inline element. To do that, we can add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"display: block;\n")),(0,o.kt)("p",null,"Let's add that to both rules now:"),(0,o.kt)("div",{class:"filename"},"css/styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".my-class {\n  border:' 2px%' solid green;\n  padding:' 10px%';\n  background-color:'orange';\n  display: block;\n  margin: auto;\n  margin-top:' 20px%';\n  margin-bottom:' 20px%';\n  width:' 50%%';\n  box-sizing: border-box;\n}\n\n.centered-image {\n  margin: auto;\n  width:' 50%%';\n  height: auto;\n  display: block;\n}\n")),(0,o.kt)("p",null,"Now if we refresh our page, everything will be correctly centered. Note that none of the elements are inline anymore \u2014 they all start on new lines because they are now block elements."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Week-1-2020-images/centered-elements.png",alt:"All elements are centered now."})),(0,o.kt)("h2",{id:"a-visual-review-on-centering-elements-with-margin-auto"},"A Visual Review on Centering Elements with ",(0,o.kt)("inlineCode",{parentName:"h2"},"margin: auto")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Optionally watch the following video for a visual review on using ",(0,o.kt)("inlineCode",{parentName:"p"},"margin: auto")," on block elements to center them on the page. The video covers a short cut we can use with the values for the ",(0,o.kt)("inlineCode",{parentName:"p"},"margin")," property, as well as how to turn inline elements into block elements. "),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{title:"vimeo-player",src:"https://player.vimeo.com/video/778164139?h=d72dab1416",width:"640",height:"360",frameborder:"0",allowfullscreen:!0})))}p.isMDXComponent=!0}}]);