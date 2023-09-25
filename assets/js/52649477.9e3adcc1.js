"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[95862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Introduction to React Redux Library",id:"introduction_to_react_redux_library",slug:"introduction_to_react_redux_library",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/6_react-with-redux/0j_introduction_to_react_redux_library.md"},i=void 0,c={unversionedId:"react_part_time/react-with-redux/introduction_to_react_redux_library",id:"react_part_time/react-with-redux/introduction_to_react_redux_library",title:"Introduction to React Redux Library",description:"In this lesson, we will learn how to use the React Redux library, which contains the official bindings for adding Redux to a React project.",source:"@site/docs/react_part_time/6_react-with-redux/0j_introduction_to_react_redux_library.md",sourceDirName:"react_part_time/6_react-with-redux",slug:"/react_part_time/react-with-redux/introduction_to_react_redux_library",permalink:"/lhtp/react_part_time/react-with-redux/introduction_to_react_redux_library",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Introduction to React Redux Library",id:"introduction_to_react_redux_library",slug:"introduction_to_react_redux_library",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/6_react-with-redux/0j_introduction_to_react_redux_library.md"},sidebar:"react_part_time",previous:{title:"Redux Store Review",permalink:"/lhtp/react_part_time/react-with-redux/redux_store_review"},next:{title:"Adding Redux to React: Part 1",permalink:"/lhtp/react_part_time/react-with-redux/adding_redux_to_react_part_1"}},l={},p=[{value:"Documentation",id:"documentation",level:3},{value:"Features and Functionality",id:"features-and-functionality",level:3},{value:"<code>&lt;Provider&gt;</code> Component",id:"provider-component",level:4},{value:"<code>connect()</code>",id:"connect",level:4},{value:"<code>dispatch()</code>",id:"dispatch",level:4},{value:"<code>mapStateToProps()</code>",id:"mapstatetoprops",level:4}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we will learn how to use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reactjs/react-redux"},"React Redux")," library, which contains the official bindings for adding Redux to a React project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bindings"),' are libraries that help two languages, tools, or technologies integrate with one another. They usually do this by "wrapping" logic and functionality from one technology into functions that are easier to call in the second technology.'),(0,r.kt)("p",null,'The React Redux library wraps Redux functionality into methods and components that are easier to use in React. This library is "official" because the React core team endorses the tool.'),(0,r.kt)("h3",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"Even though the library is published by React ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reactjs/react-redux"},"on GitHub"),", its documentation is ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/basics/usage-with-react"},"located here, alongside Redux documentation"),"."),(0,r.kt)("h3",{id:"features-and-functionality"},"Features and Functionality"),(0,r.kt)("p",null,"We will be using the following tools from the React Redux library:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"<Provider>")," component;"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"connect()")," function;"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"dispatch()")," function (you can probably already guess what this one handles); "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"mapStateToProps()")," function. ")),(0,r.kt)("p",null,"Let's learn about each of these tools before integrating them into our Help Queue project."),(0,r.kt)("h4",{id:"provider-component"},(0,r.kt)("inlineCode",{parentName:"h4"},"<Provider>")," Component"),(0,r.kt)("p",null,"We can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Provider>")," component to make our Redux store available to any components that are nested inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Provider>")," component. All of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Provider>")," component's children will get access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect()")," method."),(0,r.kt)("p",null,"If we make the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Provider>")," component the parent of our application's component tree, the entire application will be able to access the Redux store via the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect()")," method."),(0,r.kt)("p",null,"In other words, we can look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Provider>")," component as extending Redux's functionality through out application. This is the glue that gives a React application access to a Redux store."),(0,r.kt)("h4",{id:"connect"},(0,r.kt)("inlineCode",{parentName:"h4"},"connect()")),(0,r.kt)("p",null,"As long as a component has access to Redux via a parent ",(0,r.kt)("inlineCode",{parentName:"p"},"<Provider>")," component, it has access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect()")," function. ",(0,r.kt)("inlineCode",{parentName:"p"},"connect()")," takes a component as an argument and then returns the component with additional functionality. Most notably, it adds a ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch()")," method to the component as well as the ability to define a ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps()")," method."),(0,r.kt)("p",null,"After we import the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect()")," function into a component, we will then pass the entire component into ",(0,r.kt)("inlineCode",{parentName:"p"},"connect()")," as an argument. This triggers React Redux to rewrite the component class to include the necessary Redux store functions in its props. Essentially, this method automatically outfits our components with all necessary logic to communicate with the Redux store."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"connect()")," also acts as an intermediary between a component and the store \u2014 the component itself will never directly communicate with the store. This makes our code more modular and loosely coupled."),(0,r.kt)("h4",{id:"dispatch"},(0,r.kt)("inlineCode",{parentName:"h4"},"dispatch()")),(0,r.kt)("p",null,"We already know what ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch()")," does \u2014 it allows us to dispatch an action. This is the case for both Redux and for the React Redux library. The code for dispatching an action looks very similar in both libraries. "),(0,r.kt)("h4",{id:"mapstatetoprops"},(0,r.kt)("inlineCode",{parentName:"h4"},"mapStateToProps()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps()")," can make our lives much easier as developers. As its name implies, it matches state items from the Redux store to their corresponding React props. In order to use it, we define a ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps()")," function that matches Redux state to React props like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function mapStateToProps(state) {\n  return {\n          reactProp1: state.reduxStateItem1,\n          reactProp2: state.reduxStateItem2,\n          reactProp3: state.reduxStateItem3\n        }\n}\n")),(0,r.kt)("p",null,"As seen in the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"reactProp1")," in our component would map to the ",(0,r.kt)("inlineCode",{parentName:"p"},"reduxStateItem1")," property in our store's state."),(0,r.kt)("p",null,"This allows us to quickly retrieve and display Redux-managed data in our React UI."),(0,r.kt)("p",null,"Now that we've learned a little about the React Redux library, we are ready to combine React and Redux together in our Help Queue application."))}u.isMDXComponent=!0}}]);