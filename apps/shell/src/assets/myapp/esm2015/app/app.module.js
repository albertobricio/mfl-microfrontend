import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SecondComponent } from './components/second/second.component';
import { loadModule } from "./externals-utils";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
}
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent, SecondComponent], imports: [CommonModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
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
//# sourceMappingURL=app.module.js.map