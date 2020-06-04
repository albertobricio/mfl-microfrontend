const moduleMap = {};
export function loadModule(umdFileName) {
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
export function initExternals(production) {
    window.ng = {};
    window.ng.core = require('@angular/core');
    window.ng.forms = require('@angular/forms');
    window.ng.common = require('@angular/common');
    window.ng.router = require('@angular/router');
    window.ng.platformBrowser = require('@angular/platform-browser');
    if (!production) {
        window.ng.platformBrowserDynamic = require('@angular/platform-browser-dynamic');
        window.ng.compiler = require('@angular/compiler');
    }
}
//# sourceMappingURL=externals-utils.js.map