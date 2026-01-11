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