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
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var application_module_1 = require("./application.module");
var forms_1 = require("@angular/forms");
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
            return DynamicHtmlComponent;
        }());
        DynamicHtmlComponent = __decorate([
            core_1.Component({
                selector: 'dynamic-comp',
                template: html
            })
        ], DynamicHtmlComponent);
        ;
        // Added NgbModule and FormsModule to import section
        var DynamicHtmlModule = (function () {
            function DynamicHtmlModule() {
            }
            return DynamicHtmlModule;
        }());
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
    return HtmlOutlet;
}());
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
exports.HtmlOutlet = HtmlOutlet;
//# sourceMappingURL=html-outlet.js.map