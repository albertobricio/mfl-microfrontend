(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/router'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/platform-browser-dynamic'), require('@angular/compiler')) :
    typeof define === 'function' && define.amd ? define('@flights/myapp', ['exports', '@angular/common', '@angular/core', '@angular/router', '@angular/forms', '@angular/platform-browser', '@angular/platform-browser-dynamic', '@angular/compiler'], factory) :
    (global = global || self, factory((global.flights = global.flights || {}, global.flights.myapp = {}), global.ng.common, global.ng.core, global.ng.router, global.ng.forms, global.ng.platformBrowser, global.ng.platformBrowserDynamic, global.ng.compiler));
}(this, (function (exports, common, i0__default, router__default, forms, platformBrowser, platformBrowserDynamic, compiler) { 'use strict';

    var common__default = 'default' in common ? common['default'] : common;
    var i0__default__default = 'default' in i0__default ? i0__default['default'] : i0__default;
    var router__default__default = 'default' in router__default ? router__default['default'] : router__default;
    forms = forms && Object.prototype.hasOwnProperty.call(forms, 'default') ? forms['default'] : forms;
    platformBrowser = platformBrowser && Object.prototype.hasOwnProperty.call(platformBrowser, 'default') ? platformBrowser['default'] : platformBrowser;
    platformBrowserDynamic = platformBrowserDynamic && Object.prototype.hasOwnProperty.call(platformBrowserDynamic, 'default') ? platformBrowserDynamic['default'] : platformBrowserDynamic;
    compiler = compiler && Object.prototype.hasOwnProperty.call(compiler, 'default') ? compiler['default'] : compiler;

    var AppComponent = /** @class */ (function () {
        function AppComponent() {
            this.title = 'myapp';
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
        AppComponent.ɵcmp = i0__default.ɵɵdefineComponent({ type: AppComponent, selectors: [["flights-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
                i0__default.ɵɵtext(0, "Myapp works!\n");
            } }, styles: ["[_nghost-%COMP%]{display:block;font-family:sans-serif;min-width:300px;max-width:600px;margin:50px auto}.gutter-left[_ngcontent-%COMP%]{margin-left:9px}.col-span-2[_ngcontent-%COMP%]{grid-column:span 2}.flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}header[_ngcontent-%COMP%]{background-color:#143055;color:#fff;padding:5px;border-radius:3px}main[_ngcontent-%COMP%]{padding:0 36px}p[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{text-align:center;margin-left:18px;font-size:24px}h2[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin:40px 0 10px}.resources[_ngcontent-%COMP%]{text-align:center;list-style:none;padding:0;display:grid;grid-gap:9px;grid-template-columns:1fr 1fr}.resource[_ngcontent-%COMP%]{color:#0094ba;height:36px;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,.12);border-radius:4px;padding:3px 9px;text-decoration:none}.resource[_ngcontent-%COMP%]:hover{background-color:rgba(68,138,255,.04)}pre[_ngcontent-%COMP%]{padding:9px;border-radius:4px;background-color:#000;color:#eee}details[_ngcontent-%COMP%]{border-radius:4px;color:#333;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,.12);padding:3px 9px;margin-bottom:9px}summary[_ngcontent-%COMP%]{cursor:pointer;outline:0;height:36px;line-height:36px}.github-star-container[_ngcontent-%COMP%]{margin-top:12px;line-height:20px}.github-star-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;color:#333}.github-star-badge[_ngcontent-%COMP%]{color:#24292e;display:flex;align-items:center;font-size:12px;padding:3px 10px;border:1px solid rgba(27,31,35,.2);border-radius:3px;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600}.github-star-badge[_ngcontent-%COMP%]:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:rgba(27,31,35,.35);background-position:-.5em}.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{height:16px;width:16px;margin-right:4px}"] });
        return AppComponent;
    }());
    /*@__PURE__*/ (function () { i0__default.ɵsetClassMetadata(AppComponent, [{
            type: i0__default.Component,
            args: [{
                    selector: 'flights-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                }]
        }], null, null); })();

    var SecondComponent = /** @class */ (function () {
        function SecondComponent() {
        }
        SecondComponent.prototype.ngOnInit = function () {
        };
        SecondComponent.ɵfac = function SecondComponent_Factory(t) { return new (t || SecondComponent)(); };
        SecondComponent.ɵcmp = i0__default.ɵɵdefineComponent({ type: SecondComponent, selectors: [["flights-second"]], decls: 2, vars: 0, template: function SecondComponent_Template(rf, ctx) { if (rf & 1) {
                i0__default.ɵɵelementStart(0, "p");
                i0__default.ɵɵtext(1, "second works!");
                i0__default.ɵɵelementEnd();
            } }, styles: [""] });
        return SecondComponent;
    }());
    /*@__PURE__*/ (function () { i0__default.ɵsetClassMetadata(SecondComponent, [{
            type: i0__default.Component,
            args: [{
                    selector: 'flights-second',
                    templateUrl: './second.component.html',
                    styleUrls: ['./second.component.css']
                }]
        }], function () { return []; }, null); })();

    var moduleMap = {};
    function loadModule(umdFileName) {
        return new Promise(function (resolve, reject) {
            if (moduleMap[umdFileName]) {
                resolve(window);
                return;
            }
            var script = document.createElement('script');
            script.src = umdFileName;
            script.onerror = reject;
            script.onload = function () {
                moduleMap[umdFileName] = true;
                resolve(window); // window is the global namespace
            };
            document.body.append(script);
        });
    }
    function initExternals(production) {
        window.ng = {};
        window.ng.core = i0__default__default;
        window.ng.forms = forms;
        window.ng.common = common__default;
        window.ng.router = router__default__default;
        window.ng.platformBrowser = platformBrowser;
        if (!production) {
            window.ng.platformBrowserDynamic = platformBrowserDynamic;
            window.ng.compiler = compiler;
        }
    }

    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule.ɵmod = i0__default.ɵɵdefineNgModule({ type: AppModule });
        AppModule.ɵinj = i0__default.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                    common.CommonModule,
                    router__default.RouterModule.forChild([{
                            path: '',
                            pathMatch: 'full',
                            component: AppComponent,
                        },
                        {
                            path: 'al',
                            component: SecondComponent,
                        },
                        {
                            path: 'myapp2',
                            loadChildren: function () { return loadModule('assets/flights-myapp2.umd.min.js')
                                .then(function (g) {
                                console.log('Loading myapp2');
                                console.log(g.flights);
                                return g.flights['myapp2'].AppModule;
                            }); }
                        }
                    ])
                ]] });
        return AppModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__default.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent, SecondComponent], imports: [common.CommonModule, router__default.RouterModule] }); })();
    /*@__PURE__*/ (function () { i0__default.ɵsetClassMetadata(AppModule, [{
            type: i0__default.NgModule,
            args: [{
                    declarations: [AppComponent, SecondComponent],
                    imports: [
                        common.CommonModule,
                        router__default.RouterModule.forChild([{
                                path: '',
                                pathMatch: 'full',
                                component: AppComponent,
                            },
                            {
                                path: 'al',
                                component: SecondComponent,
                            },
                            {
                                path: 'myapp2',
                                loadChildren: function () { return loadModule('assets/flights-myapp2.umd.min.js')
                                    .then(function (g) {
                                    console.log('Loading myapp2');
                                    console.log(g.flights);
                                    return g.flights['myapp2'].AppModule;
                                }); }
                            }
                        ])
                    ],
                    providers: [],
                }]
        }], null, null); })();

    exports.AppModule = AppModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=flights-myapp.umd.js.map
