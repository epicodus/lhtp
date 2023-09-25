"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[76163],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=i,y=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(y,r(r({ref:e},c),{},{components:n})):a.createElement(y,r({ref:e},c))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[s]="string"==typeof t?t:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2618:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Many-to-Many Update Functionality",id:"many_to_many_update_functionality",slug:"many_to_many_update_functionality",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0f_update_with_many_to_many.md"},r=void 0,l={unversionedId:"c_and_net_part_time/many-to-many-relationships/many_to_many_update_functionality",id:"c_and_net_part_time/many-to-many-relationships/many_to_many_update_functionality",title:"Many-to-Many Update Functionality",description:"We've added create and read functionality for our Tag entity and ItemTag join entity. Now we're ready to move onto adding update and delete functionality.",source:"@site/docs/c_and_net_part_time/12_many-to-many-relationships/0f_update_with_many_to_many.md",sourceDirName:"c_and_net_part_time/12_many-to-many-relationships",slug:"/c_and_net_part_time/many-to-many-relationships/many_to_many_update_functionality",permalink:"/c_and_net_part_time/many-to-many-relationships/many_to_many_update_functionality",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Many-to-Many Update Functionality",id:"many_to_many_update_functionality",slug:"many_to_many_update_functionality",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0f_update_with_many_to_many.md"},sidebar:"c_and_net_part_time",previous:{title:"Many-to-Many Create Functionality",permalink:"/c_and_net_part_time/many-to-many-relationships/many_to_many_create_functionality"},next:{title:"Many-to-Many Delete Functionality",permalink:"/c_and_net_part_time/many-to-many-relationships/many_to_many_delete_functionality"}},d={},p=[{value:"UPDATE: Adding Update Functionality to <code>Tag</code>s",id:"update-adding-update-functionality-to-tags",level:2}],c={toc:p},s="wrapper";function u(t){let{components:e,...n}=t;return(0,i.kt)(s,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We've added create and read functionality for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," entity and ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join entity. Now we're ready to move onto adding update and delete functionality. "),(0,i.kt)("p",null,"We won't add full CRUD for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join entity, just CRD functionality. Instead of allowing users to update join relationships, we'll simply have them create or delete relationships. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," entity on the other hand will have full CRUD functionality. So in this lesson we'll update our ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController")," and views to have update functionality."),(0,i.kt)("h2",{id:"update-adding-update-functionality-to-tags"},"UPDATE: Adding Update Functionality to ",(0,i.kt)("inlineCode",{parentName:"h2"},"Tag"),"s"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's start by creating ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," GET and POST actions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController.cs"),"."),(0,i.kt)("p",null,"Here's the new code we'll add:"),(0,i.kt)("div",{class:"filename"},"Controllers/TagsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    public ActionResult Edit(int id)\n    {\n      Tag thisTag = _db.Tags.FirstOrDefault(tags => tags.TagId == id);\n      return View(thisTag);\n    }\n\n    [HttpPost]\n    public ActionResult Edit(Tag tag)\n    {\n      _db.Tags.Update(tag);\n      _db.SaveChanges();\n      return RedirectToAction("Index");\n    }\n\n...\n')),(0,i.kt)("p",null,"The above code is the exact same as the code for update functionality in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoriesController"),": we pass the specific tag that we want to update to the view in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," GET action, and then we update our database with the new ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," POST action. When we're done, we redirect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Index()")," action."),(0,i.kt)("p",null,"Next, let's create a view for our edit functionality. Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Tags/")," subdirectory, create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit.cshtml")," and add the following code:"),(0,i.kt)("div",{class:"filename"},"Views/Tags/Edit.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Tag\n\n<h2>Edit</h2>\n\n<h4>Edit this tag: @Html.DisplayFor(model => model.Title)</h4>\n\n@using (Html.BeginForm())\n{\n    @Html.HiddenFor(model => model.TagId)\n\n    @Html.LabelFor(model => model.Title)\n    @Html.EditorFor(model => model.Title)\n\n    <input type="submit" value="Save" />\n}\n\n<p>@Html.ActionLink("Back to list", "Index")</p>\n')),(0,i.kt)("p",null,"Finally, let's finish up by adding a link to our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," route to our tag's ",(0,i.kt)("inlineCode",{parentName:"p"},"Details.cshtml"),":"),(0,i.kt)("div",{class:"filename"},"Views/Tags/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n<p>@Html.ActionLink("Edit Tag", "Edit", new { id = Model.TagId })</p>\n')),(0,i.kt)("p",null,"Now, if we run our application we should be able to edit tags. Up next, we'll add delete functionality for ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join entities."))}u.isMDXComponent=!0}}]);