
const moment = require('moment');
const Sequelize = require("sequelize")


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
            console.log("sequelize:" + song)
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
 *
 * @type {{queryAllSong: (function(*): Promise), querySong: (function(*): Promise)}}
 */
module.exports = {
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