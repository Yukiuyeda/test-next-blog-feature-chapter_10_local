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

/***/ "(app-pages-browser)/./src/app/admin/posts/new/page.tsx":
/*!******************************************!*\
  !*** ./src/app/admin/posts/new/page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Page = ()=>{\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\",\n        thumbnailUrl: \"\",\n        categories: []\n    });\n    const handleChange = (e)=>{\n        setFormValues({\n            ...formValues,\n            [e.target.name]: e.target.value\n        });\n    };\n    //カテゴリーの\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-xl mb-6\",\n                children: \"記事作成ページ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"タイトル\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"title\",\n                        name: \"title\",\n                        onChange: handleChange,\n                        value: formValues.title,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"content\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"内容\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"title\",\n                        name: \"title\",\n                        onChange: handleChange,\n                        value: formValues.content,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"thumnbnailUrl\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"サムネイルURL\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"thumbnailUrl\",\n                        name: \"thumbnailUrl\",\n                        onChange: handleChange,\n                        value: formValues.thumbnailUrl,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"categories\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"カテゴリー\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"categories\",\n                        name: \"categories\",\n                        value: formValues.categories,\n                        multiple: true,\n                        onChange: handleCategories\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"e6J+ssiPZSLJbzt/B+bcFCtXc1M=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcG9zdHMvbmV3L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUd3QztBQUV4QyxNQUFNRSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBVTtRQUNwREksT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsWUFBWSxFQUFFO0lBQ2hCO0lBRUEsTUFBTUMsZUFBZSxDQUNuQkM7UUFJQU4sY0FBYztZQUFFLEdBQUdELFVBQVU7WUFBRSxDQUFDTyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUNqRTtJQUVBLFFBQVE7SUFFUixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBeUI7Ozs7OzswQkFDdkMsOERBQUNDO2dCQUFLRCxXQUFVOztrQ0FDZCw4REFBQ0U7d0JBQU1DLFNBQVE7d0JBQVFILFdBQVU7a0NBQXdCOzs7Ozs7a0NBR3pELDhEQUFDSTt3QkFDQ0MsSUFBRzt3QkFDSFQsTUFBSzt3QkFDTFUsVUFBVWI7d0JBQ1ZJLE9BQU9WLFdBQVdFLEtBQUs7d0JBQ3ZCVyxXQUFVOzs7Ozs7a0NBR1osOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFVSCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUczRCw4REFBQ087d0JBQ0NGLElBQUc7d0JBQ0hULE1BQUs7d0JBQ0xVLFVBQVViO3dCQUNWSSxPQUFPVixXQUFXRyxPQUFPO3dCQUN6QlUsV0FBVTs7Ozs7O2tDQUdaLDhEQUFDRTt3QkFBTUMsU0FBUTt3QkFBZ0JILFdBQVU7a0NBQXdCOzs7Ozs7a0NBR2pFLDhEQUFDSTt3QkFDQ0MsSUFBRzt3QkFDSFQsTUFBSzt3QkFDTFUsVUFBVWI7d0JBQ1ZJLE9BQU9WLFdBQVdJLFlBQVk7d0JBQzlCUyxXQUFVOzs7Ozs7a0NBR1osOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFhSCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUc5RCw4REFBQ1E7d0JBQ0NILElBQUc7d0JBQ0hULE1BQUs7d0JBQ0xDLE9BQU9WLFdBQVdLLFVBQVU7d0JBQzVCaUIsVUFBVTt3QkFDVkgsVUFBVUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtHQXBFTXhCO0tBQUFBO0FBc0VOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRtaW4vcG9zdHMvbmV3L3BhZ2UudHN4P2U0NGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBOZXdQb3N0IH0gZnJvbSBcIkAvYXBwL3R5cGVzL25ld3Bvc3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlPE5ld1Bvc3Q+KHtcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgY29udGVudDogXCJcIixcclxuICAgIHRodW1ibmFpbFVybDogXCJcIixcclxuICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoXHJcbiAgICBlOlxyXG4gICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcbiAgICAgIHwgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cclxuICApID0+IHtcclxuICAgIHNldEZvcm1WYWx1ZXMoeyAuLi5mb3JtVmFsdWVzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8v44Kr44OG44K044Oq44O844GuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWItNlwiPuiomOS6i+S9nOaIkOODmuODvOOCuDwvaDI+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICDjgr/jgqTjg4jjg6tcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLnRpdGxlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0zIGJvcmRlci1ncmF5LTQwMCBib3JkZXIgcm91bmRlZC1zbSBtdC0yIG1iLTRcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGVudFwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAg5YaF5a65XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5jb250ZW50fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0zIGJvcmRlci1ncmF5LTQwMCBib3JkZXIgcm91bmRlZC1zbSBtdC0yIG1iLTRcIlxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRodW1uYm5haWxVcmxcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgIOOCteODoOODjeOCpOODq1VSTFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD1cInRodW1ibmFpbFVybFwiXHJcbiAgICAgICAgICBuYW1lPVwidGh1bWJuYWlsVXJsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy50aHVtYm5haWxVcmx9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLWdyYXktNDAwIGJvcmRlciByb3VuZGVkLXNtIG10LTIgbWItNFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yaWVzXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICDjgqvjg4bjgrTjg6rjg7xcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIGlkPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICBuYW1lPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgbXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2F0ZWdvcmllc31cclxuICAgICAgICA+PC9zZWxlY3Q+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInRpdGxlIiwiY29udGVudCIsInRodW1ibmFpbFVybCIsImNhdGVnb3JpZXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJtdWx0aXBsZSIsImhhbmRsZUNhdGVnb3JpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/posts/new/page.tsx\n"));

/***/ })

});