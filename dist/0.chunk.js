webpackJsonp([0,5],{

/***/ 1419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_routes__ = __webpack_require__(1423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_component__ = __webpack_require__(1421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__(1420);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__user_routes__["a" /* userRoutes */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
//# sourceMappingURL=C:/Users/MaRv/Documents/PPH/src/user.module.js.map

/***/ }),

/***/ 1420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_api__ = __webpack_require__(1422);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.tempRes = new __WEBPACK_IMPORTED_MODULE_3__models_api__["a" /* LoginResponse */](new __WEBPACK_IMPORTED_MODULE_3__models_api__["b" /* ResponseStatus */]('', '', ''), new __WEBPACK_IMPORTED_MODULE_3__models_api__["c" /* ResponseAgentInfo */]('', 0));
    }
    LoginComponent.prototype.login = function (formValues) {
        var _this = this;
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(function (tempRes) {
            _this.tempRes = tempRes;
            if (_this.tempRes.ResponseStatus.Status === 'Success' && _this.tempRes.ResponseAgentInfo.IdAgent != 0) {
                alert('welcome...');
                _this.authService.currentUser = {
                    id: _this.tempRes.ResponseAgentInfo.IdAgent,
                    userName: formValues.userName,
                    firstName: formValues.userName,
                    lastName: 'Test',
                    userType: 'PPH',
                    selectedSubagent: 0
                };
                _this.router.navigate(['main']);
            }
            else {
                _this.showInvalidCredentials = true;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.cancel = function () {
        this.router.navigate(['home']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(1424),
            styles: ["\n    em { float:right; color:#E05C65; padding-left:10px; }\n  "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/MaRv/Documents/PPH/src/login.component.js.map

/***/ }),

/***/ 1421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.firstName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.authService.currentUser.firstName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('[a-zA-Z].*')]);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.authService.currentUser.lastName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
            firstName: this.firstName,
            lastName: this.lastName
        });
    };
    ProfileComponent.prototype.saveProfile = function (formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['home']);
        }
    };
    ProfileComponent.prototype.validateFirstName = function () {
        return this.firstName.valid || this.firstName.untouched;
    };
    ProfileComponent.prototype.validateLastName = function () {
        return this.lastName.valid || this.lastName.untouched;
    };
    ProfileComponent.prototype.cancel = function () {
        this.router.navigate(['home']);
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(1425),
            styles: ["\n    em {float:right; color:#E05C65; padding-left: 10px;}\n    .error input {background-color:#E3C3C5;}\n    .error ::-webkit-input-placeholder { color: #999; }\n    .error ::-moz-placeholder { color: #999; }\n    .error :-moz-placeholder { color:#999; }\n    .error :ms-input-placeholder { color: #999; }\n  "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/MaRv/Documents/PPH/src/profile.component.js.map

/***/ }),

/***/ 1422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResponseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ResponseAgentInfo; });
/* unused harmony export ResponseInfo */
/* unused harmony export ReportResponse */
var LoginResponse = (function () {
    function LoginResponse(ResponseStatus, ResponseAgentInfo) {
        this.ResponseStatus = ResponseStatus;
        this.ResponseAgentInfo = ResponseAgentInfo;
    }
    return LoginResponse;
}());
var ResponseStatus = (function () {
    function ResponseStatus(Status, ResponseMethod, ResultDateTime) {
        this.Status = Status;
        this.ResponseMethod = ResponseMethod;
        this.ResultDateTime = ResultDateTime;
    }
    return ResponseStatus;
}());
var ResponseAgentInfo = (function () {
    function ResponseAgentInfo(Agent, IdAgent) {
        this.Agent = Agent;
        this.IdAgent = IdAgent;
    }
    return ResponseAgentInfo;
}());
var ResponseInfo = (function () {
    function ResponseInfo(SSport, ListSport, ListExposure, CurrencyCombo, _bErrorCode, _sErrorMsg, _sErrorMsgKey, _sErrorMsgParams) {
        this.SSport = SSport;
        this.ListSport = ListSport;
        this.ListExposure = ListExposure;
        this.CurrencyCombo = CurrencyCombo;
        this._bErrorCode = _bErrorCode;
        this._sErrorMsg = _sErrorMsg;
        this._sErrorMsgKey = _sErrorMsgKey;
        this._sErrorMsgParams = _sErrorMsgParams;
    }
    return ResponseInfo;
}());
var ReportResponse = (function () {
    function ReportResponse(ResponseStatus, ResponseInfo) {
        this.ResponseStatus = ResponseStatus;
        this.ResponseInfo = ResponseInfo;
    }
    return ReportResponse;
}());
//# sourceMappingURL=C:/Users/MaRv/Documents/PPH/src/api.js.map

/***/ }),

/***/ 1423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_component__ = __webpack_require__(1421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__(1420);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRoutes; });


var userRoutes = [
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_0__profile_component__["a" /* ProfileComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_component__["a" /* LoginComponent */] }
];
//# sourceMappingURL=C:/Users/MaRv/Documents/PPH/src/user.routes.js.map

/***/ }),

/***/ 1424:
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\r\n<hr>\r\n<div class=\"col-md-4\">\r\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\" autocomplete=\"off\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"userName\">User Name:</label>\r\n      <em *ngIf=\"loginForm.controls.userName?.invalid && (loginForm.controls.userName?.touched || mouseoverLogin)\">Required</em>\r\n      <input (ngModel)=\"username\" name=\"userName\" required id=\"userName\" type=\"text\" class=\"form-control\" placeholder=\"User Name...\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password:</label>\r\n      <em *ngIf=\"loginForm.controls.password?.invalid  && (loginForm.controls.password?.touched || mouseoverLogin)\">Required</em>\r\n      <input (ngModel)=\"password\" name=\"password\" required id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password...\"\r\n      />\r\n    </div>\r\n\r\n    <span (mouseenter)=\"mouseoverLogin=true\" (mouseleave)=\"mouseoverLogin=false\">\r\n      <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn btn-default\">Login</button>\r\n    </span>\r\n    <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"showInvalidCredentials\">\r\n  Invalid Credentials\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 1425:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Edit Your Profile </h1>\r\n  <hr>\r\n  <div class=\"col-md-4\">\r\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"saveProfile(profileForm.value)\" autocomplete=\"off\" novalidate>\r\n      <div class=\"form-group\" [ngClass]=\"{'error' : !validateFirstName() }\">\r\n        <label for=\"firstName\">First Name:</label>\r\n        <em *ngIf=\"!validateFirstName() && profileForm.controls.firstName.errors.required\">Required</em>\r\n        <em *ngIf=\"!validateFirstName() && profileForm.controls.firstName.errors.pattern\">Must start with a letter</em>\r\n        <input formControlName=\"firstName\" id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"First Name...\" />\r\n      </div>\r\n      <div class=\"form-group\"  [ngClass]=\"{'error' : !validateLastName() }\">\r\n        <label for=\"lastName\">Last Name:</label>\r\n        <em *ngIf=\"!validateLastName()\">Required</em>\r\n        <input formControlName=\"lastName\" id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Last Name...\" />\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-default\">Save</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n    </form>\r\n  <div>\r\n</div>"

/***/ })

});
//# sourceMappingURL=0.bundle.map