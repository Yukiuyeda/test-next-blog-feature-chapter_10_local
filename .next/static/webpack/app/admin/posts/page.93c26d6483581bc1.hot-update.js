"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/posts/page",{

/***/ "(app-pages-browser)/./src/app/admin/posts/page.tsx":
/*!**************************************!*\
  !*** ./src/app/admin/posts/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst page = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const getAllPosts = async ()=>{\n        const res = await fetch(\"http://localhost:3000/api/admin/posts\");\n        const { _posts } = await res.json();\n        setPosts(_posts);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getAllPosts;\n    }, []);\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center w-full mb-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold text-xl\",\n                        children: \"記事一覧\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-600 text-white p-2 rounded-md hover:bg-green-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/admin/posts/new\",\n                            children: \"新規作成\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: posts.map((post)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/admin/posts/${}\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4 border-b-[1px] border-blue-300\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold text-xl\",\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-[12px] text-gray-600\",\n                                        children: new Date(post.createdAt).toLocaleDateString()\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, undefined)\n                    }, post.id, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border-b-[1px] border-blue-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"font-bold text-xl\",\n                        children: \"title\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[12px] text-gray-600\",\n                        children: \"2024/1/3\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\owner\\\\dev\\\\reactProject\\\\test-next-blog\\\\src\\\\app\\\\admin\\\\posts\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcG9zdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUc2QjtBQUNzQjtBQUVuRCxNQUFNSSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBUyxFQUFFO0lBRTdDLE1BQU1JLGNBQWM7UUFDbEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO1FBQ3hCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtRQUNqQ0wsU0FBU0k7SUFDWDtJQUVBUixnREFBU0EsQ0FBQztRQUNSSztJQUNGLEdBQUcsRUFBRTtJQUVMSyxRQUFRQyxHQUFHLENBQUNSO0lBRVoscUJBQ0UsOERBQUNTOzswQkFFQyw4REFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBb0I7Ozs7OztrQ0FDbEMsOERBQUNFO3dCQUFPRixXQUFVO2tDQUNoQiw0RUFBQ2YsaURBQUlBOzRCQUFDa0IsTUFBSztzQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtsQyw4REFBQ0M7MEJBQ0VkLE1BQU1lLEdBQUcsQ0FBQyxDQUFDQztvQkFDVixxQkFDRSw4REFBQ0M7a0NBQ0MsNEVBQUN0QixpREFBSUE7NEJBQUNrQixNQUFLO3NDQUNULDRFQUFDSjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNRO3dDQUFHUixXQUFVO2tEQUFxQk0sS0FBS0csS0FBSzs7Ozs7O2tEQUM3Qyw4REFBQ0M7d0NBQUVWLFdBQVU7a0RBQ1YsSUFBSVcsS0FBS0wsS0FBS00sU0FBUyxFQUFFQyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUwzQ1AsS0FBS1EsRUFBRTs7Ozs7Z0JBV3BCOzs7Ozs7MEJBRUYsOERBQUNmO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1E7d0JBQUdSLFdBQVU7a0NBQW9COzs7Ozs7a0NBQ2xDLDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRDtHQWhETVg7QUFrRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hZG1pbi9wb3N0cy9wYWdlLnRzeD9kMDNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCJAL2FwcC90eXBlcy9wb3N0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZTxQb3N0W10+KFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0QWxsUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYWRtaW4vcG9zdHNcIik7XHJcbiAgICBjb25zdCB7IF9wb3N0cyB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHNldFBvc3RzKF9wb3N0cyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFsbFBvc3RzO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2cocG9zdHMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8q6KiY5LqL5LiA6Kan44Go5paw6KaP5L2c5oiQ44KS5qiq5Lim44GzICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbWItMTZcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGxcIj7oqJjkuovkuIDopqc8L2gyPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ncmVlbi01MDBcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vcG9zdHMvbmV3XCI+5paw6KaP5L2c5oiQPC9MaW5rPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiDoqJjkuovkuIDopqfooajnpLogKi99XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3Bvc3RzLyR7fVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLWItWzFweF0gYm9yZGVyLWJsdWUtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bFwiPntwb3N0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEycHhdIHRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocG9zdC5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXItYi1bMXB4XSBib3JkZXItYmx1ZS0zMDBcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGxcIj50aXRsZTwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTJweF0gdGV4dC1ncmF5LTYwMFwiPjIwMjQvMS8zPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwYWdlIiwicG9zdHMiLCJzZXRQb3N0cyIsImdldEFsbFBvc3RzIiwicmVzIiwiZmV0Y2giLCJfcG9zdHMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYnV0dG9uIiwiaHJlZiIsInVsIiwibWFwIiwicG9zdCIsImxpIiwiaDMiLCJ0aXRsZSIsInAiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/posts/page.tsx\n"));

/***/ })

});