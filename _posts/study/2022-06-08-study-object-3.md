---
layout: post
title: JavaScript - 객체를 변수에 저장하기
tags: JavaScript object 객체
description: >
    JavaScript - 객체를 변수에 저장하기
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

객체를 변수에 저장하게 되면 변수에는 객체의 주소가 저장됩니다.<br>

```javascript
"use strict";
//member1 에는 주소가 담겨져 있다.

var member1 = { id: "hong", email: "hong@a.com" }; // 값에서 ""가 빠지게 되면 hong 변수가 가지고 있는 값을 넣겠다는 의미가 됨. 꼭 "" 붙여주자
var member2 = member1; // member2는 member1의 주소를 보고 있다.

member2.id = "kang";

console.log(member1);
console.log(member2);

// 객체일 때 내용을 확인
// for ~ in : 객체의 키를 반환
for (let key in member1) {
    console.log("key : ", key, ", value : ", member1[key]);
}
```

결과 :<br>
{ id: 'kang', email: 'hong@a.com' }<br>
{ id: 'kang', email: 'hong@a.com' }<br>
key : id , value : kang<br>
key : email , value : hong@a.com<br>

---

객체에는 다양한 타입의 값을 저장할 수 있습니다.<br>

```javascript
var obj = {
    name: "홍",
    age: 35,
    addr: ["서울시", "강호구", 110],
    work: function () {
        return "백수";
    },
};
console.log(obj.work());
```

결과 :<br>
백수
<br>
