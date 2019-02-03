import { AfterViewInit, ContentChildren, Directive, EventEmitter, Input, OnChanges, OnDestroy, Output, QueryList, SimpleChanges } from "@angular/core";
import { MatTabGroup } from "@angular/material/tabs";
import { Subscription } from "rxjs";
import { TabNameDirective } from "../tab-name.directive/tab-name.directive";

@Directive({
    selector: "[selectedTabName]",
})
export class SelectedTabNameDirective implements OnChanges, OnDestroy, AfterViewInit {
    @Input()
    public selectedTabName = "";
    @Output()
    public selectedTabNameChange: EventEmitter<string> = new EventEmitter<string>();
    @ContentChildren(TabNameDirective)
    private tabCollection: QueryList<TabNameDirective> | undefined;
    private subscriptions: Subscription[] = [];

    constructor(private matTabGroup: MatTabGroup) {

    }

    public get activeTabName(): string | undefined {
        const tab: TabNameDirective | undefined = this.activeTab;
        return tab ? tab.tabName : undefined;
    }

    public get activeTab(): TabNameDirective | undefined {
        let result: TabNameDirective | undefined;
        if (this.tabCollection) {
            result = this.tabCollection.reduce((acc: TabNameDirective | undefined, tab: TabNameDirective): TabNameDirective | undefined =>
                tab.active ? tab : acc, undefined);
        }
        return result;
    }

    public ngAfterViewInit(): void {
        if (this.tabCollection) {
            this.subscriptions = [
                this.tabCollection.changes.subscribe((): void => this.preselectTab()),
                this.matTabGroup.selectedTabChange.subscribe((): void => this.emitTabChange()),
            ];
            this.preselectTab();
        }
    }

    public ngOnChanges({ selectedTabName }: SimpleChanges): void {
        if (selectedTabName) {
            this.preselectTab();
        }
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((s: Subscription): void => s.unsubscribe());
    }

    private preselectTab(): void {
        if (this.tabCollection) {
            const result: number | undefined = this.tabCollection.reduce((acc: number | undefined, tab: TabNameDirective, idx: number): number | undefined =>
                (tab.tabName === this.selectedTabName ? idx : acc), undefined);

            if (typeof result === "number") {
                this.matTabGroup.selectedIndex = result;
            }
        }
    }

    private emitTabChange(): void {
        const tabName: string = this.activeTabName || "";
        if (tabName) {
            this.selectedTabNameChange.emit(tabName);
        }
    }
}
