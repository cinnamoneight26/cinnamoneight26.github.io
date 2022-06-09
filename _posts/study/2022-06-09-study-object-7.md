---
layout: post
title: JavaScript - 객체의 프로퍼티명 단축
tags: JavaScript object 객체
description: >
    JavaScript - 객체의 프로퍼티명 단축
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

ES6에 추가된 기능이며 객체의 프로퍼티를 단축해서 사용할 수 있습니다.<br>

```javascript
var id = "hong",
    name = "홍길동",
    age = 33;

var member1 = {
    id: id, // 프로퍼티 : 변수
    name: name,
    age: age,
    info: function () {
        console.log();
    },
};
console.log(member1);

// 변수에 입력된 값을 객체에 설정할 때 변수의 이름을 프로퍼티명으로 설정하는 상황
var member2 = {
    id,
    name,
    age,
    info: function () {
        console.log("info");
    },
};
console.log(member2);

var member3 = {
    id,
    name,
    age,
    //info : function() { console.log("info")}
    info() {
        console.log("info");
    },
};
console.log(member3);
```

결과 :<br>
{ id: 'hong', name: '홍길동', age: 33, info: [Function: info] }<br>
{ id: 'hong', name: '홍길동', age: 33, info: [Function: info] }<br>
{ id: 'hong', name: '홍길동', age: 33, info: [Function: info] }<br><br>

member1은 일반적인 상황,<br>
member2는 동일한 이름의 프로퍼티와 값을 하나로 줄여주었고<br>
member3은 함수 부분을 단축시켜 주었습니다.<br><br>

info : function() {console.log("info")} -> info () {console.log("info")}<br>
