"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/posts/new/page",{

/***/ "(app-pages-browser)/./src/app/admin/posts/_components/EditPost.tsx":
/*!******************************************************!*\
  !*** ./src/app/admin/posts/_components/EditPost.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst EditPost = ()=>{\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\",\n        thumbnailUrl: \"\",\n        categories: []\n    });\n    const handleChange = (e)=>{\n        setFormValues({\n            ...formValues,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"title\",\n                className: \"text-sm text-gray-700\",\n                children: \"タイトル\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\_components\\\\EditPost.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"title\",\n                name: \"title\",\n                onChange: handleChange,\n                value: formValues.title,\n                className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\_components\\\\EditPost.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"content\",\n                className: \"text-sm text-gray-700\",\n                children: \"内容\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\_components\\\\EditPost.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                id: \"title\",\n                name: \"title\",\n                onChange: handleChange,\n                value: formValues.content,\n                className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\_components\\\\EditPost.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"thumnbailUrl\",\n                className: \"text-sm text-gray-700\",\n                children: \"サムネイルURL\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\_components\\\\EditPost.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"thumnailUrl\",\n                name: \"thumnailUrl\",\n                onChange: handleChange,\n                value: formValues.thumnailUrl,\n                className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\_components\\\\EditPost.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\_components\\\\EditPost.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditPost, \"e6J+ssiPZSLJbzt/B+bcFCtXc1M=\");\n_c = EditPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPost);\nvar _c;\n$RefreshReg$(_c, \"EditPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcG9zdHMvX2NvbXBvbmVudHMvRWRpdFBvc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUN3QztBQUV4QyxNQUFNRSxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBVTtRQUNwREksT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsWUFBWSxFQUFFO0lBQ2hCO0lBRUEsTUFBTUMsZUFBZSxDQUNuQkM7UUFJQU4sY0FBYztZQUFFLEdBQUdELFVBQVU7WUFBRSxDQUFDTyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUNqRTtJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQU1DLFNBQVE7Z0JBQVFGLFdBQVU7MEJBQXdCOzs7Ozs7MEJBR3pELDhEQUFDRztnQkFDQ0MsSUFBRztnQkFDSFAsTUFBSztnQkFDTFEsVUFBVVg7Z0JBQ1ZJLE9BQU9WLFdBQVdFLEtBQUs7Z0JBQ3ZCVSxXQUFVOzs7Ozs7MEJBR1osOERBQUNDO2dCQUFNQyxTQUFRO2dCQUFVRixXQUFVOzBCQUF3Qjs7Ozs7OzBCQUczRCw4REFBQ007Z0JBQ0NGLElBQUc7Z0JBQ0hQLE1BQUs7Z0JBQ0xRLFVBQVVYO2dCQUNWSSxPQUFPVixXQUFXRyxPQUFPO2dCQUN6QlMsV0FBVTs7Ozs7OzBCQUdaLDhEQUFDQztnQkFBTUMsU0FBUTtnQkFBZUYsV0FBVTswQkFBd0I7Ozs7OzswQkFHaEUsOERBQUNHO2dCQUNDQyxJQUFHO2dCQUNIUCxNQUFLO2dCQUNMUSxVQUFVWDtnQkFDVkksT0FBT1YsV0FBV21CLFdBQVc7Z0JBQzdCUCxXQUFVOzs7Ozs7Ozs7Ozs7QUFJbEI7R0FwRE1iO0tBQUFBO0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRtaW4vcG9zdHMvX2NvbXBvbmVudHMvRWRpdFBvc3QudHN4Pzc1ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV3UG9zdCB9IGZyb20gXCJAL2FwcC90eXBlcy9uZXdwb3N0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRWRpdFBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGU8TmV3UG9zdD4oe1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgdGh1bWJuYWlsVXJsOiBcIlwiLFxyXG4gICAgY2F0ZWdvcmllczogW10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChcclxuICAgIGU6XHJcbiAgICAgIHwgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cclxuICAgICAgfCBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxyXG4gICkgPT4ge1xyXG4gICAgc2V0Rm9ybVZhbHVlcyh7IC4uLmZvcm1WYWx1ZXMsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgIOOCv+OCpOODiOODq1xyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMudGl0bGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicC0zIGJvcmRlci1ncmF5LTQwMCBib3JkZXIgcm91bmRlZC1zbSBtdC0yIG1iLTRcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAg5YaF5a65XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5jb250ZW50fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInAtMyBib3JkZXItZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQtc20gbXQtMiBtYi00XCJcclxuICAgICAgPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInRodW1uYmFpbFVybFwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgIOOCteODoOODjeOCpOODq1VSTFxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD1cInRodW1uYWlsVXJsXCJcclxuICAgICAgICBuYW1lPVwidGh1bW5haWxVcmxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMudGh1bW5haWxVcmx9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicC0zIGJvcmRlci1ncmF5LTQwMCBib3JkZXIgcm91bmRlZC1zbSBtdC0yIG1iLTRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UG9zdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJFZGl0UG9zdCIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwidGl0bGUiLCJjb250ZW50IiwidGh1bWJuYWlsVXJsIiwiY2F0ZWdvcmllcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJmb3JtIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJ0aHVtbmFpbFVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/posts/_components/EditPost.tsx\n"));

/***/ })

});