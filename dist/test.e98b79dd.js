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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*\u5148\u6765\u4E2A\u597D\u770B\u7684\u80CC\u666F\u8272\uFF01*/\n.kitty {\n  background: #ffc0cb;\n  min-height: 100vh;\n  position: relative;\n}\n/*\u5706\u5706\u7684\u8111\u888B\uFF01*/\n.head {\n  position: absolute;\n  border: 8px solid #000;\n  background-color: #fff;\n  top: 250px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 240px;\n  height: 183px;\n  border-radius: 160px;\n}\n.eye {\n  position: absolute;\n  left: 47%;\n  top: 88px;\n  width: 19px;\n  height: 24px;\n  background-color: #000;\n  border-radius: 18px;\n}\n\n.eye.left {\n  transform: translateX(-58px);\n}\n.eye.right {\n  transform: translateX(58px);\n}\n.nose {\n  position: absolute;\n  top: 115px;\n  left: 100px;\n  width: 28px;\n  height: 21px;\n  background-color: #ffff99;\n  border: 6px solid #000;\n  border-radius: 25px;\n}\n/*\u732B\u732B\u5F53\u7136\u8981\u6709\u80E1\u5B50\uFF01*/\n.leftwhiskers,\n.rightwhiskers {\n  background-color: #000;\n}\n/*\u4E24\u53EA\u53EF\u7231\u7684\u8033\u6735\uFF01*/\n.leftEar {\n  position: absolute;\n  top: -16px;\n  left: -3px;\n  width: 57px;\n  height: 61px;\n  border: 8px solid #000;\n  border-radius: 20px 37px 20px 44px;\n  transform: rotate(14deg);\n  background-color: #fff;\n}\n.leftEar span {\n  position: absolute;\n  top: 4px;\n  left: 14px;\n  background-color: #fff;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px 0 0 0;\n}\n.rightEar {\n  position: absolute;\n  top: -16px;\n  left: 160px;\n  width: 57px;\n  height: 61px;\n  background-color: #fff;\n  border: 8px solid #000;\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n  border-radius: 20px 37px 20px 44px;\n  transform: rotate(82deg);\n}\n/*\u7C89\u7C89\u7684\u8774\u8776\u7ED3\uFF01*/\n.bow .center {\n  position: absolute;\n  left: 148px;\n  width: 48px;\n  height: 51px;\n  background-color: #f9c7ef;\n  border: 6px solid #000;\n  border-radius: 30px;\n  z-index: 2;\n  transform: rotate(20deg);\n}\n.bow .left {\n  position: absolute;\n  top: -28px;\n  left: 105px;\n  width: 62px;\n  height: 78px;\n  background-color: #f9c7ef;\n  border: 8px solid #000;\n  border-radius: 50px 50px 55px 46px;\n  transform: rotate(19deg);\n}\n.bow .left span {\n  position: absolute;\n  top: 20px;\n  left: 22px;\n  width: 27px;\n  height: 27px;\n  border: 6px solid #000;\n  border-radius: 30px;\n}\n.bow .right {\n  position: absolute;\n  top: -1px;\n  left: 180px;\n  width: 59px;\n  height: 70px;\n  background-color: #f9c7ef;\n  border: 8px solid #000;\n  -moz-border-radius: 78px 48px 60px 63px;\n  -webkit-border-radius: 78px 48px 60px 63px;\n  border-radius: 78px 48px 60px 63px;\n  transform: rotate(22deg);\n}\n.bow .right span {\n  position: absolute;\n  top: 17px;\n  left: -3px;\n  width: 27px;\n  height: 27px;\n  border: 6px solid #000;\n  border-radius: 30px;\n}\n/*\u8774\u8776\u7ED3\u52A8\u8D77\u6765\uFF01*/\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(3deg);\n  }\n  50% {\n    transform: rotate(6deg);\n  }\n  75% {\n    transform: rotate(3deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.bow {\n  height: 100px;\n  transform-origin: 150px 50px;\n  animation: wave 1s infinite linear;\n}\n/*Hello Kitty\u9001\u7ED9\u4F60\uFF01*/\n";
var _default = string; //把不相关的内容导出再导入

exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
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
},{"./css.js":"css.js"}],"C:/Users/花城/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63142" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/花城/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map