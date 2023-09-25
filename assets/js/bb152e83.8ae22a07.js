"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[37149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),p=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(r.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,m=c["".concat(r,".").concat(u)]||c[u]||h[u]||s;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const s={title:"Bootstrap Basic Elements",id:"bootstrap_basic_elements",slug:"bootstrap_basic_elements",hide_table_of_contents:!0,sidebar_position:31,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_git-html-and-css-part-2/4d_bootstrap_basic_elements.md"},i=void 0,l={unversionedId:"introduction_to_programming_part_time/git-html-and-css-part-2/bootstrap_basic_elements",id:"introduction_to_programming_part_time/git-html-and-css-part-2/bootstrap_basic_elements",title:"Bootstrap Basic Elements",description:"In this lesson, we'll learn how to implement several of the most common Bootstrap resources and styles. These resources will make our projects look considerably nicer without much additional work. We'll also learn how to add our own styles alongside those from Bootstrap.",source:"@site/docs/introduction_to_programming_part_time/2_git-html-and-css-part-2/4d_bootstrap_basic_elements.md",sourceDirName:"introduction_to_programming_part_time/2_git-html-and-css-part-2",slug:"/introduction_to_programming_part_time/git-html-and-css-part-2/bootstrap_basic_elements",permalink:"/lhtp/introduction_to_programming_part_time/git-html-and-css-part-2/bootstrap_basic_elements",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"Bootstrap Basic Elements",id:"bootstrap_basic_elements",slug:"bootstrap_basic_elements",hide_table_of_contents:!0,sidebar_position:31,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_git-html-and-css-part-2/4d_bootstrap_basic_elements.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"Downloading and Installing Bootstrap",permalink:"/lhtp/introduction_to_programming_part_time/git-html-and-css-part-2/downloading_and_installing_bootstrap"},next:{title:"Bootstrap: Navigating Documentation",permalink:"/lhtp/introduction_to_programming_part_time/git-html-and-css-part-2/bootstrap_navigating_documentation"}},r={},p=[{value:"Project Setup",id:"project-setup",level:2},{value:"Adding Bootstrap",id:"adding-bootstrap",level:2},{value:"Bootstrap Styles",id:"bootstrap-styles",level:2},{value:"Containers",id:"containers",level:3},{value:"Typography",id:"typography",level:3},{value:"Blockquotes",id:"blockquotes",level:4},{value:"More Built-in Classes",id:"more-built-in-classes",level:3},{value:"Cards",id:"cards",level:3},{value:"Custom Styles",id:"custom-styles",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll learn how to implement several of the most common Bootstrap resources and styles. These resources will make our projects look considerably nicer without much additional work. We'll also learn how to add our own styles alongside those from Bootstrap."),(0,a.kt)("h2",{id:"project-setup"},"Project Setup"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll create a website to summarize what we've learned so far in this section \u2014 and we'll add Bootstrap styles along the way."),(0,a.kt)("p",null,"Start by creating a new project directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"section-in-review"),". It will contain an ",(0,a.kt)("inlineCode",{parentName:"p"},".html")," file named ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory."),(0,a.kt)("p",null,"Now let's add some starter code to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en-US\">\n<head>\n  <title>My First Section at Epicodus</title>\n</head>\n<body>\n  <h1>My First Section at Epicodus</h1>\n  <p>\n    I've almost finished my first course section at Epicodus. Here are some of the things I've learned so far:\n  </p>\n  <h2>Command Line</h2>\n  <ul>\n    <li>Navigating my documents through the command line.</li>\n    <li>Creating new files and folders through the command line.</li>\n    <li>Moving and deleting files and folders through the command line.</li>\n    <li>Retrieving my current location from the command line.</li>\n  </ul>\n  <h2>Git and GitHub</h2>\n  <ul>\n    <li>Initializing local Git repository, and create remote GitHub repositories.</li>\n    <li>Tracking and committing changes with Git.</li>\n    <li>Pushing a local Git repository to a remote GitHub repository.</li>\n    <li>Branching a project to make multiple copies.</li>\n    <li>Merging multiple Git branches back together.</li>\n    <li>Cloning down a project from GitHub to my local machine.</li>\n    <li>Publishing a website on GitHub pages.</li>\n  </ul>\n  <h2>HTML</h2>\n  <ul>\n    <li>Using HTML tags to create websites.</li>\n    <li>Indenting and organizing HTML correctly.</li>\n    <li>Incorporating block elements.</li>\n    <li>Including inline elements.</li>\n    <li>Using both spans and divs.</li>\n    <li>Adding classes and ID's to style HTML with CSS.</li>\n  </ul>\n  <h2>CSS</h2>\n  <ul>\n    <li>Creating a stylesheet.</li>\n    <li>Using CSS selectors to specify an HTML element.</li>\n    <li>Writing CSS rules to style particular elements in my HTML.</li>\n    <li>Floating elements to create columns, sidebars, and other alignments.</li>\n    <li>Padding, margins, and the box model.</li>\n    <li>How CSS cascades to apply styles.</li>\n  </ul>\n  <h2>Bootstrap</h2>\n  <ul>\n    <li>Downloading and installing Bootstrap.</li>\n    <li>Adding Bootstrap styles to a website.</li>\n    <li>Navigating Bootstrap documentation.</li>\n    <li>Creating websites with Bootstrap.</li>\n  </ul>\n</body>\n</html>\n")),(0,a.kt)("p",null,"Let's take a look at our site:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Bootstrap+Lessons/example-site-without-bootstrap-updated.png",alt:"example-site-without-bootstrap"})),(0,a.kt)("p",null,"Not very exciting so far. It's time to add Bootstrap!"),(0,a.kt)("h2",{id:"adding-bootstrap"},"Adding Bootstrap"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"As described in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/downloading-and-installing-bootstrap"},"Bootstrap: Downloading & Installing")," lesson, let's download a copy of Bootstrap version 5.2 and place the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," stylesheet into our project's ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," folder."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," We are taking this approach instead of a CDN because it can be useful to take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," file for development purposes. That's also why we aren't using the minified version."),(0,a.kt)("p",null,"Our project directory should be organized like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"section-in-review\n\u251c\u2500\u2500 css\n\u2502\xa0\xa0 \u2514\u2500\u2500 bootstrap.css\n\u2514\u2500\u2500 index.html\n")),(0,a.kt)("p",null,"Then, we'll link this Bootstrap stylesheet in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags of our HTML file:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n<head>\n  <title>My First Section at Epicodus</title>\n  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">\n</head>\n...\n')),(0,a.kt)("p",null,"Remember, when ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," is in a code snippet, this simply means that we've omitted code from the file we're depicting, in order to make it clearer to see where changes have occurred."),(0,a.kt)("h2",{id:"bootstrap-styles"},"Bootstrap Styles"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If we refresh our page, we'll see that our website already looks different:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Bootstrap+Lessons/example-site-with-bootstrap-updated.png",alt:"example-site-with-bootstrap"})),(0,a.kt)("p",null,"This shows that just with loading Bootstrap into our project, we can greatly improve the look of our website. If you don't enjoy styling your websites, installing Bootstrap into your project is a good baseline for your websites. "),(0,a.kt)("p",null,"However, we've hardly scratched the surface of what we can do. Bootstrap provides many styling rules we can apply to our HTML. Let's add one now."),(0,a.kt)("h3",{id:"containers"},"Containers"),(0,a.kt)("p",null,"One of the most commonly-used Bootstrap elements is a ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/layout/containers/"},"container"),". Containers wrap our content and add padding that dynamically increases or decreases in size depending on the user's viewport."),(0,a.kt)("p",null,"We can add a container to our HTML like this:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>My First Section at Epicodus</title>\n  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">\n</head>\n<body>\n  <div class="container">\n\n    ...\n\n  </div>\n</body>\n</html>\n')),(0,a.kt)("p",null,"Here we've placed a div directly inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>")," tags with a class of ",(0,a.kt)("inlineCode",{parentName:"p"},"container"),". Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," is a placeholder for all our body HTML \u2014 don't remove the HTML from your own project."),(0,a.kt)("p",null,"If we refresh the page, we'll see that padding has been added around the edges of our content:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Bootstrap+Lessons/site-with-container-updated.png",alt:"When we add a Bootstrap container, padding is automatically added."})),(0,a.kt)("p",null,"Also, if we resize the width of the browser window, we can see that the amount of padding automatically changes depending on the size of the viewport. When we integrate Bootstrap elements and components into our pages, they're automatically responsive. This is another way that Bootstrap can greatly improve our lives as developers."),(0,a.kt)("p",null,"Bootstrap is essentially a really big CSS stylesheet, with some JavaScript. Earlier, we learned how to ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/styling-with-classes-and-ids"},"add classes to HTML elements")," to style our pages. Adding Bootstrap's built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," class is very similar. But instead of manually defining CSS rules that style anything with the ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," class in our own stylesheet, the Bootstrap stylesheet we included in our project already has CSS rules for the ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," class defined. All we need to do is add this class in order to make use of the CSS in the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," file!"),(0,a.kt)("h3",{id:"typography"},"Typography"),(0,a.kt)("p",null,"Typography includes the style and appearance of text in our webpages, and Bootstrap includes many easy ways to style text."),(0,a.kt)("h4",{id:"blockquotes"},"Blockquotes"),(0,a.kt)("p",null,"We can add ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/content/typography/#blockquotes"},"blockquotes")," to display nicely-formatted quotes on our page."),(0,a.kt)("p",null,"Let's add another section to our site. We'll call it \"Partnering\" and it will contain a quote from one of our partners this section:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n      <h2>Bootstrap</h2>\n      <ul>\n        <li>Downloading and installing Bootstrap.</li>\n        <li>Adding Bootstrap styles to a website.</li>\n        <li>Navigating Bootstrap documentation.</li>\n        <li>Creating websites with Bootstrap.</li>\n      </ul>\n      <h2>Partnering</h2>\n      <figure>\n        <blockquote class="blockquote">\n          <p>"It\'s been really good working with you!"</p>\n        </blockquote>\n        <figcaption class="blockquote-footer">\n          My partner the first day\n        </figcaption>\n      </figure>\n    </div>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"<figure>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<blockquote>"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"<figcaption>")," are all HTML elements. The Bootstrap styles are added via the classes we apply to the elements: ",(0,a.kt)("inlineCode",{parentName:"p"},'class="blockquote"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'class="blockquote-footer"'),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<figure>")," element is used for self-contained content that is a part of the main HTML document. This is most often used for an image or a chart that is related to other HTML on the page. We can also use it to create a block quote. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<figcaption>")," element is always used within the ",(0,a.kt)("inlineCode",{parentName:"p"},"<figure>")," elements, and it's used to provide a caption to the figure. In our case, the figure is a block quote represented by the ",(0,a.kt)("inlineCode",{parentName:"p"},"<blockquote>")," element."),(0,a.kt)("p",null,"Check out the results:"),(0,a.kt)("img",{width:"75%",height:"auto",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Week-1-2020-images/Bootstrap+images/blockquote.png",alt:"A Bootstrap blockquote"}),(0,a.kt)("p",null,"To learn about other typographical improvements we can make to our webpage, visit the Bootstrap docs on ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/content/typography/"},"typography"),"."),(0,a.kt)("h3",{id:"more-built-in-classes"},"More Built-in Classes"),(0,a.kt)("p",null,"Another great feature of Bootstrap is the wide variety of built-in classes we can add to almost any element."),(0,a.kt)("p",null,"Let's highlight a few concepts we found enjoyable during this course section in green. We can do this by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"bg-success")," class to various ",(0,a.kt)("inlineCode",{parentName:"p"},"<li>")," tags on our page."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bg"),' stands for "background", and ',(0,a.kt)("inlineCode",{parentName:"p"},"success")," is a name used throughout Bootstrap to refer to a particular shade of green:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n      <h2>Git and GitHub</h2>\n      <ul>\n\n         ...\n\n        <li class="bg-success">Publishing a website on GitHub pages.</li>\n\n         ...\n\n      </ul>\n      <h2>CSS</h2>\n      <ul>\n\n        ...\n\n        <li class="bg-success">How CSS cascades to apply styles.</li>\n      </ul>\n      <h2>Bootstrap</h2>\n      <ul>\n\n        ...\n\n        <li class="bg-success">Creating websites with Bootstrap.</li>\n...\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Bootstrap+Lessons/bootstrap-bg-success-updated.png",alt:"The `bg-success` class adds a green background to our list items."})),(0,a.kt)("p",null,"Similarly, we could use the ",(0,a.kt)("inlineCode",{parentName:"p"},"bg-info")," class on our existing blockquote to add a blue background. Try it out on some of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<li>"),"s in the project."),(0,a.kt)("p",null,"To see all of the built-in classes for background colors, ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/utilities/background/#background-color"},"visit the background color documentation"),"."),(0,a.kt)("p",null,"To see a list of the ways that we can style text, ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/utilities/colors/"},"visit the text color documentation")," and the more general documentation for ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/utilities/text/"},"text"),"."),(0,a.kt)("h3",{id:"cards"},"Cards"),(0,a.kt)("p",null,"Another simple effect that can easily organize a page is a ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/components/card/"},"card"),". It allows us to organize content inside a card. Cards are also automatically responsive and will resize automatically as the user's viewport changes in size."),(0,a.kt)("p",null,"Let's update our HTML to use a Bootstrap card, and then take a look. Add the following code below the block quote that we added earlier:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n  <div class="card">\n    <div class="card-body">\n      <h5 class="card-title">Command Line</h5>\n      <ul class="card-text">\n        <li>Navigating my documents through the command line.</li>\n        <li>Creating new files and folders through the command line.</li>\n        <li>Moving and deleting files and folders through the command line.</li>\n        <li>Retrieving my current location from the command line.</li>\n      </ul>\n    </div>\n  </div>\n...\n')),(0,a.kt)("p",null,"Our card has a class of ",(0,a.kt)("inlineCode",{parentName:"p"},'"card"')," and then we have various classes inside the card depending on the element: ",(0,a.kt)("inlineCode",{parentName:"p"},'"card-body"')," for the body of the card, ",(0,a.kt)("inlineCode",{parentName:"p"},'"card-title"')," for the title, and ",(0,a.kt)("inlineCode",{parentName:"p"},'"card-text"')," for the text. Here's what it looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Week-1-2020-images/Bootstrap+images/bootstrap-card.png",alt:"This is an example of a very basic card."})),(0,a.kt)("p",null,"This is a very basic card and we can do a lot more with it \u2014 for instance, there's an option to add images and links that fit inside the card as well. We can also adjust set the sit of our card by settings the ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," attribute on the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," for the card:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n  <div class="card">\n    ...\n  </div>\n...\n')),(0,a.kt)("p",null,"To learn more, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/components/card/"},"documentation on Bootstrap cards"),"."),(0,a.kt)("h2",{id:"custom-styles"},"Custom Styles"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"It's common to start with a Bootstrap theme or stylesheet and then customize it further. To do this, we need to create our own stylesheet, which we can then use to override Bootstrap's styles. This is the right way to customize our styles. Don't ever go into a Bootstrap CSS or JS file and customize the code there. While it will technically \"work\" to do this, it's very bad practice to directly edit an external framework."),(0,a.kt)("p",null,"Let's say we want to override Bootstrap styles with our own styles. Here's how we can do it. The first step is to ensure that your custom stylesheet(s) are listed below the bootstrap style sheet in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags of your HTML document. Any time two stylesheets have rules about the same element, the rules in the latter stylesheet will override the rules in the former."),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n<head>\n  <title>My First Section at Epicodus</title>\n  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n</head>\n...\n')),(0,a.kt)("p",null,"Then, we can define what our custom styles we'll be. In this example, we want the ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>")," tags to be  bold."),(0,a.kt)("div",{class:"filename"},"css/styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"h1 {\n  font-weight: bold;\n}\n")),(0,a.kt)("p",null,"Our stylesheets (both Bootstrap and our custom CSS) get loaded from top down. Here, the first stylesheet (",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.css"),") has instructions for ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>")," elements to appear a certain way. When our second stylesheet is loaded, it also instructs the ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>")," headings to appear a certain way. This second stylesheet's ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>")," rule  overrides the ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>")," styles from the first stylesheet simply because it's loaded last."),(0,a.kt)("p",null,"Let's temporarily switch the order of our stylesheets and see what happens."),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>My First Section at Epicodus</title>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">\n</head>\n<body>\n  <h1>My First Section at Epicodus</h1>\n  ...\n</body>\n</html>\n\n')),(0,a.kt)("p",null,"If we refresh our page, the bolded text is gone. Even though our CSS rules are still present in ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.css"),", our custom styles are now loading first and Bootstrap's styles are loading second. Bootstrap styles are therefore overriding our custom styles so we don't see our bold text."),(0,a.kt)("p",null,"This is why we ",(0,a.kt)("strong",{parentName:"p"},"always want to link our custom stylesheets after Bootstrap stylesheets.")," "),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"While our site still looks relatively plain, we've still added a basic level of style that makes our webpage look more modern and polished than it did before. What's more, including Bootstrap in our projects automatically makes our application responsive to different screen sizes! You certainly aren't expected to be an expert on styling \u2014 but the nice thing about Bootstrap is that you don't have to be. "),(0,a.kt)("p",null,"By the way, we can do a lot more with Bootstrap! In fact, we've just scratched the surface with what we've covered in this lesson. We highly recommend that you experiment further with Bootstrap in the projects you create. "),(0,a.kt)("p",null,"Even though there's more of Bootstrap to explore, we won't be covering how to implement any additional Bootstrap features. The next learning opportunity for us is to learn how to navigate Bootstrap's documentation and learn how to teach ourselves how to implement new features without the help of an outside guide. While there's nothing wrong with using guides, learning how to navigate and understand official documentation in order to teach yourself something new is a core skill that junior developers need to foster. "),(0,a.kt)("p",null,"So up next, we'll take a walk through Bootstrap's official documentation and learn some practical tips for navigation and exploration. Of course the best practice is actually reading the documentation and using it"))}h.isMDXComponent=!0}}]);