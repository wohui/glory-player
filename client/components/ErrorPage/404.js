import React from "react";
import {Layout} from 'element-react'
import {BrowserRouter,Link} from 'react-router-dom'

import './404.css'
class Error404 extends React.Component {
    componentDidMount () {
        const script = document.createElement("script");
        script.src = "//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <Layout.Row >
                    <Layout.Col span="24">
                        <div className="grid-content bg-purple-dark header-bg">
                            <p>This is 404 </p>
                        </div>
                    </Layout.Col>
                </Layout.Row>
                <iframe className="iframe" scrolling='no' frameBorder='0' src='http://yibo.iyiyun.com/Home/Distribute/ad404/key/1340987'
                        ></iframe>
            </div>
        )
    }

}

export default Error404
