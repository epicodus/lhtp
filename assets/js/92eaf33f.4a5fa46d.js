"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[93082],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?i.createElement(b,r(r({ref:n},u),{},{components:t})):i.createElement(b,r({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const l={title:"15. Improving Development by Automating Clean Up Tasks",id:"improving_development_by_automating_clean_up_tasks",slug:"improving_development_by_automating_clean_up_tasks",hide_table_of_contents:!0,sidebar_position:15,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_test-driven-development/0o_cleaning_up.md"},r=void 0,o={unversionedId:"intermediate_javascript_part_time_evening/test-driven-development/improving_development_by_automating_clean_up_tasks",id:"intermediate_javascript_part_time_evening/test-driven-development/improving_development_by_automating_clean_up_tasks",title:"15. Improving Development by Automating Clean Up Tasks",description:"Right now, the dist folder is empty. Run $ npm run build now and webpack will generate two files, bundle.js and index.html, and add them to the dist folder. In the future, anytime time we re-run $ npm run build, webpack creates a new bundle.js and index.html file and replaces any existing files in the dist folder.",source:"@site/docs/intermediate_javascript_part_time_evening/5_test-driven-development/0o_cleaning_up.md",sourceDirName:"intermediate_javascript_part_time_evening/5_test-driven-development",slug:"/intermediate_javascript_part_time_evening/test-driven-development/improving_development_by_automating_clean_up_tasks",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development/improving_development_by_automating_clean_up_tasks",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"15. Improving Development by Automating Clean Up Tasks",id:"improving_development_by_automating_clean_up_tasks",slug:"improving_development_by_automating_clean_up_tasks",hide_table_of_contents:!0,sidebar_position:15,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_test-driven-development/0o_cleaning_up.md"},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"14. Processing HTML with a webpack Plugin",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development/processing_html_with_a_webpack_plugin"},next:{title:"16. Improving Development with Source Maps for Debugging",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development/improving_development_with_source_maps_for_debugging"}},p={},s=[{value:"Using CleanWebpackPlugin",id:"using-cleanwebpackplugin",level:2}],u={toc:s},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Right now, the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder is empty. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run build")," now and webpack will generate two files, ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),", and add them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder. In the future, anytime time we re-run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run build"),", webpack creates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file and replaces any existing files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder."),(0,a.kt)("p",null,"Well, what if we change webpack's output to another name?"),(0,a.kt)("div",{class:"filename"},"webpack.config.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'output.js', // new name!!\n    path: path.resolve(__dirname, 'dist')\n  },\n  ...\n}\n")),(0,a.kt)("p",null,"If we re-run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run build"),", our ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder will now contains these three files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dist/\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 bundle.js\n\u2514\u2500\u2500 output.js\n")),(0,a.kt)("p",null,"Notably, webpack won't automatically delete the old ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle.js")," file. The same is true for any other assets that get added to our ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder, like images. (We'll work with images later in this course section.) "),(0,a.kt)("p",null,"In short, as we write code, add new assets, and change our config options, our ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder will get cluttered. While we won't be changing the name of our bundle to ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js")," \u2014 we'll always stick with ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle.js")," \u2014 we can improve our developer experience by configuring webpack to automatically clean up after us. We'll do this with another plugin. "),(0,a.kt)("p",null,"By the end of this lesson, you should have CleanWebpackPlugin installed and configured in your Shape Tracker project."),(0,a.kt)("h2",{id:"using-cleanwebpackplugin"},"Using CleanWebpackPlugin"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We can configure webpack to use ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/clean-webpack-plugin"},"CleanWebpackPlugin")," so that webpack clears the files inside of our ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder before adding any new ones, each time run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run build")," to bundle our code and generate an HTML file. "),(0,a.kt)("p",null,"In the terminal, navigate to the root of the Shape Tracker project and enter the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install clean-webpack-plugin@4.0.0 --save-dev\n")),(0,a.kt)("p",null,"Then, we'll add the plugin to our configuration file:"),(0,a.kt)("div",{class:"filename"},"webpack.config.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n  plugins: [\n    new CleanWebpackPlugin(), // new line\n    new HtmlWebpackPlugin({\n      title: 'Shape Tracker',\n      template: './src/index.html',\n      inject: 'body'\n    })\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [\n          'style-loader',\n          'css-loader'\n        ]\n      }\n    ]\n  }\n};\n")),(0,a.kt)("p",null,"We've added two lines to our ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file. The new lines have comments to indicate where they are."),(0,a.kt)("p",null,"Hopefully this pattern is starting to look familiar."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First we require the new plugin and save it in a variable. This makes it so that we can call on the plugin within the ",(0,a.kt)("inlineCode",{parentName:"li"},"webpack.config.js")," file."),(0,a.kt)("li",{parentName:"ul"},"Then we add it to ",(0,a.kt)("inlineCode",{parentName:"li"},"module.exports")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," section."),(0,a.kt)("li",{parentName:"ul"},"Within ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins"),", we create a new instance of the plugin.")),(0,a.kt)("p",null,"The default behavior for CleanWebpackPlugin is to clear the files inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder. Now when we run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run build"),", webpack will automatically clean out the contents of our ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder before creating new bundle files. "),(0,a.kt)("p",null,"Depending on your computer, you may or may not be able to actually see the files being deleted and then recreated. In fact, it looks like nothing is happening at all. If this is the case for you, there's additional configurations we can set for CleanWebpackPlugin that will confirm that our files are being deleted. Update ",(0,a.kt)("inlineCode",{parentName:"p"},"new CleanWebpackPlugin()")," with this code:"),(0,a.kt)("div",{class:"filename"},"webpack.config.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new CleanWebpackPlugin({\n  verbose: true\n}) \n")),(0,a.kt)("p",null,"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"verbose: true")," will tell webpack to include terminal output about CleanWebpackPlugin. With this configuration set, when we now run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run build"),", we'll see two new lines in the terminal output: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clean-webpack-plugin: removed dist\\bundle.js")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clean-webpack-plugin: removed dist\\index.html"))),(0,a.kt)("p",null,"See if you can find those new lines in the output below!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ npm run build\n\n> shape-tracker@1.0.0 build\n> webpack --mode=development\n\nclean-webpack-plugin: removed dist\\bundle.js\nclean-webpack-plugin: removed dist\\index.html\nHash: 9f99a3aa8081bb8f3eaf\nVersion: webpack 4.46.0\nTime: 765ms\nBuilt at: 06/27/2022 1:48:28 PM\n     Asset       Size  Chunks             Chunk Names\n bundle.js     18 KiB    main  [emitted]  main\nindex.html  631 bytes          [emitted]\nEntrypoint main = bundle.js\n[./node_modules/css-loader/dist/cjs.js!./src/css/styles.css] 186 \nbytes {main} [built]\n[./src/css/styles.css] 410 bytes {main} [built]\n[./src/index.js] 789 bytes {main} [built]\n[./src/triangle.js] 256 bytes {main} [built]\n    + 2 hidden modules\nChild html-webpack-plugin for "index.html":\n     1 asset\n    Entrypoint undefined = index.html\n    [./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html] 805 bytes {0} [built]\n    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]\n    [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]\n        + 1 hidden module\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note that adding the configuration ",(0,a.kt)("inlineCode",{parentName:"strong"},"verbose: true")," is optional"),". You can add it if you want to your own Shape Tracker project, but we won't include it in the LearnHowToProgram's Shape Tracker project. "),(0,a.kt)("p",null,"We could also configure this plugin to clean multiple directories and exclude specific files, as well, but that's for further exploration. "),(0,a.kt)("p",null,"In the next lesson, we'll add another tool that's great for development: source maps."))}c.isMDXComponent=!0}}]);