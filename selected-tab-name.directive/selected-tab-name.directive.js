"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tab_name_directive_1 = require("../tab-name.directive/tab-name.directive");
var SelectedTabNameDirective = /** @class */ (function () {
    function SelectedTabNameDirective(matTabGroup) {
        this.matTabGroup = matTabGroup;
        this.selectedTabName = "";
        this.selectedTabNameChange = new core_1.EventEmitter();
        this.subscriptions = [];
    }
    Object.defineProperty(SelectedTabNameDirective.prototype, "activeTabName", {
        get: function () {
            var tab = this.activeTab;
            return tab ? tab.tabName : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectedTabNameDirective.prototype, "activeTab", {
        get: function () {
            var result;
            if (this.tabCollection) {
                result = this.tabCollection.reduce(function (acc, tab) {
                    return tab.active ? tab : acc;
                }, undefined);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    SelectedTabNameDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.tabCollection) {
            this.subscriptions = [
                this.tabCollection.changes.subscribe(function () { return _this.preselectTab(); }),
                this.matTabGroup.selectedTabChange.subscribe(function () { return _this.emitTabChange(); }),
            ];
        }
    };
    SelectedTabNameDirective.prototype.ngOnChanges = function (_a) {
        var selectedTabName = _a.selectedTabName;
        if (selectedTabName) {
            this.preselectTab();
        }
    };
    SelectedTabNameDirective.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    SelectedTabNameDirective.prototype.preselectTab = function () {
        var _this = this;
        if (this.tabCollection) {
            var result = this.tabCollection.reduce(function (acc, tab, idx) {
                return (tab.tabName === _this.selectedTabName ? idx : acc);
            }, undefined);
            if (typeof result === "number") {
                this.matTabGroup.selectedIndex = result;
            }
        }
    };
    SelectedTabNameDirective.prototype.emitTabChange = function () {
        var tabName = this.activeTabName || "";
        if (tabName) {
            this.selectedTabNameChange.emit(tabName);
        }
    };
    __decorate([
        core_1.Input()
    ], SelectedTabNameDirective.prototype, "selectedTabName", void 0);
    __decorate([
        core_1.Output()
    ], SelectedTabNameDirective.prototype, "selectedTabNameChange", void 0);
    __decorate([
        core_1.ContentChildren(tab_name_directive_1.TabNameDirective)
    ], SelectedTabNameDirective.prototype, "tabCollection", void 0);
    SelectedTabNameDirective = __decorate([
        core_1.Directive({
            selector: "[selectedTabName]",
        })
    ], SelectedTabNameDirective);
    return SelectedTabNameDirective;
}());
exports.SelectedTabNameDirective = SelectedTabNameDirective;
