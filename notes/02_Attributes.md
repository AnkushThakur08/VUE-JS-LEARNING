# Attributes in VUE JS

### `V-bind` Directive
- It is used to bind the html Attribute
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

- We can also bind the classes and inline style as well
- Best part we can bind it with array and object

```javascript
  const dangerStyledObject = {
  color: 'red',
  border: '1px solid red',
  fontSize: '50px'
}


<template>
  <h1 :style="[dangerStyledObject]">Ankush</h1>
</template>
```