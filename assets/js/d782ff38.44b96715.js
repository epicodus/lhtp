"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25849],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var i=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,i,o=function(t,e){if(null==t)return{};var a,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=i.createContext({}),p=function(t){var e=i.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},u=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},h="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=p(a),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return a?i.createElement(m,n(n({ref:e},u),{},{components:a})):i.createElement(m,n({ref:e},u))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,n=new Array(r);n[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[h]="string"==typeof t?t:o,n[1]=s;for(var p=2;p<r;p++)n[p]=a[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61052:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(87462),o=(a(67294),a(3905));const r={title:"Further Exploration: Data Visualization",id:"further_exploration_data_visualization",slug:"further_exploration_data_visualization",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/11_react-with-apis-part-2/2b_further_exploration_data_visualization.md"},n=void 0,s={unversionedId:"react_part_time_evening/react-with-apis-part-2/further_exploration_data_visualization",id:"react_part_time_evening/react-with-apis-part-2/further_exploration_data_visualization",title:"Further Exploration: Data Visualization",description:"Data visualization is the process of creating a visual representation of information. Data visualization can make data really pop. It's a tool for making information more digestible, immersive, and generally interesting.",source:"@site/docs/react_part_time_evening/11_react-with-apis-part-2/2b_further_exploration_data_visualization.md",sourceDirName:"react_part_time_evening/11_react-with-apis-part-2",slug:"/react_part_time_evening/react-with-apis-part-2/further_exploration_data_visualization",permalink:"/lhtp/react_part_time_evening/react-with-apis-part-2/further_exploration_data_visualization",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Further Exploration: Data Visualization",id:"further_exploration_data_visualization",slug:"further_exploration_data_visualization",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/11_react-with-apis-part-2/2b_further_exploration_data_visualization.md"},sidebar:"react_part_time_evening",previous:{title:"Further Exploration: Creating a Custom React Environment",permalink:"/lhtp/react_part_time_evening/react-with-apis-part-2/further_exploration_creating_a_custom_react_environment"},next:{title:"Further Exploration: Animations with React",permalink:"/lhtp/react_part_time_evening/react-with-apis-part-2/further_exploration_animations_with_react"}},l={},p=[{value:"D3.js",id:"d3js",level:3},{value:"Chart.js",id:"chartjs",level:3},{value:"three.js",id:"threejs",level:3},{value:"Getting Started",id:"getting-started",level:3}],u={toc:p},h="wrapper";function c(t){let{components:e,...a}=t;return(0,o.kt)(h,(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data visualization is the process of creating a visual representation of information. Data visualization can make data really pop. It's a tool for making information more digestible, immersive, and generally interesting."),(0,o.kt)("p",null,"In this lesson, we'll cover three of the most popular data visualization libraries. You may wish to build a portfolio piece or capstone process around data visualization \u2014 or you may wish to add a small interactive chart to make your application stand out further. At the very least, you should have a basic understanding of what these libraries do \u2014 data visualization is a valuable job skill \u2014 and it's also a great way to differentiate your skill set from other junior developers applying for the same jobs."),(0,o.kt)("p",null,"After giving a brief overview of three data visualization tools, we'll provide a recommended structure for exploring these tools further on your own."),(0,o.kt)("h3",{id:"d3js"},"D3.js"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://d3js.org/"},"D3.js")," is the most popular and well-known library for data visualization. Note that we are making a small but important distinction here: while D3.js is excellent for data visualization, it can do many other things as well. In fact, trying to learn D3.js all at once is too overwhelming \u2014 and unnecessary as well. For this reason, if you choose to use D3.js, focus on what you want your data visualization to do instead of what D3.js ",(0,o.kt)("em",{parentName:"p"},"can")," do \u2014 because there will be a lot of D3.js functionality you won't need for your use case."),(0,o.kt)("p",null,"D3.js was created by Mike Bostock, who used it to create visualizations at the New York Times before moving on to found his own company Observable. You can take a look at some of his New York Times visualizations ",(0,o.kt)("a",{parentName:"p",href:"https://bost.ocks.org/mike/"},"here"),". These are powerful examples of what we can do with data visualization."),(0,o.kt)("p",null,"You can also see excellent examples of D3.js at work ",(0,o.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/gallery"},"here"),"."),(0,o.kt)("p",null,"Combining D3.js with React applications can be challenging. This is because both React and D3.js manipulate the DOM \u2014 and both have their own ways of doing things."),(0,o.kt)("p",null,"There are numerous tutorials online to combine React and D3.js \u2014 and making a vanilla JavaScript application with D3.js is also an option if you're determined to explore D3.js but don't want to combine it with React."),(0,o.kt)("p",null,"Another option to consider is the ",(0,o.kt)("a",{parentName:"p",href:"https://react-d3-library.github.io/"},"React D3 library"),", which compiles D3.js code into React components."),(0,o.kt)("p",null,"Ultimately, while D3.js has a steep learning curve \u2014 and takes a little extra work to combine with React \u2014 it has a huge community, lots of plugins, and lots of online tutorials and support. It's by far the most popular library for data visualization for a reason."),(0,o.kt)("h3",{id:"chartjs"},"Chart.js"),(0,o.kt)("p",null,"If complex data visualization seems too overwhelming but you're interested in adding a few charts to your application, ",(0,o.kt)("a",{parentName:"p",href:"https://www.chartjs.org/"},"Chart.js")," is a great option. As its name implies, Chart.js is great for adding charts including line, bar and pie charts among others. These charts go inside what's called a \"canvas.\" Chart.js can also be used for other data visualization needs as well. While it's not quite as popular as D3.js, it's easier to implement. You can see examples of charts and other visualizations made with Chart.js ",(0,o.kt)("a",{parentName:"p",href:"https://www.chartjs.org/samples/latest/"},"here"),"."),(0,o.kt)("p",null,"There's also a helpful library called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jerairrest/react-chartjs-2"},"react-chartjs-2")," that provides a React wrapper for adding Chart.js visualizations to React applications. This library makes it much easier to implement Chart.js. However, we recommend trying to integrate charts into React without this library first. It's not too difficult \u2014 and it will provide some interesting problem-solving in terms of getting multiple libraries to work together."),(0,o.kt)("h3",{id:"threejs"},"three.js"),(0,o.kt)("p",null,"While ",(0,o.kt)("a",{parentName:"p",href:"https://threejs.org/"},"three.js")," isn't as widely used as either D3.js or Chart.js, it's still very popular. It also has an interesting approach to rendering objects. We start with a scene (which is equivalent to a canvas in Chart.js). Then we can use cameras to determine how we will view the objects we create. We use a renderer to actually render the scene. We use mesh and materials to fill in these objects. It's also relatively straightforward to integrate three.js with React. We recommend starting with ",(0,o.kt)("a",{parentName:"p",href:"https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene"},"Creating a Scene")," in the documentation. See if you can figure out how to place the object created in this basic tutorial in a React application. There are walk-throughs online that demonstrate how to do this."),(0,o.kt)("p",null,"In addition, there's also the well-supported ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-spring/react-three-fiber"},"react-three-fiber")," library, which allows developers to use three.js with React. It was developed by the maker of react-spring, which we will discuss in the next lesson on UI animations."),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://threejs.org/examples/"},"examples")," of three.js at work."),(0,o.kt)("h3",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Getting started with data visualization can be overwhelming. If you choose to explore this topic further, we recommend following the steps below. You don't have to complete all of the steps \u2014 even just doing the first one or two can give you some valuable layperson's knowledge on these tools."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Take a look at the documentation. You don't need to read extensively yet \u2014 just get a feel for the library and take a quick look at any tutorials. Do you see anything you want to explore further? During this step, you should get a general sense of what the library does and how it does it. (For instance, what exactly is a canvas or a scene?) We recommend taking a look at the documentation for all three tools mentioned above (and perhaps others that interest you), so you can get a sense of which one you'd most like to work with.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Take a look at the library's provided examples. If you already have a specific visualization in mind for a project, do you see anything in the examples that could get you started? If you don't have a visualization in mind yet, do you see anything that inspires you that you might want to recreate? If so, you'll be able to use the source code as a reference for your own exploration.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"By this point, you've likely chosen a specific library to work with. Complete a beginner tutorial. Don't worry about incorporating React yet. At this point, we just want to get a better understanding of how the library works. That likely means building a small vanilla JavaScript project, which is completely fine.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you're not ready to get started with React yet, you may even want to create a proof of concept using just vanilla JavaScript. Try to build out your visualization without using React yet. An interesting data visualization using vanilla JavaScript can still be the basis for something you might want to share with potential employers.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you're ready to get started with React, start with the most basic implementation you can. If you've completed a basic tutorial or completed a proof of concept for a data visualization, it's time to try integrating this into a React project created just for this purpose. You're still in the learning phase here \u2014 the goal at the moment is to determine how React and the visualization library in question work together.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, you should have a good enough understanding to add visualizations to a more complex project. As always, start simple \u2014 even a small visualization can really make your project pop."))),(0,o.kt)("p",null,"While it may not be necessary to complete all of these steps, especially if you find an excellent external tutorial that provides instructions on combining a visualization library with React, there are many benefits to doing a deeper dive. It's an opportunity not just to learn more about a data visualization library but also more about how React itself works."))}c.isMDXComponent=!0}}]);