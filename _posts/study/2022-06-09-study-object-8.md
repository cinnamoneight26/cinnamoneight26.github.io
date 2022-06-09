---
layout: post
title: JavaScript - 객체와 디스트럭처링(Destructuring)

tags: JavaScript object destructuring
description: >
    JavaScript - 객체와 디스트럭처링(Destructuring)
accent_image:
    background: url('/assets/img/blog/javascript_bg.jpg') center/cover
    overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
    - study
---

> ❗️해당 내용은 2018년 4월 18일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

객채(배열, 객체)에 입력된 값을 개별적인 변수에 할당하는 간편한 방식을 제공합니다.<br>
배열이나 객체에서 필요한 값을 추출해서 변수에 할당하거나 반환할 때 유용하게 사용합니다.<br>

---

일반적인 방법<br>

```javascript
var arr1 = [1, 2, 3];

var a = arr1[0];
var b = arr1[1];
var c = arr1[2];

console.log(a, b, c);
```

결과 :<br>
1 2 3<br>

---

[]를 사용하는 방법<br>

```javascript
var arr2 = [10, 20, 30];
[a, b, c] = arr2; // []를 쓰면 arr 배열의 요소를 순서대로 찍어줌
console.log(a, b, c);
console.log(b, a, c);
```

결과 :<br>
10 20 30<br>
20 10 30<br>

---

[]를 사용할 때 길이가 다른 경우<br>

```javascript
var arr2 = [10, 20, 30];

[a, b, c] = [1, 2]; // 1,2,undefined
console.log(a, b, c);

[a, b] = arr2;
console.log(a, b); // 10, 20
```

결과 :<br>
1 2 undefined<br>
10 20<br>

---

[] 사용 시 기존 값을 유지하고 싶다면?<br>

```javascript
[a, , c] = [100, 200, 300];
console.log(a, b, c);
```

결과 :<br>
100 20 300<br>

---

값이 없을 경우에는?<br>

```javascript
[a, b = 0, c = 0] = [1000, 2000];
console.log(a, b, c); //1000 2000 0
```

결과 :<br>
1000 2000 0<br>
