/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"*{\\n    box-sizing: border-box;\\n    list-style: none;\\n    margin: 0;\\n    padding: 0;\\n    text-decoration: none;\\n}\\n\\nbody{\\n    background: #02a8a8;\\n}\\n\\n.content{\\n   \\n    border: 3px solid white;\\n    border-radius: 50px 0 0 50px;\\n    height: 1000px;\\n    margin: 0 auto;\\n    width: 80%;\\n    \\n}\\n\\n/* MAIN PAGE */\\n/* ASIDE */\\n\\naside{\\n    background: #f5dea3;\\n    \\n    border-radius: 50px 0 0 50px;\\n    float: left;\\n    height: 1000px;\\n    width: 25%;\\n}\\n\\n/* SECTION */\\n\\nsection{\\n    background: #018383;\\n    float: left;\\n    height: 1000px;\\n    width: 75%;\\n}\\naside h2, section h2{\\n    color: #fff;\\n    padding: 20px;\\n    text-align: center;\\n}\\n\\naside img:hover{\\n    cursor: pointer;\\n}\\n\\naside ul{\\n    color: white;\\n    font-size: 18px;\\n    text-align: center;\\n}\\naside ul:hover{\\n    cursor: pointer;\\n}\\n\\n\\n/* NEW PROJECT FORM PAGE */\\n\\n.new-box{\\n    transition: background .5s ease-out, box-shadow 1s ease-out;\\n    background: #018383;/**/\\n    border: 1px solid #4caf50; /**/\\n    width:50%;\\n    padding: 50px /**/;\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%,-50%);\\n    color: white;\\n    -webkit-box-shadow: 25px 25px 5px 0px rgba(0,0,0,0.75);\\n  -moz-box-shadow: 25px 25px 5px 0px rgba(0,0,0,0.75);\\n  box-shadow: 25px 25px 5px 0px rgba(0,0,0,0.75);\\n    \\n  }\\n  .new-box:hover{/**/\\n    box-shadow: none;\\n    background: none;\\n  \\n  }\\n  .new-box h1{\\n    float: left;\\n    font-size: 40px;\\n    border-bottom: 6px solid #42e6a4;\\n    margin-bottom: 50px;\\n    padding: 13px 0;\\n  }\\n  .textbox{\\n    width: 100%;\\n    overflow: hidden;\\n    font-size: 20px;\\n    padding: 8px 0;\\n    margin: 8px 0;\\n    border-bottom: 1px solid #42e6a4;\\n  }\\n  .textbox i{\\n    width: 26px;\\n    float: left;\\n    text-align: center;\\n  }\\n  .textbox input, textarea, select{\\n    border: none;\\n    outline: none;\\n    background: none;\\n    color: white;\\n    font-size: 18px;\\n    width: 80%;\\n    float: left;\\n    margin: 0 10px;\\n  }\\n  .btnProject{\\n    width: 100%;\\n    background: none;\\n    border: 2px solid #4caf50;\\n    color: white;\\n    padding: 5px;\\n    font-size: 18px;\\n    cursor: pointer;\\n    margin: 12px 0;\\n  }\\n\\n\\n\\n/*colors 018383   02a8a8   42e6a4    f5dea3*/\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getLocalstorage = () => {\n    const currentProjects = JSON.parse(localStorage.getItem('myProjects'));\n    return currentProjects;\n  }\n\n  const projects = (() =>{\n    const current = [];\n    return{ current }\n})()\n\nconst renderProjects = () => {\n    getLocalstorage().forEach((project) => {\n        const item = document.createElement('li');\n        item.textContent = project.title;\n        document.querySelector(\"#projectsList\").appendChild(item);\n    }) \n}\n\nconst renderNewProject = () =>{\n    const item = document.createElement('li');\n    item.textContent = projects.current[projects.current.length - 1].title;\n    document.querySelector(\"#projectsList\").appendChild(item);\n}\n\nconst home = () =>{\n    /* ASIDE */\n    let aside = document.createElement(\"aside\");\n    let title = document.createElement(\"h2\");\n    title.innerText = \"Projects\";\n    let img = document.createElement(\"img\");\n    img.setAttribute(\"src\", \"../src/images/add.svg\");\n    img.setAttribute(\"alt\", \"add-icon\");\n    img.setAttribute(\"id\", \"add-icon\");\n    title.appendChild(img);\n    let ul = document.createElement(\"ul\");\n    ul.setAttribute(\"id\", \"projectsList\");\n    aside.appendChild(title);\n    aside.appendChild(ul);\n    document.querySelector(\".content\").appendChild(aside);\n\n    /* SECTION */\n    let section = document.createElement(\"section\");\n    let title2 = document.createElement(\"h2\");\n    title2.innerText = \"TO-DO LIST\";\n    section.appendChild(title2)\n    document.querySelector(\".content\").appendChild(section);\n\n    /*LISTENERS*/\n    document.querySelector(\"#add-icon\").addEventListener(\"click\", createTaskForm);\n}\n\nconst removeWindow = () =>{\n    const projectWindow = document.querySelector(\".new-box\");\n    projectWindow.parentNode.removeChild(projectWindow);\n}\n\nconst saveLocalstorage = (currentProjects) => {\n    localStorage.setItem('myProjects', JSON.stringify(currentProjects));\n    renderNewProject()\n    removeWindow()\n  }\n\n  const project = (title, description) => {\n    return { title: title, description: description }\n  } \n\nconst createProject = (title, description) => {\n    const newProject = project(title, description)\n    projects.current.push(newProject)\n    saveLocalstorage(projects.current)\n}  \n\nconst validation = (title, description) =>{\n    if(title && description){  \n        createProject(title, description);\n    }\n}\n\nconst createTaskForm = () => {\n    let body = document.querySelector(\"body\")\n  \n    \n    let div = document.createElement(\"div\");\n    div.classList.add(\"new-box\");\n    const h1 = document.createElement(\"h1\");\n    h1.innerText = \"New Project\";\n    div.appendChild(h1);\n    const div2 = document.createElement(\"div\");\n    div2.classList.add(\"textbox\");\n    const i = document.createElement(\"i\");\n    i.classList.add(\"fas\", \"fa-tag\");\n    div2.appendChild(i);\n    const input = document.createElement(\"input\");\n    input.setAttribute(\"type\", \"text\"); \n    input.setAttribute(\"placeholder\", \"Title\"); \n    input.setAttribute(\"id\", \"title\");\n    div2.appendChild(input);\n    div.appendChild(div2);\n\n    const div3 = document.createElement(\"div\");\n    div3.classList.add(\"textbox\");\n    const i2 = document.createElement(\"i\");\n    i2.classList.add(\"fas\", \"fa-edit\");\n    div3.appendChild(i);\n    const textarea = document.createElement(\"textarea\");\n    textarea.setAttribute(\"placeholder\", \"Description\"); \n    textarea.setAttribute(\"id\", \"description\");\n    div3.appendChild(textarea);\n    div.appendChild(div3);\n\n   const createButton = document.createElement(\"input\");\n   createButton.setAttribute(\"type\",\"button\");\n   createButton.classList.add(\"btnProject\")\n   createButton.setAttribute(\"value\",\"Create Project\");\n   \n   div.appendChild(createButton);\n   body.appendChild(div);\n\n    /* LISTENER */\n   document.querySelector(\".btnProject\").addEventListener(\"click\", function(){\n    let title = document.querySelector(\"#title\").value\n    let description = document.querySelector(\"#description\").value\n    validation(title,description)\n})\n}\n\nconst setDefault = () => {\n    if(getLocalstorage()){\n        getLocalstorage().forEach((el) => {\n            projects.current.push(el);\n        })\n    }\n    else{\n        const newProject = project(\"Default\", \"Al Projects\")\n        projects.current.push(newProject)\n    }\n    \n    localStorage.setItem('myProjects', JSON.stringify(projects.current));\n    home();\n    renderProjects();\n}\ndocument.addEventListener(\n    'DOMContentLoaded', setDefault()\n  );\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ })

/******/ });