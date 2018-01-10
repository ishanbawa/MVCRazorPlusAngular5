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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var common_service_1 = require("../../Services/Common/common.service");
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
    return SharingComponent;
}());
SharingComponent = __decorate([
    core_1.Component({
        selector: 'sharing-content',
        templateUrl: './sharing.component.html',
        styleUrls: ['./sharing.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef, http_1.Http, common_service_1.CommonService])
], SharingComponent);
exports.SharingComponent = SharingComponent;
var SharingComponentModel = (function () {
    function SharingComponentModel() {
    }
    return SharingComponentModel;
}());
//# sourceMappingURL=sharing.component.js.map