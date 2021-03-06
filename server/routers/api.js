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
    .get('/getSongDetail',songController.getSongDetail)
    .get('/getLyric',songController.getLyric)
    .get('/getComments',songController.getComments)
    //.post('/addCategoryInfo',categoryInfoController.addCategoryInfo)
module.exports = routers;
