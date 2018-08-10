import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Button, Layout, Tag} from 'element-react'; //导入element-ui库
import {Rate} from 'element-react'
import 'element-theme-default' //导入element-ui默认主题

import './SongList.css'


import axios from 'axios'
import moment from 'moment'

require('es6-promise').polyfill();
require('isomorphic-fetch');


class SongList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playlist: {
                tags: [],
                creator: {
                    nickname: ''
                },
                tracks: []
            }

        }


    }

    componentUnMount() {


    }

    componentWillMount() {

    }

    componentDidMount() {
        const playListId = this.props.match.params.playListId
        //向后端请求类型名称数据
        axios.get('/api/getSongList', {
            params: {
                playListId: playListId
            }
        }).then((res) => {
            this.setState({
                playlist: res.data.data.playlist,
            });

        }).catch((error) => {
            console.log("error:" + error)
        });

    }

    render() {

        return (
            <div>
                <div className="header">
                    <Layout.Row>
                        <Layout.Col span="12" className="left-col">
                            <div className="song-list-img grid-content bg-purple">
                                <img
                                    src="http://wsing.bssdl.kugou.com/5467eeaf312ba0fd98cfb4078b8054d0.jpg_200x200.jpg"/>
                            </div>
                        </Layout.Col>
                        <Layout.Col span="12" className="right-col">
                            <div className="song-list-info grid-content bg-purple-light">
                                <div><p className="play-list-song-title">{this.state.playlist.name}</p></div>
                            </div>
                            <div className="song-list-info grid-content bg-purple-light">
                                <div>
                                <span>创建时间:<span
                                    className="song-list-time">{moment(this.state.playlist.createTime).format('YYYY-MM-DD')}</span></span>
                                    <span>创建人:<span
                                        className="song-list-author">{this.state.playlist.creator.nickname}</span></span>
                                </div>
                                <div className="action-btn">
                                    <Button type="primary">播放全部</Button>
                                    <Button type="success">收藏一下</Button>
                                    <Button type="info">去分享</Button>
                                </div>
                                <div className="song-list-tag">
                                    <span>标签:</span>
                                    {
                                        this.state.playlist.tags.map((el, index) => {
                                            return <Tag className="song-list-tag-item" type="primary">{el}</Tag>
                                        })
                                    }
                                </div>
                                <div>
                                    <span
                                        className="song-list-category">简介:<span>{this.state.playlist.description}</span></span>
                                </div>
                            </div>
                        </Layout.Col>
                    </Layout.Row>
                </div>
                <div className="content">
                    <div className="content-header">
                        <Layout.Row gutter="24" className="header-row">
                            <Layout.Col span="12" className="song-header-col">
                                <li className="grid-content bg-purple header-song-name">歌曲</li>
                            </Layout.Col>
                            <Layout.Col span="4" className="song-header-col">
                                <div className="grid-content bg-purple-light header-singer">歌手</div>
                            </Layout.Col>
                            <Layout.Col span="4" className="song-header-col">
                                <div className="grid-content bg-purple header-song-time">时长</div>
                            </Layout.Col>

                        </Layout.Row>
                    </div>
                    <div className="song">
                        {
                            this.state.playlist.tracks.slice(0, 20).map((el, index) => {
                                return <li className="song-info" key={index}>
                                    <Layout.Row gutter="24" className="song-row">
                                        <Layout.Col span="1" className="play-list-song-col col-num">
                                            <div className="grid-content bg-purple song-num">{index + 1}</div>
                                        </Layout.Col>
                                        <Layout.Col span="11" className="play-list-song-col col-name">
                                            <div className="grid-content bg-purple col-song-name">{el.name}</div>
                                        </Layout.Col>
                                        <Layout.Col span="4" className="play-list-song-col col-singer">
                                            <div className="grid-content bg-purple-light singer">
                                                {
                                                    el.ar.map((el, index) => {
                                                        return <span className="singer">{el.name}</span>
                                                    })
                                                }
                                            </div>
                                        </Layout.Col>
                                        <Layout.Col span="4" className="play-list-song-col col-time">
                                            <div
                                                className="grid-content bg-purple song-time">{Math.floor((8 * el.l.size) / (el.l.br) / 60)+":"+((8 * el.l.size) / (el.l.br) % 60 /100).toFixed(2).slice(-2)}</div>
                                        </Layout.Col>
                                    </Layout.Row>
                                </li>
                            })
                        }
                    </div>

                </div>
                <div className="foot">

                </div>
            </div>
        )
    }

}

export default SongList

