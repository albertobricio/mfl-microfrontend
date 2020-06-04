import common, { CommonModule } from '@angular/common';
import i0__default, { ɵɵdefineComponent, ɵɵtext, ɵsetClassMetadata, Component, ɵɵelementStart, ɵɵelementEnd, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import router__default, { RouterModule } from '@angular/router';
import forms from '@angular/forms';
import platformBrowser from '@angular/platform-browser';
import platformBrowserDynamic from '@angular/platform-browser-dynamic';
import compiler from '@angular/compiler';

class AppComponent {
    constructor() {
        this.title = 'myapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = ɵɵdefineComponent({ type: AppComponent, selectors: [["flights-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0, "Myapp works!\n");
    } }, styles: ["[_nghost-%COMP%]{display:block;font-family:sans-serif;min-width:300px;max-width:600px;margin:50px auto}.gutter-left[_ngcontent-%COMP%]{margin-left:9px}.col-span-2[_ngcontent-%COMP%]{grid-column:span 2}.flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}header[_ngcontent-%COMP%]{background-color:#143055;color:#fff;padding:5px;border-radius:3px}main[_ngcontent-%COMP%]{padding:0 36px}p[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{text-align:center;margin-left:18px;font-size:24px}h2[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin:40px 0 10px}.resources[_ngcontent-%COMP%]{text-align:center;list-style:none;padding:0;display:grid;grid-gap:9px;grid-template-columns:1fr 1fr}.resource[_ngcontent-%COMP%]{color:#0094ba;height:36px;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,.12);border-radius:4px;padding:3px 9px;text-decoration:none}.resource[_ngcontent-%COMP%]:hover{background-color:rgba(68,138,255,.04)}pre[_ngcontent-%COMP%]{padding:9px;border-radius:4px;background-color:#000;color:#eee}details[_ngcontent-%COMP%]{border-radius:4px;color:#333;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,.12);padding:3px 9px;margin-bottom:9px}summary[_ngcontent-%COMP%]{cursor:pointer;outline:0;height:36px;line-height:36px}.github-star-container[_ngcontent-%COMP%]{margin-top:12px;line-height:20px}.github-star-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;color:#333}.github-star-badge[_ngcontent-%COMP%]{color:#24292e;display:flex;align-items:center;font-size:12px;padding:3px 10px;border:1px solid rgba(27,31,35,.2);border-radius:3px;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600}.github-star-badge[_ngcontent-%COMP%]:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:rgba(27,31,35,.35);background-position:-.5em}.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{height:16px;width:16px;margin-right:4px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'flights-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();

class SecondComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecondComponent.ɵfac = function SecondComponent_Factory(t) { return new (t || SecondComponent)(); };
SecondComponent.ɵcmp = ɵɵdefineComponent({ type: SecondComponent, selectors: [["flights-second"]], decls: 2, vars: 0, template: function SecondComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "second works!");
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SecondComponent, [{
        type: Component,
        args: [{
                selector: 'flights-second',
                templateUrl: './second.component.html',
                styleUrls: ['./second.component.css']
            }]
    }], function () { return []; }, null); })();

const moduleMap = {};
function loadModule(umdFileName) {
    return new Promise((resolve, reject) => {
        if (moduleMap[umdFileName]) {
            resolve(window);
            return;
        }
        const script = document.createElement('script');
        script.src = umdFileName;
        script.onerror = reject;
        script.onload = () => {
            moduleMap[umdFileName] = true;
            resolve(window); // window is the global namespace
        };
        document.body.append(script);
    });
}
function initExternals(production) {
    window.ng = {};
    window.ng.core = i0__default;
    window.ng.forms = forms;
    window.ng.common = common;
    window.ng.router = router__default;
    window.ng.platformBrowser = platformBrowser;
    if (!production) {
        window.ng.platformBrowserDynamic = platformBrowserDynamic;
        window.ng.compiler = compiler;
    }
}

class AppModule {
}
AppModule.ɵmod = ɵɵdefineNgModule({ type: AppModule });
AppModule.ɵinj = ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            CommonModule,
            RouterModule.forChild([{
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
                    loadChildren: () => loadModule('assets/myapp2/bundles/flights-myapp2.umd.min.js')
                        .then(g => {
                        console.log('Loading myapp2');
                        console.log(g.flights);
                        return g.flights['myapp2'].AppModule;
                    })
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent, SecondComponent], imports: [CommonModule, RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [AppComponent, SecondComponent],
                imports: [
                    CommonModule,
                    RouterModule.forChild([{
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
                            loadChildren: () => loadModule('assets/myapp2/bundles/flights-myapp2.umd.min.js')
                                .then(g => {
                                console.log('Loading myapp2');
                                console.log(g.flights);
                                return g.flights['myapp2'].AppModule;
                            })
                        }
                    ])
                ],
                providers: [],
            }]
    }], null, null); })();

// import { enableProdMode } from '@angular/core';

/**
 * Generated bundle index. Do not edit.
 */

export { AppModule };
//# sourceMappingURL=flights-myapp.js.map
