/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _helpers = __webpack_require__(1);

	var _core = __webpack_require__(2);

	function main() {
	    // Elements used to activate certain features
	    var sidebar = (0, _helpers.byId)("sidebar"),
	        codeExamples = (0, _helpers.bySelector)(".highlight"),
	        spoilers = (0, _helpers.bySelector)(".spoiler");

	    // Common stuff
	    (0, _core.setExternalHrefs)();
	    (0, _core.setStickyFooter)();
	    (0, _core.setAnchorsToHeaders)();
	    (0, _core.highlightNavigation)();
	    // Sidebar
	    if (sidebar) {
	        (0, _core.setSidebar)();
	    }
	    // Code examples
	    if (codeExamples.length) {
	        codeExamples.map(function (e) {
	            (0, _core.addLineNumberButton)(e);
	            (0, _core.addCodePenButton)(e);
	        });
	    }
	    // Spoilers
	    if (spoilers.length) {
	        spoilers.map(function (e) {
	            return (0, _core.addSpoilerButton)(e);
	        });
	    }
	}

	window.addEventListener("load", function load() {
	    window.removeEventListener("load", load, false);
	    main();
	}, false);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toArray = toArray;
	exports.shuffle = shuffle;
	exports.byId = byId;
	exports.bySelector = bySelector;
	exports.byTag = byTag;
	exports.create = create;
	exports.startsWith = startsWith;
	exports.click = click;
	exports.hasWebLang = hasWebLang;
	exports.getUrlParams = getUrlParams;
	// "Converts" a HTML NodeList to an array
	function toArray(nodes) {
	    var a = [],
	        l = nodes.length;

	    for (var i = 0; i < l; i++) {
	        a.push(nodes[i]);
	    }

	    return a;
	}

	// Shuffle an array (http://stackoverflow.com/a/6274381)
	function shuffle(o) {
	    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {}
	    return o;
	}

	// Return an HTML element by id
	function byId(id) {
	    return document.getElementById(id);
	}

	// Return an array of HTML elements by class
	function bySelector(cls) {
	    return toArray(document.querySelectorAll(cls));
	}

	// Return an array of HTML elements by tagname
	function byTag(tag) {
	    return toArray(document.getElementsByTagName(tag));
	}

	// Create a new HTML element
	function create(elm) {
	    return document.createElement(elm);
	}

	// Check for a needle in a haystack with regexp
	function startsWith(needle, haystack) {
	    return new RegExp("^" + needle).test(haystack);
	}

	// Shorthand for adding a click event to an element
	function click(elm, cb) {
	    return elm.addEventListener("click", cb, false);
	}

	// Check for one of three languages (for codepen)
	function hasWebLang(lang) {
	    var languages = ["css", "language-css", "html", "language-html", "js", "language-js"];

	    return Boolean(languages.indexOf(lang) > -1);
	}

	// Source: http://stackoverflow.com/a/2880929
	function getUrlParams(query) {
	    var match = undefined,
	        pl = /\+/g,
	        // Regex for replacing addition symbol with a space
	    search = /([^&=]+)=?([^&]*)/g,
	        decode = function decode(s) {
	        return decodeURIComponent(s.replace(pl, " "));
	    },
	        urlParams = {};

	    while (match = search.exec(query)) {
	        urlParams[decode(match[1])] = decode(match[2]);
	    }

	    return urlParams;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setExternalHrefs = setExternalHrefs;
	exports.setAnchorsToHeaders = setAnchorsToHeaders;
	exports.setStickyFooter = setStickyFooter;
	exports.setSidebar = setSidebar;
	exports.highlightNavigation = highlightNavigation;
	exports.createLineNumberButton = createLineNumberButton;
	exports.addLineNumberButton = addLineNumberButton;
	exports.serializeCode = serializeCode;
	exports.submitToCodePen = submitToCodePen;
	exports.addCodePenButton = addCodePenButton;
	exports.createSpoilerButton = createSpoilerButton;
	exports.addSpoilerButton = addSpoilerButton;

	var _helpers = __webpack_require__(1);

	var Location = window.location;

	// Anchors with external hrefs gets target="_blank"
	// Dependencies
	function setExternalHrefs() {
	    var anchors = (0, _helpers.byTag)("a"),
	        url = Location.protocol + "//" + Location.host;

	    return anchors.filter(function (a) {
	        return !(0, _helpers.startsWith)(url, a.href);
	    }).map(function (a) {
	        return a.target = "_blank";
	    });
	}

	// Add anchors to content headers
	function setAnchorsToHeaders() {
	    var headers = (0, _helpers.bySelector)("#content h1, #content h2, #content h3");

	    function appendAnchor(header) {
	        var a = (0, _helpers.create)("a");
	        a.href = "#" + header.id;
	        a.className = "header-anchor";
	        header.appendChild(a);
	        return header;
	    }

	    return headers.filter(function (h) {
	        return h.id ? true : false;
	    }).map(appendAnchor);
	}

	// Sticky footer, sets min-height if content height isn't enough
	function setStickyFooter() {
	    var content = (0, _helpers.byId)("content"),
	        wH = window.innerHeight,
	        bH = document.body.clientHeight,
	        cH = content.offsetHeight;

	    if (wH - bH > 0) {
	        content.style.minHeight = wH - (bH - cH) + "px";
	    }
	}

	// Sets the sidebar features for toggling visibility
	function setSidebar() {
	    var sidebar = (0, _helpers.byId)("sidebar"),
	        header = (0, _helpers.byId)("header"),
	        sidebarButton = (0, _helpers.byId)("toggle-sidebar"),
	        submenus = (0, _helpers.bySelector)("#sidebar .submenu-label"),
	        anchors = (0, _helpers.bySelector)("#sidebar .menu-item, #sidebar .submenu-item");

	    function toggleFixedSidebar() {
	        var top = document.scrollTop || document.body.scrollTop,
	            cls = document.body.classList;

	        if (top > header.offsetHeight) {
	            if (!cls.contains("fixed-sidebar")) {
	                cls.add("fixed-sidebar");
	            }
	        } else {
	            cls.remove("fixed-sidebar");
	        }
	    }

	    // Add the "fixed-sidebar" class to the sidebar when scrolling
	    window.addEventListener("scroll", toggleFixedSidebar, false);
	    // Initial call
	    toggleFixedSidebar();

	    // Toggle visibility of the sidebar
	    (0, _helpers.click)(sidebarButton, function () {
	        return sidebar.classList.toggle("open");
	    });

	    // Toggle visibility of course elements (assignments, exercises, etc.)
	    submenus.map(function (el) {
	        return (0, _helpers.click)(el, function (e) {
	            return e.target.parentNode.classList.toggle("open");
	        });
	    });

	    // Add the "active" class to the current active sidebar navigation anchor
	    anchors.filter(function (a) {
	        return (0, _helpers.startsWith)(a.href, Location.href);
	    }).map(function (a) {
	        a.classList.add("active");
	        // Submenu item
	        if (a.classList.contains("submenu-item")) {
	            a.parentNode.parentNode.classList.add("open");
	        }
	    });
	}

	// Add the "current" class to the current navigation anchor
	function highlightNavigation() {
	    (0, _helpers.bySelector)("#header nav a").reduce(function (prev, curr) {
	        return curr.href == Location.href.replace(/\+$/, "") || (0, _helpers.startsWith)(curr.href, Location.href) ? [curr] : prev;
	    }, []).map(function (a) {
	        return a.classList.add("current");
	    });
	}

	// Creates a button that toggles line numbers in code examples
	function createLineNumberButton() {
	    var btn = (0, _helpers.create)("button"),
	        txt = document.createTextNode("radnummer"),
	        show = (0, _helpers.create)("span"),
	        hide = (0, _helpers.create)("span");

	    btn.className = "toggle-lineno";
	    btn.type = "button";
	    show.className = "show";
	    show.textContent = "Visa ";
	    hide.className = "hide";
	    hide.textContent = "Dölj ";

	    btn.appendChild(show);
	    btn.appendChild(hide);
	    btn.appendChild(txt);

	    return btn;
	}

	// Add the button that toggles line numbers to a code example
	function addLineNumberButton(element) {
	    // Only add a line number button if the code examples has line numbers
	    if (element.firstChild.firstChild.childNodes[0].className != "lineno") {
	        return;
	    }

	    var btn = createLineNumberButton();
	    (0, _helpers.click)(btn, function () {
	        return btn.parentElement.classList.toggle("toggle");
	    });
	    element.appendChild(btn);

	    return;
	}

	// Serialize contents of a code example
	function serializeCode(element) {
	    var code = element.firstChild.firstChild,
	        lang = code.className,
	        data = {};

	    var content = (0, _helpers.toArray)(code.childNodes).filter(function (n) {
	        return n.className == "lineno" ? false : true;
	    }).reduce(function (p, c) {
	        return p + c.textContent;
	    }, "");

	    data[lang.substr(9)] = content;
	    data["title"] = "Code Example";
	    return data;
	}

	// Sends contents of a code example to CodePen
	function submitToCodePen(element) {
	    var data = serializeCode(element);

	    if (!data) {
	        return;
	    }

	    var form = (0, _helpers.create)("form"),
	        input = (0, _helpers.create)("input"),
	        json = JSON.stringify(data).replace(/"/g, "&quot;").replace(/'/g, "&apos;");

	    input.setAttribute("type", "hidden");
	    input.setAttribute("name", "data");
	    input.setAttribute("value", json);
	    form.setAttribute("method", "post");
	    form.setAttribute("action", "http://codepen.io/pen/define");
	    form.setAttribute("target", "_blank");
	    form.appendChild(input);
	    document.body.appendChild(form);

	    return form.submit();
	}

	// Adds a button that sends the code to CodePen to a code example
	function addCodePenButton(element) {
	    var lang = element.firstChild.firstChild.className;

	    if (!(0, _helpers.hasWebLang)(lang)) {
	        return false;
	    }

	    var btn = (0, _helpers.create)("button");
	    btn.textContent = "Öppna i CodePen";
	    btn.className = "codepen-button";
	    btn.type = "button";

	    (0, _helpers.click)(btn, function () {
	        return submitToCodePen(btn.parentElement);
	    });

	    return element.appendChild(btn);
	}

	// Create the button to show/hide spoiler text
	function createSpoilerButton(element) {
	    var btn = (0, _helpers.create)("button");
	    btn.type = "button";
	    btn.className = "show-spoiler";
	    btn.textContent = "Visa svar";

	    // Toggle visibility with classes
	    (0, _helpers.click)(btn, function () {
	        if (btn.className == "show-spoiler") {
	            element.className = "spoiler show";
	            btn.className = "hide-spoiler";
	            btn.textContent = "Dölj svar";
	        } else {
	            element.className = "spoiler";
	            btn.className = "show-spoiler";
	            btn.textContent = "Visa svar";
	        }
	    });

	    return btn;
	}

	// Add a spoiler button to an element
	function addSpoilerButton(element) {
	    var btn = createSpoilerButton(element);
	    element.parentNode.insertBefore(btn, element.nextSibling);
	}

/***/ }
/******/ ]);