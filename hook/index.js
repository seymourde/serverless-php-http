var exec = require('child_process').exec;



async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n       __                           _ 
      / /  __ _ _ __ __ ___   _____| |
     / /  / _\` | '__/ _\` \\ \\ / / _ \\ |
    / /__| (_| | | | (_| |\\ V /  __/ |
    \\____/\\__,_|_|  \\__,_| \\_/ \\___|_|                                  
                                        `)
    console.log(`\n    Welcome to the start-laravel application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
         ACR: https://cr.console.aliyun.com/
     This application can help you quickly deploy the Laravel project:
         Full yaml configuration: https://github.com/devsapp/laravel#%E5%AE%8C%E6%95%B4yaml
         Laravel development docs : https://learnku.com/docs/laravel/8.x
     This application homepage: https://github.com/devsapp/start-laravel\n`)
        //需要执行的命令字符串
    var cli = 'ipconfig';

    exec(cli, { encoding: 'utf8' }, function(err, stdout, stderr) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('stdout' + stdout);
        console.log('stderr' + stderr);
    })
}

module.exports = {
    postInit,
    preInit
}