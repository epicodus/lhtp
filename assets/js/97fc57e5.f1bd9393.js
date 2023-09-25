"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74313],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"How the Web Works: Uniform Resource Locator",id:"how_the_web_works_uniform_resource_locator",slug:"how_the_web_works_uniform_resource_locator",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0c_how_the_web_works_uniform_resource_locator_url.md"},i=void 0,s={unversionedId:"c_and_net_part_time/basic-web-applications/how_the_web_works_uniform_resource_locator",id:"c_and_net_part_time/basic-web-applications/how_the_web_works_uniform_resource_locator",title:"How the Web Works: Uniform Resource Locator",description:"As discussed in the last lesson, when we navigate to https://www.learnhowtoprogram.com/courses in our browser, the browser (or client) makes a request to the web server where that page's content is stored.",source:"@site/docs/c_and_net_part_time/8_basic-web-applications/0c_how_the_web_works_uniform_resource_locator_url.md",sourceDirName:"c_and_net_part_time/8_basic-web-applications",slug:"/c_and_net_part_time/basic-web-applications/how_the_web_works_uniform_resource_locator",permalink:"/c_and_net_part_time/basic-web-applications/how_the_web_works_uniform_resource_locator",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How the Web Works: Uniform Resource Locator",id:"how_the_web_works_uniform_resource_locator",slug:"how_the_web_works_uniform_resource_locator",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0c_how_the_web_works_uniform_resource_locator_url.md"},sidebar:"c_and_net_part_time",previous:{title:"How the Web Works: Clients and Servers",permalink:"/c_and_net_part_time/basic-web-applications/how_the_web_works_clients_and_servers"},next:{title:"How the Web Works: Developer Tools",permalink:"/c_and_net_part_time/basic-web-applications/how_the_web_works_developer_tools"}},l={},p=[{value:"URL Elements",id:"url-elements",level:2},{value:"1. Scheme",id:"1-scheme",level:3},{value:"2. Host",id:"2-host",level:3},{value:"3. Path",id:"3-path",level:3},{value:"Optional URL Elements",id:"optional-url-elements",level:2},{value:"<code>?</code> Query",id:"-query",level:3},{value:"<code>#</code> Fragment",id:"-fragment",level:3}],c={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As discussed in the last lesson, when we navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://www.learnhowtoprogram.com/courses")," in our browser, the browser (or ",(0,a.kt)("em",{parentName:"p"},"client"),") makes a request to the web server where that page's content is stored."),(0,a.kt)("p",null,"One of the most important pieces of this request is the specific address of the content we're attempting to view. This address is called the ",(0,a.kt)("strong",{parentName:"p"},"URL"),", short for ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Locator"},(0,a.kt)("strong",{parentName:"a"},"Uniform Resource Locator")),", or ",(0,a.kt)("strong",{parentName:"p"},"URI"),", short for ",(0,a.kt)("strong",{parentName:"p"},"Uniform Resource Identifier"),". (The difference is largely semantic.) In this lesson we'll explore the URL in detail."),(0,a.kt)("h2",{id:"url-elements"},"URL Elements"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Certain elements must be included in the URL for a request to be successful. For instance, if we were requesting content at the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"https://www.learnhowtoprogram.com/courses"),", these elements could be identified as:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Scheme"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"http://"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Host"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"www.learnhowtoprogram.com"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Path"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"/courses")))),(0,a.kt)("p",null,"Let's discuss each in greater detail."),(0,a.kt)("h3",{id:"1-scheme"},"1. Scheme"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"scheme")," denotes ",(0,a.kt)("em",{parentName:"p"},"how")," the client will locate or interact with the requested resource.  In the example above, the client will make a request using the ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," scheme."),(0,a.kt)("p",null,"Other schemes include ",(0,a.kt)("inlineCode",{parentName:"p"},"ftp"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mailto"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"file"),". The scheme is always followed by a colon. And, for the ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," scheme in particular, a colon ",(0,a.kt)("em",{parentName:"p"},"and")," two slashes (",(0,a.kt)("inlineCode",{parentName:"p"},"://"),")."),(0,a.kt)("h3",{id:"2-host"},"2. Host"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"host")," details ",(0,a.kt)("em",{parentName:"p"},"where")," the requested resource is located. In a URL the host is either the domain name or the IP address. In our example the host is ",(0,a.kt)("inlineCode",{parentName:"p"},"www.learnhowtoprogram.com"),"."),(0,a.kt)("h3",{id:"3-path"},"3. Path"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"path")," consists of one or more segments separated by slashes. It provides a name for identifying the specific resource requested.  In our example the path indicates the resource: ",(0,a.kt)("inlineCode",{parentName:"p"},"/courses"),"."),(0,a.kt)("h2",{id:"optional-url-elements"},"Optional URL Elements"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Not all elements in a URL are required. Here are two that are optional."),(0,a.kt)("h3",{id:"-query"},(0,a.kt)("inlineCode",{parentName:"h3"},"?")," Query"),(0,a.kt)("p",null,"There may be times when URL contents must provide additional details for a resource to be identified. For example, if we use the search functionality on Learn How to Program, the server must know what term(s) we've searched for to return relevant information."),(0,a.kt)("p",null,"When we enter ",(0,a.kt)("em",{parentName:"p"},'"internet"')," into the search bar on LearnHowToProgram and submit, the request is made to this URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://www.learnhowtoprogram.com/lessons?utf8=\u2713&search=internet&commit=Search\n")),(0,a.kt)("p",null,"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," symbol after the path. This indicates the beginning of a ",(0,a.kt)("strong",{parentName:"p"},"query string"),". There are 3 key-value pairs that make up the parameters sent in this request:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"utf8=\u2713")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"search=internet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"commit=Search"))),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"search")," parameter is one of them. It has a key of ",(0,a.kt)("inlineCode",{parentName:"p"},"search")," and a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"internet"),". Query parameters are separated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"&")," symbol when there is more than one. The server will use this value to query the database for lessons whose text contains the term ",(0,a.kt)("inlineCode",{parentName:"p"},"internet"),"."),(0,a.kt)("h3",{id:"-fragment"},(0,a.kt)("inlineCode",{parentName:"h3"},"#")," Fragment"),(0,a.kt)("p",null,"Another optional URL element is called a fragment. Here is an example URL containing a fragment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://guides.rubyonrails.org/active_record_basics.html#validations\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fragments")," begin with a ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," symbol. They contain information that's typically processed by the client instead of the server."),(0,a.kt)("p",null,"In this example, the page at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://guides.rubyonrails.org/active_record_basics.html")," is quite long. It contains many different sections, each nested in their own ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," within the HTML. ",(0,a.kt)("inlineCode",{parentName:"p"},"validations")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of one of these ",(0,a.kt)("inlineCode",{parentName:"p"},"div"),"s. By adding it as a fragment to the end of the URL, our client hops to that area of the otherwise-long page automatically. Try it out:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Visit the example link by ",(0,a.kt)("a",{parentName:"p",href:"http://guides.rubyonrails.org/active_record_basics.html#validations"},"clicking here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In your browser's URL bar, change the portion of the URL reading ",(0,a.kt)("inlineCode",{parentName:"p"},"validations")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"callbacks"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Notice how the page then repositions to display the ",(0,a.kt)("inlineCode",{parentName:"p"},"callbacks")," section at the top of the browser window.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then remove this fragment from the URL entirely. Notice the position returns to top of the document."))))}h.isMDXComponent=!0}}]);