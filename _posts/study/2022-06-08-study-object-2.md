---
layout: post
title: JavaScript - 객체 프로퍼티 삭제
tags: JavaScript object 객체
description: >
  JavaScript - 객체 프로퍼티 삭제
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

객체의 프로퍼티를 삭제할 때는 delete를 사용합니다.<br>

```javascript
var member = { id: "hong", email: "hong@a.co" }; // name에는 ""를 안 써도 됨. 특수문자가 있을 경우에는 꼭 써야 함

// 동적 추가
member.name = "홍길동"; // 추가

member.id = "kang"; // 기존에 이름이 동일한 프로퍼티가 있다면 값을 변경한다.

console.log(member);

// member의 name 프로퍼티 삭제
delete member.name;

console.log(member);

// member 객체 삭제하기
delete member;
console.log(member); // 삭제가 되지 않음. 프로퍼티만 삭제가 가능하며 객체 자체는 delete로 삭제가 불가능하다.
```
