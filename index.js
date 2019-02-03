"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var selected_tab_name_directive_1 = require("./selected-tab-name.directive/selected-tab-name.directive");
var tab_name_directive_1 = require("./tab-name.directive/tab-name.directive");
var MatNamedTabsModule = /** @class */ (function () {
    function MatNamedTabsModule() {
    }
    MatNamedTabsModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MatTabsModule,
            ],
            declarations: [
                selected_tab_name_directive_1.SelectedTabNameDirective,
                tab_name_directive_1.TabNameDirective,
            ],
            exports: [
                selected_tab_name_directive_1.SelectedTabNameDirective,
                tab_name_directive_1.TabNameDirective,
            ],
        })
    ], MatNamedTabsModule);
    return MatNamedTabsModule;
}());
exports.MatNamedTabsModule = MatNamedTabsModule;
