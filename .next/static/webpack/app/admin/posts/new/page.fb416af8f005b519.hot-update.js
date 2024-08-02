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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Page = ()=>{\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\",\n        thumbnailUrl: \"https://placehold.jp/800x400.png\",\n        selectedcategories: []\n    });\n    const handleChange = (e)=>{\n        setFormValues({\n            ...formValues,\n            [e.target.name]: e.target.value\n        });\n    };\n    //カテゴリーの変更を反映\n    const handleCategories = (e)=>{\n        //選択値を格納するための配列\n        const _categories = [];\n        //<option>要素を走査\n        const opts = e.target.options;\n        for (const opt of opts){\n            if (opt.selected) {\n                _categories.push(opt.value);\n            }\n            //配列をstateに反映\n            setFormValues({\n                ...formValues,\n                [e.target.name]: _categories\n            });\n        }\n    };\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //カテゴリーリストを取得\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetcher = async ()=>{\n            const res = await fetch(\"./api/admin/categories\");\n            const { categories } = await res.json();\n            setCategories(categories);\n        };\n        fetcher();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-xl mb-6\",\n                children: \"記事作成ページ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"タイトル\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"title\",\n                        name: \"title\",\n                        onChange: handleChange,\n                        value: formValues.title,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"content\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"内容\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"title\",\n                        name: \"title\",\n                        onChange: handleChange,\n                        value: formValues.content,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"thumnbnailUrl\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"サムネイルURL\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"thumbnailUrl\",\n                        name: \"thumbnailUrl\",\n                        onChange: handleChange,\n                        value: formValues.thumbnailUrl,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"categories\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"カテゴリー\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"categories\",\n                        name: \"categories\",\n                        value: formValues.categories,\n                        multiple: true,\n                        onChange: handleCategories,\n                        children: categories.map((category)=>{\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: category.name,\n                                children: category.name\n                            }, category, false, {\n                                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"3OlQlwJRg5FSkId88YcgEfXVq+U=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcG9zdHMvbmV3L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUl5RTtBQUV6RSxNQUFNRyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBVTtRQUNwREksT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsb0JBQW9CLEVBQUU7SUFDeEI7SUFFQSxNQUFNQyxlQUFlLENBQ25CQztRQUlBTixjQUFjO1lBQUUsR0FBR0QsVUFBVTtZQUFFLENBQUNPLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLEVBQUVDLE1BQU0sQ0FBQ0UsS0FBSztRQUFDO0lBQ2pFO0lBRUEsYUFBYTtJQUNiLE1BQU1DLG1CQUFtQixDQUFDSjtRQUN4QixlQUFlO1FBQ2YsTUFBTUssY0FBYyxFQUFFO1FBQ3RCLGVBQWU7UUFDZixNQUFNQyxPQUFPTixFQUFFQyxNQUFNLENBQUNNLE9BQU87UUFDN0IsS0FBSyxNQUFNQyxPQUFPRixLQUFNO1lBQ3RCLElBQUlFLElBQUlDLFFBQVEsRUFBRTtnQkFDaEJKLFlBQVlLLElBQUksQ0FBQ0YsSUFBSUwsS0FBSztZQUM1QjtZQUVBLGFBQWE7WUFDYlQsY0FBYztnQkFBRSxHQUFHRCxVQUFVO2dCQUFFLENBQUNPLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVHO1lBQVk7UUFDOUQ7SUFDRjtJQUVBLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHckIsK0NBQVFBLENBQWEsRUFBRTtJQUUzRCxhQUFhO0lBQ2JELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXVCLFVBQVU7WUFDZCxNQUFNQyxNQUFNLE1BQU1DLE1BQU07WUFDeEIsTUFBTSxFQUFFSixVQUFVLEVBQUUsR0FBRyxNQUFNRyxJQUFJRSxJQUFJO1lBQ3JDSixjQUFjRDtRQUNoQjtRQUVBRTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUF5Qjs7Ozs7OzBCQUN2Qyw4REFBQ0M7Z0JBQUtELFdBQVU7O2tDQUNkLDhEQUFDRTt3QkFBTUMsU0FBUTt3QkFBUUgsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FHekQsOERBQUNJO3dCQUNDQyxJQUFHO3dCQUNIdEIsTUFBSzt3QkFDTHVCLFVBQVUxQjt3QkFDVkksT0FBT1YsV0FBV0UsS0FBSzt3QkFDdkJ3QixXQUFVOzs7Ozs7a0NBR1osOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFVSCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUczRCw4REFBQ087d0JBQ0NGLElBQUc7d0JBQ0h0QixNQUFLO3dCQUNMdUIsVUFBVTFCO3dCQUNWSSxPQUFPVixXQUFXRyxPQUFPO3dCQUN6QnVCLFdBQVU7Ozs7OztrQ0FHWiw4REFBQ0U7d0JBQU1DLFNBQVE7d0JBQWdCSCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUdqRSw4REFBQ0k7d0JBQ0NDLElBQUc7d0JBQ0h0QixNQUFLO3dCQUNMdUIsVUFBVTFCO3dCQUNWSSxPQUFPVixXQUFXSSxZQUFZO3dCQUM5QnNCLFdBQVU7Ozs7OztrQ0FHWiw4REFBQ0U7d0JBQU1DLFNBQVE7d0JBQWFILFdBQVU7a0NBQXdCOzs7Ozs7a0NBRzlELDhEQUFDUTt3QkFDQ0gsSUFBRzt3QkFDSHRCLE1BQUs7d0JBQ0xDLE9BQU9WLFdBQVdrQixVQUFVO3dCQUM1QmlCLFVBQVU7d0JBQ1ZILFVBQVVyQjtrQ0FFVE8sV0FBV2tCLEdBQUcsQ0FBQ0MsQ0FBQUE7MENBQ2QsOERBQUNDO2dDQUFPNUIsT0FBTzJCLFNBQVM1QixJQUFJOzBDQUFrQjRCLFNBQVM1QixJQUFJOytCQUF4QjRCOzs7Ozt3QkFDckM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBbkdNdEM7S0FBQUE7QUFxR04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hZG1pbi9wb3N0cy9uZXcvcGFnZS50c3g/ZTQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIkAvYXBwL3R5cGVzL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7IE5ld1Bvc3QgfSBmcm9tIFwiQC9hcHAvdHlwZXMvbmV3cG9zdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgU2VsZWN0SFRNTEF0dHJpYnV0ZXMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGU8TmV3UG9zdD4oe1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgdGh1bWJuYWlsVXJsOiBcImh0dHBzOi8vcGxhY2Vob2xkLmpwLzgwMHg0MDAucG5nXCIsXHJcbiAgICBzZWxlY3RlZGNhdGVnb3JpZXM6IFtdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoXHJcbiAgICBlOlxyXG4gICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcbiAgICAgIHwgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cclxuICApID0+IHtcclxuICAgIHNldEZvcm1WYWx1ZXMoeyAuLi5mb3JtVmFsdWVzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8v44Kr44OG44K044Oq44O844Gu5aSJ5pu044KS5Y+N5pigXHJcbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcmllcyA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgIC8v6YG45oqe5YCk44KS5qC857SN44GZ44KL44Gf44KB44Gu6YWN5YiXXHJcbiAgICBjb25zdCBfY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgLy88b3B0aW9uPuimgee0oOOCkui1sOafu1xyXG4gICAgY29uc3Qgb3B0cyA9IGUudGFyZ2V0Lm9wdGlvbnM7XHJcbiAgICBmb3IgKGNvbnN0IG9wdCBvZiBvcHRzKSB7XHJcbiAgICAgIGlmIChvcHQuc2VsZWN0ZWQpIHtcclxuICAgICAgICBfY2F0ZWdvcmllcy5wdXNoKG9wdC52YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8v6YWN5YiX44KSc3RhdGXjgavlj43mmKBcclxuICAgICAgc2V0Rm9ybVZhbHVlcyh7IC4uLmZvcm1WYWx1ZXMsIFtlLnRhcmdldC5uYW1lXTogX2NhdGVnb3JpZXMgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGU8Q2F0ZWdvcnlbXT4oW10pO1xyXG5cclxuICAvL+OCq+ODhuOCtOODquODvOODquOCueODiOOCkuWPluW+l1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi4vYXBpL2FkbWluL2NhdGVnb3JpZXNcIik7XHJcbiAgICAgIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi02XCI+6KiY5LqL5L2c5oiQ44Oa44O844K4PC9oMj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgIOOCv+OCpOODiOODq1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMudGl0bGV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLWdyYXktNDAwIGJvcmRlciByb3VuZGVkLXNtIG10LTIgbWItNFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICDlhoXlrrlcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLmNvbnRlbnR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLWdyYXktNDAwIGJvcmRlciByb3VuZGVkLXNtIG10LTIgbWItNFwiXHJcbiAgICAgICAgPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGh1bW5ibmFpbFVybFwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAg44K144Og44ON44Kk44OrVVJMXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwidGh1bWJuYWlsVXJsXCJcclxuICAgICAgICAgIG5hbWU9XCJ0aHVtYm5haWxVcmxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLnRodW1ibmFpbFVybH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBib3JkZXItZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQtc20gbXQtMiBtYi00XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhdGVnb3JpZXNcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgIOOCq+ODhuOCtOODquODvFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgaWQ9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICBtdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDYXRlZ29yaWVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NhdGVnb3J5Lm5hbWV9IGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeS5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInRpdGxlIiwiY29udGVudCIsInRodW1ibmFpbFVybCIsInNlbGVjdGVkY2F0ZWdvcmllcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDYXRlZ29yaWVzIiwiX2NhdGVnb3JpZXMiLCJvcHRzIiwib3B0aW9ucyIsIm9wdCIsInNlbGVjdGVkIiwicHVzaCIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZmV0Y2hlciIsInJlcyIsImZldGNoIiwianNvbiIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwic2VsZWN0IiwibXVsdGlwbGUiLCJtYXAiLCJjYXRlZ29yeSIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/posts/new/page.tsx\n"));

/***/ })

});