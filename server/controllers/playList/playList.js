const moment = require('moment');
const axios = require('axios')

const sequelize = require('../../sequelize');
//导入数据模型
const song = sequelize.import('../../models/song');

/**
 * 异步请求函数,查询数据库
 * @returns {Promise<any>}
 *
 */
const doGetPlayList = function (playListId) {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        /**
         *  向https://api.imjad.cn/cloudmusic/请求歌单数据
         *
         */
        axios.get("https://api.imjad.cn/cloudmusic/", {
            params: {
                'type': 'playlist',
                'id': playListId,
                'limit': 100
            }
        }).then((res) => {
            resolve(res.data)
            //addSongToDataBaseByList(res.data)

        }).catch((error) => {
            console.log("error:" + error)
            reject(error)
        });

    });
    return p;
}

function addSongToDataBaseByList(playListData) {
    /**
     * add song
     */
    console.log("add start ")
    playListData.playlist.tracks.map((el, index) => {

        song.create({
                song_id: el.id,
                song_name: el.name,
                singer: el.ar.map((el, index) => {  return el.name}).join("&"),//循环拼接歌手
                pic_url: el.al.picUrl,
                is_glory: 0
            }
        ).then(() => {
            console.log('添加歌曲到数据库完成--' + index);
        }).catch(err => {
            console.log('添加歌曲到数据库出错：--' + index + ':--' + err);
        })
    });
    console.log("add end")

}

const getPlayList = async function (playListId) {
    try {
        var data = await doGetPlayList(playListId);
        return data
    } catch (err) {
        console.log("出错信息aaa:" + err)
        return err
    }
}




module.exports = {
    async getPlayList(ctx) {
        let playListId = ctx.request.query.playListId;
        console.log(playListId)
        var value = await getPlayList(playListId);
        console.log(playListId)
        ctx.body = {
            success: true,
            data: value

        }
    },

    /**
     * 查询category_name
     */
    async getAllCategoryName(ctx) {
        await getAllCategoryName();
        ctx.body = {
            success: true,
            data: data
        }
    },

}