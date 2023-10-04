---
title: HTML Indentation and Format Part 1
id: html-indentation-and-format-part-1
slug: html-indentation-and-format-part-1
hide_table_of_contents: true
sidebar_position: 10
day: monday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_3_html_indentation_and_format_part_one.md
---

Before we continue learning about HTML elements, we need to talk about HTML **indentation** and formatting. 

Consider a situation where someone wrote on a piece of paper but you had a hard time comprehending the message because the person's handwriting was difficult to read. The message could be very important or make logical sense but unfortunately you don’t know because the handwriting makes it hard to understand. 

This is comparable to the indentation and formatting of code. Not just HTML but all coding languages. Your code may work perfectly even without indentation and formatting but without consistent indentation and formatting other people will get frustrated when reading your code. Consider too your future self reading code you’ve written some time prior. Would your future self be able to read your code? 

So, while indentation and formatting has nothing to do with whether or not the code will work, be kind to others and your future self by using consistent indentation and formatting code as you work.


## Overview

We’ve used the word “consistent” several times to describe indentation and formatting code. Consistent formatting is often what people mean when they describe code that is “well-written.”


While there is common convention for indentation and formatting code, be aware that standards can change from company to company and depend on the coding language. Very likely there will be some minor differences in expectations about indentation and formatting at your next job. 


In this lesson we will cover the common conventions for indentation and formatting and set some standards of our own.


Anything not discussed in this lesson is completely up to your personal preference (whatever makes it easier for you to read code). Whatever you decide, the important thing is to be consistent.


### Important new terminology:

* Auto formatter, auto formatting
* Indentation, indent
* tab, tab size
* space, spaces


## Indentation

Briefly in the previous lesson we touched on how to indent lines of code. To recap:

* Pressing `Tab` will indent (move) a line of code to the right.
* Pressing `Shift + Tab` will indent a line of code to the left.
* Highlight multiple lines of code to indent many lines at once.

Indentation is done by pressing the `Tab` key on your keyboard. Sometimes people might say “Indent this code to the right” or “Indent this code two tabs to the right.” 

### Tab Size

`Tab Size` equals the number of spaces (pressing the spacebar) that results from pressing the `Tab` button on your keyboard. By default, VS Code sets `Tab Size` to 4 spaces. In other words, pressing `Tab` to indent code equals the same as pressing the spacebar key four times. 


As an aside, do NOT use the spacebar to indent lines of code. While it may look the same, it takes more time to use more keystrokes and the extra characters may lead to some problems in your code.


There is a lot of debate out there on `Tab Size` best practice when indenting code. It depends on the coding language and the company or team. While it largely comes down to personal preference, there are still some conventional standards regarding `Tab Size`. Typically, the choice is either 2 spaces or 4 spaces for `Tab Size`. Anything smaller than 2 or greater than 4 may be seen as unconventional. 


For now, we recommend you leave `Tab Size` to its default value in VS Code (4 spaces).

### When to Indent Code

Indentation can vary depending on the coding language so we will have to revisit this topic in the future. For now we will talk about indentation when writing HTML:


It is widely considered best practice to indent nested HTML elements. Revisit [lesson HTML elements](https://new.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/html-elements) if you need a refresher on nested elements, defining parent and child elements, and wrapping. In summary, elements are indented when they are inside other elements. 


Consider this example:

```
<!DOCTYPE html> 
<html lang="en-US">
<head>
	<title>Animal Ranks</title>
</head>
<body>
    <h1>Animal Ranking</h1>
    <div>
        <p>Hi, I’m the animal ranker. I rank animals.</p>
        <p>I am going to list my fav and least fav animals</p>
    </div>
    <div>
        <h2>Favorite Animals</h2>
        <p>In order of most favorite:</p>
        <ol>
            <li>Cats</li>
            <li>Dogs</li>
            <li>Bats</li>
            <li>Mice</li>
        </ol>
    </div>
    <div>
        <h2>Least Favorite Animals</h2>
        <p>In no particular order. All are F rank:</p>
        <ul>
            <li>Lobsters</li>
            <li>Cheetahs</li>
            <li>Sea Sponge</li>
        </ul>
    </div>
</body>
</html>
```

The one exception is that all child elements in the `html` elements are NOT indented one tab further to the right. There is no reason for this other than it is what is commonly done. In other words, it's convention. Since the `html` element is the highest parent element, it saves on some extra tab space to not indent all elements inside. 


## VS Code Auto Indentation

Lucky for us, we don’t have to rely always on manually indenting or formatting code ourselves. VS Code offers some settings by default to auto format and indent code.


Try it for yourself! **This html code is badly formatted and contains common formatting mistakes.** Copy paste this it into a `.html` file in VS code:

```
<     !DOCTYPE html> 
<html lang="en-US">
<head>
<title>        Animal Ranks</title>
</    head>
<body>
		<h1>Animal Ranking</h1>
		<div>
			<p>Hi, I’m the animal ranker. I rank animals.</p>
<p>I am going to list all of my favorite animals and all of my least favorite animals.</p>
		</div>
		<div>
<h2>Favorite Animals</h2>
<p> In order of most favorite: </p>
		<ol>
			<li>Cats</li>
				<li>Dogs</li>
					<li>Bats</li>
						<li>Mice</li>
		</ol>
		</div>
		<div><h2>Least Favorite Animals</h2><p>In no particular order. All are F rank:</p>
		<ul>
			<li>Lobsters</li>
            <li>Cheetahs</li>
            <li>Sea Sponge</li>
		</ul>
		</div>
</body>
</html>
```

Then press `Shift + Alt + F` on the keyboard to format the entire file or format just a selected area with `Ctrl+K` then `Ctrl+F`. You should see the result immediately. The auto formatter will fix incorrect indentation and remove unnecessary spaces within HTML elements.


You can choose to use the shortcuts above to format your code or allow VS code to auto format everytime you save your file. Do do this latter option, in VS Code go to:

1. File → Preferences → Settings
2. Search “Formatter”
3. Check the option “Editor: Format On Save”

>Note!  
>If the auto formatter is not working be sure to reach out to an instructor before moving on. 

### Auto formatting is not perfect


Simply be aware that auto formatting tools are not always perfect and VS Code is no exception. Just because you use an auto formatter tool doesn’t mean your code meets conventional standards or best practice.


Consider this example:


```
<     !DOCTYPE html> 
<html lang="en-US">
<head>
    <title>Animal Ranks</title>
</    head>
```

Copy paste this code into a `.html` file in VS Code and use the auto formatter tool. What happens? VS Code's auto formatter should fail to remove the extra space in the `<     !DOCTYPE html> ` element and the closing `/head>` tag.


VS Code at the very least should color code these tags differently to indicate there is a problem. By default, the angle bracket will turn red and the element name will turn from a blue to a white color. The exact error color code may change if you have chosen a different color theme for VS Code.


### Auto formatting will not fix broken code


Auto formatting tools are to help you save time writing consistent readable code. The auto formatting tools will NOT fix:.

1. Misspelled element names.
2. Capitalized letters in the element name. All HTML elements (with some exceptions) should be written in lowercase. Your code _may_ still work but it is not considered conventional to use capitalization in HTML elements.
3. Missing syntax. Such as this error `/head>`. This closing tag is missing a `>`.
4. Mismatched opening and closing tags. Such as `<h1>Animal Ranks</h2>`. 
5. Incorrectly nesting or wrapping elements. Such as:

```
<body>
    <div>
        <h2>Least Favorite Animals</h2>
        <p>In no particular order. All are F rank:</p>
        <ul>
            <li>Lobsters</li>
            <li>Cheetahs</li>
            <li>Sea Sponge</li>
        </div>
    </ul>
</body>
```

The error is the parent `div` element is not correctly wrapped around the `<ul>` child element. The auto formatter is not sophisticated enough to fix that for you. What's worse is that your code may appear at first to work just fine but later you will encounter unexplained problems without the benefit of an explicit error message. 

This is all just to iterate to not solely rely on the auto formatter. You are responsible for correctly writing HTML code. 
