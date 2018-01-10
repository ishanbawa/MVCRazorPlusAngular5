import { Component, OnInit, Inject, ViewContainerRef, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HtmlOutlet } from '../../html-outlet';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { DynamicEnabler } from '../../dynamic-enabler';
import { Http } from '@angular/http';
import { CommonService } from "../../Services/Common/common.service";

@Component({
    selector: 'sharing-content',
    templateUrl: './sharing.component.html',
    styleUrls: ['./sharing.component.css']
})

export class SharingComponent implements DynamicEnabler, OnInit {

    constructor(public viewContainerRef: ViewContainerRef, private http: Http, public commonService: CommonService) {

    }

    Scope = this;
    MyHtml: string;
    MyModel: SharingComponentModel;
    IsProcessed = false;
    MyModels: any[];

    ngOnInit() {

        this.SetPageData();

    }

    SetPageData() {
         
        this.commonService.ConfigurePageData(this);

    }
     
    Title: string = 'Hi I Am Authentication Module!!!';
     
    open(title): void {

        this.commonService.ShowNativeAlert(title) ;

    }
     
}
 
class SharingComponentModel {
    Type: string;
    
}
