import div from './a.js';

// 引入a.css样式
// import a from '../css/a.css'

// 使用别名
import a from '@css/a'

let divEle = div();
divEle.className = a.con;


document.body.appendChild(divEle);