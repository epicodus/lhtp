"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[11659],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Further Exploration: SEO with React",id:"further_exploration_seo_with_react",slug:"further_exploration_seo_with_react",hide_table_of_contents:!0,sidebar_position:18,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1c_further_exploration_seo_with_react.md"},i=void 0,s={unversionedId:"react_part_time_evening/react-with-apis/further_exploration_seo_with_react",id:"react_part_time_evening/react-with-apis/further_exploration_seo_with_react",title:"Further Exploration: SEO with React",description:"Up to this point, we've focused entirely on creating small applications without thinking much about deployment. Even when we do have a chance to deploy our work, we aren't thinking about web traffic. More likely, we're deploying as part of our learning experience \u2014 and hopefully to share our project with friends, family, and potential employers.",source:"@site/docs/react_part_time_evening/10_react-with-apis/1c_further_exploration_seo_with_react.md",sourceDirName:"react_part_time_evening/10_react-with-apis",slug:"/react_part_time_evening/react-with-apis/further_exploration_seo_with_react",permalink:"/react_part_time_evening/react-with-apis/further_exploration_seo_with_react",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Further Exploration: SEO with React",id:"further_exploration_seo_with_react",slug:"further_exploration_seo_with_react",hide_table_of_contents:!0,sidebar_position:18,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1c_further_exploration_seo_with_react.md"},sidebar:"react_part_time_evening",previous:{title:"Further Exploration: React Native",permalink:"/react_part_time_evening/react-with-apis/further_exploration_react_native"},next:{title:"Journal #17 Discussion",permalink:"/react_part_time_evening/react-with-apis/journal_17_discussion"}},l={},c=[{value:"React and SEO",id:"react-and-seo",level:3},{value:"Isomorphic React",id:"isomorphic-react",level:3},{value:"Title and Meta Tags",id:"title-and-meta-tags",level:3},{value:"React Frameworks",id:"react-frameworks",level:3}],p={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Up to this point, we've focused entirely on creating small applications without thinking much about deployment. Even when we do have a chance to deploy our work, we aren't thinking about web traffic. More likely, we're deploying as part of our learning experience \u2014 and hopefully to share our project with friends, family, and potential employers."),(0,n.kt)("p",null,"However, most real world applications are concerned about increasing the number of users that visit their site. A key way to increase visitor traffic is to incorporate ",(0,n.kt)("strong",{parentName:"p"},"SEO")," (",(0,n.kt)("strong",{parentName:"p"},"search engine optimization"),")."),(0,n.kt)("p",null,'Search engine optimization seeks to increase visitor traffic through search engines such as Google or Bing. For instance, if we do a Google search for "Portland online code school," we\'ll get a list of results that includes Epicodus.'),(0,n.kt)("p",null,"According to ",(0,n.kt)("a",{parentName:"p",href:"https://www.brafton.com/news/95-percent-of-web-traffic-goes-to-sites-on-page-1-of-google-serps-study/"},"research"),", 95% of all user searches only involve the first page of search results. For that reason, it's really important for websites to end up on that first page of user searches. Unlike paid advertising, web searches are free \u2014 and an essential way for sites to generate more users."),(0,n.kt)("p",null,"SEO is a huge topic \u2014 and it's well beyond the scope of this lesson. This lesson will focus on the issues that React applications have with SEO \u2014 and how we can address them. If you're interested in learning about SEO in general, we recommend checking out a more in-depth source ",(0,n.kt)("a",{parentName:"p",href:"https://moz.com/learn/seo"},"like this one"),"."),(0,n.kt)("h3",{id:"react-and-seo"},"React and SEO"),(0,n.kt)("p",null,"React applications are often SPAs (single page applications) with components that render dynamically based on user activity. This makes React extremely fast, but it's not ideal for the web crawlers that index sites. There are several reasons for this:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"React applications have only one URL.")," Because many React sites are SPAs, they only have one URL along with a number of virtual pages. Web crawlers may not be able to reach all the virtual pages, resulting in a lower search index."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Because there is only one URL \u2014 and one entry point \u2014 every virtual page has the same meta data.")," We can add meta tags to our HTML pages to improve SEO. When users navigate to a page, they won't see the meta content because it's not visible. However, this content is visible to web crawlers \u2014 which often use it to create a description of the site in a search engine. Meta content is also used to determine search engine rankings as well."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"React is all about dynamic JavaScript.")," Most web crawlers can handle JavaScript \u2014 but not necessarily all JavaScript. For that reason, crawlers might not be able to access some content that users can \u2014 and this content won't be indexed."),(0,n.kt)("p",null,"There are several things we can do to improve the SEO of a React application. You're encouraged to explore these further on your own. "),(0,n.kt)("h3",{id:"isomorphic-react"},"Isomorphic React"),(0,n.kt)("p",null,"A standard React application is client-side, not server-side. The application is downloaded as a bundle on the client machine. However, if the user has JavaScript disabled (or a crawler has issues with JavaScript content), the site won't render properly. An isomorphic React application adds server-side rendering to a React application. If there are issues with the client-side copy (such as JavaScript being disabled), the server-side copy of the application is switched in. This can help ensure that web crawlers are able to index all of a site's content."),(0,n.kt)("p",null,"Server-side rendering can also help with another significant issue \u2014 sharing site content with others."),(0,n.kt)("p",null,"Let's say you want to share a virtual \"page\" of a React application with a friend. Without React Router, we can't do that. There is only one URL and we can only share that URL \u2014 not the exact configuration of clicks and user interaction we completed to arrive at the virtual page."),(0,n.kt)("p",null,"Adding routes with React Router doesn't solve this issue. We are still downloading a bundle in our browser and all routes from React Router are stored there. If we tried to send a link to a friend \u2014 for instance, ",(0,n.kt)("em",{parentName:"p"},"my-awesome-react-app.com/bio")," \u2014 our friend won't be able to open that link. There will be a 404 error."),(0,n.kt)("p",null,"We can solve this problem by using React Router to create server-side rendering \u2014 in other words, we need to build an isomorphic React application. "),(0,n.kt)("p",null,"Web crawlers will also be able to crawl these URLs, improving our application's SEO."),(0,n.kt)("p",null,"For more information on this topic, see the ",(0,n.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/v6.3.0/guides/ssr"},"Server Rendering")," documentation at React Router. You will also likely need to find a tutorial to set up an isomorphic React application."),(0,n.kt)("p",null,"Previously, create-react-app did not support server rendering. Now, you can configure a create-react-app application to work with libraries to render your app's content server-side. To learn more, visit the create-react-app documentation titled ",(0,n.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/pre-rendering-into-static-html-files/"},"Pre-Rendering Into Static HTML Files"),"."),(0,n.kt)("h3",{id:"title-and-meta-tags"},"Title and Meta Tags"),(0,n.kt)("p",null,"Even if we don't create an isomorphic React application, we can still use React Router to create separate URLs. Ideally, each URL should have its own meta tags. This will allow search engines to do a better job indexing our site \u2014 and not just the entry point index page but other pages on our site as well."),(0,n.kt)("p",null,"create-react-app provides some help with this. See the ",(0,n.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/title-and-meta-tags/"},"Title and Meta Tags")," documentation that create-react-app provides."),(0,n.kt)("p",null,"There are also other tools for creating title and meta tags. The most popular is probably ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nfl/react-helmet"},"react-helmet"),", which was developed by the National Football League. react-helmet allows us to write our title and meta tags inside a ",(0,n.kt)("inlineCode",{parentName:"p"},"<Helmet>")," element like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'...\n<Helmet>\n  <title>React Portfolio Site</title>\n  <meta name="description" content="An awesome portfolio site" />\n  <meta name="keywords" content="React, JavaScript, Firestore, Epicodus">\n  <meta name="author" content="Epicodus Student">\n</Helmet>\n...\n')),(0,n.kt)("p",null,"We haven't discussed meta tags in the past, but there are different tags such as ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"content"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," is the type of meta content (such as a description or keywords). ",(0,n.kt)("inlineCode",{parentName:"p"},"content")," is self-explanatory \u2014 and web crawlers can take this information and use it to determine how highly a site should be rated."),(0,n.kt)("h3",{id:"react-frameworks"},"React Frameworks"),(0,n.kt)("p",null,"There are a handful of React frameworks that provide server-side rendering. These frameworks provide a whole toolset that can make bootstrapping React applications that much easier... that is, after you are past the learning curve. "),(0,n.kt)("p",null,"Here are some of the most popular React frameworks for web development: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/"},"Gatsby.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"Next.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://remix.run/"},"Remix"))),(0,n.kt)("p",null,"We highly recommend researching these frameworks to learn about the tradeoffs and benefits of each."),(0,n.kt)("p",null,"These are just a few approaches to improving SEO. Having an understanding of how SEO works \u2014 and how to improve it in a React application \u2014 is a valuable skill. Whether you're working for a small or large company, a development agency, or even creating side projects for friends and family members \u2014 these little details are essential to providing free advertising and traffic to websites."))}u.isMDXComponent=!0}}]);