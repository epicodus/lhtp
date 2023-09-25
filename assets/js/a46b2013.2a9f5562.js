"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[48947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Adding a Form",id:"adding_a_form",slug:"adding_a_form",hide_table_of_contents:!0,sidebar_position:34,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/2b_adding_a_form.md"},i=void 0,l={unversionedId:"react_part_time/react-fundamentals/adding_a_form",id:"react_part_time/react-fundamentals/adding_a_form",title:"Adding a Form",description:"So far, the form component in our Help Queue application just contains placeholder data. We'll need an actual form to add tickets to the queue. In this lesson, we'll create a form that collects the value of different fields by taking advantage of event.target. Then, over the next several lessons, we'll learn how to take advantage of unidirectional data flow and shared state so our form correctly adds tickets to the queue.",source:"@site/docs/react_part_time/4_react-fundamentals/2b_adding_a_form.md",sourceDirName:"react_part_time/4_react-fundamentals",slug:"/react_part_time/react-fundamentals/adding_a_form",permalink:"/lhtp/react_part_time/react-fundamentals/adding_a_form",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Adding a Form",id:"adding_a_form",slug:"adding_a_form",hide_table_of_contents:!0,sidebar_position:34,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/2b_adding_a_form.md"},sidebar:"react_part_time",previous:{title:"UUID Library",permalink:"/lhtp/react_part_time/react-fundamentals/uuid_library"},next:{title:"Unidirectional Data Flow",permalink:"/lhtp/react_part_time/react-fundamentals/unidirectional_data_flow"}},s={},c=[{value:"Adding a Form",id:"adding-a-form",level:2},{value:"Adding an Event Handler to Our Form",id:"adding-an-event-handler-to-our-form",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So far, the form component in our Help Queue application just contains placeholder data. We'll need an actual form to add tickets to the queue. In this lesson, we'll create a form that collects the value of different fields by taking advantage of ",(0,r.kt)("inlineCode",{parentName:"p"},"event.target"),". Then, over the next several lessons, we'll learn how to take advantage of unidirectional data flow and shared state so our form correctly adds tickets to the queue."),(0,r.kt)("h2",{id:"adding-a-form"},"Adding a Form"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll start by replacing the placeholder text in the ",(0,r.kt)("inlineCode",{parentName:"p"},"return()")," of our ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component with an actual form:"),(0,r.kt)("div",{class:"filename"},"NewTicketForm.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n\nfunction NewTicketForm() {\n\n  ...\n\n  return (\n    <React.Fragment>\n      <form onSubmit={handleNewTicketFormSubmission}>\n        <input\n          type='text'\n          name='names'\n          placeholder='Pair Names' />\n        <input\n          type='text'\n          name='location'\n          placeholder='Location' />\n        <textarea\n          name='issue'\n          placeholder='Describe your issue.' />\n        <button type='submit'>Help!</button>\n      </form>\n    </React.Fragment>\n  );\n}\n\n...\n\n")),(0,r.kt)("p",null,"Notice that our form has a new type of event handler called ",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit"),". This is similar to when we added an ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," event handler when we learned how to toggle local state. The difference is that ",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit")," triggers when the submit button of a form is clicked."),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit")," handler will trigger the function ",(0,r.kt)("inlineCode",{parentName:"p"},"{handleNewTicketFormSubmission}"),". We haven't written that function yet, but we will soon. Note that we are calling ",(0,r.kt)("inlineCode",{parentName:"p"},"handleNewTicketFormSubmission")," a function, not a method. This component isn't a class component so it has functions, not methods that are called on the instance of a class. That also means we'll be using the ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," keyword, unlike with class components."),(0,r.kt)("h2",{id:"adding-an-event-handler-to-our-form"},"Adding an Event Handler to Our Form"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now that we have a form in place, we need a ",(0,r.kt)("inlineCode",{parentName:"p"},"handleNewTicketFormSubmission")," function. This function will be triggered when the form is submitted."),(0,r.kt)("p",null,"Let's add that function just after the lines of code where we instantiated our form field variables:"),(0,r.kt)("div",{class:"filename"},"NewTicketForm.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nfunction NewTicketForm(){\n\n  function handleNewTicketFormSubmission(event) {\n    event.preventDefault();\n    console.log(event.target.names.value);\n    console.log(event.target.location.value);\n    console.log(event.target.issue.value);\n  }\n...\n")),(0,r.kt)("p",null,"Once again, note that we have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," keyword here. We can't just use ES6 class syntax to define our functions because this function is inside another function, not inside a class."),(0,r.kt)("p",null,"We need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," to our form just as we have in the past. The default behavior of an HTML submit button is to submit data and refresh the page. We don't want it to refresh the page so we prevent the default behavior."),(0,r.kt)("p",null,"Finally, we'll ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," the values of our fields. Note that we are taking advantage of ",(0,r.kt)("inlineCode",{parentName:"p"},"event.target"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"event.target")," gives us access to the event that was just fired. In this case, we just had a submit event. We can actually grab the values that came from that submit event. Specifically, we can grab the values based on their ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property. We just need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"event.target.[input-field-name-goes-here].value"),"."),(0,r.kt)("p",null,"Now if we run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start"),", we will see that the fields from our form are properly logged in the console."),(0,r.kt)("p",null,"In the next lesson, we'll learn about unidirectional data flow. Then, in the lesson after that, we'll learn how we can get our form data to its parent ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketControl")," component, which can actually handle state."))}p.isMDXComponent=!0}}]);