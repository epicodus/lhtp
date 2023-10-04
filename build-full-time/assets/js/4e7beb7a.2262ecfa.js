"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[20933],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7896),i=(n(2784),n(30876));const r={title:"Saving Objects in the Database",id:"saving-objects-in-the-database",slug:"saving-objects-in-the-database",hide_table_of_contents:!0,sidebar_position:13,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0l_saving_objects_in_the_database.md"},o=void 0,s={unversionedId:"c-and-net/database-basics/saving-objects-in-the-database",id:"c-and-net/database-basics/saving-objects-in-the-database",title:"Saving Objects in the Database",description:"In the last lesson, we wrote and tested a method to override Equals(). Now we're ready to write a method for saving Items to the database.",source:"@site/docs/c-and-net/8_database-basics/0l-saving-objects-in-the-database.md",sourceDirName:"c-and-net/8_database-basics",slug:"/c-and-net/database-basics/saving-objects-in-the-database",permalink:"/c-and-net/database-basics/saving-objects-in-the-database",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Saving Objects in the Database",id:"saving-objects-in-the-database",slug:"saving-objects-in-the-database",hide_table_of_contents:!0,sidebar_position:13,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0l_saving_objects_in_the_database.md"},sidebar:"c-and-net",previous:{title:"Overriding Equals and GetHashCode",permalink:"/c-and-net/database-basics/overriding-equals-and-gethashcode"},next:{title:"Finding Objects in the Database",permalink:"/c-and-net/database-basics/finding-objects-in-the-database"}},l={},d=[{value:"Saving Objects in the Database",id:"saving-objects-in-the-database",level:2},{value:"Testing the Save() Method",id:"testing-the-save-method",level:3},{value:"Creating New Database Entries",id:"creating-new-database-entries",level:3},{value:"Parameter Placeholders",id:"parameter-placeholders",level:4},{value:"Passing a <code>MySqlParameter</code> Object Into a <code>SqlCommand</code>",id:"passing-a-mysqlparameter-object-into-a-sqlcommand",level:4},{value:"Executing a Non-Query Command",id:"executing-a-non-query-command",level:4},{value:"Returning an <code>id</code> from the Database",id:"returning-an-id-from-the-database",level:3},{value:"Overriding <code>Equals()</code> Method Update",id:"overriding-equals-method-update",level:3},{value:"Updating Tests",id:"updating-tests",level:3},{value:"Updating Controller Logic",id:"updating-controller-logic",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we wrote and tested a method to override ",(0,i.kt)("inlineCode",{parentName:"p"},"Equals()"),". Now we're ready to write a method for saving ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s to the database. "),(0,i.kt)("h2",{id:"saving-objects-in-the-database"},"Saving Objects in the Database"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"testing-the-save-method"},"Testing the Save() Method"),(0,i.kt)("p",null,"Let's start by adding an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method to our ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," class. It will return type ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," because adding a database entry doesn't need to return a value."),(0,i.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n  public void Save()\n  {\n  }\n\n...\n")),(0,i.kt)("p",null,"Now let's write a test:"),(0,i.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/ItemTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [TestMethod]\n  public void Save_SavesToDatabase_ItemList()\n  {\n    //Arrange\n    Item testItem = new Item("Mow the lawn");\n\n    //Act\n    testItem.Save();\n    List<Item> result = Item.GetAll();\n    List<Item> testList = new List<Item>{testItem};\n\n    //Assert\n    CollectionAssert.AreEqual(testList, result);\n  }\n\n')),(0,i.kt)("p",null,"Our test is straightforward. We should be able to instantiate a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and save it to the database. Then we should be able to use our ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAll()")," method to verify that it's been saved. Note that we are asserting that our ",(0,i.kt)("inlineCode",{parentName:"p"},"testList")," and our ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," are the same. We are able to do this because we overrode the ",(0,i.kt)("inlineCode",{parentName:"p"},"Equals()")," method."),(0,i.kt)("p",null,"Run this test and verify that it fails."),(0,i.kt)("h3",{id:"creating-new-database-entries"},"Creating New Database Entries"),(0,i.kt)("p",null,"Now let's add code to ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," to interact with our database."),(0,i.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public void Save()\n{\n  MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);\n  conn.Open();\n  \n  MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;\n\n  // Begin new code\n\n  cmd.CommandText = "INSERT INTO items (description) VALUES (@ItemDescription);";\n  MySqlParameter param = new MySqlParameter();\n  param.ParameterName = "@ItemDescription";\n  param.Value = this.Description;\n  cmd.Parameters.Add(param);    \n  cmd.ExecuteNonQuery();\n  // Id = cmd.LastInsertedId;\n\n  // End new code\n\n  conn.Close();\n  if (conn != null)\n  {\n    conn.Dispose();\n  }\n}\n\n')),(0,i.kt)("p",null,"The beginning and end of this method should look familiar. We start by opening a connection and instantiating a ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlCommand"),". We end by closing our connection."),(0,i.kt)("p",null,"Let's take a closer look at the code in the new code section above. This starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"// Begin new code")," and ends with ",(0,i.kt)("inlineCode",{parentName:"p"},"// End new code"),"."),(0,i.kt)("h4",{id:"parameter-placeholders"},"Parameter Placeholders"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'cmd.CommandText = "INSERT INTO items (description) VALUES (@ItemDescription);";\n')),(0,i.kt)("p",null,"We pass in an ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," SQL command into ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd.CommandText"),". There's a new wrinkle here: we pass in a ",(0,i.kt)("strong",{parentName:"p"},"parameter placeholder")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"@ItemDescription")," into the SQL statement. We want to use parameter placeholders whenever we are passing along data that a user enters. Information stored to a parameter is treated as field data and not part of the SQL statement, which helps to protect our application from a malicious attack called ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/SQL_injection"},"SQL injection"),", which is illustrated in ",(0,i.kt)("a",{parentName:"p",href:"https://xkcd.com/327/"},"this comic"),"."),(0,i.kt)("p",null,"The placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"@ItemDescription")," will be replaced with actual data from the user when the ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlCommand")," executes. Parameter placeholders need the ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," symbol prefixing the name. You can read more about how parameters work in MySQL ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/connector-net/en/connector-net-tutorials-parameters.html"},"here"),"."),(0,i.kt)("h4",{id:"passing-a-mysqlparameter-object-into-a-sqlcommand"},"Passing a ",(0,i.kt)("inlineCode",{parentName:"h4"},"MySqlParameter")," Object Into a ",(0,i.kt)("inlineCode",{parentName:"h4"},"SqlCommand")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'MySqlParameter param = new MySqlParameter();\nparam.ParameterName = "@ItemDescription";\nparam.Value = this.Description;\ncmd.Parameters.Add(param);\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We create a ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlParameter")," object for each parameter required in our ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlCommand"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ParameterName")," must match the parameter in the command string. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," is what will replace the parameter in the command string when it is executed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We define the ",(0,i.kt)("inlineCode",{parentName:"p"},"ParameterName")," property of ",(0,i.kt)("inlineCode",{parentName:"p"},"param")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"@ItemDescription"),", matching the parameter used in our SQL command ",(0,i.kt)("inlineCode",{parentName:"p"},'"INSERT INTO items (description) VALUES (@ItemDescription);"')," exactly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We define the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," property of ",(0,i.kt)("inlineCode",{parentName:"p"},"param")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"this.Description"),". This refers to the auto-implemented ",(0,i.kt)("inlineCode",{parentName:"p"},"Description")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," we're saving.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"param")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlCommand"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameters")," property using ",(0,i.kt)("inlineCode",{parentName:"p"},"Add()"),". If we had more parameters to add, we would need to ",(0,i.kt)("inlineCode",{parentName:"p"},"Add()")," each one."))),(0,i.kt)("p",null,"This may seem confusing, but what we're essentially doing here is using an object to say the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ItemDescription")," in our ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd.CommandText")," equals ",(0,i.kt)("inlineCode",{parentName:"p"},"this.Description"),". There are simpler ways to do this, but for now we're doing it the long way as a demonstration. These four lines could all be replaced by this one line: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'cmd.Parameters.AddWithValue("@ItemDescription", this.Description);\n')),(0,i.kt)("h4",{id:"executing-a-non-query-command"},"Executing a Non-Query Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"cmd.ExecuteNonQuery();\n")),(0,i.kt)("p",null,"Finally, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteNonQuery()")," on our ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," object to execute the SQL command."),(0,i.kt)("p",null,"We only need the code up to this line in order to successfully save a new row in the database. In fact, we can run our tests and they will all pass. However, there's one more important thing we need to do so our ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method is fully integrated into our application."),(0,i.kt)("h3",{id:"returning-an-id-from-the-database"},"Returning an ",(0,i.kt)("inlineCode",{parentName:"h3"},"id")," from the Database"),(0,i.kt)("p",null,"The following line is currently commented out in our method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Id = cmd.LastInsertedId;\n")),(0,i.kt)("p",null,"Our method will correctly save ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s without the line above. When an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," is saved, our database will automatically assign an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," to it. However, there's a big problem. Our application doesn't know about this ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," value unless we add the line of code above. The line is very simple: it states that we need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"Id")," property equal to the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the new row in our database. Fortunately, our ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlCommand")," object has a ",(0,i.kt)("inlineCode",{parentName:"p"},"LastInsertedId")," property which we can assign to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"Id")," property. This ensures that the ID property for an item is the same both in our application and our database."),(0,i.kt)("p",null,"If we uncomment the line of code above and run our tests again, the compiler will throw an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Property or indexer 'Item.Id' cannot be assigned to -- it is read only\n")),(0,i.kt)("p",null,"Fortunately, this is a very clear error. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"Id")," property is currently only read-only. We need to add a setter to our auto-implemented property ",(0,i.kt)("inlineCode",{parentName:"p"},"Id"),":"),(0,i.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public int Id { get; set; }\n")),(0,i.kt)("p",null,"We'll get a new error when we run our tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Cannot implicitly convert type 'long' to 'int'. An explicit conversion exists (are you missing a cast?)\n")),(0,i.kt)("p",null,"This error occurs because the ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlCommand")," property called ",(0,i.kt)("inlineCode",{parentName:"p"},"LastInsertedId")," returns a value of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"long"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"long")," element is a piece of 64-bit data while an ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," is 32-bit."),(0,i.kt)("p",null,"To fix this issue, we'll use an ",(0,i.kt)("strong",{parentName:"p"},"explicit cast"),", also known as an ",(0,i.kt)("strong",{parentName:"p"},"explicit conversion"),", to turn this ",(0,i.kt)("inlineCode",{parentName:"p"},"long")," back into an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),". Remember that explicitly casting or converting data will force this ",(0,i.kt)("inlineCode",{parentName:"p"},"long")," into a new data type. We should only ever do this when we're sure we won't lose data in the process."),(0,i.kt)("p",null,"For the applications we make, the length of the id will not exceed the limits of a 32-bit ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),". Instead of refactoring our ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," class to use ",(0,i.kt)("inlineCode",{parentName:"p"},"long")," data types for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Id")," properties, we'll use explicit conversion to turn them into ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),"s."),(0,i.kt)("p",null,"We just need to tweak this line of code in our method:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Id = (int) cmd.LastInsertedId;\n")),(0,i.kt)("p",null,"We add ",(0,i.kt)("inlineCode",{parentName:"p"},"(int)"),", which explicitly converts the ",(0,i.kt)("inlineCode",{parentName:"p"},"LastInsertedId")," property into an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),". Now our ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method correctly saves an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," to the database and sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"Id")," property to the database-assigned id value."),(0,i.kt)("h3",{id:"overriding-equals-method-update"},"Overriding ",(0,i.kt)("inlineCode",{parentName:"h3"},"Equals()")," Method Update"),(0,i.kt)("p",null,"Our tests will pass as expected but our method for overriding equality is no longer accurate. We should always ensure that all properties are equal when comparing two objects. In this case, that means we should also make sure that the objects we are comparing have the same ",(0,i.kt)("inlineCode",{parentName:"p"},"Id")," property. Let's update the method now:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n  public override bool Equals(System.Object otherItem)\n  {\n    if (!(otherItem is Item))\n    {\n      return false;\n    }\n    else\n    {\n      Item newItem = (Item) otherItem;\n      bool idEquality = (this.Id == newItem.Id);\n      bool descriptionEquality = (this.Description == newItem.Description);\n      return (idEquality && descriptionEquality);\n    }\n  }\n\n...\n")),(0,i.kt)("p",null,"Whenever we add a new property to our application, we should make sure that we update our ",(0,i.kt)("inlineCode",{parentName:"p"},"Equals()")," method accordingly."),(0,i.kt)("h3",{id:"updating-tests"},"Updating Tests"),(0,i.kt)("p",null,"We can also uncomment one of our previously commented-out tests and make a small update to get it to pass:"),(0,i.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/ItemTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'\n  [TestMethod]\n  public void GetAll_ReturnsItems_ItemList()\n  {\n    //Arrange\n    string description01 = "Walk the dog";\n    string description02 = "Wash the dishes";\n    Item newItem1 = new Item(description01);\n    newItem1.Save(); // New code\n    Item newItem2 = new Item(description02);\n    newItem2.Save(); // New code\n    List<Item> newList = new List<Item> { newItem1, newItem2 };\n\n    //Act\n    List<Item> result = Item.GetAll();\n\n    //Assert\n    CollectionAssert.AreEqual(newList, result);\n  }\n\n...\n')),(0,i.kt)("p",null,"We just need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," after creating each new ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"."),(0,i.kt)("h3",{id:"updating-controller-logic"},"Updating Controller Logic"),(0,i.kt)("p",null,"Next, let's make sure to call our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method after we create new instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," objects in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoriesController"),":"),(0,i.kt)("div",{class:"filename"},"ToDoList/Controllers/CategoriesController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n[HttpPost("/categories/{categoryId}/items")]\npublic ActionResult Create(int categoryId, string itemDescription)\n{\n  Dictionary<string, object> model = new Dictionary<string, object>();\n  Category foundCategory = Category.Find(categoryId);\n  Item newItem = new Item(itemDescription);\n  newItem.Save();    // New code\n  foundCategory.AddItem(newItem);\n  List<Item> categoryItems = foundCategory.Items;\n  model.Add("items", categoryItems);\n  model.Add("category", foundCategory);\n  return View("Show", model);\n}\n\n...\n')),(0,i.kt)("p",null,"In this lesson, we've added a ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method that allows us to add ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s to the database. Our method returns a database-assigned id so that we can ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s in our application always correctly match the corresponding rows in the database. We had to use an explicit cast for this to work correctly. Finally, we updated our ",(0,i.kt)("inlineCode",{parentName:"p"},"Equals()")," method and made some small changes to our application so it can fully utilize our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method."))}c.isMDXComponent=!0}}]);