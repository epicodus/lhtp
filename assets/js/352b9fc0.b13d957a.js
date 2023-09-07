"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74799],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const s={title:"4. Introduction to State",id:"introduction_to_state",slug:"introduction_to_state",hide_table_of_contents:!0,sidebar_position:20,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/1b_introduction_to_state.md"},r=void 0,i={unversionedId:"react/react-fundamentals/introduction_to_state",id:"react/react-fundamentals/introduction_to_state",title:"4. Introduction to State",description:"In this lesson, we'll briefly cover the concept of state. We'll discuss shared state versus local state. We'll also briefly cover how we define and change state in a pure React application. Then, over the next several lessons, we'll add state to our Help Queue application so we can dynamically add new tickets.",source:"@site/docs/react/3_react-fundamentals/1b_introduction_to_state.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/introduction_to_state",permalink:"/lhtp/react/react-fundamentals/introduction_to_state",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"4. Introduction to State",id:"introduction_to_state",slug:"introduction_to_state",hide_table_of_contents:!0,sidebar_position:20,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/1b_introduction_to_state.md"},sidebar:"react",previous:{title:"3. Help Queue, Social Media, Airbnb Clone",permalink:"/lhtp/react/react-fundamentals/help_queue_social_media_airbnb_clone"},next:{title:"5. Planning Our Application: Part 2",permalink:"/lhtp/react/react-fundamentals/planning_our_application_part_2"}},l={},c=[{value:"Shared State Versus Local State",id:"shared-state-versus-local-state",level:2},{value:"Local State",id:"local-state",level:3},{value:"Shared State",id:"shared-state",level:3},{value:"Creating and Updating State in a React Application",id:"creating-and-updating-state-in-a-react-application",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll briefly cover the concept of state. We'll discuss shared state versus local state. We'll also briefly cover how we define and change state in a pure React application. Then, over the next several lessons, we'll add state to our Help Queue application so we can dynamically add new tickets."),(0,o.kt)("p",null,"We can use two types of data in a React component: props and state. We've already used props in a React application and we also covered state in the last course section in our introduction to functional programming."),(0,o.kt)("p",null,"As a quick reminder, state is anything in an application that we need to store and change. For instance, in our Help Queue, each time we add a new ticket, we need to update the application's state to hold the new ticket. Likewise, we'd need to update the application's state to edit or delete a ticket."),(0,o.kt)("p",null,"State is something that can potentially change. In contrast, a component ",(0,o.kt)("em",{parentName:"p"},"cannot")," change its props. State is fluid and ever-changing while props are not."),(0,o.kt)("p",null,"The components we've built so far have all been functional. They cannot handle state. However, as we discussed in our introduction to components, we can use class-based components to handle state. As a rule, we should ",(0,o.kt)("strong",{parentName:"p"},"only define a component as a class if it ",(0,o.kt)("em",{parentName:"strong"},"absolutely requires")," state.")," If a component does not require state, it should be a stateless function component. Avoiding unnecessary use of state is an important rule in React. (Note: There's actually more to this rule but we won't go into great detail here. If you're feeling particularly brave, check out ",(0,o.kt)("a",{parentName:"p",href:"https://overreacted.io/how-are-function-components-different-from-classes/"},"this article")," to learn more about the nuances of why React favors function components.)"),(0,o.kt)("h2",{id:"shared-state-versus-local-state"},"Shared State Versus Local State"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"There can be two different types of state in a React application \u2014 ",(0,o.kt)("strong",{parentName:"p"},"shared state")," and ",(0,o.kt)("strong",{parentName:"p"},"local state"),". We will be experimenting with both as we add state to our Help Queue application."),(0,o.kt)("h3",{id:"local-state"},"Local State"),(0,o.kt)("p",null,"Local state lives in a single component and is never used in other components. It is much simpler than shared state because we don't have to worry about sharing data in multiple components. An example of local state is hiding and showing information. We will use local state in our Help Queue project to determine whether a user should see a list of tickets or a form for adding a ticket. "),(0,o.kt)("p",null,"It's obvious where local state should live \u2014 in the component that needs it!"),(0,o.kt)("h3",{id:"shared-state"},"Shared State"),(0,o.kt)("p",null,"Shared state is shared by multiple components and can get complicated very quickly. An example of shared state is the main list of all tickets in the Help Queue. Our ticket list component will need access to all the tickets so it can render them. However, our form will also need to be able to pass information about new tickets to the main list of tickets as well."),(0,o.kt)("p",null,"Our application will keep shared state fairly simple \u2014 only two components will need to access this main ticket list."),(0,o.kt)("p",null,"There are many challenges to working with shared state. For example, where should it live? In order for components to have access to the same state, that shared state should be lifted to ",(0,o.kt)("strong",{parentName:"p"},"the lowest common ancestor for all the components that need that state"),"."),(0,o.kt)("p",null,"We'll demonstrate what this means with the following diagram."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-1-React-2019/state-diagram.jpg",alt:"The following diagram demonstrates how to lift state between multiple components"})),(0,o.kt)("p",null,"In this diagram, there are six different components. Let's say that component D and component E need access to shared state. The lowest common ancestor for those components is component B. In this case, we'd only need to lift this shared state to component B."),(0,o.kt)("p",null,"However, let's say that component F also needs access to the same state. That means component B is no longer a common ancestor. At this point, component A is the lowest common ancestor that components D, E, and F share. Now our shared state needs to be lifted all the way to component A."),(0,o.kt)("p",null,"This will become clearer as we refactor our Help Queue application to use both local and shared state."),(0,o.kt)("p",null,"You may be wondering what to do if our application has complex state and many different components have many different kinds of shared state. At that point, it's typical to use a library like Redux that is specifically designed to handle complex state. We will cover Redux in the next course section. For the time being, we will focus on learning the ins and outs of adding state to a basic React application without any external libraries."),(0,o.kt)("h3",{id:"creating-and-updating-state-in-a-react-application"},"Creating and Updating State in a React Application"),(0,o.kt)("p",null,"As we discussed in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/react/react-fundamentals/react-components"},"React Components")," lesson, class components have a constructor that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"constructor(props) {\n  super(props);\n  this.state = {};\n}\n")),(0,o.kt)("p",null,"We can define any default state a component should have in the constructor. ",(0,o.kt)("strong",{parentName:"p"},"It is the only place we should define default state in a pure React application.")," (An application with Redux or another state management library will have other ways of defining state.)"),(0,o.kt)("p",null,"We can add any number of key-value pairs to ",(0,o.kt)("inlineCode",{parentName:"p"},"this.state = {}")," to define the default state."),(0,o.kt)("p",null,"If we want to update state, we will use the following React method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.setState({property: update})\n")),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"property")," represents the property that needs to be updated while ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," represents the new value a property should have. This is the simplest way to use ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()"),", though we can also do other things beyond just passing in objects."),(0,o.kt)("p",null,"Whenever we want to change state in React, we need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," method. It is a very bad practice to bypass React and try to change state in other ways. The whole point of ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," is to allow React to do its job \u2014 which is to be a state management system that efficiently creates a virtual DOM and reconciles it with the actual DOM. So it should go without saying that we should ",(0,o.kt)("strong",{parentName:"p"},"never")," do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.state = {property: update}\n")),(0,o.kt)("p",null,"The main issue with manipulating state directly like this is that it will ",(0,o.kt)("em",{parentName:"p"},"not")," cause the component to re-render as setState() would. If the component doesn't re-render, our changes to state won't create any change in the DOM. ",(0,o.kt)("strong",{parentName:"p"},"Always use the ",(0,o.kt)("inlineCode",{parentName:"strong"},"setState()")," method to update state in a pure React application.")),(0,o.kt)("p",null,"There's one more very important thing we need to know about the ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," method. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"setState()")," is an async method.")," This makes sense \u2014 async methods can be challenging to work with but they allow JavaScript applications to be more efficient. Because ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," is async, there are a lot of potential gotchas. For instance, if you try to ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," the value of a component's state directly after calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," method, you can't expect it to give you reliable results. There is a way to accurately log the current state of a component, but we will cover that in a future lesson."),(0,o.kt)("p",null,"In this lesson, we've covered the differences between shared and local state. We also briefly covered how to define and update state in a React application. However, these concepts are probably still fuzzy because we haven't actually applied them yet. Don't worry \u2014 we are about to apply them. We recommend referring back to this lesson if you still have confusion about these concepts after we add local and shared state to our Help Queue application."))}d.isMDXComponent=!0}}]);