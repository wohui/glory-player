/**
 * restful api getUser子路由
 */

const router = require('koa-router')()
const userInfoController = require('../controllers/api');
const playListController = require('../controllers/playList/playList')
const songController = require('../controllers/song/song')
const routers = router
    .get('/getSongList',playListController.getPlayList)
    .get('/getGlorySong',songController.queryGlorySong)
    //.post('/addCategoryInfo',categoryInfoController.addCategoryInfo)
module.exports = routers;
