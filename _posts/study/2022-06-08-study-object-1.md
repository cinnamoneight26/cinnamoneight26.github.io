---
layout: post
title: JavaScript - 객체 생성과 값 꺼내기
tags: JavaScript object 객체
description: >
    JavaScript - 객체 생성과 값 꺼내기
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

객체는 문자열로 이름을 붙인 값들의 집합입니다.<br>

비어있는 객체 생성하기<br>

```javascript
var member = {}; // 비어있는 객체
var member = new Object();
```

---

동적으로 프로퍼티를 저장할 수 있는 두 가지 방법이 있습니다.<br>

1. 객체.프로퍼티명 = 값<br>
2. 객체["프로퍼티명"] = 값<br>

```javascript
member.id = "hong"; // member 변수에 id 프로퍼티에 hong 추가
member["email"] = "hong.a.com";
```

결과 : <br>
{ id: 'hong', email: 'hong.a.com' }<br><br>

위에서 id, email을 프로퍼티라고 합니다.<br>

---

프로퍼티 값 꺼내보기<br>

```javascript
console.log(member.id); // 연결연산자로 꺼내기
console.log(member["email"]); // [] 로 꺼내기
console.log(member.name); // 결과 : undefined -> 객체에 제공되지 않는 프로퍼티를 꺼내려고 하면 오류가 아닌 undefined
```

결과 : <br>
hong<br>
hong.a.com<br>
undefined<br>

---

만약 프로퍼티에 공백이나 .,- 등의 특수문자가 있다면??<br>

```javascript
//member.home-page = "hong.com";    // 오류 발생
member["home-page"] = "hong.com"; // [] 안에도 꼭 "" 로 묶어 주어야 함.
console.log(member);
```

결과 : <br>
{ id: 'hong', email: 'hong.a.com', 'home-page': 'hong.com' }<br><br>

이처럼 특수문자가 있는 프로퍼티에서 값을 꺼낼 경우에는 .방식이 아닌 []방식으로 진행해야 합니다.
