(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@flights/myapp2', ['exports', '@angular/core', '@angular/router', '@angular/common'], factory) :
    (global = global || self, factory((global.flights = global.flights || {}, global.flights.myapp2 = {}), global.ng.core, global.ng.router, global.ng.common));
}(this, (function (exports, core, router, common) { 'use strict';

    var AppComponent = /** @class */ (function () {
        function AppComponent() {
            this.title = 'myapp2';
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
        AppComponent.ɵcmp = core.ɵɵdefineComponent({ type: AppComponent, selectors: [["flights-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "h1");
                core.ɵɵtext(1, "inner inner inner app component");
                core.ɵɵelementEnd();
            } }, styles: ["[_nghost-%COMP%]{display:block;font-family:sans-serif;min-width:300px;max-width:600px;margin:50px auto}.gutter-left[_ngcontent-%COMP%]{margin-left:9px}.col-span-2[_ngcontent-%COMP%]{grid-column:span 2}.flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}header[_ngcontent-%COMP%]{background-color:#143055;color:#fff;padding:5px;border-radius:3px}main[_ngcontent-%COMP%]{padding:0 36px}p[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{text-align:center;margin-left:18px;font-size:24px}h2[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin:40px 0 10px}.resources[_ngcontent-%COMP%]{text-align:center;list-style:none;padding:0;display:grid;grid-gap:9px;grid-template-columns:1fr 1fr}.resource[_ngcontent-%COMP%]{color:#0094ba;height:36px;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,.12);border-radius:4px;padding:3px 9px;text-decoration:none}.resource[_ngcontent-%COMP%]:hover{background-color:rgba(68,138,255,.04)}pre[_ngcontent-%COMP%]{padding:9px;border-radius:4px;background-color:#000;color:#eee}details[_ngcontent-%COMP%]{border-radius:4px;color:#333;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,.12);padding:3px 9px;margin-bottom:9px}summary[_ngcontent-%COMP%]{cursor:pointer;outline:0;height:36px;line-height:36px}.github-star-container[_ngcontent-%COMP%]{margin-top:12px;line-height:20px}.github-star-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;color:#333}.github-star-badge[_ngcontent-%COMP%]{color:#24292e;display:flex;align-items:center;font-size:12px;padding:3px 10px;border:1px solid rgba(27,31,35,.2);border-radius:3px;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600}.github-star-badge[_ngcontent-%COMP%]:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:rgba(27,31,35,.35);background-position:-.5em}.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{height:16px;width:16px;margin-right:4px}"] });
        return AppComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AppComponent, [{
            type: core.Component,
            args: [{
                    selector: 'flights-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                }]
        }], null, null); })();

    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule.ɵmod = core.ɵɵdefineNgModule({ type: AppModule });
        AppModule.ɵinj = core.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                    common.CommonModule,
                    router.RouterModule.forChild([
                        {
                            path: '',
                            pathMatch: 'full',
                            component: AppComponent,
                        }
                    ])
                ]] });
        return AppModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent], imports: [common.CommonModule, router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AppModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [AppComponent],
                    imports: [
                        common.CommonModule,
                        router.RouterModule.forChild([
                            {
                                path: '',
                                pathMatch: 'full',
                                component: AppComponent,
                            }
                        ])
                    ],
                    providers: [],
                }]
        }], null, null); })();

    exports.AppModule = AppModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=flights-myapp2.umd.js.map
