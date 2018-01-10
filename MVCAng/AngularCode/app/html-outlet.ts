import {
    Component,
    Directive,
    NgModule,
    Input,
    ViewContainerRef,
    Compiler,
    Injectable,
    ReflectiveInjector,
    Injector,
    Type,
    ComponentFactoryResolver
} from '@angular/core';

import { CommonModule } from '@angular/common';
 
import { GlobalVars } from "../app/Global/global-vars";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "../app/app.module";
import { ComponentFactory } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { ApplicationModule } from './application.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Directive({
    selector: 'html-outlet'
})
export class HtmlOutlet {
    @Input() html: string;
    @Input() Instance: any;

    rootViewContainer :any;

    constructor(private vcRef: ViewContainerRef, private compiler: Compiler, private componentFactoryResolver: ComponentFactoryResolver) {
         
    }

    ngOnChanges() {
        const html = this.html;
        const Instance = this.Instance;
        if (!html) return;
        
        @Component({
            selector: 'dynamic-comp',
            template: html
        })
        class DynamicHtmlComponent {
            public textfield;
            public datefield;
            public Scope: any = Instance;
        };
         
        // Added NgbModule and FormsModule to import section

        @NgModule({
            imports: [
                FormsModule,
                HttpModule,
                CommonModule,
                ApplicationModule,
            ],
            declarations: [DynamicHtmlComponent]
        })
        class DynamicHtmlModule { }
          

        this.compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
            .then(factory => {

                //debugger;

                const moduleRef = factory.ngModuleFactory.create(this.vcRef.parentInjector);

                const compFactory = factory.componentFactories.find(x => x.componentType === DynamicHtmlComponent);

                const cmpRefnEW = this.vcRef.createComponent(compFactory, 0, moduleRef.injector);

                Object.keys(cmpRefnEW.instance.Scope).forEach(key => cmpRefnEW.instance[key] = cmpRefnEW.instance.Scope[key]);

                cmpRefnEW.instance.__proto__ = cmpRefnEW.instance.Scope.__proto__;

                (cmpRefnEW.instance as any).IsProcessed = true;
                 
                //debugger;

            });
    }
}

