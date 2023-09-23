/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showInfoMessage = exports.getCurrentDocumentURI = exports.getDiagnostics = void 0;
const getDiagnostics_1 = __webpack_require__(2);
exports.getDiagnostics = getDiagnostics_1.default;
const getCurrentDocumentURI_1 = __webpack_require__(4);
exports.getCurrentDocumentURI = getCurrentDocumentURI_1.default;
const showInfoMessage_1 = __webpack_require__(5);
exports.showInfoMessage = showInfoMessage_1.default;


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode_1 = __webpack_require__(3);
const getDiagnostics = (documentURI) => {
    return vscode_1.languages.getDiagnostics(documentURI);
};
exports["default"] = getDiagnostics;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode_1 = __webpack_require__(3);
const getCurrentDocumentURI = () => {
    const currentDocumentURI = vscode_1.window.activeTextEditor?.document.uri;
    return currentDocumentURI;
};
exports["default"] = getCurrentDocumentURI;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode_1 = __webpack_require__(3);
const showInfoMessage = (message) => {
    vscode_1.window.showInformationMessage(message);
};
exports["default"] = showInfoMessage;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onDocumentSave = void 0;
const onDocumentSave_1 = __webpack_require__(7);
exports.onDocumentSave = onDocumentSave_1.default;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const atoms_1 = __webpack_require__(1);
const onDocumentSave = () => {
    const diags = (0, atoms_1.getDiagnostics)((0, atoms_1.getCurrentDocumentURI)())?.length;
    // TODO: burada hataları kaydetmemiz lazım bir yerde, sonrasında extension deactive olduğunda api ile server e göndericek
    console.log(`${diags} diagnostics detected.`);
};
exports["default"] = onDocumentSave;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(3);
const atoms_1 = __webpack_require__(1);
const molecules_1 = __webpack_require__(6);
vscode.workspace.onDidSaveTextDocument((document) => {
    (0, molecules_1.onDocumentSave)();
});
function activate(context) {
    (0, atoms_1.showInfoMessage)('Hellllo');
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map