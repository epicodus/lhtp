"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[8970],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},75633:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={title:"Custom URL Paths",id:"custom-url-paths",slug:"custom-url-paths",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0k_custom_url_paths.md"},i=void 0,l={unversionedId:"c-and-net-part-time/basic-web-applications/custom-url-paths",id:"c-and-net-part-time/basic-web-applications/custom-url-paths",title:"Custom URL Paths",description:"In the last lesson, we learned how we can configure routes like this one5000/home/goodbye.",source:"@site/docs/c-and-net-part-time/8_basic-web-applications/0k-custom-url-paths.md",sourceDirName:"c-and-net-part-time/8_basic-web-applications",slug:"/c-and-net-part-time/basic-web-applications/custom-url-paths",permalink:"/c-and-net-part-time/basic-web-applications/custom-url-paths",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Custom URL Paths",id:"custom-url-paths",slug:"custom-url-paths",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0k_custom_url_paths.md"},sidebar:"c-and-net-part-time",previous:{title:"Introduction to Controllers, Routes and URLs",permalink:"/c-and-net-part-time/basic-web-applications/introduction-to-controllers-routes-and-urls"},next:{title:"Creating and Using Views",permalink:"/c-and-net-part-time/basic-web-applications/creating-and-using-views"}},s={},c=[{value:"Custom URLs with Route Decorators",id:"custom-urls-with-route-decorators",level:2},{value:"Root Path",id:"root-path",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In the last lesson, we learned how we can configure routes like this one: ",(0,n.kt)("em",{parentName:"p"},"localhost:5000/home/goodbye"),"."),(0,n.kt)("p",null,"However, this URL isn't very user-friendly. Users shouldn't have to type in the name of a controller. Thankfully, we can use a ",(0,n.kt)("strong",{parentName:"p"},"route decorator")," to easily declare custom URL paths for each route."),(0,n.kt)("h2",{id:"custom-urls-with-route-decorators"},"Custom URLs with Route Decorators"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Let's revisit our ",(0,n.kt)("inlineCode",{parentName:"p"},"HomeController"),". With a single line of code, we can override which URL path matches which route."),(0,n.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\n\nnamespace FriendLetter.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [Route("/hello")]\n    public string Hello() { return "Hello friend!"; }\n\n    [Route("/goodbye")]\n    public string Goodbye() { return "Goodbye friend."; }\n\n    [Route("/")]\n    public string Letter() { return "Our virtual postcard will go here soon!"; }\n\n  }\n}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"route decorator")," ",(0,n.kt)("inlineCode",{parentName:"p"},'[Route("/hello")]')," provides additional information to a route we define. In our case, the decorator is overriding the default URL path that corresponds to each of the two routes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Instead of needing to visit ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/hello")," to activate our ",(0,n.kt)("inlineCode",{parentName:"p"},"Hello()")," route, we now only have to visit ",(0,n.kt)("inlineCode",{parentName:"p"},"/hello"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Similarly, instead of visiting ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/goodbye")," to invoke ",(0,n.kt)("inlineCode",{parentName:"p"},"Goodbye()"),", the URL ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:5000/goodbye")," will now invoke this route."))),(0,n.kt)("h3",{id:"root-path"},"Root Path"),(0,n.kt)("p",null,"We also added a third new route for our virtual postcard. This will route to ",(0,n.kt)("inlineCode",{parentName:"p"},'"/"'),". In other words, we don't need to append a path at all. If we navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:5000"),", this route will be activated. This is called a ",(0,n.kt)("strong",{parentName:"p"},"root path")," and it's the home page for our site. All sites should have a home page, which means all your projects should have a root route."))}d.isMDXComponent=!0}}]);