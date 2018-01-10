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
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-page',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [common_service_1.CommonService, http_1.Http])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var HomeComponentModel = (function () {
    function HomeComponentModel() {
    }
    return HomeComponentModel;
}());
//# sourceMappingURL=home.component.js.map