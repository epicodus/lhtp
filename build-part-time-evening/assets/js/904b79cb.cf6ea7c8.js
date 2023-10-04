"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[60635],{30876:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7896),i=(a(2784),a(30876));const r={title:"Managing Images with webpack",id:"managing-images-with-webpack",slug:"managing-images-with-webpack",hide_table_of_contents:!0,sidebar_position:7,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3b_managing_images_with_webpack.md"},o=void 0,s={unversionedId:"intermediate-javascript/test-driven-development-part-2/managing-images-with-webpack",id:"intermediate-javascript/test-driven-development-part-2/managing-images-with-webpack",title:"Managing Images with webpack",description:"The primary focus of this section should be test-driven development, including writing more complex business logic along with tests. However, many students also want to incorporate images into their projects. While this should be a lower priority than using test-driven development (and adding images isn't required for this section's project), you are welcome to experiment with adding images if you have completed other key aspects of your project.",source:"@site/docs/intermediate-javascript/6_test-driven-development-part-2/3b-managing-images-with-webpack.md",sourceDirName:"intermediate-javascript/6_test-driven-development-part-2",slug:"/intermediate-javascript/test-driven-development-part-2/managing-images-with-webpack",permalink:"/intermediate-javascript/test-driven-development-part-2/managing-images-with-webpack",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Managing Images with webpack",id:"managing-images-with-webpack",slug:"managing-images-with-webpack",hide_table_of_contents:!0,sidebar_position:7,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3b_managing_images_with_webpack.md"},sidebar:"intermediate-javascript",previous:{title:"Weekday Calculator, Haiku Creator, RPG (Week-Long Project) - Part 2",permalink:"/intermediate-javascript/test-driven-development-part-2/weekday-calculator-haiku-creator-rpg-week-long-project---part-2"},next:{title:"Developer Reality: You Are the Project",permalink:"/intermediate-javascript/test-driven-development-part-2/developer-reality-you-are-the-project"}},l={},p=[{value:"Why webpack for Images?",id:"why-webpack-for-images",level:2},{value:"Configuring webpack for Images",id:"configuring-webpack-for-images",level:2},{value:"Saving Images in a Project",id:"saving-images-in-a-project",level:2},{value:"Rendering webpack-Bundled Images",id:"rendering-webpack-bundled-images",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The primary focus of this section should be test-driven development, including writing more complex business logic along with tests. However, many students also want to incorporate images into their projects. While this should be a lower priority than using test-driven development (and adding images isn't required for this section's project), you are welcome to experiment with adding images if you have completed other key aspects of your project."),(0,i.kt)("h2",{id:"why-webpack-for-images"},"Why webpack for Images?"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now that we are using webpack as a module bundler, all of our source code is being combined in a single ",(0,i.kt)("em",{parentName:"p"},"dist")," folder. For that reason, we need to use webpack to manage images and correctly add them to our ",(0,i.kt)("em",{parentName:"p"},"dist")," directory."),(0,i.kt)("h2",{id:"configuring-webpack-for-images"},"Configuring webpack for Images"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll need to add a package, as well as configure an asset module in order to manage images with webpack. First, we'll install the ",(0,i.kt)("strong",{parentName:"p"},"html-loader")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install html-loader@4.2.0 --save-dev\n")),(0,i.kt)("p",null,"Next, we need to configure webpack to use html-loader, as well as handle our images using an asset module. Asset modules are a feature of webpack 5 that allow us to use asset files, such as images or fonts, without needing to install additional loaders. We'll create two new entries in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rules")," array within the ",(0,i.kt)("inlineCode",{parentName:"p"},"module")," object of ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,i.kt)("div",{class:"filename"},"webpack.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n\n{\n  test: /\\.(gif|png|avif|jpe?g)$/,\n  type: "asset/resource",\n  generator: {\n    filename: "[name][ext]"\n    publicPath: "assets/images/",\n    outputPath: "assets/images/",\n  },\n},\n{\n  test:/\\.html$/,\n  use: [\n    \'html-loader\'\n  ]\n},\n\n...\n')),(0,i.kt)("p",null,"Let's walk through this new code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The first ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," section states which file types this asset module will be applied to. We list ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.(gif|png|avif|jpe?g)$/")," to instruct webpack to handle ",(0,i.kt)("inlineCode",{parentName:"p"},".gif"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".png"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".jpg"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".avif"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".jpeg")," extensions. If there is another file extension that we want the asset module to handle, we simply need to add it to the list in the webpack configuration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type")," specifies ",(0,i.kt)("inlineCode",{parentName:"p"},"asset/resources")," as the type of asset module responsible for handling these file types. This module has more settings than other modules or loaders, which we can customize by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"generator")," object with additional settings in key-value pairs:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filename")," tells webpack what to name the image file it places in ",(0,i.kt)("em",{parentName:"li"},"dist"),". By stating ",(0,i.kt)("inlineCode",{parentName:"li"},"[name].[ext]"),", we tell it to simply use the file's existing name and extension."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publicPath")," tells it where these files will live in our project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outputPath")," tells it where in ",(0,i.kt)("em",{parentName:"li"},"dist")," it should place this image."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The second ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," section begins a new rule for  ",(0,i.kt)("inlineCode",{parentName:"p"},".html")," files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The value corresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"use")," key in this rule states ",(0,i.kt)("inlineCode",{parentName:"p"},".html")," file types should have our new ",(0,i.kt)("inlineCode",{parentName:"p"},"html-loader")," applied to them. As stated in this loader's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/html-loader"},"GitHub Documentation"),", this dependency invokes webpack to load the corresponding image resource for any ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," tags it spots in our HTML."))),(0,i.kt)("h2",{id:"saving-images-in-a-project"},"Saving Images in a Project"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can now begin adding images to our site. There's no strict, universal rule for where to place image files. However, ",(0,i.kt)("strong",{parentName:"p"},"it's common practice to house resources such as images, fonts, and icons in an ",(0,i.kt)("em",{parentName:"strong"},"assets/")," directory that contains corresponding subdirectories for each type of resource"),", such as "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assets/images/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assets/fonts/")," ")),(0,i.kt)("p",null,"We've configured webpack to use an asset module to output images to ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/assets/images/"),", and we'll go ahead and use this same naming for locating our images in our source code: ",(0,i.kt)("inlineCode",{parentName:"p"},"src/assets/images/"),". Go ahead and create this directory and subdirectory now."),(0,i.kt)("p",null,"Next, we'll add an image. For this example we'll download ",(0,i.kt)("a",{parentName:"p",href:"https://unsplash.com/photos/-Go4DH2pZbc"},"this free stock image of a puppy")," from ",(0,i.kt)("a",{parentName:"p",href:"https://unsplash.com"},"Unsplash.com")," and save it in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"stock-puppy-photo.jpg")," in our ",(0,i.kt)("inlineCode",{parentName:"p"},"src/assets/images")," directory."),(0,i.kt)("h2",{id:"rendering-webpack-bundled-images"},"Rendering webpack-Bundled Images"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now let's add our image to our HTML so we can see it in the browser. We'll add the following ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," tag to ",(0,i.kt)("em",{parentName:"p"},"index.html"),":"),(0,i.kt)("div",{class:"filename"},"src/index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html lang="en-US">\n<head>\n</head>\n<body>\n  <div>Hello world!</div>\n  <img src="./assets/images/stock-puppy-photo.jpg" alt="such a pup!"/>\n</body>\n</html>\n')),(0,i.kt)("p",null,"We link to the location of our new image and add an ",(0,i.kt)("inlineCode",{parentName:"p"},"alt")," property."),(0,i.kt)("p",null,"Let's see our new image in action. Close the project's development server if it's open, and run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm run start"),"."))}c.isMDXComponent=!0}}]);