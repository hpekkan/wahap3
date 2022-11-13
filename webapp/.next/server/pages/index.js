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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _metamask_onboarding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @metamask/onboarding */ \"@metamask/onboarding\");\n/* harmony import */ var _metamask_onboarding__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_onboarding__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ONBOARD_TEXT = \"Click here to install MetaMask!\";\nconst CONNECT_TEXT = \"Connect\";\nconst CONNECTED_TEXT = \"Connected\";\nconst OnboardingButton = ()=>{\n    const [buttonText, setButtonText] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(ONBOARD_TEXT);\n    const [isDisabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n    const [accounts, setAccounts] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    const onboarding = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        if (!onboarding.current) {\n            onboarding.current = new (_metamask_onboarding__WEBPACK_IMPORTED_MODULE_1___default())();\n        }\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        if (_metamask_onboarding__WEBPACK_IMPORTED_MODULE_1___default().isMetaMaskInstalled()) {\n            if (accounts.length > 0) {\n                setButtonText(CONNECTED_TEXT);\n                setDisabled(true);\n                onboarding.current.stopOnboarding();\n            } else {\n                setButtonText(CONNECT_TEXT);\n                setDisabled(false);\n            }\n        }\n    }, [\n        accounts\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        function handleNewAccounts(newAccounts) {\n            setAccounts(newAccounts);\n        }\n        if (_metamask_onboarding__WEBPACK_IMPORTED_MODULE_1___default().isMetaMaskInstalled()) {\n            window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            }).then(handleNewAccounts);\n            window.ethereum.on(\"accountsChanged\", handleNewAccounts);\n            return ()=>{\n                window.ethereum.removeListener(\"accountsChanged\", handleNewAccounts);\n            };\n        }\n    }, []);\n    const onClick = ()=>{\n        if (_metamask_onboarding__WEBPACK_IMPORTED_MODULE_1___default().isMetaMaskInstalled()) {\n            window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            }).then((newAccounts)=>setAccounts(newAccounts));\n        } else {\n            onboarding.current.startOnboarding();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        disabled: isDisabled,\n        onClick: onClick,\n        children: buttonText\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\Digiathon\\\\webapp\\\\pages\\\\index.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBc0Q7QUFDNUI7QUFFMUIsTUFBTUUsZUFBZTtBQUNyQixNQUFNQyxlQUFlO0FBQ3JCLE1BQU1DLGlCQUFpQjtBQUV2QixNQUFPQyxtQkFBbUIsSUFBSztJQUM3QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04scURBQWMsQ0FBQ0M7SUFDbkQsTUFBTSxDQUFDTyxZQUFZQyxZQUFZLEdBQUdULHFEQUFjLENBQUMsS0FBSztJQUN0RCxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gscURBQWMsQ0FBQyxFQUFFO0lBQ2pELE1BQU1ZLGFBQWFaLG1EQUFZO0lBRS9CQSxzREFBZSxDQUFDLElBQU07UUFDcEIsSUFBSSxDQUFDWSxXQUFXRyxPQUFPLEVBQUU7WUFDdkJILFdBQVdHLE9BQU8sR0FBRyxJQUFJaEIsNkRBQWtCQTtRQUM3QyxDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUxDLHNEQUFlLENBQUMsSUFBTTtRQUNwQixJQUFJRCwrRUFBc0MsSUFBSTtZQUM1QyxJQUFJVyxTQUFTTyxNQUFNLEdBQUcsR0FBRztnQkFDdkJYLGNBQWNIO2dCQUNkTSxZQUFZLElBQUk7Z0JBQ2hCRyxXQUFXRyxPQUFPLENBQUNHLGNBQWM7WUFDbkMsT0FBTztnQkFDTFosY0FBY0o7Z0JBQ2RPLFlBQVksS0FBSztZQUNuQixDQUFDO1FBQ0gsQ0FBQztJQUNILEdBQUc7UUFBQ0M7S0FBUztJQUViVixzREFBZSxDQUFDLElBQU07UUFDcEIsU0FBU21CLGtCQUFrQkMsV0FBVyxFQUFFO1lBQ3RDVCxZQUFZUztRQUNkO1FBQ0EsSUFBSXJCLCtFQUFzQyxJQUFJO1lBQzVDc0IsT0FBT0MsUUFBUSxDQUNaQyxPQUFPLENBQUM7Z0JBQUVDLFFBQVE7WUFBc0IsR0FDeENDLElBQUksQ0FBQ047WUFDUkUsT0FBT0MsUUFBUSxDQUFDSSxFQUFFLENBQUMsbUJBQW1CUDtZQUN0QyxPQUFPLElBQU07Z0JBQ1hFLE9BQU9DLFFBQVEsQ0FBQ0ssY0FBYyxDQUFDLG1CQUFtQlI7WUFDcEQ7UUFDRixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwsTUFBTVMsVUFBVSxJQUFNO1FBQ3BCLElBQUk3QiwrRUFBc0MsSUFBSTtZQUM1Q3NCLE9BQU9DLFFBQVEsQ0FDWkMsT0FBTyxDQUFDO2dCQUFFQyxRQUFRO1lBQXNCLEdBQ3hDQyxJQUFJLENBQUMsQ0FBQ0wsY0FBZ0JULFlBQVlTO1FBQ3ZDLE9BQU87WUFDTFIsV0FBV0csT0FBTyxDQUFDYyxlQUFlO1FBQ3BDLENBQUM7SUFDSDtJQUNBLHFCQUNFLDhEQUFDQztRQUFPQyxVQUFVdkI7UUFBWW9CLFNBQVNBO2tCQUNwQ3ZCOzs7Ozs7QUFHUDtBQUVBLGlFQUFlRCxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXRhTWFza09uYm9hcmRpbmcgZnJvbSAnQG1ldGFtYXNrL29uYm9hcmRpbmcnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgT05CT0FSRF9URVhUID0gJ0NsaWNrIGhlcmUgdG8gaW5zdGFsbCBNZXRhTWFzayEnO1xuY29uc3QgQ09OTkVDVF9URVhUID0gJ0Nvbm5lY3QnO1xuY29uc3QgQ09OTkVDVEVEX1RFWFQgPSAnQ29ubmVjdGVkJztcblxuY29uc3QgIE9uYm9hcmRpbmdCdXR0b24gPSAoKSA9PntcbiAgY29uc3QgW2J1dHRvblRleHQsIHNldEJ1dHRvblRleHRdID0gUmVhY3QudXNlU3RhdGUoT05CT0FSRF9URVhUKTtcbiAgY29uc3QgW2lzRGlzYWJsZWQsIHNldERpc2FibGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IG9uYm9hcmRpbmcgPSBSZWFjdC51c2VSZWYoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghb25ib2FyZGluZy5jdXJyZW50KSB7XG4gICAgICBvbmJvYXJkaW5nLmN1cnJlbnQgPSBuZXcgTWV0YU1hc2tPbmJvYXJkaW5nKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoTWV0YU1hc2tPbmJvYXJkaW5nLmlzTWV0YU1hc2tJbnN0YWxsZWQoKSkge1xuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0QnV0dG9uVGV4dChDT05ORUNURURfVEVYVCk7XG4gICAgICAgIHNldERpc2FibGVkKHRydWUpO1xuICAgICAgICBvbmJvYXJkaW5nLmN1cnJlbnQuc3RvcE9uYm9hcmRpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEJ1dHRvblRleHQoQ09OTkVDVF9URVhUKTtcbiAgICAgICAgc2V0RGlzYWJsZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2FjY291bnRzXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVOZXdBY2NvdW50cyhuZXdBY2NvdW50cykge1xuICAgICAgc2V0QWNjb3VudHMobmV3QWNjb3VudHMpO1xuICAgIH1cbiAgICBpZiAoTWV0YU1hc2tPbmJvYXJkaW5nLmlzTWV0YU1hc2tJbnN0YWxsZWQoKSkge1xuICAgICAgd2luZG93LmV0aGVyZXVtXG4gICAgICAgIC5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSlcbiAgICAgICAgLnRoZW4oaGFuZGxlTmV3QWNjb3VudHMpO1xuICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBoYW5kbGVOZXdBY2NvdW50cyk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2FjY291bnRzQ2hhbmdlZCcsIGhhbmRsZU5ld0FjY291bnRzKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBpZiAoTWV0YU1hc2tPbmJvYXJkaW5nLmlzTWV0YU1hc2tJbnN0YWxsZWQoKSkge1xuICAgICAgd2luZG93LmV0aGVyZXVtXG4gICAgICAgIC5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSlcbiAgICAgICAgLnRoZW4oKG5ld0FjY291bnRzKSA9PiBzZXRBY2NvdW50cyhuZXdBY2NvdW50cykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbmJvYXJkaW5nLmN1cnJlbnQuc3RhcnRPbmJvYXJkaW5nKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gZGlzYWJsZWQ9e2lzRGlzYWJsZWR9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAge2J1dHRvblRleHR9XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9uYm9hcmRpbmdCdXR0b247Il0sIm5hbWVzIjpbIk1ldGFNYXNrT25ib2FyZGluZyIsIlJlYWN0IiwiT05CT0FSRF9URVhUIiwiQ09OTkVDVF9URVhUIiwiQ09OTkVDVEVEX1RFWFQiLCJPbmJvYXJkaW5nQnV0dG9uIiwiYnV0dG9uVGV4dCIsInNldEJ1dHRvblRleHQiLCJ1c2VTdGF0ZSIsImlzRGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImFjY291bnRzIiwic2V0QWNjb3VudHMiLCJvbmJvYXJkaW5nIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlzTWV0YU1hc2tJbnN0YWxsZWQiLCJsZW5ndGgiLCJzdG9wT25ib2FyZGluZyIsImhhbmRsZU5ld0FjY291bnRzIiwibmV3QWNjb3VudHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJ0aGVuIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsIm9uQ2xpY2siLCJzdGFydE9uYm9hcmRpbmciLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@metamask/onboarding":
/*!***************************************!*\
  !*** external "@metamask/onboarding" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@metamask/onboarding");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();