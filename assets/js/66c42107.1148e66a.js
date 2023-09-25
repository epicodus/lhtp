"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Reusing Components",id:"reusing_components",slug:"reusing_components",hide_table_of_contents:!0,sidebar_position:7,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3f_reusing_components.md"},i=void 0,s={unversionedId:"react_part_time_evening/react-fundamentals-part-2/reusing_components",id:"react_part_time_evening/react-fundamentals-part-2/reusing_components",title:"Reusing Components",description:"One of React's many advantages is its ability to reuse components. Whenever we are in a situation where we might need to reuse code, we should think carefully about whether that code can be extracted into another component and then used where needed.",source:"@site/docs/react_part_time_evening/5_react-fundamentals-part-2/3f_reusing_components.md",sourceDirName:"react_part_time_evening/5_react-fundamentals-part-2",slug:"/react_part_time_evening/react-fundamentals-part-2/reusing_components",permalink:"/react_part_time_evening/react-fundamentals-part-2/reusing_components",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Reusing Components",id:"reusing_components",slug:"reusing_components",hide_table_of_contents:!0,sidebar_position:7,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3f_reusing_components.md"},sidebar:"react_part_time_evening",previous:{title:"Deleting a Ticket",permalink:"/react_part_time_evening/react-fundamentals-part-2/deleting_a_ticket"},next:{title:"Updating a Ticket",permalink:"/react_part_time_evening/react-fundamentals-part-2/updating_a_ticket"}},l={},p=[{value:"Making a Reusable Form Component",id:"making-a-reusable-form-component",level:2},{value:"Incorporating Our Reusable Form Component",id:"incorporating-our-reusable-form-component",level:2},{value:"When to Make Reusable Components",id:"when-to-make-reusable-components",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of React's many advantages is its ability to reuse components. Whenever we are in a situation where we might need to reuse code, we should think carefully about whether that code can be extracted into another component and then used where needed."),(0,r.kt)("p",null,"We are almost ready to add update functionality to our Help Queue application, but before we do, we have an opportunity to think about code reusability. Currently, our ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component uses a form. We will need to build an ",(0,r.kt)("inlineCode",{parentName:"p"},"EditTicketForm")," that will use a form with the exact same fields. In fact, we can potentially use almost the exact same form for both components. Instead of copying the code into both components (which isn't DRY), let's extract some of that code into a component called ",(0,r.kt)("inlineCode",{parentName:"p"},"ReusableForm"),"."),(0,r.kt)("h2",{id:"making-a-reusable-form-component"},"Making a Reusable Form Component"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will keep this component simple. All it needs to do is render the form. Here's the code:"),(0,r.kt)("div",{class:"filename"},"ReusableForm.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from \"react\";\nimport PropTypes from \"prop-types\";\n\nfunction ReusableForm(props) {\n  return (\n    <React.Fragment>\n      <form onSubmit={props.formSubmissionHandler}>\n        <input\n          type='text'\n          name='names'\n          placeholder='Pair Names' />\n        <input\n          type='text'\n          name='location'\n          placeholder='Location' />\n        <textarea\n          name='issue'\n          placeholder='Describe your issue.' />\n        <button type='submit'>{props.buttonText}</button>\n      </form>\n    </React.Fragment>\n  );\n}\n\nReusableForm.propTypes = {\n  formSubmissionHandler: PropTypes.func,\n  buttonText: PropTypes.string\n};\n\nexport default ReusableForm;\n")),(0,r.kt)("p",null,"The JSX here is almost exactly the same as the form we've already built. There are just two small differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit")," function is now set to a prop called ",(0,r.kt)("inlineCode",{parentName:"p"},"formSubmissionHandler"),". This is because the form for editing will trigger a different method than the form for creating a new ticket.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We will also pass in a prop for ",(0,r.kt)("inlineCode",{parentName:"p"},"buttonText"),". We will want the button for each form to have different text."))),(0,r.kt)("p",null,"If we wanted to, we could pass in props for all of the inputs in our form fields. That would be useful if our application had different forms with different fields. However, our forms will look exactly the same so we won't do that here."),(0,r.kt)("p",null,"Finally, we also need to pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"propTypes")," for both of our props."),(0,r.kt)("h2",{id:"incorporating-our-reusable-form-component"},"Incorporating Our Reusable Form Component"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now let's refactor our ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," to use this reusable component. We only need to import our ",(0,r.kt)("inlineCode",{parentName:"p"},"Reusable Form")," and then update our ",(0,r.kt)("inlineCode",{parentName:"p"},"return()"),":"),(0,r.kt)("div",{class:"filename"},"NewTicketForm.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport ReusableForm from "./ReusableForm";\n...\n\n  return (\n    <React.Fragment>\n      <ReusableForm \n        formSubmissionHandler={handleNewTicketFormSubmission}\n        buttonText="Help!" />\n    </React.Fragment>\n  );\n}\n\n...\n')),(0,r.kt)("p",null,"We pass in two props: the method for handling new tickets (",(0,r.kt)("inlineCode",{parentName:"p"},"handleNewTicketFormSubmission"),") and the button text."),(0,r.kt)("p",null,"There's not much advantage to this reusable component yet. However, in the next lesson, we will be able to use this component again for our edit form."),(0,r.kt)("h2",{id:"when-to-make-reusable-components"},"When to Make Reusable Components"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"When should we try to make reusable components? In general, we should aim to reuse code whenever we are using it across multiple components. Forms are a common example but there are others, too, such as different kinds of welcome content, more complex headers, and so on. If there are small variations in the code like in the example above, we can use props to handle those differences."),(0,r.kt)("p",null,"As always, we should look for opportunities to DRY up our code. Building reusable components is a great way to refactor and improve our React applications."))}m.isMDXComponent=!0}}]);