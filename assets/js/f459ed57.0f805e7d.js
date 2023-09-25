"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[80545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={title:"10. Homework: Event Handling with Event Listeners",id:"homework_event_handling_with_event_listeners",slug:"homework_event_handling_with_event_listeners",hide_table_of_contents:!0,sidebar_position:20,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4_javascript-and-web-browsers-part-2/3i_event_listening.md"},r=void 0,s={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers-part-2/homework_event_handling_with_event_listeners",id:"introduction_to_programming_part_time/javascript-and-web-browsers-part-2/homework_event_handling_with_event_listeners",title:"10. Homework: Event Handling with Event Listeners",description:"So far, we've worked with event handler properties to handle events in our code. These properties represent events for the object it belongs to (an HTML element, document, or window object). An event is just a signal that something has happened in the browser. To use an event handler property, we set its value to a function, and every time the corresponding event happens, the function gets called and all of the code inside of the function runs. In this way, we use event handler properties to write code to react to events that happen in our webpage.",source:"@site/docs/introduction_to_programming_part_time/4_javascript-and-web-browsers-part-2/3i_event_listening.md",sourceDirName:"introduction_to_programming_part_time/4_javascript-and-web-browsers-part-2",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/homework_event_handling_with_event_listeners",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/homework_event_handling_with_event_listeners",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"10. Homework: Event Handling with Event Listeners",id:"homework_event_handling_with_event_listeners",slug:"homework_event_handling_with_event_listeners",hide_table_of_contents:!0,sidebar_position:20,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4_javascript-and-web-browsers-part-2/3i_event_listening.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"9. Practice: More Branching",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_more_branching"},next:{title:"11. Homework: Using Function Declarations in Event Handling",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/homework_using_function_declarations_in_event_handling"}},l={},d=[{value:"Event Listeners",id:"event-listeners",level:2},{value:"The Benefits of Using Event Listeners",id:"the-benefits-of-using-event-listeners",level:3},{value:"More About Callback Functions",id:"more-about-callback-functions",level:2},{value:"Summary and Completed Code for the Mad Libs Project",id:"summary-and-completed-code-for-the-mad-libs-project",level:2}],u={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So far, we've worked with event handler properties to handle events in our code. These properties represent events for the object it belongs to (an HTML element, ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object). An event is just a signal that something has happened in the browser. To use an event handler property, we set its value to a function, and every time the corresponding event happens, the function gets called and all of the code inside of the function runs. In this way, we use event handler properties to write code to react to events that happen in our webpage."),(0,a.kt)("p",null,"In this lesson, we'll learn a new method of event handling: we'll create ",(0,a.kt)("strong",{parentName:"p"},"event listeners")," in our code to listen for and react to events that happen in our webpage. This process is called ",(0,a.kt)("strong",{parentName:"p"},"event listening")," and it does everything that our event handler properties do, but it has an advantage that makes event listening the preferred method of handling events. "),(0,a.kt)("p",null,"Note that ",(0,a.kt)("strong",{parentName:"p"},"event handling")," is really an umbrella term that describes the processes and tools that developers use to write code that responds to events. In web development, event handling encompasses event handler properties, the concept of event listening with event listeners, and the outmoded form of handling events with HTML event handler attributes."),(0,a.kt)("p",null,"Let's dive into the new concept of event listening!  "),(0,a.kt)("h2",{id:"event-listeners"},"Event Listeners"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"So how do we create an event listener? We'll use object methods that are built-in to the Web APIs that make browser functionality available to web developers. Let's look at an example using the Mad Libs project. We previously used the ",(0,a.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler property to react to the submission event on our form. Here's the code snippet we'll work with:"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// These are the scripts from the Mad Libs project.\nwindow.onload = function() {\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    // omitted code to get the value for each form input\n    ...\n    // omitted code to set the story variables to the values we got from the form\n    ...\n    document.querySelector("div#story").removeAttribute("class");\n    event.preventDefault();\n  };\n};\n')),(0,a.kt)("p",null,"Take note that we've left some code out, the code that gets the form input values and sets the values of our Mad Libs story. Anytime we leave out code we'll use ellipses ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," in its place. We just want to focus in on the event handler property for the form submission event and learn how to use an event listener instead. Check out our updated code below \u2014 the biggest change when using event listeners is using a built-in method instead of a property."),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// These are the scripts from the Mad Libs project.\nwindow.onload = function() {\n  let form = document.querySelector("form");\n  // new code below\n  form.addEventListener("submit", function(event) {\n    ...\n    ...\n    document.querySelector("div#story").removeAttribute("class");\n    event.preventDefault();\n  // new code below  \n  }); \n};\n')),(0,a.kt)("p",null,"Let's break down this new code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We call the method ",(0,a.kt)("inlineCode",{parentName:"li"},"addEventListener()")," on our ",(0,a.kt)("inlineCode",{parentName:"li"},"form")," object to create the event listener. Just like with event handler properties, we target the object that we want to attach the event handler to. This process is often called ",(0,a.kt)("strong",{parentName:"li"},"registering")," the event listener."),(0,a.kt)("li",{parentName:"ul"},"We pass in two arguments to the ",(0,a.kt)("inlineCode",{parentName:"li"},"addEventListener()")," method:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"submit"')," is the first argument. This first argument is the name of the event that we want to target, and its data type is always a string. It doesn't have the usual ",(0,a.kt)("inlineCode",{parentName:"li"},"on")," that we add to our event handler properties. Here, we only reference the name of the event."),(0,a.kt)("li",{parentName:"ul"},"The second argument is a function. This is called the ",(0,a.kt)("strong",{parentName:"li"},"handler function")," that gets called and run when the corresponding event happens. It might surprise you that functions can be arguments just like strings and numbers but this is actually a very powerful feature of JavaScript. In our example code, we're specifically using an anonymous function expression, but we can use other types of functions here instead, like a function declaration (we'll see examples of this in future lessons). ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note that this second argument is more generally referred to as a ",(0,a.kt)("strong",{parentName:"li"},"callback function"),", which is any function that is passed into a method or function call as an argument. We'll learn more about callbacks later on in this lesson."))))),(0,a.kt)("li",{parentName:"ul"},"We close the event listener with ",(0,a.kt)("inlineCode",{parentName:"li"},"});"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"With the closing curly bracket ",(0,a.kt)("inlineCode",{parentName:"li"},"}")," we're closing the function that we pass in as the second argument. "),(0,a.kt)("li",{parentName:"ul"},"With the closing parenthesis ",(0,a.kt)("inlineCode",{parentName:"li"},")")," we're closing the ",(0,a.kt)("inlineCode",{parentName:"li"},"addEventListener()")," method call. "),(0,a.kt)("li",{parentName:"ul"},"With the semi colon ",(0,a.kt)("inlineCode",{parentName:"li"},";")," we're following JS convention by adding semicolons at the end of our statement ",(0,a.kt)("inlineCode",{parentName:"li"},"form.addEventListener(...);"),", where the ellipsis ",(0,a.kt)("inlineCode",{parentName:"li"},"...")," represents the two arguments we pass into our event listener method.")))),(0,a.kt)("p",null,"We use the same ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method for any event listener that we want to set up. Changing the event that we're targeting is a matter of changing the first argument that we pass into the ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListner()")," method. Let's see another example. This time, we'll update our ",(0,a.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler property to use an event listener instead."),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// new code below\nwindow.addEventListener("load", function() {\n  let form = document.querySelector("form");\n  form.addEventListener("submit", function(event) {\n    ...\n    ...\n    document.querySelector("div#story").removeAttribute("class");\n    event.preventDefault();\n  }); \n// new code below  \n});\n')),(0,a.kt)("p",null,"Just like in our initial example, we've called our ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method on the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object, passing in the string ",(0,a.kt)("inlineCode",{parentName:"p"},'"load"')," as the first argument to target the load event, and an anonymous function expression as the second argument as the event handler. Finally, we've made sure to close our ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method call after the end of the function expression close with the ",(0,a.kt)("inlineCode",{parentName:"p"},"});")," series of closing brackets, parens, and semicolon."),(0,a.kt)("p",null,"Since we're well practiced with event handler properties, function expressions, and using object methods, moving to use event listeners should be a more comfortable stretch for us. Everything we've learned about targeting specific objects (like ",(0,a.kt)("inlineCode",{parentName:"p"},"window"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),", or an HTML element object) to attach an event handler to remains unchanged with event listeners. The same goes for the types of events we can target."),(0,a.kt)("p",null,'Also, all of the "onevent" properties can be easily translated to the syntax we use to target events with event listeners: simply remove the "on" from the event property and make it into a string. Let\'s see some more examples:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onclick")," event handler property is the ",(0,a.kt)("inlineCode",{parentName:"li"},'"click"')," event in our event listener."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onmouseover")," event handler property is the ",(0,a.kt)("inlineCode",{parentName:"li"},'"mouseover"')," event in our event listener."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onkeydown")," event handler property is the ",(0,a.kt)("inlineCode",{parentName:"li"},'"keydown"')," event in our event listener.")),(0,a.kt)("p",null,"Let's turn now to the advantages of using event listeners. Then we'll review more information about callback functions."),(0,a.kt)("h3",{id:"the-benefits-of-using-event-listeners"},"The Benefits of Using Event Listeners"),(0,a.kt)("p",null,"The main difference between event handler properties and event listeners is that multiple event handlers can be added (or removed as we'll learn in a different lesson) using event listeners. This means that for one event on the same object (usually an HTML element), we can register multiple event handlers. "),(0,a.kt)("p",null,"Let's look at an example. In this example, we'll extend our Mad Libs website by adding new functionality to it. Say we not only wanted our submit event handler to get the form values for our Mad Libs story, but also display a new button that resets the form, and trigger an alert with an advertisement (yuck!). Now we have 3 different reactions to the submit event that we need to handle in our code. Let's see how we would do this with event listeners."),(0,a.kt)("p",null,"First, we need to add a new button to our HTML. We'll add it right below the closing ",(0,a.kt)("inlineCode",{parentName:"p"},"</form>")," tag:"),(0,a.kt)("div",{class:"filename"},"mad-libs.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n</form>\n<br />\n<button type="button" class="hidden" id="reset">Reset</button>  \n...\n')),(0,a.kt)("p",null,"We've also included ",(0,a.kt)("inlineCode",{parentName:"p"},"<br />")," tag before the new button to create a line break."),(0,a.kt)("p",null,"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute on the button is set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"button"'),". This attribute value makes the button have no default behavior and do nothing when pressed. We can target a click event on a button with ",(0,a.kt)("inlineCode",{parentName:"p"},'type="button"'),", but not a form submission event, so we cannot use ",(0,a.kt)("inlineCode",{parentName:"p"},'type="button"')," in a button element within an HTML form. "),(0,a.kt)("p",null,"This is in contrast to setting ",(0,a.kt)("inlineCode",{parentName:"p"},'type="submit"')," on a button element, which is meant to be used in form elements and responds specifically to a submission event and has a default behavior of refreshing the page. "),(0,a.kt)("p",null,"Next, let's look at the JS. Pay attention to the comments added to the code snippet below that describe the newly added code."),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'window.addEventListener("load", function() {\n  let form = document.querySelector("form");\n  // we\'ve accessed our button and story elements at the top level\n  // of the window load event listener to reuse these elements\n  // in multiple locations\n  let resetBtn = document.querySelector("button#reset");\n  let story = document.querySelector("div#story");\n\n  // the original form submission event listener\n  form.addEventListener("submit", function(event) {\n    ...\n    ...\n    // we\'ve updated our code to use the new story variable\n    story.removeAttribute("class");\n\n    // take note that we only need to call event.preventDefault();\n    // once, even though there are 3 different event listeners for the \n    // form submission event\n    event.preventDefault();\n  });\n\n  // new event listener for form submit event to show reset button\n  form.addEventListener("submit", function() {\n    reset.removeAttribute("class");\n  }); \n\n  // new event listener for form submit event to show advertisement\n  form.addEventListener("submit", function() {\n    window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");\n  }); \n\n  // new event listener for click event on reset button to \n  // reset form values\n  resetBtn.addEventListener("click", function() {\n    story.setAttribute("class", "hidden");\n    document.getElementById("person1Input").value = null;\n    document.getElementById("person2Input").value = null;\n    document.getElementById("animalInput").value = null;\n    document.getElementById("exclamationInput").value = null;\n    document.getElementById("verbInput").value = null;\n    document.getElementById("nounInput").value = null;\n  });\n});\n')),(0,a.kt)("p",null,"As we can see in the code snippet, we've added 3 separate event listeners on the form submission event. The reason why using the ",(0,a.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler property would fail in this case is because the property can only be set to one value, and anytime we reset the value, it overwrites the previous one."),(0,a.kt)("p",null,"So, if we updated the same code above to use event handler properties, only the last ",(0,a.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler property would be registered. Let's see what this looks like. Pay attention to the comments as you read the following code snippet."),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'window.addEventListener("load", function() {\n  let form = document.querySelector("form");\n  let resetBtn = document.getElementById("reset");\n  let story = document.getElementById("story");\n  // the original form onsubmit event handler\n  form.onsubmit = function(event) {\n    ...\n    ...\n    story.removeAttribute("class");\n    event.preventDefault();\n  };\n\n  // this onsubmit event handler overwrites the one above it\n  form.onsubmit = function() {\n    resetBtn.removeAttribute("class");\n  }; \n\n  // this onsubmit event handler overwrites the one above it\n  // this is the only remaining onsubmit event handler for the form\n  form.onsubmit = function() {\n    window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");\n  }; \n\n  resetBtn.addEventListener("click", function() {\n    story.setAttribute("class", "hidden");\n    document.getElementById("person1Input").value = null;\n    document.getElementById("person2Input").value = null;\n    document.getElementById("animalInput").value = null;\n    document.getElementById("exclamationInput").value = null;\n    document.getElementById("verbInput").value = null;\n    document.getElementById("nounInput").value = null;\n  });\n});\n')),(0,a.kt)("p",null,"In the above code snippet, we should be able to track that the first two ",(0,a.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handlers (for getting the form values/setting the story values and showing the reset button) have both been overwritten by the very last ",(0,a.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler. Now when we submit the form, our webpage will show the advertisement, but it won't display the story or reset button."),(0,a.kt)("p",null,"You may be thinking, so what! Couldn't we just combine each reaction to the form submission into one event handler function? Something like this:"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'window.addEventListener("load", function() {\n  let form = document.querySelector("form");\n  let resetBtn = document.getElementById("reset");\n  let story = document.getElementById("story");\n  // the original form submission event handler\n  form.onsubmit = function(event) {\n    // get form values and set story values\n    ...\n    ...\n    story.removeAttribute("class");\n    event.preventDefault();\n\n    // show reset button\n    resetBtn.removeAttribute("class");\n\n    // show ad\n    window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");\n  };\n\n  resetBtn.addEventListener("click", function() {\n    story.setAttribute("class", "hidden");\n    document.getElementById("person1Input").value = null;\n    document.getElementById("person2Input").value = null;\n    document.getElementById("animalInput").value = null;\n    document.getElementById("exclamationInput").value = null;\n    document.getElementById("verbInput").value = null;\n    document.getElementById("nounInput").value = null;\n  });\n});\n')),(0,a.kt)("p",null,"Yes, we can do this, and we can use code commentary to label the different reactions we are making to the form submission. "),(0,a.kt)("p",null,"We can also do this using the ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method, just like the following code snippet demonstrates. Note that ellipses ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," represent unchanged code that's omitted from the example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("load", function() {\n  let form = document.querySelector("form");\n  let resetBtn = document.getElementById("reset");\n  let story = document.getElementById("story");\n  // the original form submission event handler\n  form.addEventListener("submit", function(event) {\n    // get form values and set story values\n    ...\n    ...\n    story.removeAttribute("class");\n    event.preventDefault();\n\n    // show reset button\n    resetBtn.removeAttribute("class");\n\n    // show ad\n    window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");\n  });\n  ...\n});\n')),(0,a.kt)("p",null,"If we can do this, it begs the question: why would we NOT do this? The answer has to do with how we organize our code so that it scales well and it is easy to understand."),(0,a.kt)("p",null,'When we talk about code organization and choosing between putting code into one function or into multiple functions (or event handlers), we should be asking ourselves, "what would make my code easier to read and understand?". There will be some differences when we answer this question, but a good guideline for code organization is to separate code by what it does in our application. '),(0,a.kt)("p",null,"With our Mad Libs website's expanded functionality, we now have 3 reactions to the form submission: get and set the Mad Lib story values, show an ad, and display a reset button. As far as organizing our code, we have two main options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Organize the three reactions into one submit event handler function based on its shared purpose of responding to the submit event."),(0,a.kt)("li",{parentName:"ul"},"Organize the three reactions into three separate submit event handler functions based on recognizing that each reaction has a different purpose in our webpage (like showing an ad versus displaying the Mad Libs story).")),(0,a.kt)("p",null,"So what's the correct choice? Well, both options work when our scripts are as small as ours are. That's a fact."),(0,a.kt)("p",null,"However, if our submit event triggered 5 or 10 different reactions, then our code will likely be easier to understand if we separate our reactions into multiple event listeners instead of using one very large event listener. This is an example of using multiple event listeners to improve code organization and how readable it is."),(0,a.kt)("p",null,"Or, what if we wanted the advertisement to show only once, and not every time the form is submitted \u2014 well, we'd need to separate the advertisement into its own event listener that we could cancel after it has been run once. If we had originally chosen to separate each reaction into its own event listener, then we could easily update our code to address the new requirement (to only show the ad once). This is an example of using multiple event listeners to improve how well our code scales as requirements change."),(0,a.kt)("p",null,"Because using event listeners with the ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method allow us to attach multiple handlers to the same event, they are considered the best choice for applications that scale (get larger and change in requirements); they gives us the flexibility at any point to change and expand the functionality of our website while maintaining good code organization. So, ",(0,a.kt)("strong",{parentName:"p"},"going forward, you should choose to use event listeners over event handler properties.")),(0,a.kt)("p",null,'You should also pause periodically to ask yourself "what would make my code easier to read and understand?". We\'ve just started to learn about new ways to organize our code, so if you don\'t feel comfortable with this decision making process quite yet, that\'s entirely normal and expected. The idea is to start reflecting on these questions, but not to get hung up on finding the most efficient or "perfect" code organization. It takes practice as well as actually building larger and more complex applications to get the hang of good code organization. '),(0,a.kt)("p",null,"Also take note that while there are always multiple solutions when it comes to code organization (and benefits and drawbacks to consider for each), there are helpful standbys to always incorporate into your code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use code comments to describe the different functions in your scripts. You don't need to go overboard, but it can be helpful when there are longer chunks or when you have a long function that does a lot of things."),(0,a.kt)("li",{parentName:"ul"},"Use descriptive variable and function names. "),(0,a.kt)("li",{parentName:"ul"},"Use correct spacing, new lines, and indentation. This helps immensely for readability. ")),(0,a.kt)("h2",{id:"more-about-callback-functions"},"More About Callback Functions"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Callbacks")," or ",(0,a.kt)("strong",{parentName:"p"},"callback functions"),' is a concept in computer programming that many languages implement. A callback function (or just "callback") is any function that is passed to another function or method as an argument. This callback function isn\'t called immediately, though. The function/method that receives the callback function as an argument is expected to call ("call back to") the function at a later time. '),(0,a.kt)("p",null,"We can see this process at work in the ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method. Let's review this method. ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," has two required parameters. In pseudocode, this looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// this is pseudocode!\ntarget.addEventListener(eventName, callbackFunc);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target")," is the object we are targeting \u2014 an HTML element, the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object, or the ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," object."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eventName")," is the first parameter. Here we'll pass in a string with the name of the event we're creating the listener for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callbackFunc")," is the second parameter. Here we'll pass in a function that contains all of the code that we want to run in reaction to the event. ")),(0,a.kt)("p",null,"Even though we are passing a callback function as the second argument of the ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method, this function only gets called when the corresponding event happens. Not immediately, but at a later time. This timing distinction is important and a big reason why callbacks exist, which is to handle asynchronous JavaScript code. We won't get into that now, but we will revisit asynchrony and callbacks later in the program, so there will be more opportunity to become familiar with this concept."),(0,a.kt)("p",null,'Also, take note that categorizing functions as "callbacks" does not have to do with the type of a function (declaration, expression, or another \u2014 how we define the function). Instead it has to do with a function\'s application \u2014 where we are using it in our code. Any function that is used as an argument for another function automatically becomes a callback function.'),(0,a.kt)("p",null,"It will be unlikely that you ever create a custom function in the program that takes a function as an argument. There won't be a lot of use cases for that. However, you will work with some built-in methods and functions (of JavaScript or Web APIs) that require a function for an argument (a callback)."),(0,a.kt)("p",null,"If this sounds complicated and confusing, that's totally expected \u2014 especially if you're new to coding. There are a lot of complicated things going on under the hood. Learning to drive is one thing \u2014 and it's not too hard. But learning how to build and maintain a car is a lot more work! We'll revisit JavaScript terminology and the innerworkings of both JS and our web browser regularly, so there will be more opportunity for review and practice."),(0,a.kt)("h2",{id:"summary-and-completed-code-for-the-mad-libs-project"},"Summary and Completed Code for the Mad Libs Project"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this lesson we learned about event listening. Some key topics we covered are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Event listening is another method of event handling. ",(0,a.kt)("strong",{parentName:"li"},"Event handling")," is an umbrella term that describes the processes and tools that developers use to write code that responds to events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Event listening")," is the process of creating event listeners in our code to listen for and react to events that happen in our webpage. "),(0,a.kt)("li",{parentName:"ul"},"When we call ",(0,a.kt)("inlineCode",{parentName:"li"},"addEventListener()")," on a target (a DOM element, ",(0,a.kt)("inlineCode",{parentName:"li"},"window"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"document"),"), this process is called ",(0,a.kt)("strong",{parentName:"li"},"registering")," the event listener."),(0,a.kt)("li",{parentName:"ul"},"We can create an event listener with the ",(0,a.kt)("inlineCode",{parentName:"li"},"addEventListener()")," method, which takes two arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The first argument is the event name as a string, like ",(0,a.kt)("inlineCode",{parentName:"li"},'"click"')," or ",(0,a.kt)("inlineCode",{parentName:"li"},'"submit"'),"."),(0,a.kt)("li",{parentName:"ul"},"The second argument is the ",(0,a.kt)("strong",{parentName:"li"},"handler function"),", the function that handles reacting to the event."))),(0,a.kt)("li",{parentName:"ul"},"The benefit of using event listeners is that we can create multiple handlers for the same event on the same target (a DOM element, ",(0,a.kt)("inlineCode",{parentName:"li"},"window"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"document"),", or otherwise). This improves our code organization and how easy it is to read and understand, and it also makes our code able to scale well. Event listeners are considered the recommended way to set up event handling in applications."),(0,a.kt)("li",{parentName:"ul"},"Any function that is passed into another function/method as an argument is called a ",(0,a.kt)("strong",{parentName:"li"},"callback function"),". ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'The "handler" function that we pass into the ',(0,a.kt)("inlineCode",{parentName:"li"},"addEventListener()")," method is a callback function. "),(0,a.kt)("li",{parentName:"ul"},"Callback functions are all about the application of functions \u2014 where they are being used in our code \u2014 and they are important to asynchronous JavaScript, which we'll learn about down the road. ")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To view the completed code for our Mad Libs project visit the cheat sheet.")," The code includes the new functionality of the reset button and the advertisement, and a separate event listener for each reaction to the form submission event."))}h.isMDXComponent=!0}}]);