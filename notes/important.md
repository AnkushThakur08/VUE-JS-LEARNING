# Vue 3 `watch()` with LocalStorage – Explained

This document explains the following Vue 3 code in detail:

```ts
watch(
  todoList,
  (newTodos) => {
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  },
  { deep: true }
);
```



- `watch()` observes reactive data
- 👉 and runs a function whenever that data changes

> “Hey Vue, keep an eye on this thing, and whenever it changes, do this.”

> "Whenever this data changes, execute this logic."



## How it works
1. Watching the source
```ts
watch(todoList, ...)
```

- `todoList` is a `ref<ITodo[]>`
- Vue internally watches `todoList.value`
- Any change triggers the watcher
- Eg: Adding a todo, Deleting a todo, Updating any todo property


2. Watch callback
```ts
(newTodos) => {
  localStorage.setItem("Todos", JSON.stringify(newTodos));
}
```

- `newTodos` is the latest value of `todoList.value`

- It is the entire updated array, not just the changed item

- This ensures LocalStorage always stays in sync


3. { deep: true } (Very Important)
```ts
{ deep: true }
```
- By default, Vue only watches reference changes.

- `deep: true` tells Vue to also watch:

- Nested objects, Array elements, Object properties

With deep: true

✅ Watcher runs
✅ LocalStorage updates automatically

### Behavior Comparison

| Change Type            | deep: false | deep: true |
| ---------------------- | ----------- | ---------- |
| `push()` new todo      | ✅           | ✅          |
| `splice()` delete todo | ✅           | ✅          |
| Update object property | ❌           | ✅          |



# Computed does not take arguments


✅ Correct Mental Model (lock this in)
🔹 ref → stores state
🔹 computed → derives state
🔹 emit → updates state
🔹 template → consumes derived state