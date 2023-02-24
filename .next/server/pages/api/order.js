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
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@sanity/client");;

/***/ }),

/***/ "(api)/./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity_client__WEBPACK_IMPORTED_MODULE_0__]);\n_sanity_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// build a connection b/w sanity and appication just like php,html setup\n\n\nconst client = (0,_sanity_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    projectId: \"7bgbzvwb\",\n    dataset: \"production\",\n    apiVersion: \"2023-02-15\",\n    useCdn: true,\n    token: process.env.SANITY_API_TOKEN\n});\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);\n// function load the images from database to client  side\nconst urlFor = (source)=>{\n    // console.log(\"huehue\",builder.image(source).url());\n    return builder.image(source);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0VBQXdFO0FBQ2I7QUFDWjtBQUN4QyxNQUFNRyxTQUFTRiw0REFBWUEsQ0FBQztJQUMvQkcsV0FBVztJQUNYQyxTQUFTO0lBQ1RDLFlBQVk7SUFDWkMsUUFBUSxJQUFJO0lBQ1pDLE9BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0FBQ3RDLEdBQUU7QUFFRixNQUFNQyxVQUFVVix3REFBZUEsQ0FBQ0M7QUFFaEMseURBQXlEO0FBQ2xELE1BQU1VLFNBQVMsQ0FBQ0MsU0FBVztJQUM5QixxREFBcUQ7SUFDckQsT0FBT0YsUUFBUUcsS0FBSyxDQUFDRDtBQUN6QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50X2Zvb2QvLi9saWIvY2xpZW50LmpzP2U2OWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVpbGQgYSBjb25uZWN0aW9uIGIvdyBzYW5pdHkgYW5kIGFwcGljYXRpb24ganVzdCBsaWtlIHBocCxodG1sIHNldHVwXG5pbXBvcnQge2NyZWF0ZUNsaWVudCBhcyBzYW5pdHlDbGllbnR9IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xuaW1wb3J0IEltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBzYW5pdHlDbGllbnQoe1xuICAgIHByb2plY3RJZDogXCI3YmdienZ3YlwiLFxuICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgICBhcGlWZXJzaW9uOiAnMjAyMy0wMi0xNScsXG4gICAgdXNlQ2RuOiB0cnVlLFxuICAgIHRva2VuOnByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU5cbn0pXG5cbmNvbnN0IGJ1aWxkZXIgPSBJbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcblxuLy8gZnVuY3Rpb24gbG9hZCB0aGUgaW1hZ2VzIGZyb20gZGF0YWJhc2UgdG8gY2xpZW50ICBzaWRlXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaHVlaHVlXCIsYnVpbGRlci5pbWFnZShzb3VyY2UpLnVybCgpKTtcbiAgICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInNhbml0eUNsaWVudCIsIkltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwidG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiU0FOSVRZX0FQSV9UT0tFTiIsImJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/client.js\n");

/***/ }),

/***/ "(api)/./pages/api/order.js":
/*!****************************!*\
  !*** ./pages/api/order.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/client */ \"(api)/./lib/client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"POST\":\n            const newOrder = await JSON.parse(req.body);\n            console.log(\"newOrder\", newOrder);\n            try {\n                await _lib_client__WEBPACK_IMPORTED_MODULE_0__.client.create({\n                    _type: \"order\",\n                    name: newOrder.name,\n                    address: newOrder.address,\n                    phone: newOrder.phone,\n                    total: newOrder.total,\n                    method: newOrder.method,\n                    status: 1\n                }).then((data)=>{\n                    // console.log('data order.20', data)\n                    res.status(200).json(data._id);\n                });\n            } catch (error) {\n                // console.log(error)\n                res.status(500).json({\n                    msg: \"Error, check console\",\n                    err: error\n                });\n            }\n            break;\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFFM0IsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsT0FBUUQsSUFBSUUsTUFBTTtRQUNkLEtBQUs7WUFDRCxNQUFNQyxXQUFXLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0wsSUFBSU0sSUFBSTtZQUMxQ0MsUUFBUUMsR0FBRyxDQUFDLFlBQVdMO1lBQ3ZCLElBQ0E7Z0JBQ0ksTUFBTUwsc0RBQ0MsQ0FBQztvQkFDSlksT0FBTztvQkFDUEMsTUFBTVIsU0FBU1EsSUFBSTtvQkFDbkJDLFNBQVNULFNBQVNTLE9BQU87b0JBQ3pCQyxPQUFPVixTQUFTVSxLQUFLO29CQUNyQkMsT0FBUVgsU0FBU1csS0FBSztvQkFDdEJaLFFBQVFDLFNBQVNELE1BQU07b0JBQ3ZCYSxRQUFRO2dCQUNaLEdBQ0NDLElBQUksQ0FBQyxDQUFDQyxPQUFTO29CQUNaLHFDQUFxQztvQkFDckNoQixJQUFJYyxNQUFNLENBQUMsS0FBS0csSUFBSSxDQUFDRCxLQUFLRSxHQUFHO2dCQUNqQztZQUNKLEVBQ0EsT0FBT0MsT0FBTztnQkFDVixxQkFBcUI7Z0JBQ3JCbkIsSUFBSWMsTUFBTSxDQUFDLEtBQUtHLElBQUksQ0FBQztvQkFBRUcsS0FBSztvQkFBd0JDLEtBQUtGO2dCQUFNO1lBQ25FO1lBQ0EsS0FBTTtJQUNkO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudF9mb29kLy4vcGFnZXMvYXBpL29yZGVyLmpzPzM5OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBhd2FpdCBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3T3JkZXJcIixuZXdPcmRlcik7XG4gICAgICAgICAgICB0cnkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpZW50XG4gICAgICAgICAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIF90eXBlOiBcIm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5ld09yZGVyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IG5ld09yZGVyLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiBuZXdPcmRlci5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgOiBuZXdPcmRlci50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBuZXdPcmRlci5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGEgb3JkZXIuMjAnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhLl9pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtc2c6IFwiRXJyb3IsIGNoZWNrIGNvbnNvbGVcIiwgZXJyOiBlcnJvciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5ld09yZGVyIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGUiLCJfdHlwZSIsIm5hbWUiLCJhZGRyZXNzIiwicGhvbmUiLCJ0b3RhbCIsInN0YXR1cyIsInRoZW4iLCJkYXRhIiwianNvbiIsIl9pZCIsImVycm9yIiwibXNnIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/order.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order.js"));
module.exports = __webpack_exports__;

})();