"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[88864],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(r),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(b,i(i({ref:e},p),{},{components:r})):n.createElement(b,i({ref:e},p))}));function b(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98685:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"4. Literal Notation Versus Constructors",id:"literal_notation_versus_constructors",slug:"literal_notation_versus_constructors",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/0d_literal_notation_vs_constructors.md"},i=void 0,s={unversionedId:"intermediate_javascript_part_time/object-oriented-javascript/literal_notation_versus_constructors",id:"intermediate_javascript_part_time/object-oriented-javascript/literal_notation_versus_constructors",title:"4. Literal Notation Versus Constructors",description:"In the previous lesson we created objects using Literal Notation. Let's explore further examples of what literal notation looks like, and how the process of creating objects may be streamlined by using constructors. We haven't learned about constructors yet, but we will in this lesson!",source:"@site/docs/intermediate_javascript_part_time/3_object-oriented-javascript/0d_literal_notation_vs_constructors.md",sourceDirName:"intermediate_javascript_part_time/3_object-oriented-javascript",slug:"/intermediate_javascript_part_time/object-oriented-javascript/literal_notation_versus_constructors",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/literal_notation_versus_constructors",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Literal Notation Versus Constructors",id:"literal_notation_versus_constructors",slug:"literal_notation_versus_constructors",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/0d_literal_notation_vs_constructors.md"},sidebar:"intermediate_javascript_part_time",previous:{title:"3. JavaScript Objects",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/javascript_objects"},next:{title:"5. Constructors and Prototypes",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/constructors_and_prototypes"}},l={},c=[{value:"Literal Notation",id:"literal-notation",level:2},{value:"Constructors",id:"constructors",level:2}],p={toc:c},u="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous lesson we created objects using ",(0,o.kt)("strong",{parentName:"p"},"Literal Notation"),". Let's explore further examples of what literal notation looks like, and how the process of creating objects may be streamlined by using constructors. We haven't learned about constructors yet, but we will in this lesson!"),(0,o.kt)("h2",{id:"literal-notation"},"Literal Notation"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's say a dog walker wants to keep track of all dogs they walk. We'll create a dog object using literal notation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog1 = {\n  name: "Falcor",\n  colors: ["black"],\n  age: 4\n};\n')),(0,o.kt)("p",null,"Now we'll create another:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog2 = {\n  name: "Nola",\n  colors: ["white", "black"],\n  age: 6\n};\n')),(0,o.kt)("p",null,"And another:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog3 = {\n  name: "Patsy",\n  colors: ["brown"],\n  age: 2\n};\n')),(0,o.kt)("p",null,"You may notice that this is getting a little repetitive. All of these dogs have the same properties, which involves typing ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"colors")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," over and over again, each time we want to create a new dog. Good news is, there is a much faster way to make dog objects! Instead of using literal notation to manually create each individual dog object, we can use a constructor as a blueprint."),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We will write a ",(0,o.kt)("strong",{parentName:"p"},"constructor function")," to create dog objects momentarily, but first, what ",(0,o.kt)("em",{parentName:"p"},"is")," a constructor function? A constructor function (or just 'constructor') is a special type of function that is used to make an instance of a type of object, like a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dog")," object. The next lesson will introduce constructors and demonstrate how we can use constructors and prototypes to make our lives easier."),(0,o.kt)("p",null,"After we write a constructor we'll be able to create the same dogs we created in literal notation above, with these three simple lines of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog1 = new Dog("Falcor", ["black"], 4);\nlet dog2 = new Dog("Nola", ["white", "black"], 6);\nlet dog3 = new Dog("Patsy", ["brown"], 7);\n')),(0,o.kt)("p",null,"As you can see, this is ",(0,o.kt)("em",{parentName:"p"},"far")," less code, and it's much more scalable!"))}d.isMDXComponent=!0}}]);