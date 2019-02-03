import { Directive, Input } from "@angular/core";
import { MatTab } from "@angular/material/tabs";

@Directive({
    selector: "[tabName]",
})
export class TabNameDirective {
    @Input()
    public tabName = "";

    constructor(public tab: MatTab) {

    }

    public get active(): boolean {
        return this.tab.isActive;
    }
}
