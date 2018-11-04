import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom';
import MainRouter from './routers'
import Header from "./components/Header/Header";
ReactDOM.render((
        <BrowserRouter>
            <div>
                <Header/>
                <MainRouter/>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('app')
);
//
// if (module.hot) {
//     // 模块自己就接收更新
//     module.hot.accept();
//     // dispose方法用来定义一个一次性的函数，这个函数会在当前模块被更新之前调用
//     module.hot.dispose(function() {
//         clearInterval(timer);
//     });
// }