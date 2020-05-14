(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/new.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/new.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/bg2.jpeg */ \"./src/images/bg2.jpeg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://use.fontawesome.com/releases/v5.5.0/css/all.css);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"body{\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: sans-serif;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\r\\n  background-size: cover;\\r\\n\\r\\n}\\r\\n.new-box{\\r\\n  transition: background .5s ease-out, box-shadow 1s ease-out;\\r\\n  background: #018383;/**/\\r\\n  border: 1px solid #4caf50; /**/\\r\\n  width: 280px;\\r\\n  padding: 50px /**/;\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%,-50%);\\r\\n  color: white;\\r\\n  -webkit-box-shadow: 25px 25px 5px 0px rgba(0,0,0,0.75);\\r\\n-moz-box-shadow: 25px 25px 5px 0px rgba(0,0,0,0.75);\\r\\nbox-shadow: 25px 25px 5px 0px rgba(0,0,0,0.75);\\r\\n  \\r\\n}\\r\\n.new-box:hover{/**/\\r\\n  box-shadow: none;\\r\\n  background: none;\\r\\n\\r\\n}\\r\\n.new-box h1{\\r\\n  float: left;\\r\\n  font-size: 40px;\\r\\n  border-bottom: 6px solid #42e6a4;\\r\\n  margin-bottom: 50px;\\r\\n  padding: 13px 0;\\r\\n}\\r\\n.textbox{\\r\\n  width: 100%;\\r\\n  overflow: hidden;\\r\\n  font-size: 20px;\\r\\n  padding: 8px 0;\\r\\n  margin: 8px 0;\\r\\n  border-bottom: 1px solid #42e6a4;\\r\\n}\\r\\n.textbox i{\\r\\n  width: 26px;\\r\\n  float: left;\\r\\n  text-align: center;\\r\\n}\\r\\n.textbox input, textarea, select{\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: none;\\r\\n  color: white;\\r\\n  font-size: 18px;\\r\\n  width: 80%;\\r\\n  float: left;\\r\\n  margin: 0 10px;\\r\\n}\\r\\n.btnProject{\\r\\n  width: 100%;\\r\\n  background: none;\\r\\n  border: 2px solid #4caf50;\\r\\n  color: white;\\r\\n  padding: 5px;\\r\\n  font-size: 18px;\\r\\n  cursor: pointer;\\r\\n  margin: 12px 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/new.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/css/new.css":
/*!*************************!*\
  !*** ./src/css/new.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./new.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/new.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/new.css?");

/***/ }),

/***/ "./src/images/bg2.jpeg":
/*!*****************************!*\
  !*** ./src/images/bg2.jpeg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/images/bg2.jpeg?");

/***/ })

}]);