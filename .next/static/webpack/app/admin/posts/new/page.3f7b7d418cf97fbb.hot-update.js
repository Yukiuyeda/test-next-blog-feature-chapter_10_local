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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Page = ()=>{\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\",\n        thumbnailUrl: \"\",\n        categories: []\n    });\n    const handleChange = (e)=>{\n        setFormValues({\n            ...formValues,\n            [e.target.name]: e.target.value\n        });\n    };\n    //カテゴリーの変更を反映\n    const handleCategories = (e)=>{\n        //選択値を格納するための配列\n        const _categories = [];\n        //<option>要素を走査\n        const opts = e.target.options;\n        for (const opt of opts){\n            if (opt.selected) {\n                _categories.push(opt.value);\n            }\n            //配列をstateに反映\n            setFormValues({\n                ...formValues,\n                [e.target.name]: _categories\n            });\n        }\n    };\n    const [categoris, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //カテゴリーリストを取得\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetcher = async ()=>{\n            const res = await fetch(\"./api/admin/categories\");\n            const { categories } = await res.json();\n            setCategories(categories);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-xl mb-6\",\n                children: \"記事作成ページ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"タイトル\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"title\",\n                        name: \"title\",\n                        onChange: handleChange,\n                        value: formValues.title,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"content\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"内容\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"title\",\n                        name: \"title\",\n                        onChange: handleChange,\n                        value: formValues.content,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"thumnbnailUrl\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"サムネイルURL\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"thumbnailUrl\",\n                        name: \"thumbnailUrl\",\n                        onChange: handleChange,\n                        value: formValues.thumbnailUrl,\n                        className: \"p-3 border-gray-400 border rounded-sm mt-2 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"categories\",\n                        className: \"text-sm text-gray-700\",\n                        children: \"カテゴリー\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"categories\",\n                        name: \"categories\",\n                        value: formValues.categories,\n                        multiple: true,\n                        onChange: handleCategories\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\new\\\\page.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"jQhpG6CCOpQmqH6ni96ZpyPhqFU=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcG9zdHMvbmV3L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUl5RTtBQUV6RSxNQUFNRyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBVTtRQUNwREksT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsWUFBWSxFQUFFO0lBQ2hCO0lBRUEsTUFBTUMsZUFBZSxDQUNuQkM7UUFJQU4sY0FBYztZQUFFLEdBQUdELFVBQVU7WUFBRSxDQUFDTyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUNqRTtJQUVBLGFBQWE7SUFDYixNQUFNQyxtQkFBbUIsQ0FBQ0o7UUFDeEIsZUFBZTtRQUNmLE1BQU1LLGNBQWMsRUFBRTtRQUN0QixlQUFlO1FBQ2YsTUFBTUMsT0FBT04sRUFBRUMsTUFBTSxDQUFDTSxPQUFPO1FBQzdCLEtBQUssTUFBTUMsT0FBT0YsS0FBTTtZQUN0QixJQUFJRSxJQUFJQyxRQUFRLEVBQUU7Z0JBQ2hCSixZQUFZSyxJQUFJLENBQUNGLElBQUlMLEtBQUs7WUFDNUI7WUFFQSxhQUFhO1lBQ2JULGNBQWM7Z0JBQUMsR0FBR0QsVUFBVTtnQkFBRSxDQUFDTyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRztZQUFXO1FBQzVEO0lBQ0Y7SUFFQSxNQUFNLENBQUNNLFdBQVdDLGNBQWMsR0FBR3JCLCtDQUFRQSxDQUFhLEVBQUU7SUFFMUQsYUFBYTtJQUNiRCxnREFBU0EsQ0FBQztRQUNSLE1BQU11QixVQUFVO1lBQ2QsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO1lBQ3hCLE1BQU0sRUFBRWpCLFVBQVUsRUFBRSxHQUFHLE1BQU1nQixJQUFJRSxJQUFJO1lBQzNDSixjQUFjZDtRQUNaO0lBRUYsR0FBRyxFQUFFO0lBRUgscUJBQ0UsOERBQUNtQjs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUF5Qjs7Ozs7OzBCQUN2Qyw4REFBQ0M7Z0JBQUtELFdBQVU7O2tDQUNkLDhEQUFDRTt3QkFBTUMsU0FBUTt3QkFBUUgsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FHekQsOERBQUNJO3dCQUNDQyxJQUFHO3dCQUNIdEIsTUFBSzt3QkFDTHVCLFVBQVUxQjt3QkFDVkksT0FBT1YsV0FBV0UsS0FBSzt3QkFDdkJ3QixXQUFVOzs7Ozs7a0NBR1osOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFVSCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUczRCw4REFBQ087d0JBQ0NGLElBQUc7d0JBQ0h0QixNQUFLO3dCQUNMdUIsVUFBVTFCO3dCQUNWSSxPQUFPVixXQUFXRyxPQUFPO3dCQUN6QnVCLFdBQVU7Ozs7OztrQ0FHWiw4REFBQ0U7d0JBQU1DLFNBQVE7d0JBQWdCSCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUdqRSw4REFBQ0k7d0JBQ0NDLElBQUc7d0JBQ0h0QixNQUFLO3dCQUNMdUIsVUFBVTFCO3dCQUNWSSxPQUFPVixXQUFXSSxZQUFZO3dCQUM5QnNCLFdBQVU7Ozs7OztrQ0FHWiw4REFBQ0U7d0JBQU1DLFNBQVE7d0JBQWFILFdBQVU7a0NBQXdCOzs7Ozs7a0NBRzlELDhEQUFDUTt3QkFDQ0gsSUFBRzt3QkFDSHRCLE1BQUs7d0JBQ0xDLE9BQU9WLFdBQVdLLFVBQVU7d0JBQzVCOEIsVUFBVTt3QkFDVkgsVUFBVXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0E5Rk1aO0tBQUFBO0FBZ0dOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRtaW4vcG9zdHMvbmV3L3BhZ2UudHN4P2U0NGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCJAL2FwcC90eXBlcy9jYXRlZ29yeVwiO1xyXG5pbXBvcnQgeyBOZXdQb3N0IH0gZnJvbSBcIkAvYXBwL3R5cGVzL25ld3Bvc3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFNlbGVjdEhUTUxBdHRyaWJ1dGVzLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlPE5ld1Bvc3Q+KHtcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgY29udGVudDogXCJcIixcclxuICAgIHRodW1ibmFpbFVybDogXCJcIixcclxuICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoXHJcbiAgICBlOlxyXG4gICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcbiAgICAgIHwgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cclxuICApID0+IHtcclxuICAgIHNldEZvcm1WYWx1ZXMoeyAuLi5mb3JtVmFsdWVzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8v44Kr44OG44K044Oq44O844Gu5aSJ5pu044KS5Y+N5pigXHJcbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcmllcyA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgIC8v6YG45oqe5YCk44KS5qC857SN44GZ44KL44Gf44KB44Gu6YWN5YiXXHJcbiAgICBjb25zdCBfY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgLy88b3B0aW9uPuimgee0oOOCkui1sOafu1xyXG4gICAgY29uc3Qgb3B0cyA9IGUudGFyZ2V0Lm9wdGlvbnM7XHJcbiAgICBmb3IgKGNvbnN0IG9wdCBvZiBvcHRzKSB7XHJcbiAgICAgIGlmIChvcHQuc2VsZWN0ZWQpIHtcclxuICAgICAgICBfY2F0ZWdvcmllcy5wdXNoKG9wdC52YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8v6YWN5YiX44KSc3RhdGXjgavlj43mmKBcclxuICAgICAgc2V0Rm9ybVZhbHVlcyh7Li4uZm9ybVZhbHVlcywgW2UudGFyZ2V0Lm5hbWVdOiBfY2F0ZWdvcmllc30pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbY2F0ZWdvcmlzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlPENhdGVnb3J5W10+KFtdKTtcclxuXHJcbiAgLy/jgqvjg4bjgrTjg6rjg7zjg6rjgrnjg4jjgpLlj5blvpdcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIuL2FwaS9hZG1pbi9jYXRlZ29yaWVzXCIpO1xyXG4gICAgICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbnNldENhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XHJcbiAgfVxyXG4gIFxyXG59LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi02XCI+6KiY5LqL5L2c5oiQ44Oa44O844K4PC9oMj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgIOOCv+OCpOODiOODq1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMudGl0bGV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLWdyYXktNDAwIGJvcmRlciByb3VuZGVkLXNtIG10LTIgbWItNFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICDlhoXlrrlcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLmNvbnRlbnR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLWdyYXktNDAwIGJvcmRlciByb3VuZGVkLXNtIG10LTIgbWItNFwiXHJcbiAgICAgICAgPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGh1bW5ibmFpbFVybFwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAg44K144Og44ON44Kk44OrVVJMXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwidGh1bWJuYWlsVXJsXCJcclxuICAgICAgICAgIG5hbWU9XCJ0aHVtYm5haWxVcmxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLnRodW1ibmFpbFVybH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBib3JkZXItZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQtc20gbXQtMiBtYi00XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhdGVnb3JpZXNcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgIOOCq+ODhuOCtOODquODvFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgaWQ9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICBtdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDYXRlZ29yaWVzfVxyXG4gICAgICAgID48L3NlbGVjdD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFnZSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwidGl0bGUiLCJjb250ZW50IiwidGh1bWJuYWlsVXJsIiwiY2F0ZWdvcmllcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDYXRlZ29yaWVzIiwiX2NhdGVnb3JpZXMiLCJvcHRzIiwib3B0aW9ucyIsIm9wdCIsInNlbGVjdGVkIiwicHVzaCIsImNhdGVnb3JpcyIsInNldENhdGVnb3JpZXMiLCJmZXRjaGVyIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJtdWx0aXBsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/posts/new/page.tsx\n"));

/***/ })

});