---
layout: post
title: JavaScript - 객체와 프로토타입(prototype)
tags: JavaScript object 객체 prototype
description: >
    JavaScript - 객체와 프로토타입(prototype)
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

### 프로토타입(prototype)

객체들이 공유할 수 있는 공간이며 프로토타입 공간에서 참조하여 사용합니다.<br>
프로토타입은 객체입니다.<br>
모든 객체는 프로토타입을 가지고 있습니다.<br>
부모 객체의 프로토타입이 별도로 할당되어 있습니다.<br>
이를 객체의 프로토타입 공간이라고 부릅니다.<br>
자식 객체들은 부모의 프로토타입 공간을 접근할 수 있습니다.<br>
부모의 프로토타입 공간에 접근하기 위해 변수를 할당 받습니다.<br>

### 프로토타입 체인

`constructor`: 자기가 누구인지 멤버 객체 자체를 표시<br>
`__proto__`: 부모의 프로토타입 공간을 표시<br>

![크롬 개발자도구에서 객체 보기](/assets/img/blog/study/20220609-study-object-1.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

```javascript
function Member(id, name, email) {
    // function Member(id, name, email) 하나의 객체
    this.id = id;
    this.name = name;
    this.email = email;
    /*

    //각 객체에 할당되는 부분을 부모의 prototype 공간에 설정 (메모리를 효율적으로 사용하기 위해서)
    this.info = function(){                                         
        console.log(this.id, this.name, this.email);
    }
    */
}
Member.prototype.info = function () {
    console.log(this.id, this.name, this.email);
};
// new Member 매개변수를 주던 안 주던 새로운 객체가 생성됨. 해당 객체의 부모는 function Member()
var m1 = new Member("hong", "홍길동", "hong@a.com");
var m2 = new Member("kang", "강감찬", "kang@a.com");
console.log("m1 : ", m1);
console.dir(m1);
```
