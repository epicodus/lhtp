---
title: Practicing APIs via Postman and the Developer Console
id: practicing-apis-via-postman-and-the-developer-console
slug: practicing-apis-via-postman-and-the-developer-console
hide_table_of_contents: true
sidebar_position: 10
day: monday
type: exercise
url: >-
  https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0fa_classwork_api_practice_postman_devconsole.md
---

**Goal:**  Practice making API calls with Postman. Start by following along with the pre-work by creating an account on the OpenWeather API. Continue by exploring the API via Postman. Focus on parsing the JSON object you receive from your API call, and pay attention to the response codes received from your API calls.

## Warm Up
---

* What is the difference between synchronous and asynchronous code?
* What does it mean for JavaScript to be single-threaded and non-blocking?
* What does API stand for?
* What are some differences between Web APIs and third-party APIs?
* What is an HTTP status code?

## Code
---

### JSON Object and JavaScript Object Practice

With your pair(s), take a look at the example JSON response object below. Afterwards, work together to complete the tasks following the example to practice your understanding.

In this example, pretend that an API for an ethical kennel for all sorts of animals can be called upon to return a list of all currently available animals that are up for adoption. Included in this JSON object is information about each animal such as their name, weight, age, sex, breed, and temperament.

Here is the example response body from said API call.

```
{
  "cats": [
    {
      "id": 1,
      "name": "Boots",
      "breed": "Calico",
      "temperament": "as cuddly as can be",
      "sex": "female",
      "weight": 11
    },
    {
      "id": 2,
      "name": "Cowboy Bebop",
      "breed": "Classic Tabby",
      "temperament": "absolutely wacky",
      "sex": "male",
      "weight": 13
    },
    {
      "id": 3,
      "name": "Spaghetti",
      "breed": "Maine Coon",
      "temperament": "lazy",
      "sex": "female",
      "weight": 15
    }
  ],
  "dogs": [
    {
      "id": 1,
      "name": "Gunter",
      "breed": "English Bulldog",
      "temperament": "relaxed, loves kids and other pets",
      "sex": "male",
      "weight": 52
    },
    {
      "id": 2,
      "name": "Wesley",
      "breed": "Golden Retriever",
      "temperament": "as dumb as the rocks he eats",
      "sex": "male",
      "weight": 68
    },
    {
      "id": 3,
      "name": "Princess Buttercup",
      "breed": "Teacup Poodle",
      "temperament": "picky eater",
      "sex": "female",
      "weight": 5
    }
  ]
}

```

Before continuing through the exercise, you may want to refresh your knowledge on the weekend's lesson about [Parsing JSON](https://new.learnhowtoprogram.com/intermediate-javascript-part-time/asynchrony-and-apis/parsing-json).

* Describe what the example JSON object contains in terms of information. How is the information formatted?
* How is this JSON object different from a JavaScript object literal?
* If you were to convert this JSON object to be valid JavaScript object notation, what would you need to change?
* Copy the JSON object into a new empty file called `jsonToJavaScriptObjectExample.js`
* Assign the object to an instance of a variable, for example: `const response = // Your JSON object`
* Below your object, practice the gathering values via bracket notation or dot nation for the following:
  * Retrieve the entire list of all cats from the response.
  * Retrieve the first dog’s entire object within the list of dogs.
  * Retrieve the temperament value from the English Bulldog.
  * Retrieve the cats from the list of cats that are *only* heavier than 12 pounds.
  * Retrieve only the female dogs from the list of dogs.
* Discuss with your partner: 
  * Are there any major differences between using a JSON Object versus a JavaScript Object Literal? 
  * What limitations, if any, could you encounter when trying to parse information from such an object?
  * Why might we want to convert a JSON Object into a JavaScript Object Literal?
  
Spoiler alert - we will be covering a built-in JavaScript method `JSON.parse()` in a future lesson, which automatically identifies and converts a JSON *string* into a JavaScript object literal. 

As you may have discovered together in the above discussion, we do this for a variety of reasons. Check out the [MDN Documentation on Object Literal Syntax vs. JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json) to get more information.

### OpenWeather API Postman Practice

#### Part 1

Follow along with the weekend homework to explore the OpenWeather API via PostMan. Focus on doing your best to read and understand how the API documentation is formatted:

* Create an account to access an API key for each individual in your group. Please note that new API keys may take a few hours before they are usable.
* Explore the [OpenWeather API list](https://openweathermap.org/api). Which APIs are available to free users?
* Using one individual’s API key, attempt making an API call to receive Current Weather Data through OpenWeather API’s free [Current Weather Data API endpoints](https://openweathermap.org/current).
* Try making an API call using latitude and longitude parameters.
  * Observe what the response code is. Is it `200OK`? `401`? `400`? Did you also receive a response body?
  * If you received a `200OK` response, take a look through the body. Try to find the temperature it returned. Do you notice anything peculiar about the temperature? Try exploring the API documentation to discover what unit of temperature the API is returning.
  * If you received a `200OK`, try breaking the API call by removing a letter or character from your API code, or from the call itself. What is the response now? What kind of error codes can you produce by breaking different parts of the API call?
  * If you received an error code *unintentionally*, did you copy your API key correctly? Is the API call formatted as they have it in their documented example? Do you need to include the `{` and `}` in the example call, or remove them? Try out several things and take note of the error message that is included in the response body.

Error handling will be an integral part of the upcoming independent project, and responses from different APIs might be unique for various types of errors. Make sure that you're thinking of edge cases that could potentially break an API call, and how you might access information from the API to display to a user in an imaginary UI.

#### Part 2

* Once you’ve received a `200OK` response from an API call, look at the response body and discuss with your pair what you see.
* Create a new project directory named `JSON Practice`
  * Copy the response into a new file titled `responseBody.json` in the project directory and open it within VSCode.
  * What can you observe about the JSON object? What similarities do you notice between a JSON object and a JavaScript object? What differences are there?
  * Read through [this previous lesson on JavaScript Objects](https://new.learnhowtoprogram.com/intermediate-javascript-part-time/object-oriented-javascript/javascript-objects) and note with your pair the major differences and similarities between JSON objects and JavaScript Objects.
* Refresh your memory on how to access data within JavaScript objects.

#### Part 3

*Note: In this part of the exercise, we will be utilizing two new methods: `JSON.parse()` and `JSON.stringify()`. You won't need to know exactly how these work for today, and we will go over them more in dpeth later. But, in short, `JSON.stringify()` ensures that an object passed into it becomes a valid JSON string, and `JSON.parse()` parses a valid JSON string into a JavaScript Object Literal.*

* Create a new file within the `JSON Practice` project directory called `javaScriptObjectResponse.js`
* Copy/paste the entire JSON object from `responseBody.json` as the value to a newly instantiated variable named `response`:

  ```
  const response = // Your JSON Object ….
  ```

* Now, try out the JavaScript method for parsing JSON. Wrap your entire JSON object in a `JSON.parse()` method, and the `JSON.stringify` method:

  ```
  const response = JSON.parse(JSON.stringify(// Your JSON Object …))
  ```  
* What might the object look like after parsing? 
* How might you access different pieces of information within this object? Is it different than accessing data in a JSON Object?
* Try writing examples below your instantiated object. As an example: `response.{keyName}`
  * How would you access the values for `lon` and `lat`?
  * How would you access the current weather information, ie “Clouds”?
  * How would you access the current temperature, ie “300.44”?
* Were your examples any different from how you'd access information from a JSON Object? Why or why not? 

#### Part 4

Finally, copy and paste your entire JavaScript `response` variable into Google Chrome’s DevTools console tab.
* Open the console by either pressing `F12`, `CMD+SHIFT+I`/`CTRL+SHIFT+I`, or hitting the three dots on the top right corner, then navigate to “More tools -> Developer Tools”
* Navigate to the `Console` tab in the Developer Tools, and copy paste your `response` variable:

```
> const response = JSON.parse(JSON.stringify(// Your JSON Object …))
< undefined
>
 // If successful, you’ll see “undefined” after hitting enter like above.
```

* Test out the examples of object notation you wrote in your JavaScript file to see if you can parse the values in your JavaScript object by entering them into the Developer Console.

```
> const response = JSON.parse(JSON.stringify(// Your JSON Object …))
< undefined
> response.exampleKey // Example of object notation to parse values from the object
> // some value will return if successful!

```

Feel free to try out accessing anything you can see in your object. Additionally, you can try to retrieve a different object from PostMan and work through the same process! The goal is to get a feel for how you’d maybe access these values in a JavaScript application to be able to deliver these values to the UI of an application.


### Explore Another API

After you’ve performed the above exploration with OpenWeather API, try exploring and experimenting with another completely different API. All APIs will have varying documentation both in quality and in how endpoints are built.

The goal is to get comfortable reading documentation and accessing data in a response body no matter what the API is, as no two are built the same!

Below are a few example APIs that we’ll continue to explore in upcoming lessons. Select an API from the list below, and work through the steps from the above exercise again. Optionally, you can also select an API that is not listed below.

No matter which API you explore now or in the future, please keep in mind that not all APIs are free. **Be very cautious of APIs that require credit card information so that you aren’t charged unnecessarily, and we advise not providing payment information to any APIs during your time at Epicodus**.

#### Giphy API

[Giphy API](https://developers.giphy.com/docs/api/) returns interesting GIFs depending on the request.
* Make sure to carefully read Giphy's documentation as you craft your requests.
* Follow the previous exercise’s steps!

#### Bike Index API

[Bike Index API](https://bikeindex.org/) returns information about registered bikes.  
* Make sure to read through [Bike Index’s API documentation](https://bikeindex.org/documentation/api_v3)
* Follow the previous exercise’s steps!

#### Cryptocurrency Analytics API

[CoinGecko API](https://www.coingecko.com/en/api) returns information about various cryptocurrencies and their values.
* Make sure to read through their API documentation!
* Follow the previous exercise’s steps!

#### Choose your own API!

There are many APIs out there. So many that we couldn’t list them all. In fact, you’ll craft your own later on many weeks from now! But for now, go ahead and explore the many options out there. Here’s an example list of available free APIs. Please note that these APIs haven’t been vetted, so it’s up to you to discover how the APIs documentation is to be interpreted.

[GitHub Repository - public-apis](https://github.com/public-apis/public-apis)

## Peer Code Review
---

* Did you successfully receive a `200OK` response from your API(s)?
* Were you able to successfully convert the JSON body to a JavaScript Object by hand?
* Are you able to use the Developer Console to access data within the object using object notation?
* Can you parse the API documentation to find an endpoint to use to receive the data required?

