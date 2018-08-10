
const config = require('../../config/config_pro')
const moment = require('moment');
const  {Pool} = require('pg')
const pool = new Pool(config)
const axios = require('axios')

/**
 * 异步请求函数,查询数据库
 * @returns {Promise<any>}
 *

 */
const doGetPlayList = function (playListId){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        /**
         *  向https://api.imjad.cn/cloudmusic/请求歌单数据
         *
         */

        axios.get("https://api.imjad.cn/cloudmusic/", {
            params: {
                'type':'playlist',
                'id':playListId,
                'limit':10
            }
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            console.log("error:" + error)
            reject(error)
        });

    });
    return p;
}

const getPlayList = async function(playListId){
    try {
        var data = await doGetPlayList(playListId);
        return data
    }catch (err) {
        console.log("出错信息aaa:"+err)
        return err
    }
}



/**
 *
 * @returns {Promise<any>}
 */
const doGetAllCategoryName = function (){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        pool.connect().then(client=>{
            // insert 数据
            client.query("select name from t_category_info ").then(res=>{
                var value = res.rows
                resolve(value)
                return res
            })
        })
    });
    return p;
}

const getAllCategoryName = async function(){
    try {
        data = await doGetAllCategoryName(); //设置字段
        //如果返回 为何拿不到返回值
        //return value
    }catch (err) {
        console.log("出错了啊:"+err)
    }
}




module.exports = {
    async getPlayList( ctx ) {
        let playListId=  ctx.request.query.playListId;
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
    async getAllCategoryName(ctx){
        await getAllCategoryName();
        ctx.body = {
            success: true,
            data: data
        }
    },

}