import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class SecondComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecondComponent.ɵfac = function SecondComponent_Factory(t) { return new (t || SecondComponent)(); };
SecondComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SecondComponent, selectors: [["flights-second"]], decls: 2, vars: 0, template: function SecondComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "second works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SecondComponent, [{
        type: Component,
        args: [{
                selector: 'flights-second',
                templateUrl: './second.component.html',
                styleUrls: ['./second.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=second.component.js.map