---
layout: post
title: JavaScript - 함수 내에서의 this
tags: JavaScript object 객체 this
description: >
  JavaScript - 함수 내에서의 this
accent_image:
  background: url('/assets/img/blog/javascript_bg.jpg') center/cover
  overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
  - 탐구생활
---

> ❗️해당 내용은 2018년 4월 18일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

일반적으로 함수 내에서의 this는 함수를 호출한 객체입니다.<br>
객체에서 this가 나오면 함수를 호출한 객체의 영향을 받습니다.<br>

```javascript
"use strict";

var m1 = { name: "홍길동" };
var m2 = { name: "고길동" };

function msg() {
  console.log(this.name); // 이 함수가 호출한 객체에 따라 this는 다양해질 수 있다. m1, m2....
}

m1.msg = msg; // m1에 msg 프로퍼티에 msg() 를 실행한 값을 참조하도록 한다.
m2.msg = msg;

m1.msg();
m2.msg();
// msg();  // TypeError: Cannot read property 'name' of undefined. 객체가 없어 값을 불러올 수 없다.
```

결과 :<br>
홍길동<br>
고길동<br>

---

객체는 연관성 있는 데이터를 묶어서 관리하고 싶을 때나<br>
데이터와 기능을 묶어서 관리할 때 사용합니다.<br>

```javascript
var member = {
  id: "hong",
  name: "홍길동",
  setId: function (id) {
    this.id = id;
  },
  getId: function () {
    return this.id;
  },
};

console.log(member.id, member.getId()); // hong hong

//아이디 변경
member.setId("kang");
console.log(member.id, member.getId()); // kang kang
```

결과 :<br>
hong hong<br>
kang kang<br>

---

여러 개의 동일한 형태의 데이터를 관리할 때 함수를 활용합니다.<br>

```javascript
function createMember(name, age, gender, addr) {
  //프로퍼티는 변수명을 참조하지 않음. 값을 참조한다.
  return { name: name, age: age, gender: gender, addr: addr };
}
console.log("--------------------------------------------------------");

var m1 = createMember("조조", 33, "남", "성남");
var m2 = createMember("유비", 44, "여", "현덕");
var m3 = createMember("장비", 22, "남", "장수");
var m4 = createMember("관우", 11, "남", "관소");

console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
```

결과 :<br>
{ name: '조조', age: 33, gender: '남', addr: '성남' }<br>
{ name: '유비', age: 44, gender: '여', addr: '현덕' }<br>
{ name: '장비', age: 22, gender: '남', addr: '장수' }<br>
{ name: '관우', age: 11, gender: '남', addr: '관소' }<br>
