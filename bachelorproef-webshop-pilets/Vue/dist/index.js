//@pilet v:2(parcelChunkpr_bachelorproefwebshopvue,{})
System.register([],function(_export){var _deps={};var require=function(n){var d=_deps[n];if(!d){var e=new Error("Cannot find module '"+n+"'");e.code='MODULE_NOT_FOUND';throw e} return d};return {
  setters:[],
  execute:function(){var module={exports:{}};var exports=module.exports;
!(function(global,parcelRequire){'use strict';var __bundleUrl__=function(){try{throw new Error}catch(t){const e=(""+t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(e)return e[0].replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}return"/"}();(function(){var d=document;var u=__bundleUrl__+"index.css";var e=d.createElement("link");e.setAttribute('data-origin', "bachelorproef-webshop-vue");e.type="text/css";e.rel="stylesheet";e.href=u+"?_="+Math.random();d.head.appendChild(e)})();// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = "function"==typeof global.parcelChunkpr_bachelorproefwebshopvue&&global.parcelChunkpr_bachelorproefwebshopvue;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = "function"==typeof global.parcelChunkpr_bachelorproefwebshopvue&&global.parcelChunkpr_bachelorproefwebshopvue;
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
})({"AddButton.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
var _default = {
  name: "add-button",
  props: ["addToCart", "params"]
};
exports.default = _default;
        var $c7f37d = exports.default || module.exports;
      
      if (typeof $c7f37d === 'function') {
        $c7f37d = $c7f37d.options;
      }
    
        /* template */
        Object.assign($c7f37d, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "btn-buy",
      on: {
        click: function ($event) {
          return _vm.addToCart(_vm.params)
        },
      },
    },
    [_vm._v("Buy " + _vm._s(_vm.item) + " here 1")]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"RemoveButton.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
var _default = {
  name: "remove-button",
  props: ["item"],
  methods: {
    removeFromCart: function removeFromCart() {
      this.$emit("removeFromCart", this.item);
    }
  }
};
exports.default = _default;
        var $9b6cf1 = exports.default || module.exports;
      
      if (typeof $9b6cf1 === 'function') {
        $9b6cf1 = $9b6cf1.options;
      }
    
        /* template */
        Object.assign($9b6cf1, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "btn-buy",
      on: {
        click: function ($event) {
          return _vm.removeFromCart(_vm.item)
        },
      },
    },
    [_vm._v("Remove")]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"Cart.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _RemoveButton = _interopRequireDefault(require("./RemoveButton.vue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'Cart',
  props: ['cart'],
  components: {
    RemoveButton: _RemoveButton.default
  },
  data: function data() {
    return {
      cartMock: this.cart,
      korting: 0.25,
      totaal: 0,
      subtotal: 0,
      kortingscode: "",
      kortingsCodeGebruikt: false,
      error: false,
      kortingsBedrag: 0
    };
  },
  methods: {
    removeFromCart: function removeFromCart(item) {
      this.$emit("removeFromCart", item);
    },
    applyDiscount: function applyDiscount() {
      this.totaal = this.subtotal - this.subtotal * this.korting;
    },
    valideerCode: function valideerCode() {
      if (this.kortingscode === "DAMON25") {
        this.kortingsCodeGebruikt = true;
        this.error = false;
        this.applyDiscount();
        this.cartKorting();
      } else {
        this.kortingsCodeGebruikt = false;
        this.error = true;
      }
    },
    cartKorting: function cartKorting() {
      var _this = this;
      this.kortingsBedrag = this.cart.reduce(function (accumulator, item) {
        return accumulator + item.price * item.quantity * _this.korting;
      }, 0);
    },
    cartSubtotal: function cartSubtotal() {
      this.subtotal = this.cart.reduce(function (accumulator, item) {
        return accumulator + item.price * item.quantity;
      }, 0);
    }
  },
  mounted: function mounted() {
    this.cartSubtotal();
  }
};
exports.default = _default;
        var $893e84 = exports.default || module.exports;
      
      if (typeof $893e84 === 'function') {
        $893e84 = $893e84.options;
      }
    
        /* template */
        Object.assign($893e84, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm.cart.length == 0
      ? _c("div", [
          _c("h3", [_vm._v("I'm empty.. Maybe you can add some products?")]),
        ])
      : _c("div", [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-md" }, [
              _c("h3", [
                _vm._v(_vm._s(_vm.cart.length) + " Item"),
                _vm.cart.length > 1 ? _c("span", [_vm._v("s")]) : _vm._e(),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("hr"),
        ]),
    _vm._v(" "),
    _vm.cart.length > 0
      ? _c(
          "div",
          [
            _vm._l(_vm.cart, function (item) {
              return item.quantity === 1
                ? _c("div", { key: item.product_id, staticClass: "rowgap" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("img", {
                          attrs: {
                            src: item.image,
                            alt: "image",
                            width: "300px",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c("b", [_vm._v("Name:")]),
                        _vm._v(" " + _vm._s(item.name) + "\n        "),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c("b", [_vm._v("€" + _vm._s(item.price))]),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("b", [_vm._v("Quantity:")]),
                        _vm._v(" " + _vm._s(item.quantity) + "\n        "),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("remove-button", {
                            attrs: { item: item },
                            on: { removeFromCart: _vm.removeFromCart },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ])
                : _vm._e()
            }),
            _vm._v(" "),
            _vm._l(_vm.cart, function (item, index) {
              return item.quantity > 1 &&
                index ===
                  _vm.cart.findIndex(function (i) {
                    return i.product_id === item.product_id
                  })
                ? _c("div", { key: item.product_id }, [
                    _c("div", { staticClass: "rowgap" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("img", {
                            attrs: {
                              src: item.image,
                              alt: "image",
                              width: "300px",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v("Naam:")]),
                          _vm._v(" " + _vm._s(item.name) + "\n          "),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("b", [_vm._v("€" + _vm._s(item.price))]),
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("b", [_vm._v("Aantal:")]),
                          _vm._v(" " + _vm._s(item.quantity) + "\n          "),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("remove-button", {
                              attrs: { item: item },
                              on: { removeFromCart: _vm.removeFromCart },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ])
                : _vm._e()
            }),
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "subtotal" }, [
        _c("div", [
          _c("span", [
            _c("b", [_vm._v("Subtotaal:")]),
            _vm._v(" €" + _vm._s(_vm.subtotal)),
          ]),
        ]),
        _vm._v(" "),
        _vm.kortingsCodeGebruikt
          ? _c("div", { staticClass: "korting" }, [
              _c("b", [_vm._v("Korting (25%):")]),
              _vm._v(" " + _vm._s(_vm.kortingsBedrag)),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v("GEBRUIK EEN KORTINGSCODE:\n      "),
        _c("input", {
          domProps: { value: _vm.kortingscode },
          on: {
            input: function (event) {
              return (_vm.kortingscode = event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _c("button", { on: { click: _vm.valideerCode } }, [
          _vm._v("gebruik code"),
        ]),
      ]),
      _vm._v(" "),
      _vm.error
        ? _c("div", { staticClass: "errorCode" }, [
            _vm._v("De kortingscode is niet geldig!"),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm._m(1),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md" }, [_c("h3", [_vm._v("Cart")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h4", [_vm._v("Items that you might like...")])])
  },
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./RemoveButton.vue":"RemoveButton.vue"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = setup;
var _AddButton = _interopRequireDefault(require("./AddButton.vue"));
var _RemoveButton = _interopRequireDefault(require("./RemoveButton.vue"));
var _Cart = _interopRequireDefault(require("./Cart.vue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function setup(app) {
  // app.setData('cart', [{product_id: 1,
  //   name: 'HP Pavilion - 15.6 inch',
  //   category: "Laptops",
  //   price: 999,
  //   description: 'Deze HP Pavilion 15-eg2025nb laptop is geschikt voor het typen van verslagen en het maken van presentaties.',
  //   image: 'https://media.s-bol.com/YXGXnLvwXyDn/W8P2lJ/1200x914.jpg'},
  //   {product_id: 2,
  //     name: 'HP Pavilion - 15.6 inch',
  //     category: "Laptops",
  //     price: 999,
  //     description: 'Deze HP Pavilion 15-eg2025nb laptop is geschikt voor het typen van verslagen en het maken van presentaties.',
  //     image: 'https://media.s-bol.com/YXGXnLvwXyDn/W8P2lJ/1200x914.jpg'}]);
  app.setData('cart', []);
  var addToCart = function addToCart(item) {
    var cart = app.getData('cart');
    // Check if item is already in cart
    var itemInCart = cart.find(function (cartItem) {
      return cartItem.name === item.name;
    });
    // If item is already in cart, increase quantity
    if (itemInCart) {
      itemInCart.quantity++;
      cart.push(itemInCart);
      return;
    } else {
      item.quantity = 1;
      cart.push(item);
    }
    app.setData('cart', cart);
  };
  addToCart({
    product_id: 1,
    name: 'HP Pavilion - 15.6 inch',
    category: "Laptops",
    price: 999,
    description: 'Deze HP Pavilion 15-eg2025nb laptop is geschikt voor het typen van verslagen en het maken van presentaties.',
    image: 'https://media.s-bol.com/YXGXnLvwXyDn/W8P2lJ/1200x914.jpg'
  });
  addToCart({
    product_id: 2,
    name: 'HP Pavilion - 15.6 inch',
    category: "Laptops",
    price: 999,
    description: 'Deze HP Pavilion 15-eg2025nb laptop is geschikt voor het typen van verslagen en het maken van presentaties.',
    image: 'https://media.s-bol.com/YXGXnLvwXyDn/W8P2lJ/1200x914.jpg'
  });
  var removeFromCart = function removeFromCart(item) {
    var cart = app.getData("cart");
    // find the item in the cart
    var index = cart.findIndex(function (cartItem) {
      return cartItem.product_id === item.product_id;
    });
    if (index !== -1) {
      // decrease the amount or remove the item from the cart
      if (cart[index].amount > 1) {
        cart[index].amount--;
      } else {
        cart.splice(index, 1);
      }
      app.setData("cart", cart);
    }
  };
  app.registerExtension('add-button', app.fromVue(_AddButton.default, {
    addToCart: addToCart
  }));
  app.registerExtension("remove-button", app.fromVue(_RemoveButton.default, {
    removeFromCart: removeFromCart
  }));
  app.registerPage("/cart", app.fromVue(_Cart.default, {
    cart: app.getData('cart')
  }));
}
},{"./AddButton.vue":"AddButton.vue","./RemoveButton.vue":"RemoveButton.vue","./Cart.vue":"Cart.vue"}]},{},["index.ts"], null);global.parcelChunkpr_bachelorproefwebshopvue=parcelRequire}(window,window.parcelChunkpr_bachelorproefwebshopvue));
_export(module.exports);
},
}});
//# sourceMappingURL=index.js.map