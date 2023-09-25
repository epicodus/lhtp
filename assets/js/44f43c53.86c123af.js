"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[55446],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=s,m=u["".concat(r,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[u]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},96922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const i={title:"APIE: Encapsulation",id:"apie_encapsulation",slug:"apie_encapsulation",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_encapsulation.md"},o=void 0,l={unversionedId:"c_and_net/basic-console-apps/apie_encapsulation",id:"c_and_net/basic-console-apps/apie_encapsulation",title:"APIE: Encapsulation",description:"You might still be wondering why we need to use private fields. Why use getters and setters at all, especially since we had access to get and set fields when they were public?",source:"@site/docs/c_and_net/4_basic-console-apps/0h_encapsulation.md",sourceDirName:"c_and_net/4_basic-console-apps",slug:"/c_and_net/basic-console-apps/apie_encapsulation",permalink:"/c_and_net/basic-console-apps/apie_encapsulation",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"APIE: Encapsulation",id:"apie_encapsulation",slug:"apie_encapsulation",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_encapsulation.md"},sidebar:"c_and_net",previous:{title:"Access Modifiers, Best Practices with Fields, and Getter and Setter Methods",permalink:"/c_and_net/basic-console-apps/access_modifiers_best_practices_with_fields_and_getter_and_setter_methods"},next:{title:"Static Class Members",permalink:"/c_and_net/basic-console-apps/static_class_members"}},r={},c=[{value:"An Example of Encapsulation",id:"an-example-of-encapsulation",level:2},{value:"Benefits of Encapsulation",id:"benefits-of-encapsulation",level:2},{value:"When Should I Use Encapsulation? Almost always...",id:"when-should-i-use-encapsulation-almost-always",level:2},{value:"APIE: Abstraction, Polymorphism, Inheritance, Encapsulation",id:"apie-abstraction-polymorphism-inheritance-encapsulation",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You might still be wondering why we need to use private fields. Why use getters and setters at all, especially since we had access to get and set fields when they were public?"),(0,s.kt)("p",null,"The short answer is that making fields private to a class uses ",(0,s.kt)("strong",{parentName:"p"},"encapsulation"),", one of the four basic principles of Object-Oriented Programming (OOP). "),(0,s.kt)("p",null,"What is encapsulation? We use ",(0,s.kt)("strong",{parentName:"p"},"encapsulation")," when we hide the internal state and functionality of an object and only allow access through a public set of methods. Well, that's exactly what we're doing with ",(0,s.kt)("inlineCode",{parentName:"p"},"private")," fields \u2014 we are encapsulating them within the class and managing all data manipulation inside of the class. Like a pill capsule closes over medicine, a class closes over its members, functionality, and the data contained within it. "),(0,s.kt)("p",null,"In this lesson, we'll better understand encapsulation and get introduced to the other three principles of object-oriented programming. We'll also take a moment to acknowledge that a best practice isn't a silver bullet \u2014 that is, exactly how you write your code depends on the application you are building."),(0,s.kt)("h2",{id:"an-example-of-encapsulation"},"An Example of Encapsulation"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Imagine a ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class with a private ",(0,s.kt)("inlineCode",{parentName:"p"},"_password")," field. As developers, we wouldn't want to expose that field, making it public. Instead, we would want to provide a public ",(0,s.kt)("inlineCode",{parentName:"p"},"CheckPassword()")," method that returns a ",(0,s.kt)("inlineCode",{parentName:"p"},"bool")," that tells us if an entered password is correct. "),(0,s.kt)("p",null,"Outside the class, I can only determine if a provided password is correct by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"CheckPassword()")," method. This means the sensitive information stored in the ",(0,s.kt)("inlineCode",{parentName:"p"},"_password")," field is never exposed."),(0,s.kt)("p",null,"This is what getters and setters allow us to do: control ",(0,s.kt)("em",{parentName:"p"},"how")," information is managed. A setter could perform a validation action before modifying a value, for example. "),(0,s.kt)("p",null,"We can also debug more easily when we have methods that perform data manipulation. If there's an error, the bug will be traced to that method."),(0,s.kt)("p",null,"This is why the best practice of setting fields to ",(0,s.kt)("inlineCode",{parentName:"p"},"private")," is a best practice. It encapsulates private data and functionality within a class and only exposes what's needed outside of the class."),(0,s.kt)("h2",{id:"benefits-of-encapsulation"},"Benefits of Encapsulation"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Encapsulating class members is considered the best, most professional practice for several reasons:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"It allows a class to have total control over its own fields, which is more secure.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"It prevents other classes from accessing and altering fields, which can lead to difficult bugs.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Managing all aspects of a class within the class itself leads to more organized code. Organized code allows other developers to comprehend, collaborate, and implement your logic much more easily.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"While we may not see this benefit until our applications become larger, encapsulation leads to more maintainable code. "))),(0,s.kt)("p",null,"Imagine we eventually need to change the variable name of an object's public field. If outside classes were directly accessing a field (eg: ",(0,s.kt)("inlineCode",{parentName:"p"},"testTriangle.Side1;"),", instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"testTriangle.GetSide1();"),"), we would need to update all the code in outside classes that reference this field. This might not seem like a big deal, but imagine a C# application with tens or ",(0,s.kt)("em",{parentName:"p"},"hundreds")," of classes. We would have to comb through each one and change all references to this field. However, if the field were ",(0,s.kt)("inlineCode",{parentName:"p"},"private")," and outside classes accessed it through its getter method, only the object's getter method and class would need to be altered. We could update this class ",(0,s.kt)("em",{parentName:"p"},"independently")," without affecting other classes that rely on it."),(0,s.kt)("h2",{id:"when-should-i-use-encapsulation-almost-always"},"When Should I Use Encapsulation? Almost always..."),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Just because encapsulation is a best practice, that doesn't always mean it's always the right choice. Sometimes using a public field is entirely appropriate. To get a sense of the use cases for getters and setters, we recommend that you pause now and read as much of ",(0,s.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1568091/why-use-getters-and-setters-accessors"},"this stack overflow post")," as you have the time for. The stack overflow article will list many reasons why using encapsulating fields is a best practice. The article also lists a few reasons why they are not always a good choice."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Because we're just getting started with encapsulation, we're still going to follow best practice by making all fields private and exposing them through getter and setter methods.")," "),(0,s.kt)("h2",{id:"apie-abstraction-polymorphism-inheritance-encapsulation"},"APIE: Abstraction, Polymorphism, Inheritance, Encapsulation"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The acronym APIE stands for the four principles of object-oriented programming:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Abstraction"),(0,s.kt)("li",{parentName:"ul"},"Polymorphism"),(0,s.kt)("li",{parentName:"ul"},"Inheritance"),(0,s.kt)("li",{parentName:"ul"},"Encapsulation")),(0,s.kt)("p",null,"We'll get to know each of these principles as we go along in the curriculum. If you are ready to read more now, we recommend checking out ",(0,s.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop"},"this article on the MS Docs"),"."))}d.isMDXComponent=!0}}]);