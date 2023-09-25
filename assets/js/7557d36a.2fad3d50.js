"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[66190],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},88516:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={title:"Custom URL Paths",id:"custom_url_paths",slug:"custom_url_paths",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0k_custom_url_paths.md"},i=void 0,l={unversionedId:"c_and_net/basic-web-applications/custom_url_paths",id:"c_and_net/basic-web-applications/custom_url_paths",title:"Custom URL Paths",description:"In the last lesson, we learned how we can configure routes like this one5000/home/goodbye.",source:"@site/docs/c_and_net/7_basic-web-applications/0k_custom_url_paths.md",sourceDirName:"c_and_net/7_basic-web-applications",slug:"/c_and_net/basic-web-applications/custom_url_paths",permalink:"/c_and_net/basic-web-applications/custom_url_paths",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Custom URL Paths",id:"custom_url_paths",slug:"custom_url_paths",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0k_custom_url_paths.md"},sidebar:"c_and_net",previous:{title:"Introduction to Controllers, Routes and URLs",permalink:"/c_and_net/basic-web-applications/introduction_to_controllers_routes_and_urls"},next:{title:"Creating and Using Views",permalink:"/c_and_net/basic-web-applications/creating_and_using_views"}},s={},c=[{value:"Custom URLs with Route Decorators",id:"custom-urls-with-route-decorators",level:2},{value:"Root Path",id:"root-path",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the last lesson, we learned how we can configure routes like this one: ",(0,r.kt)("em",{parentName:"p"},"localhost:5000/home/goodbye"),"."),(0,r.kt)("p",null,"However, this URL isn't very user-friendly. Users shouldn't have to type in the name of a controller. Thankfully, we can use a ",(0,r.kt)("strong",{parentName:"p"},"route decorator")," to easily declare custom URL paths for each route."),(0,r.kt)("h2",{id:"custom-urls-with-route-decorators"},"Custom URLs with Route Decorators"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's revisit our ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeController"),". With a single line of code, we can override which URL path matches which route."),(0,r.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\n\nnamespace FriendLetter.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [Route("/hello")]\n    public string Hello() { return "Hello friend!"; }\n\n    [Route("/goodbye")]\n    public string Goodbye() { return "Goodbye friend."; }\n\n    [Route("/")]\n    public string Letter() { return "Our virtual postcard will go here soon!"; }\n\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"route decorator")," ",(0,r.kt)("inlineCode",{parentName:"p"},'[Route("/hello")]')," provides additional information to a route we define. In our case, the decorator is overriding the default URL path that corresponds to each of the two routes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Instead of needing to visit ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/hello")," to activate our ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello()")," route, we now only have to visit ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Similarly, instead of visiting ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/goodbye")," to invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"Goodbye()"),", the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:5000/goodbye")," will now invoke this route."))),(0,r.kt)("h3",{id:"root-path"},"Root Path"),(0,r.kt)("p",null,"We also added a third new route for our virtual postcard. This will route to ",(0,r.kt)("inlineCode",{parentName:"p"},'"/"'),". In other words, we don't need to append a path at all. If we navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:5000"),", this route will be activated. This is called a ",(0,r.kt)("strong",{parentName:"p"},"root path")," and it's the home page for our site. All sites should have a home page, which means all your projects should have a root route."))}d.isMDXComponent=!0}}]);