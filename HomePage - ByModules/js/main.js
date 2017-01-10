require.config({
    paths: {
        'jquery' : '../lib/jquery/jquery.min',
        'css' : '../lib/require/css.min',
        'angular': '../lib/angular-1.5.6/angular.min',
        'uiRoute' : '../lib/angular-1.5.6/angular-ui-router.min',
        'routes' : 'routes',
        'app' : 'app',
        // 'ocLazyLoad' : '../lib/ocLazyLoad-master/ocLazyLoad.min',
        'bootstrap' : '../lib/bootstrap/js/bootstrap.min',
        'Controller' : 'controllers/Controllers',
        'Directive' : 'directives/Directive',
        'Service' : 'services/Services',
        'domReady' : '../lib/domReady',
        'page1Ctrl' : 'controller/page1Ctrl'
    },
    shim: {
        'jquery' : {
            init : function() {
                return jquery.noConflict(true);
            },
            exports : 'jquery'
        },
        'bootstrap' : {
            deps : [ 'jquery', 'css!../lib/bootstrap/css/bootstrap.min.css' ],
            exports : "$.fn.popover"
        },
        'angular' : {'exports' : 'angular'},
        'uiRoute' : {
          deps : ['angular']
        },
        /*'ocLazyLoad': {
          deps : ['angular']
        },*/
        'page1Ctrl' :{
            deps : ['services/page1Service']
        }
    },
    deps: [
        "angular",
        "bootstrap"
    ],
    //开发专用，阻止浏览器缓存
    urlArgs: "bust=" +  (new Date()).getTime(),
    //在放弃加载一个脚本之前等待的秒数。设为0禁用等待超时。默认为7秒。
    waitSeconds: 0
});

require(['angular',
         'app',
         'routes',
         'uiRoute',
         'Controller',
         'Service',
         'Directive'
], function (angular) {
    require(['domReady!'], function (document) {  
      angular.bootstrap(document, ['app']);
    })
});
