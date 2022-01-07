// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*\u5148\u6765\u4E2A\u597D\u770B\u7684\u80CC\u666F\u8272\uFF01*/\n.kitty {\n  background: #ffc0cb;\n  min-height: 100vh;\n  position: relative;\n}\n/*\u5706\u5706\u7684\u8111\u888B\uFF01*/\n.head {\n  position: absolute;\n  border: 8px solid #000;\n  background-color: #fff;\n  top: 250px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 240px;\n  height: 183px;\n  border-radius: 160px;\n}\n.eye {\n  position: absolute;\n  left: 47%;\n  top: 88px;\n  width: 19px;\n  height: 24px;\n  background-color: #000;\n  border-radius: 18px;\n}\n\n.eye.left {\n  transform: translateX(-58px);\n}\n.eye.right {\n  transform: translateX(58px);\n}\n.nose {\n  position: absolute;\n  top: 115px;\n  left: 100px;\n  width: 28px;\n  height: 21px;\n  background-color: #ffff99;\n  border: 6px solid #000;\n  border-radius: 25px;\n}\n/*\u732B\u732B\u5F53\u7136\u8981\u6709\u80E1\u5B50\uFF01*/\n.leftwhiskers,\n.rightwhiskers {\n  background-color: #000;\n}\n/*\u4E24\u53EA\u53EF\u7231\u7684\u8033\u6735\uFF01*/\n.leftEar {\n  position: absolute;\n  top: -16px;\n  left: -3px;\n  width: 57px;\n  height: 61px;\n  border: 8px solid #000;\n  border-radius: 20px 37px 20px 44px;\n  transform: rotate(14deg);\n  background-color: #fff;\n}\n.leftEar span {\n  position: absolute;\n  top: 4px;\n  left: 14px;\n  background-color: #fff;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px 0 0 0;\n}\n.rightEar {\n  position: absolute;\n  top: -16px;\n  left: 160px;\n  width: 57px;\n  height: 61px;\n  background-color: #fff;\n  border: 8px solid #000;\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n  border-radius: 20px 37px 20px 44px;\n  transform: rotate(82deg);\n}\n/*\u7C89\u7C89\u7684\u8774\u8776\u7ED3\uFF01*/\n.bow .center {\n  position: absolute;\n  left: 148px;\n  width: 48px;\n  height: 51px;\n  background-color: #f9c7ef;\n  border: 6px solid #000;\n  border-radius: 30px;\n  z-index: 2;\n  transform: rotate(20deg);\n}\n.bow .left {\n  position: absolute;\n  top: -28px;\n  left: 105px;\n  width: 62px;\n  height: 78px;\n  background-color: #f9c7ef;\n  border: 8px solid #000;\n  border-radius: 50px 50px 55px 46px;\n  transform: rotate(19deg);\n}\n.bow .left span {\n  position: absolute;\n  top: 20px;\n  left: 22px;\n  width: 27px;\n  height: 27px;\n  border: 6px solid #000;\n  border-radius: 30px;\n}\n.bow .right {\n  position: absolute;\n  top: -1px;\n  left: 180px;\n  width: 59px;\n  height: 70px;\n  background-color: #f9c7ef;\n  border: 8px solid #000;\n  -moz-border-radius: 78px 48px 60px 63px;\n  -webkit-border-radius: 78px 48px 60px 63px;\n  border-radius: 78px 48px 60px 63px;\n  transform: rotate(22deg);\n}\n.bow .right span {\n  position: absolute;\n  top: 17px;\n  left: -3px;\n  width: 27px;\n  height: 27px;\n  border: 6px solid #000;\n  border-radius: 30px;\n}\n/*\u8774\u8776\u7ED3\u52A8\u8D77\u6765\uFF01*/\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(3deg);\n  }\n  50% {\n    transform: rotate(6deg);\n  }\n  75% {\n    transform: rotate(3deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.bow {\n  height: 100px;\n  transform-origin: 150px 50px;\n  animation: wave 1s infinite linear;\n}\n/*Hello Kitty\u9001\u7ED9\u4F60\uFF01*/\n";
var _default = string; //把不相关的内容导出再导入

exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//把内容导入
var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n); //写入文本

    player.ui.demo2.innerHTML = _css.default.substr(0, player.n); //写入html

    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        //如果key是player自身属性
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id); //大于字符串长度时停止继续

      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight; //滚动条拉到滚动最大的地方，即自动往下拉滚动条
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time); //重新设置id
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  //清除id，砸掉闹钟用来暂停
  slow: function slow() {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.e0f8f1ce.js.map