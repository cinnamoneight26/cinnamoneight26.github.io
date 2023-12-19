---
layout: post
title: HTTP 메서드 활용
tags: HTTP
description: >
  인프런 - 모든 개발자를 위한 HTTP 웹 기본 지식 강의 중 섹션 5을 듣고 정리하였습니다.
accent_image:
  background: url('/assets/img/blog/javascript_bg.jpg') center/cover
  overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
  - 탐구생활
---

---

### 클라이언트에서 서버로 데이터 전송

데이터 전달 방식은 크게 두 가지입니다.

1. 쿼리 파라미터를 통한 데이터 전송

   1-1. GET

   1-2. 주로 정렬 필터

2. 메시지 바디를 통한 데이터 전송

   2-1. POST, PUT, PATCH

   2-2. 회원 가입, 상품 주문, 리소스 등록, 리소스 변경

---



<h2>4가지 상황으로 나누어 보기</h2>

* 정적 데이터 조회(ex: /static/star.jpg)
  * 이미지, 정적 텍스트 문서
  * 조회는 GET을 사용
  * 정적 데이터는 일반적으로 쿼리 파라미터 없이 리소스 경로로 단순하게 조회 가능
* 동적 데이터 조회(ex: /search?q=hello&hl=ko)
  * 주로 검색, 게시판 목록에서 정렬 필터(검색어)
  * 조회는 GET 사용
  * GET은 쿼리 파라미터 사용해서 데이터를 전달
* HTML Form 데이터 전송 
  * HTML Form은 GET 전송도 가능 (단 GET으로 전송하면 쿼리 파라미터 형식으로 들어감)
  * HTML Form submit 시 POST 전송 
    * 회원 가입, 상품 주문, 데이터 변경 등
  * Content-Type : application/x-www-form-urlencoded 사용
    * form의 내용을 메시지 바디를 통해서 전송(Key=value 형태. 쿼리 파라미터 형식)
    * 전송 데이터를 url encoding 처리(예: abc김 -> abc%EA%B9%80)
  * Content-Type: Multipart/form-data
    * 파일 업로드 같은 바이너리 데이터 전송 시 사용
    * 다른 종류의 여러 파일과 폼의 내용을 함께 전송할 수 있음 (이름이 multipart인 이유)
    * 만약 form으로 데이터를 전송하는 데이터가 key, value로 이루어진 데이터가 아니라 이미지 같은 것이 포함되어 있을 때 사용. 웹브라우저가 랜덤으로 데이터의 경계를 잘라서 알아서 보내줌. 이미지의 경우 Content-Type: image/png로 바이트 정보를 보내줌. 이런 방식으로 여러 컨텐츠 타입에 대한 데이터들을 보낼 수 있음.
  * HTML Form 전송은 GET, POST만 지원
* HTTP API 데이터 전송
  * 회원 가입, 상품 주문, 데이터 변경
  * 서버 to 서버
    * 백엔드 시스템 통신
  * 앱 클라이언트
    * 아이폰, 안드로이드
  * 웹 클라이언트
    * HTML에서 form 전송 대신 JavaScript를 통한 통신에 사용(AJAX)
    * React, VueJs 같은 웹 클라이언트와 API 통신
  * POST, PUT, PATCH: 메세지 바디를 통해 데이터 전송
  * GET: 조회, 쿼리 파라미터로 데이터 전달
  * Content-Type: application/json을 주로 사용(사실상 표준)
    * TEXT, XML, JSON 등등

---



### HTTP API 설계 예시

1. HTTP API - 컬렉션

   * POST 기반 등록(신규 자원 등록 특징)

     * 클라이언트는 등록될 리소스의 URI를 모른다
       * 회원 등록 /members -> POST
       * POST /members
     * 서버가 새로 등록된 리소스 URI를 생성해준다.
       * HTTP/1.1 201 Created
       * Location: **/members/100**
     * **컬렉션** (Collection)
       * **서버**가 관리하는 리소스 디렉토리
       * 서버가 리소스의 URI를 생성하고 관리
       * 여기서 컬렉션은 /members

   * 예) 회원 관리 API 제공

     * 회원 목록 : members -> GET
     * 회원 등록 : members -> POST
     * 회원 조회 : members/{id} -> GET
     * 회원 수정 : members/{id} -> PATCH, PUT, POST
     * 회원 삭제 : members/{id} -> DELETE

     

2. HTTP API - 스토어

   * PUT 기반 등록
     * 클라이언트가 리소스 URI를 알고 있어야 한다.
       * 파일 등록 /files/{filename} -> PUT
       * PUT /files/star.jpg
     * **클라이언트**가 직접 리소스의 URI를 지정한다.
     * **스토어**(STORE)
       * 클라이언트가 관리하는 리소스 저장소
       * 클라이언트가 리소스의 URI를 알고 관리
       * 여기서 스토어는 /files
   * 예) 정적 콘텐츠 관리, 원격 파일 관리
     * 파일 목록 /files -> GET
     * 파일 조회 /files/{filename} -> GET
     * 파일 등록 /files/{filename} -> PUT
     * 파일 삭제 /files/{filename} -> DELETE
     * 파일 대량 등록 /files -> POST

   

3. HTML FORM 사용

   * 순수 HTML + HTML Form 사용
   * 웹 페이지 회원 관리
     * 회원 목록 /members -> GET
     * 회원 등록 폼 /members/new -> GET
     * 회원 등록 /members/new, /members -> POST
     * 회원 조회 /members/{id} -> GET
     * 회원 수정 폼 /members/{id}/edit -> GET
     * 회원 수정 /members/{id}/edit, /members/{id} -> POST
       * 회원 삭제 /members/{id}/delete -> POST
   * HTML FORM은 **GET, POST만 지원**
   * **컨트롤 URI**
     * GET, POST만 지원하므로 제약이 있음
     * 이런 제약을 해결하기 위해 동사로 된 리소스 경로 사용
     * POST의 /new, /edit, /delete가 컨트롤 URI
     * HTTP 메서드로 해결하기 애매한 경우 사용(HTTP API 포함)
   * AJAX 같은 기술을 사용해서 해결 가능 -> 회원 API 참고
   * 여기서는 순수 HTML, HTML FORM 이야기
   * GET, POST만 지원하므로 제약이 있음



---

  참고하면 좋은 URI 설계 개념

* 문서(Document)
  * 단일 개념(파일 하나, 객체 인스턴스, 데이터베이트 row)
  * 예) /members/100, /files/star.jpg
* 컬렉션(Collection)
  * 서버가 관리하는 리소스 디렉터리
  * 서버가 리소스의 URI를 생성하고 관리
  * 예) /members
* 스토어(Store)
  * 클라이언트가 관리하는 자원 저장소
  * 클라이언트가 리소스의 URI를 알고 관리
  * 예) /files
* 컨트롤러(Controller), 컨트롤 URI
  * 문서, 컬렉션, 스토어로 해결하기 어려운 추가 프로세스 실행
  * 동사를 직접 사용
  * 예) /members/{id}/delete



* 참고 : https://restfulapi.net/resource-naming

