/**
 * restful api getUser子路由
 */

const router = require('koa-router')()
const userInfoController = require('../controllers/api');
const songListController = require('../controllers/songList/songList')
const routers = router
    .get('/getSongList',songListController.getSongList)
    //.post('/addCategoryInfo',categoryInfoController.addCategoryInfo)
module.exports = routers;
