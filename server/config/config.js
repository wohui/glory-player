const  testConfig ='./config_test.js'

var config = null;
//todo 根据不同环境加载不同配置
if (1==1){
    config = require(testConfig)
}

module.exports = config;