import React from 'react'
import {Card, Carousel, Layout} from 'element-react'

import 'element-theme-default' //导入element-ui默认主题
import './HomePage.css'
import {browserHistory} from 'react-router'
import FriendLink from "../FriendLink/FriendLink";
import axios from 'axios'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const moment = require('moment');

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [], //issue数据
            issueDialogVisible: false,
            playLists: [
                {
                    "id": 67234232,
                    "name": "[剑三]那些年感动你我的剑网三剧情歌",
                    "coverImgUrl": "https://p1.music.126.net/f3rebUQSfJvjygwc4lkCOg==/2889516558443719.jpg",
                    "creator": {
                        "nickname": "luluuuuuu",
                        "userId": 61721769,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 41,
                    "userId": 61721769,
                    "playCount": 1681770,
                    "bookCount": 77052,
                    "highQuality": false
                },
                {
                    "id": 365889122,
                    "name": "剑网3剧情歌（史上最全版本）",
                    "coverImgUrl": "https://p1.music.126.net/DmRqhn8DyeNaM2JxJNCbqQ==/1372190519281408.jpg",
                    "creator": {
                        "nickname": "听得我头晕",
                        "userId": 135329593,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 517,
                    "userId": 135329593,
                    "playCount": 468835,
                    "bookCount": 27115,
                    "highQuality": false
                }, {
                    "id": 473302107,
                    "name": "【剑网三】剧情歌/带念白歌曲",
                    "coverImgUrl": "https://p1.music.126.net/sU3NyowFrw8LRHC3xA6qVg==/19038043835130164.jpg",
                    "creator": {
                        "nickname": "陌路欲痕",
                        "userId": 111270286,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 246,
                    "userId": 111270286,
                    "playCount": 1463434,
                    "bookCount": 63155,
                    "highQuality": false
                }, {
                    "id": 87033526,
                    "name": "剑三 · 剑网三 · 场景背景音乐 · 原声",
                    "coverImgUrl": "https://p1.music.126.net/u0qJrqj-kqEf1Od8A3eEvw==/7975857348854520.jpg",
                    "creator": {
                        "nickname": "霞狮子",
                        "userId": 55791041,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 118,
                    "userId": 55791041,
                    "playCount": 356170,
                    "bookCount": 29619,
                    "highQuality": false
                }, {
                    "id": 28421950,
                    "name": "【剑网三】谨纪念于红尘中相遇的剑侠情缘.",
                    "coverImgUrl": "https://p1.music.126.net/Rg15VvRP2LDnLsUPJTb3TA==/6622358534617479.jpg",
                    "creator": {
                        "nickname": "乌玉玦",
                        "userId": 33043066,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": ["古风"],
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 369,
                    "userId": 33043066,
                    "playCount": 1708186,
                    "bookCount": 61892,
                    "highQuality": false
                }, {
                    "id": 95040433,
                    "name": "【剑网三】走过三生路，终老恶人谷",
                    "coverImgUrl": "https://p1.music.126.net/o6i6TPpgHJrXJr1OsXeiRQ==/7925279814117029.jpg",
                    "creator": {
                        "nickname": "雀桐歌",
                        "userId": 30555605,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 280,
                    "userId": 30555605,
                    "playCount": 1382882,
                    "bookCount": 43778,
                    "highQuality": false
                }, {
                    "id": 370753398,
                    "name": "剑网三原声背景音乐",
                    "coverImgUrl": "https://p1.music.126.net/RdgbA_rvNA7wdSaAi-gs6w==/7869204720725988.jpg",
                    "creator": {
                        "nickname": "高Kevin-308",
                        "userId": 258005052,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 176,
                    "userId": 258005052,
                    "playCount": 267,
                    "bookCount": 16,
                    "highQuality": false
                }, {
                    "id": 491836135,
                    "name": "剑网三战歌攻防向激情燃收录",
                    "coverImgUrl": "https://p1.music.126.net/bmXBg3cRfVLRF-BYAjIGwg==/109951163052778560.jpg",
                    "creator": {
                        "nickname": "枕下枕上皆无书",
                        "userId": 116350512,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 38,
                    "userId": 116350512,
                    "playCount": 897,
                    "bookCount": 16,
                    "highQuality": false
                }, {
                    "id": 42225943,
                    "name": "那些 剑网三的 烽烟战火·爱恨情仇",
                    "coverImgUrl": "https://p1.music.126.net/Y_BtNUGf4ql5PLDZnNPQmA==/109951163231810267.jpg",
                    "creator": {
                        "nickname": "琼川川川川川川川你猜有几个川",
                        "userId": 47087469,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 236,
                    "userId": 47087469,
                    "playCount": 469126,
                    "bookCount": 22334,
                    "highQuality": false
                }, {
                    "id": 56666859,
                    "name": "【剑网三攻防】浩气盟幸甚有你！<激燃>",
                    "coverImgUrl": "https://p1.music.126.net/n01hMLqnwfE927QxNMuwFA==/3265549550130806.jpg",
                    "creator": {
                        "nickname": "十万只喵喵喵",
                        "userId": 18949569,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 57,
                    "userId": 18949569,
                    "playCount": 299902,
                    "bookCount": 14053,
                    "highQuality": false
                }, {
                    "id": 312769510,
                    "name": "剑网三十大（雾）虐心剧情歌",
                    "coverImgUrl": "https://p1.music.126.net/fvY6yCSqrWyjS9bBiqI7Hw==/1393081241058411.jpg",
                    "creator": {
                        "nickname": "蜜瓜米菌",
                        "userId": 122377390,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 13,
                    "userId": 122377390,
                    "playCount": 128787,
                    "bookCount": 3103,
                    "highQuality": false
                }, {
                    "id": 62277842,
                    "name": "【剑网三·剑三】天光乍破—暮雪白头",
                    "coverImgUrl": "https://p1.music.126.net/RHOzIjwBgSfknEHEsEI8ag==/7710875046240346.jpg",
                    "creator": {
                        "nickname": "南衣的小胡桃",
                        "userId": 61176028,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 308,
                    "userId": 61176028,
                    "playCount": 519455,
                    "bookCount": 13234,
                    "highQuality": false
                }, {
                    "id": 4387004,
                    "name": "【剑网三】剑侠情缘网络版3游戏音乐",
                    "coverImgUrl": "https://p1.music.126.net/zOFIU6y3fNurJe0sxn5mFw==/2919203372284051.jpg",
                    "creator": {
                        "nickname": "berylliu",
                        "userId": 3341021,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 112,
                    "userId": 3341021,
                    "playCount": 353671,
                    "bookCount": 17788,
                    "highQuality": false
                }, {
                    "id": 62737112,
                    "name": "BGM-剑网三恶人攻防（燃）",
                    "coverImgUrl": "https://p1.music.126.net/wbu3urexc5T8nfmgjHbfsQ==/1385384656364894.jpg",
                    "creator": {
                        "nickname": "仲夏俊",
                        "userId": 45789470,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 99,
                    "userId": 45789470,
                    "playCount": 341194,
                    "bookCount": 13984,
                    "highQuality": false
                }, {
                    "id": 2018703158,
                    "name": "那些感动你我的剑网三",
                    "coverImgUrl": "https://p1.music.126.net/KSx4y8fBLHg7Z4QetJjkGw==/19008357021599015.jpg",
                    "creator": {
                        "nickname": "你的璃月qwq",
                        "userId": 315994415,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 47,
                    "userId": 315994415,
                    "playCount": 5236,
                    "bookCount": 509,
                    "highQuality": false
                }, {
                    "id": 29272414,
                    "name": "《剑网三》攻防精选大碟",
                    "coverImgUrl": "https://p1.music.126.net/9lMVRpyI6z9H-Z5g68veAw==/2531075771153854.jpg",
                    "creator": {
                        "nickname": "同福里的猫",
                        "userId": 3129032,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 44,
                    "userId": 3129032,
                    "playCount": 808666,
                    "bookCount": 32521,
                    "highQuality": false
                }, {
                    "id": 51164271,
                    "name": "回不去的剑网三--自用",
                    "coverImgUrl": "https://p1.music.126.net/mZRR29FQv6P_d4MM6XPjqg==/2882919489142204.jpg",
                    "creator": {
                        "nickname": "隼游悠悠悠",
                        "userId": 33119253,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 378,
                    "userId": 33119253,
                    "playCount": 430620,
                    "bookCount": 14404,
                    "highQuality": false
                }, {
                    "id": 58348016,
                    "name": "剑网三 背景音乐 官方配音",
                    "coverImgUrl": "https://p1.music.126.net/yDaFVQwYeQKMy7mciZ0S8g==/3265549538154051.jpg",
                    "creator": {
                        "nickname": "芳准",
                        "userId": 34136343,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 123,
                    "userId": 34136343,
                    "playCount": 28201,
                    "bookCount": 878,
                    "highQuality": false
                }, {
                    "id": 2109670588,
                    "name": "《剑网三》那些年感动你我的剑三剧情歌",
                    "coverImgUrl": "https://p1.music.126.net/_SjG76jDCc1vT8_8vYPbHg==/109951162818478976.jpg",
                    "creator": {
                        "nickname": "起个名字要半条命",
                        "userId": 559062645,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 228,
                    "userId": 559062645,
                    "playCount": 4580,
                    "bookCount": 177,
                    "highQuality": false
                }, {
                    "id": 2141935137,
                    "name": "剑网三搞笑歌曲集",
                    "coverImgUrl": "https://p1.music.126.net/Jq3oZYisFNar2eSG4XhRjg==/3409585558713986.jpg",
                    "creator": {
                        "nickname": "初壹乐章",
                        "userId": 567116949,
                        "userType": 0,
                        "authStatus": 0,
                        "expertTags": null,
                        "experts": null
                    },
                    "subscribed": false,
                    "trackCount": 114,
                    "userId": 567116949,
                    "playCount": 1300,
                    "bookCount": 37,
                    "highQuality": false
                }],
            songLists: [
                {
                    "id": 3280167,
                    "name": "热门华语276",
                    "picUrl": "https://p4.music.126.net/m1dn9beWdx-XY3ihksrmEw==/3379898744233514.jpg",
                    "singer": "嘟嘟"
                },
                {
                    "id": 36179829,
                    "name": "追光者",
                    "picUrl": "https://p4.music.126.net/6x6bCsbTsBKydOtdUoIMAQ==/109951163024132338.jpg",
                    "singer": "嘟嘟"
                },
                {
                    "id": 71714571,
                    "name": "沧海一声笑",
                    "picUrl": "https://p4.music.126.net/_FqdSnOm1xmHmNffNONbZw==/109951163392997165.jpg",
                    "singer": "嘟嘟"

                },
                {
                    "id": 3280167,
                    "name": "热门华语276",
                    "picUrl": "https://p4.music.126.net/m1dn9beWdx-XY3ihksrmEw==/3379898744233514.jpg",
                    "singer": "嘟嘟"
                },
                {
                    "id": 36179829,
                    "name": "追光者",
                    "picUrl": "https://p4.music.126.net/6x6bCsbTsBKydOtdUoIMAQ==/109951163024132338.jpg",
                    "singer": "嘟嘟"
                },
                {
                    "id": 71714571,
                    "name": "沧海一声笑",
                    "picUrl": "https://p4.music.126.net/_FqdSnOm1xmHmNffNONbZw==/109951163392997165.jpg",
                    "singer": "嘟嘟"
                },
                {
                    "id": 3280167,
                    "name": "热门华语276",
                    "picUrl": "https://p4.music.126.net/m1dn9beWdx-XY3ihksrmEw==/3379898744233514.jpg",
                    "singer": "嘟嘟"
                },
                {
                    "id": 36179829,
                    "name": "追光者",
                    "picUrl": "https://p4.music.126.net/6x6bCsbTsBKydOtdUoIMAQ==/109951163024132338.jpg",
                    "singer": "嘟嘟"
                },
                {
                    "id": 71714571,
                    "name": "沧海一声笑",
                    "picUrl": "https://p4.music.126.net/_FqdSnOm1xmHmNffNONbZw==/109951163392997165.jpg",
                    "singer": "嘟嘟"
                },
                {
                    "id": 3280167,
                    "name": "热门华语276",
                    "picUrl": "https://p4.music.126.net/m1dn9beWdx-XY3ihksrmEw==/3379898744233514.jpg",
                },
                {
                    "id": 36179829,
                    "name": "追光者",
                    "picUrl": "https://p4.music.126.net/6x6bCsbTsBKydOtdUoIMAQ==/109951163024132338.jpg",
                    "singer": "嘟嘟"
                },
                {
                    "id": 71714571,
                    "name": "沧海一声笑",
                    "picUrl": "https://p4.music.126.net/_FqdSnOm1xmHmNffNONbZw==/109951163392997165.jpg",
                    "singer": "嘟嘟"

                }
            ],
            test:null,
            songList:[{
                "song_id":"123"

            },
                {
                    "song_id":"123"

                }
            ],
            bannerImages: ["http://wsing.bssdl.kugou.com/08bb2b3f6aef64873451b604670ee040.jpg", "http://wsing.bssdl.kugou.com/eccdba1f5eb5aede01ae2da1cfaa93a9.jpg", "http://wsing.bssdl.kugou.com/f766d67e07b1a68f421db619fcc945e0.jpg"],
            playListImages: ["https://p1.music.126.net/0qa7W8CGaSix-ot5g_JpIQ==/6009930558058987.jpg", "https://p1.music.126.net/untJnGtvu2B7ZEUBuiz6Tg==/19098516974530745.jpg", "https://p1.music.126.net/jFQPfhsoQV_f8516DYdlIQ==/18600438209061477.jpg"],
        }

    }

    playListsClick(playListId) {
        this.props.history.push('/playList/' + playListId)

    }

    songClick(songId) {
        console.log("233"+songId)
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

    componentWillMount() {

    }

    componentDidMount() {
        //向后端请求数据，获取推荐歌曲信息
        axios.get('/api/getGlorySong', {
            params: {

            }
        }).then((res) => {
            this.setState({
                songList: res.data.data
            }, () => {
                console.log(res.data.data);
            });
        }).catch((error) => {
            console.log("error:" + error)
        });
    }


    render() {
        return (
            <div>
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
                                                        <img src={this.state.bannerImages[index]}/>
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
                <div className="playList">
                    <p className="play-list-title">Glory歌单</p>
                    <div>
                        <Carousel autoplay={false} arrow="always" height="360px">
                            {
                                [1, 2].map((item, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <div className="listContent">
                                                <Layout.Row gutter="20">
                                                    {[1, 2, 3, 4].map((playListItem, playListIndex) => {
                                                            return (
                                                                <Layout.Col key={playListIndex} span={6} offset={0}>
                                                                    <Card bodyStyle={{padding: 0}}>
                                                                        <div className="card-img"
                                                                             onClick={this.playListsClick.bind(this, this.state.playLists[index * 4 + playListIndex].id)}>
                                                                            <img
                                                                                src={this.state.playLists[index * 4 + playListIndex].coverImgUrl}
                                                                                className="image"/>
                                                                        </div>
                                                                        <div>
                                                                            <p className="card-item-name">{this.state.playLists[index * 4 + playListIndex].name}</p>
                                                                            <div className="count-info">
                                                                                <i className="el-icon-caret-right card-item-count">{this.state.playLists[index * 4 + playListIndex].playCount / 10000}
                                                                                    万</i>
                                                                                <i className="el-icon-star-on card-item-count">{this.state.playLists[index * 4 + playListIndex].bookCount}</i>
                                                                            </div>
                                                                        </div>
                                                                    </Card>
                                                                </Layout.Col>
                                                            )

                                                        }
                                                    )}


                                                </Layout.Row>
                                            </div>
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>

                <div className="song-list">
                    <p className="song-list-title">为你推荐</p>
                    <div>
                        <div className="listContent">
                            <Layout.Row>
                                {[1, 2,3].map((songListItem, songListIndex) => {
                                        return (
                                            <Layout.Col className="song-col" key={songListIndex} span={6} offset={0}>
                                                    <div  className="song-img-div"
                                                          onClick={this.songClick.bind(this, this.state.songList[songListIndex].song_id)}>
                                                        <img src={this.state.songList[songListIndex].pic_url}
                                                             className="song-image"/>
                                                        <p className="song-name">{this.state.songList[songListIndex].song_name}</p>
                                                        <p className="song-singer">{this.state.songList[songListIndex].singer}</p>
                                                    </div>

                                            </Layout.Col>
                                        )

                                    }
                                )}


                            </Layout.Row>
                        </div>
                    </div>
                </div>

                <div className="home-friend">
                    <div>
                        <FriendLink/>
                    </div>
                </div>
            </div> /**end**/


        )
    }

}



