# Linked List

A small, dependency-free JavaScript implementation of a singly linked list. Each node stores a value and a reference to the next node.

## Requirements

The source files use JavaScript ES modules (`import`/`export`). Use a Node.js version or project configuration that treats `.js` files as ES modules. For Node.js versions that require an explicit project setting, add `"type": "module"` to a `package.json` in the project directory.

## Run the example

Run the sample program with:

```sh
node main.js
```

The example appends several animal names and prints the list:

```text
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

## Use the list

Import `LinkedList` and create an instance:

```js
import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.prepend("cat");
list.insertAt(1, "parrot", "hamster");

console.log(list.toString());
// ( cat ) -> ( parrot ) -> ( hamster ) -> ( dog ) -> null
```

## API

| Method | Description |
| --- | --- |
| `append(value)` | Add a value to the end of the list. |
| `prepend(value)` | Add a value to the beginning of the list. |
| `size()` | Return the number of nodes. |
| `head()` | Return the first value, or `undefined` if the list is empty. |
| `tail()` | Return the last value, or `undefined` if the list is empty. |
| `at(index)` | Return the value at a zero-based index, or `undefined` if the index is negative or out of range. |
| `pop()` | Remove and return the first value (the head), or return `undefined` if the list is empty. |
| `contains(value)` | Return whether the list contains a value, using strict equality. |
| `findIndex(value)` | Return the zero-based index of the first matching value, or `-1` if not found. |
| `toString()` | Return the list as `( value ) -> ... -> null`; an empty list returns an empty string. |
| `insertAt(index, ...values)` | Insert one or more values at a zero-based index. Inserting no values does nothing. |
| `removeAt(index)` | Remove the node at a zero-based index. |

`insertAt` accepts indexes from `0` through the current list size. `removeAt` requires an index from `0` through the last list index. Both throw a `RangeError` for an invalid index.
