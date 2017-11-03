// require: import野生的前辈: https://www.zhihu.com/question/56820346
// export: 模块的对外接口: 参考C中的extern和external
// import: 用于输入其他模块提供的功能, 参考python, 一模一样, Singleton模式
// 其中import语句如果导入模块名, 而并非路径, 需要配置文件告知具体位置
// 上述两者都在: 静态分析阶段就执行
import App from '../App';

// 默认导入, 类似python中的__init__.py效果(index.js), 
// 但是js中的import必须有变量接收, 例如: import * as x from '../App';

// 格式: export default Var;
// 导入: import V from router;
export default [{
    path: '/',
    // 组件: 扩展HTML, 封装代码
    component: App,
    children: [{
        path: '',
        // 箭头函数: 参数r, 后面为函数体
        component: r => require.ensure(
            [], () => r(require('../page/home')), 'home')
    },{
        path: '/item',
        component: r => require.ensure(
            [], () => r(require('../page/item')), 'item')
    },{
        path: '/score',
        component: r => require.ensure(
            [], () => r(require('../page/score')), 'score')
    }]
}];
