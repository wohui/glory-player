import React from 'react'
import {Layout, Button, Table, Icon, Carousel, Dialog, Form, Select, Input} from 'element-react'

import 'element-theme-default' //导入element-ui默认主题

import './HomePage.css'

require('es6-promise').polyfill();
require('isomorphic-fetch');
const moment = require('moment');
import banner from '../../../static/imgs/banner.jpg'
import axios from "axios/index";

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [], //issue数据
            issueDialogVisible: false,
            bannerImgs:["http://wsing.bssdl.kugou.com/08bb2b3f6aef64873451b604670ee040.jpg","http://wsing.bssdl.kugou.com/eccdba1f5eb5aede01ae2da1cfaa93a9.jpg","http://wsing.bssdl.kugou.com/f766d67e07b1a68f421db619fcc945e0.jpg"]
        }

    }

    componentWillMount() {

    }

    componentDidMount() {
        //向后端请求类型名称数据
        // axios.get('/api/getAllCategoryName', {
        //     params: {
        //         //ID: 12345
        //     }
        // }).then((res) => {
        //     this.setState({
        //
        //     }, () => {
        //         console.log(res.data.data);
        //     });
        // }).catch((error) => {
        //     console.log("error:" + error)
        // });
    }


    render() {
        return (

            <div className= "main" >
                <Layout.Row>
                    <Layout.Col span="24">
                        <div className="grid-content bg-purple-light">
                            <div className="demo-4 medium">
                                <Carousel interval="4000" type="card" height="200px">
                                    {
                                        [1,2,3].map((item, index) => {
                                            return (
                                                <Carousel.Item key={index}>
                                                    <img src={this.state.bannerImgs[index]}></img>
                                                </Carousel.Item>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </Layout.Col>
                </Layout.Row>


            </div>
        )
    }

}



