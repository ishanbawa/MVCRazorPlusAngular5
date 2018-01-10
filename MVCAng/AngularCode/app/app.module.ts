import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationModule } from './application.module';
import { Http, HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { HtmlOutlet } from './html-outlet';
import { FormsModule } from '@angular/forms';
import { ɵa } from '@angular/platform-browser-dynamic';
import { fakeBackendProvider } from "./Services/Common/fakeajax.service";
import { SharingComponent } from "./Components/Sharing/sharing.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    entryComponents: [

    ],
    imports: [
        BrowserModule,
        ApplicationModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}


