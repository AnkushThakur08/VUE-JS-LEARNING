## Text Binding in Vue JS

- We can bind the text in **VueJS** using mutiple ways

  - Text interpolation using mustache syntax `{{}}`
  - Recommened way using `{{}}`

  ```js
  <template>
    {{ userName }} {{ address }}
  </template>
  ```

  - using Directive `v-text`
  - Not Recommened as it replaces innner HTML

  ```js
  <template>
    <h1 v-text="channel"></h1
    <!-- this must be kept empty -->

    <h1 v-text="channel">Thakur</h1>
    <!-- It will through error, as Thakur will be overided by Ankush -->
  </template>

  <script>
  const channel = "Ankush";
  </script>
  ```

## HTML Binding

- Using `v-html`
- Render Text with HTML

- ```js
  <template>
  <div v-html='userInfo'></div>

  </template>

  <script>
  const  userInfo= `<b> This is User Info </b>`

  </script>
  ```


## Dyamic Binding of HTML Attributes

- Using `v-bind:attribute`
- It is used to dynamically bind the html Attribute
- eg: Id and disabled dyamically bind with the HTML

```js
<script setup lang="js">
const isDisabled = true;
const id = "heading"
</script>

<template>
  <div>
    <button v-bind:disabled="isDisabled">Click me</button>
    <div v-bind:id="id">This is Ankush Paragraph</div>
  </div>
</template>

```

- **IMPORTANT** we can directly use the attributes like this
- `:id :disabled :class`, not need to write `v-bind`

```js
<script setup lang="js">
const isDisabled = false;
const id = "heading"
const id2 = "heading2"
</script>

<template>
  <div>
    <button :disabled="isDisabled">Click me</button>
    <div :id="id">This is Ankush Paragraph</div>

    <div :id="isDisabled ? id : id2">
      Dynamic Color change based on disabled
    </div>
  </div>
</template>


<style>
  #heading{
    color: red;
  }

  #heading2{
    color: green;
  }
</style>

```