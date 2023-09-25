"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[15513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const a={title:"Component Lifecycle Methods",id:"component_lifecycle_methods",slug:"component_lifecycle_methods",hide_table_of_contents:!0,sidebar_position:27,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-with-redux/3c_component_lifecycle_and_methods.md"},l=void 0,r={unversionedId:"react_classic/react-with-redux/component_lifecycle_methods",id:"react_classic/react-with-redux/component_lifecycle_methods",title:"Component Lifecycle Methods",description:"Note: While you are not expected to incorporate any of the concepts from the homework on date-fns into your independent project, it's important to understand how the component lifecycle works. Pay close attention to the material in this lesson!",source:"@site/docs/react_classic/4_react-with-redux/3c_component_lifecycle_and_methods.md",sourceDirName:"react_classic/4_react-with-redux",slug:"/react_classic/react-with-redux/component_lifecycle_methods",permalink:"/lhtp/react_classic/react-with-redux/component_lifecycle_methods",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"Component Lifecycle Methods",id:"component_lifecycle_methods",slug:"component_lifecycle_methods",hide_table_of_contents:!0,sidebar_position:27,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-with-redux/3c_component_lifecycle_and_methods.md"},sidebar:"react_classic",previous:{title:"Introduction to date-fns",permalink:"/lhtp/react_classic/react-with-redux/introduction_to_date_fns"},next:{title:"Adding Wait Time to the Queue",permalink:"/lhtp/react_classic/react-with-redux/adding_wait_time_to_the_queue"}},c={},s=[{value:"Using a Timer to Demonstrate Lifecycle Methods",id:"using-a-timer-to-demonstrate-lifecycle-methods",level:3}],d={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," While you are not expected to incorporate any of the concepts from the homework on date-fns into your independent project, it's important to understand how the component lifecycle works. Pay close attention to the material in this lesson!"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In this lesson, we'll learn about the lifecycle of a React component. We'll also add a timer to our Help Queue to see how lifecycle methods work."),(0,i.kt)("p",null,"The React lifecycle is a series of methods that is always called in a certain order. We can use these lifecycle methods to call our own methods at a very specific time during a component's lifecycle. We've actually used the most common lifecycle methods before: ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"render()"),"."),(0,i.kt)("p",null,"We can roughly break the component lifecycle down into three stages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mounting")," refers to the stages where a component is instantiated and then added to the DOM. It includes the following common lifecycle methods, which are called in order:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"constructor()")),": We've used this method extensively. This is where we specify any properties the component should have such as local state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"render()")),": We're also familiar with this method, which is used to render elements. It's the only lifecycle method that's required in a class component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"componentDidMount()")),": We haven't used this method before. ",(0,i.kt)("inlineCode",{parentName:"li"},"componentDidMount()")," is invoked after a component has finished inserting all DOM nodes. The React documentation recommends setting up subscriptions during this lifecycle method. We will use this method to instantiate a timer to keep track of our Help Queue."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Updating")," is a stage that can happen multiple times during a component's lifecycle. For instance, this stage would occur each time a user increments a counter."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"render()")),": Not surprisingly, ",(0,i.kt)("inlineCode",{parentName:"li"},"render()")," gets called again. That way, any DOM nodes that have changed can be refreshed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"componentDidUpdate()")),": If we have a method that we want to call any time the component updates, we could do so here. Be careful, though \u2014 it may be called many times and this isn't necessarily very efficient."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Unmounting")," occurs when the component is being removed from the DOM. It only has one method:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"componentWillUnmount()")),": We can use this method to perform any cleanup such as unsubscribing or canceling a timer. We will utilize this method to cancel the timer in our own Help Queue.")))),(0,i.kt)("p",null,"It's important to understand the component lifecycle and the order of these lifecycle methods. There are a number of other lifecycle methods listed in the ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-component.html"},"React documentation")," but they are not commonly used. However, we recommend taking a look at the docs to get a better sense of the full lifecycle. Each lifecycle method is well documented if you want more information."),(0,i.kt)("p",null,"If we review the lifecycle methods above, there are three new lifecycle methods we haven't used before: ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidUpdate()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"componentWillUnmount()"),". We will use the first and the third in our Help Queue application."),(0,i.kt)("h3",{id:"using-a-timer-to-demonstrate-lifecycle-methods"},"Using a Timer to Demonstrate Lifecycle Methods"),(0,i.kt)("p",null,"Before we move on, let's implement a simple timer in our Help Queue application. We'll add all three of the lifecycle methods we just learned. We'll also incorporate much (but not all) of the code below in the next lesson as well."),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'...\n// Add the following code after the constructor.\n\ncomponentDidMount() {\n    this.waitTimeUpdateTimer = setInterval(() =>\n      this.updateTicketElapsedWaitTime(),\n    1000\n    );\n  }\n\n  // We won\'t be using this method for our Help Queue update \u2014 but it\'s important to see how it works.\n  componentDidUpdate() {\n    console.log("component updated!");\n  }\n\n  componentWillUnmount(){\n    console.log("component unmounted!");\n    clearInterval(this.waitTimeUpdateTimer);\n  }\n\n  updateTicketElapsedWaitTime = () => {\n    console.log("tick");\n  }\n')),(0,i.kt)("p",null,"When our component is mounted, ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount()")," will be called. That will trigger the following code: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"this.waitTimeUpdateTimer = setInterval(() =>\n  this.updateTicketElapsedWaitTime(),\n1000\n);\n")),(0,i.kt)("p",null,"This code should be relatively familiar from Intermediate JavaScript. The ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval()")," method is a function. The function call itself includes two parts: the code to be executed and the delay between each interval. In this case, the interval is set to 1000 milliseconds \u2014 a single second."),(0,i.kt)("p",null,"We set the value of the code to be executed to another function called ",(0,i.kt)("inlineCode",{parentName:"p"},"this.updateTicketElapsedWaitTime()"),". We ",(0,i.kt)("em",{parentName:"p"},"could")," call all the code we want to execute inside ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount()")," but that wouldn't be very clean. All we want to do is have a timer here. Updating the UI of the queue to reflect the elapsed time should be a separate concern."),(0,i.kt)("p",null,"We set the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval()")," function to ",(0,i.kt)("inlineCode",{parentName:"p"},"this.waitTimeUpdateTimer"),". We make it a property of the component so that we can use it in other functions. This way, we can actually cancel the timer when we need to."),(0,i.kt)("p",null,"We will keep this method for our Help Queue application \u2014 though we will change the interval to 60000 ms so the queue updates every minute \u2014 just like the one at Epicodus."),(0,i.kt)("p",null,"Next, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidUpdate()"),". We add a ",(0,i.kt)("inlineCode",{parentName:"p"},'console.log("component updated!")')," so we can see when this method is called in our component. We won't be using ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidUpdate()")," in our Help Queue \u2014 but it's still helpful to see how this lifecycle method works."),(0,i.kt)("p",null,"Then we call ",(0,i.kt)("inlineCode",{parentName:"p"},"componentWillUnmount()"),". This method will be called when our component is cleared from the UI. It includes the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'console.log("component unmounted!");\nclearInterval(this.waitTimeUpdateTimer);\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," will tell us when the component is about to be unmounted. Then we need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"clearInterval()")," to actually clear the timer. If we hadn't saved the timer inside ",(0,i.kt)("inlineCode",{parentName:"p"},"this.waitTimeUpdateTimer"),", we wouldn't have a way to clear our interval."),(0,i.kt)("p",null,'Finally, we have the following method, which just logs a "tick" to the console.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'updateTicketElapsedWaitTime = () => {\n  console.log("tick");\n}\n')),(0,i.kt)("p",null,"This method is triggered each second in our ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval()")," function. Right now, it's not doing much. However, this method will be responsible for communicating with Redux in the next lesson."),(0,i.kt)("p",null,"Now let's run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," and open the console. Try adding, updating and closing a few tickets. Note the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"componentDidMount()")," is called once, when we run the application. At that point, the timer is triggered and ",(0,i.kt)("inlineCode",{parentName:"li"},"tick")," is logged to the console every second."),(0,i.kt)("li",{parentName:"ul"},"Each time we add, update, or close a ticket, ",(0,i.kt)("inlineCode",{parentName:"li"},"component updated!")," is logged to the console. As we can see, the ",(0,i.kt)("inlineCode",{parentName:"li"},"componentDidUpdate()")," method is triggered each time a change is made to the UI. The timer has no effect on it. If we execute code that doesn't affect the UI, ",(0,i.kt)("inlineCode",{parentName:"li"},"componentDidUpdate()")," won't be triggered. This makes sense, because the component ",(0,i.kt)("em",{parentName:"li"},"itself")," (eg, its UI) isn't updated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"componentWillUnmount()")," is never called. If we think about the structure of our application, this makes sense. ",(0,i.kt)("inlineCode",{parentName:"li"},"componentWillUnmount()")," is called inside ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl.js"),". However, this component is essentially a container determining which child component should be rendered \u2014 the ticket list, a ticket form, or the ticket detail. ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl.js")," is always there and is never unmounted. On the other hand, all the various child components such as ticket list and our form component are unmounted each time they are closed. Why bother to add code to ",(0,i.kt)("inlineCode",{parentName:"li"},"componentWillUnmount()")," at all then? Well, if our application were to expand and ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl")," could be unmounted, we'd want this code to trigger. We are writing code that is both proactive (thinking about future expansion) and defensive (trying to avoid future bugs).")),(0,i.kt)("p",null,"Now that we have a general sense of how these lifecycle methods work, we are ready to implement time elapsed functionality in our Help Queue. We'll do that in the next lesson."))}m.isMDXComponent=!0}}]);