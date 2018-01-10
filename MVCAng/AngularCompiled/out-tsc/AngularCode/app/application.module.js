"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_component_1 = require("./Components/Home/home.component");
var sharing_component_1 = require("./Components/Sharing/sharing.component");
var html_outlet_1 = require("./html-outlet");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var common_service_1 = require("./Services/Common/common.service");
var fakeajax_service_1 = require("./Services/Common/fakeajax.service");
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var common_1 = require("@angular/common");
var ApplicationModule = (function () {
    function ApplicationModule() {
    }
    return ApplicationModule;
}());
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
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=application.module.js.map