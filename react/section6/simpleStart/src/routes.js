import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

// ** 일반적으로 다른 라우터 파일을 이곳에 정의 하지 않는다.
const Greeting = ()=>{
    return <div>hey there!</div>;
}

export default (
    <Route path="/" component={App} >
        <Route path="greet" component={Greeting}/>
        <Route path="greet2" component={Greeting}/>
        <Route path="greet3" component={Greeting}/>
    </Route>
);

/*

/           App
/greet      App, Greeeting
/greet2     App, Greeeting
/greet3     App, Greeeting

*/