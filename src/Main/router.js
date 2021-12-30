import React, { Component } from 'react'
import { Route,HashRouter } from 'react-router-dom';
import {Switch} from 'antd';
import Home from '../component/page/home';
import Login from '../component/login';
import My from '../component/page/my';
import Upload from '../component/page/upload';
import Index from '../component/home'

let router = [
    {
        path: '/index',//首页默认加载的页面
        component: <Index />,
    },
    {
        path: '/home',//首页默认加载的页面
        component: <Home />,
        exact: true //是否为严格模式
    },
    {
        path: '/',//后面是传递的参数id
        component: <Login />
    },
    {
        path: '/my',
        component: <My />,

    },{
         path: '/upload',
         component: <Upload />,
         exact: false
    }
];


//  class router extends Component {
//     render() {
//         return (
//             <div>
//                 <HashRouter>
//                     <Switch>
//                         <Route path="/" Component={Index} exact />
//                         <Index></Index>
//                         <Route path="/home" Component={Home}  />
//                         <Route path="/my" Component={My}  />
//                         <Route path="/upload" Component={Upload}  />
//                         <Route path="/login" Component={Login}  />
//                     </Switch>
//                 </HashRouter>
//             </div>
//         )
//     }
// }


export default router;
