"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_BlogPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogPosts */ \"./src/components/BlogPosts.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _components_SubmitBlogPostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SubmitBlogPostForm */ \"./src/components/SubmitBlogPostForm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/queries */ \"./src/graphql/queries.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/ps-dev/Documents/projects/next-project/prisma-next/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.ADD_POST, {\n    onCompleted: function onCompleted(data) {\n      window.location.reload();\n    }\n  }),\n      _useMutation2 = (0,_home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 1),\n      addBlogPost = _useMutation2[0];\n\n  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.DELETE_BLOGPOST, {\n    onCompleted: function onCompleted(data) {\n      window.location.reload();\n    }\n  }),\n      _useMutation4 = (0,_home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation3, 1),\n      deleteBlogPost = _useMutation4[0];\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    addBlogPost({\n      variables: {\n        text: e.target.text.value\n      }\n    });\n  };\n\n  var onDelete = function onDelete(id) {\n    return deleteBlogPost({\n      variables: {\n        id: id\n      }\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__.default, {\n    maxWidth: \"xs\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitBlogPostForm__WEBPACK_IMPORTED_MODULE_4__.default, {\n      onSubmit: onSubmit\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPosts__WEBPACK_IMPORTED_MODULE_3__.default, {\n      onDelete: onDelete\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"uIqgLuC0QntTEv1YxPlQZ59qbH8=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU08sSUFBVCxHQUFnQjtBQUFBOztBQUFBLHFCQUdQSCwyREFBVyxDQUFDQyxzREFBRCxFQUFVO0FBQ3pDRyxJQUFBQSxXQUFXLEVBQUUscUJBQUNDLElBQUQsRUFBVTtBQUNyQkMsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNEO0FBSHdDLEdBQVYsQ0FISjtBQUFBO0FBQUEsTUFHdEJDLFdBSHNCOztBQUFBLHNCQVNKVCwyREFBVyxDQUFDRSw2REFBRCxFQUFrQjtBQUNwREUsSUFBQUEsV0FBVyxFQUFFLHFCQUFDQyxJQUFELEVBQVU7QUFDckJDLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRDtBQUhtRCxHQUFsQixDQVRQO0FBQUE7QUFBQSxNQVN0QkUsY0FUc0I7O0FBZTdCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FKLElBQUFBLFdBQVcsQ0FBQztBQUFFSyxNQUFBQSxTQUFTLEVBQUM7QUFBRUMsUUFBQUEsSUFBSSxFQUFFSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0QsSUFBVCxDQUFjRTtBQUF0QjtBQUFaLEtBQUQsQ0FBWDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsRUFBRDtBQUFBLFdBQVFULGNBQWMsQ0FBQztBQUFFSSxNQUFBQSxTQUFTLEVBQUU7QUFBRUssUUFBQUEsRUFBRSxFQUFGQTtBQUFGO0FBQWIsS0FBRCxDQUF0QjtBQUFBLEdBQWpCOztBQUVBLHNCQUNFLDhEQUFDLGdFQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBT0UsOERBQUMsbUVBQUQ7QUFBb0IsY0FBUSxFQUFFUjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRSw4REFBQywwREFBRDtBQUFXLGNBQVEsRUFBRU87QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBbkN1QmY7VUFHQUgseURBTUdBOzs7S0FUSEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEJsb2dQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2dQb3N0cydcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xuaW1wb3J0IFN1Ym1pdEJsb2dQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1N1Ym1pdEJsb2dQb3N0Rm9ybSdcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyBBRERfUE9TVCwgREVMRVRFX0JMT0dQT1NUIH0gZnJvbSAnLi4vZ3JhcGhxbC9xdWVyaWVzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cblxuICBjb25zdCBbYWRkQmxvZ1Bvc3RdID0gdXNlTXV0YXRpb24oQUREX1BPU1Qse1xuICAgIG9uQ29tcGxldGVkOiAoZGF0YSkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgW2RlbGV0ZUJsb2dQb3N0XSA9IHVzZU11dGF0aW9uKERFTEVURV9CTE9HUE9TVCwge1xuICAgIG9uQ29tcGxldGVkOiAoZGF0YSkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfSlcblxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgYWRkQmxvZ1Bvc3QoeyB2YXJpYWJsZXM6eyB0ZXh0OiBlLnRhcmdldC50ZXh0LnZhbHVlfX0pXG4gIH1cblxuICBjb25zdCBvbkRlbGV0ZSA9IChpZCkgPT4gZGVsZXRlQmxvZ1Bvc3QoeyB2YXJpYWJsZXM6IHsgaWR9fSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4c1wiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CbG9nPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuXG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxTdWJtaXRCbG9nUG9zdEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fS8+XG4gICAgICA8QmxvZ1Bvc3RzIG9uRGVsZXRlPXtvbkRlbGV0ZX0gLz5cbiAgICAgXG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiQmxvZ1Bvc3RzIiwiQ29udGFpbmVyIiwiU3VibWl0QmxvZ1Bvc3RGb3JtIiwidXNlTXV0YXRpb24iLCJBRERfUE9TVCIsIkRFTEVURV9CTE9HUE9TVCIsIkhvbWUiLCJvbkNvbXBsZXRlZCIsImRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFkZEJsb2dQb3N0IiwiZGVsZXRlQmxvZ1Bvc3QiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhYmxlcyIsInRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uRGVsZXRlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});