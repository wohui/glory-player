import React from 'react'
import {Button, Layout, Tag} from 'element-react'; //导入element-ui库
import 'element-theme-default' //导入element-ui默认主题
import './Song.css'


import axios from 'axios'
import moment from 'moment'

require('es6-promise').polyfill();
require('isomorphic-fetch');


class Song extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            song: {}

        }


    }

    componentUnMount() {


    }

    componentWillMount() {

    }

    componentDidMount() {
        const songId = this.props.match.params.songId
        //向后端请求类型名称数据
        axios.get('/api/getSongDetail', {
            params: {
                songId: songId
            }
        }).then((res) => {
            this.setState({
                song: res.data.data.songs[0],
            });

        }).catch((error) => {
            console.log("error:" + error)
        });

    }

    render() {

        return (
            <div>
                <div className="song-header">
                    <Layout.Row>
                        <Layout.Col span="12" className="left-col">
                            <div className="song-img grid-content bg-purple">
                                <img
                                    src="http://wsing.bssdl.kugou.com/5467eeaf312ba0fd98cfb4078b8054d0.jpg_200x200.jpg"/>
                            </div>
                        </Layout.Col>
                        <Layout.Col span="12" className="right-col">
                            <div className="song-info grid-content bg-purple-light">
                                <div><p className="song-name">{this.state.song.name}</p></div>
                            </div>
                            <div className="song-info grid-content bg-purple-light">
                                {/*<div>*/}
                                    {/*<span>创建人:<span*/}
                                        {/*className="song-author">{this.state.song.ar[0].name}</span></span>*/}
                                {/*</div>*/}
                                <div className="action-btn">
                                    <Button type="primary">播放</Button>
                                    <Button type="success">收藏一下</Button>
                                    <Button type="info">去分享</Button>
                                </div>
                            </div>
                        </Layout.Col>
                    </Layout.Row>
                </div>
                <div className="content">
                    <div className="content-header">

                    </div>
                </div>
                <div className="foot">

                </div>
            </div>
        )
    }

}

export default Song

