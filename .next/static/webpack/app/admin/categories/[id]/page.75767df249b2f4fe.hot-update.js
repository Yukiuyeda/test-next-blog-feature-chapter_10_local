"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/categories/[id]/page",{

/***/ "(app-pages-browser)/./src/app/admin/categories/[id]/page.tsx":
/*!************************************************!*\
  !*** ./src/app/admin/categories/[id]/page.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        //カテゴリー作成\n        const res = await fetch(\"/api/admin/categories\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name\n            })\n        });\n        //カテゴリーのid取得\n        const { id } = await res.json();\n        //作成したカテゴリー詳細ページに遷移\n        router.push(\"/admin/categories/\".concat(id));\n        window.alert(\"カテゴリー作成しました\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-xl mb-6\",\n                children: \"カテゴリー作成ページ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"カテゴリー\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"name\",\n                        name: \"name\",\n                        onChange: (e)=>setName(e.target.value),\n                        value: name,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4 w-[300px]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"flex justify-center w-[70px] mt-10 py-2 my-auto px-4 text-white border-gray-400 bg-green-500 rounded hover:cursor hover:bg-green-700 transition-all\",\n                                children: \"更新\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"flex justify-center w-[70px] mt-10 ml-4 py-2 px-4 text-white border-gray-400 bg-red-500 rounded hover:cursor hover:bg-green-700 transition-all\",\n                                onClick: ondblclicke,\n                                children: \"削除\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\categories\\\\[id]\\\\page.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"GOhvNsg47M4XBEiwFdlVmS9d+Bs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vY2F0ZWdvcmllcy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFNEM7QUFDSjtBQUV4QyxNQUFNRyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBUztJQUN6QyxNQUFNSSxTQUFTTiwwREFBU0E7SUFFeEIsTUFBTU8sZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixTQUFTO1FBQ1QsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLHlCQUF5QjtZQUMvQ0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVaO1lBQUs7UUFDOUI7UUFFQSxZQUFZO1FBQ1osTUFBTSxFQUFFYSxFQUFFLEVBQUUsR0FBRyxNQUFNUCxJQUFJUSxJQUFJO1FBRTdCLG1CQUFtQjtRQUNuQlosT0FBT2EsSUFBSSxDQUFDLHFCQUF3QixPQUFIRjtRQUVqQ0csT0FBT0MsS0FBSyxDQUFDO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBeUI7Ozs7OzswQkFDdkMsOERBQUNDO2dCQUFLQyxVQUFVbkI7Z0JBQWNpQixXQUFVOztrQ0FDdEMsOERBQUNHO3dCQUFNQyxTQUFRO3dCQUFPSixXQUFVO2tDQUF3Qjs7Ozs7O2tDQUd4RCw4REFBQ0s7d0JBQ0NaLElBQUc7d0JBQ0hiLE1BQUs7d0JBQ0wwQixVQUFVLENBQUN0QixJQUFNSCxRQUFRRyxFQUFFdUIsTUFBTSxDQUFDQyxLQUFLO3dCQUN2Q0EsT0FBTzVCO3dCQUNQb0IsV0FBVTs7Ozs7O2tDQUdaLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNTO2dDQUNDQyxNQUFLO2dDQUNMVixXQUFVOzBDQUNYOzs7Ozs7MENBSUQsOERBQUNTO2dDQUNDQyxNQUFLO2dDQUNMVixXQUFVO2dDQUNWVyxTQUFTQzswQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0EzRE1qQzs7UUFFV0gsc0RBQVNBOzs7S0FGcEJHO0FBNkROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRtaW4vY2F0ZWdvcmllcy9baWRdL3BhZ2UudHN4PzQ4YjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy/jgqvjg4bjgrTjg6rjg7zkvZzmiJBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9hZG1pbi9jYXRlZ29yaWVzXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUgfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL+OCq+ODhuOCtOODquODvOOBrmlk5Y+W5b6XXHJcbiAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIC8v5L2c5oiQ44GX44Gf44Kr44OG44K044Oq44O86Kmz57Sw44Oa44O844K444Gr6YG356e7XHJcbiAgICByb3V0ZXIucHVzaChgL2FkbWluL2NhdGVnb3JpZXMvJHtpZH1gKTtcclxuXHJcbiAgICB3aW5kb3cuYWxlcnQoXCLjgqvjg4bjgrTjg6rjg7zkvZzmiJDjgZfjgb7jgZfjgZ9cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi02XCI+44Kr44OG44K044Oq44O85L2c5oiQ44Oa44O844K4PC9oMj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAg44Kr44OG44K044Oq44O8XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLWdyYXktNDAwIGJvcmRlciByb3VuZGVkLXNtIG10LTIgbWItNCB3LVszMDBweF1cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIOabtOaWsOODnOOCv+ODsyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1bNzBweF0gbXQtMTAgcHktMiBteS1hdXRvIHB4LTQgdGV4dC13aGl0ZSBib3JkZXItZ3JheS00MDAgYmctZ3JlZW4tNTAwIHJvdW5kZWQgaG92ZXI6Y3Vyc29yIGhvdmVyOmJnLWdyZWVuLTcwMCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOabtOaWsFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LVs3MHB4XSBtdC0xMCBtbC00IHB5LTIgcHgtNCB0ZXh0LXdoaXRlIGJvcmRlci1ncmF5LTQwMCBiZy1yZWQtNTAwIHJvdW5kZWQgaG92ZXI6Y3Vyc29yIGhvdmVyOmJnLWdyZWVuLTcwMCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uZGJsY2xpY2tlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDliYrpmaRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJQYWdlIiwibmFtZSIsInNldE5hbWUiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwianNvbiIsInB1c2giLCJ3aW5kb3ciLCJhbGVydCIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJvbmRibGNsaWNrZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/categories/[id]/page.tsx\n"));

/***/ })

});