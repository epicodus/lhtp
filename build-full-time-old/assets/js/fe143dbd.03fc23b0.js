"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[51579],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,b=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(b,r(r({ref:t},p),{},{components:n})):a.createElement(b,r({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const o={title:"Saving Objects Within Other Objects",id:"saving-objects-within-other-objects",slug:"saving-objects-within-other-objects",hide_table_of_contents:!0,sidebar_position:37,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3c_saving_objects_within_other_objects.md"},r=void 0,s={unversionedId:"c-and-net/basic-web-applications/saving-objects-within-other-objects",id:"c-and-net/basic-web-applications/saving-objects-within-other-objects",title:"Saving Objects Within Other Objects",description:'In the last lesson, we set up our new Category class with basic functionality like getters, a constructor, unique IDs, and a static list to contain all Categorys. Now we can focus on tying together our Category and Item classes. That way, a Category object with a Name like "School" can hold many different To Do List Items with Descriptions like "Finish section 2 code review," "Email teacher about planned absence," and so on.',source:"@site/docs/c-and-net/7_basic-web-applications/3c-saving-objects-within-other-objects.md",sourceDirName:"c-and-net/7_basic-web-applications",slug:"/c-and-net/basic-web-applications/saving-objects-within-other-objects",permalink:"/c-and-net/basic-web-applications/saving-objects-within-other-objects",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"Saving Objects Within Other Objects",id:"saving-objects-within-other-objects",slug:"saving-objects-within-other-objects",hide_table_of_contents:!0,sidebar_position:37,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3c_saving_objects_within_other_objects.md"},sidebar:"c-and-net",previous:{title:"Objects Within Objects Setup",permalink:"/c-and-net/basic-web-applications/objects-within-objects-setup"},next:{title:"Objects Within Objects Interface Part 1",permalink:"/c-and-net/basic-web-applications/objects-within-objects-interface-part-1"}},c={},l=[{value:"Saving Objects Within Objects",id:"saving-objects-within-objects",level:2}],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we set up our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," class with basic functionality like getters, a constructor, unique IDs, and a static list to contain all ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s. Now we can focus on tying together our ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," classes. That way, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," object with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Name"),' like "School" can hold many different To Do List ',(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s with ",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),'s like "Finish section 2 code review," "Email teacher about planned absence," and so on.'),(0,i.kt)("h2",{id:"saving-objects-within-objects"},"Saving Objects Within Objects"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"When we created our ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," class, we included an ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," property. It's a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," that is empty at first:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Models/Category.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n  public class Category\n  {\n    ...\n    public List<Item> Items { get; set; }\n\n    public Category(string categoryName)\n    {\n      ...\n      Items = new List<Item>{};\n    }\n\n...\n")),(0,i.kt)("p",null,"This is where ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s related to the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," will be stored. Let's add this functionality now. What's the next simplest behavior we can implement? First, let's make sure we can add an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," object into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," property of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," object. Here's the test:"),(0,i.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [TestMethod]\n  public void AddItem_AssociatesItemWithCategory_ItemList()\n  {\n    //Arrange\n    string description = "Walk the dog.";\n    Item newItem = new Item(description);\n    List<Item> newList = new List<Item> { newItem };\n    string name = "Work";\n    Category newCategory = new Category(name);\n    newCategory.AddItem(newItem);\n\n    //Act\n    List<Item> result = newCategory.Items;\n\n    //Assert\n    CollectionAssert.AreEqual(newList, result);\n  }\n\n...\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and add it to a ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then we create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," and call the soon-to-be-created ",(0,i.kt)("inlineCode",{parentName:"p"},"AddItem")," method upon it, passing in our sample ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Next, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"newCategory.Items"),", to retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s saved in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, we assert that ",(0,i.kt)("inlineCode",{parentName:"p"},"newCategory.Items")," should return a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," containing our single ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"."))),(0,i.kt)("p",null,"Now let's create the ",(0,i.kt)("inlineCode",{parentName:"p"},"AddItem()")," method necessary to run and pass this test:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Models/Category.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n  public void AddItem(Item item)\n  {\n    Items.Add(item);\n  }\n\n...\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AddItem()")," will accept an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," object and then use the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Add()")," method to save that item into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," property of a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"."),(0,i.kt)("p",null,"If we run our tests again, they should all pass. We're successfully saving objects of one type within objects of another type. In the next lesson, we'll integrate this new functionality into the MVC front end user interface of our application."))}m.isMDXComponent=!0}}]);