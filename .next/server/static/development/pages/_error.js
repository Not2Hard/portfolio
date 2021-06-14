module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Error/Error.js":
/*!***********************************!*\
  !*** ./components/Error/Error.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _error_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-style */ \"./components/Error/error-style.js\");\nvar _jsxFileName = \"/Users/natalia/Development/portfolio/components/Error/Error.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction Error(props) {\n  const classes = Object(_error_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  const {\n    errCode,\n    text,\n    t\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.errorWrap,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    maxWidth: \"lg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    container: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    item: true,\n    md: 6,\n    xs: 12,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.flex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.deco,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 15\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"h3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, errCode)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    item: true,\n    md: 6,\n    xs: 12,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }\n  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, t('common:404_subtitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    variant: \"contained\",\n    color: \"primary\",\n    href: \"/\",\n    className: classes.button,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, t('common:back')))))));\n}\n\nError.propTypes = {\n  errCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\nError.defaultProps = {\n  errCode: '404',\n  text: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__[\"withTranslation\"])(['common'])(Error));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Vycm9yL0Vycm9yLmpzP2EwZTkiXSwibmFtZXMiOlsiRXJyb3IiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJlcnJDb2RlIiwidGV4dCIsInQiLCJlcnJvcldyYXAiLCJmbGV4IiwiZGVjbyIsImJ1dHRvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixRQUFNQyxPQUFPLEdBQUdDLDREQUFTLEVBQXpCO0FBQ0EsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLFFBQVg7QUFBaUJDO0FBQWpCLE1BQXVCTCxLQUE3QjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxPQUFPLENBQUNLLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsa0VBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyw2REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLDZEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0U7QUFBSyxhQUFTLEVBQUVMLE9BQU8sQ0FBQ00sSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRTtBQUFLLGFBQVMsRUFBRU4sT0FBTyxDQUFDTyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLG1FQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsT0FESCxDQURGLENBREYsQ0FERixDQURGLGVBVUUsMkRBQUMsNkRBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFrQixNQUFFLEVBQUUsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRTtBQUFLLGFBQVMsRUFBRUYsT0FBTyxDQUFDRyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLG1FQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEJBLElBQTFCLENBREYsZUFFRSwyREFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLENBQUMsQ0FBQyxxQkFBRCxDQURKLENBRkYsZUFLRSwyREFBQywrREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixTQUFLLEVBQUMsU0FBbEM7QUFBNEMsUUFBSSxFQUFDLEdBQWpEO0FBQXFELGFBQVMsRUFBRUosT0FBTyxDQUFDUSxNQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLENBQUMsQ0FBQyxhQUFELENBREosQ0FMRixDQURGLENBVkYsQ0FERixDQURGLENBREY7QUE0QkQ7O0FBRUROLEtBQUssQ0FBQ1csU0FBTixHQUFrQjtBQUNoQlAsU0FBTyxFQUFFUSxpREFBUyxDQUFDQyxNQURIO0FBRWhCUixNQUFJLEVBQUVPLGlEQUFTLENBQUNDLE1BRkE7QUFHaEJQLEdBQUMsRUFBRU0saURBQVMsQ0FBQ0UsSUFBVixDQUFlQztBQUhGLENBQWxCO0FBTUFmLEtBQUssQ0FBQ2dCLFlBQU4sR0FBcUI7QUFDbkJaLFNBQU8sRUFBRSxLQURVO0FBRW5CQyxNQUFJLEVBQUU7QUFGYSxDQUFyQjtBQUtlWSw0SEFBZSxDQUFDLENBQUMsUUFBRCxDQUFELENBQWYsQ0FBNEJqQixLQUE1QixDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9FcnJvci9FcnJvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZXJyb3Itc3R5bGUnO1xuXG5mdW5jdGlvbiBFcnJvcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgZXJyQ29kZSwgdGV4dCwgdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3JXcmFwfT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgIHtlcnJDb2RlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57dGV4dH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIHt0KCdjb21tb246NDA0X3N1YnRpdGxlJyl9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmJhY2snKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5FcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVyckNvZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbkVycm9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyQ29kZTogJzQwNCcsXG4gIHRleHQ6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY29tbW9uJ10pKEVycm9yKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Error/Error.js\n");

/***/ }),

/***/ "./components/Error/error-style.js":
/*!*****************************************!*\
  !*** ./components/Error/error-style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(theme => ({\n  errorWrap: {\n    width: '100%',\n    height: '100%',\n    minHeight: 800,\n    display: 'flex',\n    alignItems: 'center',\n    position: 'absolute',\n    overflow: 'hidden',\n    marginBottom: theme.spacing(-15)\n  },\n  flex: {\n    display: 'flex',\n    justifyContent: 'center'\n  },\n  deco: {\n    position: 'relative',\n    [theme.breakpoints.down('sm')]: {\n      marginBottom: theme.spacing(5)\n    },\n    '& h3': {\n      fontSize: 106,\n      textTransform: 'capitalize',\n      fontWeight: 700,\n      paddingTop: 40,\n      paddingLeft: 20,\n      color: theme.palette.common.white,\n      fontFamily: 'Times New Roman',\n      position: 'relative',\n      zIndex: 1\n    },\n    '&:before': {\n      content: '\"\"',\n      borderBottom: `290px solid ${theme.palette.primary.main}`,\n      borderLeft: '180px solid transparent',\n      borderRight: '180px solid transparent',\n      position: 'absolute',\n      bottom: -20,\n      left: -170\n    },\n    '&:after': {\n      content: '\"\"',\n      borderBottom: `240px solid ${theme.palette.secondary.main}`,\n      borderLeft: '130px solid transparent',\n      borderRight: '130px solid transparent',\n      position: 'absolute',\n      bottom: -20,\n      right: -130\n    }\n  },\n  text: {\n    [theme.breakpoints.up('md')]: {\n      paddingLeft: theme.spacing(5),\n      borderLeft: `1px solid ${theme.palette.divider}`\n    },\n    [theme.breakpoints.down('sm')]: {\n      textAlign: 'center'\n    },\n    '& p': {\n      fontSize: 22\n    },\n    '& h4': {\n      fontWeight: theme.typography.fontWeightBold,\n      marginBottom: theme.spacing(4)\n    }\n  },\n  button: {\n    marginTop: theme.spacing(4)\n  }\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Vycm9yL2Vycm9yLXN0eWxlLmpzP2UzYjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZXJyb3JXcmFwIiwid2lkdGgiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwiZGVjbyIsImJyZWFrcG9pbnRzIiwiZG93biIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImZvbnRGYW1pbHkiLCJ6SW5kZXgiLCJjb250ZW50IiwiYm9yZGVyQm90dG9tIiwicHJpbWFyeSIsIm1haW4iLCJib3JkZXJMZWZ0IiwiYm9yZGVyUmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwic2Vjb25kYXJ5IiwicmlnaHQiLCJ0ZXh0IiwidXAiLCJkaXZpZGVyIiwidGV4dEFsaWduIiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRCb2xkIiwiYnV0dG9uIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxXQUFTLEVBQUU7QUFDVEMsU0FBSyxFQUFFLE1BREU7QUFFVEMsVUFBTSxFQUFFLE1BRkM7QUFHVEMsYUFBUyxFQUFFLEdBSEY7QUFJVEMsV0FBTyxFQUFFLE1BSkE7QUFLVEMsY0FBVSxFQUFFLFFBTEg7QUFNVEMsWUFBUSxFQUFFLFVBTkQ7QUFPVEMsWUFBUSxFQUFFLFFBUEQ7QUFRVEMsZ0JBQVksRUFBRVQsS0FBSyxDQUFDVSxPQUFOLENBQWMsQ0FBQyxFQUFmO0FBUkwsR0FEMEI7QUFXckNDLE1BQUksRUFBRTtBQUNKTixXQUFPLEVBQUUsTUFETDtBQUVKTyxrQkFBYyxFQUFFO0FBRlosR0FYK0I7QUFlckNDLE1BQUksRUFBRTtBQUNKTixZQUFRLEVBQUUsVUFETjtBQUVKLEtBQUNQLEtBQUssQ0FBQ2MsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5Qk4sa0JBQVksRUFBRVQsS0FBSyxDQUFDVSxPQUFOLENBQWMsQ0FBZDtBQURnQixLQUY1QjtBQUtKLFlBQVE7QUFDTk0sY0FBUSxFQUFFLEdBREo7QUFFTkMsbUJBQWEsRUFBRSxZQUZUO0FBR05DLGdCQUFVLEVBQUUsR0FITjtBQUlOQyxnQkFBVSxFQUFFLEVBSk47QUFLTkMsaUJBQVcsRUFBRSxFQUxQO0FBTU5DLFdBQUssRUFBRXJCLEtBQUssQ0FBQ3NCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FOdEI7QUFPTkMsZ0JBQVUsRUFBRSxpQkFQTjtBQVFObEIsY0FBUSxFQUFFLFVBUko7QUFTTm1CLFlBQU0sRUFBRTtBQVRGLEtBTEo7QUFnQkosZ0JBQVk7QUFDVkMsYUFBTyxFQUFFLElBREM7QUFFVkMsa0JBQVksRUFBRyxlQUFjNUIsS0FBSyxDQUFDc0IsT0FBTixDQUFjTyxPQUFkLENBQXNCQyxJQUFLLEVBRjlDO0FBR1ZDLGdCQUFVLEVBQUUseUJBSEY7QUFJVkMsaUJBQVcsRUFBRSx5QkFKSDtBQUtWekIsY0FBUSxFQUFFLFVBTEE7QUFNVjBCLFlBQU0sRUFBRSxDQUFDLEVBTkM7QUFPVkMsVUFBSSxFQUFFLENBQUM7QUFQRyxLQWhCUjtBQXlCSixlQUFXO0FBQ1RQLGFBQU8sRUFBRSxJQURBO0FBRVRDLGtCQUFZLEVBQUcsZUFBYzVCLEtBQUssQ0FBQ3NCLE9BQU4sQ0FBY2EsU0FBZCxDQUF3QkwsSUFBSyxFQUZqRDtBQUdUQyxnQkFBVSxFQUFFLHlCQUhIO0FBSVRDLGlCQUFXLEVBQUUseUJBSko7QUFLVHpCLGNBQVEsRUFBRSxVQUxEO0FBTVQwQixZQUFNLEVBQUUsQ0FBQyxFQU5BO0FBT1RHLFdBQUssRUFBRSxDQUFDO0FBUEM7QUF6QlAsR0FmK0I7QUFrRHJDQyxNQUFJLEVBQUU7QUFDSixLQUFDckMsS0FBSyxDQUFDYyxXQUFOLENBQWtCd0IsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QmxCLGlCQUFXLEVBQUVwQixLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkLENBRGU7QUFFNUJxQixnQkFBVSxFQUFHLGFBQVkvQixLQUFLLENBQUNzQixPQUFOLENBQWNpQixPQUFRO0FBRm5CLEtBRDFCO0FBS0osS0FBQ3ZDLEtBQUssQ0FBQ2MsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QnlCLGVBQVMsRUFBRTtBQURtQixLQUw1QjtBQVFKLFdBQU87QUFDTHhCLGNBQVEsRUFBRTtBQURMLEtBUkg7QUFXSixZQUFRO0FBQ05FLGdCQUFVLEVBQUVsQixLQUFLLENBQUN5QyxVQUFOLENBQWlCQyxjQUR2QjtBQUVOakMsa0JBQVksRUFBRVQsS0FBSyxDQUFDVSxPQUFOLENBQWMsQ0FBZDtBQUZSO0FBWEosR0FsRCtCO0FBa0VyQ2lDLFFBQU0sRUFBRTtBQUNOQyxhQUFTLEVBQUU1QyxLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkO0FBREw7QUFsRTZCLENBQUwsQ0FBTixDQUE1QjtBQXVFZVosd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yL2Vycm9yLXN0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgZXJyb3JXcmFwOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6IDgwMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygtMTUpXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH0sXG4gIGRlY286IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg1KVxuICAgIH0sXG4gICAgJyYgaDMnOiB7XG4gICAgICBmb250U2l6ZTogMTA2LFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgcGFkZGluZ1RvcDogNDAsXG4gICAgICBwYWRkaW5nTGVmdDogMjAsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICBmb250RmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAxLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm9yZGVyQm90dG9tOiBgMjkwcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn1gLFxuICAgICAgYm9yZGVyTGVmdDogJzE4MHB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgIGJvcmRlclJpZ2h0OiAnMTgwcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IC0yMCxcbiAgICAgIGxlZnQ6IC0xNzAsXG4gICAgfSxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvcmRlckJvdHRvbTogYDI0MHB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn1gLFxuICAgICAgYm9yZGVyTGVmdDogJzEzMHB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgIGJvcmRlclJpZ2h0OiAnMTMwcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IC0yMCxcbiAgICAgIHJpZ2h0OiAtMTMwLFxuICAgIH1cbiAgfSxcbiAgdGV4dDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgICAgYm9yZGVyTGVmdDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcbiAgICAnJiBwJzoge1xuICAgICAgZm9udFNpemU6IDIyLFxuICAgIH0sXG4gICAgJyYgaDQnOiB7XG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Error/error-style.js\n");

/***/ }),

/***/ "./components/Error/index.js":
/*!***********************************!*\
  !*** ./components/Error/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error */ \"./components/Error/Error.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Vycm9yL2luZGV4LmpzPzhlMTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRXJyb3InO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Error/index.js\n");

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nmodule.exports = new NextI18Next({\n  defaultLanguage: 'en',\n  // otherLanguages: ['de', 'ar', 'id', 'zh', 'pt'],\n  fallbackLng: 'en',\n  initImmediate: false,\n  localePath: 'public/locales',\n  localeSubpaths: {\n    en: 'en' // ar: 'ar',\n    // de: 'de',\n    // id: 'id',\n    // pt: 'pt',\n    // zh: 'zh',\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLmpzPzkzYjQiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJmYWxsYmFja0xuZyIsImluaXRJbW1lZGlhdGUiLCJsb2NhbGVQYXRoIiwibG9jYWxlU3VicGF0aHMiLCJlbiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsSUFBSUosV0FBSixDQUFnQjtBQUMvQkssaUJBQWUsRUFBRSxJQURjO0FBRS9CO0FBQ0FDLGFBQVcsRUFBRSxJQUhrQjtBQUkvQkMsZUFBYSxFQUFFLEtBSmdCO0FBSy9CQyxZQUFVLEVBQUUsZ0JBTG1CO0FBTS9CQyxnQkFBYyxFQUFFO0FBQ2RDLE1BQUUsRUFBRSxJQURVLENBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFOYztBQU5lLENBQWhCLENBQWpCIiwiZmlsZSI6Ii4vaTE4bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdDtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xuICBkZWZhdWx0TGFuZ3VhZ2U6ICdlbicsXG4gIC8vIG90aGVyTGFuZ3VhZ2VzOiBbJ2RlJywgJ2FyJywgJ2lkJywgJ3poJywgJ3B0J10sXG4gIGZhbGxiYWNrTG5nOiAnZW4nLFxuICBpbml0SW1tZWRpYXRlOiBmYWxzZSxcbiAgbG9jYWxlUGF0aDogJ3B1YmxpYy9sb2NhbGVzJyxcbiAgbG9jYWxlU3VicGF0aHM6IHtcbiAgICBlbjogJ2VuJyxcbiAgICAvLyBhcjogJ2FyJyxcbiAgICAvLyBkZTogJ2RlJyxcbiAgICAvLyBpZDogJ2lkJyxcbiAgICAvLyBwdDogJ3B0JyxcbiAgICAvLyB6aDogJ3poJyxcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Error */ \"./components/Error/index.js\");\n/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/text/brand */ \"./public/text/brand.js\");\n/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/natalia/Development/portfolio/pages/_error.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => ({\n  dedicatedPage: {\n    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper\n  }\n}));\n\nfunction ErrorPage(props) {\n  const classes = useStyles();\n  const {\n    onToggleDark,\n    onToggleDir\n  } = props;\n  const {\n    errorCode,\n    stars,\n    t\n  } = props;\n\n  if (errorCode) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }\n    }, _public_text_brand__WEBPACK_IMPORTED_MODULE_5___default.a.profile.name, \"\\xA0 -\\xA0\", errorCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: classes.dedicatedPage,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      errorCode: errorCode,\n      text: t('common:404'),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    })));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.dedicatedPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, t('description'), \"Next stars:\\xA0\", stars);\n}\n\nErrorPage.propTypes = {\n  errorCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  stars: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  onToggleDark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  onToggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\nErrorPage.defaultProps = {\n  errorCode: '400',\n  stars: 0\n};\n\nErrorPage.getInitialProps = async () => ({\n  namespacesRequired: ['common']\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__[\"withTranslation\"])(['common'])(ErrorPage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZXJyb3IuanM/NjM0MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJkZWRpY2F0ZWRQYWdlIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJ0eXBlIiwiZGVmYXVsdCIsInBhcGVyIiwiRXJyb3JQYWdlIiwicHJvcHMiLCJjbGFzc2VzIiwib25Ub2dnbGVEYXJrIiwib25Ub2dnbGVEaXIiLCJlcnJvckNvZGUiLCJzdGFycyIsInQiLCJicmFuZCIsInByb2ZpbGUiLCJuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxlQUFhLEVBQUU7QUFDYkMsY0FBVSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixNQUF2QixHQUFnQ0osS0FBSyxDQUFDRyxPQUFOLENBQWNELFVBQWQsQ0FBeUJHLE9BQXpELEdBQW1FTCxLQUFLLENBQUNHLE9BQU4sQ0FBY0QsVUFBZCxDQUF5Qkk7QUFEM0Y7QUFEc0IsQ0FBTCxDQUFOLENBQTVCOztBQU1BLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3hCLFFBQU1DLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUNBLFFBQU07QUFBRVksZ0JBQUY7QUFBZ0JDO0FBQWhCLE1BQWdDSCxLQUF0QztBQUNBLFFBQU07QUFBRUksYUFBRjtBQUFhQyxTQUFiO0FBQW9CQztBQUFwQixNQUEwQk4sS0FBaEM7O0FBRUEsTUFBSUksU0FBSixFQUFlO0FBQ2Isd0JBQ0UsMkRBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDRSwyREFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSUcseURBQUssQ0FBQ0MsT0FBTixDQUFjQyxJQURsQixnQkFHR0wsU0FISCxDQURGLENBREYsZUFRRTtBQUFLLGVBQVMsRUFBRUgsT0FBTyxDQUFDUixhQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNFLDJEQUFDLHlEQUFEO0FBQU8sZUFBUyxFQUFFVyxTQUFsQjtBQUE2QixVQUFJLEVBQUVFLENBQUMsQ0FBQyxZQUFELENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQVJGLENBREY7QUFjRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUwsT0FBTyxDQUFDUixhQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dhLENBQUMsQ0FBQyxhQUFELENBREoscUJBR0dELEtBSEgsQ0FERjtBQU9EOztBQUVETixTQUFTLENBQUNXLFNBQVYsR0FBc0I7QUFDcEJOLFdBQVMsRUFBRU8saURBQVMsQ0FBQ0MsTUFERDtBQUVwQlAsT0FBSyxFQUFFTSxpREFBUyxDQUFDRSxNQUZHO0FBR3BCWCxjQUFZLEVBQUVTLGlEQUFTLENBQUNHLElBQVYsQ0FBZUMsVUFIVDtBQUlwQlosYUFBVyxFQUFFUSxpREFBUyxDQUFDRyxJQUFWLENBQWVDLFVBSlI7QUFLcEJULEdBQUMsRUFBRUssaURBQVMsQ0FBQ0csSUFBVixDQUFlQztBQUxFLENBQXRCO0FBUUFoQixTQUFTLENBQUNpQixZQUFWLEdBQXlCO0FBQ3ZCWixXQUFTLEVBQUUsS0FEWTtBQUV2QkMsT0FBSyxFQUFFO0FBRmdCLENBQXpCOztBQUtBTixTQUFTLENBQUNrQixlQUFWLEdBQTRCLGFBQWE7QUFDdkNDLG9CQUFrQixFQUFFLENBQUMsUUFBRDtBQURtQixDQUFiLENBQTVCOztBQUllQyw0SEFBZSxDQUFDLENBQUMsUUFBRCxDQUFELENBQWYsQ0FBNEJwQixTQUE1QixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yJztcbmltcG9ydCBicmFuZCBmcm9tICcuLi9wdWJsaWMvdGV4dC9icmFuZCc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBkZWRpY2F0ZWRQYWdlOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCA6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBFcnJvclBhZ2UocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IG9uVG9nZ2xlRGFyaywgb25Ub2dnbGVEaXIgfSA9IHByb3BzO1xuICBjb25zdCB7IGVycm9yQ29kZSwgc3RhcnMsIHQgfSA9IHByb3BzO1xuXG4gIGlmIChlcnJvckNvZGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICB7IGJyYW5kLnByb2ZpbGUubmFtZSB9XG4gICAgICAgICAgICAmbmJzcDsgLSZuYnNwO1xuICAgICAgICAgICAge2Vycm9yQ29kZX1cbiAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlZGljYXRlZFBhZ2V9PlxuICAgICAgICAgIDxFcnJvciBlcnJvckNvZGU9e2Vycm9yQ29kZX0gdGV4dD17dCgnY29tbW9uOjQwNCcpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVkaWNhdGVkUGFnZX0+XG4gICAgICB7dCgnZGVzY3JpcHRpb24nKX1cbiAgICAgIE5leHQgc3RhcnM6Jm5ic3A7XG4gICAgICB7c3RhcnN9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkVycm9yUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGVycm9yQ29kZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3RhcnM6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uVG9nZ2xlRGFyazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Ub2dnbGVEaXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5FcnJvclBhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvckNvZGU6ICc0MDAnLFxuICBzdGFyczogMCxcbn07XG5cbkVycm9yUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJ10sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY29tbW9uJ10pKEVycm9yUGFnZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_error.js\n");

/***/ }),

/***/ "./public/images/imgAPI.js":
/*!*********************************!*\
  !*** ./public/images/imgAPI.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst imgAPI = {\n  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],\n  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],\n  profile: ['/images/profile/tree.jpg', '/images/profile/NataliaSergeeva.jpg', '/images/profile/pc.jpg', '/images/projects/tapAndFork/editor_tf.jpg', '/images/projects/tapAndFork/tf-screens.jpg', '/images/projects/aws_map/aws_min.jpg', '/images/projects/refugeeKit/ref_head.jpg', '/images/projects/nv-ma/nv-logo1.jpg', '/images/projects/dao/dao_flip.gif', '/images/projects/memoryGame/cover.jpg', '/images/profile/pc-dark.jpg', '/images/projects/stock_board/stock_card.jpg', '/images/projects/food_lables/kefir.jpg', '/images/projects/food_lables/sausage.jpg', '/images/projects/journey/journey_cover.jpg', '/images/projects/one-world/oneworld_cover.jpg', '/images/projects/synovis/synovis_cover.jpg', '/images/projects/myPortfolio/mysite_cover.jpg']\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (imgAPI);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSS5qcz8yMWMwIl0sIm5hbWVzIjpbImltZ0FQSSIsImF2YXRhciIsInBob3RvIiwicHJvZmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFLENBQ04sNkJBRE0sRUFFTiw4QkFGTSxFQUdOLDhCQUhNLEVBSU4sOEJBSk0sRUFLTiw4QkFMTSxFQU1OLDZCQU5NLEVBT04sNEJBUE0sRUFRTiw2QkFSTSxFQVNOLDZCQVRNLEVBVU4sNkJBVk0sRUFXTiw2QkFYTSxDQURLO0FBY2JDLE9BQUssRUFBRSxDQUNMLGdEQURLLEVBRUwsZ0RBRkssRUFHTCxpREFISyxFQUlMLGdEQUpLLEVBS0wsaURBTEssRUFNTCxpREFOSyxFQU9MLGdEQVBLLEVBUUwsaURBUkssRUFTTCxpREFUSyxFQVVMLGlEQVZLLEVBV0wsb0RBWEssRUFZTCxtREFaSyxFQWFMLG9EQWJLLEVBY0wsbURBZEssQ0FkTTtBQThCYkMsU0FBTyxFQUFFLENBQ1AsMEJBRE8sRUFFUCxxQ0FGTyxFQUdQLHdCQUhPLEVBSVAsMkNBSk8sRUFLUCw0Q0FMTyxFQU1QLHNDQU5PLEVBT1AsMENBUE8sRUFRUCxxQ0FSTyxFQVNQLG1DQVRPLEVBVVAsdUNBVk8sRUFXUCw2QkFYTyxFQVlQLDZDQVpPLEVBYVAsd0NBYk8sRUFjUCwwQ0FkTyxFQWVQLDRDQWZPLEVBZ0JQLCtDQWhCTyxFQWlCUCw0Q0FqQk8sRUFrQlAsK0NBbEJPO0FBOUJJLENBQWY7QUFvRGVILHFFQUFmIiwiZmlsZSI6Ii4vcHVibGljL2ltYWdlcy9pbWdBUEkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbWdBUEkgPSB7XG4gIGF2YXRhcjogW1xuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybC5zdmcnLFxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDIuc3ZnJyxcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmwzLnN2ZycsXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9naXJsNC5zdmcnLFxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDUuc3ZnJyxcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmwuc3ZnJyxcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveS5zdmcnLFxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95Mi5zdmcnLFxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95My5zdmcnLFxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95NC5zdmcnLFxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95NS5zdmcnXG4gIF0sXG4gIHBob3RvOiBbXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NzV4OTAwL2UxYWQ5Mi9mZmYnLFxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vOTY3eDcyNS9lYTZkNmQvZmZmJyxcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEyODB4ODQ5L2VhNmRiNy9mZmYnLFxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vOTY3eDcyNS9iYjZkZWEvZmZmJyxcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNDh4NzAxLzZkNmZlYS9mZmYnLFxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvNmRjMGVhL2ZmZicsXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS85NzB4NzI1LzZkZWFhNi9mZmYnLFxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MXg3MDAvYjhkZTI3L2ZmZicsXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUxeDcwMS9kZTlmMjcvZmZmJyxcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL2VmNDU0NS9mZmYnLFxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvZmZjNGM0Lzc1NzU3NScsXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4NDQ3L2ZkZmZjNC83NTc1NzUnLFxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTI4MHg4NTEvYzRmZmQ3Lzc1NzU3NScsXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4NDI1L2M0Y2RmZi83NTc1NzUnLFxuICBdLFxuICBwcm9maWxlOiBbXG4gICAgJy9pbWFnZXMvcHJvZmlsZS90cmVlLmpwZycsXG4gICAgJy9pbWFnZXMvcHJvZmlsZS9OYXRhbGlhU2VyZ2VldmEuanBnJyxcbiAgICAnL2ltYWdlcy9wcm9maWxlL3BjLmpwZycsXG4gICAgJy9pbWFnZXMvcHJvamVjdHMvdGFwQW5kRm9yay9lZGl0b3JfdGYuanBnJyxcbiAgICAnL2ltYWdlcy9wcm9qZWN0cy90YXBBbmRGb3JrL3RmLXNjcmVlbnMuanBnJyxcbiAgICAnL2ltYWdlcy9wcm9qZWN0cy9hd3NfbWFwL2F3c19taW4uanBnJyxcbiAgICAnL2ltYWdlcy9wcm9qZWN0cy9yZWZ1Z2VlS2l0L3JlZl9oZWFkLmpwZycsXG4gICAgJy9pbWFnZXMvcHJvamVjdHMvbnYtbWEvbnYtbG9nbzEuanBnJyxcbiAgICAnL2ltYWdlcy9wcm9qZWN0cy9kYW8vZGFvX2ZsaXAuZ2lmJyxcbiAgICAnL2ltYWdlcy9wcm9qZWN0cy9tZW1vcnlHYW1lL2NvdmVyLmpwZycsXG4gICAgJy9pbWFnZXMvcHJvZmlsZS9wYy1kYXJrLmpwZycsXG4gICAgJy9pbWFnZXMvcHJvamVjdHMvc3RvY2tfYm9hcmQvc3RvY2tfY2FyZC5qcGcnLFxuICAgICcvaW1hZ2VzL3Byb2plY3RzL2Zvb2RfbGFibGVzL2tlZmlyLmpwZycsXG4gICAgJy9pbWFnZXMvcHJvamVjdHMvZm9vZF9sYWJsZXMvc2F1c2FnZS5qcGcnLFxuICAgICcvaW1hZ2VzL3Byb2plY3RzL2pvdXJuZXkvam91cm5leV9jb3Zlci5qcGcnLFxuICAgICcvaW1hZ2VzL3Byb2plY3RzL29uZS13b3JsZC9vbmV3b3JsZF9jb3Zlci5qcGcnLFxuICAgICcvaW1hZ2VzL3Byb2plY3RzL3N5bm92aXMvc3lub3Zpc19jb3Zlci5qcGcnLFxuICAgICcvaW1hZ2VzL3Byb2plY3RzL215UG9ydGZvbGlvL215c2l0ZV9jb3Zlci5qcGcnXG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGltZ0FQSTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/images/imgAPI.js\n");

/***/ }),

/***/ "./public/text/brand.js":
/*!******************************!*\
  !*** ./public/text/brand.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _imgAPI = _interopRequireDefault(__webpack_require__(/*! ../images/imgAPI */ \"./public/images/imgAPI.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  profile: {\n    name: 'Natalia Sergeeva',\n    title: 'Front End Developer & Designer',\n    desc: 'Front End Developer & Designer profile page',\n    prefix: 'Sergeeva',\n    footerText: 'Natalia Sergeeva 2021',\n    logoText: 'Natalia ',\n    projectName: 'Profile',\n    url: 'luxireact.ux-maestro.com/profile',\n    img: '/images/profile-logo.png',\n    avatar: _imgAPI.default.profile[1],\n    cover: _imgAPI.default.profile[0],\n    notifMsg: ''\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9icmFuZC5qcz9jZjAxIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9maWxlIiwibmFtZSIsInRpdGxlIiwiZGVzYyIsInByZWZpeCIsImZvb3RlclRleHQiLCJsb2dvVGV4dCIsInByb2plY3ROYW1lIiwidXJsIiwiaW1nIiwiYXZhdGFyIiwiaW1nQVBJIiwiY292ZXIiLCJub3RpZk1zZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRSxrQkFEQztBQUVQQyxTQUFLLEVBQUUsZ0NBRkE7QUFHUEMsUUFBSSxFQUFFLDZDQUhDO0FBSVBDLFVBQU0sRUFBRSxVQUpEO0FBS1BDLGNBQVUsRUFBRSx1QkFMTDtBQU1QQyxZQUFRLEVBQUUsVUFOSDtBQU9QQyxlQUFXLEVBQUUsU0FQTjtBQVFQQyxPQUFHLEVBQUUsa0NBUkU7QUFTUEMsT0FBRyxFQUFFLDBCQVRFO0FBVVBDLFVBQU0sRUFBRUMsZ0JBQU9YLE9BQVAsQ0FBZSxDQUFmLENBVkQ7QUFXUFksU0FBSyxFQUFFRCxnQkFBT1gsT0FBUCxDQUFlLENBQWYsQ0FYQTtBQVlQYSxZQUFRLEVBQUU7QUFaSDtBQURNLENBQWpCIiwiZmlsZSI6Ii4vcHVibGljL3RleHQvYnJhbmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1nQVBJIGZyb20gJ34vcHVibGljL2ltYWdlcy9pbWdBUEknO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvZmlsZToge1xuICAgIG5hbWU6ICdOYXRhbGlhIFNlcmdlZXZhJyxcbiAgICB0aXRsZTogJ0Zyb250IEVuZCBEZXZlbG9wZXIgJiBEZXNpZ25lcicsXG4gICAgZGVzYzogJ0Zyb250IEVuZCBEZXZlbG9wZXIgJiBEZXNpZ25lciBwcm9maWxlIHBhZ2UnLFxuICAgIHByZWZpeDogJ1NlcmdlZXZhJyxcbiAgICBmb290ZXJUZXh0OiAnTmF0YWxpYSBTZXJnZWV2YSAyMDIxJyxcbiAgICBsb2dvVGV4dDogJ05hdGFsaWEgJyxcbiAgICBwcm9qZWN0TmFtZTogJ1Byb2ZpbGUnLFxuICAgIHVybDogJ2x1eGlyZWFjdC51eC1tYWVzdHJvLmNvbS9wcm9maWxlJyxcbiAgICBpbWc6ICcvaW1hZ2VzL3Byb2ZpbGUtbG9nby5wbmcnLFxuICAgIGF2YXRhcjogaW1nQVBJLnByb2ZpbGVbMV0sXG4gICAgY292ZXI6IGltZ0FQSS5wcm9maWxlWzBdLFxuICAgIG5vdGlmTXNnOiAnJ1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/text/brand.js\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/natalia/Development/portfolio/pages/_error.js */"./pages/_error.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIj8wODJmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Container\n");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI/ZjZmYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Grid\n");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI/MGJlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Typography\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });