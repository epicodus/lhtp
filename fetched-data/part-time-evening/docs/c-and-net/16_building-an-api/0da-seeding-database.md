---
title: Seeding the Database
id: seeding-the-database
slug: seeding-the-database
hide_table_of_contents: true
sidebar_position: 5
day: weekend
type: lesson
url: >-
  https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0da_seeding_database.md
---

In this lesson, we'll learn how to seed the database with data so that we can quickly and efficiently test our API without having to manually add data in MySQL Workbench or via POST requests. 

## Seeding Data
---

Seeding a database is simply populating a database with data. The data can range from important and necessary authorization user roles to just dummy data.

In the case of the Cretaceous Park API, we'll seed the database with a handful of `Animal` entries so that we can test the endpoints we create in upcoming lessons.

In order to add the data, we'll make changes to our `CretaceousParkContext` class: we'll override [the `DbContext.OnModelCreating()` method](https://learn.microsoft.com/en-us/dotnet/api/system.data.entity.dbcontext.onmodelcreating?view=entity-framework-6.2.0) in order to have it add multiple `Animal` objects to our `Animal` entity: 

<div class="filename">Models/CretaceousParkContext.cs</div>

```csharp
using Microsoft.EntityFrameworkCore;

namespace CretaceousApi.Models
{
  public class CretaceousApiContext : DbContext
  {
    public DbSet<Animal> Animals { get; set; }

    public CretaceousApiContext(DbContextOptions<CretaceousApiContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Animal>()
        .HasData(
          new Animal { AnimalId = 1, Name = "Matilda", Species = "Woolly Mammoth", Age = 7 },
          new Animal { AnimalId = 2, Name = "Rexie", Species = "Dinosaur", Age = 10 },
          new Animal { AnimalId = 3, Name = "Matilda", Species = "Dinosaur", Age = 2 },
          new Animal { AnimalId = 4, Name = "Pip", Species = "Shark", Age = 4 },
          new Animal { AnimalId = 5, Name = "Bartholomew", Species = "Dinosaur", Age = 22 }
        );
    }
  }
}
```

Let's breakdown this new code:

* We declare the method as `protected override` since we only want this method to be accessible to the class itself and we want to override the default method. Since the method doesn't return anything, we also specify `void` as the return value. 

* The method requires a parameter of type `ModelBuilder` that we will call `builder`.

* We then call the `builder`'s `Entity<Type>()` method which returns an `EntityTypeBuilder` object that allows us to configure the type we specify in the method call.

* We can then call the `HasData()` method of the returned `EntityTypeBuilder` and pass the method any manner of entries we'd like to use to seed the database. We'll add five initial `Animal` entries to our database.

* Notice that we include the `AnimalId` property in each `Animal` object that we add to our database. This is the primary key of our `animals` table and it is usually set by the database itself. Because we're including it with the seeded data, we need to be sure that there's no data existing in the database that could cause a conflict with the seeded data that we're adding. For example, an existing animal object with the primary key of 1 would conflict with the seeded animal object with an id of 1. We can avoid any errors by seeding data before we start building and testing our endpoints, or by truncating the table in the database, which will delete all data within it.

* Finally, note that EF Core handles calling the `OnModelCreating()` method during the process of creating the DbContext, so we don't need to worry about calling `OnModelCreating()` anywhere, only redefining how it should work.

### Create the Migration

We can now create a new migration and update the database:

```bash
$ dotnet ef migrations add SeedData
$ dotnet ef database update
```

We should now be able to see our 5 new `Animal` entries in the database!

If you'd like to read more about Data Seeding, take a peek at the [official documentation](https://docs.microsoft.com/en-us/ef/core/modeling/data-seeding).

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Cretaceous Park API: `1_setup_and_seeding`](https://github.com/epicodus-lessons/section-6-cretaceous-park-api-csharp-net6/tree/1_setup_and_seeding)**

