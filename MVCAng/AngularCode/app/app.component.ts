import { Component, OnInit } from '@angular/core';
import { DynamicEnabler } from "./dynamic-enabler";
import { CommonService } from './Services/Common/common.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements DynamicEnabler, OnInit {

    constructor(public commonService: CommonService) {

    }

    ngOnInit(): void {
        this.SetPageData();
    }

    SetPageData() {

        this.commonService.ConfigurePageData(this, 'AngularComponent');

    }

    Scope: any;
    MyHtml: string;
    MyModel: any;
    MyModels: any[];
    IsProcessed: boolean;

    title = 'app Tms';

}
