---
layout: post
title: JavaScript - select와 option
tags: JavaScript element form select option
description: >
  JavaScript - select와 option
accent_image:
  background: url('/assets/img/blog/javascript_bg.jpg') center/cover
  overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
  - 탐구생활
---

> ❗️해당 내용은 2018년 4월 21일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

### select 객체 이해하기

select객체.selectedIndex : 선택된 option 항목의 인덱스 위치<br>
select객체.option : option 항목의 배열<br><br>

검색을 할 때 select를 선택하지 않고 검색을 시도하면<br>
'검색 항목을 선택하세요' 얼럿창을 띄워봅시다.<br>

```html
<h2>select 활용하기 - 1</h2>
<form action="a.html" name="mForm">
  <select name="sType">
    <option value="">선택하세요</option>
    <option value="writer">작성자</option>
    <option value="title">제목</option>
  </select>
  <input type="text" name="sWord" />
  <button type="button" onclick="doAction();">검색</button>
</form>
```

---

```javascript
function doAction() {
  var f = document.mForm;

  var selEle = document.mForm.sType;
  //console.log(selEle); // 객체 확인하기. selectBox
  //console.log("선택된 인덱스 : " + selEle.selectedIndex);

  // 검색어 입력창에 입력된 값이 있고 검색타입에 '선택하세요'가 선택되어있는 경우 경고창에 "검색항목을 선택하세요"를 띄운다.
  if (f.sWord.value != "" && selEle.selectedIndex == 0) {
    alert("검색항목을 선택하세요");
    return;
  }
}
```

---

### option 동적추가/삭제, Disabled

```html
<form action="a.html" name="mForm">
  <button type="button" onclick="doAdd();">추가</button>
  <button type="button" onclick="doDel();">삭제</button>
  <button type="button" onclick="changeDisabled(true);">비활성화</button>
  <button type="button" onclick="changeDisabled(false);">활성화</button>
  <div>
    <select name="sel">
      <option value="">선택하세요</option>
    </select>
  </div>
</form>
```

### option을 추가하는 방법 세 가지 방법

1. DOM API 사용
2. javascript 내장 객체 사용
3. innerHTML 사용

---

doAdd() 를 통해 적용해보자.<br><br>

```javascript
var sel = document.mForm.sel;
var f = document.mForm;
var selEle = document.mForm.sel;

function doAdd() {
  //  ************** 1. DOM API 활용
  var opt = document.createElement("option"); // option 태그 만들기

  //속성추가
  opt.value = 0; // <option value="0"></option>

  var text = document.createTextNode("aaa");
  opt.appendChild(text); // <option value="0">aaa</option>
  selEle.appendChild(opt);

  //   ************** 2. javascript 내장 객체 활용
  console.log(selEle.options.length); // 옵션 개수 확인하기.
  selEle.options[selEle.options.length] = new Option("텍스트", "100"); // options : 옵션 생성.매개변수 앞에는 텍스트 뒤엔 value

  //   ************** 3. innerHTML 활용
  selEle.innerHTML += "<option value='100'>텍스트</option>";
}
```
