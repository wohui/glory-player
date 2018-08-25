import React from 'react'
import {Button, Layout} from 'element-react'; //导入element-ui库
import 'element-theme-default' //导入element-ui默认主题
import './Song.css'
import ScrollArea from 'react-scrollbar'

import axios from 'axios'
import moment from 'moment'

require('es6-promise').polyfill();
require('isomorphic-fetch');


class Song extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            song: {
                name:'',
                al:{
                    picUrl:''
                }
            },
            lyric: '',
            comments: [
                {
                    user: {},
                    time: '',
                    content: ''
                },


            ],
        }


    }

    componentUnMount() {


    }

    componentWillMount() {

    }

    handleScroll(scrollData) {
        console.log(scrollData);
    }

    componentDidMount() {
        const songId = this.props.match.params.songId
        //向后端请求歌曲信息
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

        //向后端请求歌词信息
        axios.get('/api/getLyric', {
            params: {
                songId: songId
            }
        }).then((res) => {
            this.setState({
                lyric: res.data.data.lrc.lyric.replace(/(\[).*?(\])/g, ''),
            });

        }).catch((error) => {
            console.log("error:" + error)
        });

        //向后端请求评论信息
        axios.get('/api/getComments', {

            params: {
                songId: songId
            }
        }).then((res) => {
            this.setState({
                comments: res.data.data.comments,
            });

        }).catch((error) => {
            console.log("error:" + error)
        });

    }

    render() {
        let scrollbarStyles = {borderRadius: 5};
        return (
            <div className="song-content">
                <div className="song-head-wrap">
                    <div className="song-head">
                        <Layout.Row gutter="20" className="song-el-row">
                            <Layout.Col span="14">
                                <div className="grid-content bg-purple">
                                    <Layout.Row>
                                        <Layout.Col span="12" className="left-col">
                                            <div className="song-img grid-content bg-purple">
                                                <img className="song-img-al-pic" src={this.state.song.al.picUrl}/>
                                            </div>
                                        </Layout.Col>
                                        <Layout.Col span="12" className="right-col">
                                            <div className="song-song-info grid-content bg-purple-light">
                                                <div><p className="song-name">{this.state.song.name}</p></div>
                                            </div>
                                            <div className="song-song-info grid-content bg-purple-light">
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
                            </Layout.Col>
                            <Layout.Col span="10">
                                <div className="grid-content bg-purple song-right-content">
                                    <div className="grid-content bg-purple-light">
                                        <div><p className="song-name">{this.state.song.name}</p></div>
                                    </div>
                                </div>
                            </Layout.Col>
                        </Layout.Row>
                    </div>
                </div>
                <div className="lyric-wrap">
                    <div className="lyric-title">
                        <p className="song-name">歌词</p>
                    </div>
                    <div className="lyric-info">
                        <ScrollArea
                            className="lyric-area"
                            contentClassName="content"
                            verticalScrollbarStyle={scrollbarStyles}
                            verticalContainerStyle={scrollbarStyles}
                            horizontalScrollbarStyle={scrollbarStyles}
                            horizontalContainerStyle={scrollbarStyles}
                            smoothScrolling={true}
                            minScrollSize={40}
                            //onScroll={this.handleScroll}
                        >
                            <pre className="lyric-area-content">
                                {this.state.lyric.replace('(\\[\\?*)[^]]+.','')}
                            </pre>
                        </ScrollArea>

                    </div>
                </div>
                <div className="comments-wrap">
                    <div className="comments-title">
                        <p className="song-name">评论</p>
                    </div>
                    <div className="comments-info">
                        {
                            this.state.comments.slice(0, 20).map((el, index) => {
                                return <div className="comments-info-item">
                                    <Layout.Row gutter="24" className="song-el-row">
                                        <Layout.Col span="2">
                                            <div className="grid-content bg-purple">
                                                <img className="comments-user-icon"
                                                     src={el.user.avatarUrl}/>
                                            </div>
                                        </Layout.Col>
                                        <Layout.Col span="22" className="comments-info-item-col">
                                            <div className="grid-content bg-purple">
                                                <Layout.Row type="flex" className="comments-info-item-tag1" align="top">
                                                    <Layout.Col span="3">
                                                        <div
                                                            className="comments-info-name">{el.user.nickname}</div>
                                                    </Layout.Col>
                                                    <Layout.Col span="10">
                                                        <div className="grid-content bg-purple comments-info-time">
                                                            {moment(el.time).format('YYYY-MM-DD')}
                                                        </div>
                                                    </Layout.Col>
                                                </Layout.Row>
                                                <Layout.Row type="flex" className="row-bg comments-info-item-tag2"
                                                            align="top">
                                                    <Layout.Col span="12">
                                                        <div
                                                            className="grid-content bg-purple">{el.content}</div>
                                                    </Layout.Col>
                                                </Layout.Row>
                                            </div>
                                        </Layout.Col>
                                    </Layout.Row>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Song

