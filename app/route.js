"use strict";
/**
 * Created by consultadd on 1/8/16.
 */
var router_1 = require('@angular/router');
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full'
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=route.js.map