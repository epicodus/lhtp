---
title: 'Video Recap: Core CSS Concepts and Debugging'
id: video-recap-core-css-concepts-and-debugging
slug: video-recap-core-css-concepts-and-debugging
hide_table_of_contents: true
sidebar_position: 52
day: thursday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3n_recap_on_core_css_concepts_and_debugging.md
---

We're close to the end of the course section, which means we've covered a lot of new concepts related to Git, HTML, Markdown, and CSS. At this moment, we'll take a break to review the core CSS concepts that we've learned thus far. 

In the following 10 minute video, you'll get a review on:

* Inline styling.
* Using an external stylesheet.
* Classes and Ids.
* Style inheritance in CSS.
* Debugging CSS using the browser's developer tools. 

<p align="center">
  <iframe title="vimeo-player" src="https://player.vimeo.com/video/778165994?h=2063d3fffb" width="640" height="360" frameborder="0" allowfullscreen></iframe>
</p>

<details>
  <summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide the video transcript</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
  <hr />
  <p>Hey guys, this is a recap video of the very basics of CSS you have learned so far. For this video we will go back to the very beginning of our application before any styling has been added. We just have some simple HTML. Inside our body we have a header, along with a div and inside our div we have another header, and a paragraph.</p>
  <p>CSS stands for cascading style sheets and as the name implies it is used to style our applications. This can be important not just to make things look nice but also to make our applications user friendly and easier to navigate.</p>

  <p><strong>Inline Styles</strong></p>

  <p>You can see here how the header is currently displayed with default HTML styles. Note that this window is currently zoomed in for better visibility and if your following along your text is likely to look much smaller.</p> 
  <p>Now let's say we want to change the color of this header's text. to change the color of an HTML element we add inside the opening tag a style attribute that will be equal to <code>"color:'blue';"</code>. In this case, color would be our property we want to style, which is followed by a colon, and blue would be our value for that style which is followed by a semi-colon.</p> 
  <p>CSS has many different properties and values that can be given to those properties. For example, we could also change the alignment of our text, with <code>text-align: center;</code>. The text-align property stands for what we want to change, in this case we want to change how our text is aligned, and center is our value.</p> 
  <p>Each CSS property has specific values that it can take. For example, text align can take center but it could also take left or right. Color can take some basic built-in color names like blue or red or salmon. color could also take more specific color values using a color hex code, RGB value, or an HSL value. Simply googling a color picker can help you find the value of a specific color you're looking for. You can also use VS Code's built-in color picker.</p> 
  <p>However, color can't use a value of center like text-align can, so you'll need to always be sure your value input matches the property it's being given to. A simple google search for something like css color values, should give you the various values you can use for a property and how they should be inputted.</p>

  <p><strong>Using an External CSS Stylesheet</strong></p>

  <p>Typing the css directly into the HTML tag like we have done here is called inline styles. It can be a quick way to add a couple simple styles to your application, however you will most likely want to organize all your styles into a separate file, otherwise your CSS and HTML can become very messy and specific code will get difficult to find.</p>
  <p>To do this, first we will make a separate css folder titled CSS. This way all of our styles can live in one place in our project. Next inside our css folder we will make a file titled styles.css. To connect our new css file to our HTML we will add a link tag to our header with a couple of attributes:</p> 
  
  <ul>
    <li><code>href</code> refers to the location of the document we are linking, in our case css/styles.css.</li> 
    <li><code>rel</code> specifies the relationship between the current document and our linked document in our case we are linking a stylesheet.</li>
    <li><code>type</code> specifies the media type of the linked document which in our case will be text/css.</li>
  </ul>

  <p>Now that our CSS file is linked to the appropriate HTML file, we can begin adding our css to our styles.css file. Let's start with the styles added to our H1 element. We will remove our inline styles from our HTML. Now in our css file we want to first specify which HTML tag we would like to style. In this case we want to style our H1.</p> 
  <p>Next we will add a space then curly brackets, then add a line between your curly brackets and after an indentation we will add <code>color:'darkblue';</code>. You'll notice the property and value look similar to the inline styles from before. Save and refresh your page and you'll see both header colors are now blue, not just our first header. This is because CSS is now targeting all h1 tags in our HTML.</p> 
  <p>To add the center property on a new line but still inside our curly brackets, we will simply add <code>text-align:center</code>;. Save and refresh again and you should see both our h1 are now centered as well.</p>
  <p>Next, let's change the background color for a different HTML element, our div element. To change our div we will type underneath our h1 tag's styles, div and again add curly brackets just as we did above. Let's add a background color to our div. We can do this by typing <code>background-color:'darkblue';</code>.</p>

  <p><strong>Using Classes and Ids</strong></p>

  <p>Our div now becomes a dark blue however our second h1 has become invisible and our paragraph tag is difficult to read. It would be good to change both of these elements to the color white but this presents multiple problems. Changing our h1 white will change all of our h1's which will cause our fist header to become invisible instead. Also, let's imagine we have many different tags inside of our div element. It would be very time consuming to change each one individually. Luckily there are a few ways we can style this quickly and easily. Let's start with id's.</p>
  <p>Let's go back to our HTML. We can add an id to any element by adding an id attribute and making it equal to whatever name we want to give it. We'll want to always name our id's very specific to their elements as we can only use an id name once in an entire application. Let's name our first h1 "main-header" and save.</p>
  <p>Next we'll go back to our CSS file. We can now style by our id using # and the id name so in our case main-header. If we save we can see our styles are now only attributed to our first header element.</p>
  <p>Now let's style all the text in our div to be white using classes. To add a class to an HTML element we can simply add the class attribute. Let's add a class to our second H1 element. Next we will name that class whatever we feel fits best. In our case let's name this class white-text. Unlike ids, classes can be added to multiple HTML elements so we will then add this same class attribute and name to our paragraph tag and save.</p>
  <p>Now we will go back into our CSS file and style our class using a period and our class name. Add <code>color:'white';</code>. Save and all our text is now easy to read inside our div.</p>

  <p><strong>Style Inheritance</strong></p>

  <p>However there is a second way we can change our text inside our div. As stated before CSS stands for cascading stylesheets. This means that CSS styles cascade down to their child elements. For example our div tag is currently holding inside it two elements, our h1 and our paragraph. These can be referred to as child elements of our div and our div can be referred to as the parent of our paragraph. In CSS child elements will always inherit styles from parent elements. Because of this, we can instead add our color of white to our div element and we will see the same result.</p>
  <p>What if we then have multiple colors for the same element. For example we could change our white-text class to instead use the color green. In general CSS will favor the more specific element indication, so as an inherited style our white will be overwritten by our class styles. An inherited style is overwritten by the elements tag styles, which will be overwritten by class styles which will be overwritten by id styles. If this is unclear I would advise playing around with css code to see which styles overwrite others.</p>

  <p><strong>Using Dev Tools</strong></p>

  <p>We can see these styles overwriting each other in our dev tools. We'll right click our application and go to inspect. This should take you straight to the elements tab but if not, navigate to elements. Here we can see our html code. We can then click the dropdown triangle next to our div and click our h1 element. Underneath the HTML we will see the styles for our element. We can see our white-text class with the <code>color:'green';</code>. next we see an h1 with many styles. These are the default styles for an h1 element. Then we see our div styles. The background color is grayed out as it does not apply to this element, and we can see a line through our <code>color:'white';</code>. This indicates that the color white was inherited but overwritten. Using this tool is a great way to check and see which styles an element is inheriting and whether certain styles are being used or not.</p>
  <p>We can even use the dev tools to preview css before writing it in our code. Under our .white-text class lets double click green. instead we'll write light gray. Click enter and our changes will be seen. We can add another style to our class by clicking anywhere in the white space around our element. Let's add <code>text-align:center;</code>. This does not affect the original code in any way and is a great way to try styles. You can even try this out on other web pages you visit. simply refresh the page to see our official styles again.</p>
</details>