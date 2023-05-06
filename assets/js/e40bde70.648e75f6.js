"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[6972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=m(n),c=i,u=h["".concat(s,".").concat(c)]||h[c]||d[c]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const o={title:"3. HTML Inline Elements and Attributes: <strong>, <em>, <img>, <a>, and More",id:"html_inline_elements_and_attributes_strong_em_img_a_and_more",slug:"html_inline_elements_and_attributes_strong_em_img_a_and_more",hide_table_of_contents:!0,sidebar_position:22,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro/blob/main/1_git_html_and_css/1m_html_inline_elements.md"},r=void 0,l={unversionedId:"test_intro/git_html_and_css/html_inline_elements_and_attributes_strong_em_img_a_and_more",id:"test_intro/git_html_and_css/html_inline_elements_and_attributes_strong_em_img_a_and_more",title:"3. HTML Inline Elements and Attributes: <strong>, <em>, <img>, <a>, and More",description:"All of the tags we learned about in the previous lessons are block elements, meaning that each element is displayed on a new line. In this lesson, we are going to look at elements that do not appear on their own line but share a line with other elements.  These are called inline elements.",source:"@site/docs/test_intro/1_git_html_and_css/1m_html_inline_elements.md",sourceDirName:"test_intro/1_git_html_and_css",slug:"/test_intro/git_html_and_css/html_inline_elements_and_attributes_strong_em_img_a_and_more",permalink:"/lhtp/test_intro/git_html_and_css/html_inline_elements_and_attributes_strong_em_img_a_and_more",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"3. HTML Inline Elements and Attributes: <strong>, <em>, <img>, <a>, and More",id:"html_inline_elements_and_attributes_strong_em_img_a_and_more",slug:"html_inline_elements_and_attributes_strong_em_img_a_and_more",hide_table_of_contents:!0,sidebar_position:22,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro/blob/main/1_git_html_and_css/1m_html_inline_elements.md"},sidebar:"test_intro",previous:{title:"2. Commit Trailers and Github Contributions",permalink:"/lhtp/test_intro/git_html_and_css/commit_trailers_and_github_contributions"},next:{title:"4. PRACTICE: Inline Elements",permalink:"/lhtp/test_intro/git_html_and_css/practice_inline_elements"}},s={},m=[{value:"HTML Inline Elements and Attributes",id:"html-inline-elements-and-attributes",level:2},{value:"<code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> Tags",id:"strong-and-em-tags",level:3},{value:"<code>&lt;a&gt;</code> Tags",id:"a-tags",level:3},{value:"HTML Attributes",id:"html-attributes",level:3},{value:"Using an Anchor to Link to Other HTML Files Within the Same Project",id:"using-an-anchor-to-link-to-other-html-files-within-the-same-project",level:3},{value:"Using an Anchor to Link to Email Addresses",id:"using-an-anchor-to-link-to-email-addresses",level:3},{value:"<code>&lt;img&gt;</code> Tags",id:"img-tags",level:3},{value:"Update <code>favorite-things.html</code>",id:"update-favorite-thingshtml",level:3}],p={toc:m},h="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All of the tags we learned about in the previous lessons are block elements, meaning that each element is displayed on a new line. In this lesson, we are going to look at elements that do not appear on their own line but share a line with other elements.  These are called ",(0,i.kt)("strong",{parentName:"p"},"inline elements"),". "),(0,i.kt)("p",null,"We'll also learn about HTML ",(0,i.kt)("strong",{parentName:"p"},"attributes")," that we add to HTML elements to provide more information about them. Sometimes attributes are required for an HTML element to work properly, and other times they are optional."),(0,i.kt)("h2",{id:"html-inline-elements-and-attributes"},"HTML Inline Elements and Attributes"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"strong-and-em-tags"},(0,i.kt)("inlineCode",{parentName:"h3"},"<strong>")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"<em>")," Tags"),(0,i.kt)("p",null,"We're going to modify our first webpage to include an ",(0,i.kt)("strong",{parentName:"p"},"inline element"),":"),(0,i.kt)("div",{class:"filename"},"my-first-webpage.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<p>This is my <strong>first web page</strong>!</p>\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<strong>")," tag indicates that something is important. By default, it will make the text inside it bold (although we'll learn how to customize this soon). If we want to ",(0,i.kt)("em",{parentName:"p"},"emphasize")," something, we'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"<em>")," tag, which will italicize it:"),(0,i.kt)("div",{class:"filename"},"my-first-webpage.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Written with the guidance of <em>Epicodus</em></h2>\n")),(0,i.kt)("h3",{id:"a-tags"},(0,i.kt)("inlineCode",{parentName:"h3"},"<a>")," Tags"),(0,i.kt)("p",null,"Now, let's learn about perhaps the most important HTML tag of them all:"),(0,i.kt)("div",{class:"filename"},"my-first-webpage.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<p>Check out <a href="http://www.epicodus.com/">Epicodus</a>. It\'s a great school for learning web programming!</p>\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," is an ",(0,i.kt)("strong",{parentName:"p"},"anchor tag")," and it creates a link. The ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," (for ",(0,i.kt)("em",{parentName:"p"},"hypertext reference"),") is an ",(0,i.kt)("strong",{parentName:"p"},"attribute")," for the anchor tag that provides the web address the link will go to. In the example above, we've linked to a website outside of our project."),(0,i.kt)("h3",{id:"html-attributes"},"HTML Attributes"),(0,i.kt)("p",null,"All HTML tags can have one or more attributes. An ",(0,i.kt)("strong",{parentName:"p"},"attribute")," provides additional information about an HTML element. Sometimes attributes are required for an HTML element to work properly, and other times they are optional."),(0,i.kt)("p",null,"Let's review the anchor tag example we just learned about. In this anchor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a href="http://www.epicodus.com/">Epicodus</a>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<a>")," is opening tag for the anchor tag (the HTML element)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"</a>")," is closing tag for the anchor tag (the HTML element)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Epicodus")," is the content of the anchor tag (the link's text, displayed to the user)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"href")," is the attribute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://www.epicodus.com/")," is the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"href")," attribute. The value of an HTML attribute is surrounded in quotes.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Take note:")," attributes are always added to the opening tag, and never to the closing tag"),(0,i.kt)("h3",{id:"using-an-anchor-to-link-to-other-html-files-within-the-same-project"},"Using an Anchor to Link to Other HTML Files Within the Same Project"),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"my-first-webpage")," project contains two HTML documents. Here's how we can link from one to another:"),(0,i.kt)("div",{class:"filename"},"my-first-webpage.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<p>Here is a link to my <a href="favorite-things.html">favorite things</a>.</p>\n')),(0,i.kt)("p",null,"Instead of supplying a full path, we've provided a ",(0,i.kt)("strong",{parentName:"p"},"relative path"),". If a link doesn't start with ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),", or a few other specific protocols you may come across), your web browser will look in the same folder for the file you're linking to."),(0,i.kt)("p",null,"This brings up a pitfall you should be careful to avoid: if you write a link like ",(0,i.kt)("inlineCode",{parentName:"p"},'<a href="www.epicodus.com">link</a>'),", it will look for a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"www.epicodus.com")," in the current directory. So if you're linking to another website, don't forget to put ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," in front!"),(0,i.kt)("h3",{id:"using-an-anchor-to-link-to-email-addresses"},"Using an Anchor to Link to Email Addresses"),(0,i.kt)("p",null,"We can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," tags to link to an email address. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a href="mailto:michael@epicodus.com">\n')),(0,i.kt)("p",null,"Clicking on the above anchor tag would cause our computer to open up our default email application to a new message composition screen with the email address ",(0,i.kt)("inlineCode",{parentName:"p"},"michael@epicodus.com")," listed as the recipient."),(0,i.kt)("h3",{id:"img-tags"},(0,i.kt)("inlineCode",{parentName:"h3"},"<img>")," Tags"),(0,i.kt)("p",null,"Finally, let's make our webpage a bit prettier and include an image. Save an image in the same folder as your HTML files and then include it like this:"),(0,i.kt)("div",{class:"filename"},"my-first-webpage.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img src="kitten.jpeg" alt="A photo of a cute kitten.">\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," tag is different from the other tags we've used in that it is ",(0,i.kt)("strong",{parentName:"p"},"self-closing"),": you don't need a closing tag. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute tells our webpage to look for a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"kitten.jpeg")," in our current directory as the source of the image element."),(0,i.kt)("p",null,"Also notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"alt")," attribute. If the browser can't render the image, it will display the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"alt"),' attribute, which in this case is "A photo of a cute kitten". This attribute is optional, but it\'s a really good idea to include it, so that blind people using software that reads web pages to them can know what the image is.'),(0,i.kt)("p",null,"Typically, webpages will store their images in a separate folder from their HTML. Let's create a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," and put the image file in there. Pick any image from the internet to practice this, saving the image to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," folder. Now, we need to update our code to tell the browser where to find the image:"),(0,i.kt)("div",{class:"filename"},"my-first-webpage.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img src="img/kitten.jpeg" alt="A photo of a cute kitten.">\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute with the value ",(0,i.kt)("inlineCode",{parentName:"p"},"img/kitten.jpeg")," tells the browser to look in the ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," folder in the current directory and then look for the ",(0,i.kt)("inlineCode",{parentName:"p"},"kitten.jpeg")," file."),(0,i.kt)("h3",{id:"update-favorite-thingshtml"},"Update ",(0,i.kt)("inlineCode",{parentName:"h3"},"favorite-things.html")),(0,i.kt)("p",null,"Let's update the page of favorite things to include some of the concepts we just learned about:"),(0,i.kt)("div",{class:"filename"},"favorite-things.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>Michael\'s favorite things</title>\n</head>\n<body>\n  <h1>My favorite things</h1>\n  <h2>These are a few of my favorite things.</h2>\n\n  <h3>People</h3>\n  <p>Here are some of my favorite <em>people</em>!</p>\n  <ul>\n    <li>\n      <a href="http://www.example.com/christopher.html">\n        My brother <strong>Christopher</strong>\n        <img src="img/christopher.jpeg" alt="A photo of Christopher.">\n      </a>\n    </li>\n    <li>\n      My mom and dad:\n      <ul>\n        <li>\n          <a href="http://www.example.com/steve.html">\n            <strong>Steve</strong>\n            <img src="img/steve.jpeg" alt="A photo of Steve.">\n          </a>\n        </li>\n        <li>\n          <a href="http://www.example.com/carol.html">\n            <strong>Carol</strong>\n            <img src="img/carol.jpeg" alt="A photo of Carol.">\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <a href="http://www.example.com/jessica.html">\n        My friend <strong>Jessica</strong>\n        <img src="img/jessica.jpeg" alt="A photo of Jessica.">\n      </a>\n    </li>\n    <li>\n      <a href="http://www.example.com/candy.html">\n        My friend <strong>Candy</strong>\n        <img src="img/candy.jpeg" alt="A photo of Candy.">\n      </a>\n    </li>\n  </ul>\n\n  <p>Thanks for reading about me!</p>\n</body>\n</html>\n')),(0,i.kt)("p",null,"Make sure to commit and push to your remote GitHub repository after updating. Check that your GitHub repository shows the changes."))}d.isMDXComponent=!0}}]);