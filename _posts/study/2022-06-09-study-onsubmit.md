---
layout: post
title: JavaScript - onsubmit
tags: JavaScript element form onsubmit
description: >
    JavaScript - onsubmit
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

### onsubmit="return false"

서브밋 되는 시점에 발생하는 이벤트를 확인합니다.<br>
올바른 데이터는 서브로 보내고 그렇지 않다면 재 요청을 합니다.<br>
(서버로 전송 or 취소)<br>
onsubmit 속성에 return false일 경우엔 서버에 데이터를 전송하지 않습니다.<br><br>

### false를 설정해야 하는 경우

1. 사용자의 입력값들이 잘못된 경우<br>
2. 입력값이 없는 경우 (패스 항목의 값들이 서로 다른 경우)<br><br>

주로 회원가입 form에서 사용헙니다.<br><br>

```html
<form name="mForm" action="a.html" onsubmit="return doAction();">
    id : <input type="text" name="id" /><br />
    pass : <input type="password" name="pass" /><br />
    pass 확인 : <input type="password" name="pass2" /><br />
    <button>확인</button>
    <!-- 자동 submit-->
    <button type="button" onclick="doAction2();">확인2</button>
    <!-- type="button"이면 클릭 시 submit을 직접 한다.-->
</form>
```

---

```javascript
function doAction() {
    // 입력값이 잘못된 경우 false를 리턴
    // document.querySelector("input[name='id']"); 한개만 접근할 때

    var f = document.mForm; // 자주 쓰는 경로를 변수로 묶어  준다.

    // ID 체크
    if (f.id.value == "") {
        // id의 value값이 없다면.
        alert("ID를 입력하세요.");

        // 사용자 편의성을 위해 ID엘리먼트에 포커스를 설정.
        f.id.focus();
        return false;
    }
    // pass 입력 체크
    if (f.pass.value == "") {
        alert("PASSWORD를 입력하세요.");

        f.pass.focus();
        return false;
    }
    // pass check 입력 체크
    if (f.pass2.value == "") {
        alert("비밀번호 확인을 입력하세요.");

        f.pass2.focus();
        return false;
    }

    // 패스워드와 패스워드 확인의 값이 다른 경우
    if (f.pass.value != f.pass2.value) {
        alert("입력한 패스워드와 패스워드 확인의 정보가 다릅니다.");

        f.pass2.value = ""; //f.pass2의 값을 지운다.
        f.pass.focus(); //f.pass 포커스를 준다.
        f.pass.select(); //f.pass의 값들이 선택된 상태로 만든다.

        return false;
    }
    return true;
}
```

위 코드에서 반복되는 부분은 모듈화하면 아래와 같습니다.<br><br>

```javascript
function isEmpty(obj, msg) {
    // obj가 문자열이라면 (지정한 id 값이라면) 해당하는 엘리먼트 찾기
    if (typeof obj == "string") {
        obj = document.querySelector("#" + obj);
    }
    // obj가 name이라면.
    if (obj.value == "") {
        alert(msg);
        obj.focus();

        return true; // 값이 비어있다면 true
    }
    return false; // 비어있지 않다면 false
}
function doAction() {
    // 입력값이 잘못된 경우 false를 리턴
    // document.querySelector("input[name='id']"); 한개만 접근할 때

    var f = document.mForm; // 자주 쓰는 경로를 변수로 묶어준다.

    if (isEmpty(f.id, "ID를 입력하세요.")) return false;
    if (isEmpty(f.pass, "PASSWORD를 입력하세요.")) return false;
    if (isEmpty(f.pass2, "비밀번호 확인을 입력하세요.")) return false;

    if (isEmpty("id", "ID를 입력하세요.")) return false;
    if (isEmpty("f.pass", "PASSWORD를 입력하세요.")) return false;
    if (isEmpty("f.pass2", "비밀번호 확인을 입력하세요.")) return false;

    // 패스워드와 패스워드 확인의 값이 다른 경우
    if (f.pass.value != f.pass2.value) {
        alert("입력한 패스워드와 패스워드 확인의 정보가 다릅니다.");

        f.pass2.value = ""; //f.pass2의 값을 지운다.
        f.pass.focus(); //f.pass 포커스를 준다.
        f.pass.select(); //f.pass의 값들이 선택된 상태로 만든다.

        return false;
    }
    return true;
}
```

html 코드에서 doAction2() 의 경우 button의 type을 button으로 설정했기 때문에<br>
submit을 직접 진행해야 합니다.<br>

```javascript
function doAction2() {
    alert("확인2 눌렀음");
    var f = document.mForm;

    if (isEmpty(f.id, "ID를 입력하세요.")) return;

    //모든 입력값이 올바른 경우 폼의 데이터를 서버로 전송한다. submit을 직접해줘야 함.

    // form객체에 있는 액션값을 직접 변경할 수 있다. ( a.html -> bbb.html)
    // 기본 설정된 페이지가 아닌 다른 페이지로 변경할 때
    f.action = "bbb.html";

    // 폼을 서브밋하자
    f.submit();
}
```
