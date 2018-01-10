import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Compiler } from '@angular/core';

import { HomeComponent } from './Components/Home/home.component';
import { SharingComponent } from './Components/Sharing/sharing.component';

import { RouterModule, Routes } from '@angular/router';
import { HtmlOutlet } from './html-outlet';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ɵa } from '@angular/platform-browser-dynamic';
import { CommonService } from "./Services/Common/common.service";
import { fakeBackendProvider } from "./Services/Common/fakeajax.service";
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
 
@NgModule({
    declarations: [
        HomeComponent,
        SharingComponent,
        HtmlOutlet
    ],
    entryComponents: [
       
    ],
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
         
    ],
    exports: [
        HtmlOutlet,
        HomeComponent,
        SharingComponent,
        FormsModule,
        HttpModule
    ],
    providers: [
        CommonService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,        
    ],
    bootstrap: []
})
export class ApplicationModule {

}


