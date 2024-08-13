"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import { posts } from '../../data/posts';\n\nconst Main = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // APIでpostsを取得する処理をuseEffectで実行します。\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetcher = async ()=>{\n            const res = await fetch(\"/api/posts\");\n            const data = await res.json();\n            console.log(data);\n            setPosts(data.posts);\n            setIsLoading(false);\n        };\n        fetcher();\n    }, []);\n    //読み込み中の表示\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"読み込み中…\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[800px] mx-auto py-10 px-5 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex flex-col gap-8 mx-auto px-0 max-w-screen-md\",\n            children: posts.map((post)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"list-none\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/posts/\".concat(post.id),\n                        className: \"no-underline\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border border-gray-400 p-4 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between h-7\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-400 text-[11px]\",\n                                                children: new Date(post.createdAt).toLocaleDateString()\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"flex\",\n                                                children: post.postCategories.map((pc)=>{\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"text-[#0068D3] border border-[#0068D3] rounded text-[0.8rem] p-1 mr-2\",\n                                                        children: pc.category.name\n                                                    }, pc.category.id, false, {\n                                                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 29\n                                                    }, undefined);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-black mt-2 mb-4 text-[24px]\",\n                                        children: \"APIで取得した\".concat(post.title)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-black max-h-12 overflow-hidden\",\n                                        dangerouslySetInnerHTML: {\n                                            __html: post.content\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, undefined)\n                }, post.id, false, {\n                    fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"qhliF5PbFshCXO7Uorkt3Z75jXw=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVtRDtBQUNuRCw0Q0FBNEM7QUFDZjtBQUc3QixNQUFNSSxPQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFTLEVBQUU7SUFDN0MsTUFBTSxDQUFDSyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFVO0lBRXBELG9DQUFvQztJQUNwQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxVQUFVO1lBQ2QsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO1lBQ3hCLE1BQU1DLE9BQTBCLE1BQU1GLElBQUlHLElBQUk7WUFDOUNDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWk4sU0FBU00sS0FBS1AsS0FBSztZQUNuQkcsYUFBYTtRQUNmO1FBRUFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsVUFBVTtJQUNWLElBQUlGLFdBQVc7UUFDYixxQkFBTyw4REFBQ1M7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNBO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUdELFdBQVU7c0JBQ1haLE1BQU1jLEdBQUcsQ0FBQyxDQUFDQztnQkFDVixxQkFDRSw4REFBQ0M7b0JBQWlCSixXQUFVOzhCQUMxQiw0RUFBQ2QsaURBQUlBO3dCQUFDbUIsTUFBTSxVQUFrQixPQUFSRixLQUFLRyxFQUFFO3dCQUFJTixXQUFVO2tDQUN6Qyw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDTztnREFBRVAsV0FBVTswREFDVixJQUFJUSxLQUFLTCxLQUFLTSxTQUFTLEVBQUVDLGtCQUFrQjs7Ozs7OzBEQUU5Qyw4REFBQ1Q7Z0RBQUdELFdBQVU7MERBQ1hHLEtBQUtRLGNBQWMsQ0FBQ1QsR0FBRyxDQUFDLENBQUNVO29EQUN4QixxQkFDRSw4REFBQ1I7d0RBRUNKLFdBQVU7a0VBRVRZLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBSTt1REFIWkYsR0FBR0MsUUFBUSxDQUFDUCxFQUFFOzs7OztnREFNekI7Ozs7Ozs7Ozs7OztrREFHSiw4REFBQ1A7d0NBQUlDLFdBQVU7a0RBQW9DLFdBQXNCLE9BQVhHLEtBQUtZLEtBQUs7Ozs7OztrREFDeEUsOERBQUNoQjt3Q0FDQ0MsV0FBVTt3Q0FDVmdCLHlCQUF5Qjs0Q0FBRUMsUUFBUWQsS0FBS2UsT0FBTzt3Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkF4QmpEZixLQUFLRyxFQUFFOzs7OztZQStCcEI7Ozs7Ozs7Ozs7O0FBSVI7R0E5RE1uQjtLQUFBQTtBQWdFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBwb3N0cyB9IGZyb20gJy4uLy4uL2RhdGEvcG9zdHMnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiQC9hcHAvdHlwZXMvcG9zdFwiO1xyXG5cclxuY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZTxQb3N0W10+KFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gIC8vIEFQSeOBp3Bvc3Rz44KS5Y+W5b6X44GZ44KL5Yem55CG44KSdXNlRWZmZWN044Gn5a6f6KGM44GX44G+44GZ44CCXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9wb3N0c1wiKTtcclxuICAgICAgY29uc3QgZGF0YTogeyBwb3N0czogUG9zdFtdIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0UG9zdHMoZGF0YS5wb3N0cyk7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoZXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8v6Kqt44G/6L6844G/5Lit44Gu6KGo56S6XHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXY+6Kqt44G/6L6844G/5Lit4oCmPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzgwMHB4XSBteC1hdXRvIHB5LTEwIHB4LTUgYmctd2hpdGVcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTggbXgtYXV0byBweC0wIG1heC13LXNjcmVlbi1tZFwiPlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT1cImxpc3Qtbm9uZVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0LmlkfWB9IGNsYXNzTmFtZT1cIm5vLXVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHAtNCBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtWzExcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5wb3N0Q2F0ZWdvcmllcy5tYXAoKHBjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BjLmNhdGVnb3J5LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsjMDA2OEQzXSBib3JkZXIgYm9yZGVyLVsjMDA2OEQzXSByb3VuZGVkIHRleHQtWzAuOHJlbV0gcC0xIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGMuY2F0ZWdvcnkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtdC0yIG1iLTQgdGV4dC1bMjRweF1cIj57YEFQSeOBp+WPluW+l+OBl+OBnyR7cG9zdC50aXRsZX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgbWF4LWgtMTIgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiTWFpbiIsInBvc3RzIiwic2V0UG9zdHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmZXRjaGVyIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsInBvc3QiLCJsaSIsImhyZWYiLCJpZCIsInAiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicG9zdENhdGVnb3JpZXMiLCJwYyIsImNhdGVnb3J5IiwibmFtZSIsInRpdGxlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});