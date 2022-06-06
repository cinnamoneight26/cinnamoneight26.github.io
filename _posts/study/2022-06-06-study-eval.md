---
layout: post
title: JavaScript - eval
tags: JavaScript eval
description: >
    JavaScript - eval
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

eval은 자바스크립트 엔진이 해석할 수 있는 문자열입니다.<br>
현재는 권장하지 않는 함수입니다.<br>
use strict와 함께 사용하면 오류가 발생합니다.<br><br>

ES5에서 추가된 JSON.parse가 동일한 기능을 합니다.<br>

```javascript
var data = "var i = 10; var j = 20; var sum = i + j; ";
var data2 =
    '{"result": 10, "items": [{"title": "a"}, {"title": "b"}, {"title": "c"}]}';
eval(data); // data 문자열의 내용을 실행해서 메모리에 올려준다.

// JSON 형태의 문자열일 경우에는 JSON.parse(JSON문자열) - ES5
var naver = eval("(" + data2 + ")");
var naver = JSON.parse(data2);
console.log(naver.result);
console.log(i); //  i is not defined
console.log(j);
console.log(sum);
```

결과 :<br>
10<br>
10<br>
20<br>
30<br>
