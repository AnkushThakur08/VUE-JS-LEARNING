# VUEJS


## Video 1: Summary
- It is Popular JS Framework like Angular JS
- For State Management we use `Vuex npm`
- For routing We use `Vue Router`
- For Stying we use `Vuetify`


## Video 2: Summary
- There are 4 ways to Add `VUEJS` into your project

1. Using CDN Link
    - `<script src="https://unpkg.com/vue@next"></script>`
2. Using Npm install
    - `npm install vue@next`
3. Using Vue CLI
    - `npm install -g @vue/cli`
    - `vue create <project name>`
4. Using VITE - MOST RECOMMENDED
    - `npm init vite-app <project Name>`
    - `npm create vite@latest`


## Video 3-4: Summary

- Vue uses `.vue file`
- `.vue File` consists of 3 things
    - `<template> </template>`
        - used to render HTML
    - `<script> </script>`
        - used for Functionality
    - `<style> </style>`
        - used for CSS
- He will learn `Template Syntax`


## Video 5 - Text Binding
- We can bind the text in **VueJS** by 2 different ways
1. Text Interpolation
2. Using Directive


### Text Interpolation
  - Text interpolation using mustache syntax `{{}}`
  - Recommened way using `{{}}`

  ```js
  <template>
    {{ userName }} {{ address }}
  </template>
  ```

 ### using Directive
  - `v-text`
  - Not Recommened as it replaces innner HTML

  ```js
  <template>
    <h1 v-text="channel"></h1>
    <!-- this must be kept empty -->

    <h1 v-text="channel">Thakur</h1>
    <!-- It will through error, as Thakur will be overided by Ankush -->
  </template>

  <script>
  const channel = "Ankush";
  </script>
  ```

### `V-html`
- To render HTML inisde a div, we use `v-html`
