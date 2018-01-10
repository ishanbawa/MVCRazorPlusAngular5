webpackJsonp(["main"],{

/***/ "../../../../../AngularCode/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../AngularCode/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../AngularCode/app/Components/Home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AngularCode/app/Components/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n \r\n  <html-outlet [html]=\"MyHtml\" [Instance]=\"this\"></html-outlet>\r\n \r\n"

/***/ }),

/***/ "../../../../../AngularCode/app/Components/Home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var common_service_1 = __webpack_require__("../../../../../AngularCode/app/Services/Common/common.service.ts");
var HomeComponent = (function () {
    function HomeComponent(commonService, http) {
        this.commonService = commonService;
        this.http = http;
        this.Scope = this;
        this.IsProcessed = false;
        this.Title = 'Hi I Am Home Page!!';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.SetPageData();
    };
    HomeComponent.prototype.SetPageData = function () {
        this.commonService.ConfigurePageData(this);
        this.Cus = this.MyModels[1].Custom; // Not Essential, This is To Represent That Any Number of Objects May Be Parsed.
    };
    HomeComponent.prototype.open = function (title) {
        this.commonService.ShowNativeAlert(title);
    };
    HomeComponent.prototype.onRightClick = function (evt) {
        this.commonService.ShowNativeAlert(evt);
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-page',
            template: __webpack_require__("../../../../../AngularCode/app/Components/Home/home.component.html"),
            styles: [__webpack_require__("../../../../../AngularCode/app/Components/Home/home.component.css")]
        }),
        __metadata("design:paramtypes", [common_service_1.CommonService, http_1.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var HomeComponentModel = (function () {
    function HomeComponentModel() {
    }
    return HomeComponentModel;
}());


/***/ }),

/***/ "../../../../../AngularCode/app/Components/Sharing/sharing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AngularCode/app/Components/Sharing/sharing.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n \r\n  <html-outlet [html]=\"MyHtml\" [Instance]=\"this\"></html-outlet>\r\n \r\n"

/***/ }),

/***/ "../../../../../AngularCode/app/Components/Sharing/sharing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var common_service_1 = __webpack_require__("../../../../../AngularCode/app/Services/Common/common.service.ts");
var SharingComponent = (function () {
    function SharingComponent(viewContainerRef, http, commonService) {
        this.viewContainerRef = viewContainerRef;
        this.http = http;
        this.commonService = commonService;
        this.Scope = this;
        this.IsProcessed = false;
        this.Title = 'Hi I Am Authentication Module!!!';
    }
    SharingComponent.prototype.ngOnInit = function () {
        this.SetPageData();
    };
    SharingComponent.prototype.SetPageData = function () {
        this.commonService.ConfigurePageData(this);
    };
    SharingComponent.prototype.open = function (title) {
        this.commonService.ShowNativeAlert(title);
    };
    SharingComponent = __decorate([
        core_1.Component({
            selector: 'sharing-content',
            template: __webpack_require__("../../../../../AngularCode/app/Components/Sharing/sharing.component.html"),
            styles: [__webpack_require__("../../../../../AngularCode/app/Components/Sharing/sharing.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef, http_1.Http, common_service_1.CommonService])
    ], SharingComponent);
    return SharingComponent;
}());
exports.SharingComponent = SharingComponent;
var SharingComponentModel = (function () {
    function SharingComponentModel() {
    }
    return SharingComponentModel;
}());


/***/ }),

/***/ "../../../../../AngularCode/app/Services/Common/common.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
    }
    CommonService.prototype.ConfigurePageData = function (Component, HtmlElementID) {
        if (HtmlElementID === void 0) { HtmlElementID = 'RootPageHtml'; }
        var element = document.getElementById(HtmlElementID);
        var Html = element.innerHTML;
        var ModelObject = [];
        Component.MyHtml = this.CorrectPossibleIssuesNgHtml(Html);
        var json = eval('RootPageDataList');
        for (var i = 0; i < 100; i++) {
            try {
                ModelObject.push(JSON.parse(json[i]));
            }
            catch (e) {
                break;
            }
        }
        try {
            Component.MyModels = ModelObject;
        }
        catch (e) {
        }
        try {
            Component.MyModel = ModelObject[0];
        }
        catch (e) {
        }
    };
    CommonService.prototype.CorrectPossibleIssuesNgHtml = function (Html) {
        Html = Html.trim();
        Html = Html.replace(/ngmodel/g, 'ngModel');
        return Html;
    };
    CommonService.prototype.ShowNativeAlert = function (Message) {
        alert(Message);
    };
    CommonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;


/***/ }),

/***/ "../../../../../AngularCode/app/Services/Common/fakeajax.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var testing_1 = __webpack_require__("../../../http/esm5/testing.js");
function fakeBackendFactory(backend, options, realBackend) {
    // array in local storage for registered users
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // Fake Request For Getting Html For Angular Page From Within Already Loaded Page By Razor
            if (connection.request.url.startsWith('/HtmlFetch')) {
                // get parameters from post request
                var params = JSON.parse(connection.request.getBody());
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    status: 200,
                    body: params.Html
                })));
                return;
            }
            //// authenticate
            //if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
            //    // get parameters from post request
            //    let params = JSON.parse(connection.request.getBody());
            //    // find if any user matches login credentials
            //    let filteredUsers = users.filter(user => {
            //        return user.username === params.username && user.password === params.password;
            //    });
            //    if (filteredUsers.length) {
            //        // if login details are valid return 200 OK with user details and fake jwt token
            //        let user = filteredUsers[0];
            //        connection.mockRespond(new Response(new ResponseOptions({
            //            status: 200,
            //            body: {
            //                id: user.id,
            //                username: user.username,
            //                firstName: user.firstName,
            //                lastName: user.lastName,
            //                token: 'fake-jwt-token'
            //            }
            //        })));
            //    } else {
            //        // else return 400 bad request
            //        connection.mockError(new Error('Username or password is incorrect'));
            //    }
            //    return;
            //}
            //// get users
            //if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
            //    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
            //    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //        connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: users })));
            //    } else {
            //        // return 401 not authorised if token is null or invalid
            //        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
            //    }
            //    return;
            //}
            // pass through any requests not handled above
            var realHttp = new http_1.Http(realBackend, options);
            var requestOptions = new http_1.RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe(function (response) {
                connection.mockRespond(response);
            }, function (error) {
                connection.mockError(error);
            });
        }, 500);
    });
    return new http_1.Http(backend, options);
}
exports.fakeBackendFactory = fakeBackendFactory;
;
exports.fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: http_1.Http,
    useFactory: fakeBackendFactory,
    deps: [testing_1.MockBackend, http_1.BaseRequestOptions, http_1.XHRBackend]
};


/***/ }),

/***/ "../../../../../AngularCode/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AngularCode/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n<html-outlet [html]=\"MyHtml\" [Instance]=\"this\"></html-outlet>\r\n"

/***/ }),

/***/ "../../../../../AngularCode/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_service_1 = __webpack_require__("../../../../../AngularCode/app/Services/Common/common.service.ts");
var AppComponent = (function () {
    function AppComponent(commonService) {
        this.commonService = commonService;
        this.title = 'app Tms';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.SetPageData();
    };
    AppComponent.prototype.SetPageData = function () {
        this.commonService.ConfigurePageData(this, 'AngularComponent');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../AngularCode/app/app.component.html"),
            styles: [__webpack_require__("../../../../../AngularCode/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [common_service_1.CommonService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../AngularCode/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_component_1 = __webpack_require__("../../../../../AngularCode/app/app.component.ts");
var application_module_1 = __webpack_require__("../../../../../AngularCode/app/application.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            entryComponents: [],
            imports: [
                platform_browser_1.BrowserModule,
                application_module_1.ApplicationModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../AngularCode/app/application.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var home_component_1 = __webpack_require__("../../../../../AngularCode/app/Components/Home/home.component.ts");
var sharing_component_1 = __webpack_require__("../../../../../AngularCode/app/Components/Sharing/sharing.component.ts");
var html_outlet_1 = __webpack_require__("../../../../../AngularCode/app/html-outlet.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var common_service_1 = __webpack_require__("../../../../../AngularCode/app/Services/Common/common.service.ts");
var fakeajax_service_1 = __webpack_require__("../../../../../AngularCode/app/Services/Common/fakeajax.service.ts");
var testing_1 = __webpack_require__("../../../http/esm5/testing.js");
var http_2 = __webpack_require__("../../../http/esm5/http.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var ApplicationModule = (function () {
    function ApplicationModule() {
    }
    ApplicationModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent,
                sharing_component_1.SharingComponent,
                html_outlet_1.HtmlOutlet
            ],
            entryComponents: [],
            imports: [
                forms_1.FormsModule,
                http_1.HttpModule,
                common_1.CommonModule,
            ],
            exports: [
                html_outlet_1.HtmlOutlet,
                home_component_1.HomeComponent,
                sharing_component_1.SharingComponent,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                common_service_1.CommonService,
                fakeajax_service_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions,
            ],
            bootstrap: []
        })
    ], ApplicationModule);
    return ApplicationModule;
}());
exports.ApplicationModule = ApplicationModule;


/***/ }),

/***/ "../../../../../AngularCode/app/html-outlet.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var application_module_1 = __webpack_require__("../../../../../AngularCode/app/application.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var HtmlOutlet = (function () {
    function HtmlOutlet(vcRef, compiler, componentFactoryResolver) {
        this.vcRef = vcRef;
        this.compiler = compiler;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    HtmlOutlet.prototype.ngOnChanges = function () {
        var _this = this;
        var html = this.html;
        var Instance = this.Instance;
        if (!html)
            return;
        var DynamicHtmlComponent = (function () {
            function DynamicHtmlComponent() {
                this.Scope = Instance;
            }
            DynamicHtmlComponent = __decorate([
                core_1.Component({
                    selector: 'dynamic-comp',
                    template: html
                })
            ], DynamicHtmlComponent);
            return DynamicHtmlComponent;
        }());
        ;
        // Added NgbModule and FormsModule to import section
        var DynamicHtmlModule = (function () {
            function DynamicHtmlModule() {
            }
            DynamicHtmlModule = __decorate([
                core_1.NgModule({
                    imports: [
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        common_1.CommonModule,
                        application_module_1.ApplicationModule,
                    ],
                    declarations: [DynamicHtmlComponent]
                })
            ], DynamicHtmlModule);
            return DynamicHtmlModule;
        }());
        this.compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
            .then(function (factory) {
            //debugger;
            var moduleRef = factory.ngModuleFactory.create(_this.vcRef.parentInjector);
            var compFactory = factory.componentFactories.find(function (x) { return x.componentType === DynamicHtmlComponent; });
            var cmpRefnEW = _this.vcRef.createComponent(compFactory, 0, moduleRef.injector);
            Object.keys(cmpRefnEW.instance.Scope).forEach(function (key) { return cmpRefnEW.instance[key] = cmpRefnEW.instance.Scope[key]; });
            cmpRefnEW.instance.__proto__ = cmpRefnEW.instance.Scope.__proto__;
            cmpRefnEW.instance.IsProcessed = true;
            //debugger;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HtmlOutlet.prototype, "html", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HtmlOutlet.prototype, "Instance", void 0);
    HtmlOutlet = __decorate([
        core_1.Directive({
            selector: 'html-outlet'
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.Compiler, core_1.ComponentFactoryResolver])
    ], HtmlOutlet);
    return HtmlOutlet;
}());
exports.HtmlOutlet = HtmlOutlet;


/***/ }),

/***/ "../../../../../AngularCode/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../AngularCode/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../AngularCode/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../AngularCode/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../AngularCode/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map