"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[27464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"React Router",id:"react_router",slug:"react_router",hide_table_of_contents:!0,sidebar_position:21,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/1c_react_router.md"},i=void 0,l={unversionedId:"react_part_time/react-with-nosql/react_router",id:"react_part_time/react-with-nosql/react_router",title:"React Router",description:"In this lesson, we'll incorporate the React Router library and create a \"separate\" sign-in page that uses client-side routing. In the next lesson, we'll actually incorporate Firebase authentication.",source:"@site/docs/react_part_time/8_react-with-nosql/1c_react_router.md",sourceDirName:"react_part_time/8_react-with-nosql",slug:"/react_part_time/react-with-nosql/react_router",permalink:"/lhtp/react_part_time/react-with-nosql/react_router",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"React Router",id:"react_router",slug:"react_router",hide_table_of_contents:!0,sidebar_position:21,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/1c_react_router.md"},sidebar:"react_part_time",previous:{title:"Client-Side Routing",permalink:"/lhtp/react_part_time/react-with-nosql/client_side_routing"},next:{title:"Firebase Authentication",permalink:"/lhtp/react_part_time/react-with-nosql/firebase_authentication"}},p={},s=[{value:"Adding a Router",id:"adding-a-router",level:2},{value:"Adding Links to Routes",id:"adding-links-to-routes",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll incorporate the React Router library and create a \"separate\" sign-in page that uses client-side routing. In the next lesson, we'll actually incorporate Firebase authentication."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/"},"React Router")," is an external library that makes routing much easier in React applications. First, we'll install the following version of React Router:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ npm install react-router-dom@6\n")),(0,a.kt)("p",null,"React Router provides a number of tools that will make it easy for us to add client-side routing. In this lesson, we'll learn about the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A router component called ",(0,a.kt)("inlineCode",{parentName:"li"},"<BrowserRouter>"),". We'll add this to our root component (",(0,a.kt)("inlineCode",{parentName:"li"},"<App>"),"). It will give us access to other pieces of React Router functionality."),(0,a.kt)("li",{parentName:"ul"},"A component called ",(0,a.kt)("inlineCode",{parentName:"li"},"<Routes>"),". Whenever we want to delineate between multiple routes, we will wrap a ",(0,a.kt)("inlineCode",{parentName:"li"},"<Routes>")," component around them."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"<Route>")," component that defines the component the application should route to as well as the path that the route corresponds to."),(0,a.kt)("li",{parentName:"ul"},"Finally, a ",(0,a.kt)("inlineCode",{parentName:"li"},"<Link>")," component will provide actual links to client-side routes in our application.")),(0,a.kt)("p",null,"We will just cover this part of React Router's functionality in this lesson, but we recommend checking out the excellent ",(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/docs/en/v6"},"React Router documentation")," as well."),(0,a.kt)("p",null,"We'll start by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn"),"  component with placeholder text:"),(0,a.kt)("div",{class:"filename"},"src/components/SignIn.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nfunction SignIn(){  \n  return (\n    <h1>Sign In</h1>\n  );\n}\n\nexport default SignIn\n')),(0,a.kt)("p",null,"Eventually, this component will use Firebase authentication. For now, though, we are just focused on setting up a router that will route between our application and the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn")," component."),(0,a.kt)("h2",{id:"adding-a-router"},"Adding a Router"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Next, we need to make some changes to our ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," component. Because it's the root level component, it's the best place to put our router so that the rest of our application has access to its functionality. Also, we'll want to route between the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn")," component and the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component anyway, so most of our router functionality will be in ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),", which is just above ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," in our component tree."),(0,a.kt)("p",null,"Here's our updated ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," component:"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport SignIn from "./SignIn";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\n\nfunction App(){\n  return ( \n    <Router>\n      <Header />\n      <Routes>\n        <Route path="/sign-in" element={<SignIn />} />\n        <Route path="/" element={<TicketControl />} />\n      </Routes>\n    </Router>\n  );\n}\n\n...\n')),(0,a.kt)("p",null,"In addition to importing our placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn")," component, we also add the following imports:"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { BrowserRouter as Router, Routes, Route } from "react-router-dom";\n')),(0,a.kt)("p",null,"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"as")," syntax in ",(0,a.kt)("inlineCode",{parentName:"p"},"BrowserRouter as Router"),". This just makes the naming a little easier \u2014 we can call the component ",(0,a.kt)("inlineCode",{parentName:"p"},"<Router>")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"<BrowserRouter>")," and save a little typing. We don't add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Link>")," component because we won't actually have links in this component."),(0,a.kt)("p",null,"Next, we wrap all the content in our return statement inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Router>")," component. Now all of ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),"'s children will have this functionality as well."),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"Header")," component should show regardless so that comes next \u2014 and is outside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Routes>")," component where our application's routing will be determined."),(0,a.kt)("p",null,"Think of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Routes>")," component as being like a conditional \u2014 it will render only one of the routes contained inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Routes>")," component. (It's also possible that a route won't be rendered at all if no URL matches it.) If we don't include the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Routes>")," component, multiple routes could be rendered. Sometimes we might actually want that, but in the case of our application, we only want the sign in page ",(0,a.kt)("em",{parentName:"p"},"or")," the queue to be rendered."),(0,a.kt)("p",null,"Next, we need to determine our actual routes using ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," components. Let's look more closely at the code contained in our ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," components:"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<Route path="/sign-in" element={<SignIn />} />\n<Route path="/" element={<TicketControl />} />\n')),(0,a.kt)("p",null,"We always need to specify the route's ",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"; otherwise, how will we ever be able to route to it via a URL? The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," should ",(0,a.kt)("em",{parentName:"p"},"always")," begin with a ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," (just like an actual path in a URL). Otherwise, there will be errors. The name of the path doesn't need to match the name of the component, though for clarity and naming purposes, it often will. "),(0,a.kt)("p",null,"For each ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," component that we create, we need to pass in an ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," prop that's set to the component that we want rendered for the corresponding path. This completes the functionality of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," component: when the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>"),"'s path matches the URL, its ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," will be rendered."),(0,a.kt)("p",null,"We can now run our application and navigate to our sign in route manually by typing in ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000/sign-in"),"."),(0,a.kt)("p",null,"However, we don't want our users to have to type in the path manually each time they want to go to the sign in page. The next step is to add links in our header that will allow users to navigate between different routes."),(0,a.kt)("h2",{id:"adding-links-to-routes"},"Adding Links to Routes"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Many applications have a navbar at the top of the page with links to various parts of the site. This navbar will show regardless of which page we're on. We already have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Header")," component that renders at the top of our site regardless of the page's content. At this point, it only has an ",(0,a.kt)("inlineCode",{parentName:"p"},"h")," tag. Let's update this component to be more useful:"),(0,a.kt)("div",{class:"filename"},"src/components/Header.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport { Link } from "react-router-dom";\n\nfunction Header(){\n  return (\n    <React.Fragment>\n      <h1> Help Queue</h1>\n      <ul>\n        <li>\n          <Link to="/">Home</Link>\n        </li>\n        <li>\n          <Link to="/sign-in">Sign In</Link>\n        </li>\n      </ul>\n    </React.Fragment>\n  );\n}\n\n...\n')),(0,a.kt)("p",null,"First, we need to ",(0,a.kt)("inlineCode",{parentName:"p"},'import { Link } from "react-router-dom;'),". This feature provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Link>")," component which we can use to create links to routes in our sites. React Router will automatically render these as ",(0,a.kt)("inlineCode",{parentName:"p"},"href"),"s on the page."),(0,a.kt)("p",null,"The syntax looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<Link to="/sign-in">Sign In</Link>\n')),(0,a.kt)("p",null,"In the example above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," property ",(0,a.kt)("strong",{parentName:"p"},"must")," match the route we specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," component for our ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<Route path="/sign-in" element={<SignIn />} />\n')),(0,a.kt)("p",null,"Fortunately, if there's a typo, it's easy to troubleshoot. If a route isn't rendering as expected in the browser, start by double-checking the browser's URL."),(0,a.kt)("p",null,"At this point, we can run our application and then click on the links in the header to toggle between the Help Queue and the sign in page."),(0,a.kt)("p",null,"We're now ready to add authentication to our application!"),(0,a.kt)("p",null,"For more information on using React Router, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/docs/en/v6"},"React Router documentation"),"."))}m.isMDXComponent=!0}}]);