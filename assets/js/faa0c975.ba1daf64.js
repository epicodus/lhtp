"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[7952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,u=m["".concat(l,".").concat(p)]||m[p]||h[p]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={title:"12. \ud83d\udcd3 Removing Event Listeners",id:"removing_event_listeners",slug:"removing_event_listeners",hide_table_of_contents:!0,sidebar_position:65,day:"wednesday",type:"lesson"},r=void 0,s={unversionedId:"javascript_and_web_browsers/removing_event_listeners",id:"javascript_and_web_browsers/removing_event_listeners",title:"12. \ud83d\udcd3 Removing Event Listeners",description:"In this lesson, we'll learn how to remove event listeners with the removeEventListener() method. In the applications that you build at Epicodus, there won't be a lot of cases in which we'll need to remove event listeners, but it is helpful to know when and why we might want or need to do that.",source:"@site/docs/2_javascript_and_web_browsers/3k_removing_event_listeners.md",sourceDirName:"2_javascript_and_web_browsers",slug:"/javascript_and_web_browsers/removing_event_listeners",permalink:"/lhtp/javascript_and_web_browsers/removing_event_listeners",draft:!1,tags:[],version:"current",sidebarPosition:65,frontMatter:{title:"12. \ud83d\udcd3 Removing Event Listeners",id:"removing_event_listeners",slug:"removing_event_listeners",hide_table_of_contents:!0,sidebar_position:65,day:"wednesday",type:"lesson"},sidebar:"docs",previous:{title:"11. \ud83d\udcd3 Using Function Declarations in Event Handling",permalink:"/lhtp/javascript_and_web_browsers/using_function_declarations_in_event_handling"},next:{title:"13. \u270f\ufe0f Practice: Event Listeners",permalink:"/lhtp/javascript_and_web_browsers/practice_event_listeners"}},l={},d=[{value:"Removing Event Listeners with <code>removeEventListener()</code>",id:"removing-event-listeners-with-removeeventlistener",level:2},{value:"(Some) Function Expressions Don&#39;t Work with <code>removeEventListener()</code>",id:"some-function-expressions-dont-work-with-removeeventlistener",level:3},{value:"When and Why We Remove Event Listeners",id:"when-and-why-we-remove-event-listeners",level:2},{value:"A Practical Example",id:"a-practical-example",level:3},{value:"Completed Mad Libs Code",id:"completed-mad-libs-code",level:3},{value:"Summary",id:"summary",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll learn how to remove event listeners with the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," method. In the applications that you build at Epicodus, there won't be a lot of cases in which we'll need to remove event listeners, but it is helpful to know when and why we might want or need to do that."),(0,o.kt)("h2",{id:"removing-event-listeners-with-removeeventlistener"},"Removing Event Listeners with ",(0,o.kt)("inlineCode",{parentName:"h2"},"removeEventListener()")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"There is a method to remove an event listener, just like there is a method for adding an event listener. Let's see how it works. First, we'll set up a click event listener on a heading element. We'll use the same example from the previous lesson of an educational application that explains HTML and what each element on the page is called. Here's a snippet of our HTML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Heading 1</h1>\n")),(0,o.kt)("p",null,"And here is our event listener:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function alertHeading() {\n  window.alert("This is a heading element.");\n}\nlet h1 = document.querySelector("h1"); \nh1.addEventListener("click", alertHeading);\n')),(0,o.kt)("p",null,"Notice that we're using a function declaration called ",(0,o.kt)("inlineCode",{parentName:"p"},"alertHeading()")," as the handler function for the click event. ",(0,o.kt)("inlineCode",{parentName:"p"},"alertHeading()")," is also called a callback function, because it is a function that is being used as an argument in another function. Because we're passing it in as the handler function for our click event listener, ",(0,o.kt)("inlineCode",{parentName:"p"},"alertHeading()")," will be called any time the user clicks on the H1 element. "),(0,o.kt)("p",null,"When we pass in ",(0,o.kt)("inlineCode",{parentName:"p"},"alertHeading()")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method, we purposefully don't include parens so that we can pass in the definition of the function to the ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method. If we included parens then we'd be calling it now, and we don't want that. We want the ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method to be able to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"alertHeading()")," function only when it needs to, when the click on the H1 element happens."),(0,o.kt)("p",null,"Now let's remove the click event listener:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function alertHeading() {\n  window.alert("This is a heading element.");\n}\nlet h1 = document.querySelector("h1"); \nh1.addEventListener("click", alertHeading);\nh1.removeEventListener("click", alertHeading);  // this line is new!\n')),(0,o.kt)("p",null,"Right after we create the event listener we now remove it with ",(0,o.kt)("inlineCode",{parentName:"p"},'h1.removeEventListener("click", alertHeading);'),". Notice that we pass in ",(0,o.kt)("strong",{parentName:"p"},"the exact same arguments")," as we do into the ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method. This is by design and how the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," method knows which event listener to remove. "),(0,o.kt)("p",null,"Let's break this down the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," method:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This method takes two arguments:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The name of the event. In our example the event we're targeting is ",(0,o.kt)("inlineCode",{parentName:"li"},'"click"'),"."),(0,o.kt)("li",{parentName:"ul"},'The name of the function we are using to handle the event. This function is often called the "handler function". In our example, this handler function is ',(0,o.kt)("inlineCode",{parentName:"li"},"alertHeading"),". (This function is also categorized as a callback function.)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"The two arguments we supply to the ",(0,o.kt)("inlineCode",{parentName:"strong"},"removeEventListener()")," method call MUST match the same arguments that we supplied to the ",(0,o.kt)("inlineCode",{parentName:"strong"},"addEventListener()")," method that originally created the event listener that we want to remove."))),(0,o.kt)("p",null,"This last point is so important that we should look at scenarios of removing event listeners that fail."),(0,o.kt)("h3",{id:"some-function-expressions-dont-work-with-removeeventlistener"},"(Some) Function Expressions Don't Work with ",(0,o.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,o.kt)("p",null,"When we set up an event listener with a function expression that's not saved to a variable, we can't target and remove it with ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()"),". Let's see an example. In the following code snippet, we will fail to remove the event listener, even though the arguments in both ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," are exactly the same. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let h1 = document.querySelector("h1"); \nh1.addEventListener("click", function() {\n  window.alert("This is a heading element.");\n});\nh1.removeEventListener("click", function() {\n  window.alert("This is a heading element.");\n});  \n')),(0,o.kt)("p",null,"In JavaScript, anonymous function expressions that are not stored into a variable are not identical even if they are defined using the same unchanging source-code. So even though each callback function has the exact same code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function() {\n  window.alert("This is a heading element.");\n}\n')),(0,o.kt)("p",null,"JavaScript considers them as two separate functions, and because of this, the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," method can't match its arguments to the ones we passed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method, and fails to find and remove the correct event listener."),(0,o.kt)("p",null,"We can still use function expressions that are stored in a variable, because the variable unequivocally represents one value, the function expression. The code snippet below demonstrates this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const alertHeading = function() {\n  window.alert("This is a heading element.");\n};\nlet h1 = document.querySelector("h1"); \nh1.addEventListener("click", alertheading);\nh1.removeEventListener("click", alertHeading);  \n')),(0,o.kt)("p",null,"So, just like when using function declarations, JavaScript knows that we're referencing the same function with the ",(0,o.kt)("inlineCode",{parentName:"p"},"alertHeading")," variable. The arguments for both methods will match and enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," method to find and remove the correct event listener."),(0,o.kt)("h2",{id:"when-and-why-we-remove-event-listeners"},"When and Why We Remove Event Listeners"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We remove event listeners in three cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When we only want an event handler to run once. We can remove an event listener after it has been run to make it so the reaction happens once (or a different set number of times)."),(0,o.kt)("li",{parentName:"ul"},"To reuse elements. Being able to add and remove event listeners allows us to use one element in multiple scenarios. For example, we could use one button in three different scenarios by adding and removing event listeners. The alternative would be to use three separate buttons with three separate event listeners. "),(0,o.kt)("li",{parentName:"ul"},"To improve performance or efficiency. If we have many, many event listeners in an application, removing the ones that are no longer needed can improve efficiency. This aspect of efficiency has to do with memory management. We won't learn about performance optimization at Epicodus, but this is an important topic to learn about down the road as you continue your growth as a developer. ")),(0,o.kt)("p",null,"In terms of a workflow for removing event listeners, a good guideline is to remove event listeners when you've removed the target it belongs to. Not just hide the target, but remove it completely from the DOM. We haven't yet learned how to add and remove elements from the DOM, but we will in the next course section. "),(0,o.kt)("p",null,'There are cases where JavaScript\'s automatic "garbage collection" handles removing event listeners from the associated targets when they are removed from the DOM, but that is a subject that is not important to understand right now. If you want to learn about "garbage collection" and memory management, ',(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"visit this reference page on MDN"),". If you want to see a practical example of a memory issue in relation to event listeners, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#memory_issues"},"review this section on MDN's ",(0,o.kt)("inlineCode",{parentName:"a"},"addEventListener()")," reference page"),"."),(0,o.kt)("p",null,"Again, memory management and performance are topics that you should learn about after you leave Epicodus as part of your continuing education. The applications we build at Epicodus for the most part will be small and simple, and won't require cleaning up old, unused event handlers. The most common reason that you will remove an event listener is to reuse an HTML element in multiple scenarios/for different actions, or to react to an event only once."),(0,o.kt)("h3",{id:"a-practical-example"},"A Practical Example"),(0,o.kt)("p",null,"Let's review a more realistic example of removing an event listener."),(0,o.kt)("p",null,"In the lesson \"Event Handling with Event Listeners\" we expanded the functionality of our Mad Libs project to not only show the Mad Libs story (with user inputted values), but also to display an advertisement and a button to reset the form. Let's update the event handling that displays the advertisement so that it only runs once. To make the code easier to follow, we'll first highlight the code just for the advertisement, and then we'll show all of the HTML and JS afterwards."),(0,o.kt)("p",null,"First, let's look only the code that creates the event listener on the form. We've omitted other code with ellipses ",(0,o.kt)("inlineCode",{parentName:"p"},"..."),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// User Interface Logic\nwindow.addEventListener("load", function() {\n  ...\n  let form = document.querySelector("form");\n  ...\n  form.addEventListener("submit", function() {\n    window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");\n  }); \n  ...\n});\n')),(0,o.kt)("p",null,"In order to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," method, we need to use a function declaration, or store our function expression into a variable that we can call on. Let's make that update first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// User Interface Logic\n\n// new function!\nfunction advertisement() {\n  window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");\n}\n\nwindow.addEventListener("load", function() {\n  ...\n  let form = document.querySelector("form");\n  ...\n  form.addEventListener("submit", advertisement); \n  ...\n});\n')),(0,o.kt)("p",null,"We've added a new function definition called ",(0,o.kt)("inlineCode",{parentName:"p"},"advertisement()")," that displays our ad. Take note of a few things about the placement of the ",(0,o.kt)("inlineCode",{parentName:"p"},"advertisement()")," function:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This is considered user interface logic, because it handles accessing, manipulating or updating the DOM. Code that does not access or update the DOM is considered business logic (we'll see more examples of this in an upcoming lesson)."),(0,o.kt)("li",{parentName:"ul"},"We define ",(0,o.kt)("inlineCode",{parentName:"li"},"advertisement()")," outside of the ",(0,o.kt)("inlineCode",{parentName:"li"},"window.onload")," event handler. We only need to ",(0,o.kt)("em",{parentName:"li"},"use")," the function inside of the ",(0,o.kt)("inlineCode",{parentName:"li"},"window.onload")," event handler."),(0,o.kt)("li",{parentName:"ul"},"We locate the definition of ",(0,o.kt)("inlineCode",{parentName:"li"},"advertisement()")," above where we use that function in our scripts.")),(0,o.kt)("p",null,"Next, let's incorporate the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," method. We'll want to add this method into the new ",(0,o.kt)("inlineCode",{parentName:"p"},"advertisement()")," function so that we remove the event listener only after it has run once."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// User Interface Logic\nfunction advertisement() {\n  window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");\n  // new line below!\n  document.querySelector("form").removeEventListener("submit", advertisement);\n}\n\nwindow.addEventListener("load", function() {\n  ...\n  let form = document.querySelector("form");\n  ...\n  form.addEventListener("submit", advertisement); \n  ...\n});\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"form")," variable that we created in the ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"'s load event listener is not available outside of that event listener. In other words, the ",(0,o.kt)("inlineCode",{parentName:"p"},"form"),' variable is "scoped" to the ',(0,o.kt)("inlineCode",{parentName:"p"},"window"),"'s load event listener. So, within the ",(0,o.kt)("inlineCode",{parentName:"p"},"advertisement()")," function, we need to first use ",(0,o.kt)("inlineCode",{parentName:"p"},'document.querySelector("form")')," to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLFormElement")," object, and then call the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," method on it. We could separate this code onto two lines if that's easier to read and understand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let form = document.querySelector("form")\nform.removeEventListener("submit", advertisement);\n')),(0,o.kt)("p",null,"And with that new line, we've successfully removed the event listener for the advertisement such that it will only display once and be removed. Take note that the issues of scope for the ",(0,o.kt)("inlineCode",{parentName:"p"},"form")," variable does not exist for event listeners. We can remove an event listener in one function that is originally defined in another."),(0,o.kt)("p",null,"If you are feeling iffy about scope, don't worry, it ",(0,o.kt)("em",{parentName:"p"},"is")," a tricky concept to understand. We'll be exploring scope again in an upcoming lesson, so there will be more opportunity to practice soon."),(0,o.kt)("h3",{id:"completed-mad-libs-code"},"Completed Mad Libs Code"),(0,o.kt)("p",null,"Check out the cheat sheet for this lesson for the completed HTML and JS for the Mad Libs project. This includes the update to only run the advertisement once. If you want to, you are welcome to use the code to recreate this project to test out the changes we've made to the advertisement's functionality. In the next lesson, you'll practice using ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()"),"."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson we learned how to remove event listeners with the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," method. To use this method successfully, there's a few things to note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We must use a function declaration or a function expression that's stored into a variable when we create and remove an event listener. "),(0,o.kt)("li",{parentName:"ul"},"The two arguments we supply to the ",(0,o.kt)("inlineCode",{parentName:"li"},"removeEventListener()")," method call MUST match the same arguments that we supplied to the ",(0,o.kt)("inlineCode",{parentName:"li"},"addEventListener()")," method that originally created the event listener that we want to remove."),(0,o.kt)("li",{parentName:"ul"},"The most common reason that you will remove an event listener is to reuse an HTML element in multiple scenarios/for different actions, or to react to an event only once."),(0,o.kt)("li",{parentName:"ul"},"Issues related to scope that affect variables do not affect event listeners. We can remove an event listener in one function (or scope) that is originally defined in another function (or scope).")))}h.isMDXComponent=!0}}]);