---
layout: post
title: JavaScript - filter
tags: JavaScript filter
description: >
  JavaScript - filter
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

filter 기능은 ES5부터 추가되었습니다.<br>
배열에서 원하는 값만 받고자 할 때 사용합니다.<br>
일반적으로 filter 없이 배열에서 원하는 값을 얻을 때는 아래와 같이 사용합니다.<br>

맨 아래 예제가 필터를 사용한 것입니다.<br>

```javascript
var data = [3, 9, 27, 81, 43];

// 30보다 큰 수만 배열에 담기
var rList = [];
for (var i = 0; i < data.length; i++) {
  if (data[i] > 30) {
    rList.push(data[i]);
  }
}
console.log(rList);

// 10보다 작은 숫자들을 배열에 담는다.
var oList = [];
for (let i = 0; i < data.length; i++) {
  if (data[i] < 10) {
    oList.push(data[i]);
  }
}
console.log(oList);

// 배열에서 조건에 맞는  데이터를 새로운 배열에 담아서 리턴한다.
function arrFilter(data, cb) {
  var rList = [];
  for (var i = 0; i < data.length; i++) {
    if (cb(data[i])) {
      // 조건이 참일 때 push
      rList.push(data[i]);
    }
  }
  return rList;
}
// ********** 이 부분이 필터 사용

console.log(
  arrFilter([8, 11, 90, 53, 22], function (val) {
    return val < 10;
  })
);
```

[8, 11, 90, 53, 22] 들의 조건을 function (val) {return val < 10} 이 조율하게 됩니다.<br>

필터를 사용할 때는 아래와 같이 사용합니다.<br>

```javascript
var result = [1, 2, 3, 4, 5].filter(function (val) {
  return val > 2;
});
console.log(result);
```

결과 :<br>
[ 3, 4, 5 ]<br>
