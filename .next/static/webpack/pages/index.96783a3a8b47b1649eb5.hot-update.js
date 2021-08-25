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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_BlogPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogPosts */ \"./src/components/BlogPosts.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _components_SubmitBlogPostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SubmitBlogPostForm */ \"./src/components/SubmitBlogPostForm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/queries */ \"./src/graphql/queries.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/ps-dev/Documents/projects/next-project/prisma-next/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.ADD_POST, {\n    onCompleted: function onCompleted(data) {\n      window.location.reload();\n    }\n  }),\n      _useMutation2 = (0,_home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 1),\n      addBlogPost = _useMutation2[0];\n\n  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.DELETE_BLOGPOST, {\n    onCompleted: function onCompleted(data) {\n      window.location.reload();\n    }\n  }),\n      _useMutation4 = (0,_home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation3, 1),\n      deleteBlogPost = _useMutation4[0];\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    addBlogPost({\n      variables: {\n        text: e.target.text.value\n      }\n    });\n  };\n\n  var onDelete = function onDelete() {\n    return deleteBlogPost({\n      variables: {\n        id: id\n      }\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__.default, {\n    maxWidth: \"xs\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitBlogPostForm__WEBPACK_IMPORTED_MODULE_4__.default, {\n      onSubmit: onSubmit\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPosts__WEBPACK_IMPORTED_MODULE_3__.default, {\n      onDelete: onDelete\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"uIqgLuC0QntTEv1YxPlQZ59qbH8=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU08sSUFBVCxHQUFnQjtBQUFBOztBQUFBLHFCQUdQSCwyREFBVyxDQUFDQyxzREFBRCxFQUFVO0FBQ3pDRyxJQUFBQSxXQUFXLEVBQUUscUJBQUNDLElBQUQsRUFBVTtBQUNyQkMsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNEO0FBSHdDLEdBQVYsQ0FISjtBQUFBO0FBQUEsTUFHdEJDLFdBSHNCOztBQUFBLHNCQVNKVCwyREFBVyxDQUFDRSw2REFBRCxFQUFrQjtBQUNwREUsSUFBQUEsV0FBVyxFQUFFLHFCQUFDQyxJQUFELEVBQVU7QUFDckJDLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRDtBQUhtRCxHQUFsQixDQVRQO0FBQUE7QUFBQSxNQVN0QkUsY0FUc0I7O0FBZTdCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FKLElBQUFBLFdBQVcsQ0FBQztBQUFFSyxNQUFBQSxTQUFTLEVBQUM7QUFBRUMsUUFBQUEsSUFBSSxFQUFFSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0QsSUFBVCxDQUFjRTtBQUF0QjtBQUFaLEtBQUQsQ0FBWDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNUixjQUFjLENBQUM7QUFBRUksTUFBQUEsU0FBUyxFQUFFO0FBQUVLLFFBQUFBLEVBQUUsRUFBRkE7QUFBRjtBQUFiLEtBQUQsQ0FBcEI7QUFBQSxHQUFqQjs7QUFFQSxzQkFDRSw4REFBQyxnRUFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FLDhEQUFDLG1FQUFEO0FBQW9CLGNBQVEsRUFBRVI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBUUUsOERBQUMsMERBQUQ7QUFBVyxjQUFRLEVBQUVPO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQW5DdUJmO1VBR0FILHlEQU1HQTs7O0tBVEhHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80NTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBCbG9nUG9zdHMgZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nUG9zdHMnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcbmltcG9ydCBTdWJtaXRCbG9nUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJtaXRCbG9nUG9zdEZvcm0nXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHsgQUREX1BPU1QsIERFTEVURV9CTE9HUE9TVCB9IGZyb20gJy4uL2dyYXBocWwvcXVlcmllcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cbiAgY29uc3QgW2FkZEJsb2dQb3N0XSA9IHVzZU11dGF0aW9uKEFERF9QT1NULHtcbiAgICBvbkNvbXBsZXRlZDogKGRhdGEpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IFtkZWxldGVCbG9nUG9zdF0gPSB1c2VNdXRhdGlvbihERUxFVEVfQkxPR1BPU1QsIHtcbiAgICBvbkNvbXBsZXRlZDogKGRhdGEpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGFkZEJsb2dQb3N0KHsgdmFyaWFibGVzOnsgdGV4dDogZS50YXJnZXQudGV4dC52YWx1ZX19KVxuICB9XG5cbiAgY29uc3Qgb25EZWxldGUgPSAoKSA9PiBkZWxldGVCbG9nUG9zdCh7IHZhcmlhYmxlczogeyBpZH19KVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhzXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJsb2c8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFN1Ym1pdEJsb2dQb3N0Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9Lz5cbiAgICAgIDxCbG9nUG9zdHMgb25EZWxldGU9e29uRGVsZXRlfSAvPlxuICAgICBcbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJCbG9nUG9zdHMiLCJDb250YWluZXIiLCJTdWJtaXRCbG9nUG9zdEZvcm0iLCJ1c2VNdXRhdGlvbiIsIkFERF9QT1NUIiwiREVMRVRFX0JMT0dQT1NUIiwiSG9tZSIsIm9uQ29tcGxldGVkIiwiZGF0YSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWRkQmxvZ1Bvc3QiLCJkZWxldGVCbG9nUG9zdCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFibGVzIiwidGV4dCIsInRhcmdldCIsInZhbHVlIiwib25EZWxldGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});