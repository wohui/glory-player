import React from "react";
import {Layout,Menu} from 'element-react'
import {BrowserRouter,Link} from 'react-router-dom'

import './header.css'
class Header extends React.Component {

    onSelect() {

    }
    render() {
        return (
            <div>
                <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                    <Menu.Item index="1"><Link to="/">首页</Link></Menu.Item>
                    <Menu.Item index="2"><Link to="/top/">音乐汇</Link></Menu.Item>
                    <Menu.Item index="3"><Link to="/userCenter/">我的Glory</Link></Menu.Item>
                </Menu>
            </div>
        )
    }

}

export default Header
