import { MatTabsModule } from "@angular/material/tabs";
import { NgModule } from "@angular/core";
import { SelectedTabNameDirective } from "./selected-tab-name.directive/selected-tab-name.directive";
import { TabNameDirective } from "./tab-name.directive/tab-name.directive";

@NgModule({
    imports: [
        MatTabsModule,
    ],
    declarations: [
        SelectedTabNameDirective,
        TabNameDirective,
    ],
    exports: [
        SelectedTabNameDirective,
        TabNameDirective,
    ],
})
export class MatNamedTabsModule {

}
