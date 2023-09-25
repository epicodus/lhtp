"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={title:"10. Building a Functional Application (Part 2)",id:"building_a_functional_application_part_2",slug:"building_a_functional_application_part_2",hide_table_of_contents:!0,sidebar_position:30,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0m_building_a_functional_application_part_2.md"},r=void 0,l={unversionedId:"react/functional-programming-with-javascript/building_a_functional_application_part_2",id:"react/functional-programming-with-javascript/building_a_functional_application_part_2",title:"10. Building a Functional Application (Part 2)",description:"In the last lesson, we built a function factory for incrementing a plant's attributes. However, we still have no place to save that information. If we wanted this application to be truly functional, we could retrieve the state from the DOM when we need to update it. Feel free to try this approach in class \u2014 but don't forget that it's not very efficient to query the DOM!",source:"@site/docs/react/2_functional-programming-with-javascript/0m_building_a_functional_application_part_2.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/building_a_functional_application_part_2",permalink:"/lhtp/react/functional-programming-with-javascript/building_a_functional_application_part_2",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"10. Building a Functional Application (Part 2)",id:"building_a_functional_application_part_2",slug:"building_a_functional_application_part_2",hide_table_of_contents:!0,sidebar_position:30,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0m_building_a_functional_application_part_2.md"},sidebar:"react",previous:{title:"9. Building a Functional Application (Part 1)",permalink:"/lhtp/react/functional-programming-with-javascript/building_a_functional_application_part_1"},next:{title:"11. Prior Course Section Survey",permalink:"/lhtp/react/functional-programming-with-javascript/prior_course_section_survey"}},s={},u=[{value:"Bringing It All Together",id:"bringing-it-all-together",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we built a function factory for incrementing a plant's attributes. However, we still have no place to save that information. If we wanted this application to be truly functional, we could retrieve the state from the DOM when we need to update it. Feel free to try this approach in class \u2014 but don't forget that it's not very efficient to query the DOM!"),(0,i.kt)("p",null,"We are going to store our state inside a function. This approach will give us more practice with closures, one of the most important concepts we can understand in terms of taking our skills to the next level. Note that this lesson contains more challenging content. We recommend reading it several times, carefully recreating the code in class, and being patient with yourself."),(0,i.kt)("p",null,"Here's our function for storing state. Note that all the function names are abstracted. We could potentially reuse this function elsewhere as needed, too."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const storeState = () => {\n  let currentState = {};\n  return (stateChangeFunction) => {\n    const newState = stateChangeFunction(currentState);\n    currentState = {...newState};\n    return newState;\n  }\n}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, our outer function is stored in the constant ",(0,i.kt)("inlineCode",{parentName:"li"},"storeState"),". It does not take an argument. The only job of the outer function is to store the ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState")," of an object."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState")," of an object will be initialized as a ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),". Note that we use ",(0,i.kt)("inlineCode",{parentName:"li"},"let")," because the ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState")," will be mutated each time the inner function is called."),(0,i.kt)("li",{parentName:"ol"},"Our outer function returns an anonymous inner function that takes one parameter called ",(0,i.kt)("inlineCode",{parentName:"li"},"stateChangeFunction"),". This inner function will take a function as an argument. We can do this because functions are first-class citizens in JavaScript. The function that we pass in will specify the exact change that should be made to ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState"),". Note that we've already written the function that will be passed in as an argument \u2014 we will demonstrate how it works soon."),(0,i.kt)("li",{parentName:"ol"},"The line ",(0,i.kt)("inlineCode",{parentName:"li"},"const newState = stateChangeFunction(currentState);")," will take the function we pass in as an argument and then call it on ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState"),". Instead of mutating ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState"),", we will save the new state in a constant called ",(0,i.kt)("inlineCode",{parentName:"li"},"newState"),"."),(0,i.kt)("li",{parentName:"ol"},"Now it's time to break the rules. We are going to need to update the ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState"),". We will make a copy of ",(0,i.kt)("inlineCode",{parentName:"li"},"newState")," and assign it to ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState"),". (This is similar to what React does with its ",(0,i.kt)("inlineCode",{parentName:"li"},"setState()")," method. We'll learn about ",(0,i.kt)("inlineCode",{parentName:"li"},"setState()")," in the next course section.)"),(0,i.kt)("li",{parentName:"ol"},"Finally, our inner function will return the ",(0,i.kt)("inlineCode",{parentName:"li"},"newState"),". Why are we returning ",(0,i.kt)("inlineCode",{parentName:"li"},"newState")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState"),"? Well, in this particular use case, it doesn't matter which we do because both ",(0,i.kt)("inlineCode",{parentName:"li"},"newState")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState")," are equal. In a basic React application, we'd update the state and then return that state. In that case, it makes more sense to return ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState"),". But here's another interesting use case which we'll learn about in a few weeks when we use Firestore, a cloud database solution. With Firestore, we might think of ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState")," as being the state of our database. However, because it takes time to update and return ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState")," (an async operation), we can provide a quick snapshot of state to users by just returning the equivalent of ",(0,i.kt)("inlineCode",{parentName:"li"},"newState"),".")),(0,i.kt)("p",null,"Next, we will need to store our function in another constant like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const stateControl = storeState();\n")),(0,i.kt)("p",null,"Here, we are actually invoking the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeState()")," function and creating a closure over the ",(0,i.kt)("inlineCode",{parentName:"p"},"currentState")," variable in the outer function."),(0,i.kt)("p",null,"Why are we calling it ",(0,i.kt)("inlineCode",{parentName:"p"},"stateControl")," instead of something like ",(0,i.kt)("inlineCode",{parentName:"p"},"stateChanger"),"? Well, we might also just want to ",(0,i.kt)("em",{parentName:"p"},"look")," at the current state \u2014 not change it \u2014 so ",(0,i.kt)("inlineCode",{parentName:"p"},"stateChanger")," wouldn't be the best name in that situation."),(0,i.kt)("p",null,"Let's take a look at the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"stateControl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"(stateChangeFunction) => {\n  const newState = stateChangeFunction(currentState);\n  currentState = {...newState};\n  return newState;\n}\n")),(0,i.kt)("p",null,"As we can see, ",(0,i.kt)("inlineCode",{parentName:"p"},"stateControl")," holds the inner function. It also retains the ",(0,i.kt)("inlineCode",{parentName:"p"},"currentState")," variable from the outer function. When ",(0,i.kt)("inlineCode",{parentName:"p"},"storeState()")," is called and stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"stateControl")," variable, ",(0,i.kt)("inlineCode",{parentName:"p"},"currentState")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,i.kt)("p",null,"Now let's try passing one of our feeding functions into ",(0,i.kt)("inlineCode",{parentName:"p"},"stateControl"),". Specifically, we'll pass in the feeding function ",(0,i.kt)("inlineCode",{parentName:"p"},"blueFood()")," which we created in the last lesson. This function increments the food level of a plant by 5."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fedPlant = stateControl(blueFood);\n> { soil: 5 }\n")),(0,i.kt)("p",null,"Here's what just happened:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We passed in the variable ",(0,i.kt)("inlineCode",{parentName:"li"},"blueFood")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"stateControl"),". This invokes the inner function inside ",(0,i.kt)("inlineCode",{parentName:"li"},"storeState()"),". (Be careful here \u2014 we don't want to pass in ",(0,i.kt)("inlineCode",{parentName:"li"},"blueFood()")," because we don't want the function to be invoked yet!)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"blueFood")," is passed in as an argument for the ",(0,i.kt)("inlineCode",{parentName:"li"},"stateChangeFunction")," parameter. Now ",(0,i.kt)("inlineCode",{parentName:"li"},"const newState = blueFood(currentState);"),"."),(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"blueFood(currentState)")," is called, it invokes the following function:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'(state) => ({\n  ...state,\n  ["soil"] : (state["soil"] || 0) + 5\n})\n')),(0,i.kt)("p",null,"Remember that ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," replaces the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," variable and ",(0,i.kt)("inlineCode",{parentName:"p"},'"soil"')," replaces the ",(0,i.kt)("inlineCode",{parentName:"p"},"prop")," variable because ",(0,i.kt)("inlineCode",{parentName:"p"},"blueFood")," increments ",(0,i.kt)("inlineCode",{parentName:"p"},"soil")," by 5. If this isn't clear, you may want to review how we used a curried function in the last lesson to create ",(0,i.kt)("inlineCode",{parentName:"p"},"blueFood")," in the first place."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"currentState")," is passed into the ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," parameter. Because ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState")," doesn't have a ",(0,i.kt)("inlineCode",{parentName:"li"},"soil")," property yet, it defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," before ",(0,i.kt)("inlineCode",{parentName:"li"},"5")," is added. This is because we are using the ",(0,i.kt)("inlineCode",{parentName:"li"},"||")," operator to ensure the default value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"soil")," property is 0 if it hasn't been defined.")),(0,i.kt)("p",null,"Now, if we pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"greenFood"),", we'll get the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const plantFedAgain = stateControl(greenFood);\n> { soil: 15 }\n")),(0,i.kt)("p",null,"Our function is successfully storing the plant's state!"),(0,i.kt)("p",null,"As you can see in the example above, ",(0,i.kt)("inlineCode",{parentName:"p"},"plantFedAgain")," only has a ",(0,i.kt)("inlineCode",{parentName:"p"},"soil")," property. That's because our ",(0,i.kt)("inlineCode",{parentName:"p"},"currentState")," variable begins as an empty object. We could do the following to initialize the plant with all three properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const storeState = () => {\n  let currentState = { soil: 0, light: 0, water: 0 }; //Small change made to function here.\n  return (stateChangeFunction) => {\n    const newState = stateChangeFunction(currentState);\n    currentState = {...newState};\n    return newState;\n  }\n}\n")),(0,i.kt)("p",null,"While the version above will work for our small application, it's not very reusable. What if we eventually want to add other attributes or use it for other kinds of objects entirely?"),(0,i.kt)("p",null,"We could also give the outer function a parameter like ",(0,i.kt)("inlineCode",{parentName:"p"},"initialState")," and do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const storeState = (initialState) => {\n  let currentState = initialState; // We could pass in an initial state to the object instead of starting with an empty object as well.\n  return (stateChangeFunction) => {\n    const newState = stateChangeFunction(currentState);\n    currentState = {...newState};\n    return newState;\n  }\n}\n")),(0,i.kt)("p",null,"This would work correctly. However, for our use case, it won't be necessary for our plant to start with any properties. You may find that you need to set an initial value when you practice building out applications using closures in class. For instance, let's say your application has multiple different plants, each with different starting attributes. You'd need to pass in the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialState")," of the object to set its properties as we do in the example above."),(0,i.kt)("p",null,"A note worth mentioning again: it is very important that we pass in a variable holding a function into ",(0,i.kt)("inlineCode",{parentName:"p"},"stateControl")," and ",(0,i.kt)("strong",{parentName:"p"},"not")," the invoked function. This would not work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const blueFood = changeState("soil")(5);\n\nconst fedPlant = stateControl(blueFood());\n\n')),(0,i.kt)("p",null,"Specifically, passing in ",(0,i.kt)("inlineCode",{parentName:"p"},"blueFood()")," as an argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"stateControl()")," won't work: ",(0,i.kt)("inlineCode",{parentName:"p"},"stateControl(blueFood());"),". "),(0,i.kt)("p",null,"Why? ",(0,i.kt)("inlineCode",{parentName:"p"},"blueFood")," needs to take the ",(0,i.kt)("inlineCode",{parentName:"p"},"currentState")," as an argument, and can only do so inside the body of the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeState")," function itself. If we invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},"blueFood")," function too early without an argument like we did above, we'll get an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Uncaught TypeError: Cannot read property 'soil' of undefined\n")),(0,i.kt)("p",null,"This is because the ",(0,i.kt)("inlineCode",{parentName:"p"},"blueFood")," function expects to be given an object as an agrument. This would be a good reason to add some error handling to the function to deal with this use case. Try doing so in your own applications!"),(0,i.kt)("p",null,"Before we move on, there is one other important issue we might want to cover \u2014 it's not necessarily as relevant in this little plant application but it will likely be something you'll want to access in projects during this section."),(0,i.kt)("p",null,"We've covered how to change state \u2014 but what if we just want to access it but not change it?"),(0,i.kt)("p",null,"Well, let's look at our ",(0,i.kt)("inlineCode",{parentName:"p"},"storeState")," function literal again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const storeState = () => {\n  let currentState = {};\n  return (stateChangeFunction) => {\n    const newState = stateChangeFunction(currentState);\n    currentState = {...newState};\n    return newState;\n  }\n}\n")),(0,i.kt)("p",null,"We know that we need to do something with this particular function in order to see the state because this is where our ",(0,i.kt)("inlineCode",{parentName:"p"},"currentState")," is enclosed \u2014 there's no way to access it other than this function!"),(0,i.kt)("p",null,"Well, in this case, we just need the ",(0,i.kt)("inlineCode",{parentName:"p"},"stateChangeFunction")," be a function that takes the original state and then returns it. In other words, the ",(0,i.kt)("inlineCode",{parentName:"p"},"stateChangeFunction")," needs to be the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"state => state\n")),(0,i.kt)("p",null,"Well, it would be a bit annoying to have to pass that in wherever we want to see the current state. However, we can do something else \u2014 since functions are first class citizens, we can pass this in as a default parameter like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const storeState = () => {\n  let currentState = {};\n  return (stateChangeFunction = state => state) => {\n    const newState = stateChangeFunction(currentState);\n    currentState = {...newState};\n    return newState;\n  }\n}\n")),(0,i.kt)("p",null,"Here's the change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"return (stateChangeFunction = state => state)\n")),(0,i.kt)("p",null,"It may look strange, but what we are saying here is that if ",(0,i.kt)("inlineCode",{parentName:"p"},"stateChangeFunction")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," (no argument is passed in), the ",(0,i.kt)("inlineCode",{parentName:"p"},"stateChangeFunction")," should be ",(0,i.kt)("inlineCode",{parentName:"p"},"state => state"),"."),(0,i.kt)("p",null,"That means all we need to do is call ",(0,i.kt)("inlineCode",{parentName:"p"},"stateControl()")," (without arguments) in order to just return the current state!"),(0,i.kt)("h2",{id:"bringing-it-all-together"},"Bringing It All Together"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Finally, here's how we could implement this in the browser. This example has been kept very simple and can only increment soil. This example does not include webpack, testing, or separation of logic. Try adding this functionality on your own. Note also that manipulating the DOM will always lead to functions that produce side effects. There's no way around it!"),(0,i.kt)("div",{class:"filename"},"plant.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// This function stores our state.\nconst storeState = () => {\n    let currentState = {};\n    return (stateChangeFunction = state => state) => {\n      const newState = stateChangeFunction(currentState);\n      currentState = {...newState};\n      return newState;\n    }\n  }\n  \nconst stateControl = storeState();\n\n// This is a function factory. \n// We can easily create more specific functions that \n// alter a plant's soil, water, and light to varying degrees.\nconst changeState = (prop) => {\n  return (value) => {\n    return (state) => ({\n      ...state,\n      [prop] : (state[prop] || 0) + value\n    })\n  }\n}\n\n// We create four functions using our function factory. \n// We could easily create many more.\nconst feed = changeState(\"soil\")(1);\nconst blueFood = changeState(\"soil\")(5);\n\nconst hydrate = changeState(\"water\")(1);\nconst superWater = changeState(\"water\")(5);\n\nwindow.onload = function() {\n\n  // This function has side effects because we are manipulating the DOM.\n  // Manipulating the DOM will always be a side effect. \n  // Note that we only use one of our functions to alter soil. \n  // You can easily add more.\n  document.getElementById('feed').onclick = function() {\n    const newState = stateControl(blueFood);\n    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;\n  };\n\n  // This function doesn't actually do anything useful in this application \n  // \u2014 it just demonstrates how we can \"look\" at the current state \n  // (which the DOM is holding anyway). \n  // However, students often do need the ability to see the current state \n  // without changing it so it's included here for reference.\n  document.getElementById('show-state').onclick = function() {\n    // We just need to call stateControl() without arguments \n    // to see our current state.\n    const currentState = stateControl();\n    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;\n  };\n};\n")),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <script type="text/javascript" src="plant.js"><\/script>\n    <title>Grow Your Plant</title>\n  </head>\n  <body>\n    <button id="feed">Add soil</button>\n    <button id="show-state">Current Stats</button>\n    <h1>Your Plant\'s Values</h1>\n    <h3><div id="soil-value">0</div></h3>\n  </body>\n</html>\n')))}d.isMDXComponent=!0}}]);