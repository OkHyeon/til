# 리액트 소개

## 1. 강의 소개 - 프로젝트 파일과 관련한 깃허브 링크 소개!

## 2. 프로젝트 - 깃허브(Github) 주소

[github 주소](github.com/stephengrider)
ReduxSimpleStarter 레파지토리

## 3. 보일러플레이트(Boilerplate) 프로젝트의 목적

ES6 로 작성된 많은 갯수의 자바스크립트 파일을 웹팩(webpack) 이라는 도구를 사용하여,
바벨(babel) 혹은 바벨JS(babel.js) 라고 불리는 라이브러리로 구성할 것입니다.
툴링(tooling) 혹은 트랜스파일(Transpile) 하는 과정을 거칩니다. 

웹팩과 바벨의 목적은 ES6 코드가 바로 브라우저에 실행하지 못하는 문제를 해결하기 위해,
트랜스 파일을 해서 브라우저에서 돌아가는 하나의 파일로 번들링 해준다.


즉, 툴링을 하고 모든 코드를 트랜스파일 하여 결국엔 하나의 자바스크립트 파일로 빌드하여 이를 브라우저에서 제대로 실행할 수 있게 만드는 것입니다.


* 보일러 플레이트 : 재사용이 사능하고 적은 수정만으로 여러 곳에 활용 가능한 소스코드다.
* 트랜스파일 : 코드를 같은 수준의 다른언어로 바꿔주는 과정

## 4. 개발환경 설정

보일러 플레이트 설치

github.com/stephengrider

https://github.com/StephenGrider/ReduxSimpleStarter 에서 클론한 뒤에

npm install  하기 

## 5. 프로젝트 설정

npm start

작성한 자바스크립트 파일을 바벨과 웹팩이 이 모든 것들을 합치고 이를 변환하여 es5로 변환하여 브라우저에 돌아가게끔 만듭니다.
그리고 이 모든 파일들을 볼 수 있는 로컬 서버를 이용가능하게 컴파일 합니다. 

## 6. JSX 와의 첫만남

index.html 을 살펴보면 bundle.js 가 있는데, 
이 bundle.js 는 많은 js 파일을 
웹팩과 바벨이 bundle.js 파일 하나로 이용할 수 있게 만드는 것 입니다.



리액트는 자바스크립트 라이브러리입니다.
그것도 웹 브라우저에 보여지는 HTML을 만드는 라이브러리입니다.
따라서, 리액트 코드를 작성하면요.

우리는 컴포넌트(component) 혹은 뷰(view)를 각각 만들게 됩니다.

컴포넌트는 소스코드의 일부이며, 이 코드는 HTML을 생성합니다.
즉, 컴포넌트는 HTML를 생성할 것이라고 이해하면 된다.
여러개의 다른 컴포넌트를 작성하면서, 이 컴포넌트들을 다른 방식으로 배치하면서 복잡한 어플리케이션을 보다 간단하게 만들어 줍니다.
컴포넌트는 HTML을 만드는 자바스크립트 함수의 모음집입니다.
그래서 자바스크립트 컴포넌트를 만들 때,
이는 궁극적으로 HTML으로 만들어집니다.

**컴포넌트 만들기**


1. Create a new component 
    This component should produce some HTML
    컴포넌트를 생성하고, 컴포넌트가 HTML 을 생성한다
2. Take this component's generated HTML and put it on the page (in ths Dom)
    따라서, 이 컴포넌트가 만든 HTML을 가져가고 페이지에 반영한다.

~~~ javascript
//index.js
//1.
const App = function(){
    return <div>Hi!</div>;
    // 이 html 로 보이는 것이 바로 jsx 이다.
    // jsx는 부분적으로 템플릿 혹은 변형된 자바스크립트로 
    // 자바스크립트 안에 HTML 처럼 보이는 소스코드를 사용할 수 있게 도와줍니다.
    // 표면적으로 보이지 않는 자바스크립트 

    // 실제로 어떻게 보여지는지, 확인 하기 위해서는 컴포넌트를 html레 반영한다.
}
~~~

* es6 에서 변수를 선언하는 방법 const , let 
    ( const 는 상수로서 변할 수 없는 값을 의미한다.)


## 7. JSX를 더 파보자!

**JSX 심화** : JSX 의 사용 목적과 왜 이렇게 사용해야 하는가

ES6 와 같이 JSX 구문은 브라우저에 의해 해석할 수 없다 . 
따라서, 웹팩과 바벨같은 보일러플레이트 패키지의 목적은 JSX 를 바닐라 자바스크립트로 변환 하여 브라우저가 이해할 수 있게 만든다는 점입니다.


이러한 식으로 JSX를 사용하는 이유는 실제 HTML로 변환되어 제공되고 , 이 컴포넌트를 렌더링 할 때 DOM 에 삽입되기 때문이다.
렌더링 한다는 의미는 컴포넌트를 HTML 페이지에 올린단 뜻이다.

이 JSX는 HTML로 변환되어 바로 페이지의 DOM 으로 삽입되어 브라우저에 보여지게 된다.

즉 , jsx 의 목적은 자바스크립트 코드를 HTML로 만들기 위한 것이다.


[바벨 공식사이트](http://babeljs.io/repl)
ES6 REPL 이라 불리는 도구를 사용해 볼 수 있다.


ES6 REPL 를 사용하여 es5 변환


~~~ javascript
//es6
const App = function(){
    return <div>Hi!</div>;
}
~~~

~~~ javascript
// es5

"use strict";
var App = function App() {
    return React.createElement(
        "div",
        null,
        "Hi!"
    );
};
~~~

JSX 를 사용 하였을때 대체 무엇을 의미하는지 한눈에 파악하기 쉽고,
그 자체로 중첩을 통해 사용하면서 HTML을 흉내낼 수 있다.

즉, JSX 를 사용하면 더 작관적이고 보기 좋게 코드를 만들 수 있다.

* 바닐라 스트립트 : 프래임워크나 라이브러리 없이 순수한 자바스크립트

## 8. ES6 불러오기(Import) 구문


~~~ javascript
// index.html
// 컴포넌트 생성
const App = function(){
    return <div>Hi!</div>;
}

// 페이지에 반영
React.render(App);
/*
Uncaught ReferenceError: React is not defined 
에러 발생
*/
~~~

Es6 에서는 자바스크립트 모듈을 불러 올 수 있다.
여기서 자바스크립트 모듈은 서로 분리된 코드 파일들을 또 다른파일들 혹은 다른곳에 설치한 라이브러리 이다. 
즉, 다른 파일에 선언된 코드들은 현제 우리가 보는 코드와는 아무런 소통을 할 수 없다.(변수 참조 등)

따라서 "저 다른 파일에 따로 접근 할수 있게 권한을 줘" 라고 만들어야 소통이 가능해 진다.

즉, 우리는 React 를 이파일에 접근 할 수 있도록 별로도 선어해야 한다.

이라한 선언 방법은 "import" 다.


~~~ javascript
// index.html

// 리엑트 모듈을 가져옴
// 'react' 라는 파일의 라이브러리를 불러와 React 라는 변수에 할당
import React from 'react';

// 컴포넌트 생성
const App = function(){
    return <div>Hi!</div>;
}

// 페이지에 반영
React.render(App);
~~~

## 9. 리액트DOM vs 리액트

[react 공식 사이트](http://facebook.github.io/react/)


리액트는 두개의 분리된 라이브러리로 나눠진다.

코어 리액트 라이브러리는 ('react') 리액트 컴포넌트와 어떻게 작동하는지 알고 있습니다.
즉, 어떻게 렌더링 되며, 어떨게 그것들을 모으는지 등을 안다.

리액트 동 라이브러리는 ('react-dom') 실제로 DOM에 렌더링하는 기능을 가지고, 이 컴포넌트를 가져와 DOM에 삽입하는 라이브러리다

따라서, 실제 컴포넌트를 DOM에 렌더링 하기 위해 우리는 리액트 라이브러리를 쓰는게 아니고 react-dom 라이브러리를 사용한다.

## 10. 컴포넌트 인스턴스와 컴포넌트 클래스의 차이

리엑트돔은 실제 DOM 과 상호작용하는 반면에 , 리액트는 컴포넌트를 생성하고 관리한다.

여기 함수는 팩토리 형태이고, 실제 DOM에 렌더링 되는 컴포넌트의 인스턴스들을 만든다.

ReactDOM.render 를 이용해 App Class 를 전달 했다.
이것은 컴포넌트의 '인스턴스'가 아니였죠.


**Instead of passing a component class.**
이 말은 곧 컴포넌트의 인스턴스를 만드는 것과 이를 ReactDOM.render 로 전달하라는 뜻이다.

DOM에 렌더링하기 전에, 컴포넌트를인스턴스화 해야 한다는 것이다.

jsx 에 기반하여 인스턴스를 만들수 있다.

JSX를 작성하고 컴포넌트 이름을 넣을때마다, 이 컴포넌트 이름른 컴포넌트 클래스이고, JSX 안에 사용이 되는 이들은 컴포넌트 인스턴스로 만들게 됩니다.

이것이 JSX 컴포넌트와 컴포넌트 인스턴스 사이를 엮는다.

createElement 


~~~ javascript
// index.html

// import
import React from 'react';
import ReactDOM from 'react-dom';

// 컴포넌트 생성
const App = function(){
  return <div>Hi!</div>;
}

// 페이지에 반영
ReactDOM.render(<App />);
// App 의 인스턴스를 생성하고 이를 ReactDOM.render 에 전달하게 됩니다.
~~~

### 11.타겟 렌더링

**Target container is not a DOM element**

ReactDOM이 이를 렌더링 하지만 어디에서 렌더링해야할지는 모르겠다는 뜻이다.

~~~ javascript
// index.html

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hi!</div>;
}

ReactDOM.render(<App /> , document.querySelector('.container'));
//ReactDOM.render(<App /> , 페이지의 위치하는 DOM 노드를 가리킨다.);

~~~

컴포넌트가 단순히 함수로 보이지만, 호출하면 JSX를 반환한다.

* Fat arrow(화살표 함수) => : this 바인딩이 funtion 과 다르고 더 간결하고 압축적인 구문 형태로 함수를 정의할 수 있게 해준다.

## 12. 컴포넌트 구조

리액트 앱은 많은 다른 컴포넌트로 구성되어 있다.

어플리케이션을 어떤 기준으로 여러 컴포넌트를 만드는지에 대한 큭별한 방법은 없다. 연습을 통해 자의적으로 선택 할수 있을뿐

컴포넌트는 코드를 쉽게 재사용할 수 있게 도와준다.

파일하나당 하나의 컴포넌트를 만들어야 한다.

~~~
프로젝트를 구성하는 컴포넌트

index.js
search_bar.js
video_detail.js
video_list.js
video_list_item.js
~~~

## 13. 유튜브(Youtube) 검색 API 회원가입

## 14. 내보내기(Export) 구문

## 15. 클래스 기반의 컴포넌트

## 16. 유저 이벤트 핸들링

## 17. 상태(State) 소개

## 18. 스테이트 더 파고들기

## 19. 제어 컴포넌트

## 20. 리뷰