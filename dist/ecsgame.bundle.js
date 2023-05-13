/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./testing/ecs/src/input/keyboard.js":
/*!*******************************************!*\
  !*** ./testing/ecs/src/input/keyboard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);
    // Object to keep track of key states
    this.keys = {};

    // Object to keep track of key events
    this.keyEvents = {};

    // Event listeners for keydown and keyup events
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
  }
  _createClass(Keyboard, [{
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var key = event.key;

      // Update key state
      this.keys[key] = true;

      // Update key event
      this.keyEvents[key] = {
        down: true,
        pressed: true,
        released: false
      };
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event) {
      var key = event.key;

      // Update key state
      this.keys[key] = false;

      // Update key event
      this.keyEvents[key] = {
        down: false,
        pressed: false,
        released: true
      };
    }
  }, {
    key: "isKeyDown",
    value: function isKeyDown(key) {
      return !!this.keys[key];
    }
  }, {
    key: "isKeyPressed",
    value: function isKeyPressed(key) {
      return !!this.keyEvents[key] && this.keyEvents[key].pressed;
    }
  }, {
    key: "isKeyReleased",
    value: function isKeyReleased(key) {
      return !!this.keyEvents[key] && this.keyEvents[key].released;
    }

    // call the update function to copy the keyevents into the keys.
    // the callbacks are async, but the update function is with our game loop.
  }, {
    key: "update",
    value: function update() {
      // Clear key events
      this.keyEvents = {};
    }
  }]);
  return Keyboard;
}();

/***/ }),

/***/ "./testing/ecs/src/path.js":
/*!*********************************!*\
  !*** ./testing/ecs/src/path.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "image_path": () => (/* binding */ image_path)
/* harmony export */ });
var IMAGE_PRELUDE = "/testing/ecs/asset/images/";

var image_path = function image_path(path) {
  return IMAGE_PRELUDE + path;
};

/***/ }),

/***/ "./testing/ecs/src/prefab.js":
/*!***********************************!*\
  !*** ./testing/ecs/src/prefab.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add_alert_button": () => (/* binding */ add_alert_button),
/* harmony export */   "add_button": () => (/* binding */ add_button),
/* harmony export */   "add_npc": () => (/* binding */ add_npc),
/* harmony export */   "add_player": () => (/* binding */ add_player)
/* harmony export */ });
/* harmony import */ var ecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecs */ "./node_modules/ecs/ecs.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./testing/ecs/src/types.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path.js */ "./testing/ecs/src/path.js");



function add_player(world) {
  // set up the player
  var PLAYER = ecs__WEBPACK_IMPORTED_MODULE_0__["default"].createEntity(world);
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, PLAYER, 'controller', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Controller(0, 0, 0.9));
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, PLAYER, 'moveable', {
    dx: 0,
    dy: 0
  });
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, PLAYER, 'sprite', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Sprite(_path_js__WEBPACK_IMPORTED_MODULE_2__.image_path("player.png")));
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, PLAYER, 'rect', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Rect(50, 80, 32, 32));
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, PLAYER, 'collider', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Collider());
}
function add_npc(world, x, y, text, path) {
  var NPC = ecs__WEBPACK_IMPORTED_MODULE_0__["default"].createEntity(world);
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, NPC, 'npc', new _types_js__WEBPACK_IMPORTED_MODULE_1__.NPC(text));
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, NPC, 'collider', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Collider());
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, NPC, 'sprite', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Sprite(_path_js__WEBPACK_IMPORTED_MODULE_2__.image_path(path)));
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, NPC, 'interactable', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Interactable());
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, NPC, 'rect', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Rect(x, y, 32, 32));
}
function add_button(world, x, y, text, callback) {
  var BUTTON = ecs__WEBPACK_IMPORTED_MODULE_0__["default"].createEntity(world);
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, BUTTON, 'button', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Button(text, callback));
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, BUTTON, 'collider', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Collider());
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, BUTTON, 'interactable', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Interactable());
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, BUTTON, 'rect', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Rect(x, y, 32, 32));
}
function add_alert_button(world, x, y, text) {
  var BUTTON = ecs__WEBPACK_IMPORTED_MODULE_0__["default"].createEntity(world);
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, BUTTON, 'button', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Button(text, function () {
    alert(text);
  }));
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, BUTTON, 'collider', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Collider());
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, BUTTON, 'interactable', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Interactable());
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addComponentToEntity(world, BUTTON, 'rect', new _types_js__WEBPACK_IMPORTED_MODULE_1__.Rect(x, y, 32, 32));
}

/***/ }),

/***/ "./testing/ecs/src/state.js":
/*!**********************************!*\
  !*** ./testing/ecs/src/state.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _input_keyboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input/keyboard.js */ "./testing/ecs/src/input/keyboard.js");
/* harmony import */ var ecs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ecs */ "./node_modules/ecs/ecs.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var GameState = /*#__PURE__*/_createClass(function GameState() {
  _classCallCheck(this, GameState);
  this.keyboard = new _input_keyboard_js__WEBPACK_IMPORTED_MODULE_0__.Keyboard();
  this.world = ecs__WEBPACK_IMPORTED_MODULE_1__["default"].createWorld();
});
var state = new GameState();

/***/ }),

/***/ "./testing/ecs/src/system/collision.js":
/*!*********************************************!*\
  !*** ./testing/ecs/src/system/collision.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collisionPlugin": () => (/* binding */ collisionPlugin)
/* harmony export */ });
/* harmony import */ var ecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecs */ "./node_modules/ecs/ecs.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types.js */ "./testing/ecs/src/types.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function collisionPlugin(world) {
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addSystem(world, colliderSystem);
}

// each collider will constantly manage a list of entities with which it is colliding, through the collider component.
function colliderSystem(world) {
  var onUpdate = function onUpdate(dt) {
    var _iterator = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['collider', 'rect'])),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entity = _step.value;
        if (!entity) {
          continue;
        }
        var _iterator2 = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['collider', 'rect'])),
          _step2;
        try {
          var _loop = function _loop() {
            var other = _step2.value;
            if (!other) {
              return "continue";
            }
            if (entity === other) {
              return "continue";
            }
            var collides = (0,_types_js__WEBPACK_IMPORTED_MODULE_1__.rect_collisions)(entity.rect, other.rect);
            if (collides) {
              if (!entity.collider.collisions.includes(other)) {
                entity.collider.collisions.push(other);
              }
            } else {
              entity.collider.collisions = entity.collider.collisions.filter(function (eid) {
                return eid !== other;
              });
            }
          };
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _ret = _loop();
            if (_ret === "continue") continue;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  return {
    onUpdate: onUpdate
  };
}

/***/ }),

/***/ "./testing/ecs/src/system/dom.js":
/*!***************************************!*\
  !*** ./testing/ecs/src/system/dom.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMPlugin": () => (/* binding */ DOMPlugin)
/* harmony export */ });
/* harmony import */ var ecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecs */ "./node_modules/ecs/ecs.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


// general functionality for DOM elements used as components, like resizing, moving, etc.
function DOMPlugin(world) {
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addSystem(world, DOMSystem);
}
function resize(dom, rect) {
  if (!dom) {
    return;
  }
  dom.style.left = rect.x + "px";
  dom.style.top = rect.y + "px";
  dom.style.width = rect.w + "px";
  dom.style.height = rect.h + "px";
}

// squish all of the DOM components to fit the rect size.
function DOMSystem(world) {
  var onUpdate = function onUpdate(dt) {
    var _iterator = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['sprite', 'rect'])),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entity = _step.value;
        if (!entity) {
          continue;
        }
        var div = document.getElementById("entity-sprite-".concat(entity.sprite.divid));
        resize(div, entity.rect);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['button', 'rect'])),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _entity = _step2.value;
        if (!_entity) {
          continue;
        }
        var _div = document.getElementById("entity-button-".concat(_entity.button.divid));
        resize(_div, _entity.rect);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  return {
    onUpdate: onUpdate
  };
}

/***/ }),

/***/ "./testing/ecs/src/system/interact.js":
/*!********************************************!*\
  !*** ./testing/ecs/src/system/interact.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interactPlugin": () => (/* binding */ interactPlugin)
/* harmony export */ });
/* harmony import */ var ecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecs */ "./node_modules/ecs/ecs.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.js */ "./testing/ecs/src/state.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function interactPlugin(world) {
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addSystem(world, interact_system);
}
function interact_system(world) {
  var onUpdate = function onUpdate(dt) {
    var _iterator = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['collider', 'interactable'])),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entity = _step.value;
        if (!entity) {
          continue;
        }
        var _iterator2 = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['collider', 'controller'])),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var other = _step2.value;
            if (!other) {
              continue;
            }
            if (entity === other) {
              continue;
            }
            if (_state_js__WEBPACK_IMPORTED_MODULE_1__.state.keyboard.isKeyPressed(' ')) {
              if (entity.collider.collisions.includes(other)) {
                entity.interactable.interact_pending = true;
                entity.interactable.entity_interacted = other;
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  return {
    onUpdate: onUpdate
  };
}

/***/ }),

/***/ "./testing/ecs/src/system/mainpipeline.js":
/*!************************************************!*\
  !*** ./testing/ecs/src/system/mainpipeline.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ "./testing/ecs/src/system/collision.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./testing/ecs/src/system/dom.js");
/* harmony import */ var _interact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interact */ "./testing/ecs/src/system/interact.js");
/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movement */ "./testing/ecs/src/system/movement.js");
/* harmony import */ var _npc_npc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./npc/npc */ "./testing/ecs/src/system/npc/npc.js");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprite */ "./testing/ecs/src/system/sprite.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/button */ "./testing/ecs/src/system/ui/button.js");
// act as a prelude for all the systems in main.
// order all of them into a neat pipeline.








function init(world) {
  (0,_movement__WEBPACK_IMPORTED_MODULE_3__.movementPlugin)(world);
  (0,_collision__WEBPACK_IMPORTED_MODULE_0__.collisionPlugin)(world);
  (0,_npc_npc__WEBPACK_IMPORTED_MODULE_4__.npcPlugin)(world);
  (0,_sprite__WEBPACK_IMPORTED_MODULE_5__.spritePlugin)(world);
  (0,_ui_button__WEBPACK_IMPORTED_MODULE_6__.buttonPlugin)(world);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.DOMPlugin)(world);
  (0,_interact__WEBPACK_IMPORTED_MODULE_2__.interactPlugin)(world);
}

/***/ }),

/***/ "./testing/ecs/src/system/movement.js":
/*!********************************************!*\
  !*** ./testing/ecs/src/system/movement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "movementPlugin": () => (/* binding */ movementPlugin)
/* harmony export */ });
/* harmony import */ var ecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecs */ "./node_modules/ecs/ecs.js");
/* harmony import */ var clamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clamp */ "./node_modules/clamp/index.js");
/* harmony import */ var clamp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clamp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.js */ "./testing/ecs/src/state.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



function movementPlugin(world) {
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addSystem(world, keyboardControlSystem);
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addSystem(world, applyMovementSystem);
}

// update entity velocity based on key pressed
function keyboardControlSystem(world) {
  // called each game loop
  var onUpdate = function onUpdate(dt) {
    // get all of the entities in the world that pass the filter
    var _iterator = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['controller', 'moveable'])),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entity = _step.value;
        if (!entity) {
          continue;
        }

        // update the entity position according to what is pressed
        if (_state_js__WEBPACK_IMPORTED_MODULE_2__.state.keyboard.isKeyDown('ArrowUp')) {
          entity.moveable.dy -= 1;
        }
        if (_state_js__WEBPACK_IMPORTED_MODULE_2__.state.keyboard.isKeyDown('ArrowDown')) {
          entity.moveable.dy += 1;
        }
        if (_state_js__WEBPACK_IMPORTED_MODULE_2__.state.keyboard.isKeyDown('ArrowLeft')) {
          entity.moveable.dx -= 1;
        }
        if (_state_js__WEBPACK_IMPORTED_MODULE_2__.state.keyboard.isKeyDown('ArrowRight')) {
          entity.moveable.dx += 1;
        }
        entity.moveable.dx = clamp__WEBPACK_IMPORTED_MODULE_1___default()(entity.moveable.dx, -10, 10);
        entity.moveable.dy = clamp__WEBPACK_IMPORTED_MODULE_1___default()(entity.moveable.dy, -10, 10);

        // then ease toward zero
        entity.moveable.dx *= entity.controller.friction;
        entity.moveable.dy *= entity.controller.friction;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  return {
    onUpdate: onUpdate
  };
}
function applyMovementSystem(world) {
  var onUpdate = function onUpdate(dt) {
    var _iterator2 = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['moveable', 'rect'])),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var entity = _step2.value;
        if (!entity) {
          continue;
        }
        entity.rect.x += entity.moveable.dx;
        entity.rect.y += entity.moveable.dy;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  return {
    onUpdate: onUpdate
  };
}

/***/ }),

/***/ "./testing/ecs/src/system/npc/npc.js":
/*!*******************************************!*\
  !*** ./testing/ecs/src/system/npc/npc.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "npcPlugin": () => (/* binding */ npcPlugin)
/* harmony export */ });
/* harmony import */ var ecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecs */ "./node_modules/ecs/ecs.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state.js */ "./testing/ecs/src/state.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function npcPlugin(world) {
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addSystem(world, npc_talk_system);
}
function npc_talk_system(world) {
  var onUpdate = function onUpdate(dt) {
    var _iterator = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['interactable', 'npc'])),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entity = _step.value;
        if (!entity) {
          continue;
        }

        // just pop the interact from the interactable component.
        if (entity.interactable.interact_pending) {
          entity.interactable.interact_pending = false;
          console.log('npc interacted with player');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  return {
    onUpdate: onUpdate
  };
}

/***/ }),

/***/ "./testing/ecs/src/system/sprite.js":
/*!******************************************!*\
  !*** ./testing/ecs/src/system/sprite.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spritePlugin": () => (/* binding */ spritePlugin)
/* harmony export */ });
/* harmony import */ var ecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecs */ "./node_modules/ecs/ecs.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function spritePlugin(world) {
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addSystem(world, rendererSystem);
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addSystem(world, z_index_system);
}

// actually create the DIVS on screen that correspond with the sprites.
function rendererSystem(world) {
  var RENDERABLE_FILTER = ['sprite', 'rect'];

  // data structure to store all entities that were added or removed last frame
  var resultEntries = {
    count: 0,
    entries: new Array(100)
  };
  var onUpdate = function onUpdate(dt) {
    if (ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, RENDERABLE_FILTER, 'added', resultEntries)) {
      var count = 0;
      var _iterator = _createForOfIteratorHelper(resultEntries.entries),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var e = _step.value;
          if (!e) {
            continue;
          }
          if (resultEntries.count <= count) {
            break;
          }
          console.log("making div of image path " + e.sprite.path);
          // make the div
          var div = document.createElement('div');
          div.style.position = 'absolute';
          div.style.backgroundImage = "url(".concat(e.sprite.path, ")");
          div.style.backgroundSize = 'cover';
          div.id = "entity-sprite-".concat(e.sprite.divid);
          document.body.appendChild(div);
          count++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, RENDERABLE_FILTER, 'removed', resultEntries)) {
      var _count = 0;
      var _iterator2 = _createForOfIteratorHelper(resultEntries.entries),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _e = _step2.value;
          if (!_e) {
            continue;
          }
          if (resultEntries.count <= _count) {
            break;
          }

          // remove the div
          var _div = document.querySelector("#entity-sprite-".concat(_e.id));
          if (_div) {
            _div.remove();
          }
          _count++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  };
  return {
    onUpdate: onUpdate
  };
}
function z_index_system(world) {
  var onUpdate = function onUpdate(dt) {
    var _iterator3 = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['rect', 'sprite'])),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var e = _step3.value;
        if (!e) {
          continue;
        }
        var div = document.getElementById("entity-sprite-".concat(e.sprite.divid));
        if (!div) {
          continue;
        }

        // make the div sprites order themselves.
        // can only set the zindex to an int. need to floor it, or nothing will happen.
        div.style.zIndex = Math.floor(e.rect.y).toString();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };
  return {
    onUpdate: onUpdate
  };
}

/***/ }),

/***/ "./testing/ecs/src/system/ui/button.js":
/*!*********************************************!*\
  !*** ./testing/ecs/src/system/ui/button.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonPlugin": () => (/* binding */ buttonPlugin)
/* harmony export */ });
/* harmony import */ var ecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecs */ "./node_modules/ecs/ecs.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function buttonPlugin(world) {
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addSystem(world, buttonRenderSystem);
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].addSystem(world, button_interact_system);
}
function buttonRenderSystem(world) {
  var RENDERABLE_FILTER = ['button', 'rect'];

  // data structure to store all entities that were added or removed last frame
  var resultEntries = {
    count: 0,
    entries: new Array(100)
  };
  var onUpdate = function onUpdate(dt) {
    if (ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, RENDERABLE_FILTER, 'added', resultEntries)) {
      var count = 0;
      var _iterator = _createForOfIteratorHelper(resultEntries.entries),
        _step;
      try {
        var _loop = function _loop() {
          var e = _step.value;
          if (!e) {
            return "continue";
          }
          if (resultEntries.count <= count) {
            return "break";
          }
          var div = document.createElement('button');
          div.style.position = 'absolute';
          div.id = "entity-button-".concat(e.button.divid);

          // call the callback when the button is clicked, maybe add more callbacks?
          div.addEventListener('click', function () {
            e.button.callback();
          });
          document.body.appendChild(div);
          count++;
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();
          if (_ret === "continue") continue;
          if (_ret === "break") break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, RENDERABLE_FILTER, 'removed', resultEntries)) {
      var _count = 0;
      var _iterator2 = _createForOfIteratorHelper(resultEntries.entries),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          if (!e) {
            continue;
          }
          if (resultEntries.count <= _count) {
            break;
          }

          // remove the div
          var div = document.getElementById("entity-button-".concat(e.id));
          if (div) {
            div.remove();
          }
          _count++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  };
  return {
    onUpdate: onUpdate
  };
}
function button_interact_system(world) {
  var onUpdate = function onUpdate(dt) {
    var _iterator3 = _createForOfIteratorHelper(ecs__WEBPACK_IMPORTED_MODULE_0__["default"].getEntities(world, ['interactable', 'button'])),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var entity = _step3.value;
        if (!entity) {
          continue;
        }

        // just pop the interact from the interactable component.
        if (entity.interactable.interact_pending) {
          entity.interactable.interact_pending = false;
          entity.button.callback();
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };
  return {
    onUpdate: onUpdate
  };
}

/***/ }),

/***/ "./testing/ecs/src/types.js":
/*!**********************************!*\
  !*** ./testing/ecs/src/types.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "Collider": () => (/* binding */ Collider),
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "Interactable": () => (/* binding */ Interactable),
/* harmony export */   "NPC": () => (/* binding */ NPC),
/* harmony export */   "Rect": () => (/* binding */ Rect),
/* harmony export */   "Sprite": () => (/* binding */ Sprite),
/* harmony export */   "rect_collisions": () => (/* binding */ rect_collisions)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// typing with classes is totally optional here, since the ecs framework just goes by name and lazy-inits the component array.
// this basically just provides nice constructors for the components.


// have to manually export all the types ughhhhh

var Controller = /*#__PURE__*/_createClass(function Controller(dx, dy, friction) {
  _classCallCheck(this, Controller);
  this.dx = dx;
  this.dy = dy;
  this.friction = friction;
});
var Sprite = /*#__PURE__*/_createClass(function Sprite(path) {
  _classCallCheck(this, Sprite);
  this.path = path;
  this.divid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
var Rect = /*#__PURE__*/_createClass(function Rect(x, y, w, h) {
  _classCallCheck(this, Rect);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
});
var rect_collisions = function rect_collisions(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
};
var Collider = /*#__PURE__*/_createClass(function Collider() {
  _classCallCheck(this, Collider);
  // list of eids of currently colliding entities.
  this.collisions = [];
});
var NPC = /*#__PURE__*/_createClass(function NPC(text) {
  _classCallCheck(this, NPC);
  this.text = text;
});
var Button = /*#__PURE__*/_createClass(function Button(text, callback) {
  _classCallCheck(this, Button);
  this.text = text;
  // when pressed, call the callback fn
  this.callback = callback;
  this.divid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
var Interactable = /*#__PURE__*/_createClass(function Interactable() {
  _classCallCheck(this, Interactable);
  // get the parent entity to interact, then clear the interact_pending flag
  this.interact_pending = false;
  this.entity_interacted = null;
});

/***/ }),

/***/ "./node_modules/clamp/index.js":
/*!*************************************!*\
  !*** ./node_modules/clamp/index.js ***!
  \*************************************/
/***/ ((module) => {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/ecs/ecs.js":
/*!*********************************!*\
  !*** ./node_modules/ecs/ecs.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComponentToEntity": () => (/* binding */ addComponentToEntity),
/* harmony export */   "addSystem": () => (/* binding */ addSystem),
/* harmony export */   "cleanup": () => (/* binding */ cleanup),
/* harmony export */   "createEntity": () => (/* binding */ createEntity),
/* harmony export */   "createWorld": () => (/* binding */ createWorld),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fixedUpdate": () => (/* binding */ fixedUpdate),
/* harmony export */   "getEntities": () => (/* binding */ getEntities),
/* harmony export */   "postFixedUpdate": () => (/* binding */ postFixedUpdate),
/* harmony export */   "postUpdate": () => (/* binding */ postUpdate),
/* harmony export */   "preFixedUpdate": () => (/* binding */ preFixedUpdate),
/* harmony export */   "preUpdate": () => (/* binding */ preUpdate),
/* harmony export */   "removeComponentFromEntity": () => (/* binding */ removeComponentFromEntity),
/* harmony export */   "removeEntity": () => (/* binding */ removeEntity),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _ordered_insert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ordered-insert.js */ "./node_modules/ecs/ordered-insert.js");
/* harmony import */ var remove_array_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remove-array-items */ "./node_modules/remove-array-items/src/remove-array-items.js");




const now = (typeof performance === 'undefined') ? (() => Date.now()) : (() => performance.now())


/**
 * @typedef { 'added' | 'removed' } ListenerType
 */

/**
 * @typedef { any } Component
 */

/**
 * @typedef {{
 *  [ key: string ]: Component
 * }} Entity
 */

/**
 * @typedef { Entity[] } FilteredEntityList
 */

/**
 * @typedef { (dt: number) => void } SystemUpdateFunction
 */

/**
 * @typedef { Object } System
 * @prop {SystemUpdateFunction} [onPreFixedUpdate]
 * @prop {SystemUpdateFunction} [onFixedUpdate]
 * @prop {SystemUpdateFunction} [onPostFixedUpdate]
 * @prop {SystemUpdateFunction} [onPreUpdate]
 * @prop {SystemUpdateFunction} [onUpdate]
 * @prop {SystemUpdateFunction} [onPostUpdate]
 */

/**
 * @typedef {{
 *   (world: World) => System
 * }} SystemFunction
 * @prop {string} [name] Name of the function. Defaults to "anonymousSystem"
 */

/**
 * @typedef { Object } Listener
 */

/**
 * @typedef {{ [ key: string ]: Listener }} ListenerMap
 */

/**
 * @typedef { Object } ListenerChangeMap
 * @prop {ListenerMap} added 
 * @prop {ListenerMap} removed 
 */

/**
 * @typedef {{ [ filterId: string ]: FilteredEntityList }} FilterMap
 */

/**
 * @typedef { Object } DeferredRemovalMap
 * @prop {number[]} entities indexes into entities array, sorted from highest to lowest
 * @prop {string[]} components [ entity index, component name ] pairs sorted from highest to lowest
 * Stored as a string but seperated with `__@@ECS@@__`
 */

/**
 * @typedef { Object } WorldStats
 * @prop {number} entityCount
 * @prop {{ [ key: number ]: number }} componentCount key is component id, value is instance count
 * @prop {{ [ key: number ]: number }} filterInvocationCount key is filter id, value is number of times this filter was run this frame
 * @prop {{
 *   name: string;
 *   timeElapsed: number;
 *   filters: {
 *     [ key: string ]: number;
 *   };
 * }[]} systems
 * @prop {number} currentSystem the array index of the currently processed system
 *   used to determine which systems invoke queries
 * @prop {number} lastSendTime time stats were last sent (used to throttle send)
 */

/**
 * @typedef { Object } World
 * @prop {Entity[]} entities 
 * @prop {FilterMap} filters 
 * @prop {System[]} systems 
 * @prop {ListenerChangeMap} listeners 
 * @prop {DeferredRemovalMap} deferredRemovals 
 * @prop {WorldStats} stats 
 */

/**
 * Creates a world and sends window post message with id `mreinstein/ecs-source`
 * and method `worldCreated`
 *
 * @param {number} worldId ID of the world to create
 * @returns {World} created world
 */
function createWorld (worldId=Math.ceil(Math.random() * 999999999) ) {
    /**
     * @type {World}
     */
    const world = {
        entities: [ ],
        filters: { },
        systems: [ ],
        listeners: {
            added: new Set(),  // entities added last frame
            removed: new Set(), // entities removed last frame

            // Buffer all entities added/removed this frame and report them as added/removed in the
            // next frame.  Fixes https://github.com/mreinstein/ecs/issues/35 where some events can
            // be missed depending on system order.
            _added: new Set(),
            _removed: new Set()
        },
        
        deferredRemovals: {
            entities: [ ],  // indexes into entities array, sorted from highest to lowest
            components: [ ] // [ entity index, component name ] pairs (unsorted)
        },

        stats: {
            // TODO: send world id to support multiple ecs worlds per page
            /*worldId, */
            entityCount: 0,
            componentCount: { }, // key is component id, value is instance count
            filterInvocationCount: { }, // key is filter id, value is number of times this filter was run this frame
            systems: [
                /*
                example format:
                    {
                        name: 'systemname',
                        timeElapsed: 0, // milliseconds spent in this system this frame
                        filters: {
                            filterId1: 0,  // number of entities that matched the filter
                            filterId2: 0,
                        }
                    }
                */
            ],

            // the array index of the currently processed system
            // used to determine which systems invoke queries
            currentSystem: 0,

            lastSendTime: 0, // time stats were last sent (used to throttle send)
        }
    }

    if ((typeof window !== 'undefined') && window.__MREINSTEIN_ECS_DEVTOOLS) {
        window.postMessage({
            id: 'mreinstein/ecs-source',
            method: 'worldCreated',
            data: world.stats,
        }, '*');
    }

    return world
}


/**
 * Creates an entity and adds it to the world, incrementing the entity count
 * @param {World} world world where entity will be added
 * @returns {Entity} the created entity
 */
function createEntity (world) {
    const entity = { }
    world.entities.push(entity)
    world.stats.entityCount++

    world.listeners._added.add(entity)
    return entity
}


/**
 * Adds a component to the entity
 * @param {World} world world where listener will be invoked
 * @param {Entity} entity 
 * @param {string} componentName 
 * @param {Component} [componentData] 
 * @returns {void} returns early if this is a duplicate componentName
 */
function addComponentToEntity (world, entity, componentName, componentData={}) {

    // ignore duplicate adds
    if (entity[componentName])
        return

    if (!Number.isInteger(world.stats.componentCount[componentName]))
        world.stats.componentCount[componentName] = 0

    if (!entity[componentName])
        world.stats.componentCount[componentName] += 1

    entity[componentName] = componentData

    // add this entity to any filters that match
    for (const filterId in world.filters) {
        const matches = _matchesFilter(filterId, entity)

        const filter = world.filters[filterId]
        const idx = filter.indexOf(entity)
        if (idx >= 0) {
            // filter already contains entity and the filter doesn't match the entity, remove it
            if (!matches)
                (0,remove_array_items__WEBPACK_IMPORTED_MODULE_1__["default"])(filter, idx, 1)
        } else if (matches) {
            // filter doesn't contain the entity yet, and it's not included yet, add it
            filter.push(entity)
        }
    }
}


/**
 * Removes a component from the entity, optionally deferring removal
 * @param {World} world world where listener will be invoked
 * @param {Entity} entity entity to remove component from
 * @param {string} componentName name of the component to remove
 * @param {boolean} [deferredRemoval] Default is true, optionally defer removal 
 * @returns {void} returns early if componentName does not exist on entity
 */
 function removeComponentFromEntity (world, entity, componentName, deferredRemoval=true) {
    // ignore removals when the component isn't present
    if (!entity[componentName])
        return

    if (deferredRemoval) {
        // add the component to the list of components to remove when the cleanup function is invoked
        const idx = world.entities.indexOf(entity)
        const removalKey = `${idx}__@@ECS@@__${componentName}`

        if (!world.deferredRemovals.components.includes(removalKey))
            world.deferredRemovals.components.push(removalKey)
    } else {
        _removeComponent(world, entity, componentName)
    }
}


/**
 * Remove an entity from the world
 * @param {World} world world to remove entity from and emit listeners
 * @param {Entity} entity entity to remove
 * @param {boolean} [deferredRemoval] Default is true, optionally defer removal 
 * @returns {void} returns early if entity does not exist in world
 */
 function removeEntity (world, entity, deferredRemoval=true) {
    const idx = world.entities.indexOf(entity)
    if (idx < 0)
        return

    world.listeners._removed.add(entity)

    if (deferredRemoval) {
        // add the entity to the list of entities to remove when the cleanup function is invoked
        if (!world.deferredRemovals.entities.includes(idx)) {
            (0,_ordered_insert_js__WEBPACK_IMPORTED_MODULE_0__["default"])(world.deferredRemovals.entities, idx)
            world.stats.entityCount--
        }
    } else {
        const shiftUpEntities = true
        _removeEntity(world, entity, shiftUpEntities)
    }
}


/**
 * Get entities from the world with all provided components. Optionally,
 * @param {World} world 
 * @param {string[]} componentNames A component filter used to match entities. 
 * Must match all of the components in the filter.
 * Can add an exclamation mark at the beginning to query by components that are not present. For example:
 * `const entities = ECS.getEntities(world, [ 'transform', '!hero' ])`
 * 
 * @param {ListenerType} [listenerType] Optional. Can be "added" or "removed". Provides a list of entities
 * that match were "added" or "removed" since the last system call which matched the filter.
 * * @param {ListenerResult} [listenerEntities] Optional. Provides the resulting entities that match the added/removed event.
 * must be present whenever ListenerType is present.
 * @returns {Entity[]} an array of entities that match the given filters
 */
function getEntities (world, componentNames, listenerType, listenerEntities) {
    const filterId = componentNames.join(',')

    if (!world.filters[filterId])
        world.filters[filterId] = world.entities.filter((e) => _matchesFilter(filterId, e))

    if (!world.stats.filterInvocationCount[filterId])
        world.stats.filterInvocationCount[filterId] = 0

    world.stats.filterInvocationCount[filterId] += 1;

    const systemIdx = world.stats.currentSystem
    if (world.stats.systems[systemIdx]) {
        if (!world.stats.systems[systemIdx].filters[filterId])
            world.stats.systems[systemIdx].filters[filterId] = 0

        world.stats.systems[systemIdx].filters[filterId] += world.filters[filterId].length
    }

    if (listenerType === 'added' || listenerType === 'removed') {

        if (listenerEntities) {
            listenerEntities.count = 0
            for (const entity of world.listeners[listenerType]) {
                if (_matchesFilter(filterId, entity)) {
                    listenerEntities.entries[listenerEntities.count] = entity
                    listenerEntities.count++
                }
            }

            return listenerEntities
        }

    } else if (listenerType) {
        throw new Error(`Invalid listenerType '${listenerType}'. Should be 'removed' or 'added'.`)
    }

    return world.filters[filterId]
}


/**
 * returns true if an entity contains all the components that match the filter
 * all entities having at least one component in the ignore list are excluded.
 * @param {string} filterId 
 * @param {Entity} entity 
 * @param {string[]} componentIgnoreList 
 * @returns 
 */
function _matchesFilter (filterId, entity, componentIgnoreList=[]) {
    const componentIds = filterId.split(',')

    // if the entity lacks any components in the filter, it's not in the filter
    for (const componentId of componentIds) {
        const isIgnored = componentIgnoreList.includes(componentId)
        if (isIgnored)
            return false

        if (componentId.startsWith('!') && entity[componentId.slice(1)])
            return false

        if (!componentId.startsWith('!') && !entity[componentId])
            return false
    }

    return true
}

/**
 * Adds a system to the world.
 * @param {World} world 
 * @param {SystemFunction} fn 
 */
function addSystem (world, fn) {
    const system = fn(world)

    world.stats.systems.push({
        name: fn.name || 'anonymousSystem',
        timeElapsed: 0, // milliseconds spent in this system this frame
        // key is filterId, value is number of entities that matched the filter
        filters: { }
    })

    if (!system.onPreFixedUpdate)
        system.onPreFixedUpdate = function () { }

    if (!system.onFixedUpdate)
        system.onFixedUpdate = function () { }

    if (!system.onPostFixedUpdate)
        system.onPostFixedUpdate = function () { }

    if (!system.onPreUpdate)
        system.onPreUpdate = function () { }

    if (!system.onUpdate)
        system.onUpdate = function () { }

    if (!system.onPostUpdate)
        system.onPostUpdate = function () { }

    world.systems.push(system)
}

/**
 * 
 * @param {World} world 
 * @param {number} dt Change in time since last update, in milliseconds
 */
function preFixedUpdate (world, dt) {
    for (let i=0; i < world.systems.length; i++) {
        world.stats.currentSystem = i
        const system = world.systems[i]
        const start = now()
        system.onPreFixedUpdate(dt)
        world.stats.systems[i].timeElapsed += (now() - start)
    }
}


/**
 * 
 * @param {World} world 
 * @param {number} dt Change in time since last update, in milliseconds
 */
function fixedUpdate (world, dt) {
    for (let i=0; i < world.systems.length; i++) {
        world.stats.currentSystem = i
        const system = world.systems[i]
        const start = now()
        system.onFixedUpdate(dt)
        world.stats.systems[i].timeElapsed += (now() - start)
    }
}

/**
 * 
 * @param {World} world 
 * @param {number} dt Change in time since last update, in milliseconds
 */
function postFixedUpdate (world, dt) {
    for (let i=0; i < world.systems.length; i++) {
        world.stats.currentSystem = i
        const system = world.systems[i]
        const start = now()
        system.onPostFixedUpdate(dt)
        world.stats.systems[i].timeElapsed += (now() - start)
    }
}


/**
 * 
 * @param {World} world 
 * @param {number} dt Change in time since last update, in milliseconds
 */
function preUpdate (world, dt) {
    for (let i=0; i < world.systems.length; i++) {
        world.stats.currentSystem = i
        const system = world.systems[i]
        const start = now()
        system.onPreUpdate(dt)
        world.stats.systems[i].timeElapsed += (now() - start)
    }
}

/**
 * 
 * @param {World} world 
 * @param {number} dt Change in time since last update, in milliseconds
 */
function update (world, dt) {
    for (let i=0; i < world.systems.length; i++) {
        world.stats.currentSystem = i
        const system = world.systems[i]
        const start = now()
        system.onUpdate(dt)
        world.stats.systems[i].timeElapsed += (now() - start)
    }
}

/**
 * 
 * @param {World} world 
 * @param {number} dt Change in time since last update, in milliseconds
 */
function postUpdate (world, dt) {
    for (let i=0; i < world.systems.length; i++) {
        world.stats.currentSystem = i
        const system = world.systems[i]
        const start = now()
        system.onPostUpdate(dt)
        world.stats.systems[i].timeElapsed += (now() - start)
    }
}

/**
 * 
 * @param {World} world 
 */
function _resetStats (world) {
    for (const filterId in world.stats.filterInvocationCount)
        world.stats.filterInvocationCount[filterId] = 0

    for (const system of world.stats.systems) {
        system.timeElapsed = 0
        for (const filterId in system.filters)
            system.filters[filterId] = 0
    }

    world.stats.currentSystem = 0
}

/**
 * 
 * @param {World} world 
 * @param {Entity} entity 
 * @param {string} componentName 
 */
function _removeComponent (world, entity, componentName) {
    if (entity[componentName])
        world.stats.componentCount[componentName] -= 1

    delete entity[componentName]

    // remove this entity from any filters that no longer match
    for (const filterId in world.filters) {
        const filter = world.filters[filterId]

        if (_matchesFilter(filterId, entity) && !filter.includes(entity)) {
            // entity matches filter and it's not in the filter add it
            filter.push(entity)
        } else if (_hasComponent(filterId, componentName)) {
            // entity doesn't match filter and it's in the filter remove it
            // this filter contains the removed component
            const filterIdx = filter.indexOf(entity)
            if (filterIdx >= 0)
                (0,remove_array_items__WEBPACK_IMPORTED_MODULE_1__["default"])(filter, filterIdx, 1)
        }
    }
}

/**
 * 
 * @param {World} world 
 * @param {Entity} entity 
 */
function _removeEntity (world, entity, shiftUpEntities=false) {
    for (const componentName in entity)
        if (entity[componentName])
            world.stats.componentCount[componentName] -= 1

    const entityIdx = world.entities.indexOf(entity)

    ;(0,remove_array_items__WEBPACK_IMPORTED_MODULE_1__["default"])(world.entities, entityIdx, 1)

    if (shiftUpEntities) {
        for (let i=0; i <  world.deferredRemovals.entities.length; i++) {
            const idx = world.deferredRemovals.entities[i]
            if (idx >= entityIdx)
                world.deferredRemovals.entities[i] -= 1
        }
    }

    // update all filters that match this
    for (const filterId in world.filters) {
        const filter = world.filters[filterId]
        const idx = filter.indexOf(entity)
        if (idx >= 0)
            (0,remove_array_items__WEBPACK_IMPORTED_MODULE_1__["default"])(filter, idx, 1)
    }
}

/**
 * purpose: by given filterId and component determine if component is referred in that filter.
 * @param {string} filterId a string in the form "component1,component2,...,componentN", component is a string
 * @param {string} component 
 * @returns {boolean}
 */
function _hasComponent (filterId, component) {
  return (filterId === component) ||
         filterId.startsWith(`${component},`) ||
         filterId.endsWith(`,${component}`) ||
         filterId.includes(`,${component},`)
}

/**
 * necessary cleanup step at the end of each frame loop
 * @param {World} world 
 */
function cleanup (world) {

    // move all of the entities that were added/removed this frame into the list to report
    // next frame. This ensures that events aren't missed when systems add entities after another
    // system listening for those entities has already run this frame.
    world.listeners.added.clear()
    world.listeners.removed.clear()

    for (const e of world.listeners._added)
        world.listeners.added.add(e)

    for (const e of world.listeners._removed)
        world.listeners.removed.add(e)

    world.listeners._added.clear()
    world.listeners._removed.clear()


    // process all entity components marked for deferred removal
    //
    // component removals MUST be processed before entity removals because
    // the component removal items include an index into the entity array, and
    // this will become invalid when entities are removed and the remaining items shift positions
    for (let i=0; i < world.deferredRemovals.components.length; i++) {
        const [ entityIdx, componentName ] = world.deferredRemovals.components[i].split('__@@ECS@@__')
        const entity = world.entities[entityIdx]

        _removeComponent(world, entity, componentName)
    }

    world.deferredRemovals.components.length = 0

    // process all entities marked for deferred removal
    for (const entityIdx of world.deferredRemovals.entities) {
        const entity = world.entities[entityIdx]
        _removeEntity(world, entity)
    }

    world.deferredRemovals.entities.length = 0

    if ((typeof window !== 'undefined') && window.__MREINSTEIN_ECS_DEVTOOLS) {
        // running at 60fps seems to queue up a lot of messages. I'm thinking it might just be more
        // data than postMessage can send. capping it at some lower update rate seems to work better.
        // for now capping this at 4fps. later we might investigate if sending deltas over postmessage
        // solves the message piling up problem.
        if (performance.now() - world.stats.lastSendTime > 250) {
            world.stats.lastSendTime = performance.now();
            window.postMessage({
                id: 'mreinstein/ecs-source',
                method: 'refreshData',
                data: world.stats,
            }, '*');
        }
    }

    setTimeout(_resetStats, 0, world) // defer reset until next frame
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    createWorld,
    createEntity,
    addComponentToEntity,
    removeComponentFromEntity,
    getEntities,
    removeEntity,
    addSystem,
    preFixedUpdate,
    fixedUpdate,
    postFixedUpdate,
    update,
    preUpdate,
    postUpdate,
    cleanup
});


/***/ }),

/***/ "./node_modules/ecs/ordered-insert.js":
/*!********************************************!*\
  !*** ./node_modules/ecs/ordered-insert.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderedInsert)
/* harmony export */ });

/**
 * insert the new item such that the array stays ordered from highest to lowest
 * @param {number[]} arr array of numbers to be mutated
 * @param {number} val value to insert
 * @returns {void} arr is mutated
 */
function orderedInsert (arr, val) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] <= val) {

            // shift down all of the entries after the insert location by 1
            for (let idx=arr.length-1; idx >= i; idx--)
                arr[idx+1] = arr[idx]

            arr[i] = val

            return
        }
    }

    arr.push(val)
}


/***/ }),

/***/ "./node_modules/remove-array-items/src/remove-array-items.js":
/*!*******************************************************************!*\
  !*** ./node_modules/remove-array-items/src/remove-array-items.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeItems)
/* harmony export */ });
/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
function removeItems (arr, startIdx, removeCount) {
    const length = arr.length

    if (startIdx >= length || removeCount <= 0 || startIdx < 0)
        return

    removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount)

    const len = length - removeCount

    for (let i = startIdx; i < len; ++i)
        arr[i] = arr[i + removeCount]

    arr.length = len
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./testing/ecs/src/main.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecs */ "./node_modules/ecs/ecs.js");
/* harmony import */ var _system_mainpipeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system/mainpipeline.js */ "./testing/ecs/src/system/mainpipeline.js");
/* harmony import */ var _prefab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prefab.js */ "./testing/ecs/src/prefab.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.js */ "./testing/ecs/src/state.js");




var currentTime = performance.now();
function gameLoop() {
  var newTime = performance.now();
  var frameTime = newTime - currentTime; // in milliseconds, e.g. 16.64356
  currentTime = newTime;

  // run onUpdate for all added systems
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].update(_state_js__WEBPACK_IMPORTED_MODULE_3__.state.world, frameTime);

  // necessary cleanup step at the end of each frame loop
  ecs__WEBPACK_IMPORTED_MODULE_0__["default"].cleanup(_state_js__WEBPACK_IMPORTED_MODULE_3__.state.world);
  _state_js__WEBPACK_IMPORTED_MODULE_3__.state.keyboard.update();
  requestAnimationFrame(gameLoop);
}

//// INIT EVERYTHING NOW ////
// init systems.
_system_mainpipeline_js__WEBPACK_IMPORTED_MODULE_1__.init(_state_js__WEBPACK_IMPORTED_MODULE_3__.state.world);

// init entities.
_prefab_js__WEBPACK_IMPORTED_MODULE_2__.add_player(_state_js__WEBPACK_IMPORTED_MODULE_3__.state.world);
_prefab_js__WEBPACK_IMPORTED_MODULE_2__.add_npc(_state_js__WEBPACK_IMPORTED_MODULE_3__.state.world, 100, 100, "hello", "npc.png");
_prefab_js__WEBPACK_IMPORTED_MODULE_2__.add_alert_button(_state_js__WEBPACK_IMPORTED_MODULE_3__.state.world, 200, 200, "you are alerted!!");

// finally start the game loop
gameLoop();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDc0I7QUFDaEI7QUFDRTtBQUVsQyxJQUFJNkMsV0FBVyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0FBRW5DLFNBQVNDLFFBQVFBLENBQUEsRUFBSTtFQUNqQixJQUFNQyxPQUFPLEdBQUdILFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7RUFDakMsSUFBTUcsU0FBUyxHQUFHRCxPQUFPLEdBQUdKLFdBQVcsRUFBRTtFQUN6Q0EsV0FBVyxHQUFHSSxPQUFPOztFQUVyQjtFQUNBbkksa0RBQVUsQ0FBQzZCLGtEQUFXLEVBQUV1RyxTQUFTLENBQUM7O0VBRWxDO0VBQ0FwSSxtREFBVyxDQUFDNkIsa0RBQVcsQ0FBQztFQUV4QkEsNERBQXFCLENBQUMsQ0FBQztFQUV2QnlHLHFCQUFxQixDQUFDSixRQUFRLENBQUM7QUFDbkM7O0FBR0E7QUFDQTtBQUNBTCx5REFBUyxDQUFDaEcsa0RBQVcsQ0FBQzs7QUFFdEI7QUFDQWlHLGtEQUFZLENBQUNqRyxrREFBVyxDQUFDO0FBQ3pCaUcsK0NBQVMsQ0FBQ2pHLGtEQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0FBRXBEaUcsd0RBQWtCLENBQUNqRyxrREFBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLENBQUM7O0FBRTlEO0FBQ0FxRyxRQUFRLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnLy4vdGVzdGluZy9lY3Mvc3JjL2lucHV0L2tleWJvYXJkLmpzIiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy8uL3Rlc3RpbmcvZWNzL3NyYy9wYXRoLmpzIiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy8uL3Rlc3RpbmcvZWNzL3NyYy9wcmVmYWIuanMiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnLy4vdGVzdGluZy9lY3Mvc3JjL3N0YXRlLmpzIiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy8uL3Rlc3RpbmcvZWNzL3NyYy9zeXN0ZW0vY29sbGlzaW9uLmpzIiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy8uL3Rlc3RpbmcvZWNzL3NyYy9zeXN0ZW0vZG9tLmpzIiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy8uL3Rlc3RpbmcvZWNzL3NyYy9zeXN0ZW0vaW50ZXJhY3QuanMiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnLy4vdGVzdGluZy9lY3Mvc3JjL3N5c3RlbS9tYWlucGlwZWxpbmUuanMiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnLy4vdGVzdGluZy9lY3Mvc3JjL3N5c3RlbS9tb3ZlbWVudC5qcyIsIndlYnBhY2s6Ly96YWNrZmlzaGVyLm5lb2NpdGllcy5vcmcvLi90ZXN0aW5nL2Vjcy9zcmMvc3lzdGVtL25wYy9ucGMuanMiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnLy4vdGVzdGluZy9lY3Mvc3JjL3N5c3RlbS9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnLy4vdGVzdGluZy9lY3Mvc3JjL3N5c3RlbS91aS9idXR0b24uanMiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnLy4vdGVzdGluZy9lY3Mvc3JjL3R5cGVzLmpzIiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy8uL25vZGVfbW9kdWxlcy9jbGFtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly96YWNrZmlzaGVyLm5lb2NpdGllcy5vcmcvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly96YWNrZmlzaGVyLm5lb2NpdGllcy5vcmcvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly96YWNrZmlzaGVyLm5lb2NpdGllcy5vcmcvLi9ub2RlX21vZHVsZXMvZWNzL2Vjcy5qcyIsIndlYnBhY2s6Ly96YWNrZmlzaGVyLm5lb2NpdGllcy5vcmcvLi9ub2RlX21vZHVsZXMvZWNzL29yZGVyZWQtaW5zZXJ0LmpzIiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy8uL25vZGVfbW9kdWxlcy9yZW1vdmUtYXJyYXktaXRlbXMvc3JjL3JlbW92ZS1hcnJheS1pdGVtcy5qcyIsIndlYnBhY2s6Ly96YWNrZmlzaGVyLm5lb2NpdGllcy5vcmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3phY2tmaXNoZXIubmVvY2l0aWVzLm9yZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemFja2Zpc2hlci5uZW9jaXRpZXMub3JnLy4vdGVzdGluZy9lY3Mvc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gT2JqZWN0IHRvIGtlZXAgdHJhY2sgb2Yga2V5IHN0YXRlc1xuICAgIHRoaXMua2V5cyA9IHt9O1xuXG4gICAgLy8gT2JqZWN0IHRvIGtlZXAgdHJhY2sgb2Yga2V5IGV2ZW50c1xuICAgIHRoaXMua2V5RXZlbnRzID0ge307XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIGtleWRvd24gYW5kIGtleXVwIGV2ZW50c1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcykpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKSk7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuXG4gICAgLy8gVXBkYXRlIGtleSBzdGF0ZVxuICAgIHRoaXMua2V5c1trZXldID0gdHJ1ZTtcblxuICAgIC8vIFVwZGF0ZSBrZXkgZXZlbnRcbiAgICB0aGlzLmtleUV2ZW50c1trZXldID0ge1xuICAgICAgZG93bjogdHJ1ZSxcbiAgICAgIHByZXNzZWQ6IHRydWUsXG4gICAgICByZWxlYXNlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlS2V5VXAoZXZlbnQpIHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG5cbiAgICAvLyBVcGRhdGUga2V5IHN0YXRlXG4gICAgdGhpcy5rZXlzW2tleV0gPSBmYWxzZTtcblxuICAgIC8vIFVwZGF0ZSBrZXkgZXZlbnRcbiAgICB0aGlzLmtleUV2ZW50c1trZXldID0ge1xuICAgICAgZG93bjogZmFsc2UsXG4gICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgIHJlbGVhc2VkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGlzS2V5RG93bihrZXkpIHtcbiAgICByZXR1cm4gISF0aGlzLmtleXNba2V5XTtcbiAgfVxuXG4gIGlzS2V5UHJlc3NlZChrZXkpIHtcbiAgICByZXR1cm4gISF0aGlzLmtleUV2ZW50c1trZXldICYmIHRoaXMua2V5RXZlbnRzW2tleV0ucHJlc3NlZDtcbiAgfVxuXG4gIGlzS2V5UmVsZWFzZWQoa2V5KSB7XG4gICAgcmV0dXJuICEhdGhpcy5rZXlFdmVudHNba2V5XSAmJiB0aGlzLmtleUV2ZW50c1trZXldLnJlbGVhc2VkO1xuICB9XG5cbiAgLy8gY2FsbCB0aGUgdXBkYXRlIGZ1bmN0aW9uIHRvIGNvcHkgdGhlIGtleWV2ZW50cyBpbnRvIHRoZSBrZXlzLlxuICAvLyB0aGUgY2FsbGJhY2tzIGFyZSBhc3luYywgYnV0IHRoZSB1cGRhdGUgZnVuY3Rpb24gaXMgd2l0aCBvdXIgZ2FtZSBsb29wLlxuICB1cGRhdGUoKSB7XG4gICAgLy8gQ2xlYXIga2V5IGV2ZW50c1xuICAgIHRoaXMua2V5RXZlbnRzID0ge307XG4gIH1cbn1cbiIsImNvbnN0IElNQUdFX1BSRUxVREUgPSBcIi90ZXN0aW5nL2Vjcy9hc3NldC9pbWFnZXMvXCJcblxuZXhwb3J0IHtpbWFnZV9wYXRofVxuXG5jb25zdCBpbWFnZV9wYXRoID0gKHBhdGgpID0+IHtcbiAgICByZXR1cm4gSU1BR0VfUFJFTFVERSArIHBhdGg7XG59IiwiaW1wb3J0IEVDUyBmcm9tICdlY3MnO1xuXG5pbXBvcnQgKiBhcyBUIGZyb20gJy4vdHlwZXMuanMnXG5pbXBvcnQgKiBhcyBQQVRIIGZyb20gJy4vcGF0aC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZF9wbGF5ZXIod29ybGQpXG57XG4gICAgLy8gc2V0IHVwIHRoZSBwbGF5ZXJcbiAgICBjb25zdCBQTEFZRVIgPSBFQ1MuY3JlYXRlRW50aXR5KHdvcmxkKVxuICAgIEVDUy5hZGRDb21wb25lbnRUb0VudGl0eSh3b3JsZCwgUExBWUVSLCAnY29udHJvbGxlcicsIG5ldyBULkNvbnRyb2xsZXIoMCwgMCwgMC45KSlcbiAgICBFQ1MuYWRkQ29tcG9uZW50VG9FbnRpdHkod29ybGQsIFBMQVlFUiwgJ21vdmVhYmxlJywgeyBkeDogMCwgZHk6IDAgfSlcbiAgICBFQ1MuYWRkQ29tcG9uZW50VG9FbnRpdHkod29ybGQsIFBMQVlFUiwgJ3Nwcml0ZScsIG5ldyBULlNwcml0ZShQQVRILmltYWdlX3BhdGgoXCJwbGF5ZXIucG5nXCIpKSlcbiAgICBFQ1MuYWRkQ29tcG9uZW50VG9FbnRpdHkod29ybGQsIFBMQVlFUiwgJ3JlY3QnLCBuZXcgVC5SZWN0KDUwLCA4MCwgMzIsIDMyKSlcblxuICAgIEVDUy5hZGRDb21wb25lbnRUb0VudGl0eSh3b3JsZCwgUExBWUVSLCAnY29sbGlkZXInLCBuZXcgVC5Db2xsaWRlcigpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkX25wYyh3b3JsZCwgeCwgeSwgdGV4dCwgcGF0aClcbntcbiAgICBjb25zdCBOUEMgPSBFQ1MuY3JlYXRlRW50aXR5KHdvcmxkKVxuICAgIEVDUy5hZGRDb21wb25lbnRUb0VudGl0eSh3b3JsZCwgTlBDLCAnbnBjJywgbmV3IFQuTlBDKHRleHQpKVxuICAgIEVDUy5hZGRDb21wb25lbnRUb0VudGl0eSh3b3JsZCwgTlBDLCAnY29sbGlkZXInLCBuZXcgVC5Db2xsaWRlcigpKVxuICAgIEVDUy5hZGRDb21wb25lbnRUb0VudGl0eSh3b3JsZCwgTlBDLCAnc3ByaXRlJywgbmV3IFQuU3ByaXRlKFBBVEguaW1hZ2VfcGF0aChwYXRoKSkpXG4gICAgRUNTLmFkZENvbXBvbmVudFRvRW50aXR5KHdvcmxkLCBOUEMsICdpbnRlcmFjdGFibGUnLCBuZXcgVC5JbnRlcmFjdGFibGUoKSk7XG4gICAgRUNTLmFkZENvbXBvbmVudFRvRW50aXR5KHdvcmxkLCBOUEMsICdyZWN0JywgbmV3IFQuUmVjdCh4LCB5LCAzMiwgMzIpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkX2J1dHRvbih3b3JsZCwgeCwgeSwgdGV4dCwgY2FsbGJhY2spXG57XG4gICAgY29uc3QgQlVUVE9OID0gRUNTLmNyZWF0ZUVudGl0eSh3b3JsZClcbiAgICBFQ1MuYWRkQ29tcG9uZW50VG9FbnRpdHkod29ybGQsIEJVVFRPTiwgJ2J1dHRvbicsIG5ldyBULkJ1dHRvbih0ZXh0LCBjYWxsYmFjaykpXG4gICAgRUNTLmFkZENvbXBvbmVudFRvRW50aXR5KHdvcmxkLCBCVVRUT04sICdjb2xsaWRlcicsIG5ldyBULkNvbGxpZGVyKCkpXG4gICAgRUNTLmFkZENvbXBvbmVudFRvRW50aXR5KHdvcmxkLCBCVVRUT04sICdpbnRlcmFjdGFibGUnLCBuZXcgVC5JbnRlcmFjdGFibGUoKSk7XG4gICAgRUNTLmFkZENvbXBvbmVudFRvRW50aXR5KHdvcmxkLCBCVVRUT04sICdyZWN0JywgbmV3IFQuUmVjdCh4LCB5LCAzMiwgMzIpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkX2FsZXJ0X2J1dHRvbih3b3JsZCwgeCwgeSwgdGV4dClcbntcbiAgICBjb25zdCBCVVRUT04gPSBFQ1MuY3JlYXRlRW50aXR5KHdvcmxkKVxuICAgIEVDUy5hZGRDb21wb25lbnRUb0VudGl0eSh3b3JsZCwgQlVUVE9OLCAnYnV0dG9uJywgbmV3IFQuQnV0dG9uKHRleHQsICgpID0+IHthbGVydCh0ZXh0KX0pKVxuICAgIEVDUy5hZGRDb21wb25lbnRUb0VudGl0eSh3b3JsZCwgQlVUVE9OLCAnY29sbGlkZXInLCBuZXcgVC5Db2xsaWRlcigpKVxuICAgIEVDUy5hZGRDb21wb25lbnRUb0VudGl0eSh3b3JsZCwgQlVUVE9OLCAnaW50ZXJhY3RhYmxlJywgbmV3IFQuSW50ZXJhY3RhYmxlKCkpO1xuICAgIEVDUy5hZGRDb21wb25lbnRUb0VudGl0eSh3b3JsZCwgQlVUVE9OLCAncmVjdCcsIG5ldyBULlJlY3QoeCwgeSwgMzIsIDMyKSlcbn1cbiIsImltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9pbnB1dC9rZXlib2FyZC5qcyc7XG5pbXBvcnQgRUNTIGZyb20gJ2Vjcyc7XG5cbmNsYXNzIEdhbWVTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoKTtcbiAgICB0aGlzLndvcmxkID0gRUNTLmNyZWF0ZVdvcmxkKCk7XG4gIH1cbn1cblxuZXhwb3J0IGxldCBzdGF0ZSA9IG5ldyBHYW1lU3RhdGUoKTtcbiIsImltcG9ydCBFQ1MgZnJvbSAnZWNzJztcblxuaW1wb3J0IHtDb2xsaWRlciwgcmVjdF9jb2xsaXNpb25zfSBmcm9tICcuLi90eXBlcy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxpc2lvblBsdWdpbih3b3JsZClcbntcbiAgICBFQ1MuYWRkU3lzdGVtKHdvcmxkLCBjb2xsaWRlclN5c3RlbSk7XG59XG5cbi8vIGVhY2ggY29sbGlkZXIgd2lsbCBjb25zdGFudGx5IG1hbmFnZSBhIGxpc3Qgb2YgZW50aXRpZXMgd2l0aCB3aGljaCBpdCBpcyBjb2xsaWRpbmcsIHRocm91Z2ggdGhlIGNvbGxpZGVyIGNvbXBvbmVudC5cbmZ1bmN0aW9uIGNvbGxpZGVyU3lzdGVtKHdvcmxkKVxue1xuICAgIGNvbnN0IG9uVXBkYXRlID0gZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIEVDUy5nZXRFbnRpdGllcyh3b3JsZCwgWyAnY29sbGlkZXInLCAncmVjdCcgXSkpIHtcbiAgICAgICAgICAgIGlmICghZW50aXR5KSB7Y29udGludWU7fVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIEVDUy5nZXRFbnRpdGllcyh3b3JsZCwgWyAnY29sbGlkZXInLCAncmVjdCcgXSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW90aGVyKSB7Y29udGludWU7fVxuXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eSA9PT0gb3RoZXIpIHtjb250aW51ZTt9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb2xsaWRlcyA9IHJlY3RfY29sbGlzaW9ucyhlbnRpdHkucmVjdCwgb3RoZXIucmVjdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbnRpdHkuY29sbGlkZXIuY29sbGlzaW9ucy5pbmNsdWRlcyhvdGhlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5jb2xsaWRlci5jb2xsaXNpb25zLnB1c2gob3RoZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmNvbGxpZGVyLmNvbGxpc2lvbnMgPSBlbnRpdHkuY29sbGlkZXIuY29sbGlzaW9ucy5maWx0ZXIoZWlkID0+IGVpZCAhPT0gb3RoZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IG9uVXBkYXRlIH1cbn1cbiIsImltcG9ydCBFQ1MgZnJvbSAnZWNzJztcblxuLy8gZ2VuZXJhbCBmdW5jdGlvbmFsaXR5IGZvciBET00gZWxlbWVudHMgdXNlZCBhcyBjb21wb25lbnRzLCBsaWtlIHJlc2l6aW5nLCBtb3ZpbmcsIGV0Yy5cbmV4cG9ydCBmdW5jdGlvbiBET01QbHVnaW4od29ybGQpIHtcbiAgICBFQ1MuYWRkU3lzdGVtKHdvcmxkLCBET01TeXN0ZW0pO1xufVxuXG5mdW5jdGlvbiByZXNpemUoZG9tLCByZWN0KVxue1xuICAgIGlmICghZG9tKSB7IHJldHVybjsgfVxuXG4gICAgZG9tLnN0eWxlLmxlZnQgPSByZWN0LnggKyBcInB4XCI7XG4gICAgZG9tLnN0eWxlLnRvcCA9IHJlY3QueSArIFwicHhcIjtcbiAgICBkb20uc3R5bGUud2lkdGggPSByZWN0LncgKyBcInB4XCI7XG4gICAgZG9tLnN0eWxlLmhlaWdodCA9IHJlY3QuaCArIFwicHhcIjtcbn1cblxuLy8gc3F1aXNoIGFsbCBvZiB0aGUgRE9NIGNvbXBvbmVudHMgdG8gZml0IHRoZSByZWN0IHNpemUuXG5mdW5jdGlvbiBET01TeXN0ZW0od29ybGQpXG57XG4gICAgY29uc3Qgb25VcGRhdGUgPSBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbnRpdHkgb2YgRUNTLmdldEVudGl0aWVzKHdvcmxkLCBbJ3Nwcml0ZScsICdyZWN0J10pKSB7XG4gICAgICAgICAgICBpZiAoIWVudGl0eSkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVudGl0eS1zcHJpdGUtJHtlbnRpdHkuc3ByaXRlLmRpdmlkfWApO1xuICAgICAgICAgICAgcmVzaXplKGRpdiwgZW50aXR5LnJlY3QpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIEVDUy5nZXRFbnRpdGllcyh3b3JsZCwgWydidXR0b24nLCAncmVjdCddKSkge1xuICAgICAgICAgICAgaWYgKCFlbnRpdHkpIHsgY29udGludWU7IH1cblxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbnRpdHktYnV0dG9uLSR7ZW50aXR5LmJ1dHRvbi5kaXZpZH1gKTtcbiAgICAgICAgICAgIHJlc2l6ZShkaXYsIGVudGl0eS5yZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IG9uVXBkYXRlIH1cbn0iLCJpbXBvcnQgRUNTIGZyb20gJ2Vjcyc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuLi9zdGF0ZS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmFjdFBsdWdpbih3b3JsZClcbntcbiAgICBFQ1MuYWRkU3lzdGVtKHdvcmxkLCBpbnRlcmFjdF9zeXN0ZW0pO1xufVxuXG5mdW5jdGlvbiBpbnRlcmFjdF9zeXN0ZW0gKHdvcmxkKVxue1xuICAgIGNvbnN0IG9uVXBkYXRlID0gZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIEVDUy5nZXRFbnRpdGllcyh3b3JsZCwgWyAnY29sbGlkZXInLCAnaW50ZXJhY3RhYmxlJyBdKSkge1xuICAgICAgICAgICAgaWYgKCFlbnRpdHkpIHtjb250aW51ZTt9XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3RoZXIgb2YgRUNTLmdldEVudGl0aWVzKHdvcmxkLCBbICdjb2xsaWRlcicsICdjb250cm9sbGVyJyBdKSkge1xuICAgICAgICAgICAgICAgIGlmICghb3RoZXIpIHtjb250aW51ZTt9XG5cbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5ID09PSBvdGhlcikge2NvbnRpbnVlO31cblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5rZXlib2FyZC5pc0tleVByZXNzZWQoJyAnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50aXR5LmNvbGxpZGVyLmNvbGxpc2lvbnMuaW5jbHVkZXMob3RoZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuaW50ZXJhY3RhYmxlLmludGVyYWN0X3BlbmRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmludGVyYWN0YWJsZS5lbnRpdHlfaW50ZXJhY3RlZCA9IG90aGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb25VcGRhdGUgfVxufVxuIiwiLy8gYWN0IGFzIGEgcHJlbHVkZSBmb3IgYWxsIHRoZSBzeXN0ZW1zIGluIG1haW4uXG4vLyBvcmRlciBhbGwgb2YgdGhlbSBpbnRvIGEgbmVhdCBwaXBlbGluZS5cblxuaW1wb3J0IHsgY29sbGlzaW9uUGx1Z2luIH0gZnJvbSBcIi4vY29sbGlzaW9uXCI7XG5pbXBvcnQgeyBET01QbHVnaW4gfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGludGVyYWN0UGx1Z2luIH0gZnJvbSBcIi4vaW50ZXJhY3RcIjtcbmltcG9ydCB7IG1vdmVtZW50UGx1Z2luIH0gZnJvbSBcIi4vbW92ZW1lbnRcIjtcbmltcG9ydCB7IG5wY1BsdWdpbiB9IGZyb20gXCIuL25wYy9ucGNcIjtcbmltcG9ydCB7IHNwcml0ZVBsdWdpbiB9IGZyb20gXCIuL3Nwcml0ZVwiO1xuaW1wb3J0IHsgYnV0dG9uUGx1Z2luIH0gZnJvbSBcIi4vdWkvYnV0dG9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KHdvcmxkKVxue1xuICAgIG1vdmVtZW50UGx1Z2luKHdvcmxkKTtcbiAgICBjb2xsaXNpb25QbHVnaW4od29ybGQpO1xuICAgIG5wY1BsdWdpbih3b3JsZCk7XG4gICAgc3ByaXRlUGx1Z2luKHdvcmxkKTtcbiAgICBidXR0b25QbHVnaW4od29ybGQpO1xuICAgIERPTVBsdWdpbih3b3JsZCk7XG4gICAgaW50ZXJhY3RQbHVnaW4od29ybGQpO1xufVxuIiwiaW1wb3J0IEVDUyBmcm9tICdlY3MnO1xuaW1wb3J0IGNsYW1wICAgIGZyb20gJ2NsYW1wJztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4uL3N0YXRlLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVtZW50UGx1Z2luKHdvcmxkKVxue1xuICAgIEVDUy5hZGRTeXN0ZW0od29ybGQsIGtleWJvYXJkQ29udHJvbFN5c3RlbSk7XG4gICAgRUNTLmFkZFN5c3RlbSh3b3JsZCwgYXBwbHlNb3ZlbWVudFN5c3RlbSk7XG59XG5cbi8vIHVwZGF0ZSBlbnRpdHkgdmVsb2NpdHkgYmFzZWQgb24ga2V5IHByZXNzZWRcbmZ1bmN0aW9uIGtleWJvYXJkQ29udHJvbFN5c3RlbSAod29ybGQpIHtcbiAgICAvLyBjYWxsZWQgZWFjaCBnYW1lIGxvb3BcbiAgICBjb25zdCBvblVwZGF0ZSA9IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAvLyBnZXQgYWxsIG9mIHRoZSBlbnRpdGllcyBpbiB0aGUgd29ybGQgdGhhdCBwYXNzIHRoZSBmaWx0ZXJcbiAgICAgICAgZm9yIChjb25zdCBlbnRpdHkgb2YgRUNTLmdldEVudGl0aWVzKHdvcmxkLCBbICdjb250cm9sbGVyJywgJ21vdmVhYmxlJyBdKSkge1xuICAgICAgICAgICAgaWYgKCFlbnRpdHkpIHtjb250aW51ZTt9XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZW50aXR5IHBvc2l0aW9uIGFjY29yZGluZyB0byB3aGF0IGlzIHByZXNzZWRcbiAgICAgICAgICAgIGlmIChzdGF0ZS5rZXlib2FyZC5pc0tleURvd24oJ0Fycm93VXAnKSkge1xuICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlYWJsZS5keSAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlLmtleWJvYXJkLmlzS2V5RG93bignQXJyb3dEb3duJykpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkubW92ZWFibGUuZHkgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZS5rZXlib2FyZC5pc0tleURvd24oJ0Fycm93TGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVhYmxlLmR4IC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUua2V5Ym9hcmQuaXNLZXlEb3duKCdBcnJvd1JpZ2h0JykpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkubW92ZWFibGUuZHggKz0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICBlbnRpdHkubW92ZWFibGUuZHggPSBjbGFtcChlbnRpdHkubW92ZWFibGUuZHgsIC0xMCwgMTApXG4gICAgICAgICAgIGVudGl0eS5tb3ZlYWJsZS5keSA9IGNsYW1wKGVudGl0eS5tb3ZlYWJsZS5keSwgLTEwLCAxMClcbiAgICBcbiAgICAgICAgICAgIC8vIHRoZW4gZWFzZSB0b3dhcmQgemVyb1xuICAgICAgICAgICAgZW50aXR5Lm1vdmVhYmxlLmR4ICo9IGVudGl0eS5jb250cm9sbGVyLmZyaWN0aW9uXG4gICAgICAgICAgICBlbnRpdHkubW92ZWFibGUuZHkgKj0gZW50aXR5LmNvbnRyb2xsZXIuZnJpY3Rpb25cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IG9uVXBkYXRlIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlNb3ZlbWVudFN5c3RlbSAod29ybGQpIHtcbiAgICBjb25zdCBvblVwZGF0ZSA9IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBFQ1MuZ2V0RW50aXRpZXMod29ybGQsIFsgJ21vdmVhYmxlJywgJ3JlY3QnIF0pKSB7XG4gICAgICAgICAgICBpZiAoIWVudGl0eSkge2NvbnRpbnVlO31cblxuICAgICAgICAgICAgZW50aXR5LnJlY3QueCArPSBlbnRpdHkubW92ZWFibGUuZHhcbiAgICAgICAgICAgIGVudGl0eS5yZWN0LnkgKz0gZW50aXR5Lm1vdmVhYmxlLmR5XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBvblVwZGF0ZSB9XG59XG4iLCJpbXBvcnQgRUNTIGZyb20gJ2Vjcyc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuLi8uLi9zdGF0ZS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBucGNQbHVnaW4od29ybGQpXG57XG4gICAgRUNTLmFkZFN5c3RlbSh3b3JsZCwgbnBjX3RhbGtfc3lzdGVtKTtcbn1cblxuZnVuY3Rpb24gbnBjX3RhbGtfc3lzdGVtICh3b3JsZClcbntcbiAgICBjb25zdCBvblVwZGF0ZSA9IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBFQ1MuZ2V0RW50aXRpZXMod29ybGQsIFsgJ2ludGVyYWN0YWJsZScsICducGMnIF0pKSB7XG4gICAgICAgICAgICBpZiAoIWVudGl0eSkge2NvbnRpbnVlO31cblxuICAgICAgICAgICAgLy8ganVzdCBwb3AgdGhlIGludGVyYWN0IGZyb20gdGhlIGludGVyYWN0YWJsZSBjb21wb25lbnQuXG4gICAgICAgICAgICBpZiAoZW50aXR5LmludGVyYWN0YWJsZS5pbnRlcmFjdF9wZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LmludGVyYWN0YWJsZS5pbnRlcmFjdF9wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25wYyBpbnRlcmFjdGVkIHdpdGggcGxheWVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBvblVwZGF0ZSB9XG59XG4iLCJpbXBvcnQgRUNTIGZyb20gJ2Vjcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzcHJpdGVQbHVnaW4od29ybGQpXG57XG4gICAgRUNTLmFkZFN5c3RlbSh3b3JsZCwgcmVuZGVyZXJTeXN0ZW0pO1xuICAgIEVDUy5hZGRTeXN0ZW0od29ybGQsIHpfaW5kZXhfc3lzdGVtKTtcbn1cblxuLy8gYWN0dWFsbHkgY3JlYXRlIHRoZSBESVZTIG9uIHNjcmVlbiB0aGF0IGNvcnJlc3BvbmQgd2l0aCB0aGUgc3ByaXRlcy5cbmZ1bmN0aW9uIHJlbmRlcmVyU3lzdGVtICh3b3JsZCkge1xuXG4gICAgY29uc3QgUkVOREVSQUJMRV9GSUxURVIgPSBbICdzcHJpdGUnLCAncmVjdCcgXTtcblxuICAgIC8vIGRhdGEgc3RydWN0dXJlIHRvIHN0b3JlIGFsbCBlbnRpdGllcyB0aGF0IHdlcmUgYWRkZWQgb3IgcmVtb3ZlZCBsYXN0IGZyYW1lXG4gICAgY29uc3QgcmVzdWx0RW50cmllcyA9IHtcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIGVudHJpZXM6IG5ldyBBcnJheSgxMDApXG4gICAgfVxuXG4gICAgY29uc3Qgb25VcGRhdGUgPSBmdW5jdGlvbiAoZHQpIHtcblxuICAgICAgICBpZiAoRUNTLmdldEVudGl0aWVzKHdvcmxkLCBSRU5ERVJBQkxFX0ZJTFRFUiwgJ2FkZGVkJywgcmVzdWx0RW50cmllcykpIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgcmVzdWx0RW50cmllcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlKSB7Y29udGludWU7fVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdEVudHJpZXMuY291bnQgPD0gY291bnQpIHticmVhazt9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1ha2luZyBkaXYgb2YgaW1hZ2UgcGF0aCBcIiArIGUuc3ByaXRlLnBhdGgpO1xuICAgICAgICAgICAgICAgIC8vIG1ha2UgdGhlIGRpdlxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZS5zcHJpdGUucGF0aH0pYDtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgICAgICAgICAgIGRpdi5pZCA9IGBlbnRpdHktc3ByaXRlLSR7ZS5zcHJpdGUuZGl2aWR9YDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEVDUy5nZXRFbnRpdGllcyh3b3JsZCwgUkVOREVSQUJMRV9GSUxURVIsICdyZW1vdmVkJywgcmVzdWx0RW50cmllcykpIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgcmVzdWx0RW50cmllcy5lbnRyaWVzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICghZSkge2NvbnRpbnVlO31cblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRFbnRyaWVzLmNvdW50IDw9IGNvdW50KSB7YnJlYWs7fVxuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBkaXZcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VudGl0eS1zcHJpdGUtJHtlLmlkfWApO1xuICAgICAgICAgICAgICAgIGlmIChkaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBvblVwZGF0ZSB9XG59XG5cbmZ1bmN0aW9uIHpfaW5kZXhfc3lzdGVtKHdvcmxkKVxue1xuICAgIGNvbnN0IG9uVXBkYXRlID0gZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBFQ1MuZ2V0RW50aXRpZXMod29ybGQsIFsgJ3JlY3QnLCAnc3ByaXRlJyBdKSkge1xuICAgICAgICAgICAgaWYgKCFlKSB7Y29udGludWU7fVxuXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVudGl0eS1zcHJpdGUtJHtlLnNwcml0ZS5kaXZpZH1gKTtcbiAgICAgICAgICAgIGlmICghZGl2KSB7Y29udGludWU7fVxuXG4gICAgICAgICAgICAvLyBtYWtlIHRoZSBkaXYgc3ByaXRlcyBvcmRlciB0aGVtc2VsdmVzLlxuICAgICAgICAgICAgLy8gY2FuIG9ubHkgc2V0IHRoZSB6aW5kZXggdG8gYW4gaW50LiBuZWVkIHRvIGZsb29yIGl0LCBvciBub3RoaW5nIHdpbGwgaGFwcGVuLlxuICAgICAgICAgICAgZGl2LnN0eWxlLnpJbmRleCA9IE1hdGguZmxvb3IoZS5yZWN0LnkpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBvblVwZGF0ZSB9XG59XG4iLCJpbXBvcnQgRUNTIGZyb20gJ2Vjcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b25QbHVnaW4od29ybGQpIHtcbiAgICBFQ1MuYWRkU3lzdGVtKHdvcmxkLCBidXR0b25SZW5kZXJTeXN0ZW0pO1xuICAgIEVDUy5hZGRTeXN0ZW0od29ybGQsIGJ1dHRvbl9pbnRlcmFjdF9zeXN0ZW0pO1xufVxuXG5mdW5jdGlvbiBidXR0b25SZW5kZXJTeXN0ZW0gKHdvcmxkKSB7XG4gICAgY29uc3QgUkVOREVSQUJMRV9GSUxURVIgPSBbICdidXR0b24nLCAncmVjdCcgXTtcblxuICAgIC8vIGRhdGEgc3RydWN0dXJlIHRvIHN0b3JlIGFsbCBlbnRpdGllcyB0aGF0IHdlcmUgYWRkZWQgb3IgcmVtb3ZlZCBsYXN0IGZyYW1lXG4gICAgY29uc3QgcmVzdWx0RW50cmllcyA9IHtcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIGVudHJpZXM6IG5ldyBBcnJheSgxMDApXG4gICAgfVxuXG4gICAgY29uc3Qgb25VcGRhdGUgPSBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYgKEVDUy5nZXRFbnRpdGllcyh3b3JsZCwgUkVOREVSQUJMRV9GSUxURVIsICdhZGRlZCcsIHJlc3VsdEVudHJpZXMpKSB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIHJlc3VsdEVudHJpZXMuZW50cmllcykge1xuICAgICAgICAgICAgICAgIGlmICghZSkge2NvbnRpbnVlO31cblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRFbnRyaWVzLmNvdW50IDw9IGNvdW50KSB7YnJlYWs7fVxuXG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgZGl2LmlkID0gYGVudGl0eS1idXR0b24tJHtlLmJ1dHRvbi5kaXZpZH1gO1xuXG4gICAgICAgICAgICAgICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQsIG1heWJlIGFkZCBtb3JlIGNhbGxiYWNrcz9cbiAgICAgICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5idXR0b24uY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRUNTLmdldEVudGl0aWVzKHdvcmxkLCBSRU5ERVJBQkxFX0ZJTFRFUiwgJ3JlbW92ZWQnLCByZXN1bHRFbnRyaWVzKSkge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiByZXN1bHRFbnRyaWVzLmVudHJpZXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKCFlKSB7Y29udGludWU7fVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdEVudHJpZXMuY291bnQgPD0gY291bnQpIHticmVhazt9XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGRpdlxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZW50aXR5LWJ1dHRvbi0ke2UuaWR9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpdikge1xuICAgICAgICAgICAgICAgICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IG9uVXBkYXRlIH1cbn1cblxuZnVuY3Rpb24gYnV0dG9uX2ludGVyYWN0X3N5c3RlbSh3b3JsZClcbntcbiAgICBjb25zdCBvblVwZGF0ZSA9IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBFQ1MuZ2V0RW50aXRpZXMod29ybGQsIFsgJ2ludGVyYWN0YWJsZScsICdidXR0b24nIF0pKSB7XG4gICAgICAgICAgICBpZiAoIWVudGl0eSkge2NvbnRpbnVlO31cblxuICAgICAgICAgICAgLy8ganVzdCBwb3AgdGhlIGludGVyYWN0IGZyb20gdGhlIGludGVyYWN0YWJsZSBjb21wb25lbnQuXG4gICAgICAgICAgICBpZiAoZW50aXR5LmludGVyYWN0YWJsZS5pbnRlcmFjdF9wZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LmludGVyYWN0YWJsZS5pbnRlcmFjdF9wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZW50aXR5LmJ1dHRvbi5jYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb25VcGRhdGUgfVxufVxuIiwiLy8gdHlwaW5nIHdpdGggY2xhc3NlcyBpcyB0b3RhbGx5IG9wdGlvbmFsIGhlcmUsIHNpbmNlIHRoZSBlY3MgZnJhbWV3b3JrIGp1c3QgZ29lcyBieSBuYW1lIGFuZCBsYXp5LWluaXRzIHRoZSBjb21wb25lbnQgYXJyYXkuXG4vLyB0aGlzIGJhc2ljYWxseSBqdXN0IHByb3ZpZGVzIG5pY2UgY29uc3RydWN0b3JzIGZvciB0aGUgY29tcG9uZW50cy5cbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcblxuLy8gaGF2ZSB0byBtYW51YWxseSBleHBvcnQgYWxsIHRoZSB0eXBlcyB1Z2hoaGhoXG5leHBvcnQgeyBTcHJpdGUsIFJlY3QsIENvbGxpZGVyLCByZWN0X2NvbGxpc2lvbnMsIE5QQywgQ29udHJvbGxlciwgQnV0dG9uLCBJbnRlcmFjdGFibGUgfTtcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKGR4LCBkeSwgZnJpY3Rpb24pIHtcbiAgICAgICAgdGhpcy5keCA9IGR4XG4gICAgICAgIHRoaXMuZHkgPSBkeVxuICAgICAgICB0aGlzLmZyaWN0aW9uID0gZnJpY3Rpb25cbiAgICB9XG59XG5cbmNsYXNzIFNwcml0ZSB7XG4gICAgY29uc3RydWN0b3IgKHBhdGgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aFxuICAgICAgICB0aGlzLmRpdmlkID0gdXVpZHY0KCk7XG4gICAgfVxufVxuXG5jbGFzcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAoeCwgeSwgdywgaCkge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy53ID0gd1xuICAgICAgICB0aGlzLmggPSBoXG4gICAgfVxufVxuXG5jb25zdCByZWN0X2NvbGxpc2lvbnMgPSAoYSwgYikgPT4ge1xuICAgIHJldHVybiBhLnggPCBiLnggKyBiLncgJiZcbiAgICAgICAgYS54ICsgYS53ID4gYi54ICYmXG4gICAgICAgIGEueSA8IGIueSArIGIuaCAmJlxuICAgICAgICBhLnkgKyBhLmggPiBiLnlcbn1cblxuY2xhc3MgQ29sbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gbGlzdCBvZiBlaWRzIG9mIGN1cnJlbnRseSBjb2xsaWRpbmcgZW50aXRpZXMuXG4gICAgICAgIHRoaXMuY29sbGlzaW9ucyA9IFtdXG4gICAgfVxufVxuXG5jbGFzcyBOUEMge1xuICAgIGNvbnN0cnVjdG9yICh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHRcbiAgICB9XG59XG5cbmNsYXNzIEJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IgKHRleHQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHRcbiAgICAgICAgLy8gd2hlbiBwcmVzc2VkLCBjYWxsIHRoZSBjYWxsYmFjayBmblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2sgXG4gICAgICAgIHRoaXMuZGl2aWQgPSB1dWlkdjQoKTtcbiAgICB9XG59XG5cbmNsYXNzIEludGVyYWN0YWJsZSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvLyBnZXQgdGhlIHBhcmVudCBlbnRpdHkgdG8gaW50ZXJhY3QsIHRoZW4gY2xlYXIgdGhlIGludGVyYWN0X3BlbmRpbmcgZmxhZ1xuICAgICAgICB0aGlzLmludGVyYWN0X3BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbnRpdHlfaW50ZXJhY3RlZCA9IG51bGw7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFtcFxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiA8IG1heFxuICAgID8gKHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSlcbiAgICA6ICh2YWx1ZSA8IG1heCA/IG1heCA6IHZhbHVlID4gbWluID8gbWluIDogdmFsdWUpXG59XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgb3JkZXJlZEluc2VydCBmcm9tICcuL29yZGVyZWQtaW5zZXJ0LmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW1zICAgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuXG5cbmNvbnN0IG5vdyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICd1bmRlZmluZWQnKSA/ICgoKSA9PiBEYXRlLm5vdygpKSA6ICgoKSA9PiBwZXJmb3JtYW5jZS5ub3coKSlcblxuXG4vKipcbiAqIEB0eXBlZGVmIHsgJ2FkZGVkJyB8ICdyZW1vdmVkJyB9IExpc3RlbmVyVHlwZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyBhbnkgfSBDb21wb25lbnRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgWyBrZXk6IHN0cmluZyBdOiBDb21wb25lbnRcbiAqIH19IEVudGl0eVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyBFbnRpdHlbXSB9IEZpbHRlcmVkRW50aXR5TGlzdFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyAoZHQ6IG51bWJlcikgPT4gdm9pZCB9IFN5c3RlbVVwZGF0ZUZ1bmN0aW9uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7IE9iamVjdCB9IFN5c3RlbVxuICogQHByb3Age1N5c3RlbVVwZGF0ZUZ1bmN0aW9ufSBbb25QcmVGaXhlZFVwZGF0ZV1cbiAqIEBwcm9wIHtTeXN0ZW1VcGRhdGVGdW5jdGlvbn0gW29uRml4ZWRVcGRhdGVdXG4gKiBAcHJvcCB7U3lzdGVtVXBkYXRlRnVuY3Rpb259IFtvblBvc3RGaXhlZFVwZGF0ZV1cbiAqIEBwcm9wIHtTeXN0ZW1VcGRhdGVGdW5jdGlvbn0gW29uUHJlVXBkYXRlXVxuICogQHByb3Age1N5c3RlbVVwZGF0ZUZ1bmN0aW9ufSBbb25VcGRhdGVdXG4gKiBAcHJvcCB7U3lzdGVtVXBkYXRlRnVuY3Rpb259IFtvblBvc3RVcGRhdGVdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICAod29ybGQ6IFdvcmxkKSA9PiBTeXN0ZW1cbiAqIH19IFN5c3RlbUZ1bmN0aW9uXG4gKiBAcHJvcCB7c3RyaW5nfSBbbmFtZV0gTmFtZSBvZiB0aGUgZnVuY3Rpb24uIERlZmF1bHRzIHRvIFwiYW5vbnltb3VzU3lzdGVtXCJcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsgT2JqZWN0IH0gTGlzdGVuZXJcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7IFsga2V5OiBzdHJpbmcgXTogTGlzdGVuZXIgfX0gTGlzdGVuZXJNYXBcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsgT2JqZWN0IH0gTGlzdGVuZXJDaGFuZ2VNYXBcbiAqIEBwcm9wIHtMaXN0ZW5lck1hcH0gYWRkZWQgXG4gKiBAcHJvcCB7TGlzdGVuZXJNYXB9IHJlbW92ZWQgXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7eyBbIGZpbHRlcklkOiBzdHJpbmcgXTogRmlsdGVyZWRFbnRpdHlMaXN0IH19IEZpbHRlck1hcFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyBPYmplY3QgfSBEZWZlcnJlZFJlbW92YWxNYXBcbiAqIEBwcm9wIHtudW1iZXJbXX0gZW50aXRpZXMgaW5kZXhlcyBpbnRvIGVudGl0aWVzIGFycmF5LCBzb3J0ZWQgZnJvbSBoaWdoZXN0IHRvIGxvd2VzdFxuICogQHByb3Age3N0cmluZ1tdfSBjb21wb25lbnRzIFsgZW50aXR5IGluZGV4LCBjb21wb25lbnQgbmFtZSBdIHBhaXJzIHNvcnRlZCBmcm9tIGhpZ2hlc3QgdG8gbG93ZXN0XG4gKiBTdG9yZWQgYXMgYSBzdHJpbmcgYnV0IHNlcGVyYXRlZCB3aXRoIGBfX0BARUNTQEBfX2BcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsgT2JqZWN0IH0gV29ybGRTdGF0c1xuICogQHByb3Age251bWJlcn0gZW50aXR5Q291bnRcbiAqIEBwcm9wIHt7IFsga2V5OiBudW1iZXIgXTogbnVtYmVyIH19IGNvbXBvbmVudENvdW50IGtleSBpcyBjb21wb25lbnQgaWQsIHZhbHVlIGlzIGluc3RhbmNlIGNvdW50XG4gKiBAcHJvcCB7eyBbIGtleTogbnVtYmVyIF06IG51bWJlciB9fSBmaWx0ZXJJbnZvY2F0aW9uQ291bnQga2V5IGlzIGZpbHRlciBpZCwgdmFsdWUgaXMgbnVtYmVyIG9mIHRpbWVzIHRoaXMgZmlsdGVyIHdhcyBydW4gdGhpcyBmcmFtZVxuICogQHByb3Age3tcbiAqICAgbmFtZTogc3RyaW5nO1xuICogICB0aW1lRWxhcHNlZDogbnVtYmVyO1xuICogICBmaWx0ZXJzOiB7XG4gKiAgICAgWyBrZXk6IHN0cmluZyBdOiBudW1iZXI7XG4gKiAgIH07XG4gKiB9W119IHN5c3RlbXNcbiAqIEBwcm9wIHtudW1iZXJ9IGN1cnJlbnRTeXN0ZW0gdGhlIGFycmF5IGluZGV4IG9mIHRoZSBjdXJyZW50bHkgcHJvY2Vzc2VkIHN5c3RlbVxuICogICB1c2VkIHRvIGRldGVybWluZSB3aGljaCBzeXN0ZW1zIGludm9rZSBxdWVyaWVzXG4gKiBAcHJvcCB7bnVtYmVyfSBsYXN0U2VuZFRpbWUgdGltZSBzdGF0cyB3ZXJlIGxhc3Qgc2VudCAodXNlZCB0byB0aHJvdHRsZSBzZW5kKVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyBPYmplY3QgfSBXb3JsZFxuICogQHByb3Age0VudGl0eVtdfSBlbnRpdGllcyBcbiAqIEBwcm9wIHtGaWx0ZXJNYXB9IGZpbHRlcnMgXG4gKiBAcHJvcCB7U3lzdGVtW119IHN5c3RlbXMgXG4gKiBAcHJvcCB7TGlzdGVuZXJDaGFuZ2VNYXB9IGxpc3RlbmVycyBcbiAqIEBwcm9wIHtEZWZlcnJlZFJlbW92YWxNYXB9IGRlZmVycmVkUmVtb3ZhbHMgXG4gKiBAcHJvcCB7V29ybGRTdGF0c30gc3RhdHMgXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgd29ybGQgYW5kIHNlbmRzIHdpbmRvdyBwb3N0IG1lc3NhZ2Ugd2l0aCBpZCBgbXJlaW5zdGVpbi9lY3Mtc291cmNlYFxuICogYW5kIG1ldGhvZCBgd29ybGRDcmVhdGVkYFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3b3JsZElkIElEIG9mIHRoZSB3b3JsZCB0byBjcmVhdGVcbiAqIEByZXR1cm5zIHtXb3JsZH0gY3JlYXRlZCB3b3JsZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV29ybGQgKHdvcmxkSWQ9TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5OTk5OTk5OTkpICkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtXb3JsZH1cbiAgICAgKi9cbiAgICBjb25zdCB3b3JsZCA9IHtcbiAgICAgICAgZW50aXRpZXM6IFsgXSxcbiAgICAgICAgZmlsdGVyczogeyB9LFxuICAgICAgICBzeXN0ZW1zOiBbIF0sXG4gICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgYWRkZWQ6IG5ldyBTZXQoKSwgIC8vIGVudGl0aWVzIGFkZGVkIGxhc3QgZnJhbWVcbiAgICAgICAgICAgIHJlbW92ZWQ6IG5ldyBTZXQoKSwgLy8gZW50aXRpZXMgcmVtb3ZlZCBsYXN0IGZyYW1lXG5cbiAgICAgICAgICAgIC8vIEJ1ZmZlciBhbGwgZW50aXRpZXMgYWRkZWQvcmVtb3ZlZCB0aGlzIGZyYW1lIGFuZCByZXBvcnQgdGhlbSBhcyBhZGRlZC9yZW1vdmVkIGluIHRoZVxuICAgICAgICAgICAgLy8gbmV4dCBmcmFtZS4gIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmVpbnN0ZWluL2Vjcy9pc3N1ZXMvMzUgd2hlcmUgc29tZSBldmVudHMgY2FuXG4gICAgICAgICAgICAvLyBiZSBtaXNzZWQgZGVwZW5kaW5nIG9uIHN5c3RlbSBvcmRlci5cbiAgICAgICAgICAgIF9hZGRlZDogbmV3IFNldCgpLFxuICAgICAgICAgICAgX3JlbW92ZWQ6IG5ldyBTZXQoKVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgZGVmZXJyZWRSZW1vdmFsczoge1xuICAgICAgICAgICAgZW50aXRpZXM6IFsgXSwgIC8vIGluZGV4ZXMgaW50byBlbnRpdGllcyBhcnJheSwgc29ydGVkIGZyb20gaGlnaGVzdCB0byBsb3dlc3RcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IFsgXSAvLyBbIGVudGl0eSBpbmRleCwgY29tcG9uZW50IG5hbWUgXSBwYWlycyAodW5zb3J0ZWQpXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICAgIC8vIFRPRE86IHNlbmQgd29ybGQgaWQgdG8gc3VwcG9ydCBtdWx0aXBsZSBlY3Mgd29ybGRzIHBlciBwYWdlXG4gICAgICAgICAgICAvKndvcmxkSWQsICovXG4gICAgICAgICAgICBlbnRpdHlDb3VudDogMCxcbiAgICAgICAgICAgIGNvbXBvbmVudENvdW50OiB7IH0sIC8vIGtleSBpcyBjb21wb25lbnQgaWQsIHZhbHVlIGlzIGluc3RhbmNlIGNvdW50XG4gICAgICAgICAgICBmaWx0ZXJJbnZvY2F0aW9uQ291bnQ6IHsgfSwgLy8ga2V5IGlzIGZpbHRlciBpZCwgdmFsdWUgaXMgbnVtYmVyIG9mIHRpbWVzIHRoaXMgZmlsdGVyIHdhcyBydW4gdGhpcyBmcmFtZVxuICAgICAgICAgICAgc3lzdGVtczogW1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgZXhhbXBsZSBmb3JtYXQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzeXN0ZW1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVFbGFwc2VkOiAwLCAvLyBtaWxsaXNlY29uZHMgc3BlbnQgaW4gdGhpcyBzeXN0ZW0gdGhpcyBmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcklkMTogMCwgIC8vIG51bWJlciBvZiBlbnRpdGllcyB0aGF0IG1hdGNoZWQgdGhlIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcklkMjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAvLyB0aGUgYXJyYXkgaW5kZXggb2YgdGhlIGN1cnJlbnRseSBwcm9jZXNzZWQgc3lzdGVtXG4gICAgICAgICAgICAvLyB1c2VkIHRvIGRldGVybWluZSB3aGljaCBzeXN0ZW1zIGludm9rZSBxdWVyaWVzXG4gICAgICAgICAgICBjdXJyZW50U3lzdGVtOiAwLFxuXG4gICAgICAgICAgICBsYXN0U2VuZFRpbWU6IDAsIC8vIHRpbWUgc3RhdHMgd2VyZSBsYXN0IHNlbnQgKHVzZWQgdG8gdGhyb3R0bGUgc2VuZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpICYmIHdpbmRvdy5fX01SRUlOU1RFSU5fRUNTX0RFVlRPT0xTKSB7XG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBpZDogJ21yZWluc3RlaW4vZWNzLXNvdXJjZScsXG4gICAgICAgICAgICBtZXRob2Q6ICd3b3JsZENyZWF0ZWQnLFxuICAgICAgICAgICAgZGF0YTogd29ybGQuc3RhdHMsXG4gICAgICAgIH0sICcqJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmxkXG59XG5cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGVudGl0eSBhbmQgYWRkcyBpdCB0byB0aGUgd29ybGQsIGluY3JlbWVudGluZyB0aGUgZW50aXR5IGNvdW50XG4gKiBAcGFyYW0ge1dvcmxkfSB3b3JsZCB3b3JsZCB3aGVyZSBlbnRpdHkgd2lsbCBiZSBhZGRlZFxuICogQHJldHVybnMge0VudGl0eX0gdGhlIGNyZWF0ZWQgZW50aXR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbnRpdHkgKHdvcmxkKSB7XG4gICAgY29uc3QgZW50aXR5ID0geyB9XG4gICAgd29ybGQuZW50aXRpZXMucHVzaChlbnRpdHkpXG4gICAgd29ybGQuc3RhdHMuZW50aXR5Q291bnQrK1xuXG4gICAgd29ybGQubGlzdGVuZXJzLl9hZGRlZC5hZGQoZW50aXR5KVxuICAgIHJldHVybiBlbnRpdHlcbn1cblxuXG4vKipcbiAqIEFkZHMgYSBjb21wb25lbnQgdG8gdGhlIGVudGl0eVxuICogQHBhcmFtIHtXb3JsZH0gd29ybGQgd29ybGQgd2hlcmUgbGlzdGVuZXIgd2lsbCBiZSBpbnZva2VkXG4gKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5IFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2NvbXBvbmVudERhdGFdIFxuICogQHJldHVybnMge3ZvaWR9IHJldHVybnMgZWFybHkgaWYgdGhpcyBpcyBhIGR1cGxpY2F0ZSBjb21wb25lbnROYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21wb25lbnRUb0VudGl0eSAod29ybGQsIGVudGl0eSwgY29tcG9uZW50TmFtZSwgY29tcG9uZW50RGF0YT17fSkge1xuXG4gICAgLy8gaWdub3JlIGR1cGxpY2F0ZSBhZGRzXG4gICAgaWYgKGVudGl0eVtjb21wb25lbnROYW1lXSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIod29ybGQuc3RhdHMuY29tcG9uZW50Q291bnRbY29tcG9uZW50TmFtZV0pKVxuICAgICAgICB3b3JsZC5zdGF0cy5jb21wb25lbnRDb3VudFtjb21wb25lbnROYW1lXSA9IDBcblxuICAgIGlmICghZW50aXR5W2NvbXBvbmVudE5hbWVdKVxuICAgICAgICB3b3JsZC5zdGF0cy5jb21wb25lbnRDb3VudFtjb21wb25lbnROYW1lXSArPSAxXG5cbiAgICBlbnRpdHlbY29tcG9uZW50TmFtZV0gPSBjb21wb25lbnREYXRhXG5cbiAgICAvLyBhZGQgdGhpcyBlbnRpdHkgdG8gYW55IGZpbHRlcnMgdGhhdCBtYXRjaFxuICAgIGZvciAoY29uc3QgZmlsdGVySWQgaW4gd29ybGQuZmlsdGVycykge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gX21hdGNoZXNGaWx0ZXIoZmlsdGVySWQsIGVudGl0eSlcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSB3b3JsZC5maWx0ZXJzW2ZpbHRlcklkXVxuICAgICAgICBjb25zdCBpZHggPSBmaWx0ZXIuaW5kZXhPZihlbnRpdHkpXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgLy8gZmlsdGVyIGFscmVhZHkgY29udGFpbnMgZW50aXR5IGFuZCB0aGUgZmlsdGVyIGRvZXNuJ3QgbWF0Y2ggdGhlIGVudGl0eSwgcmVtb3ZlIGl0XG4gICAgICAgICAgICBpZiAoIW1hdGNoZXMpXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbXMoZmlsdGVyLCBpZHgsIDEpXG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgLy8gZmlsdGVyIGRvZXNuJ3QgY29udGFpbiB0aGUgZW50aXR5IHlldCwgYW5kIGl0J3Mgbm90IGluY2x1ZGVkIHlldCwgYWRkIGl0XG4gICAgICAgICAgICBmaWx0ZXIucHVzaChlbnRpdHkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiBSZW1vdmVzIGEgY29tcG9uZW50IGZyb20gdGhlIGVudGl0eSwgb3B0aW9uYWxseSBkZWZlcnJpbmcgcmVtb3ZhbFxuICogQHBhcmFtIHtXb3JsZH0gd29ybGQgd29ybGQgd2hlcmUgbGlzdGVuZXIgd2lsbCBiZSBpbnZva2VkXG4gKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5IGVudGl0eSB0byByZW1vdmUgY29tcG9uZW50IGZyb21cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZmVycmVkUmVtb3ZhbF0gRGVmYXVsdCBpcyB0cnVlLCBvcHRpb25hbGx5IGRlZmVyIHJlbW92YWwgXG4gKiBAcmV0dXJucyB7dm9pZH0gcmV0dXJucyBlYXJseSBpZiBjb21wb25lbnROYW1lIGRvZXMgbm90IGV4aXN0IG9uIGVudGl0eVxuICovXG4gZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBvbmVudEZyb21FbnRpdHkgKHdvcmxkLCBlbnRpdHksIGNvbXBvbmVudE5hbWUsIGRlZmVycmVkUmVtb3ZhbD10cnVlKSB7XG4gICAgLy8gaWdub3JlIHJlbW92YWxzIHdoZW4gdGhlIGNvbXBvbmVudCBpc24ndCBwcmVzZW50XG4gICAgaWYgKCFlbnRpdHlbY29tcG9uZW50TmFtZV0pXG4gICAgICAgIHJldHVyblxuXG4gICAgaWYgKGRlZmVycmVkUmVtb3ZhbCkge1xuICAgICAgICAvLyBhZGQgdGhlIGNvbXBvbmVudCB0byB0aGUgbGlzdCBvZiBjb21wb25lbnRzIHRvIHJlbW92ZSB3aGVuIHRoZSBjbGVhbnVwIGZ1bmN0aW9uIGlzIGludm9rZWRcbiAgICAgICAgY29uc3QgaWR4ID0gd29ybGQuZW50aXRpZXMuaW5kZXhPZihlbnRpdHkpXG4gICAgICAgIGNvbnN0IHJlbW92YWxLZXkgPSBgJHtpZHh9X19AQEVDU0BAX18ke2NvbXBvbmVudE5hbWV9YFxuXG4gICAgICAgIGlmICghd29ybGQuZGVmZXJyZWRSZW1vdmFscy5jb21wb25lbnRzLmluY2x1ZGVzKHJlbW92YWxLZXkpKVxuICAgICAgICAgICAgd29ybGQuZGVmZXJyZWRSZW1vdmFscy5jb21wb25lbnRzLnB1c2gocmVtb3ZhbEtleSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBfcmVtb3ZlQ29tcG9uZW50KHdvcmxkLCBlbnRpdHksIGNvbXBvbmVudE5hbWUpXG4gICAgfVxufVxuXG5cbi8qKlxuICogUmVtb3ZlIGFuIGVudGl0eSBmcm9tIHRoZSB3b3JsZFxuICogQHBhcmFtIHtXb3JsZH0gd29ybGQgd29ybGQgdG8gcmVtb3ZlIGVudGl0eSBmcm9tIGFuZCBlbWl0IGxpc3RlbmVyc1xuICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eSBlbnRpdHkgdG8gcmVtb3ZlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWZlcnJlZFJlbW92YWxdIERlZmF1bHQgaXMgdHJ1ZSwgb3B0aW9uYWxseSBkZWZlciByZW1vdmFsIFxuICogQHJldHVybnMge3ZvaWR9IHJldHVybnMgZWFybHkgaWYgZW50aXR5IGRvZXMgbm90IGV4aXN0IGluIHdvcmxkXG4gKi9cbiBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlRW50aXR5ICh3b3JsZCwgZW50aXR5LCBkZWZlcnJlZFJlbW92YWw9dHJ1ZSkge1xuICAgIGNvbnN0IGlkeCA9IHdvcmxkLmVudGl0aWVzLmluZGV4T2YoZW50aXR5KVxuICAgIGlmIChpZHggPCAwKVxuICAgICAgICByZXR1cm5cblxuICAgIHdvcmxkLmxpc3RlbmVycy5fcmVtb3ZlZC5hZGQoZW50aXR5KVxuXG4gICAgaWYgKGRlZmVycmVkUmVtb3ZhbCkge1xuICAgICAgICAvLyBhZGQgdGhlIGVudGl0eSB0byB0aGUgbGlzdCBvZiBlbnRpdGllcyB0byByZW1vdmUgd2hlbiB0aGUgY2xlYW51cCBmdW5jdGlvbiBpcyBpbnZva2VkXG4gICAgICAgIGlmICghd29ybGQuZGVmZXJyZWRSZW1vdmFscy5lbnRpdGllcy5pbmNsdWRlcyhpZHgpKSB7XG4gICAgICAgICAgICBvcmRlcmVkSW5zZXJ0KHdvcmxkLmRlZmVycmVkUmVtb3ZhbHMuZW50aXRpZXMsIGlkeClcbiAgICAgICAgICAgIHdvcmxkLnN0YXRzLmVudGl0eUNvdW50LS1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNoaWZ0VXBFbnRpdGllcyA9IHRydWVcbiAgICAgICAgX3JlbW92ZUVudGl0eSh3b3JsZCwgZW50aXR5LCBzaGlmdFVwRW50aXRpZXMpXG4gICAgfVxufVxuXG5cbi8qKlxuICogR2V0IGVudGl0aWVzIGZyb20gdGhlIHdvcmxkIHdpdGggYWxsIHByb3ZpZGVkIGNvbXBvbmVudHMuIE9wdGlvbmFsbHksXG4gKiBAcGFyYW0ge1dvcmxkfSB3b3JsZCBcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNvbXBvbmVudE5hbWVzIEEgY29tcG9uZW50IGZpbHRlciB1c2VkIHRvIG1hdGNoIGVudGl0aWVzLiBcbiAqIE11c3QgbWF0Y2ggYWxsIG9mIHRoZSBjb21wb25lbnRzIGluIHRoZSBmaWx0ZXIuXG4gKiBDYW4gYWRkIGFuIGV4Y2xhbWF0aW9uIG1hcmsgYXQgdGhlIGJlZ2lubmluZyB0byBxdWVyeSBieSBjb21wb25lbnRzIHRoYXQgYXJlIG5vdCBwcmVzZW50LiBGb3IgZXhhbXBsZTpcbiAqIGBjb25zdCBlbnRpdGllcyA9IEVDUy5nZXRFbnRpdGllcyh3b3JsZCwgWyAndHJhbnNmb3JtJywgJyFoZXJvJyBdKWBcbiAqIFxuICogQHBhcmFtIHtMaXN0ZW5lclR5cGV9IFtsaXN0ZW5lclR5cGVdIE9wdGlvbmFsLiBDYW4gYmUgXCJhZGRlZFwiIG9yIFwicmVtb3ZlZFwiLiBQcm92aWRlcyBhIGxpc3Qgb2YgZW50aXRpZXNcbiAqIHRoYXQgbWF0Y2ggd2VyZSBcImFkZGVkXCIgb3IgXCJyZW1vdmVkXCIgc2luY2UgdGhlIGxhc3Qgc3lzdGVtIGNhbGwgd2hpY2ggbWF0Y2hlZCB0aGUgZmlsdGVyLlxuICogKiBAcGFyYW0ge0xpc3RlbmVyUmVzdWx0fSBbbGlzdGVuZXJFbnRpdGllc10gT3B0aW9uYWwuIFByb3ZpZGVzIHRoZSByZXN1bHRpbmcgZW50aXRpZXMgdGhhdCBtYXRjaCB0aGUgYWRkZWQvcmVtb3ZlZCBldmVudC5cbiAqIG11c3QgYmUgcHJlc2VudCB3aGVuZXZlciBMaXN0ZW5lclR5cGUgaXMgcHJlc2VudC5cbiAqIEByZXR1cm5zIHtFbnRpdHlbXX0gYW4gYXJyYXkgb2YgZW50aXRpZXMgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4gZmlsdGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50aXRpZXMgKHdvcmxkLCBjb21wb25lbnROYW1lcywgbGlzdGVuZXJUeXBlLCBsaXN0ZW5lckVudGl0aWVzKSB7XG4gICAgY29uc3QgZmlsdGVySWQgPSBjb21wb25lbnROYW1lcy5qb2luKCcsJylcblxuICAgIGlmICghd29ybGQuZmlsdGVyc1tmaWx0ZXJJZF0pXG4gICAgICAgIHdvcmxkLmZpbHRlcnNbZmlsdGVySWRdID0gd29ybGQuZW50aXRpZXMuZmlsdGVyKChlKSA9PiBfbWF0Y2hlc0ZpbHRlcihmaWx0ZXJJZCwgZSkpXG5cbiAgICBpZiAoIXdvcmxkLnN0YXRzLmZpbHRlckludm9jYXRpb25Db3VudFtmaWx0ZXJJZF0pXG4gICAgICAgIHdvcmxkLnN0YXRzLmZpbHRlckludm9jYXRpb25Db3VudFtmaWx0ZXJJZF0gPSAwXG5cbiAgICB3b3JsZC5zdGF0cy5maWx0ZXJJbnZvY2F0aW9uQ291bnRbZmlsdGVySWRdICs9IDE7XG5cbiAgICBjb25zdCBzeXN0ZW1JZHggPSB3b3JsZC5zdGF0cy5jdXJyZW50U3lzdGVtXG4gICAgaWYgKHdvcmxkLnN0YXRzLnN5c3RlbXNbc3lzdGVtSWR4XSkge1xuICAgICAgICBpZiAoIXdvcmxkLnN0YXRzLnN5c3RlbXNbc3lzdGVtSWR4XS5maWx0ZXJzW2ZpbHRlcklkXSlcbiAgICAgICAgICAgIHdvcmxkLnN0YXRzLnN5c3RlbXNbc3lzdGVtSWR4XS5maWx0ZXJzW2ZpbHRlcklkXSA9IDBcblxuICAgICAgICB3b3JsZC5zdGF0cy5zeXN0ZW1zW3N5c3RlbUlkeF0uZmlsdGVyc1tmaWx0ZXJJZF0gKz0gd29ybGQuZmlsdGVyc1tmaWx0ZXJJZF0ubGVuZ3RoXG4gICAgfVxuXG4gICAgaWYgKGxpc3RlbmVyVHlwZSA9PT0gJ2FkZGVkJyB8fCBsaXN0ZW5lclR5cGUgPT09ICdyZW1vdmVkJykge1xuXG4gICAgICAgIGlmIChsaXN0ZW5lckVudGl0aWVzKSB7XG4gICAgICAgICAgICBsaXN0ZW5lckVudGl0aWVzLmNvdW50ID0gMFxuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRpdHkgb2Ygd29ybGQubGlzdGVuZXJzW2xpc3RlbmVyVHlwZV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoX21hdGNoZXNGaWx0ZXIoZmlsdGVySWQsIGVudGl0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJFbnRpdGllcy5lbnRyaWVzW2xpc3RlbmVyRW50aXRpZXMuY291bnRdID0gZW50aXR5XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyRW50aXRpZXMuY291bnQrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyRW50aXRpZXNcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChsaXN0ZW5lclR5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGxpc3RlbmVyVHlwZSAnJHtsaXN0ZW5lclR5cGV9Jy4gU2hvdWxkIGJlICdyZW1vdmVkJyBvciAnYWRkZWQnLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmxkLmZpbHRlcnNbZmlsdGVySWRdXG59XG5cblxuLyoqXG4gKiByZXR1cm5zIHRydWUgaWYgYW4gZW50aXR5IGNvbnRhaW5zIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IG1hdGNoIHRoZSBmaWx0ZXJcbiAqIGFsbCBlbnRpdGllcyBoYXZpbmcgYXQgbGVhc3Qgb25lIGNvbXBvbmVudCBpbiB0aGUgaWdub3JlIGxpc3QgYXJlIGV4Y2x1ZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlcklkIFxuICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eSBcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNvbXBvbmVudElnbm9yZUxpc3QgXG4gKiBAcmV0dXJucyBcbiAqL1xuZnVuY3Rpb24gX21hdGNoZXNGaWx0ZXIgKGZpbHRlcklkLCBlbnRpdHksIGNvbXBvbmVudElnbm9yZUxpc3Q9W10pIHtcbiAgICBjb25zdCBjb21wb25lbnRJZHMgPSBmaWx0ZXJJZC5zcGxpdCgnLCcpXG5cbiAgICAvLyBpZiB0aGUgZW50aXR5IGxhY2tzIGFueSBjb21wb25lbnRzIGluIHRoZSBmaWx0ZXIsIGl0J3Mgbm90IGluIHRoZSBmaWx0ZXJcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudElkIG9mIGNvbXBvbmVudElkcykge1xuICAgICAgICBjb25zdCBpc0lnbm9yZWQgPSBjb21wb25lbnRJZ25vcmVMaXN0LmluY2x1ZGVzKGNvbXBvbmVudElkKVxuICAgICAgICBpZiAoaXNJZ25vcmVkKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgaWYgKGNvbXBvbmVudElkLnN0YXJ0c1dpdGgoJyEnKSAmJiBlbnRpdHlbY29tcG9uZW50SWQuc2xpY2UoMSldKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgaWYgKCFjb21wb25lbnRJZC5zdGFydHNXaXRoKCchJykgJiYgIWVudGl0eVtjb21wb25lbnRJZF0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIEFkZHMgYSBzeXN0ZW0gdG8gdGhlIHdvcmxkLlxuICogQHBhcmFtIHtXb3JsZH0gd29ybGQgXG4gKiBAcGFyYW0ge1N5c3RlbUZ1bmN0aW9ufSBmbiBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFN5c3RlbSAod29ybGQsIGZuKSB7XG4gICAgY29uc3Qgc3lzdGVtID0gZm4od29ybGQpXG5cbiAgICB3b3JsZC5zdGF0cy5zeXN0ZW1zLnB1c2goe1xuICAgICAgICBuYW1lOiBmbi5uYW1lIHx8ICdhbm9ueW1vdXNTeXN0ZW0nLFxuICAgICAgICB0aW1lRWxhcHNlZDogMCwgLy8gbWlsbGlzZWNvbmRzIHNwZW50IGluIHRoaXMgc3lzdGVtIHRoaXMgZnJhbWVcbiAgICAgICAgLy8ga2V5IGlzIGZpbHRlcklkLCB2YWx1ZSBpcyBudW1iZXIgb2YgZW50aXRpZXMgdGhhdCBtYXRjaGVkIHRoZSBmaWx0ZXJcbiAgICAgICAgZmlsdGVyczogeyB9XG4gICAgfSlcblxuICAgIGlmICghc3lzdGVtLm9uUHJlRml4ZWRVcGRhdGUpXG4gICAgICAgIHN5c3RlbS5vblByZUZpeGVkVXBkYXRlID0gZnVuY3Rpb24gKCkgeyB9XG5cbiAgICBpZiAoIXN5c3RlbS5vbkZpeGVkVXBkYXRlKVxuICAgICAgICBzeXN0ZW0ub25GaXhlZFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHsgfVxuXG4gICAgaWYgKCFzeXN0ZW0ub25Qb3N0Rml4ZWRVcGRhdGUpXG4gICAgICAgIHN5c3RlbS5vblBvc3RGaXhlZFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHsgfVxuXG4gICAgaWYgKCFzeXN0ZW0ub25QcmVVcGRhdGUpXG4gICAgICAgIHN5c3RlbS5vblByZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHsgfVxuXG4gICAgaWYgKCFzeXN0ZW0ub25VcGRhdGUpXG4gICAgICAgIHN5c3RlbS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHsgfVxuXG4gICAgaWYgKCFzeXN0ZW0ub25Qb3N0VXBkYXRlKVxuICAgICAgICBzeXN0ZW0ub25Qb3N0VXBkYXRlID0gZnVuY3Rpb24gKCkgeyB9XG5cbiAgICB3b3JsZC5zeXN0ZW1zLnB1c2goc3lzdGVtKVxufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtXb3JsZH0gd29ybGQgXG4gKiBAcGFyYW0ge251bWJlcn0gZHQgQ2hhbmdlIGluIHRpbWUgc2luY2UgbGFzdCB1cGRhdGUsIGluIG1pbGxpc2Vjb25kc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlRml4ZWRVcGRhdGUgKHdvcmxkLCBkdCkge1xuICAgIGZvciAobGV0IGk9MDsgaSA8IHdvcmxkLnN5c3RlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd29ybGQuc3RhdHMuY3VycmVudFN5c3RlbSA9IGlcbiAgICAgICAgY29uc3Qgc3lzdGVtID0gd29ybGQuc3lzdGVtc1tpXVxuICAgICAgICBjb25zdCBzdGFydCA9IG5vdygpXG4gICAgICAgIHN5c3RlbS5vblByZUZpeGVkVXBkYXRlKGR0KVxuICAgICAgICB3b3JsZC5zdGF0cy5zeXN0ZW1zW2ldLnRpbWVFbGFwc2VkICs9IChub3coKSAtIHN0YXJ0KVxuICAgIH1cbn1cblxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtXb3JsZH0gd29ybGQgXG4gKiBAcGFyYW0ge251bWJlcn0gZHQgQ2hhbmdlIGluIHRpbWUgc2luY2UgbGFzdCB1cGRhdGUsIGluIG1pbGxpc2Vjb25kc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZml4ZWRVcGRhdGUgKHdvcmxkLCBkdCkge1xuICAgIGZvciAobGV0IGk9MDsgaSA8IHdvcmxkLnN5c3RlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd29ybGQuc3RhdHMuY3VycmVudFN5c3RlbSA9IGlcbiAgICAgICAgY29uc3Qgc3lzdGVtID0gd29ybGQuc3lzdGVtc1tpXVxuICAgICAgICBjb25zdCBzdGFydCA9IG5vdygpXG4gICAgICAgIHN5c3RlbS5vbkZpeGVkVXBkYXRlKGR0KVxuICAgICAgICB3b3JsZC5zdGF0cy5zeXN0ZW1zW2ldLnRpbWVFbGFwc2VkICs9IChub3coKSAtIHN0YXJ0KVxuICAgIH1cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7V29ybGR9IHdvcmxkIFxuICogQHBhcmFtIHtudW1iZXJ9IGR0IENoYW5nZSBpbiB0aW1lIHNpbmNlIGxhc3QgdXBkYXRlLCBpbiBtaWxsaXNlY29uZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvc3RGaXhlZFVwZGF0ZSAod29ybGQsIGR0KSB7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgd29ybGQuc3lzdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB3b3JsZC5zdGF0cy5jdXJyZW50U3lzdGVtID0gaVxuICAgICAgICBjb25zdCBzeXN0ZW0gPSB3b3JsZC5zeXN0ZW1zW2ldXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbm93KClcbiAgICAgICAgc3lzdGVtLm9uUG9zdEZpeGVkVXBkYXRlKGR0KVxuICAgICAgICB3b3JsZC5zdGF0cy5zeXN0ZW1zW2ldLnRpbWVFbGFwc2VkICs9IChub3coKSAtIHN0YXJ0KVxuICAgIH1cbn1cblxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtXb3JsZH0gd29ybGQgXG4gKiBAcGFyYW0ge251bWJlcn0gZHQgQ2hhbmdlIGluIHRpbWUgc2luY2UgbGFzdCB1cGRhdGUsIGluIG1pbGxpc2Vjb25kc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlVXBkYXRlICh3b3JsZCwgZHQpIHtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB3b3JsZC5zeXN0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdvcmxkLnN0YXRzLmN1cnJlbnRTeXN0ZW0gPSBpXG4gICAgICAgIGNvbnN0IHN5c3RlbSA9IHdvcmxkLnN5c3RlbXNbaV1cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBub3coKVxuICAgICAgICBzeXN0ZW0ub25QcmVVcGRhdGUoZHQpXG4gICAgICAgIHdvcmxkLnN0YXRzLnN5c3RlbXNbaV0udGltZUVsYXBzZWQgKz0gKG5vdygpIC0gc3RhcnQpXG4gICAgfVxufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtXb3JsZH0gd29ybGQgXG4gKiBAcGFyYW0ge251bWJlcn0gZHQgQ2hhbmdlIGluIHRpbWUgc2luY2UgbGFzdCB1cGRhdGUsIGluIG1pbGxpc2Vjb25kc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlICh3b3JsZCwgZHQpIHtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB3b3JsZC5zeXN0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdvcmxkLnN0YXRzLmN1cnJlbnRTeXN0ZW0gPSBpXG4gICAgICAgIGNvbnN0IHN5c3RlbSA9IHdvcmxkLnN5c3RlbXNbaV1cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBub3coKVxuICAgICAgICBzeXN0ZW0ub25VcGRhdGUoZHQpXG4gICAgICAgIHdvcmxkLnN0YXRzLnN5c3RlbXNbaV0udGltZUVsYXBzZWQgKz0gKG5vdygpIC0gc3RhcnQpXG4gICAgfVxufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtXb3JsZH0gd29ybGQgXG4gKiBAcGFyYW0ge251bWJlcn0gZHQgQ2hhbmdlIGluIHRpbWUgc2luY2UgbGFzdCB1cGRhdGUsIGluIG1pbGxpc2Vjb25kc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcG9zdFVwZGF0ZSAod29ybGQsIGR0KSB7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgd29ybGQuc3lzdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB3b3JsZC5zdGF0cy5jdXJyZW50U3lzdGVtID0gaVxuICAgICAgICBjb25zdCBzeXN0ZW0gPSB3b3JsZC5zeXN0ZW1zW2ldXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbm93KClcbiAgICAgICAgc3lzdGVtLm9uUG9zdFVwZGF0ZShkdClcbiAgICAgICAgd29ybGQuc3RhdHMuc3lzdGVtc1tpXS50aW1lRWxhcHNlZCArPSAobm93KCkgLSBzdGFydClcbiAgICB9XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge1dvcmxkfSB3b3JsZCBcbiAqL1xuZnVuY3Rpb24gX3Jlc2V0U3RhdHMgKHdvcmxkKSB7XG4gICAgZm9yIChjb25zdCBmaWx0ZXJJZCBpbiB3b3JsZC5zdGF0cy5maWx0ZXJJbnZvY2F0aW9uQ291bnQpXG4gICAgICAgIHdvcmxkLnN0YXRzLmZpbHRlckludm9jYXRpb25Db3VudFtmaWx0ZXJJZF0gPSAwXG5cbiAgICBmb3IgKGNvbnN0IHN5c3RlbSBvZiB3b3JsZC5zdGF0cy5zeXN0ZW1zKSB7XG4gICAgICAgIHN5c3RlbS50aW1lRWxhcHNlZCA9IDBcbiAgICAgICAgZm9yIChjb25zdCBmaWx0ZXJJZCBpbiBzeXN0ZW0uZmlsdGVycylcbiAgICAgICAgICAgIHN5c3RlbS5maWx0ZXJzW2ZpbHRlcklkXSA9IDBcbiAgICB9XG5cbiAgICB3b3JsZC5zdGF0cy5jdXJyZW50U3lzdGVtID0gMFxufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtXb3JsZH0gd29ybGQgXG4gKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5IFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgXG4gKi9cbmZ1bmN0aW9uIF9yZW1vdmVDb21wb25lbnQgKHdvcmxkLCBlbnRpdHksIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAoZW50aXR5W2NvbXBvbmVudE5hbWVdKVxuICAgICAgICB3b3JsZC5zdGF0cy5jb21wb25lbnRDb3VudFtjb21wb25lbnROYW1lXSAtPSAxXG5cbiAgICBkZWxldGUgZW50aXR5W2NvbXBvbmVudE5hbWVdXG5cbiAgICAvLyByZW1vdmUgdGhpcyBlbnRpdHkgZnJvbSBhbnkgZmlsdGVycyB0aGF0IG5vIGxvbmdlciBtYXRjaFxuICAgIGZvciAoY29uc3QgZmlsdGVySWQgaW4gd29ybGQuZmlsdGVycykge1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSB3b3JsZC5maWx0ZXJzW2ZpbHRlcklkXVxuXG4gICAgICAgIGlmIChfbWF0Y2hlc0ZpbHRlcihmaWx0ZXJJZCwgZW50aXR5KSAmJiAhZmlsdGVyLmluY2x1ZGVzKGVudGl0eSkpIHtcbiAgICAgICAgICAgIC8vIGVudGl0eSBtYXRjaGVzIGZpbHRlciBhbmQgaXQncyBub3QgaW4gdGhlIGZpbHRlciBhZGQgaXRcbiAgICAgICAgICAgIGZpbHRlci5wdXNoKGVudGl0eSlcbiAgICAgICAgfSBlbHNlIGlmIChfaGFzQ29tcG9uZW50KGZpbHRlcklkLCBjb21wb25lbnROYW1lKSkge1xuICAgICAgICAgICAgLy8gZW50aXR5IGRvZXNuJ3QgbWF0Y2ggZmlsdGVyIGFuZCBpdCdzIGluIHRoZSBmaWx0ZXIgcmVtb3ZlIGl0XG4gICAgICAgICAgICAvLyB0aGlzIGZpbHRlciBjb250YWlucyB0aGUgcmVtb3ZlZCBjb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcklkeCA9IGZpbHRlci5pbmRleE9mKGVudGl0eSlcbiAgICAgICAgICAgIGlmIChmaWx0ZXJJZHggPj0gMClcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtcyhmaWx0ZXIsIGZpbHRlcklkeCwgMSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7V29ybGR9IHdvcmxkIFxuICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eSBcbiAqL1xuZnVuY3Rpb24gX3JlbW92ZUVudGl0eSAod29ybGQsIGVudGl0eSwgc2hpZnRVcEVudGl0aWVzPWZhbHNlKSB7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnROYW1lIGluIGVudGl0eSlcbiAgICAgICAgaWYgKGVudGl0eVtjb21wb25lbnROYW1lXSlcbiAgICAgICAgICAgIHdvcmxkLnN0YXRzLmNvbXBvbmVudENvdW50W2NvbXBvbmVudE5hbWVdIC09IDFcblxuICAgIGNvbnN0IGVudGl0eUlkeCA9IHdvcmxkLmVudGl0aWVzLmluZGV4T2YoZW50aXR5KVxuXG4gICAgcmVtb3ZlSXRlbXMod29ybGQuZW50aXRpZXMsIGVudGl0eUlkeCwgMSlcblxuICAgIGlmIChzaGlmdFVwRW50aXRpZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgIHdvcmxkLmRlZmVycmVkUmVtb3ZhbHMuZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHdvcmxkLmRlZmVycmVkUmVtb3ZhbHMuZW50aXRpZXNbaV1cbiAgICAgICAgICAgIGlmIChpZHggPj0gZW50aXR5SWR4KVxuICAgICAgICAgICAgICAgIHdvcmxkLmRlZmVycmVkUmVtb3ZhbHMuZW50aXRpZXNbaV0gLT0gMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGFsbCBmaWx0ZXJzIHRoYXQgbWF0Y2ggdGhpc1xuICAgIGZvciAoY29uc3QgZmlsdGVySWQgaW4gd29ybGQuZmlsdGVycykge1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSB3b3JsZC5maWx0ZXJzW2ZpbHRlcklkXVxuICAgICAgICBjb25zdCBpZHggPSBmaWx0ZXIuaW5kZXhPZihlbnRpdHkpXG4gICAgICAgIGlmIChpZHggPj0gMClcbiAgICAgICAgICAgIHJlbW92ZUl0ZW1zKGZpbHRlciwgaWR4LCAxKVxuICAgIH1cbn1cblxuLyoqXG4gKiBwdXJwb3NlOiBieSBnaXZlbiBmaWx0ZXJJZCBhbmQgY29tcG9uZW50IGRldGVybWluZSBpZiBjb21wb25lbnQgaXMgcmVmZXJyZWQgaW4gdGhhdCBmaWx0ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsdGVySWQgYSBzdHJpbmcgaW4gdGhlIGZvcm0gXCJjb21wb25lbnQxLGNvbXBvbmVudDIsLi4uLGNvbXBvbmVudE5cIiwgY29tcG9uZW50IGlzIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50IFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIF9oYXNDb21wb25lbnQgKGZpbHRlcklkLCBjb21wb25lbnQpIHtcbiAgcmV0dXJuIChmaWx0ZXJJZCA9PT0gY29tcG9uZW50KSB8fFxuICAgICAgICAgZmlsdGVySWQuc3RhcnRzV2l0aChgJHtjb21wb25lbnR9LGApIHx8XG4gICAgICAgICBmaWx0ZXJJZC5lbmRzV2l0aChgLCR7Y29tcG9uZW50fWApIHx8XG4gICAgICAgICBmaWx0ZXJJZC5pbmNsdWRlcyhgLCR7Y29tcG9uZW50fSxgKVxufVxuXG4vKipcbiAqIG5lY2Vzc2FyeSBjbGVhbnVwIHN0ZXAgYXQgdGhlIGVuZCBvZiBlYWNoIGZyYW1lIGxvb3BcbiAqIEBwYXJhbSB7V29ybGR9IHdvcmxkIFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYW51cCAod29ybGQpIHtcblxuICAgIC8vIG1vdmUgYWxsIG9mIHRoZSBlbnRpdGllcyB0aGF0IHdlcmUgYWRkZWQvcmVtb3ZlZCB0aGlzIGZyYW1lIGludG8gdGhlIGxpc3QgdG8gcmVwb3J0XG4gICAgLy8gbmV4dCBmcmFtZS4gVGhpcyBlbnN1cmVzIHRoYXQgZXZlbnRzIGFyZW4ndCBtaXNzZWQgd2hlbiBzeXN0ZW1zIGFkZCBlbnRpdGllcyBhZnRlciBhbm90aGVyXG4gICAgLy8gc3lzdGVtIGxpc3RlbmluZyBmb3IgdGhvc2UgZW50aXRpZXMgaGFzIGFscmVhZHkgcnVuIHRoaXMgZnJhbWUuXG4gICAgd29ybGQubGlzdGVuZXJzLmFkZGVkLmNsZWFyKClcbiAgICB3b3JsZC5saXN0ZW5lcnMucmVtb3ZlZC5jbGVhcigpXG5cbiAgICBmb3IgKGNvbnN0IGUgb2Ygd29ybGQubGlzdGVuZXJzLl9hZGRlZClcbiAgICAgICAgd29ybGQubGlzdGVuZXJzLmFkZGVkLmFkZChlKVxuXG4gICAgZm9yIChjb25zdCBlIG9mIHdvcmxkLmxpc3RlbmVycy5fcmVtb3ZlZClcbiAgICAgICAgd29ybGQubGlzdGVuZXJzLnJlbW92ZWQuYWRkKGUpXG5cbiAgICB3b3JsZC5saXN0ZW5lcnMuX2FkZGVkLmNsZWFyKClcbiAgICB3b3JsZC5saXN0ZW5lcnMuX3JlbW92ZWQuY2xlYXIoKVxuXG5cbiAgICAvLyBwcm9jZXNzIGFsbCBlbnRpdHkgY29tcG9uZW50cyBtYXJrZWQgZm9yIGRlZmVycmVkIHJlbW92YWxcbiAgICAvL1xuICAgIC8vIGNvbXBvbmVudCByZW1vdmFscyBNVVNUIGJlIHByb2Nlc3NlZCBiZWZvcmUgZW50aXR5IHJlbW92YWxzIGJlY2F1c2VcbiAgICAvLyB0aGUgY29tcG9uZW50IHJlbW92YWwgaXRlbXMgaW5jbHVkZSBhbiBpbmRleCBpbnRvIHRoZSBlbnRpdHkgYXJyYXksIGFuZFxuICAgIC8vIHRoaXMgd2lsbCBiZWNvbWUgaW52YWxpZCB3aGVuIGVudGl0aWVzIGFyZSByZW1vdmVkIGFuZCB0aGUgcmVtYWluaW5nIGl0ZW1zIHNoaWZ0IHBvc2l0aW9uc1xuICAgIGZvciAobGV0IGk9MDsgaSA8IHdvcmxkLmRlZmVycmVkUmVtb3ZhbHMuY29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBbIGVudGl0eUlkeCwgY29tcG9uZW50TmFtZSBdID0gd29ybGQuZGVmZXJyZWRSZW1vdmFscy5jb21wb25lbnRzW2ldLnNwbGl0KCdfX0BARUNTQEBfXycpXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHdvcmxkLmVudGl0aWVzW2VudGl0eUlkeF1cblxuICAgICAgICBfcmVtb3ZlQ29tcG9uZW50KHdvcmxkLCBlbnRpdHksIGNvbXBvbmVudE5hbWUpXG4gICAgfVxuXG4gICAgd29ybGQuZGVmZXJyZWRSZW1vdmFscy5jb21wb25lbnRzLmxlbmd0aCA9IDBcblxuICAgIC8vIHByb2Nlc3MgYWxsIGVudGl0aWVzIG1hcmtlZCBmb3IgZGVmZXJyZWQgcmVtb3ZhbFxuICAgIGZvciAoY29uc3QgZW50aXR5SWR4IG9mIHdvcmxkLmRlZmVycmVkUmVtb3ZhbHMuZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gd29ybGQuZW50aXRpZXNbZW50aXR5SWR4XVxuICAgICAgICBfcmVtb3ZlRW50aXR5KHdvcmxkLCBlbnRpdHkpXG4gICAgfVxuXG4gICAgd29ybGQuZGVmZXJyZWRSZW1vdmFscy5lbnRpdGllcy5sZW5ndGggPSAwXG5cbiAgICBpZiAoKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSAmJiB3aW5kb3cuX19NUkVJTlNURUlOX0VDU19ERVZUT09MUykge1xuICAgICAgICAvLyBydW5uaW5nIGF0IDYwZnBzIHNlZW1zIHRvIHF1ZXVlIHVwIGEgbG90IG9mIG1lc3NhZ2VzLiBJJ20gdGhpbmtpbmcgaXQgbWlnaHQganVzdCBiZSBtb3JlXG4gICAgICAgIC8vIGRhdGEgdGhhbiBwb3N0TWVzc2FnZSBjYW4gc2VuZC4gY2FwcGluZyBpdCBhdCBzb21lIGxvd2VyIHVwZGF0ZSByYXRlIHNlZW1zIHRvIHdvcmsgYmV0dGVyLlxuICAgICAgICAvLyBmb3Igbm93IGNhcHBpbmcgdGhpcyBhdCA0ZnBzLiBsYXRlciB3ZSBtaWdodCBpbnZlc3RpZ2F0ZSBpZiBzZW5kaW5nIGRlbHRhcyBvdmVyIHBvc3RtZXNzYWdlXG4gICAgICAgIC8vIHNvbHZlcyB0aGUgbWVzc2FnZSBwaWxpbmcgdXAgcHJvYmxlbS5cbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLm5vdygpIC0gd29ybGQuc3RhdHMubGFzdFNlbmRUaW1lID4gMjUwKSB7XG4gICAgICAgICAgICB3b3JsZC5zdGF0cy5sYXN0U2VuZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgaWQ6ICdtcmVpbnN0ZWluL2Vjcy1zb3VyY2UnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3JlZnJlc2hEYXRhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB3b3JsZC5zdGF0cyxcbiAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KF9yZXNldFN0YXRzLCAwLCB3b3JsZCkgLy8gZGVmZXIgcmVzZXQgdW50aWwgbmV4dCBmcmFtZVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjcmVhdGVXb3JsZCxcbiAgICBjcmVhdGVFbnRpdHksXG4gICAgYWRkQ29tcG9uZW50VG9FbnRpdHksXG4gICAgcmVtb3ZlQ29tcG9uZW50RnJvbUVudGl0eSxcbiAgICBnZXRFbnRpdGllcyxcbiAgICByZW1vdmVFbnRpdHksXG4gICAgYWRkU3lzdGVtLFxuICAgIHByZUZpeGVkVXBkYXRlLFxuICAgIGZpeGVkVXBkYXRlLFxuICAgIHBvc3RGaXhlZFVwZGF0ZSxcbiAgICB1cGRhdGUsXG4gICAgcHJlVXBkYXRlLFxuICAgIHBvc3RVcGRhdGUsXG4gICAgY2xlYW51cFxufVxuIiwiXG4vKipcbiAqIGluc2VydCB0aGUgbmV3IGl0ZW0gc3VjaCB0aGF0IHRoZSBhcnJheSBzdGF5cyBvcmRlcmVkIGZyb20gaGlnaGVzdCB0byBsb3dlc3RcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyciBhcnJheSBvZiBudW1iZXJzIHRvIGJlIG11dGF0ZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWwgdmFsdWUgdG8gaW5zZXJ0XG4gKiBAcmV0dXJucyB7dm9pZH0gYXJyIGlzIG11dGF0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXJlZEluc2VydCAoYXJyLCB2YWwpIHtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSA8PSB2YWwpIHtcblxuICAgICAgICAgICAgLy8gc2hpZnQgZG93biBhbGwgb2YgdGhlIGVudHJpZXMgYWZ0ZXIgdGhlIGluc2VydCBsb2NhdGlvbiBieSAxXG4gICAgICAgICAgICBmb3IgKGxldCBpZHg9YXJyLmxlbmd0aC0xOyBpZHggPj0gaTsgaWR4LS0pXG4gICAgICAgICAgICAgICAgYXJyW2lkeCsxXSA9IGFycltpZHhdXG5cbiAgICAgICAgICAgIGFycltpXSA9IHZhbFxuXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFyci5wdXNoKHZhbClcbn1cbiIsIi8qKlxuICogUmVtb3ZlIGEgcmFuZ2Ugb2YgaXRlbXMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBmdW5jdGlvbiByZW1vdmVJdGVtc1xuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyIFRoZSB0YXJnZXQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydElkeCBUaGUgaW5kZXggdG8gYmVnaW4gcmVtb3ZpbmcgZnJvbSAoaW5jbHVzaXZlKVxuICogQHBhcmFtIHtudW1iZXJ9IHJlbW92ZUNvdW50IEhvdyBtYW55IGl0ZW1zIHRvIHJlbW92ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVJdGVtcyAoYXJyLCBzdGFydElkeCwgcmVtb3ZlQ291bnQpIHtcbiAgICBjb25zdCBsZW5ndGggPSBhcnIubGVuZ3RoXG5cbiAgICBpZiAoc3RhcnRJZHggPj0gbGVuZ3RoIHx8IHJlbW92ZUNvdW50IDw9IDAgfHwgc3RhcnRJZHggPCAwKVxuICAgICAgICByZXR1cm5cblxuICAgIHJlbW92ZUNvdW50ID0gKHN0YXJ0SWR4ICsgcmVtb3ZlQ291bnQgPiBsZW5ndGggPyBsZW5ndGggLSBzdGFydElkeCA6IHJlbW92ZUNvdW50KVxuXG4gICAgY29uc3QgbGVuID0gbGVuZ3RoIC0gcmVtb3ZlQ291bnRcblxuICAgIGZvciAobGV0IGkgPSBzdGFydElkeDsgaSA8IGxlbjsgKytpKVxuICAgICAgICBhcnJbaV0gPSBhcnJbaSArIHJlbW92ZUNvdW50XVxuXG4gICAgYXJyLmxlbmd0aCA9IGxlblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBFQ1MgICAgICBmcm9tICdlY3MnXG5pbXBvcnQgKiBhcyBQSVBFIGZyb20gJy4vc3lzdGVtL21haW5waXBlbGluZS5qcydcbmltcG9ydCAqIGFzIFAgZnJvbSAnLi9wcmVmYWIuanMnXG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4vc3RhdGUuanMnXG5cbmxldCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXG5cbmZ1bmN0aW9uIGdhbWVMb29wICgpIHtcbiAgICBjb25zdCBuZXdUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICBjb25zdCBmcmFtZVRpbWUgPSBuZXdUaW1lIC0gY3VycmVudFRpbWUgIC8vIGluIG1pbGxpc2Vjb25kcywgZS5nLiAxNi42NDM1NlxuICAgIGN1cnJlbnRUaW1lID0gbmV3VGltZVxuXG4gICAgLy8gcnVuIG9uVXBkYXRlIGZvciBhbGwgYWRkZWQgc3lzdGVtc1xuICAgIEVDUy51cGRhdGUoc3RhdGUud29ybGQsIGZyYW1lVGltZSlcblxuICAgIC8vIG5lY2Vzc2FyeSBjbGVhbnVwIHN0ZXAgYXQgdGhlIGVuZCBvZiBlYWNoIGZyYW1lIGxvb3BcbiAgICBFQ1MuY2xlYW51cChzdGF0ZS53b3JsZClcblxuICAgIHN0YXRlLmtleWJvYXJkLnVwZGF0ZSgpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufVxuXG5cbi8vLy8gSU5JVCBFVkVSWVRISU5HIE5PVyAvLy8vXG4vLyBpbml0IHN5c3RlbXMuXG5QSVBFLmluaXQoc3RhdGUud29ybGQpO1xuXG4vLyBpbml0IGVudGl0aWVzLlxuUC5hZGRfcGxheWVyKHN0YXRlLndvcmxkKTtcblAuYWRkX25wYyhzdGF0ZS53b3JsZCwgMTAwLCAxMDAsIFwiaGVsbG9cIiwgXCJucGMucG5nXCIpO1xuXG5QLmFkZF9hbGVydF9idXR0b24oc3RhdGUud29ybGQsIDIwMCwgMjAwLCBcInlvdSBhcmUgYWxlcnRlZCEhXCIpO1xuXG4vLyBmaW5hbGx5IHN0YXJ0IHRoZSBnYW1lIGxvb3BcbmdhbWVMb29wKClcbiJdLCJuYW1lcyI6WyJLZXlib2FyZCIsIl9jbGFzc0NhbGxDaGVjayIsImtleXMiLCJrZXlFdmVudHMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImJpbmQiLCJoYW5kbGVLZXlVcCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZXZlbnQiLCJkb3duIiwicHJlc3NlZCIsInJlbGVhc2VkIiwiaXNLZXlEb3duIiwiaXNLZXlQcmVzc2VkIiwiaXNLZXlSZWxlYXNlZCIsInVwZGF0ZSIsIklNQUdFX1BSRUxVREUiLCJpbWFnZV9wYXRoIiwicGF0aCIsIkVDUyIsIlQiLCJQQVRIIiwiYWRkX3BsYXllciIsIndvcmxkIiwiUExBWUVSIiwiY3JlYXRlRW50aXR5IiwiYWRkQ29tcG9uZW50VG9FbnRpdHkiLCJDb250cm9sbGVyIiwiZHgiLCJkeSIsIlNwcml0ZSIsIlJlY3QiLCJDb2xsaWRlciIsImFkZF9ucGMiLCJ4IiwieSIsInRleHQiLCJOUEMiLCJJbnRlcmFjdGFibGUiLCJhZGRfYnV0dG9uIiwiY2FsbGJhY2siLCJCVVRUT04iLCJCdXR0b24iLCJhZGRfYWxlcnRfYnV0dG9uIiwiYWxlcnQiLCJHYW1lU3RhdGUiLCJrZXlib2FyZCIsImNyZWF0ZVdvcmxkIiwic3RhdGUiLCJyZWN0X2NvbGxpc2lvbnMiLCJjb2xsaXNpb25QbHVnaW4iLCJhZGRTeXN0ZW0iLCJjb2xsaWRlclN5c3RlbSIsIm9uVXBkYXRlIiwiZHQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImdldEVudGl0aWVzIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJlbnRpdHkiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2xvb3AiLCJvdGhlciIsImNvbGxpZGVzIiwicmVjdCIsImNvbGxpZGVyIiwiY29sbGlzaW9ucyIsImluY2x1ZGVzIiwicHVzaCIsImZpbHRlciIsImVpZCIsIl9yZXQiLCJlcnIiLCJlIiwiZiIsIkRPTVBsdWdpbiIsIkRPTVN5c3RlbSIsInJlc2l6ZSIsImRvbSIsInN0eWxlIiwibGVmdCIsInRvcCIsIndpZHRoIiwidyIsImhlaWdodCIsImgiLCJkaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uY2F0Iiwic3ByaXRlIiwiZGl2aWQiLCJidXR0b24iLCJpbnRlcmFjdFBsdWdpbiIsImludGVyYWN0X3N5c3RlbSIsImludGVyYWN0YWJsZSIsImludGVyYWN0X3BlbmRpbmciLCJlbnRpdHlfaW50ZXJhY3RlZCIsIm1vdmVtZW50UGx1Z2luIiwibnBjUGx1Z2luIiwic3ByaXRlUGx1Z2luIiwiYnV0dG9uUGx1Z2luIiwiaW5pdCIsImNsYW1wIiwia2V5Ym9hcmRDb250cm9sU3lzdGVtIiwiYXBwbHlNb3ZlbWVudFN5c3RlbSIsIm1vdmVhYmxlIiwiY29udHJvbGxlciIsImZyaWN0aW9uIiwibnBjX3RhbGtfc3lzdGVtIiwiY29uc29sZSIsImxvZyIsInJlbmRlcmVyU3lzdGVtIiwiel9pbmRleF9zeXN0ZW0iLCJSRU5ERVJBQkxFX0ZJTFRFUiIsInJlc3VsdEVudHJpZXMiLCJjb3VudCIsImVudHJpZXMiLCJBcnJheSIsImNyZWF0ZUVsZW1lbnQiLCJwb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiaWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsInpJbmRleCIsIk1hdGgiLCJmbG9vciIsInRvU3RyaW5nIiwiYnV0dG9uUmVuZGVyU3lzdGVtIiwiYnV0dG9uX2ludGVyYWN0X3N5c3RlbSIsInY0IiwidXVpZHY0IiwiYSIsImIiLCJQSVBFIiwiUCIsImN1cnJlbnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnYW1lTG9vcCIsIm5ld1RpbWUiLCJmcmFtZVRpbWUiLCJjbGVhbnVwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==