---
layout: homework
title: CSCI-UA.0480 -  React Lab
---

<div class="panel panel-default">
  <div class="panel-heading">React Lab</div>
  <div class="panel-body" markdown="block">

# React Lab - MemorEmoji (10 points for In-Class Project/Quiz Grade)

## Submission Process

* work in groups of 2 or 3
* choose one of the applications described below in the Overview &rarr; Description and implement it
* __submit using [this form](https://docs.google.com/forms/d/e/1FAIpQLSde-vCFp3eJ9vFII9534X_FErSum5G8j3r2q4Uide7skzszaQ/viewform)__
* __each person on the team should submit their own individual form__
* once you've submitted:
    * raise your hand to let me know
    * either...
        1. help others with their lab
        2. try the other application!

## Scoring

* __+7 points__ for showing up and submitting form 
* __+2 points__ form submitted with a _reasonable_ amount of _valid looking_ code
* __+1 point__ code deployed on [codepen.io](https://codepen.io)

## Overview

### Goals / Topics Covered

You'll be using the following concepts:

* React
    * props
    * state
    * events
    * nested components
    * conditional rendering
    * form elements (extra credits)


### Description

Create an __MemorEmoji__ same as you created in Homework 6 but only using __React__.

## Instructions

### Setup

You can develop your application with any tools that you like. If you'd like to use what we learned in the lectures, you can choose one of these methods:

1. use `create-react-app`
    * allows quick setup for local development
    * you can use your own text editor!
    * [see the instructions on setting up create-react-app in the slides](../slides/26/react-state-parent.html#/15)
    * [but also, __if you are having path issues, especially on windows__, see this github ticket](https://github.com/facebookincubator/create-react-app/issues/138#issuecomment-334316575)
2. remix a react-babel-webpack boilerplate using [glitch.com](https://glitch.com/~react-babel)
    * add your code to `client/index.js`
    * a cheap way to add styles is to add a `style` tag in `views/index.html` and write your css directly there
    * the boilerplate includes `render` directly rather than `ReactDOM`, so when you call `ReactDOM.render(...)` at the end, just call `render` instead
3. create a new project (pen) in [codepen.io](https://codepen.io)
    * debugging might be difficult
    * ...but your application will already be deployed!
    * to setup, configure babel as your JavaScript pre-processor and add React and ReactDOM Libraries:
        <br>
        ![codepen](../resources/img/codepen.gif)

### Implementation


1. __Game Board__
    * create a game board that allows players to play MemorEmoji game (same rules as in Homework 6)
    * define the number of cards as any even number
    * define the maximum turns allowed
    * define the card values by using emojis or characters
    * see the example interaction below:
        1. Number of Cards = 4, Max Turns = 4, card values = '😁,😁,😂,😂'
        ![bin](../resources/img/react-lab-no_win.gif)
        1. Number of Cards = 4, Max Turns = 4, card values = '😁,😁,😂,😂'
        ![bin](../resources/img/react-lab-win.gif)
2. __Using Form to Set Dimensions (Extra Credit)__
    * instead of hard-coding the dimensions, create a form for players to set number of cards, maximum turns, and the card values and order
    * set each card value by entering a string seperating each card value by commas
    * the game board implemented above should reflect the dimensions submitted through the form
    * see the example interaction below:
        ![bin](../resources/img/react-lab-form.gif)

### Deployment

To deploy your app on glitch.com... (only valid if you developed locally, otherwise, your code is already there!)

1. use the [react-babel-webpack boilerplate on glitch.com](https://glitch.com/~react-babel)
2. add your code to `client/index.js`
    * only add your components and your call to render
    * no need to bring in imports (it's already done at the top of `index.js`)
    * replace your call to `ReactDOM.render(...)` with just `render` 
3. add styles easily by adding a `style` tag in `views/index.html` and writing your css directly there

To deploy your app in codepen.io... (only valid if you developed locally, otherwise, your code is _already there_)

1. configure babel, React and React DOM as shown in the gif above (see Instructions &rarr; setup)
2. copy all of your __components__ over to the js panel (don't include any of the import statements)
3. you may have to change `extends` so that it's `extends React.Component` for each component
4. use ```ReactDom.render``` at the very end to render your main/root component:
    ```ReactDOM.render(<App />, document.body);```

