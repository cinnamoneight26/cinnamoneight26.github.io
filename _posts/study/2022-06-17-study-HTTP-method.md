---
layout: post
title: HTTP 메서드
tags: HTTP stateful stateless GET POST PUT PATCH DELETE method
description: >
    인프런 - 모든 개발자를 위한 HTTP 웹 기본 지식 강의 중 섹션 4을 듣고 정리하였습니다.
accent_image:
    background: url('/assets/img/blog/javascript_bg.jpg') center/cover
    overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
    - study
---

---

### HTTP API를 만들어보자

API를 설계할 때 가장 중요한 것은 `리소스 식별`입니다.<br>
예를들어 회원 목록을 조회하고 회원 조회, 등록, 수정, 삭제를 하는 API를 만든다고 가정해 보았을 때<br>
리소스의 의미는 회원을 등록하고 수정, 조회하는 것은 리소스가 아닙니다. 회원 자체가 리소스입니다.<br>
리소스를 식별할 때는 회원을 등록, 수정, 조회하는 것을 모두 배제하고 회원이라는 리소스만 식별할 수 있도록 합니다.<br>
회원이라는 리소스를 URI에 매핑합니다. URI는 리소스만 식별하고 리소스와 해당 리소스를 대상으로 하는 `행위`를 분리합니다.<br>
리소스는 명사, 행위는 동사로 구분하면 가능합니다.<br>
수업에서는 '리소스'리는 단어를 사용하지만 최근 'Representation'으로 변경 되었다고 합니다.<br><br>

주요 HTTP 메서드 종류는 아래와 같습니다.<br>

-   GET: 리소스 조회
-   POST: 요청 데이터 처리, 주로 등록에 사용
-   PUT: 리소스를 대체, 해당 리소스가 없으면 생성(폴더에 파일 생성과 비슷. 폴더 안에 파일이 없으면 생성, 있으면 업데이트)
-   PATCH: 리소스 부분 변경(특정 필드를 바꿀 때 사용)
-   DELETE: 리소스 삭제

<br>

HTTP 기타 메서드는 아래와 같습니다.

-   HEAD: GET과 동일하지만 메시지 부분을 제외하고, 상태 줄과 헤더만 반환(body 빼고 시작 라인, 헤더 라인만 보내기)
-   OPTIONS: 대상 리소스에 대한 통신 가능 옵션(메서드)을 설명(주로 CORS에서 사용)
-   CONNECT: 대상 자원으로 식별되는 서버에 대한 터널을 설정
-   TRACE: 대상 리소스에 대한 경로를 따라 메시지 루프백 테스트를 수행

### HTTP 메서드 - GET, POST

-   GET

        GET /search?q=hello&hl=ko HTTP/1.1
        Host: www.google.com

    -   리소스 조회
    -   서버에 전다랗고 싶은 데이터는 query를 통해서 전달
    -   메시지 바디를 사용해서 데이터를 전달할 수 있지만, 지원하지 않는 곳이 많아서 권장하지 않음

-   POST

        POST /members HTTP/1.1
        Content-Type: application/json

        {
            "username":"hello",
            "age":20
        }

    -   요청 데이터 처리(클라이언트에서 데이터를 보내줄게. 서버야 네가 받아서 처리해줘)
    -   메시지 바디를 통해 서버로 요청 데이터 전달
    -   서버는 요청 데이터를 처리
        -   메시지 바디를 통해 들어온 데이터를 처리하는 모든 기능을 수행한다.
    -   주로 전달된 데이터로 신규 리소스 등록, 프로새스 처리에 사용
    -   POST 스펙: POST 메서드는 '대상 리소스가 리소스의 고유한 의미 체계에 따라 요청에 포함된 표현을 처리하도록 요청'합니다.
        예를들어 POST는 다음과 같은 기능에 사용됩니다.

        -   HTML 양식에 입력된 필드와 같은 데이터 블록을 데이터 처리 프로세스에 제공(예: HTML form에 입력한 정보로 회원가입, 주문 등에서 사용)
        -   서버가 아직 식별하지 않은 새 리소스 생성(예: 게시판 글쓰기, 댓글 달기)
        -   기존 자원에 데이터 추가(예: 한 문서 끝에 내용 추가하기)

    -   정리: 이 리소스 URI에 POST 요청이 오면 요청 데이터를 어떻게 처리할지 리소스마다 따로 정해야 합니다.
        -   새 리소스 생성(등록): 서버가 아직 식별하지 않은 새 리소스 생성
        -   요청 데이터 처리
            -   단순히 데이터를 생성하거나 변경하는 것을 넘어 프로세스를 처리해야 하는 경우(예: 주문에서 결제 완료 -> 배달 시작 -> 배달 완료 처럼 단순히 값 변경을 넘어 프로세스의 상태가 변경되는 경우)
            -   POST의 결과로 새로운 리소스가 생성되지 않을 수 있음
            -   다른 메서드로 처리하기 애매한 경우(예: JSON으로 조회 데이터를 넘겨야하는데 GET 메서드를 사용하기 어려운 경우)

### HTTP 메서드 - PUT, PATCH, DELETE

-   PUT

        PUT /members/100 HTTP/1.1
        Content-Type: application/json

        {
            "username":"hello",
            "age":20
        }

    -   리소스를 대체
        -   리소스가 있으면 대체하고 없으면 생성합니다. 쉽게 이야기해서 덮어버립니다.
        -   리소스를 완전히 대체하므로 하나의 필드만 들어오면 하나의 데이터만 들어가게 됩니다. 예를들어 "age"를 20에서 50으로 변경했을 때 username 없이 진행하면 해당 필드에는 username 없이 age만 들어갑니다. 그렇기 때문에 PUT은 리소스를 수정하는데에는 부적합합니다.
    -   클라이언트가 리소스를 식별합니다.(중요!!)
        -   클라이언트가 리소스 위치를 알고 URI를 지정합니다. 클라이언트가 구체적인 리소스의 위치를 알고 있습니다.
        -   POST와 차이점입니다.

-   PATCH

        PATCH /members/100 HTTP/1.1
        Content-Type: application/json

        {
            "age":50
        }

    -   리소스 부분 변경

-   DELETE

        DELETE /members/100 HTTP/1.1
        Host: localhost:8080

    -   리소스 제거

### HTTP 메서드의 속성

![image1](/assets/img/blog/study/20220617-study-http-3.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="300"}

-   https://ko.wikipedia.org/wiki/HTTP

---

-   `안전(Safe Methods)`
    -   호출해도 리소스를 변경하지 않습니다.(GET, HEAD)
-   `멱등(Idemootent Methods)`
    -   활용
        -   자동 복구 메커니즘
        -   서버가 Timeout 등으로 정상 응답을 주지 못했을 때 클라이언트가 같은 요청을 다시 해도 되는가?에 대한 판단 근거가 됩니다. 똑같은 요청을 반복해도 무방하다면 재시도 해 볼 수 있습니다.
        -   멱등은 외부 요인으로 중간에 리소스가 변경되는 것까지는 고려하지 않습니다. 내가 동일한 요청을 했을 때만 고려합니다.
    -   f(f(x)) = f(x)
    -   한 번 호출하든 두 번 호출하든 100번 호출하든 결과가 동일합니다.
    -   멱등 메서드
        -   GET: 한 번 조회하든 두 번 조회하든 같은 결과가 조화됩니다.
        -   PUT: 결과를 대체합니다. 따라서 같은 요청을 여러번 해도 최종 결과는 같습니다.
        -   DELETE: 결과를 삭제합니다. 같은 요청을 여러번 해도 삭제된 결과는 동일합니다.
        -   POST: 멱등이 아닙니다. 두 번 호출하면 같은 결제가 중복해서 발생할 수 있습니다.
-   `캐시가능(Cacheable Methods)`
    -   응답 결과 리소스를 캐시해서 사용해도 될까요?
    -   GET, HEAD, POST, PATCH 캐시 가능
    -   실제로는 GET, HEAD 정도만 캐시로 사용
        -   POST, PATCH는 본문 내용까지 '캐시 키'로 고려해야 하는데, 구현이 쉽지 않습니다.
