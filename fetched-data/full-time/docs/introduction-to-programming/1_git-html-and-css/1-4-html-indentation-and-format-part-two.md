---
title: HTML Indentation and Format Part 2
id: html-indentation-and-format-part-2
slug: html-indentation-and-format-part-2
hide_table_of_contents: true
sidebar_position: 11
day: monday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_4_html_indentation_and_format_part_two.md
---

We’re almost done talking about formatting. There is a lot to remember but soon it will feel like second nature to you. The following formatting topics are things VS Code's auto formatter will not decide or fix for you. 


### Important new terminology:
* wrap line, word wrap
* whitespace
* comments, commented out code


## Start and End Tags: On the same line or on separate lines?

You may have noticed that some elements (in this example `div` and `ol`) have start and end tags that occupy their own lines. Whereas other elements (in this example `h2`, `p`, and `li`) have their start and end tag on the same line.

```
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
```
There is no reason to make this distinction other than it is convention to do so. For example, while this is less conventional, this is okay to do:

```
<div>
    <h2>
    Favorite Animals
    </h2>
    <p>
    In order of most favorite:
    </p>
    <ol>
        <li>
            Cats
        </li>
        <li>
            Dogs
        </li>
        <li>
            Bats
        </li>
        <li>
            Mice
        </li>
    </ol>
</div>
```

The reason why the first example is considered more conventional is because it saves a lot of visual space when formatting HTML. There are some elements (like header elements, list item elements) that typically don’t end up with a lot of content in them. So visually it is okay to keep the start and end tag on the same line because both will remain in view. Whereas a `div` element is an example of an element that tends to end up with a lot of content inside. Therefore the start and end tags are given their own lines to better distinguish them as the visual space between them becomes vast.

However, lots of people prefer the second example (or some combination of the two) because it makes HTML elements and their contents even more distinguishable for easier reading.

Whatever you decide, be consistent within the html file and your project.


## Wrap Line or Word Wrap: Handling long lines of text

You will eventually encounter a problem where you have a long line of text and goes off the screen to the right which forces you to horizontally scroll. 


Try creating the problem yourself. In an html file, create a `p` element and in the content start typing “lorem”. An auto complete option should appear and hitting enter will create a long line of text of lorem ipsum placeholder text.

Having long lines of text that require you to scroll horizontally is annoying but fortunately you have two options:

1. VS Code's auto formatter will automatically break up this long line of text. The end result should look something like this:

![static image of vs code wrap line](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/html-indentation-part2-image-1.png)


2. A second option is to turn off VS Code's auto formatter's wrap line option and instead use a toggle option called “Word Wrap” found in the “View” menu or using the shortcut `Alt + Z`.  
To turn off VS Code's auto formatter's wrap line option, go to:  
    
    1. File → Preferences → Settings
    2. Search “wrapline”
    3. Under “HTML > Format: Wrap Line Length” set the value to 0.

    Now with this option off and using word wrap, the result should look something like this:

![static image of word wrap vs code](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/html-indentation-part2-image-2.png)

Do you see the difference? While the decision is just preference, using word wrap is the more popular option because it uses fewer lines of code.

Whatever you decide, be consistent within the html file and your project.	


## Whitespace

The term `whitespace` comes from print. The parts of the white paper that were unprinted were called `whitespace`.

In coding, `whitespace` refers to empty lines that have no code. Such as:

```
<h1>Header</h1> 




<p>Here's the text.</p>
```

There is `whitespace` between the two elements. Often `whitespace` is just called “spacing” or referred to as “added spaces.”


HTML ignores `whitespace` when rendered in the web browser. You can copy paste the code above and there will be no `whitespace` between the h1 and p elements.


When writing HTML code, including `whitespace` is up to you. Oftentimes people like to include a line of `whitespace` to separate large chunks of related code. 


Whatever you decide, be consistent within the html file and your project. However, limit yourself to only one or two lines of `whitespace` when deciding to visually separate lines of code. Having more than two lines of whitespace in a given location is excessive and likely will be seen as unconventional.


## Comments and Commented Out Code

You can create a **comment** in an html file by highlighting code and using the shortcut `Ctrl + /`.  Try it yourself in VS Code. The commented out code will be wrapped in this syntax `<!--   -->`. Code that is commented out will not be run. In our case right now, commented out HTML code will not appear in the web browser.

People use **comments** for many reasons including:

1. Temporarily removing chunks of code to design or troubleshoot.
2. Leaving a note next to code for something that might not be self-explanatory and seen as an unusual course of action. This is helpful when working on a team with others.
3. As an approach for note taking for learning.  
We highly encourage the last one while you progress through LearnHowToProgram.com. 

>Note!
>We'll provide more tips for managing comments for note taking in later lessons after we learn more about project organizational tools. For now, all we recommend is don't yet your notes become so lengthy it is hard to read your code.
