"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[11966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,y=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(y,r(r({ref:t},s),{},{components:n})):a.createElement(y,r({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Many-to-Many Update Functionality",id:"many_to_many_update_functionality",slug:"many_to_many_update_functionality",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/12_many-to-many-relationships/0f_update_with_many_to_many.md"},r=void 0,l={unversionedId:"c_and_net_part_time_evening/many-to-many-relationships/many_to_many_update_functionality",id:"c_and_net_part_time_evening/many-to-many-relationships/many_to_many_update_functionality",title:"Many-to-Many Update Functionality",description:"We've added create and read functionality for our Tag entity and ItemTag join entity. Now we're ready to move onto adding update and delete functionality.",source:"@site/docs/c_and_net_part_time_evening/12_many-to-many-relationships/0f_update_with_many_to_many.md",sourceDirName:"c_and_net_part_time_evening/12_many-to-many-relationships",slug:"/c_and_net_part_time_evening/many-to-many-relationships/many_to_many_update_functionality",permalink:"/lhtp/c_and_net_part_time_evening/many-to-many-relationships/many_to_many_update_functionality",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Many-to-Many Update Functionality",id:"many_to_many_update_functionality",slug:"many_to_many_update_functionality",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/12_many-to-many-relationships/0f_update_with_many_to_many.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Many-to-Many Create Functionality",permalink:"/lhtp/c_and_net_part_time_evening/many-to-many-relationships/many_to_many_create_functionality"},next:{title:"Many-to-Many Delete Functionality",permalink:"/lhtp/c_and_net_part_time_evening/many-to-many-relationships/many_to_many_delete_functionality"}},d={},p=[{value:"UPDATE: Adding Update Functionality to <code>Tag</code>s",id:"update-adding-update-functionality-to-tags",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We've added create and read functionality for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," entity and ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join entity. Now we're ready to move onto adding update and delete functionality. "),(0,i.kt)("p",null,"We won't add full CRUD for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join entity, just CRD functionality. Instead of allowing users to update join relationships, we'll simply have them create or delete relationships. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," entity on the other hand will have full CRUD functionality. So in this lesson we'll update our ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController")," and views to have update functionality."),(0,i.kt)("h2",{id:"update-adding-update-functionality-to-tags"},"UPDATE: Adding Update Functionality to ",(0,i.kt)("inlineCode",{parentName:"h2"},"Tag"),"s"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's start by creating ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," GET and POST actions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController.cs"),"."),(0,i.kt)("p",null,"Here's the new code we'll add:"),(0,i.kt)("div",{class:"filename"},"Controllers/TagsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    public ActionResult Edit(int id)\n    {\n      Tag thisTag = _db.Tags.FirstOrDefault(tags => tags.TagId == id);\n      return View(thisTag);\n    }\n\n    [HttpPost]\n    public ActionResult Edit(Tag tag)\n    {\n      _db.Tags.Update(tag);\n      _db.SaveChanges();\n      return RedirectToAction("Index");\n    }\n\n...\n')),(0,i.kt)("p",null,"The above code is the exact same as the code for update functionality in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoriesController"),": we pass the specific tag that we want to update to the view in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," GET action, and then we update our database with the new ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," POST action. When we're done, we redirect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Index()")," action."),(0,i.kt)("p",null,"Next, let's create a view for our edit functionality. Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Tags/")," subdirectory, create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit.cshtml")," and add the following code:"),(0,i.kt)("div",{class:"filename"},"Views/Tags/Edit.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Tag\n\n<h2>Edit</h2>\n\n<h4>Edit this tag: @Html.DisplayFor(model => model.Title)</h4>\n\n@using (Html.BeginForm())\n{\n    @Html.HiddenFor(model => model.TagId)\n\n    @Html.LabelFor(model => model.Title)\n    @Html.EditorFor(model => model.Title)\n\n    <input type="submit" value="Save" />\n}\n\n<p>@Html.ActionLink("Back to list", "Index")</p>\n')),(0,i.kt)("p",null,"Finally, let's finish up by adding a link to our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," route to our tag's ",(0,i.kt)("inlineCode",{parentName:"p"},"Details.cshtml"),":"),(0,i.kt)("div",{class:"filename"},"Views/Tags/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n<p>@Html.ActionLink("Edit Tag", "Edit", new { id = Model.TagId })</p>\n')),(0,i.kt)("p",null,"Now, if we run our application we should be able to edit tags. Up next, we'll add delete functionality for ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join entities."))}u.isMDXComponent=!0}}]);