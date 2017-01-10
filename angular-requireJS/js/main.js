require.config({
    paths: {
        'angular': '../lib/angular-1.5.6/angular.min',
        'uiRoute' : '../lib/angular-ui-router.min',
        'routes' : 'routes'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'uiRoute' : {
          deps : ['angular']
        }
    },
    deps: [
        "angular"
    ],
    //开发专用，阻止浏览器缓存
    urlArgs: "bust=" +  (new Date()).getTime(),
    //在放弃加载一个脚本之前等待的秒数。设为0禁用等待超时。默认为7秒。
    waitSeconds: 0
});

require(['angular',
         'app',
         'routes',
         'uiRoute'
], function (angular) {
    angular.bootstrap(document, ['app']);
});
