import React from "react";
import {Layout} from 'element-react'

import './friendLink.css'

class FriendLink extends React.Component {

    render() {
        return (
            <div className="friend-link">

                <Layout.Row type="flex" justify="center">
                    <Layout.Col span="24">
                        <p className="friend-title">友情链接</p>
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row type="flex" justify="center">
                    <Layout.Col span="4">
                        <a href="https://www.ciyuanjie.cn/" title="次元街" target="_blank">
                        <img className="friend-img"
                            src="https://s2.ciyuanjie.cn/uploads/2018/06/logo_副本.png"/>
                        </a>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <a href="http://5sing.kugou.com" title="5Sing" target="_blank">
                        <img className="friend-img"
                            src="http://static.5sing.kugou.com/public/v4.1.0/images/logo.png"/>
                        </a>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <a href="https://miaocy.com/" title="喵次元" target="_blank">
                        <img className="friend-img"
                            src="https://img1.miaocy.com/uploads/2018/06/logo03.png"/>
                        </a>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <a href="https://jx3.xoyo.com/" title="剑网三" target="_blank">
                        <img className="friend-img"
                            src="http://jx3.xoyo.com/zt/2017/06/02/web/logo_2.png"/>
                        </a>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <a href="https://www.bilibili.com/" title="哔哩哔哩" target="_blank">
                        <img className="friend-img"
                            src="http://img.hb.aicdn.com/b81a8892399b5f32ef52d9338e96ec50b6ac788ae4c8-YOSXbB_fw658"/>
                        </a>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <a href="https://www.yuanyintang.com/" title="源音塘" target="_blank">
                            <img className="friend-img"
                                 src="https://www.yuanyintang.com/_nuxt/img/logo.4c90233.png"/>
                        </a>
                    </Layout.Col>

                </Layout.Row>
            </div>

        )
    }

}

export default FriendLink
