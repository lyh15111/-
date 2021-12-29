import Home from '../component/home';
import Login from '../component/login';
import My from '../component/my';
import Upload from '../component/upload';

let router = [
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

export default router;
