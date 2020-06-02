(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@flights/myapp/src/libs', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = global || self, factory((global.flights = global.flights || {}, global.flights.myapp = global.flights.myapp || {}, global.flights.myapp.src = global.flights.myapp.src || {}, global.flights.myapp.src.libs = {}), global.ng.core, global.ng.common, global.ng.router));
}(this, (function (exports, core, common, router) { 'use strict';

    var MylibComponent = /** @class */ (function () {
        function MylibComponent() {
        }
        MylibComponent.prototype.ngOnInit = function () {
        };
        MylibComponent.ɵfac = function MylibComponent_Factory(t) { return new (t || MylibComponent)(); };
        MylibComponent.ɵcmp = core.ɵɵdefineComponent({ type: MylibComponent, selectors: [["flights-mylib"]], decls: 2, vars: 0, template: function MylibComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, "mylib inner works!");
                core.ɵɵelementEnd();
            } }, styles: [""] });
        return MylibComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MylibComponent, [{
            type: core.Component,
            args: [{
                    selector: 'flights-mylib',
                    templateUrl: './mylib.component.html',
                    styleUrls: ['./mylib.component.css']
                }]
        }], function () { return []; }, null); })();

    var MylibModule = /** @class */ (function () {
        function MylibModule() {
        }
        MylibModule.ɵmod = core.ɵɵdefineNgModule({ type: MylibModule });
        MylibModule.ɵinj = core.ɵɵdefineInjector({ factory: function MylibModule_Factory(t) { return new (t || MylibModule)(); }, imports: [[
                    common.CommonModule,
                    router.RouterModule.forChild([
                        {
                            path: 'inner',
                            component: MylibComponent,
                        }
                    ])
                ]] });
        return MylibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(MylibModule, { imports: [common.CommonModule, router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MylibModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule.forChild([
                            {
                                path: 'inner',
                                component: MylibComponent,
                            }
                        ])
                    ],
                    declarations: []
                }]
        }], null, null); })();

    exports.MylibModule = MylibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=flights-myapp-src-libs.umd.js.map
