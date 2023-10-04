---
title: Hosting a MySQL database and ASP.NET Core API or Web App on Azure
id: hosting-a-mysql-database-and-aspnet-core-api-or-web-app-on-azure
slug: hosting-a-mysql-database-and-aspnet-core-api-or-web-app-on-azure
hide_table_of_contents: true
sidebar_position: 9
day: weekend
type: lesson
url: >-
  https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/6_hosting_mvc_sql_database_azure.md
---

In this lesson we'll use Azure to host a MySQL database and an MVC web application that uses that database. 

**Objectives:**

* Use the Azure portal to create services for hosting
* Deploy a MySQL database 
* Deploy an ASP.NET Core 6 web application
* Connect the web app to the database
* Add debugging tools

Hosting a project makes it much easier to share, and it is common to see Azure listed on job applications as a desired skill. By the end we will be able to visit our hosted To Do List website and add items to our MySQL database all hosted on the Microsoft cloud. 

Please note that Azure offers a SQL database server service, meaning we don't need to use MySQL if we don't want to. A SQL database can be created and hosted through the Azure portal. In this lesson we'll create or connect a MySQL server to our Azure service. 

Azure can host your entire application stack from web applications and APIs to databases and other storage services. The steps for hosting an API are going to be identical to hosting an MVC web app. Azure has a free tier for hosting that should be more than enough memory and data for your time at Epicodus. 

## A Note on Microsoft Learn
---

[Microsoft Learn](https://learn.microsoft.com/en-us/training/browse/) is a platform that offers free lessons in a range of skill sets from beginner to advanced for many Microsoft products, such as Azure. They also offer tutorials on C# concepts, .NET, and Entity Framework Core in case you want to explore those topics more. One major benefit is it gives users access to a "sandbox" to practice Azure tools in, without a subscription and without a credit card! You only need an Azure account set up, after which you can test out things like hosting a web app on Azure. 

The limitations are that you can only use the sandbox for a a max of three hours per day and a max of ten sandboxes per day. It also tends to be tied to the specific lesson you're working on so make sure you set aside enough time before starting a lesson. It will also reset when it's done being used, so any hosted projects or any resources will be gone when the sandbox expires. It is purely for learning purposes. [Here is a link to "Hosting a Web App with Azure"](https://learn.microsoft.com/en-us/training/modules/host-a-web-app-with-azure-app-service/), which runs through a basic setup of hosting a simple ASP.NET Core web app. 

If you have different hosting goals than what this lesson addresses, I highly recommend browsing Microsoft Learn lessons and narrowing your results by using the search filter options (there are many!). The lessons are concise and straightforward, and can be a great introduction to what's possible with various Azure tools.

Visit [this link](https://learn.microsoft.com/en-us/training/browse/) to access Microsoft Learn.

## Create an Azure account
--- 

Follow [this link](https://azure.microsoft.com/en-us/free/) to set up a free Azure account. If you already have a Microsoft account you will sign in with that information, if you don't have one you'll need to set up a Microsoft account first.

**Unfortunately, setting up an Azure account usually requires a bank card to verify your identity, even if you are trying to create a free Azure account.** Eligibility for a free Azure account varies and is typically awarded to all new users and only lasts 12 months. And even with with a “free tier” account, you may be charged for exceeding certain limits. Hosting one MVC app and MySQL database for a month, assuming limited use, will be possible without paying any fees. However, before you continue with your free account, we suggest doing the following:

* [Read this article on avoiding fees with a free account](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/avoid-charges-free-account) as a reference before you subscribe to any Azure services. 
* See what services are free by following the instructions [on this page](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/avoid-charges-free-account#you-reached-the-end-of-your-free-12-months).

**If you aren't eligible for a free account the other option is “pay as you go pricing”.** However be aware that it can be very easy to rack up charges with this kind of subscription. To learn about subscription limits, [visit this documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits). Since the pricing model for Azure can be confusing, we recommend that you do not hesitate to submit **a request for a refund** if you are charged more than expected or more than you can afford as a new user with the pay as you go subscription; to learn how to submit a request, follow the steps [in this article](https://learn.microsoft.com/en-us/azure/azure-portal/supportability/how-to-create-azure-support-request).

## Navigating Azure
---

Azure is an enormous site with many services and so can be difficult to navigate. If we know what we're looking for, the best way to get around is to use the search bar at the top of any page. In this lesson when we refer to using 'the search bar' this is what we mean. 

![Azure search bar](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Azure+Hosting+MVC+&+SQL/search-bar.png)

It's also a great idea to read the docs on any Azure service you are going to use. They are concise and well written, and that is where all the information in this lesson came from. It will teach you how to choose the right services and tools as well as avoid common pitfalls.

## Vocab
---

**Subscription**: A logical container for your resources. Each Azure resource is associated with only one subscription. Creating a subscription is the first step in adopting Azure. We'll select the same subscription for all the services we add. This is the **free tier** or **pay as you go** subscription we set up with our Azure account. 

**Resource Group**: A container that holds related resources for an Azure solution. The resource group includes those resources that you want to manage as a group. For example, our resource group will contain both our App Service (todo-list-app) and Flexible Database Server (todo-list-mysql).

Basically a resource group acts the same way a folder on your desktop does, anything can go in it and it is for organizational purposes. It is required to choose a resource group when we create services, so we can't create services without first creating a resource group. 

**Flexible Server**: "Azure Database for MySQL - Flexible Server" is a fully managed production-ready database service designed for more granular control and flexibility over database management functions and configuration settings. Here's [a link to the Overview Page](https://learn.microsoft.com/en-us/azure/mysql/flexible-server/overview).

**App Service**: "Azure App Service" is a fully managed platform for hosting web applications and APIs in Azure.

## VS Code extensions
---

Download these two VS Code extensions: 

* [Azure Account](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account)
* [Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice)

You may be asked to sign into your Azure account via the "Azure Account" extension. If not, you'll do so later. 

## Create a Resource Group
---

Within [the Azure portal](https://portal.azure.com/#home), use the search bar and find the _resource groups_ option. Once there we'll use the _Create_ button to create a new group. 

![Create resource group](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Azure+Hosting+MVC+&+SQL/create-resource-group.png)

In the form, we'll see a field for subscription and region. We'll leave the subscription field as is; this is the subscription that we set up when we created our account. For the region field, you can leave the default as is as well, or select another preferred location for this resource group. The region is the location of the Azure server that will hold our resource group.

We'll be naming a lot of things in this tutorial so we will be very intentional with our names. We'll generally follow the pattern 'project-name-type-of-resource', so we'll call our group 'todo-list-rg', short for 'todo-list-resourcegroup'. The naming convention you use is up to you, but I highly recommend coming up with a pattern of your own that makes sense before you name anything.

After giving our resource group a name, we can optionally select to add tags, but we'll skip this. Instead, click the “Review + create” button to create the group. Azure will do a quick validation on it and if all is successful we can now add things to our group.

## Create an Azure Database for MySQL - Flexible Server
---

Next, we'll host our MySQL database via an Azure service called "Flexible Server", one option from "Azure Database for MySQL Servers".

### Create a Flexible Server

Within the Azure portal use the search bar to find _Azure Database for MySQL servers_. Select _Create_ to create a new Azure database server for MySQL. From the available options choose _Flexible Server_. This may take you directly to a create page for a new Flexible Server or you may need to click on another “create” button to get there.

![Flexible server create page](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Azure+Hosting+MVC+&+SQL/flexible-server-review.png)

Here's what we'll put into the form: 

**Subscription** 

* Pick the subscription to use, this will be the one we just set up when we created 
our account.

**Resource Group**

* We'll use the 'todo-list-rg' resource group.

**Server Name**

* We'll name our server 'todo-list-mysql' since it will be hosting our MySQL database.

**Region**

* Leave this as the default.

**MySQL version** 

* You can find your MySQL version by opening MySQL Workbench and finding the _About MySQL_ option. 

We won't update the other default form values. For example, Azure should automatically configure our `Compute + Storage` options, but for reference they should be the same as in the picture above. They can also be customized by clicking _Configure Server_ next to _Compute + Storage_ after we create our server: 

**Compute Sku**

* Burnstable, B1ms

**Storage** 

* free up to 32 GB

**Geo-redundancy** 

* Disabled. 

When you get to  the bottom of the page, you'll create a username and password. In setting up MySQL we used 'root' and 'epicodus' as the username and password for our database server. We won't be able to use those values here, because Azure is a bit stricter; for example, Azure wont let us choose the following usernames: azure_superuser, admin, administrator, root, guest, or public.

### Network

On the _Network_ tab we'll choose our method of connecting to the database server.

![Flexible server networking page.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Azure+Hosting+MVC+&+SQL/flexible-server-networking.png)

Azure Flexible Server provides two ways to connect to the database, **Public Access** (allowed IP addresses) and **Private Access** (VNet Integration). We'll use Public Access, and use the _add current client IP address_ option so the current computer you are working on is allowed through the Flexible Server's firewall. Why do this? This will enable us set up a database connection in MySQL Workbench so that we can use it to view the data in our Azure Flexible Server database; we'll do this soon! Take note of a few important details: 

* If you change computers and want to access set up a database connection from a new computer, you'll have to add that computer's IP address to the list of allowed computers within the firewall rules. To learn how to manage the firewall and allowed IP addresses, follow the steps [in this article](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-manage-firewall-portal). The article mentions a Flexible Server for a PostgreSQL database, but the steps are the same for MySQL databases. 
* We could select the option to allow IP addressing from 0.0.0.0 to 255.255.255.255; doing so would allow any computer through the database's firewall. This could be used during initial development, but is not safe for production. 
* If you want to read more about Network options follow this link: [Connectivity and Networking With Flexible Server](https://learn.microsoft.com/en-us/azure/mysql/flexible-server/concepts-networking).

Let's continue filling out the Flexible Server database form. We'll see other configurations for security and tags, but we'll skip those for now. Go ahead and click _Review + create_, review the final configurations, and then hit the _Create_ button at the bottom of the page. We should see a message that “deployment is in progress”. When deployment is finished, Azure will be hosting our server! It may however take a few minutes to complete deployment. 

You can click away from the deployment page now. If you need to find your database again, go to your 'todo-list-rg' resource group.

## Connect the Azure Flexible Server to our MySQL Workbench
---

Next, we'll connect our the Azure Flexible Server to our local MySQL Workbench application so that we can view our database.

In the Azure portal find the server you just created. We can do this by searching for the name of our server in the search bar, 'todo-list-mysql'. Note that our database may not be searchable by name until after it has been deployed. 

After we navigate to the todo-list-mysql server page find the **Server name** and **Server admin login name** and have those handy to paste into MySQL Workbench. 

Launch MySQL Workbench. On the main page find the **+** icon to create a new MySQL connection.

Within the “Setup New Connection” form, we'll first give it a **Connection Name** following our pattern, 'todo-list-mysql'. After that, set **Hostname** to our Azure “Server name”, and set **Username** to our Azure “Server admin login name”. 

The port should always be `3306` when using Azure. The connection method doesn't need to be changed here, standard is fine.

We can optionally add the password for our Azure Flexible Server now by clicking the button that says _Store in Keychain_ or _Store in Vault_. If you do not add it now, you'll be prompted to enter your password when you test the connection.

![Setup for MySQL Workbench connection to Azure Flexible Server.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Azure+Hosting+MVC+&+SQL/mysql-setup.png)

Then we need to test our connection before creating it by clicking the 'Test Connection' button. Testing the connection may take a while, so be patient. If all is successful we'll see a success message and can create our connection. We'll then be taken to our new todo-list-mysql database navigator within MySQL Workbench! It's from here that we can view or adjust our databases, tables, and more. However, we'll continue to primarily use EF Core migrations to do this.

If you get a failure message, it's likely that your IP address is not added to the list of approved IP addresses in our Azure Flexible Server's firewall. To manage allowed IP addresses, follow the steps [in this article](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-manage-firewall-portal). The article mentions a Flexible Server for a PostgreSQL database, but the steps are the same for MySQL databases.

### Create an Empty Database

The last step is to create an empty database within MySQL Workbench within the new connection we just set up with our Azure Flexible Server. We'll call our database `to_do_list`, but you can call yours whatever you prefer. We're setting up an empty database now so that it is populated within another form that we'll fill out later when we connect our web app hosted on Azure to our MySQL database, also hosted on Azure.

## Host an MVC Web App
---

Next, we'll host our ASP.NET Core MVC web app via Azure App Services.

### Create an App Service

In the search bar find _App Services_. Then on that page find and click the _Create_ button. Fill out the form with the following values: 

**Resource Group** 

* Select the resource group we made, 'todo-list-rg', or one you created.

**Name**

* Give your web app a name. This name will be in the domain of your hosted site. In this lesson we'll assume our name is 'todo-list-app'. With that name, we'll find our web app hosted at `todo-list-app.azurewebsites.net`. Note that you may not get your first choice of app name since there cannot be duplicates. 

**Publish**

* Code

**Runtime stack**

* .NET 6.0 (LTS)

**Operating System** 

* Your operating system

**Region**

* Any region near you. For example, US West 2 is located in Washington state. Take note that you could get a deployment error if you change to another region than the default selection, only because that region does not have enough availability.

**App Service Pricing Plan** 

* This should auto populate with your subscription. Take a moment to search for and select the “Free F1” option, if available 

Next, there will be form pages to select settings for deployment, networking, monitoring, and tags. We won't be changing the default within each of those pages, but we recommend reading each page to get a sense of the options. 

Finish up by reviewing and creating this app service. Just like with our Flexible Server it may take a few minutes to deploy. If any error messages are displayed, take the time to read everything in the message to learn what's going wrong.

### Connect the Web App to MySQL Database

Next, we'll need to connect our MySQL database to our web app we just hosted on Azure. 

Using the search bar or dashboard find the App Service we just made. Make sure to select the App Service and not the Application Insight option. 

Within the left navigation pane find the _Service Connector_ tab under _Settings_. Then, select _Create_. Fill out the options as follows: 

**Service Type** 

* DB for MySQL flexible server. 

**Connection name** 

* This is auto created, but we can change it if we want

**Subscription** 

* In this example I'm using 'Azure subscription 1'. If you see the "Free (F1)" option you should select that. 

**MySQL flexible server** 

* Here we'll pick the flexible server we set up called 'todo-list-mysql'

**MySQL database** 

* Select `to_do_list`, the empty database that we created earlier via MySQL Workbench. If you forgot to create an empty database, or you don't see `to_do_list` in the list of options, select `mysql`; we'll later change this value within the generated database connection string to point to a different database. 

**Client type** 

* Select .NET.

On the next page for “Authentication”, we'll need to input our Azure Flexible Database username and password. We'll store these values in a connection string that we'll use in our MVC app to connect to our Flexible Server. Alternatively, you are welcome to set up an [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault/), though we won't cover how to do so now.

For “Networking”, we'll leave the default values as is. Finish up by creating the new service connection. The creation process may take a few minutes. Note that we can edit all if not most of the values we input for this service connection later, as needed.

After the new service connector is created, find it within the Service Connector tab. (You may have to refresh the view.) Expand the service by clicking the _arrow_ next to it. Then, click the _hidden value_ icon to expose the connections string. This is what will go in `appsettings.json`, so we'll copy it now.

In our code we'll create an `appsettings.json` or modify an existing one. Exactly what your connection string looks like may vary.  It will look something like this: 

```json
"Server=(localdb)\\mssqllocaldb;Trusted_Connection=True;MultipleActiveResultSets=true"
```

Or this:

```json
"Server=todo-list-mysql.mysql.database.azure.com;Database=to_do_list;Port=3306;User Id={YOUR-USERNAME};Password={YOUR-PASSWORD};SSL Mode=Required"
```

Where `{YOUR-USERNAME}` and `{YOUR-PASSWORD}` have your actual username and password values that you input into the new Service Connector form earlier. As always, take the necessary steps to protect this information.

Whatever your connection string looks like, add it to your ASP.NET Core MVC's `appsettings.json` as a new connection string. We'll call our connection string `"AZURE_SQL_CONNECTION"`:

<div class="filename">appsettings.json</div>


```json
"ConnectionStrings": {
  "AZURE_SQL_CONNECTION": "Server=(localdb)\\mssqllocaldb;Trusted_Connection=True;MultipleActiveResultSets=true"
}
```

Next navigate to the `Program.cs` file and find the lines that pass the database connection string to our `builder` instance. We'll change it to match the name Azure asks us to use for the connection string, `“AZURE_SQL_CONNECTION”`. For this example it looks like this : 

<div class="filename">Program.cs</div>


```csharp
...
      builder.Services.AddDbContext<ToDoListContext>(
                        dbContextOptions => dbContextOptions
                          .UseMySql(
                            builder.Configuration["ConnectionStrings:AZURE_SQL_CONNECTION"], 
                            ServerVersion.AutoDetect(
                              builder.Configuration["ConnectionStrings:AZURE_SQL_CONNECTION"]
                            )
                          )
                      );
...
```

Now we need to run a command to create an update our `to_do_list` database with the same database connection string we got from Azure. Run the following command in your project folder (`ToDoList/`), replacing  `<your-azure-sql-connection-string>` with the Azure connection string:

```bash
dotnet ef database update --connection "<your-azure-sql-connection-string>"
```

If no errors occur we're ready to deploy our web app!

## Deploy the Code to the App Service
---

Make sure you've installed the two VS Code extensions for Azure before moving on to this next step: [Azure Account](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account) and [Azure App Service.](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) In the project directory `TodoList/`, we'll run the following command: 

```bash
dotnet publish -c Release
```

Then find the publish folder under _bin/Release/net6.0/publish_. Right click the _publish_ folder and select the _Deploy to Web App…_ option.

At some point, we will be asked to sign in to our Azure account. Then, it will ask us what subscription we want to use, and we'll choose the 'Azure Subscription 1' or 'Free (F1)'. Finally, it will ask what app service to use, and you'll select the name of your app hosted on Azure; in this lesson we used 'todo-list-app', but yours will be different since duplicate names are not allowed.  

This will deploy our code to the app service we created. After that has finished we should be given an option to browse our web app! The URL of our app is always the name of our web app + .azurewebsites.net. Using the example in this lesson, we'll find our app at `todo-list-app.azurewebsites.net`. At this point we should be able to interact with our database and web app without running any local servers. 

If you ever need to redeploy your app to reflect new changes in your source code, simply follow the same steps we worked through in this section. 

Once signed into Azure Account via VS Code, you won't have to sign in again. If you want to sign in/out of your Azure Account or do other actions, do so using the VS Code command palette. You can find all Azure Account commands by typing "Azure" in to the VS Code command palette. 

## Configure Logs
---

For debugging purposes we should configure the app service to log output to our VS Code terminal. We can do this by finding the Azure icon on the left vertical toolbar of VS Code. In that pane we'll see our subscription, and if we expand that we'll see all the services associated with it. Under _App Services_ we can find our 'todo-list-app' (the name of your app will be different). Right click the name of your app and click the _Start Streaming Logs_. You should see something like this in the output terminal. 

```bash
Connecting to log stream...
2022-11-30T00:50:11  Welcome, you are now connected to log-streaming service. The default timeout is 2 hours. Change the timeout with the App Setting SCM_LOGSTREAM_TIMEOUT (in seconds).
2022-11-30T00:51:11  No new trace in the past 1 min(s).
```

Now we should be able to see more output in our terminal when we need to debug our server. 

## Further Exploration
---

There's so much we can do with Azure. As noted earlier, Azure's docs are informative and concise, and all information in this lesson came from the Azure docs. Here's a few further exploration topics you may want to get started with first:

- **General Server Concepts.** Visit [this page on Azure server concepts](https://learn.microsoft.com/en-us/azure/mysql/flexible-server/concept-servers) for further reading.

- **Flexible Servers.** To learn more about flexible servers follow this link to the [Networking Overview page.](https://learn.microsoft.com/en-us/azure/mysql/flexible-server/concepts-networking)

- **Connect an Azure Key Vault to your App.** Azure Key Vault can be used to Securely store and tightly control access to tokens, passwords, certificates, API keys, and other secrets. [Follow this guide on connecting an App to the Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview).

- **Hosting with a Azure SQL database.** Azure has a [built in SQL database tool](https://learn.microsoft.com/en-us/azure/app-service/tutorial-dotnetcore-sqldb-app) that you can use instead of MySQL. 

Congratulations on hosting your web app and database! And, happy coding. 
