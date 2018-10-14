#리액트 라우터 + 리덕스 폼

##70. 공지사항

##71. 앱 오버뷰와 목표

##72. Posts API 탐험하기

Postman : Get -> [](empty content) -> Post  -> Get Content -> Delete

##73. 리액트 라우터 설치하기

상단의 주소바에서 url 을 네비게이팅하면,
이는 현재 위치가 반영되어 페이지가 업데이트 되지요.

유저가 특별한 url을 네비게이팅할때,
이에 적합한 컴포넌트를 화면에 보여줘야 하고,
컨텐츠 또한 함께 보내줘야 하죠.

즉, 해당 url에 맞는 같은 컴포넌트 뿐만 아니라
데이터도 보여줘야합니다.

다음과 같이 리엑트 라우터를 받습니다.

~~~ javascript
npm install --save react-router@2.0.0-rc5
// @2.0.0-rc5 는 특정 버전을 나타납니다.
~~~

##74. 리액트 라우터는 무엇일까

리액트 라우터와 히스토리 패키지가 어떻게 동작 방법.

히스토리는 작은 자바스크립트 패키지로써, 웹의 url을 관리하기 위해 이용합니다.
url이 변경되는 것을 관찰하다가 이를 업데이트 하는 것이죠.
실제로, 우리는 이 히스토리를 곧바로 작업하지는 않고, 

url이 바뀔때마다 히스토리는 이를 관찰하는데요.
즉, 브라우저는 히스토리 라이브러리가 유저가 url을 바꾼것을 알게하죠.
히스토리가 새 url을 가지면, 리액트 라우터로 전달하고, 리엑트 라우터는 이를 받게되구요.
이 url을 받아서 새로운 컴포넌트를 렌더링 할 필요가 있다고 결정하고,
이를 리액트로 전달하는데요.
리액트가 리액트 라우터로부터 새 컴포넌트를 받으면,
이는 새 컴포넌트의 컬렉션을 얻었다고 감지하게되죠.
그래서, 새로운 컨텐츠를 화면에 보여줄 필요가 있다고 결정하죠.
화면에 이 컨텐츠를 렌더링하고,
컨텐츠를 바로 브라우저로 흘러보내죠.

즉 정리하면 히스토리는 뒷단에서, url을 관찰하다가
필요하면 이를 업데이트 하는 능력이 있구요.
이 url이 바뀌면 리액트 라우터로 이를 전달하구요.
리액트 라우터가 이를 받아, 이 url에 기반하여 보여줄 컴포넌트를 결정하구요.
리액트 라우터가 리액트로 이를 보내면,
리액트는 html을 화면에 표시하죠.
이것이 전체 사이클입니다.

##75. 리액트 라우터 세팅

히스토리 종류
- 브라우저 히스토리 : 
- 해쉬 히스토리 :
- 메모리 히스토리 : URL 히스토리를 상ㅅㅇ하지 않고, 커스텀아이즈 죈 개별 히스토리를 가질 수 있음

해당 강의로 진행시, 버전문제로 작동하지 않음

1. react-dom , react 버전을 낮춘다.
~~~
// package.json
react-dom : "15.1.1"
react: "15.1.1"
~~~

2. react-router 버전을 올리고 그에 맞는 문법을 사용한다.
   

**react-dom , react 버전을 낮춰 진행**

라우터 라이브러리는 히스토리라 불리는 개별 패키지의 번들 형태이다.
히스토리는 url과 상호작용하면서,
이 업데이트된 url을 리액트 라우터로 보낸다.
리액트 라우터는 url을 받고 어떤 컴포넌트를 url에 기반해 보여줄지 결정한다.


~~~ javascript
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Router, browserHistory } from 'react-router';
// Router 와 browserHistory 를 가져온다
// router와 browserHistoryRouter는 오브젝트로서,
// url이 바뀔때 어떤 컴포넌트를 렌더링할지 결정한다.

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}
        <Router history={browserHistory} />
    </Provider>
, document,qurySelector('container'));
~~~

##76. 라우트 구성

##77. 중첩된 라우트

##78. 리액트 라우터의 인덱스 라우트

##79. 리덕스로 돌아오기 - 인덱스 액션

##80. 포스트 리듀서의 데이터 잡기 1

##81. 포스트 리듀서의 데이터 잡기 2

##82. 라이프사이클 메소드 안에 데이터 가져오기 1

##83. 라이프사이클 메소드 안에 데이터 가져오기 2

##84. 새 포스트 생성하기

##85. 링크 컴포넌트 네비게이션

##86. 폼과 폼 제출

##87. 폼과 폼 제출 보다 자세히 알아보기

##88. 컨트롤을 리덕스 폼으로 전달하기

##89. CreatePost 액션 생성자

##90. 폼 검증 1

##91. 폼 검증 2

##92. 제출 네비게이팅

##93. 포스트 인덱스

##94. 다이나믹 라우트 파라미터

##95. 렌더링 시, 데이터 로딩

##96. Null 프로퍼티 핸들링

##97. 액션 생성자 지우기

##98. Delete 네비게이팅

##99. 리액트 라우터와 리덕스 폼 리뷰