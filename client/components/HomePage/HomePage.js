import React from 'react'
import {Carousel, Button,Layout,Card} from 'element-react'

import 'element-theme-default' //导入element-ui默认主题
import './HomePage.css'

require('es6-promise').polyfill();
require('isomorphic-fetch');
const moment = require('moment');

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [], //issue数据
            issueDialogVisible: false,
            bannerImages: ["http://wsing.bssdl.kugou.com/08bb2b3f6aef64873451b604670ee040.jpg", "http://wsing.bssdl.kugou.com/eccdba1f5eb5aede01ae2da1cfaa93a9.jpg", "http://wsing.bssdl.kugou.com/f766d67e07b1a68f421db619fcc945e0.jpg"],
            songListImages:["https://p1.music.126.net/0qa7W8CGaSix-ot5g_JpIQ==/6009930558058987.jpg","https://p1.music.126.net/untJnGtvu2B7ZEUBuiz6Tg==/19098516974530745.jpg","https://p1.music.126.net/jFQPfhsoQV_f8516DYdlIQ==/18600438209061477.jpg"],
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
            <div className="banner">
                <Layout.Row>
                    <Layout.Col span="24">
                        <div className="grid-content bg-purple-light">
                            <div className="demo-4 medium">
                                <Carousel interval="4000" type="card" height="200px">
                                    {
                                        [1, 2, 3].map((item, index) => {
                                            return (
                                                <Carousel.Item key={index}>
                                                    <img src={this.state.bannerImages[index]}></img>
                                                </Carousel.Item>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                <div className="songList">
                    <p className="tuijian-title">Glory推荐</p>
                    <div className="demo-3 medium">
                        <Carousel autoplay={false} arrow="always"  className="">
                            {
                                [1, 2, 3].map((item, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <div className="listContent">
                                                <Layout.Row  gutter="20" >
                                                    <Layout.Col span={ 6 } offset={ 0 } >
                                                        <Card bodyStyle={{ padding: 0 }} className="card">
                                                            <img src={this.state.songListImages[0]} className="image"></img>
                                                            <div style={{ padding: 5 }}>
                                                                <div className="card-info">
                                                                    <Layout.Row>
                                                                        <Layout.Col span="24"><span className="name">你还不知道有没有这么的</span></Layout.Col>
                                                                    </Layout.Row>
                                                                    <Layout.Row>
                                                                        <Layout.Col span="24"> <span type="text" className="">播放量:50.22万</span></Layout.Col>
                                                                    </Layout.Row>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Layout.Col>
                                                    <Layout.Col span={ 6 } offset={ 0 }>
                                                        <Card bodyStyle={{ padding: 0 }} className="card">
                                                            <img src={this.state.songListImages[1]} className="image"></img>
                                                            <div style={{ padding: 5 }}>
                                                                <div className="card-info">
                                                                    <Layout.Row>
                                                                        <Layout.Col span="24"><span className="name">你还不知道有没有这么的</span></Layout.Col>
                                                                    </Layout.Row>
                                                                    <Layout.Row>
                                                                        <Layout.Col span="24"> <span type="text" className="">播放量:50.22万</span></Layout.Col>
                                                                    </Layout.Row>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Layout.Col>
                                                    <Layout.Col span={ 6 } offset={ 0 }>
                                                        <Card bodyStyle={{ padding: 0 }} className="card">
                                                            <img src={this.state.songListImages[2]} className="image"></img>
                                                            <div style={{ padding: 5 }}>
                                                                <div className="card-info">
                                                                    <Layout.Row>
                                                                        <Layout.Col span="24"><span className="name">你还不知道有没有这么的</span></Layout.Col>
                                                                    </Layout.Row>
                                                                    <Layout.Row>
                                                                        <Layout.Col span="24"> <span type="text" className="">播放量:50.22万</span></Layout.Col>
                                                                    </Layout.Row>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Layout.Col>
                                                    <Layout.Col span={ 6 } offset={ 0 }>
                                                        <Card bodyStyle={{ padding: 0 }} className="card">
                                                            <img src={this.state.songListImages[1]} className="image"></img>
                                                            <div style={{ padding: 5 }}>
                                                                <div className="card-info">
                                                                    <Layout.Row>
                                                                        <Layout.Col span="24"><span className="name">你还不知道有没有这么的</span></Layout.Col>
                                                                    </Layout.Row>
                                                                    <Layout.Row>
                                                                        <Layout.Col span="24"> <span type="text" className="">播放量:50.22万</span></Layout.Col>
                                                                    </Layout.Row>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Layout.Col>
                                                </Layout.Row>
                                            </div>
                                        </Carousel.Item>
                                )
                                })
                            }
                        </Carousel>
                    </div>

                </div>


            </div> /**end**/


        )
    }

}



