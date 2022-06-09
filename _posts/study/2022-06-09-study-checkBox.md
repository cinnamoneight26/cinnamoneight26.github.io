---
layout: post
title: JavaScript - checkBox
tags: JavaScript element form checkBox
description: >
    JavaScript - checkBox
accent_image:
    background: url('/assets/img/blog/javascript_bg.jpg') center/cover
    overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
    - study
---

> ❗️해당 내용은 2018년 4월 21일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

### checkBox

체크박스 체크 상태 확인 : 체크박스 엘리먼트.checked(true : 체크, false : 해제)<br><br>

체크 상태 설정하기

-   체크박스 엘리먼트.checked = true(체크)
-   체크박스 엘리먼트.checked = false (체크 해제)
    <br> <br>

게시판 등에서 제일 위에 위치한 체크 박스를 선택하면<br>
하위 체크들이 선택되는 작업을 할 때 사용합니다.<br>

```html
<h2>체크박스 테스트</h2>
<form name="mForm" action="a.html">
    <div>
        <input
            type="checkbox"
            id="all"
            name="all"
            value="all"
            onclick="doAction();"
        />
        <!-- 체크 될 때 마다 온클릭이 바뀜-->
        <label for="all">전체</label>
    </div>
    <div>
        오늘 점심 메뉴는?<br />
        <input type="checkbox" id="menu1" name="menu" value="1" />
        <label for="menu1">돌솥비빔밥</label>
        <input type="checkbox" id="menu2" name="menu" value="2" />
        <label for="menu2">전주비빔밥</label>
        <input type="checkbox" id="menu3" name="menu" value="3" />
        <label for="menu3">차돌박이 된장찌개</label>
    </div>
</form>
```

---

```javascript
function doAction() {
    // 아이디가 all인 체크박스의 상태에 따라서 name이 menu인 체크박스의 상태를 변경한다.

    var f = document.mForm;

    // alert(f.all.checked);   // 얼럿창을 통해 true, false 상태 확인하기
    var ckMenu = f.menu; // 동적이라 바뀜. 여러개면 배열형태. 하나면 엘리먼트로. 갯수에 따라 코딩이 달라짐.넘겨받은 개수를 먼저 체크해야 함.

    //  객체가 배열 형태인지 확인
    if (ckMenu.length) {
        // 여러개일 때
        for (var i = 0; i < ckMenu.length; i++) {
            ckMenu[i].checked = f.all.checked;
        }
    } else {
        // 한개일 때
        ckMenu.checked = f.all.checked;
    }

    //console.log(ckMenu.checked); // 배열 형태에는 checked 가 없어서 undefined
}
```
