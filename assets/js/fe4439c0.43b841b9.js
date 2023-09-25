"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[63938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"3. Delete with EF Core",id:"delete_with_ef_core",slug:"delete_with_ef_core",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_database-basics/2h_delete_with_ef_core.md"},r=void 0,l={unversionedId:"c_and_net_classic/database-basics/delete_with_ef_core",id:"c_and_net_classic/database-basics/delete_with_ef_core",title:"3. Delete with EF Core",description:"Now let's make sure our application can also destroy an Item. We'll add a Delete link on the item's detail page. Clicking this link will take the user to a page that confirms they'd like to delete this particular item.",source:"@site/docs/c_and_net_classic/8_database-basics/2h_delete_with_ef_core.md",sourceDirName:"c_and_net_classic/8_database-basics",slug:"/c_and_net_classic/database-basics/delete_with_ef_core",permalink:"/lhtp/c_and_net_classic/database-basics/delete_with_ef_core",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"3. Delete with EF Core",id:"delete_with_ef_core",slug:"delete_with_ef_core",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_database-basics/2h_delete_with_ef_core.md"},sidebar:"c_and_net_classic",previous:{title:"2. Update with EF Core",permalink:"/lhtp/c_and_net_classic/database-basics/update_with_ef_core"},next:{title:"4. Establishing a One-To-Many Relationship with Navigation Properties",permalink:"/lhtp/c_and_net_classic/database-basics/establishing_a_one_to_many_relationship_with_navigation_properties"}},s={},p=[{value:"Updating the Controller",id:"updating-the-controller",level:2},{value:"Updating the View",id:"updating-the-view",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now let's make sure our application can also destroy an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),". We'll add a ",(0,i.kt)("em",{parentName:"p"},"Delete")," link on the item's detail page. Clicking this link will take the user to a page that confirms they'd like to delete this particular item."),(0,i.kt)("h2",{id:"updating-the-controller"},"Updating the Controller"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Once again, let's start with the necessary controller actions:"),(0,i.kt)("div",{class:"filename"},"ItemsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\npublic ActionResult Delete(int id)\n{\n    Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);\n    return View(thisItem);\n}\n\n[HttpPost, ActionName("Delete")]\npublic ActionResult DeleteConfirmed(int id)\n{\n    Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);\n    _db.Items.Remove(thisItem);\n    _db.SaveChanges();\n    return RedirectToAction("Index");\n}\n...\n')),(0,i.kt)("p",null,"Here, our ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," action is named ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteConfirmed")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete"),". This is because both the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," action methods for ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," take ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," as a parameter. However, C# will not allow us to have two methods with the same signature. Remember that the ",(0,i.kt)("strong",{parentName:"p"},"signature")," is the method name and parameters. The ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," attribute is not considered part of the method signature so the C# compiler will think the actions above are the same method if we name them both ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete"),"."),(0,i.kt)("p",null,"To avoid errors, we call one of our methods ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," and the other ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteConfirmed"),". Note that our annotation includes ",(0,i.kt)("inlineCode",{parentName:"p"},'[ActionName("Delete")]'),". This is so we can still utilize the proper ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," action even though we've named our method ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteConfirmed"),"."),(0,i.kt)("p",null,"Other than that, the code is very similar to what we've seen so far. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete()")," action looks just like our ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," actions ",(0,i.kt)("inlineCode",{parentName:"p"},"Create()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()"),": we simply need to get the correct item and return it to the view."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteConfirmed()")," method is also very similar to the code we've used in other actions. The only difference is that we utilize ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1.remove?view=efcore-6.0"},"the built-in ",(0,i.kt)("inlineCode",{parentName:"a"},"Remove()")," method")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"_db.Items"),"."),(0,i.kt)("h2",{id:"updating-the-view"},"Updating the View"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now let's create the corresponding view:"),(0,i.kt)("div",{class:"filename"},"Views/Items/Delete.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Item\n\n<h2>Are you sure you want to delete this?</h2>\n\n@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)\n@using (Html.BeginForm())\n{\n    <input type="submit" value="Delete" />\n}\n@Html.ActionLink("Back to List", "Index")\n')),(0,i.kt)("p",null,"By default, the HTML helper method ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginForm()")," creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to an action method whose name matches the ",(0,i.kt)("inlineCode",{parentName:"p"},".cshtml")," file it's contained in. That means the ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginForm()")," helper seen in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete.cshtml")," file above will automatically create a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to our ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," action. This is why our annotation includes ",(0,i.kt)("inlineCode",{parentName:"p"},'ActionName("Delete")'),"."),(0,i.kt)("p",null,"Let's also add a delete link to ",(0,i.kt)("inlineCode",{parentName:"p"},"details.cshtml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<p>@Html.ActionLink("Delete Item", "Delete", new { id = Model.ItemId })</p>\n')),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view how a sample version of the To Do List app should look like at this point. Note that this is a link to a specific branch in the repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-3-to-do-list-with-ef-core-csharp-net6/tree/3_update_and_delete"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List with EF Core: 3","_","update","_","and","_","delete"))))}m.isMDXComponent=!0}}]);