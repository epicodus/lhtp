"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[4930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"2. Managing Images with webpack",id:"managing_images_with_webpack",slug:"managing_images_with_webpack",hide_table_of_contents:!0,sidebar_position:43,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4_test-driven-development-and-environments-with-javascript/3b_managing_images_with_webpack.md"},o=void 0,s={unversionedId:"intermediate_javascript/test-driven-development-and-environments-with-javascript/managing_images_with_webpack",id:"intermediate_javascript/test-driven-development-and-environments-with-javascript/managing_images_with_webpack",title:"2. Managing Images with webpack",description:"The primary focus of this section should be test-driven development, including writing more complex business logic along with tests. However, many students also want to incorporate images into their projects. While this should be a lower priority than using test-driven development (and adding images isn't required for this section's project), you are welcome to experiment with adding images if you have completed other key aspects of your project.",source:"@site/docs/intermediate_javascript/4_test-driven-development-and-environments-with-javascript/3b_managing_images_with_webpack.md",sourceDirName:"intermediate_javascript/4_test-driven-development-and-environments-with-javascript",slug:"/intermediate_javascript/test-driven-development-and-environments-with-javascript/managing_images_with_webpack",permalink:"/lhtp/intermediate_javascript/test-driven-development-and-environments-with-javascript/managing_images_with_webpack",draft:!1,tags:[],version:"current",sidebarPosition:43,frontMatter:{title:"2. Managing Images with webpack",id:"managing_images_with_webpack",slug:"managing_images_with_webpack",hide_table_of_contents:!0,sidebar_position:43,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4_test-driven-development-and-environments-with-javascript/3b_managing_images_with_webpack.md"},sidebar:"intermediate_javascript",previous:{title:"1. Haiku Creator, RPG, Sudoku Solver (Two-Day Project) - Part 1",permalink:"/lhtp/intermediate_javascript/test-driven-development-and-environments-with-javascript/haiku_creator_rpg_sudoku_solver_two_day_project___part_1"},next:{title:"3. ES6 Array and Object Destructuring",permalink:"/lhtp/intermediate_javascript/test-driven-development-and-environments-with-javascript/es6_array_and_object_destructuring"}},l={},p=[{value:"Why webpack for Images?",id:"why-webpack-for-images",level:2},{value:"Configuring webpack for Images",id:"configuring-webpack-for-images",level:2},{value:"Saving Images in a Project",id:"saving-images-in-a-project",level:2},{value:"Rendering webpack-Bundled Images",id:"rendering-webpack-bundled-images",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The primary focus of this section should be test-driven development, including writing more complex business logic along with tests. However, many students also want to incorporate images into their projects. While this should be a lower priority than using test-driven development (and adding images isn't required for this section's project), you are welcome to experiment with adding images if you have completed other key aspects of your project."),(0,i.kt)("h2",{id:"why-webpack-for-images"},"Why webpack for Images?"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now that we are using webpack as a module bundler, all of our source code is being combined in a single ",(0,i.kt)("em",{parentName:"p"},"dist")," folder. For that reason, we need to use webpack to manage images and correctly add them to our ",(0,i.kt)("em",{parentName:"p"},"dist")," directory."),(0,i.kt)("h2",{id:"configuring-webpack-for-images"},"Configuring webpack for Images"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll need to add a package, as well as configure an asset module in order to manage images with webpack. First, we'll install the ",(0,i.kt)("strong",{parentName:"p"},"html-loader")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install html-loader@4.2.0 --save-dev\n")),(0,i.kt)("p",null,"Next, we need to configure webpack to use html-loader, as well as handle our images using an asset module. Asset modules are a feature of webpack 5 that allow us to use asset files, such as images or fonts, without needing to install additional loaders. We'll create two new entries in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rules")," array within the ",(0,i.kt)("inlineCode",{parentName:"p"},"module")," object of ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,i.kt)("div",{class:"filename"},"webpack.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n\n{\n  test: /\\.(gif|png|avif|jpe?g)$/,\n  type: "asset/resource",\n  generator: {\n    filename: "[name][ext]"\n    publicPath: "assets/images/",\n    outputPath: "assets/images/",\n  },\n},\n{\n  test:/\\.html$/,\n  use: [\n    \'html-loader\'\n  ]\n},\n\n...\n')),(0,i.kt)("p",null,"Let's walk through this new code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The first ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," section states which file types this asset module will be applied to. We list ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.(gif|png|avif|jpe?g)$/")," to instruct webpack to handle ",(0,i.kt)("inlineCode",{parentName:"p"},".gif"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".png"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".jpg"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".avif"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".jpeg")," extensions. If there is another file extension that we want the asset module to handle, we simply need to add it to the list in the webpack configuration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type")," specifies ",(0,i.kt)("inlineCode",{parentName:"p"},"asset/resources")," as the type of asset module responsible for handling these file types. This module has more settings than other modules or loaders, which we can customize by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"generator")," object with additional settings in key-value pairs:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filename")," tells webpack what to name the image file it places in ",(0,i.kt)("em",{parentName:"li"},"dist"),". By stating ",(0,i.kt)("inlineCode",{parentName:"li"},"[name].[ext]"),", we tell it to simply use the file's existing name and extension."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publicPath")," tells it where these files will live in our project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outputPath")," tells it where in ",(0,i.kt)("em",{parentName:"li"},"dist")," it should place this image."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The second ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," section begins a new rule for  ",(0,i.kt)("inlineCode",{parentName:"p"},".html")," files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The value corresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"use")," key in this rule states ",(0,i.kt)("inlineCode",{parentName:"p"},".html")," file types should have our new ",(0,i.kt)("inlineCode",{parentName:"p"},"html-loader")," applied to them. As stated in this loader's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/html-loader"},"GitHub Documentation"),", this dependency invokes webpack to load the corresponding image resource for any ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," tags it spots in our HTML."))),(0,i.kt)("h2",{id:"saving-images-in-a-project"},"Saving Images in a Project"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can now begin adding images to our site. There's no strict, universal rule for where to place image files. However, ",(0,i.kt)("strong",{parentName:"p"},"it's common practice to house resources such as images, fonts, and icons in an ",(0,i.kt)("em",{parentName:"strong"},"assets/")," directory that contains corresponding subdirectories for each type of resource"),", such as "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assets/images/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assets/fonts/")," ")),(0,i.kt)("p",null,"We've configured webpack to use an asset module to output images to ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/assets/images/"),", and we'll go ahead and use this same naming for locating our images in our source code: ",(0,i.kt)("inlineCode",{parentName:"p"},"src/assets/images/"),". Go ahead and create this directory and subdirectory now."),(0,i.kt)("p",null,"Next, we'll add an image. For this example we'll download ",(0,i.kt)("a",{parentName:"p",href:"https://unsplash.com/photos/-Go4DH2pZbc"},"this free stock image of a puppy")," from ",(0,i.kt)("a",{parentName:"p",href:"https://unsplash.com"},"Unsplash.com")," and save it in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"stock-puppy-photo.jpg")," in our ",(0,i.kt)("inlineCode",{parentName:"p"},"src/assets/images")," directory."),(0,i.kt)("h2",{id:"rendering-webpack-bundled-images"},"Rendering webpack-Bundled Images"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now let's add our image to our HTML so we can see it in the browser. We'll add the following ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," tag to ",(0,i.kt)("em",{parentName:"p"},"index.html"),":"),(0,i.kt)("div",{class:"filename"},"src/index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html lang="en-US">\n<head>\n</head>\n<body>\n  <div>Hello world!</div>\n  <img src="./assets/images/stock-puppy-photo.jpg" alt="such a pup!"/>\n</body>\n</html>\n')),(0,i.kt)("p",null,"We link to the location of our new image and add an ",(0,i.kt)("inlineCode",{parentName:"p"},"alt")," property."),(0,i.kt)("p",null,"Let's see our new image in action. Close the project's development server if it's open, and run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm run start"),"."))}c.isMDXComponent=!0}}]);