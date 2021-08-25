"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./src/pages/api/graphql.js":
/*!**********************************!*\
  !*** ./src/pages/api/graphql.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nconst typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`\n  type BlogPost {\n    id: String\n    text: String\n  }\n  type Query {\n    blogPosts: [BlogPost]\n  }\n  type Mutation {\n    addBlogPost(text: String): BlogPost\n    editBlogPost(id: String, text: String): BlogPost\n    deleteBlogPost(id: String): BlogPost\n  }\n`;\nconst resolvers = {\n  Query: {\n    blogPosts: (_parent, _args, _context) => {\n      return prisma.blogPost.findMany();\n    }\n  },\n  Mutation: {\n    addBlogPost: (_parent, {\n      text\n    }, _context) => {\n      return prisma.blogPost.create({\n        data: {\n          text\n        }\n      });\n    },\n    editBlogPost: (_parent, {\n      id,\n      text\n    }, _context) => {\n      return prisma.blogPost.update({\n        where: {\n          id\n        },\n        data: {\n          text\n        }\n      });\n    },\n    deleteBlogPost: (_parent, {\n      id\n    }, _context) => {\n      return prisma.blogPost.delete({\n        where: {\n          id\n        }\n      });\n    }\n  }\n};\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  typeDefs,\n  resolvers\n});\nconst handler = apolloServer.createHandler({\n  path: \"/api/graphql\"\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2dyYXBocWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1HLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBRUEsTUFBTUUsUUFBUSxHQUFHSixvREFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWJBO0FBZUEsTUFBTUssU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsU0FBUyxFQUFFLENBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFpQkMsUUFBakIsS0FBOEI7QUFDdkMsYUFBT1AsTUFBTSxDQUFDUSxRQUFQLENBQWdCQyxRQUFoQixFQUFQO0FBQ0Q7QUFISSxHQURTO0FBT2hCQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFLENBQUNOLE9BQUQsRUFBVTtBQUFFTyxNQUFBQTtBQUFGLEtBQVYsRUFBb0JMLFFBQXBCLEtBQWlDO0FBQzVDLGFBQU9QLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkssTUFBaEIsQ0FBdUI7QUFBRUMsUUFBQUEsSUFBSSxFQUFFO0FBQUVGLFVBQUFBO0FBQUY7QUFBUixPQUF2QixDQUFQO0FBQ0QsS0FITztBQUlSRyxJQUFBQSxZQUFZLEVBQUUsQ0FBQ1YsT0FBRCxFQUFVO0FBQUVXLE1BQUFBLEVBQUY7QUFBTUosTUFBQUE7QUFBTixLQUFWLEVBQXdCTCxRQUF4QixLQUFxQztBQUNqRCxhQUFPUCxNQUFNLENBQUNRLFFBQVAsQ0FBZ0JTLE1BQWhCLENBQXVCO0FBQUVDLFFBQUFBLEtBQUssRUFBRTtBQUFFRixVQUFBQTtBQUFGLFNBQVQ7QUFBaUJGLFFBQUFBLElBQUksRUFBRTtBQUFFRixVQUFBQTtBQUFGO0FBQXZCLE9BQXZCLENBQVA7QUFDRCxLQU5PO0FBT1JPLElBQUFBLGNBQWMsRUFBRSxDQUFDZCxPQUFELEVBQVU7QUFBRVcsTUFBQUE7QUFBRixLQUFWLEVBQWtCVCxRQUFsQixLQUErQjtBQUM3QyxhQUFPUCxNQUFNLENBQUNRLFFBQVAsQ0FBZ0JZLE1BQWhCLENBQXVCO0FBQUVGLFFBQUFBLEtBQUssRUFBRTtBQUFFRixVQUFBQTtBQUFGO0FBQVQsT0FBdkIsQ0FBUDtBQUNEO0FBVE87QUFQTSxDQUFsQjtBQW9CQSxNQUFNSyxZQUFZLEdBQUcsSUFBSXZCLDZEQUFKLENBQWlCO0FBQUVHLEVBQUFBLFFBQUY7QUFBWUMsRUFBQUE7QUFBWixDQUFqQixDQUFyQjtBQUVBLE1BQU1vQixPQUFPLEdBQUdELFlBQVksQ0FBQ0UsYUFBYixDQUEyQjtBQUFFQyxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUEzQixDQUFoQjtBQUVPLE1BQU1DLE1BQU0sR0FBRztBQUFFQyxFQUFBQSxHQUFHLEVBQUU7QUFBRUMsSUFBQUEsVUFBVSxFQUFFO0FBQWQ7QUFBUCxDQUFmO0FBRVAsaUVBQWVMLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtbmV4dC8uL3NyYy9wYWdlcy9hcGkvZ3JhcGhxbC5qcz80ZmFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgQXBvbGxvU2VydmVyIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItbWljcm9cIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICB0eXBlIEJsb2dQb3N0IHtcbiAgICBpZDogU3RyaW5nXG4gICAgdGV4dDogU3RyaW5nXG4gIH1cbiAgdHlwZSBRdWVyeSB7XG4gICAgYmxvZ1Bvc3RzOiBbQmxvZ1Bvc3RdXG4gIH1cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgYWRkQmxvZ1Bvc3QodGV4dDogU3RyaW5nKTogQmxvZ1Bvc3RcbiAgICBlZGl0QmxvZ1Bvc3QoaWQ6IFN0cmluZywgdGV4dDogU3RyaW5nKTogQmxvZ1Bvc3RcbiAgICBkZWxldGVCbG9nUG9zdChpZDogU3RyaW5nKTogQmxvZ1Bvc3RcbiAgfVxuYDtcblxuY29uc3QgcmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIGJsb2dQb3N0czogKF9wYXJlbnQsIF9hcmdzLCBfY29udGV4dCkgPT4ge1xuICAgICAgcmV0dXJuIHByaXNtYS5ibG9nUG9zdC5maW5kTWFueSgpO1xuICAgIH0sXG4gIH0sXG5cbiAgTXV0YXRpb246IHtcbiAgICBhZGRCbG9nUG9zdDogKF9wYXJlbnQsIHsgdGV4dCB9LCBfY29udGV4dCkgPT4ge1xuICAgICAgcmV0dXJuIHByaXNtYS5ibG9nUG9zdC5jcmVhdGUoeyBkYXRhOiB7IHRleHQgfSB9KTtcbiAgICB9LFxuICAgIGVkaXRCbG9nUG9zdDogKF9wYXJlbnQsIHsgaWQsIHRleHQgfSwgX2NvbnRleHQpID0+IHtcbiAgICAgIHJldHVybiBwcmlzbWEuYmxvZ1Bvc3QudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyB0ZXh0IH0gfSk7XG4gICAgfSxcbiAgICBkZWxldGVCbG9nUG9zdDogKF9wYXJlbnQsIHsgaWQgfSwgX2NvbnRleHQpID0+IHtcbiAgICAgIHJldHVybiBwcmlzbWEuYmxvZ1Bvc3QuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSk7XG5cbmNvbnN0IGhhbmRsZXIgPSBhcG9sbG9TZXJ2ZXIuY3JlYXRlSGFuZGxlcih7IHBhdGg6IFwiL2FwaS9ncmFwaHFsXCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFwaTogeyBib2R5UGFyc2VyOiBmYWxzZSB9IH07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbImdxbCIsIkFwb2xsb1NlcnZlciIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJibG9nUG9zdHMiLCJfcGFyZW50IiwiX2FyZ3MiLCJfY29udGV4dCIsImJsb2dQb3N0IiwiZmluZE1hbnkiLCJNdXRhdGlvbiIsImFkZEJsb2dQb3N0IiwidGV4dCIsImNyZWF0ZSIsImRhdGEiLCJlZGl0QmxvZ1Bvc3QiLCJpZCIsInVwZGF0ZSIsIndoZXJlIiwiZGVsZXRlQmxvZ1Bvc3QiLCJkZWxldGUiLCJhcG9sbG9TZXJ2ZXIiLCJoYW5kbGVyIiwiY3JlYXRlSGFuZGxlciIsInBhdGgiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/graphql.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/graphql.js"));
module.exports = __webpack_exports__;

})();