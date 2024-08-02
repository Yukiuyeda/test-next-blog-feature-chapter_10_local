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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Page = ()=>{\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\",\n        thumbnailUrl: \"\",\n        categories: []\n    });\n    const handleChange = (e)=>{\n        setFormValues({\n            ...formValues,\n            [e.target.name]: e.target.value\n        });\n    };\n    //カテゴリーの変更を反映\n    const handleCategories = (e)=>{\n        //選択値を格納するための配列\n        const _categories = [];\n        //<option>要素を走査\n        const opts = e.target.options;\n        for (const opt of opts){\n            if (opt.selected) {\n                _categories.push(opt.value);\n            }\n            //配列をstateに反映\n            setFormValues({\n                ...formValues,\n                [e.target.name]: _categories\n            });\n        }\n    };\n    //カテゴリーリストを\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-xl mb-6\",\n                children: \"記事作成ページ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"タイトル\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"title\",\n                        name: \"title\",\n                        onChange: handleChange,\n                        value: formValues.title,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"content\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"内容\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"title\",\n                        name: \"title\",\n                        onChange: handleChange,\n                        value: formValues.content,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"thumnbnailUrl\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"サムネイルURL\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"thumbnailUrl\",\n                        name: \"thumbnailUrl\",\n                        onChange: handleChange,\n                        value: formValues.thumbnailUrl,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"categories\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"カテゴリー\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"categories\",\n                        name: \"categories\",\n                        value: formValues.categories,\n                        multiple: true,\n                        onChange: handleCategories\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"e6J+ssiPZSLJbzt/B+bcFCtXc1M=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcG9zdHMvbmV3L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUd3QztBQUV4QyxNQUFNRSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBVTtRQUNwREksT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsWUFBWSxFQUFFO0lBQ2hCO0lBRUEsTUFBTUMsZUFBZSxDQUNuQkM7UUFJQU4sY0FBYztZQUFFLEdBQUdELFVBQVU7WUFBRSxDQUFDTyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUNqRTtJQUVBLGFBQWE7SUFDYixNQUFNQyxtQkFBbUIsQ0FBQ0o7UUFDeEIsZUFBZTtRQUNmLE1BQU1LLGNBQWMsRUFBRTtRQUN0QixlQUFlO1FBQ2YsTUFBTUMsT0FBT04sRUFBRUMsTUFBTSxDQUFDTSxPQUFPO1FBQzdCLEtBQUssTUFBTUMsT0FBT0YsS0FBTTtZQUN0QixJQUFJRSxJQUFJQyxRQUFRLEVBQUU7Z0JBQ2hCSixZQUFZSyxJQUFJLENBQUNGLElBQUlMLEtBQUs7WUFDNUI7WUFFQSxhQUFhO1lBQ2JULGNBQWM7Z0JBQUMsR0FBR0QsVUFBVTtnQkFBRSxDQUFDTyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRztZQUFXO1FBQzVEO0lBQ0Y7SUFFQSxXQUFXO0lBRVgscUJBQ0UsOERBQUNNOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQXlCOzs7Ozs7MEJBQ3ZDLDhEQUFDQztnQkFBS0QsV0FBVTs7a0NBQ2QsOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFRSCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUd6RCw4REFBQ0k7d0JBQ0NDLElBQUc7d0JBQ0hoQixNQUFLO3dCQUNMaUIsVUFBVXBCO3dCQUNWSSxPQUFPVixXQUFXRSxLQUFLO3dCQUN2QmtCLFdBQVU7Ozs7OztrQ0FHWiw4REFBQ0U7d0JBQU1DLFNBQVE7d0JBQVVILFdBQVU7a0NBQXdCOzs7Ozs7a0NBRzNELDhEQUFDTzt3QkFDQ0YsSUFBRzt3QkFDSGhCLE1BQUs7d0JBQ0xpQixVQUFVcEI7d0JBQ1ZJLE9BQU9WLFdBQVdHLE9BQU87d0JBQ3pCaUIsV0FBVTs7Ozs7O2tDQUdaLDhEQUFDRTt3QkFBTUMsU0FBUTt3QkFBZ0JILFdBQVU7a0NBQXdCOzs7Ozs7a0NBR2pFLDhEQUFDSTt3QkFDQ0MsSUFBRzt3QkFDSGhCLE1BQUs7d0JBQ0xpQixVQUFVcEI7d0JBQ1ZJLE9BQU9WLFdBQVdJLFlBQVk7d0JBQzlCZ0IsV0FBVTs7Ozs7O2tDQUdaLDhEQUFDRTt3QkFBTUMsU0FBUTt3QkFBYUgsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FHOUQsOERBQUNRO3dCQUNDSCxJQUFHO3dCQUNIaEIsTUFBSzt3QkFDTEMsT0FBT1YsV0FBV0ssVUFBVTt3QkFDNUJ3QixVQUFVO3dCQUNWSCxVQUFVZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBcEZNWjtLQUFBQTtBQXNGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FkbWluL3Bvc3RzL25ldy9wYWdlLnRzeD9lNDRmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgTmV3UG9zdCB9IGZyb20gXCJAL2FwcC90eXBlcy9uZXdwb3N0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZTxOZXdQb3N0Pih7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICB0aHVtYm5haWxVcmw6IFwiXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKFxyXG4gICAgZTpcclxuICAgICAgfCBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxyXG4gICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XHJcbiAgKSA9PiB7XHJcbiAgICBzZXRGb3JtVmFsdWVzKHsgLi4uZm9ybVZhbHVlcywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICAvL+OCq+ODhuOCtOODquODvOOBruWkieabtOOCkuWPjeaYoFxyXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3JpZXMgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgIC8v6YG45oqe5YCk44KS5qC857SN44GZ44KL44Gf44KB44Gu6YWN5YiXXHJcbiAgICBjb25zdCBfY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgLy88b3B0aW9uPuimgee0oOOCkui1sOafu1xyXG4gICAgY29uc3Qgb3B0cyA9IGUudGFyZ2V0Lm9wdGlvbnM7XHJcbiAgICBmb3IgKGNvbnN0IG9wdCBvZiBvcHRzKSB7XHJcbiAgICAgIGlmIChvcHQuc2VsZWN0ZWQpIHtcclxuICAgICAgICBfY2F0ZWdvcmllcy5wdXNoKG9wdC52YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8v6YWN5YiX44KSc3RhdGXjgavlj43mmKBcclxuICAgICAgc2V0Rm9ybVZhbHVlcyh7Li4uZm9ybVZhbHVlcywgW2UudGFyZ2V0Lm5hbWVdOiBfY2F0ZWdvcmllc30pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+OCq+ODhuOCtOODquODvOODquOCueODiOOCklxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTZcIj7oqJjkuovkvZzmiJDjg5rjg7zjgrg8L2gyPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAg44K/44Kk44OI44OrXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy50aXRsZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBib3JkZXItZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQtc20gbXQtMiBtYi00XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgIOWGheWuuVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuY29udGVudH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBib3JkZXItZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQtc20gbXQtMiBtYi00XCJcclxuICAgICAgICA+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aHVtbmJuYWlsVXJsXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICDjgrXjg6Djg43jgqTjg6tVUkxcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJ0aHVtYm5haWxVcmxcIlxyXG4gICAgICAgICAgbmFtZT1cInRodW1ibmFpbFVybFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMudGh1bWJuYWlsVXJsfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0zIGJvcmRlci1ncmF5LTQwMCBib3JkZXIgcm91bmRlZC1zbSBtdC0yIG1iLTRcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2F0ZWdvcmllc1wiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAg44Kr44OG44K044Oq44O8XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBpZD1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgbmFtZT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuY2F0ZWdvcmllc31cclxuICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhdGVnb3JpZXN9XHJcbiAgICAgICAgPjwvc2VsZWN0PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQYWdlIiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0aHVtYm5haWxVcmwiLCJjYXRlZ29yaWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUNhdGVnb3JpZXMiLCJfY2F0ZWdvcmllcyIsIm9wdHMiLCJvcHRpb25zIiwib3B0Iiwic2VsZWN0ZWQiLCJwdXNoIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJtdWx0aXBsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/posts/new/page.tsx\n"));

/***/ })

});