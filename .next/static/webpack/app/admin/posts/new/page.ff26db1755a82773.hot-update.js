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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Page = ()=>{\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\",\n        thumbnailUrl: \"https://placehold.jp/800x400.png\",\n        selectedcategories: []\n    });\n    const handleChange = (e)=>{\n        setFormValues({\n            ...formValues,\n            [e.target.name]: e.target.value\n        });\n    };\n    //カテゴリーの変更を反映\n    const handleCategories = (e)=>{\n        //選択値を格納するための配列\n        const _categories = [];\n        //<option>要素を走査\n        const opts = e.target.options;\n        for (const opt of opts){\n            if (opt.selected) {\n                _categories.push(opt.value);\n            }\n            //配列をstateに反映\n            setFormValues({\n                ...formValues,\n                [e.target.name]: _categories\n            });\n        }\n    };\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //カテゴリーリストを取得\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetcher = async ()=>{\n            const res = await fetch(\"./api/admin/categories\");\n            const { categories } = await res.json();\n            setCategories(categories);\n        };\n        fetcher();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-xl mb-6\",\n                children: \"記事作成ページ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"タイトル\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"title\",\n                        name: \"title\",\n                        onChange: handleChange,\n                        value: formValues.title,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"content\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"内容\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"title\",\n                        name: \"title\",\n                        onChange: handleChange,\n                        value: formValues.content,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"thumnbnailUrl\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"サムネイルURL\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"thumbnailUrl\",\n                        name: \"thumbnailUrl\",\n                        onChange: handleChange,\n                        value: formValues.thumbnailUrl,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"categories\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"カテゴリー\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"categories\",\n                        name: \"categories\",\n                        value: formValues.categories,\n                        multiple: true,\n                        onChange: handleCategories,\n                        children: categories.map((category)=>{\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: category.name,\n                                children: category.n\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"3OlQlwJRg5FSkId88YcgEfXVq+U=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcG9zdHMvbmV3L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUl5RTtBQUV6RSxNQUFNRyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBVTtRQUNwREksT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsb0JBQW9CLEVBQUU7SUFDeEI7SUFFQSxNQUFNQyxlQUFlLENBQ25CQztRQUlBTixjQUFjO1lBQUUsR0FBR0QsVUFBVTtZQUFFLENBQUNPLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLEVBQUVDLE1BQU0sQ0FBQ0UsS0FBSztRQUFDO0lBQ2pFO0lBRUEsYUFBYTtJQUNiLE1BQU1DLG1CQUFtQixDQUFDSjtRQUN4QixlQUFlO1FBQ2YsTUFBTUssY0FBYyxFQUFFO1FBQ3RCLGVBQWU7UUFDZixNQUFNQyxPQUFPTixFQUFFQyxNQUFNLENBQUNNLE9BQU87UUFDN0IsS0FBSyxNQUFNQyxPQUFPRixLQUFNO1lBQ3RCLElBQUlFLElBQUlDLFFBQVEsRUFBRTtnQkFDaEJKLFlBQVlLLElBQUksQ0FBQ0YsSUFBSUwsS0FBSztZQUM1QjtZQUVBLGFBQWE7WUFDYlQsY0FBYztnQkFBRSxHQUFHRCxVQUFVO2dCQUFFLENBQUNPLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVHO1lBQVk7UUFDOUQ7SUFDRjtJQUVBLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHckIsK0NBQVFBLENBQWEsRUFBRTtJQUUzRCxhQUFhO0lBQ2JELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXVCLFVBQVU7WUFDZCxNQUFNQyxNQUFNLE1BQU1DLE1BQU07WUFDeEIsTUFBTSxFQUFFSixVQUFVLEVBQUUsR0FBRyxNQUFNRyxJQUFJRSxJQUFJO1lBQ3JDSixjQUFjRDtRQUNoQjtRQUVBRTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUF5Qjs7Ozs7OzBCQUN2Qyw4REFBQ0M7Z0JBQUtELFdBQVU7O2tDQUNkLDhEQUFDRTt3QkFBTUMsU0FBUTt3QkFBUUgsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FHekQsOERBQUNJO3dCQUNDQyxJQUFHO3dCQUNIdEIsTUFBSzt3QkFDTHVCLFVBQVUxQjt3QkFDVkksT0FBT1YsV0FBV0UsS0FBSzt3QkFDdkJ3QixXQUFVOzs7Ozs7a0NBR1osOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFVSCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUczRCw4REFBQ087d0JBQ0NGLElBQUc7d0JBQ0h0QixNQUFLO3dCQUNMdUIsVUFBVTFCO3dCQUNWSSxPQUFPVixXQUFXRyxPQUFPO3dCQUN6QnVCLFdBQVU7Ozs7OztrQ0FHWiw4REFBQ0U7d0JBQU1DLFNBQVE7d0JBQWdCSCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUdqRSw4REFBQ0k7d0JBQ0NDLElBQUc7d0JBQ0h0QixNQUFLO3dCQUNMdUIsVUFBVTFCO3dCQUNWSSxPQUFPVixXQUFXSSxZQUFZO3dCQUM5QnNCLFdBQVU7Ozs7OztrQ0FHWiw4REFBQ0U7d0JBQU1DLFNBQVE7d0JBQWFILFdBQVU7a0NBQXdCOzs7Ozs7a0NBRzlELDhEQUFDUTt3QkFDQ0gsSUFBRzt3QkFDSHRCLE1BQUs7d0JBQ0xDLE9BQU9WLFdBQVdrQixVQUFVO3dCQUM1QmlCLFVBQVU7d0JBQ1ZILFVBQVVyQjtrQ0FFVE8sV0FBV2tCLEdBQUcsQ0FBQ0MsQ0FBQUE7MENBQ2QsOERBQUNDO2dDQUFPNUIsT0FBTzJCLFNBQVM1QixJQUFJOzBDQUFHNEIsU0FBU0UsQ0FBQzs7Ozs7O3dCQUMzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0FuR014QztLQUFBQTtBQXFHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FkbWluL3Bvc3RzL25ldy9wYWdlLnRzeD9lNDRmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiQC9hcHAvdHlwZXMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHsgTmV3UG9zdCB9IGZyb20gXCJAL2FwcC90eXBlcy9uZXdwb3N0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBTZWxlY3RIVE1MQXR0cmlidXRlcywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZTxOZXdQb3N0Pih7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICB0aHVtYm5haWxVcmw6IFwiaHR0cHM6Ly9wbGFjZWhvbGQuanAvODAweDQwMC5wbmdcIixcclxuICAgIHNlbGVjdGVkY2F0ZWdvcmllczogW10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChcclxuICAgIGU6XHJcbiAgICAgIHwgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cclxuICAgICAgfCBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxyXG4gICkgPT4ge1xyXG4gICAgc2V0Rm9ybVZhbHVlcyh7IC4uLmZvcm1WYWx1ZXMsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy/jgqvjg4bjgrTjg6rjg7zjga7lpInmm7TjgpLlj43mmKBcclxuICBjb25zdCBoYW5kbGVDYXRlZ29yaWVzID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgLy/pgbjmip7lgKTjgpLmoLzntI3jgZnjgovjgZ/jgoHjga7phY3liJdcclxuICAgIGNvbnN0IF9jYXRlZ29yaWVzID0gW107XHJcbiAgICAvLzxvcHRpb24+6KaB57Sg44KS6LWw5p+7XHJcbiAgICBjb25zdCBvcHRzID0gZS50YXJnZXQub3B0aW9ucztcclxuICAgIGZvciAoY29uc3Qgb3B0IG9mIG9wdHMpIHtcclxuICAgICAgaWYgKG9wdC5zZWxlY3RlZCkge1xyXG4gICAgICAgIF9jYXRlZ29yaWVzLnB1c2gob3B0LnZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy/phY3liJfjgpJzdGF0ZeOBq+WPjeaYoFxyXG4gICAgICBzZXRGb3JtVmFsdWVzKHsgLi4uZm9ybVZhbHVlcywgW2UudGFyZ2V0Lm5hbWVdOiBfY2F0ZWdvcmllcyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZTxDYXRlZ29yeVtdPihbXSk7XHJcblxyXG4gIC8v44Kr44OG44K044Oq44O844Oq44K544OI44KS5Y+W5b6XXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiLi9hcGkvYWRtaW4vY2F0ZWdvcmllc1wiKTtcclxuICAgICAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaGVyKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTZcIj7oqJjkuovkvZzmiJDjg5rjg7zjgrg8L2gyPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAg44K/44Kk44OI44OrXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy50aXRsZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBib3JkZXItZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQtc20gbXQtMiBtYi00XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgIOWGheWuuVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuY29udGVudH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBib3JkZXItZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQtc20gbXQtMiBtYi00XCJcclxuICAgICAgICA+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aHVtbmJuYWlsVXJsXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICDjgrXjg6Djg43jgqTjg6tVUkxcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJ0aHVtYm5haWxVcmxcIlxyXG4gICAgICAgICAgbmFtZT1cInRodW1ibmFpbFVybFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMudGh1bWJuYWlsVXJsfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0zIGJvcmRlci1ncmF5LTQwMCBib3JkZXIgcm91bmRlZC1zbSBtdC0yIG1iLTRcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2F0ZWdvcmllc1wiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAg44Kr44OG44K044Oq44O8XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBpZD1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgbmFtZT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuY2F0ZWdvcmllc31cclxuICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhdGVnb3JpZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y2F0ZWdvcnkubmFtZX0+e2NhdGVnb3J5Lm59PC9vcHRpb24+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFnZSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwidGl0bGUiLCJjb250ZW50IiwidGh1bWJuYWlsVXJsIiwic2VsZWN0ZWRjYXRlZ29yaWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUNhdGVnb3JpZXMiLCJfY2F0ZWdvcmllcyIsIm9wdHMiLCJvcHRpb25zIiwib3B0Iiwic2VsZWN0ZWQiLCJwdXNoIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJmZXRjaGVyIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJtdWx0aXBsZSIsIm1hcCIsImNhdGVnb3J5Iiwib3B0aW9uIiwibiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/posts/new/page.tsx\n"));

/***/ })

});