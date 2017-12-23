---
title: Common Algorithms Written in Javascript (ES6)
tags:
  - javascript
  - algorithms
---

I was reviewing [Sorting and Search Algorithms](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844) and figured I'd implment them
JS ES6. This will be an open post where I'd regularly update it with more
code snippets. Some of these are random puzzles I picked up from the internet.

![](test-image.png)
## Selection Sort
### A other nest after iommediately

This is the simplest sorting algorithm. It's good to at least know one or
two sorting algorithms. `I am testing this`.

Ad ad eu laborum consectetur. Exercitation cillum commodo fugiat minim occaecat nisi quis qui esse nostrud nulla sunt. Ipsum voluptate sunt [this is a link](https://google.com). Sit aliquip aliqua duis commodo nulla qui elit do laborum commodo quis et nulla. Labore do labore veniam exercitation ex sint ut eiusmod anim labore eu ut.

Voluptate esse consectetur ut reprehenderit minim anim pariatur et ad cillum qui. Laboris magna aute aliqua exercitation sunt quis commodo consequat. Ullamco non consectetur magna dolor anim commodo adipisicing dolor.

- Omg this is unbeleiable
  - Umm... I was a B.. since 1999. 
  - Ditry cougar i come out at night. 
- Please stop calling me I'm such a rock star. 
- Assalam Alaikom where the F is Akbar. 

sfs;dfskml

1. Omg this is unbeleiable
2. Please stop calling me I'm such a rock star. 
3. Assalam Alaikom where the F is Akbar. 

#### A other nest after iommediately

This is the simplest sorting algorithm. It's good to at least know one or
two sorting algorithms. `I am testing this`.

>  Warning:
>  Each child in an array or iterator should have a unique "key" prop. Check the render method of "Game".

Ad ad eu laborum consectetur. Exercitation cillum commodo fugiat minim occaecat nisi quis qui esse nostrud nulla sunt. Ipsum voluptate sunt deserunt dolore id. Sit aliquip aliqua duis commodo nulla qui elit do laborum commodo quis et nulla. Labore do labore veniam exercitation ex sint ut eiusmod anim labore eu ut.

Ullamco non in duis eiusmod reprehenderit est consectetur eu. Deserunt nostrud amet elit occaecat velit proident minim id enim. Pariatur magna incididunt ea elit aliqua do. Esse exercitation sint non enim ad esse eiusmod eiusmod quis cupidatat irure ipsum. Mollit eiusmod cillum pariatur dolor sint irure culpa amet fugiat dolore non ut exercitation.

[[danger]]
| content

[[info]]
| Here goes the content. Content gets parsed,
| so you could use quotes or anything inside of them:

### This is a Sub-Sub Header 

Nulla voluptate velit aliqua aliqua adipisicing culpa. Lorem cupidatat ullamco fugiat aute commodo tempor adipisicing. Ut excepteur ex aliquip officia ad nostrud magna dolor duis sunt fugiat. Consectetur amet mollit ullamco sunt pariatur laboris. Ullamco duis duis ad excepteur cillum laboris irure do ipsum officia esse irure enim cupidatat. Velit aute proident enim veniam ad sint culpa laborum ut eu cupidatat. Adipisicing consequat eu mollit ut est labore occaecat eu ullamco cupidatat.

Non occaecat mollit in nostrud ad cillum eiusmod nulla dolore Lorem consectetur esse fugiat. Incididunt ipsum velit tempor nostrud ullamco quis proident voluptate. Velit occaecat irure pariatur enim. Id minim ipsum culpa reprehenderit quis amet ipsum elit amet Lorem. Est excepteur et sint nostrud laborum et Lorem est adipisicing. Incididunt proident amet do do sit amet anim aliquip deserunt aliquip. Ad enim sit fugiat veniam deserunt laboris officia esse sunt do occaecat pariatur nostrud.

----

Tell me about it i am testing this omg.

```javascript
const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
const selectionSort = (arr) => {
  let min;

  for (let i=0; i<arr.length; i++ ) {
    min = i;
    for (let j = i+1; j<arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, min, i);
    }
  }
}

const arr = [4,1,6,3,8,3,7,2,4];
selectionSort(arr)
console.log(arr); // [ 1, 2, 3, 3, 4, 4, 6, 7, 8 ]
```

## Binary Search

```javascript
class ShoppingList extends React.Component {
  render() {
    console.log('omg')
  }
}
const binarySearch = (arr, value) => {
  let low = 0, high = arr.length-1, mid;

  while (low <= high) {
    mid = parseInt(((high + low) / 2));
    if (value < arr[mid]) {
      high = mid-1;
    } else if (value > arr[mid]) {
      low = mid+1;
    } else {
      return mid;
    }
  }

  return null;
}

const binarySearchRecursive = (arr, value, low, high) => {
  if (low > high) return null;
  const mid = parseInt(((high + low) / 2));
  if (value < arr[mid]) {
    return binarySearchRecursive(arr, value, low, mid-1);
  } else if (value > arr[mid]) {
    return binarySearchRecursive(arr, value, mid+1, high);
  } else {
    return mid;
  }
}

const arr = [1,3,5,7,8,10]
console.log(binarySearch(arr, 1));  // should return 0
console.log(binarySearch(arr, 5));  // should return 2
console.log(binarySearch(arr, 10)); // should return 5
console.log(binarySearch(arr, 11)); // should return null
console.log(binarySearchRecursive(arr, 1, 0, arr.length-1));  // should return 0
console.log(binarySearchRecursive(arr, 5, 0, arr.length-1));  // should return 2
console.log(binarySearchRecursive(arr, 10, 0, arr.length-1)); // should return 5
console.log(binarySearchRecursive(arr, 11, 0, arr.length-1)); // should return null
```

## Merge two sorted arrays into one sorted array

```javascript

console.log('omg omg ');
function merge(arrA, arrB) {
  let i = 0, j = 0;
  const arr = [];

  while( i < arrA.length || j < arrB.length) {
    if (i < arrA.length && arrA[i] <= arrB[j]) {
      arr.push(arrA[i]);
      i += 1;
    } else if (j < arrB.length) {
      arr.push(arrB[j]);
      j += 1;
    }
  }
  return arr;
}

const arrA = [1,3,5,7,8,10];
const arrB = [2,3,6,7,9,11];

console.log(merge(arrA, arrB));  // should be [ 1, 2, 3, 3, 5, 6, 7, 7, 8, 9, 10, 11 ]
```
