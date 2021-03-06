"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by consultadd on 1/8/16.
 */
var core_1 = require("@angular/core");
var mock_User_1 = require('./mock_User');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Registration";
        this.User = mock_User_1.user;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n     <h1>{{title}}</h1>\n  <nav>\n    <a [routerLink]=\"['/login']\" routerLinkActive=\"active\">SignIn</a>\n    <a [routerLink]=\"['/register']\" routerLinkActive=\"active\">SignUp</a>\n    </nav>\n     <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map