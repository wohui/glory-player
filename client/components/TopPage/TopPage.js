import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Button} from 'element-react'; //导入element-ui库
import {Rate} from 'element-react'
import {Dropdown} from 'element-react'
import 'element-theme-default' //导入element-ui默认主题

import './TopPage.css'

require('es6-promise').polyfill();
require('isomorphic-fetch');

import banner from '../../../static/imgs/banner.jpg'

class TopPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 180
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 180
                },
                {
                    label: "地址",
                    prop: "address"
                }
            ],
            data: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
        }

    }


    render() {

        return (
            <Dropdown menu={(
                <Dropdown.Menu>
                    <Dropdown.Item>黄金糕</Dropdown.Item>
                    <Dropdown.Item>狮子头</Dropdown.Item>
                    <Dropdown.Item>螺蛳粉</Dropdown.Item>
                    <Dropdown.Item disabled>双皮奶</Dropdown.Item>
                    <Dropdown.Item divided>蚵仔煎</Dropdown.Item>
                </Dropdown.Menu>
            )}
            >
      <span className="el-dropdown-link">
        下拉菜单<i className="el-icon-caret-bottom el-icon--right"></i>
      </span>
            </Dropdown>
        )
    }

}

export default TopPage

