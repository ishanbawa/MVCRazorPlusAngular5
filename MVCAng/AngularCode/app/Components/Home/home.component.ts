import { Component, OnInit, Inject, ViewContainerRef, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HtmlOutlet } from '../../html-outlet';
import { NgModule, ChangeDetectorRef, NgZone } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { DynamicEnabler } from '../../dynamic-enabler';
import { Http } from '@angular/http';
import { CommonService } from "../../Services/Common/common.service";
import { Observable } from "rxjs/Observable";
import { BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements DynamicEnabler, OnInit {

    constructor(public commonService: CommonService, private http: Http) {

    }

    Scope = this;
    MyHtml: string;
    MyModel: HomeComponentModel;
    IsProcessed = false;
    MyModels: any[];
    Cus: string;

    ngOnInit() {

        this.SetPageData();
    }

    SetPageData() {

        this.commonService.ConfigurePageData(this);
        this.Cus = this.MyModels[1].Custom ; // Not Essential, This is To Represent That Any Number of Objects May Be Parsed.

    }

    Title: string = 'Hi I Am Home Page!!';

    open(title): void {
        this.commonService.ShowNativeAlert(title);
    }

    onRightClick(evt) {

        this.commonService.ShowNativeAlert(evt);
        return false;
    }
}


class HomeComponentModel {
    Property1: string;
    Property2: string;
}
