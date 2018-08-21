
const moment = require('moment');
const Sequelize = require("sequelize")

const axios = require('axios')
const sequelize = require('../../sequelize');
//导入数据模型
const song = sequelize.import('../../models/song');

const Op = Sequelize.Op;

/**
 * 异步请求函数,查询数据库
 * @returns {Promise<any>}
 */
const doQueryAllSong = function () {
    var p = new Promise(function (resolve, reject) {

        song.findAll(
            {
                limit: 50
            }
        ).then(song => {
            console.log("sequelize:" + song)
            resolve(song)
        })

    });
    return p;


};

const getAllSong = async function () {
    try {
        return await doQueryAllSong(); //设置字段值
        //如果返回 为何拿不到返回值
        //return value
    } catch (err) {
        console.log("getAllsongInfo出错了:" + err)
    }
}




const doQueryGlorySong = function (data) {
    var p = new Promise(function (resolve, reject) {
        /**
         *先同步创建表
         */
        sequelize.sync({force: false});
        song.findAll(
            {
                where: {
                    is_glory:1,
                }

            }
        ).then(song => {
            console.log("sequelize:" + song);
            resolve(song)
        })


    });
    return p;


}

const queryGlorySong = async function () {
    try {
        return await doQueryGlorySong()
    } catch (err) {
        console.log("queryGlorySong:" + err)
    }

}
/**
 * 获取歌曲详情信息
 * @param songId
 * @returns {Promise}
 */
const doGetSongDetail = function (songId) {

    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        /**
         *  向https://api.imjad.cn/cloudmusic/请求歌单数据
         *
         */
        axios.get("https://api.imjad.cn/cloudmusic/", {
            params: {
                'type': 'detail',
                'id': songId,
            }
        }).then((res) => {
            resolve(res.data)

        }).catch((error) => {
            console.log("error:" + error)
            reject(error)
        });

    });
    return p;
};
/**
 * 获取歌词信息
 * @param songId
 * @returns {Promise}
 */
const doGetLyric = function (songId) {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        /**
         *  向https://api.imjad.cn/cloudmusic/请求歌词数据
         *
         */
        axios.get("https://api.imjad.cn/cloudmusic/", {
            params: {
                'type': 'lyric',
                'id': songId,
            }
        }).then((res) => {
            resolve(res.data)

        }).catch((error) => {
            console.log("doGetLyric-error:" + error)
            reject(error)
        });

    });
    return p;
};
/**
 *
 * @param songId
 * @returns {Promise}
 */
const doGetComments = function (songId) {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        /**
         *  向https://api.imjad.cn/cloudmusic/请求数据
         *
         */
        axios.get("https://api.imjad.cn/cloudmusic/", {
            params: {
                'type': 'comments',
                'id': songId,
                'limit':20
            }
        }).then((res) => {
            resolve(res.data)

        }).catch((error) => {
            console.log("doGetComments-error:" + error)
            reject(error)
        });

    });
    return p;
};


module.exports = {
    /**
     *获取歌词信息
     */
    async getLyric(ctx) {
        let songId = ctx.request.query.songId;
        let data = await doGetLyric(songId);
        ctx.body = {
            success: true,
            data: data
        }

    },
    /**
     * 获取评论信息
     */
    async getComments(ctx) {
        let songId = ctx.request.query.songId;
        let data = await doGetComments(songId);
        ctx.body = {
            success: true,
            data: data
        }

    },

    /**
     *获取歌曲详情信息
     */
    async getSongDetail(ctx) {
        let songId = ctx.request.query.songId;
        let data = await doGetSongDetail(songId);
        ctx.body = {
            success: true,
            data: data
        }

    },
    /**
     * 查询所有歌曲列表
     * @param ctx
     * @returns {Promise.<void>}
     */
    async queryAllSong(ctx) {
        let data = await getAllSong();
        ctx.body = {
            success: true,
            data: data
        }

    },

    /**
     * 根据查询条件查询工单数据
     */
    async queryGlorySong(ctx) {
        let data = await queryGlorySong();

        ctx.body = {
            success: true,
            data: data
        }
    }
}