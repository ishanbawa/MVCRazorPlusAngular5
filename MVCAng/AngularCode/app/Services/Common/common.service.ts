import { Injectable } from '@angular/core';
import { MockBackend, MockConnection } from "@angular/http/testing";
import { Http } from '@angular/http';

@Injectable()
export class CommonService {

    constructor(private http: Http) {

    }

    ConfigurePageData(Component: any, HtmlElementID = 'RootPageHtml') {


        let element = document.getElementById(HtmlElementID);
        let Html = element.innerHTML;
        let ModelObject = [];

        Component.MyHtml = this.CorrectPossibleIssuesNgHtml(Html);

        let json = eval('RootPageDataList');

        for (var i = 0; i < 100; i++) {
            try {
                ModelObject.push(JSON.parse(json[i]));
            } catch (e) {
                break;
            }
        }

        try {
            Component.MyModels = ModelObject;
        } catch (e) {

        }
        try {
            Component.MyModel = ModelObject[0];
        } catch (e) {

        }
        
    }

    CorrectPossibleIssuesNgHtml(Html: string)
    {

        Html = Html.trim();
        Html = Html.replace(/ngmodel/g, 'ngModel');

        return Html;
    }

    ShowNativeAlert(Message) {
        alert(Message);
    }

}
