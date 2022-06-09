---
layout: post
title: JavaScript - 객체와 생성자
tags: JavaScript object 객체 생성자
description: >
    JavaScript - 객체와 생성자
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

자바스크립트에서 생성자는 일반 함수와 동일하게 선언합니다.<br>
일반 함수 자체가 생성자가 될 수 있습니다.<br>
생성자는 함수 이름의 첫 글자를 대문자로 시작하는 것을 권장합니다.(Number, Date, Object)<br>
일반 함수가 아닌 생성자로 사용하기 위해서는 'new'와 함께 사용해야 합니다.<br>
new와 함께 사용하는 함수(생성자)는 this의 해석이 달라집니다.<br>

```javascript
function Member() {
    console.log(this); // undefined. 객체가 없음
}

var m1 = Member();
console.log("m1 : ", m1); // undefined. Member 함수에 return이 없기 때문.

var m2 = new Member(); // this의 의미가 생긴다. this는 생성된 객체 자신을 나타낸다.
console.log("m2 : ", m2); // new 와 함께 사용하면 객체를 내부적으로 생성하여 참조함.
```

결과 :<br>
undefined<br>
m1 : undefined<br>
Member {}<br>
m2 : Member {}<br>
