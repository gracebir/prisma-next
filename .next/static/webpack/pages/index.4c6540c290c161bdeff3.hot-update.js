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

/***/ "./src/graphql/queries.js":
/*!********************************!*\
  !*** ./src/graphql/queries.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_BLOGPOSTS\": function() { return /* binding */ GET_BLOGPOSTS; },\n/* harmony export */   \"ADD_POST\": function() { return /* binding */ ADD_POST; },\n/* harmony export */   \"DELETE_BLOGPOST\": function() { return /* binding */ DELETE_BLOGPOST; },\n/* harmony export */   \"EDIT_BLOGPOST\": function() { return /* binding */ EDIT_BLOGPOST; }\n/* harmony export */ });\n/* harmony import */ var _home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _templateObject4() {\n  var data = (0,_home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n    mutation EditBlogPost($id: String, $text:String){\\n        editBlogPost(id:$id, text:$text){\\n            id\\n            text\\n        }\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = (0,_home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n    mutation DeleteBlogPost($id:String){\\n        deleteBlogPost(id: $id){\\n            id\\n            text\\n        }\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = (0,_home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n    mutation AddBlogPost($text: String){\\n        addBlogPost(text: $text){\\n            id\\n            text\\n        }\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_home_ps_dev_Documents_projects_next_project_prisma_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n{\\n  blogPosts{\\n    id\\n    text\\n  }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar GET_BLOGPOSTS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nvar ADD_POST = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\nvar DELETE_BLOGPOST = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject3());\nvar EDIT_BLOGPOST = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject4());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9xdWVyaWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU9DLGFBQWEsR0FBR0QsbURBQUgsbUJBQXBCO0FBVUEsSUFBTUUsUUFBUSxHQUFHRixtREFBSCxvQkFBZDtBQVVBLElBQU1HLGVBQWUsR0FBR0gsbURBQUgsb0JBQXJCO0FBVUEsSUFBTUksYUFBYSxHQUFHSixtREFBSCxvQkFBbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dyYXBocWwvcXVlcmllcy5qcz8wMzA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG5leHBvcnQgY29uc3QgIEdFVF9CTE9HUE9TVFMgPSBncWxgXG57XG4gIGJsb2dQb3N0c3tcbiAgICBpZFxuICAgIHRleHRcbiAgfVxufVxuYDtcblxuXG5leHBvcnQgY29uc3QgQUREX1BPU1QgPSBncWxgXG4gICAgbXV0YXRpb24gQWRkQmxvZ1Bvc3QoJHRleHQ6IFN0cmluZyl7XG4gICAgICAgIGFkZEJsb2dQb3N0KHRleHQ6ICR0ZXh0KXtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBERUxFVEVfQkxPR1BPU1QgPSBncWxgXG4gICAgbXV0YXRpb24gRGVsZXRlQmxvZ1Bvc3QoJGlkOlN0cmluZyl7XG4gICAgICAgIGRlbGV0ZUJsb2dQb3N0KGlkOiAkaWQpe1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cblxuZXhwb3J0IGNvbnN0IEVESVRfQkxPR1BPU1QgPSBncWxgXG4gICAgbXV0YXRpb24gRWRpdEJsb2dQb3N0KCRpZDogU3RyaW5nLCAkdGV4dDpTdHJpbmcpe1xuICAgICAgICBlZGl0QmxvZ1Bvc3QoaWQ6JGlkLCB0ZXh0OiR0ZXh0KXtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgIH1cbiAgICB9XG5gOyJdLCJuYW1lcyI6WyJncWwiLCJHRVRfQkxPR1BPU1RTIiwiQUREX1BPU1QiLCJERUxFVEVfQkxPR1BPU1QiLCJFRElUX0JMT0dQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/queries.js\n");

/***/ })

});