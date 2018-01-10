export interface DynamicEnabler {
    Scope: any;
    MyHtml: string;
    MyModel: any;
    MyModels: any[];
    IsProcessed: boolean;

    SetPageData();
}
