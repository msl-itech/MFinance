import {
  Fa as $e,
  rb as $i,
  f as _i,
  L as _n,
  B as _t,
  x as A,
  C as ae,
  a as Ae,
  Da as Ai,
  e as Ao,
  va as at,
  ka as be,
  Na as Bi,
  h as bi,
  N as bn,
  da as bt,
  g as Ce,
  v as Ci,
  ca as Cn,
  nb as Ct,
  $ as Di,
  eb as Dn,
  ga as e,
  n as Ei,
  Q as En,
  Ea as Et,
  I as et,
  t as fe,
  z as Fe,
  Ka as Fi,
  b as fi,
  w as fn,
  ma as Ge,
  pb as Gi,
  q as gn,
  fb as H,
  bb as Hi,
  c as hi,
  F as hn,
  o as ht,
  U as I,
  T as ie,
  m as Ie,
  Ga as Ii,
  pa as it,
  $a as ji,
  qb as Ke,
  na as ki,
  kb as kn,
  ha as l,
  aa as le,
  Qa as Li,
  Ca as lt,
  y as Me,
  A as Mi,
  ia as Mn,
  j as mn,
  ta as n,
  H as ne,
  oa as Ni,
  mb as Nn,
  d as No,
  P as nt,
  la as O,
  V as Oi,
  za as On,
  qa as ot,
  Y as pe,
  W as Pi,
  Aa as Pn,
  p as pn,
  lb as Qe,
  ab as qi,
  E as Re,
  Ma as Ri,
  sa as rt,
  u as Si,
  ba as Sn,
  cb as St,
  ra as st,
  fa as t,
  hb as T,
  G as te,
  X as Ti,
  Ba as Tn,
  J as tt,
  M as Ue,
  jb as Ui,
  K as Ve,
  db as Vi,
  l as vi,
  O as vn,
  ua as vt,
  D as w,
  Ia as We,
  ib as we,
  R as wi,
  ja as wn,
  i as Xe,
  r as xi,
  Z as xn,
  Ha as xt,
  k as ye,
  s as yi,
  _ as yn,
  Pa as yt,
  Oa as zi,
} from "./chunk-CTM7XNHE.js";
var Xi = No((ct, zn) => {
  "use strict";
  (function (a, o) {
    typeof ct == "object" && typeof zn == "object"
      ? (zn.exports = o())
      : typeof define == "function" && define.amd
      ? define([], o)
      : typeof ct == "object"
      ? (ct.AOS = o())
      : (a.AOS = o());
  })(ct, function () {
    return (function (a) {
      function o(s) {
        if (i[s]) return i[s].exports;
        var r = (i[s] = { exports: {}, id: s, loaded: !1 });
        return (
          a[s].call(r.exports, r, r.exports, o), (r.loaded = !0), r.exports
        );
      }
      var i = {};
      return (o.m = a), (o.c = i), (o.p = "dist/"), o(0);
    })([
      function (a, o, i) {
        "use strict";
        function s(M) {
          return M && M.__esModule ? M : { default: M };
        }
        var r =
            Object.assign ||
            function (M) {
              for (var X = 1; X < arguments.length; X++) {
                var de = arguments[X];
                for (var xe in de)
                  Object.prototype.hasOwnProperty.call(de, xe) &&
                    (M[xe] = de[xe]);
              }
              return M;
            },
          c = i(1),
          d = (s(c), i(6)),
          u = s(d),
          m = i(7),
          p = s(m),
          f = i(8),
          g = s(f),
          h = i(9),
          x = s(h),
          v = i(10),
          C = s(v),
          R = i(11),
          U = s(R),
          G = i(14),
          Q = s(G),
          F = [],
          ge = !1,
          D = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          L = function () {
            var M =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((M && (ge = !0), ge))
              return (F = (0, U.default)(F, D)), (0, C.default)(F, D.once), F;
          },
          W = function () {
            (F = (0, Q.default)()), L();
          },
          y = function () {
            F.forEach(function (M, X) {
              M.node.removeAttribute("data-aos"),
                M.node.removeAttribute("data-aos-easing"),
                M.node.removeAttribute("data-aos-duration"),
                M.node.removeAttribute("data-aos-delay");
            });
          },
          _ = function (M) {
            return (
              M === !0 ||
              (M === "mobile" && x.default.mobile()) ||
              (M === "phone" && x.default.phone()) ||
              (M === "tablet" && x.default.tablet()) ||
              (typeof M == "function" && M() === !0)
            );
          },
          N = function (M) {
            (D = r(D, M)), (F = (0, Q.default)());
            var X = document.all && !window.atob;
            return _(D.disable) || X
              ? y()
              : (D.disableMutationObserver ||
                  g.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (D.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", D.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", D.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", D.delay),
                D.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? L(!0)
                  : D.startEvent === "load"
                  ? window.addEventListener(D.startEvent, function () {
                      L(!0);
                    })
                  : document.addEventListener(D.startEvent, function () {
                      L(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, p.default)(L, D.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, p.default)(L, D.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, u.default)(function () {
                    (0, C.default)(F, D.once);
                  }, D.throttleDelay)
                ),
                D.disableMutationObserver || g.default.ready("[data-aos]", W),
                F);
          };
        a.exports = { init: N, refresh: L, refreshHard: W };
      },
      function (a, o) {},
      ,
      ,
      ,
      ,
      function (a, o) {
        (function (i) {
          "use strict";
          function s(_, N, M) {
            function X(z) {
              var me = q,
                ke = re;
              return (q = re = void 0), (ce = z), (ee = _.apply(ke, me));
            }
            function de(z) {
              return (ce = z), (Y = setTimeout(E, N)), J ? X(z) : ee;
            }
            function xe(z) {
              var me = z - B,
                ke = z - ce,
                gi = N - me;
              return ue ? W(gi, k - ke) : gi;
            }
            function b(z) {
              var me = z - B,
                ke = z - ce;
              return B === void 0 || me >= N || me < 0 || (ue && ke >= k);
            }
            function E() {
              var z = y();
              return b(z) ? S(z) : void (Y = setTimeout(E, xe(z)));
            }
            function S(z) {
              return (Y = void 0), j && q ? X(z) : ((q = re = void 0), ee);
            }
            function P() {
              Y !== void 0 && clearTimeout(Y),
                (ce = 0),
                (q = B = re = Y = void 0);
            }
            function $() {
              return Y === void 0 ? ee : S(y());
            }
            function K() {
              var z = y(),
                me = b(z);
              if (((q = arguments), (re = this), (B = z), me)) {
                if (Y === void 0) return de(B);
                if (ue) return (Y = setTimeout(E, N)), X(B);
              }
              return Y === void 0 && (Y = setTimeout(E, N)), ee;
            }
            var q,
              re,
              k,
              ee,
              Y,
              B,
              ce = 0,
              J = !1,
              ue = !1,
              j = !0;
            if (typeof _ != "function") throw new TypeError(f);
            return (
              (N = m(N) || 0),
              c(M) &&
                ((J = !!M.leading),
                (ue = "maxWait" in M),
                (k = ue ? L(m(M.maxWait) || 0, N) : k),
                (j = "trailing" in M ? !!M.trailing : j)),
              (K.cancel = P),
              (K.flush = $),
              K
            );
          }
          function r(_, N, M) {
            var X = !0,
              de = !0;
            if (typeof _ != "function") throw new TypeError(f);
            return (
              c(M) &&
                ((X = "leading" in M ? !!M.leading : X),
                (de = "trailing" in M ? !!M.trailing : de)),
              s(_, N, { leading: X, maxWait: N, trailing: de })
            );
          }
          function c(_) {
            var N = typeof _ > "u" ? "undefined" : p(_);
            return !!_ && (N == "object" || N == "function");
          }
          function d(_) {
            return !!_ && (typeof _ > "u" ? "undefined" : p(_)) == "object";
          }
          function u(_) {
            return (
              (typeof _ > "u" ? "undefined" : p(_)) == "symbol" ||
              (d(_) && D.call(_) == h)
            );
          }
          function m(_) {
            if (typeof _ == "number") return _;
            if (u(_)) return g;
            if (c(_)) {
              var N = typeof _.valueOf == "function" ? _.valueOf() : _;
              _ = c(N) ? N + "" : N;
            }
            if (typeof _ != "string") return _ === 0 ? _ : +_;
            _ = _.replace(x, "");
            var M = C.test(_);
            return M || R.test(_)
              ? U(_.slice(2), M ? 2 : 8)
              : v.test(_)
              ? g
              : +_;
          }
          var p =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (_) {
                    return typeof _;
                  }
                : function (_) {
                    return _ &&
                      typeof Symbol == "function" &&
                      _.constructor === Symbol &&
                      _ !== Symbol.prototype
                      ? "symbol"
                      : typeof _;
                  },
            f = "Expected a function",
            g = NaN,
            h = "[object Symbol]",
            x = /^\s+|\s+$/g,
            v = /^[-+]0x[0-9a-f]+$/i,
            C = /^0b[01]+$/i,
            R = /^0o[0-7]+$/i,
            U = parseInt,
            G =
              (typeof i > "u" ? "undefined" : p(i)) == "object" &&
              i &&
              i.Object === Object &&
              i,
            Q =
              (typeof self > "u" ? "undefined" : p(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            F = G || Q || Function("return this")(),
            ge = Object.prototype,
            D = ge.toString,
            L = Math.max,
            W = Math.min,
            y = function () {
              return F.Date.now();
            };
          a.exports = r;
        }).call(
          o,
          (function () {
            return this;
          })()
        );
      },
      function (a, o) {
        (function (i) {
          "use strict";
          function s(y, _, N) {
            function M(j) {
              var z = K,
                me = q;
              return (K = q = void 0), (B = j), (k = y.apply(me, z));
            }
            function X(j) {
              return (B = j), (ee = setTimeout(b, _)), ce ? M(j) : k;
            }
            function de(j) {
              var z = j - Y,
                me = j - B,
                ke = _ - z;
              return J ? L(ke, re - me) : ke;
            }
            function xe(j) {
              var z = j - Y,
                me = j - B;
              return Y === void 0 || z >= _ || z < 0 || (J && me >= re);
            }
            function b() {
              var j = W();
              return xe(j) ? E(j) : void (ee = setTimeout(b, de(j)));
            }
            function E(j) {
              return (ee = void 0), ue && K ? M(j) : ((K = q = void 0), k);
            }
            function S() {
              ee !== void 0 && clearTimeout(ee),
                (B = 0),
                (K = Y = q = ee = void 0);
            }
            function P() {
              return ee === void 0 ? k : E(W());
            }
            function $() {
              var j = W(),
                z = xe(j);
              if (((K = arguments), (q = this), (Y = j), z)) {
                if (ee === void 0) return X(Y);
                if (J) return (ee = setTimeout(b, _)), M(Y);
              }
              return ee === void 0 && (ee = setTimeout(b, _)), k;
            }
            var K,
              q,
              re,
              k,
              ee,
              Y,
              B = 0,
              ce = !1,
              J = !1,
              ue = !0;
            if (typeof y != "function") throw new TypeError(p);
            return (
              (_ = u(_) || 0),
              r(N) &&
                ((ce = !!N.leading),
                (J = "maxWait" in N),
                (re = J ? D(u(N.maxWait) || 0, _) : re),
                (ue = "trailing" in N ? !!N.trailing : ue)),
              ($.cancel = S),
              ($.flush = P),
              $
            );
          }
          function r(y) {
            var _ = typeof y > "u" ? "undefined" : m(y);
            return !!y && (_ == "object" || _ == "function");
          }
          function c(y) {
            return !!y && (typeof y > "u" ? "undefined" : m(y)) == "object";
          }
          function d(y) {
            return (
              (typeof y > "u" ? "undefined" : m(y)) == "symbol" ||
              (c(y) && ge.call(y) == g)
            );
          }
          function u(y) {
            if (typeof y == "number") return y;
            if (d(y)) return f;
            if (r(y)) {
              var _ = typeof y.valueOf == "function" ? y.valueOf() : y;
              y = r(_) ? _ + "" : _;
            }
            if (typeof y != "string") return y === 0 ? y : +y;
            y = y.replace(h, "");
            var N = v.test(y);
            return N || C.test(y)
              ? R(y.slice(2), N ? 2 : 8)
              : x.test(y)
              ? f
              : +y;
          }
          var m =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (y) {
                    return typeof y;
                  }
                : function (y) {
                    return y &&
                      typeof Symbol == "function" &&
                      y.constructor === Symbol &&
                      y !== Symbol.prototype
                      ? "symbol"
                      : typeof y;
                  },
            p = "Expected a function",
            f = NaN,
            g = "[object Symbol]",
            h = /^\s+|\s+$/g,
            x = /^[-+]0x[0-9a-f]+$/i,
            v = /^0b[01]+$/i,
            C = /^0o[0-7]+$/i,
            R = parseInt,
            U =
              (typeof i > "u" ? "undefined" : m(i)) == "object" &&
              i &&
              i.Object === Object &&
              i,
            G =
              (typeof self > "u" ? "undefined" : m(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            Q = U || G || Function("return this")(),
            F = Object.prototype,
            ge = F.toString,
            D = Math.max,
            L = Math.min,
            W = function () {
              return Q.Date.now();
            };
          a.exports = s;
        }).call(
          o,
          (function () {
            return this;
          })()
        );
      },
      function (a, o) {
        "use strict";
        function i(m) {
          var p = void 0,
            f = void 0,
            g = void 0;
          for (p = 0; p < m.length; p += 1)
            if (
              ((f = m[p]),
              (f.dataset && f.dataset.aos) || (g = f.children && i(f.children)))
            )
              return !0;
          return !1;
        }
        function s() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function r() {
          return !!s();
        }
        function c(m, p) {
          var f = window.document,
            g = s(),
            h = new g(d);
          (u = p),
            h.observe(f.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function d(m) {
          m &&
            m.forEach(function (p) {
              var f = Array.prototype.slice.call(p.addedNodes),
                g = Array.prototype.slice.call(p.removedNodes),
                h = f.concat(g);
              if (i(h)) return u();
            });
        }
        Object.defineProperty(o, "__esModule", { value: !0 });
        var u = function () {};
        o.default = { isSupported: r, ready: c };
      },
      function (a, o) {
        "use strict";
        function i(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        }
        function s() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = (function () {
            function f(g, h) {
              for (var x = 0; x < h.length; x++) {
                var v = h[x];
                (v.enumerable = v.enumerable || !1),
                  (v.configurable = !0),
                  "value" in v && (v.writable = !0),
                  Object.defineProperty(g, v.key, v);
              }
            }
            return function (g, h, x) {
              return h && f(g.prototype, h), x && f(g, x), g;
            };
          })(),
          c =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          d =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          u =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          m =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          p = (function () {
            function f() {
              i(this, f);
            }
            return (
              r(f, [
                {
                  key: "phone",
                  value: function () {
                    var g = s();
                    return !(!c.test(g) && !d.test(g.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var g = s();
                    return !(!u.test(g) && !m.test(g.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              f
            );
          })();
        o.default = new p();
      },
      function (a, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 });
        var i = function (r, c, d) {
            var u = r.node.getAttribute("data-aos-once");
            c > r.position
              ? r.node.classList.add("aos-animate")
              : typeof u < "u" &&
                (u === "false" || (!d && u !== "true")) &&
                r.node.classList.remove("aos-animate");
          },
          s = function (r, c) {
            var d = window.pageYOffset,
              u = window.innerHeight;
            r.forEach(function (m, p) {
              i(m, u + d, c);
            });
          };
        o.default = s;
      },
      function (a, o, i) {
        "use strict";
        function s(u) {
          return u && u.__esModule ? u : { default: u };
        }
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = i(12),
          c = s(r),
          d = function (u, m) {
            return (
              u.forEach(function (p, f) {
                p.node.classList.add("aos-init"),
                  (p.position = (0, c.default)(p.node, m.offset));
              }),
              u
            );
          };
        o.default = d;
      },
      function (a, o, i) {
        "use strict";
        function s(u) {
          return u && u.__esModule ? u : { default: u };
        }
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = i(13),
          c = s(r),
          d = function (u, m) {
            var p = 0,
              f = 0,
              g = window.innerHeight,
              h = {
                offset: u.getAttribute("data-aos-offset"),
                anchor: u.getAttribute("data-aos-anchor"),
                anchorPlacement: u.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (h.offset && !isNaN(h.offset) && (f = parseInt(h.offset)),
              h.anchor &&
                document.querySelectorAll(h.anchor) &&
                (u = document.querySelectorAll(h.anchor)[0]),
              (p = (0, c.default)(u).top),
              h.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                p += u.offsetHeight / 2;
                break;
              case "bottom-bottom":
                p += u.offsetHeight;
                break;
              case "top-center":
                p += g / 2;
                break;
              case "bottom-center":
                p += g / 2 + u.offsetHeight;
                break;
              case "center-center":
                p += g / 2 + u.offsetHeight / 2;
                break;
              case "top-top":
                p += g;
                break;
              case "bottom-top":
                p += u.offsetHeight + g;
                break;
              case "center-top":
                p += u.offsetHeight / 2 + g;
            }
            return h.anchorPlacement || h.offset || isNaN(m) || (f = m), p + f;
          };
        o.default = d;
      },
      function (a, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 });
        var i = function (s) {
          for (
            var r = 0, c = 0;
            s && !isNaN(s.offsetLeft) && !isNaN(s.offsetTop);

          )
            (r += s.offsetLeft - (s.tagName != "BODY" ? s.scrollLeft : 0)),
              (c += s.offsetTop - (s.tagName != "BODY" ? s.scrollTop : 0)),
              (s = s.offsetParent);
          return { top: c, left: r };
        };
        o.default = i;
      },
      function (a, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 });
        var i = function (s) {
          return (
            (s = s || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(s, function (r) {
              return { node: r };
            })
          );
        };
        o.default = i;
      },
    ]);
  });
});
var Mt = class a {
  static ɵfac = function (i) {
    return new (i || a)();
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-header-about"]],
    decls: 7,
    vars: 0,
    consts: [
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1"),
        n(4, "A propos"),
        e(),
        t(5, "p"),
        n(6, "Accueil > A propos"),
        e()()()());
    },
    styles: [
      '.header[_ngcontent-%COMP%]{background:url("./media/bg_about-AWPUCD7F.webp") no-repeat center center/cover;height:300px;position:relative;display:flex;align-items:center;justify-content:center}.header-overlay[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:flex-start;color:#fff}.container[_ngcontent-%COMP%]{margin-left:20px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:2.5em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;font-size:1em;opacity:.8}@media (max-width: 768px){.header[_ngcontent-%COMP%]{height:150px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 480px){.header[_ngcontent-%COMP%]{height:120px}.container[_ngcontent-%COMP%]{margin-left:10px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em}}',
    ],
  });
};
var wt = class a {
  constructor(o) {
    this.metaService = o;
  }
  ngOnInit() {
    this.metaService.setAboutPageMeta();
  }
  static ɵfac = function (i) {
    return new (i || a)(I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-about"]],
    decls: 177,
    vars: 0,
    consts: [
      [1, "about-page-about-sec", "sec-padding"],
      [1, "container"],
      [
        1,
        "row",
        "align-items-center",
        2,
        "display",
        "flex",
        "justify-content",
        "center",
      ],
      [1, "col-md-6"],
      [1, "about-page-img-all"],
      [1, "about-page-about-img1", "img-border", "img100"],
      ["src", "../../assets/img/image/about-page-img-1.webp", "alt", ""],
      [1, "space20"],
      [1, "row"],
      [1, "about-page-img-2", "img-border", "img100"],
      ["src", "../../assets/img/image/about-page-img-2.webp", "alt", ""],
      [1, "about-page-img-3", "img-border", "img100", "space-sm-30"],
      ["src", "../../assets/img/image/about-page-img-3.webp", "alt", ""],
      [1, "about-haddings"],
      [1, "hadding", "hadding-p", "space-sm-30"],
      [1, "text-red"],
      [
        2,
        "color",
        "white",
        "padding",
        "8px",
        "display",
        "flex",
        "align-items",
        "center",
      ],
      [1, "check-list-all", 2, "padding-top", "0px"],
      [1, "col-md-4"],
      [1, "chek-list"],
      ["src", "assets/img/icons/checkfill.png", "alt", ""],
      [1, "home2-btn"],
      ["href", "/contact"],
      [1, "fa-solid", "fa-arrow-right"],
      [1, "about-choose", "sec-padding"],
      [1, "row", "align-items-center"],
      [1, "hadding", "about-page-hadding", "hadding-p"],
      [1, "text-white"],
      [1, "font-red"],
      [1, "space30"],
      [1, "col-md-6", "space-sm-50"],
      [1, "about-choose-box"],
      [1, "about-choose-icon"],
      ["src", "assets/img/image/about-choose-icon-1.webp", "alt", ""],
      [1, "hadding", "hadding-p"],
      ["href", "#"],
      ["src", "assets/img/image/about-choose-icon-2.webp", "alt", ""],
      ["src", "assets/img/image/about-choose-icon-3.webp", "alt", ""],
      ["src", "assets/img/image/about-choose-icon-4.webp", "alt", ""],
      [1, "our-vision", "sec-padding"],
      [1, "col-md-6", "m-auto", "text-center"],
      [1, "haddingg"],
      [1, "font-red", "text-white"],
      [1, "space-30"],
      [1, "col-md-6", "col-lg-3", "text-center"],
      [1, "about-vision-box", "box-after"],
      [1, "about-vision-img"],
      ["src", "assets/img/image/about-vision-icon-1.webp", "alt", ""],
      [1, "space10"],
      ["src", "assets/img/image/about-vision-icon-2.webp", "alt", ""],
      ["src", "assets/img/image/about-vision-icon-3.webp", "alt", ""],
      ["src", "assets/img/image/about-vision-icon-4.webp", "alt", ""],
    ],
    template: function (i, s) {
      i & 1 &&
        (l(0, "app-header-about"),
        t(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(
          6,
          "div",
          5
        ),
        l(7, "img", 6),
        e(),
        l(8, "div", 7),
        t(9, "div", 8)(10, "div", 3)(11, "div", 9),
        l(12, "img", 10),
        e()(),
        t(13, "div", 3)(14, "div", 11),
        l(15, "img", 12),
        e()()()()(),
        t(16, "div", 3)(17, "div", 13)(18, "div", 14)(19, "p", 15)(
          20,
          "span",
          15
        ),
        n(21, "Profil"),
        e()(),
        t(22, "h1"),
        n(23, "Experts-comptables"),
        l(24, "br"),
        t(25, "span", 16),
        n(26, "agr\xE9\xE9s \xE0 Bruxelles"),
        e()(),
        t(27, "p"),
        n(
          28,
          "Bienvenue chez MFinances Expert Comptable, votre cabinet comptable d\xE9di\xE9 \xE0 la r\xE9ussite de votre entreprise. Nous offrons une gamme compl\xE8te de services comptables et financiers con\xE7us pour r\xE9pondre \xE0 tous vos besoins. Notre objectif est de :"
        ),
        e(),
        t(29, "div", 17)(30, "div", 8)(31, "div", 18)(32, "div", 19)(33, "p"),
        l(34, "img", 20),
        n(35, " Aider \xE0 la prise de d\xE9cision"),
        e()(),
        l(36, "div", 7),
        t(37, "div", 19)(38, "p"),
        l(39, "img", 20),
        n(40, " Anticiper l\u2019avenir \xE9conomique"),
        e()()(),
        t(41, "div", 3)(42, "div", 19)(43, "p"),
        l(44, "img", 20),
        n(45, " Mettre en place des leviers simples et efficaces"),
        e()(),
        l(46, "div", 7),
        t(47, "div", 19)(48, "p"),
        l(49, "img", 20),
        n(50, " Offrir des services d\u2019optimisation des performaces"),
        e()()()()(),
        t(51, "div", 21)(52, "a", 22),
        n(53, "Contactez-nous "),
        l(54, "i", 23),
        e()()()()()()()(),
        t(55, "div", 24)(56, "div", 1)(57, "div", 25)(58, "div", 3)(
          59,
          "div",
          26
        )(60, "p", 15)(61, "span", 15),
        n(62, "Pourquoi nous choisir?"),
        e()(),
        t(63, "h1", 27),
        n(64, "L'excellence comptable "),
        l(65, "br"),
        n(66, " pour votre "),
        t(67, "span", 28),
        n(68, " r\xE9ussite."),
        e()(),
        t(69, "p", 27),
        n(
          70,
          "Chez MFinances Expert Comptable nous vous apportons un soutien administratif pour pallier d'\xE9ventuelles omissions dans votre comptabilit\xE9, qui peuvent entra\xEEner la perte de la d\xE9ductibilit\xE9 de certaines d\xE9penses."
        ),
        e(),
        l(71, "div", 7),
        t(72, "p", 27),
        n(
          73,
          " Nous vous aidons \xE0 \xE9viter des d\xE9penses injustifi\xE9es, imput\xE9es au compte courant du gestionnaire, qui devraient autrement \xEAtre rembours\xE9es. Notre \xE9quipe est d\xE9termin\xE9e \xE0 offrir des solutions sur mesure qui favorisant la croissance et l'efficacit\xE9 de votre entreprise."
        ),
        e(),
        l(74, "div", 29),
        e()(),
        t(75, "div", 30)(76, "div", 31)(77, "div", 32),
        l(78, "img", 33),
        e(),
        t(79, "div", 34)(80, "h4")(81, "a", 35),
        n(82, "Assistance en gestion comptable"),
        e()(),
        t(83, "p"),
        n(
          84,
          "Correction des omissions pour pr\xE9server la d\xE9ductibilit\xE9."
        ),
        e()()(),
        t(85, "div", 31)(86, "div", 32),
        l(87, "img", 36),
        e(),
        t(88, "div", 34)(89, "h4")(90, "a", 35),
        n(91, "Pr\xE9vention des d\xE9penses injustifi\xE9es"),
        e()(),
        t(92, "p"),
        n(93, "\xC9viter les erreurs li\xE9es au compte courant."),
        e()()(),
        t(94, "div", 31)(95, "div", 32),
        l(96, "img", 37),
        e(),
        t(97, "div", 34)(98, "h4")(99, "a", 35),
        n(100, "Solutions personnalis\xE9es"),
        e()(),
        t(101, "p"),
        n(102, "Approches adapt\xE9es \xE0 vos besoins."),
        e()()(),
        t(103, "div", 31)(104, "div", 32),
        l(105, "img", 38),
        e(),
        t(106, "div", 34)(107, "h4")(108, "a", 35),
        n(109, "Soutien \xE0 la croissance"),
        e()(),
        t(110, "p"),
        n(111, "Optimisation pour d\xE9velopper votre activit\xE9."),
        e()()()()()()(),
        t(112, "div", 39)(113, "div", 1)(114, "div", 8)(115, "div", 40)(
          116,
          "div",
          41
        )(117, "p", 15)(118, "span", 15),
        n(119, "Notre Vision"),
        e()(),
        t(120, "h1"),
        n(
          121,
          "Allier Automatisation Intelligente et Expertise Humaine pour des D\xE9cisions "
        ),
        t(122, "span", 42),
        n(123, " Pertinentes et Durables "),
        e()()()(),
        l(124, "div", 43),
        t(125, "div", 8)(126, "div", 44)(127, "div", 45)(128, "div", 46),
        l(129, "img", 47),
        e(),
        l(130, "div", 7),
        t(131, "div", 34)(132, "h4")(133, "a", 35),
        n(134, "Un accompagnement strat\xE9gique "),
        l(135, "br"),
        n(136, " pour tous"),
        e()(),
        l(137, "div", 48),
        t(138, "p"),
        n(
          139,
          "Chaque entreprise, quelle que soit sa taille, m\xE9rite un soutien adapt\xE9 \xE0 ses ambitions. Nous vous aidons \xE0 b\xE2tir un avenir stable, prosp\xE8re et ma\xEEtris\xE9"
        ),
        e()()()(),
        t(140, "div", 44)(141, "div", 45)(142, "div", 46),
        l(143, "img", 49),
        e(),
        l(144, "div", 7),
        t(145, "div", 34)(146, "h4")(147, "a", 35),
        n(
          148,
          "Des d\xE9cisions \xE9clair\xE9es pour renforcer votre solidit\xE9"
        ),
        e()(),
        l(149, "div", 48),
        t(150, "p"),
        n(
          151,
          "Des outils accessibles et des analyses pr\xE9cises pour piloter votre entreprise efficacement. Chaque choix strat\xE9gique devient une opportunit\xE9 de croissance durable. "
        ),
        e()()()(),
        t(152, "div", 44)(153, "div", 45)(154, "div", 46),
        l(155, "img", 50),
        e(),
        l(156, "div", 7),
        t(157, "div", 34)(158, "h4")(159, "a", 35),
        n(160, "Automatisation intelligente et expertise humaine"),
        e()(),
        l(161, "div", 48),
        t(162, "p"),
        n(
          163,
          "Nous trouvons le juste \xE9quilibre entre automatisation et intervention humaine. Pour une gestion simplifi\xE9e et des analyses pertinentes, \xE0 forte valeur ajout\xE9e"
        ),
        e()()()(),
        t(164, "div", 44)(165, "div", 45)(166, "div", 46),
        l(167, "img", 51),
        e(),
        l(168, "div", 7),
        t(169, "div", 34)(170, "h4")(171, "a", 35),
        n(172, "Un partenaire engag\xE9 pour votre r\xE9ussite"),
        e()(),
        l(173, "div", 48),
        t(174, "p"),
        n(
          175,
          "Simplifier la complexit\xE9 et optimiser vos ressources sont nos priorit\xE9s. Nous vous aidons \xE0 innover, d\xE9velopper votre activit\xE9 et pr\xE9parer l\u2019avenir sereinement."
        ),
        e()()()()()()()(),
        l(176, "app-zone-contact"));
    },
    dependencies: [Ke, Mt],
    styles: [
      ".btn-red[_ngcontent-%COMP%]{background-color:#f34947}a[_ngcontent-%COMP%]{text-decoration:none}.about-choose[_ngcontent-%COMP%]{background-color:#25335b}.font-red[_ngcontent-%COMP%]{background-color:#f34947;border-radius:8px;padding:2px}.haddingg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0e1124;font-size:40px;font-weight:700;line-height:48px;padding-bottom:18px}.hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}",
    ],
  });
};
function Ro(a, o) {
  if (
    (a & 1 &&
      (t(0, "div", 11),
      l(1, "img", 12),
      t(2, "div", 13)(3, "h3"),
      n(4),
      e(),
      t(5, "p"),
      n(6),
      e(),
      t(7, "a", 14),
      n(8, "En savoir plus \u2192"),
      e()()()),
    a & 2)
  ) {
    let i = o.$implicit,
      s = o.index;
    le("ngClass", s % 2 === 0 ? "card-blue" : "card-red")(
      "routerLink",
      i.route
    ),
      ie(),
      le("src", i.image, nt),
      ie(3),
      vt(i.title),
      ie(2),
      vt(i.description),
      ie(),
      le("href", i.route, nt);
  }
}
var oe = class a {
  constructor(o) {
    this.router = o;
  }
  currentIndex = 0;
  filteredItems = [];
  currentRoute = "";
  items = [
    {
      image: "../../assets/img/webp/57.avif",
      title: "ASBL",
      description:
        "Les Associations Sans But Lucratif en Belgique sont des structures incontournables pour porter des projets sociaux, culturels, \xE9ducatifs ou environnementaux...",
      route: "/absl",
    },
    {
      image: "../../assets/img/webp/6.webp",
      title: "Ind\xE9pendant et Startup",
      description:
        "Devenir ind\xE9pendant, c\u2019est plus qu\u2019un simple changement de statut. C\u2019est une aventure excitante, un saut vers la libert\xE9 professionnelle ...",
      route: "/profil-independant",
    },
    {
      image: "../../assets/img/webp/patrimonial.webp",
      title: "Soci\xE9t\xE9 de Management Patrimoniale",
      description:
        "La Soci\xE9t\xE9 de Management Patrimoniale permet au dirigeant d\u2019entreprise de facturer ses prestations \xE0 sa soci\xE9t\xE9 d\u2019exploitation tout en optimisant ... ",
      route: "/societe-management-patrimoniale",
    },
    {
      image: "../../assets/img/webp/21.webp",
      title: "Personnel de sante",
      description:
        "M\xE9decins, dentistes, v\xE9t\xE9rinaires ou kin\xE9sith\xE9rapeutes, votre quotidien oscille entre la prise en charge des patients et la gestion de vos obligations comptables...",
      route: "/professionel-sante",
    },
    {
      image: "../../assets/img/webp/54.avif",
      title: "Societe de moyen",
      description:
        "Une soci\xE9t\xE9 de moyens  est une structure juridique con\xE7ue pour permettre \xE0 des professionnels, souvent issus des professions lib\xE9rales, de mutualiser leurs...",
      route: "/societe-moyen",
    },
    {
      image: "../../assets/img/webp/53.avif",
      title: "Societe d'exploitation",
      description:
        "Une soci\xE9t\xE9 d\u2019exploitation est le pilier de votre activit\xE9 professionnelle ou commerciale. Elle se concentre sur la cr\xE9ation de valeur \xE0 travers une...",
      route: "/societe-exploitation",
    },
    {
      image: "../../assets/img/webp/immobilier.webp",
      title: "Promoteur immobilier",
      description:
        "La promotion immobili\xE8re est une activit\xE9 complexe qui exige une gestion rigoureuse des finances, de la fiscalit\xE9, et des flux de tr\xE9sorerie...",
      route: "/promoteur-immobilier",
    },
    {
      image: "../../assets/img/webp/grande_entreprise.webp",
      title: "Grande Entreprise",
      description:
        "Les grandes entreprises \xE9voluent dans un environnement complexe o\xF9 une gestion rigoureuse des finances est essentielle pour garantir leur comp\xE9titivit\xE9...",
      route: "/grande-entreprise",
    },
    {
      image: "../../assets/img/webp/19.webp",
      title: "Commercant et Horeca",
      description:
        "En tant que commer\xE7ant ou acteur du secteur HORECA (h\xF4tellerie, restauration, caf\xE9s), vous jonglez quotidiennement avec de multiples responsabilit\xE9s...",
      route: "/commercant-horeca",
    },
  ];
  ngOnInit() {
    (this.currentRoute = this.router.url),
      (this.filteredItems = this.items.filter(
        (o) => o.route !== this.currentRoute
      ));
  }
  prevSlide() {
    this.currentIndex > 0 && this.currentIndex--;
  }
  nextSlide() {
    this.currentIndex < this.filteredItems.length - 1 && this.currentIndex++;
  }
  getTransform() {
    return `translateX(-${this.currentIndex * 260}px)`;
  }
  static ɵfac = function (i) {
    return new (i || a)(I(St));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-recommandation-profil"]],
    decls: 16,
    vars: 5,
    consts: [
      [1, "slider-container", "py-5"],
      [1, "row"],
      [1, "col-md-6", "m-auto", "text-center"],
      [1, "hadding", "hadding-p"],
      [1, "text-red"],
      [1, "slider"],
      ["class", "card", 3, "ngClass", "routerLink", 4, "ngFor", "ngForOf"],
      [1, "navigation-buttons"],
      [1, "nav-btn", 3, "click", "disabled"],
      [1, "fas", "fa-arrow-left"],
      [1, "fas", "fa-arrow-right"],
      [1, "card", 3, "ngClass", "routerLink"],
      ["alt", "image", 3, "src"],
      [1, "card-content"],
      [1, "learn-more", 3, "href"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4)(
          5,
          "span",
          4
        ),
        n(6, " Voir plus de profil"),
        e()(),
        t(7, "h1"),
        n(8, "Consulter nos autres profil"),
        e()()()(),
        t(9, "div", 5),
        pe(10, Ro, 9, 6, "div", 6),
        e(),
        t(11, "div", 7)(12, "button", 8),
        O("click", function () {
          return s.prevSlide();
        }),
        l(13, "i", 9),
        e(),
        t(14, "button", 8),
        O("click", function () {
          return s.nextSlide();
        }),
        l(15, "i", 10),
        e()()()),
        i & 2 &&
          (ie(9),
          Sn("transform", s.getTransform()),
          ie(),
          le("ngForOf", s.filteredItems),
          ie(2),
          le("disabled", s.currentIndex === 0),
          ie(2),
          le("disabled", s.currentIndex === s.filteredItems.length - 1));
    },
    dependencies: [Ii, xt, Vi],
    styles: [
      ".slider-container[_ngcontent-%COMP%]{max-width:1000px;margin:0 auto;text-align:center}.slider-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;color:#1a1a1a;text-transform:uppercase;letter-spacing:1px;margin-bottom:20px}.slider[_ngcontent-%COMP%]{display:flex;transition:transform .5s ease-in-out}.card[_ngcontent-%COMP%]{min-width:250px;max-width:250px;min-height:350px;margin:0 10px;border-radius:10px;overflow:hidden;box-shadow:4px 5px 1px #004865;background:#edf1f5;display:flex;flex-direction:column;align-items:center}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover}.card-content[_ngcontent-%COMP%]{padding:15px;text-align:left}.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin:0 0 10px;color:#1a1a1a}.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#666;margin:0 0 15px}.card-content[_ngcontent-%COMP%]   .learn-more[_ngcontent-%COMP%]{font-size:14px;color:#ff4c4c;text-decoration:none;font-weight:700}.card-content[_ngcontent-%COMP%]   .learn-more[_ngcontent-%COMP%]:hover{color:#e04343}.navigation-buttons[_ngcontent-%COMP%]{display:flex;gap:1rem;justify-content:center;align-items:center;margin-top:32px}.nav-btn[_ngcontent-%COMP%]{border:2px solid #25335b;background:none;border-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:background-color .3s,transform .3s}.nav-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#25335b;font-size:20px}.nav-btn[_ngcontent-%COMP%]:hover{background-color:#25335b1a;transform:scale(1.1)}.nav-btn[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.5}.nav-btn[_ngcontent-%COMP%]:disabled   i[_ngcontent-%COMP%]{color:#25335b80}.text-red[_ngcontent-%COMP%]{color:red;font-style:italic;margin-bottom:0}.card-blue[_ngcontent-%COMP%]{box-shadow:4px 5px 1px #004865;background-color:#edf1f5}.card-red[_ngcontent-%COMP%]{box-shadow:4px 5px 1px red;background-color:#edf1f5}",
    ],
  });
};
function Bo(a, o) {
  if (
    (a & 1 &&
      (t(0, "li")(1, "a", 11), n(2), t(3, "span"), l(4, "img", 12), e()()()),
    a & 2)
  ) {
    let i = o.$implicit;
    ie(), le("href", i.route, nt), ie(), at(" ", i.name, " ");
  }
}
function zo(a, o) {
  if (a & 1) {
    let i = be();
    t(0, "div", 13)(1, "a", 14),
      O("click", function () {
        te(i);
        let r = Ge();
        return ne(r.showAllCategories());
      }),
      n(2, " Voir plus -> "),
      e()();
  }
}
var se = class a {
  categories = [
    { name: "Independant et Startup", route: "/profil-independant" },
    { name: "ASBL", route: "/absl" },
    {
      name: "Soci\xE9t\xE9s d\u2019exploitation commerciale ou civile",
      route: "/societe-exploitation",
    },
    {
      name: "Soci\xE9t\xE9s de management patrimoniale",
      route: "/societe-management-patrimoniale",
    },
    { name: "Soci\xE9t\xE9s de moyens", route: "/societe-moyen" },
    { name: "Commercant & Horeca", route: "/commercant-horeca" },
    { name: "Professionel de sant\xE9", route: "/professionel-sante" },
    { name: "Grande Entreprise", route: "/grande-entreprise" },
    { name: "Promoteur Immobilier", route: "/promoteur-immobilier" },
  ];
  maxVisibleCategories = 9;
  showAllCategories() {
    this.maxVisibleCategories = this.categories.length;
  }
  static ɵfac = function (i) {
    return new (i || a)();
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-sidebar"]],
    decls: 21,
    vars: 2,
    consts: [
      [1, "sidebar-widget"],
      [1, "widget"],
      [1, "widget-category", "list-unstyled", "d-flex", "flex-column", "gap-2"],
      [4, "ngFor", "ngForOf"],
      ["class", "mt-3", 4, "ngIf"],
      [1, "widget", "contact-widget"],
      [1, "contact-info", "d-flex", "gap-3", "flex-column"],
      [1, "fas", "fa-map-marker-alt"],
      [1, "fas", "fa-phone-alt"],
      [1, "fas", "fa-envelope"],
      ["href", "mailto:info@mfinances.be"],
      ["hrefActive", "active", 3, "href"],
      ["src", "assets/img/icon/arrow_up.svg", "alt", ""],
      [1, "mt-3"],
      [1, "text-danger", 2, "cursor", "pointer", 3, "click"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "div", 0)(1, "div", 1)(2, "h2"),
        n(3, "Secteur d'activit\xE9"),
        e(),
        t(4, "ul", 2),
        pe(5, Bo, 5, 2, "li", 3),
        e(),
        pe(6, zo, 3, 0, "div", 4),
        e(),
        t(7, "div", 5)(8, "h2"),
        n(9, "Contact"),
        e(),
        t(10, "div", 6)(11, "p"),
        l(12, "i", 7),
        n(13, " 20 Rue de la Magnanerie, 1180 Uccle"),
        e(),
        t(14, "p"),
        l(15, "i", 8),
        n(16, " +32 2 883 86 86"),
        e(),
        t(17, "p"),
        l(18, "i", 9),
        t(19, "a", 10),
        n(20, " info@mfinances.be"),
        e()()()()()),
        i & 2 &&
          (ie(5),
          le("ngForOf", s.categories.slice(0, s.maxVisibleCategories)),
          ie(),
          le("ngIf", s.maxVisibleCategories < s.categories.length));
    },
    dependencies: [xt, We],
    styles: [
      '.header[_ngcontent-%COMP%]{background:url("./media/bg_about-AWPUCD7F.webp") no-repeat center center/cover;height:300px;position:relative;display:flex;align-items:center;justify-content:center}.header-overlay[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;color:#fff}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;text-align:left}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:2.5em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;font-size:1em;opacity:.8}@media (max-width: 768px){.header[_ngcontent-%COMP%]{height:150px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 480px){.header[_ngcontent-%COMP%]{height:120px}.container[_ngcontent-%COMP%]{margin-left:10px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em}}.service-single[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;padding:60px 20px;box-sizing:border-box;width:100%}.sidebar-widget[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]{background-color:#edf3f5;padding:30px 40px;border-radius:20px;margin-bottom:50px}.sidebar-widget[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;color:#0f172a;margin-bottom:25px}.sidebar-widget[_ngcontent-%COMP%]   .widget-category[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-size:18px;color:#787b84;background-color:#fff;padding:17px 20px;border-radius:10px;transition:background-color .3s,color .3s}.sidebar-widget[_ngcontent-%COMP%]   .widget-category[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar-widget[_ngcontent-%COMP%]   .widget-category[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#f34947;color:#fff}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:20px}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#fff;display:block;text-align:center;padding:20px 10px;border-radius:10px;transition:box-shadow .3s}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{box-shadow:0 10px 20px #0000001a}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   .xb-item--icon[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;align-items:center;justify-content:center;background-color:#f34947;margin:0 auto 15px;border-radius:50%}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   .xb-item--title[_ngcontent-%COMP%]{font-size:16px;line-height:22px;margin-bottom:15px}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   .xb-item--size[_ngcontent-%COMP%]{color:#787b84;font-size:14px;border-top:1px solid #EDF3F5;padding-top:4px}.widget-banner[_ngcontent-%COMP%]{padding:50px 40px;color:#fff}.widget-banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:28px;line-height:40px;margin-bottom:40px}.single-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;margin-bottom:25px;font-size:32px}.single-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:24px;margin-bottom:30px}.single-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;line-height:32px;color:#020203;margin-bottom:30px}.single-content__feature[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -15px 50px}.single-content-feature[_ngcontent-%COMP%]{width:50%;padding:0 15px;box-sizing:border-box}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #EDF3F5;padding:30px 25px;border-radius:10px;display:flex;align-items:center;margin-bottom:30px;transition:box-shadow .3s;position:relative}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;left:0;width:4px;height:47px;background-color:#f34947;transform:translateY(-50%)}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner.color-2[_ngcontent-%COMP%]:before{background-color:#1496f8}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner.color-3[_ngcontent-%COMP%]:before{background-color:#0c9}single-content-feature[_ngcontent-%COMP%]   .xb-item--inner.color-4[_ngcontent-%COMP%]:before{background-color:#ffbd0f}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner[_ngcontent-%COMP%]:hover{box-shadow:0 21px 32px #cedce33b}.single-content-feature[_ngcontent-%COMP%]   .xb-item--icon[_ngcontent-%COMP%]{width:81px;height:47px;border-radius:50%;background-color:#fe6c3f1a;display:flex;align-items:center;justify-content:center;margin-right:15px}.single-content-feature[_ngcontent-%COMP%]   .xb-item--title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin:0}.single-content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:20px;align-items:center;margin-bottom:17px}.single-content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px}@media (max-width: 767px){.single-content-feature[_ngcontent-%COMP%]{width:100%;padding:0}}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}p[_ngcontent-%COMP%]{color:#020203}.single-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.service[_ngcontent-%COMP%]{background-color:#25335b}.rectangle-red[_ngcontent-%COMP%]{background-color:#f33;border-radius:8px;padding:6px}.hadding[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#0e1124;font-size:36px;font-weight:700;line-height:48px;padding-bottom:18px}a[_ngcontent-%COMP%]{text-decoration:none}.service-faq[_ngcontent-%COMP%]{background-color:#25335b}.contact-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f33}.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0e1124}.defis[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px;color:#020203!important}.sticky-container[_ngcontent-%COMP%]{position:relative}.sliding-image[_ngcontent-%COMP%]{position:sticky;top:10px}',
    ],
  });
};
var Lo = ["serviceSection"],
  jo = ["serviceImage"],
  Ot = class a {
    constructor(o) {
      this.metaService = o;
    }
    serviceSection;
    serviceImage;
    scrollSubscription;
    sectionTop = 0;
    sectionHeight = 0;
    imageHeight = 0;
    maxTranslateY = 0;
    ngOnInit() {
      this.metaService.setAbslPageMeta();
    }
    scrollToSection(o) {
      let i = document.getElementById(o);
      i && i.scrollIntoView({ behavior: "smooth" });
    }
    ngAfterViewInit() {
      this.calculateDimensions(),
        window.addEventListener("resize", this.calculateDimensions.bind(this)),
        (this.scrollSubscription = ye(window, "scroll")
          .pipe(Ci(10))
          .subscribe(() => this.onScroll()));
    }
    ngOnDestroy() {
      this.scrollSubscription && this.scrollSubscription.unsubscribe(),
        window.removeEventListener(
          "resize",
          this.calculateDimensions.bind(this)
        );
    }
    calculateDimensions() {
      let o = this.serviceSection.nativeElement.getBoundingClientRect();
      (this.sectionTop = window.pageYOffset + o.top),
        (this.sectionHeight = this.serviceSection.nativeElement.offsetHeight);
      let i = this.serviceImage.nativeElement.getBoundingClientRect();
      (this.imageHeight = this.serviceImage.nativeElement.offsetHeight),
        (this.maxTranslateY = this.sectionHeight - this.imageHeight),
        this.maxTranslateY < 0 && (this.maxTranslateY = 0);
    }
    onScroll() {
      let o = window.pageYOffset,
        i = this.sectionTop,
        s = this.sectionTop + this.sectionHeight;
      if (o >= i && o <= s) {
        let c = ((o - i) / this.sectionHeight) * this.maxTranslateY;
        this.serviceImage.nativeElement.style.transform = `translateY(${c}px)`;
      } else
        o < i
          ? (this.serviceImage.nativeElement.style.transform =
              "translateY(0px)")
          : o > s &&
            (this.serviceImage.nativeElement.style.transform = `translateY(${this.maxTranslateY}px)`);
    }
    static ɵfac = function (i) {
      return new (i || a)(I(H));
    };
    static ɵcmp = w({
      type: a,
      selectors: [["app-absl"]],
      viewQuery: function (i, s) {
        if ((i & 1 && (it(Lo, 5), it(jo, 5)), i & 2)) {
          let r;
          ot((r = st())) && (s.serviceSection = r.first),
            ot((r = st())) && (s.serviceImage = r.first);
        }
      },
      decls: 296,
      vars: 0,
      consts: [
        ["serviceSection", ""],
        [1, "header"],
        [1, "header-overlay"],
        [1, "container"],
        [1, "text-white"],
        [1, "service-single", "pt-120", "pb-130"],
        [1, "row"],
        [1, "col-lg-4"],
        [1, "col-lg-8"],
        [1, "single-content"],
        [1, "button-container"],
        [1, "home2-btn", "mb-4"],
        [1, "btn-red", 3, "click"],
        [1, "fa-solid", "fa-arrow-right"],
        [1, "single-img", "mt-35", "mb-4", "custom-single"],
        ["src", "../../assets/img/webp/58.avif", "alt", "", 1, "rounded-4"],
        [1, "defis", "row", "align-items-center", "mt-10"],
        [1, "col-md-4"],
        [
          "src",
          "../../assets/img/webp/asbl_mini.webp",
          "alt",
          "D\xE9fis ASBL",
          1,
          "img-fluid",
          2,
          "border-radius",
          "16",
        ],
        [1, "col-md-8", "mt-30"],
        [1, "single-content-list", "list-unstyled", "pl-25"],
        [
          1,
          "fa",
          "fa-star",
          2,
          "font-size",
          "14px",
          "color",
          "#FF3333",
          "margin-right",
          "6px",
        ],
        [1, "bg-custom--primary"],
        [1, "works", "sec-padding"],
        [1, "row", "align-items-center"],
        [1, "col-md-12", "col-lg-6"],
        [1, "how-in-work-sec"],
        [
          "data-aos",
          "fade-right",
          "data-aos-duration",
          "800",
          1,
          "hadding",
          "hadding-p",
        ],
        [1, "rectangle-red"],
        [1, "space20"],
        [1, "works-items"],
        [
          "data-aos",
          "fade-right",
          "data-aos-duration",
          "1000",
          1,
          "work-item",
          "d-flex",
          "align-items-baseline",
        ],
        [1, "me-3"],
        [1, "work-icon", "img-border"],
        [
          "src",
          "../../assets/img/image/profil/works-icon-1.png",
          "alt",
          "",
          1,
          "img-fluid",
        ],
        [1, "hadding", "hadding-p"],
        [
          "data-aos",
          "fade-right",
          "data-aos-duration",
          "1200",
          1,
          "work-item",
          "d-flex",
          "align-items-baseline",
        ],
        [1, "work-icon"],
        [
          "src",
          "../../assets/img/image/profil/works-icon-2.png",
          "alt",
          "",
          1,
          "img-fluid",
        ],
        [
          "data-aos",
          "fade-right",
          "data-aos-duration",
          "1400",
          1,
          "work-item",
          "d-flex",
          "align-items-baseline",
        ],
        [
          "src",
          "../../assets/img/image/profil/works-icon-3.png",
          "alt",
          "",
          1,
          "img-fluid",
        ],
        [
          "src",
          "../../assets/img/image/profil/about-vision-icon-2.png",
          "alt",
          "",
          1,
          "img-fluid",
        ],
        [
          "data-aos",
          "flip-right",
          "data-aos-duration",
          "1000",
          1,
          "col-md-12",
          "col-lg-6",
        ],
        [1, "works-img-gallery", "space-sm-50", "img-border"],
        [1, "row", "g-3"],
        [1, "col-12", "mb-3"],
        [
          "src",
          "../../assets/img/webp/56.avif",
          "alt",
          "Image principale des services ASBL",
          1,
          "img-fluid",
          "w-100",
          "main-image",
        ],
        [1, "col-12"],
        [
          "src",
          "../../assets/img/webp/5.webp",
          "alt",
          "Image secondaire 1",
          1,
          "img-fluid",
          "w-100",
          "secondary-image",
        ],
        [
          "src",
          "../../assets/img/webp/4.webp",
          "alt",
          "Image secondaire 2",
          1,
          "img-fluid",
          "w-100",
          "secondary-image",
        ],
        ["id", "targetSection", 1, "about", "sec-padding"],
        ["data-aos", "fade-right", "data-aos-duration", "800", 1, "col-md-6"],
        [1, "about-img", "img-border"],
        ["src", "../../assets/img/webp/8.webp", "alt", ""],
        [
          "data-aos",
          "fade-left",
          "data-aos-duration",
          "800",
          1,
          "col-md-6",
          "space-sm-30",
        ],
        [1, "about-haddings"],
        [1, "text-red"],
        [1, "check-list-all", 2, "padding", "1px 0 !important"],
        [1, "chek-list"],
        ["src", "../../assets/img/icons/checkfill.png", "alt", ""],
        [1, "home2-btn", "mt-4"],
        ["href", "/contact"],
        [1, "service-faq", "sec-padding"],
        [1, "col-md-6", "m-auto", "text-center"],
        [1, "hadding"],
        [1, "space40"],
        [1, "col-md-6"],
        [1, "service-details-img", "img-border"],
        ["src", "../../assets/img/webp/57.avif", "alt", ""],
        [1, "hadding", "hadding-p", "space-sm-30"],
        ["id", "accordionExample", 1, "accordion"],
        [1, "accordion-item"],
        ["id", "headingOne", 1, "accordion-header", "active-header"],
        [
          "type",
          "button",
          "data-bs-toggle",
          "collapse",
          "data-bs-target",
          "#collapseOne",
          "aria-expanded",
          "true",
          "aria-controls",
          "collapseOne",
          1,
          "accordion-button",
          "accordion-button-active",
        ],
        [
          "id",
          "collapseOne",
          "aria-labelledby",
          "headingOne",
          "data-bs-parent",
          "#accordionExample",
          1,
          "accordion-collapse",
          "collapse",
          "show",
        ],
        [1, "accordion-body"],
        ["id", "headingTwo", 1, "accordion-header"],
        [
          "type",
          "button",
          "data-bs-toggle",
          "collapse",
          "data-bs-target",
          "#collapseTwo",
          "aria-expanded",
          "false",
          "aria-controls",
          "collapseTwo",
          1,
          "accordion-button",
          "collapsed",
        ],
        [
          "id",
          "collapseTwo",
          "aria-labelledby",
          "headingTwo",
          "data-bs-parent",
          "#accordionExample",
          1,
          "accordion-collapse",
          "collapse",
        ],
        ["id", "headingThree", 1, "accordion-header"],
        [
          "type",
          "button",
          "data-bs-toggle",
          "collapse",
          "data-bs-target",
          "#collapseThree",
          "aria-expanded",
          "false",
          "aria-controls",
          "collapseThree",
          1,
          "accordion-button",
          "collapsed",
        ],
        [
          "id",
          "collapseThree",
          "aria-labelledby",
          "headingThree",
          "data-bs-parent",
          "#accordionExample",
          1,
          "accordion-collapse",
          "collapse",
        ],
        [1, "container", "my-5"],
        [1, "rounded-4", "bg-custom--primary", "text-white", "px-4"],
        [
          "data-aos",
          "fade-left",
          "data-aos-delay",
          "200",
          1,
          "col-md-6",
          "d-none",
          "d-md-flex",
          "justify-content-center",
          "align-items-end",
        ],
        [
          "src",
          "../../assets/img/image/profil/h9_footer_banner_img 1 1.webp",
          "alt",
          "Personne souriante",
          1,
          "img-fluid",
          "custom-image-size",
          2,
          "z-index",
          "2",
          "position",
          "relative",
        ],
        [
          "data-aos",
          "fade-right",
          "data-aos-delay",
          "400",
          1,
          "col-12",
          "col-md-6",
          "d-flex",
          "flex-column",
          "justify-content-center",
          "align-items-center",
          "align-items-md-start",
          "text-center",
          "text-md-start",
          "mt-4",
          "mt-md-0",
        ],
        [1, "fw-bold", "mb-4"],
        [1, "bg-danger", "text-white", "px-2", "py-1", "rounded-2"],
        ["data-aos", "fade-up", "data-aos-delay", "600", 1, "mb-4"],
        [
          "href",
          "#",
          "data-aos",
          "zoom-in",
          "data-aos-delay",
          "800",
          1,
          "btn",
          "btn-danger",
          "btn-sm",
          "px-3",
          "py-2",
        ],
        [1, "fas", "fa-arrow-right"],
      ],
      template: function (i, s) {
        if (i & 1) {
          let r = be();
          t(0, "header", 1)(1, "div", 2)(2, "div", 3)(3, "h1"),
            n(4, "ASBL"),
            e(),
            t(5, "p", 4),
            n(6, "Accueil > ASBL"),
            e()()()(),
            t(7, "section", 5)(8, "div", 3)(9, "div", 6)(10, "div", 7),
            l(11, "app-sidebar"),
            e(),
            t(12, "div", 8)(13, "div", 9)(14, "h3"),
            n(15, "Tout savoir sur L\u2019ASBL"),
            e(),
            t(16, "h4"),
            n(
              17,
              "Accompagnement pour les ASBL : Donnez vie \xE0 votre mission sociale"
            ),
            e(),
            t(18, "p"),
            n(
              19,
              " Les Associations Sans But Lucratif (ASBL) en Belgique sont des structures incontournables pour porter des projets sociaux, culturels, \xE9ducatifs ou environnementaux. Si leur fonctionnement repose sur des valeurs d\u2019entraide et d\u2019engagement, leur gestion implique \xE9galement des d\xE9fis administratifs, financiers et organisationnels. "
            ),
            e(),
            t(20, "p"),
            n(
              21,
              " Chez MFINANCES, nous comprenons les r\xE9alit\xE9s des ASBL belges et offrons un accompagnement sur mesure pour simplifier votre gestion et maximiser l\u2019impact de votre mission. "
            ),
            e(),
            t(22, "div", 10)(23, "div", 11)(24, "button", 12),
            O("click", function () {
              return te(r), ne(s.scrollToSection("targetSection"));
            }),
            n(25, "D\xE9couvrez ce que vous gagnerez avec nous "),
            l(26, "i", 13),
            e()()(),
            t(27, "div", 14),
            l(28, "img", 15),
            e()(),
            t(29, "h3"),
            n(30, "Les d\xE9fis majeurs auxquels font face les ASBL"),
            e(),
            t(31, "div", 16)(32, "div", 17),
            l(33, "img", 18),
            e(),
            t(34, "div", 19)(35, "ul", 20)(36, "li"),
            l(37, "i", 21),
            t(38, "strong"),
            n(39, "Respect des obligations l\xE9gales :"),
            e(),
            l(40, "br"),
            n(
              41,
              " La gestion administrative peut rapidement devenir chronophage, entre les assembl\xE9es g\xE9n\xE9rales, la r\xE9daction des rapports annuels et le d\xE9p\xF4t des comptes aupr\xE8s des autorit\xE9s comp\xE9tentes. "
            ),
            e(),
            t(42, "li"),
            l(43, "i", 21),
            t(44, "strong"),
            n(45, "Obtention et gestion des subsides :"),
            e(),
            l(46, "br"),
            n(
              47,
              " Obtenir et g\xE9rer des subsides requiert une justification rigoureuse des co\xFBts et le respect des crit\xE8res stricts impos\xE9s par les financeurs. "
            ),
            e(),
            t(48, "li"),
            l(49, "i", 21),
            t(50, "strong"),
            n(51, "Suivi des activit\xE9s et des ressources :"),
            e(),
            l(52, "br"),
            n(
              53,
              " Encadrer b\xE9n\xE9voles et employ\xE9s, r\xE9partir efficacement les frais entre projets et s\xE9curiser la tr\xE9sorerie sont des d\xE9fis majeurs pour garantir la viabilit\xE9 \xE0 long terme. "
            ),
            e()()()()()()()(),
            t(54, "section", 22, 0)(56, "div", 23)(57, "div", 3)(58, "div", 24)(
              59,
              "div",
              25
            )(60, "div", 26)(
              61,
              "div",
              27
            )(62, "h1"),
            n(63, "Nos services pour "),
            l(64, "br"),
            t(65, "span", 28),
            n(66, " les ASBL"),
            e()()(),
            l(67, "div", 29),
            t(68, "div", 30)(69, "div", 31)(70, "div", 32)(71, "div", 33),
            l(72, "img", 34),
            e()(),
            t(73, "div", 35)(74, "h2"),
            n(75, "Cr\xE9ation et gestion administrative"),
            e(),
            t(76, "ul")(77, "li")(78, "strong"),
            n(79, "R\xE9daction et d\xE9p\xF4t des statuts."),
            e()(),
            t(80, "li")(81, "strong"),
            n(82, "Assistance pour l\u2019enregistrement au Moniteur belge."),
            e()(),
            t(83, "li")(84, "strong"),
            n(
              85,
              "Automatisation ou externalisation des t\xE2ches administratives (sur devis)."
            ),
            e()(),
            t(86, "li")(87, "strong"),
            n(88, "Suivi des obligations l\xE9gales :"),
            e(),
            n(
              89,
              " Assembl\xE9es g\xE9n\xE9rales, rapports annuels, modifications statutaires."
            ),
            e()()()(),
            t(90, "div", 36)(91, "div", 32)(92, "div", 37),
            l(93, "img", 38),
            e()(),
            t(94, "div", 35)(95, "h2"),
            n(96, "Gestion comptable et fiscale"),
            e(),
            t(97, "ul")(98, "li")(99, "strong"),
            n(100, "Comptabilit\xE9 g\xE9n\xE9rale :"),
            e(),
            n(101, " Consultez nos tarifs comptables."),
            e(),
            t(102, "li")(103, "strong"),
            n(104, "Comptabilit\xE9 analytique :"),
            e(),
            n(
              105,
              " Suivi des co\xFBts par projet et r\xE9partition des frais g\xE9n\xE9raux."
            ),
            e(),
            t(106, "li")(107, "strong"),
            n(108, "D\xE9clarations fiscales et TVA, si applicable."),
            e()(),
            t(109, "li")(110, "strong"),
            n(111, "Pr\xE9paration et d\xE9p\xF4t des comptes annuels"),
            e(),
            n(112, " aupr\xE8s de la Banque Nationale de Belgique."),
            e()()()(),
            t(113, "div", 39)(114, "div", 32)(115, "div", 37),
            l(116, "img", 40),
            e()(),
            t(117, "div", 35)(118, "h2"),
            n(119, "Accompagnement en recherche de financements"),
            e(),
            t(120, "ul")(121, "li"),
            n(
              122,
              "Les subsides locaux en Belgique sont souvent attribu\xE9s par projet, ce qui peut rendre leur gestion complexe."
            ),
            e(),
            t(123, "li")(124, "strong"),
            n(125, "\xC9laboration de plans financiers d\xE9taill\xE9s"),
            e(),
            n(126, " pour chaque projet."),
            e(),
            t(127, "li")(128, "strong"),
            n(
              129,
              "Suivi des co\xFBts gr\xE2ce \xE0 la comptabilit\xE9 analytique"
            ),
            e(),
            n(130, " pour optimiser vos demandes de subsides."),
            e(),
            t(131, "li")(132, "strong"),
            n(133, "Consolidation des plans financiers dans un budget global"),
            e(),
            n(
              134,
              ", actualis\xE9 r\xE9guli\xE8rement pour garantir une tr\xE9sorerie saine."
            ),
            e()()()(),
            t(135, "div", 39)(136, "div", 32)(137, "div", 37),
            l(138, "img", 41),
            e()(),
            t(139, "div", 35)(140, "h2"),
            n(141, "Gestion des ressources humaines"),
            e(),
            t(142, "ul")(143, "li")(144, "strong"),
            n(145, "Gestion des b\xE9n\xE9voles :"),
            e(),
            n(
              146,
              " Respect des obligations l\xE9gales et suivi des indemnit\xE9s."
            ),
            e(),
            t(147, "li")(148, "strong"),
            n(149, "Surveillance budg\xE9taire :"),
            e(),
            n(
              150,
              " Analyse et suivi des charges salariales, souvent un poste cl\xE9 dans les frais g\xE9n\xE9raux des ASBL."
            ),
            e(),
            t(151, "li"),
            n(152, "Anticiper leur impact sur votre tr\xE9sorerie."),
            e()()()(),
            t(153, "div", 39)(154, "div", 32)(155, "div", 37),
            l(156, "img", 40),
            e()(),
            t(157, "div", 35)(158, "h2"),
            n(159, "Service de direction financi\xE8re (CFO)"),
            e(),
            t(160, "ul")(161, "li")(162, "strong"),
            n(163, "Analyse financi\xE8re approfondie."),
            e()(),
            t(164, "li")(165, "strong"),
            n(
              166,
              "\xC9laboration et suivi de budgets annuels et de tr\xE9sorerie."
            ),
            e()(),
            t(167, "li")(168, "strong"),
            n(169, "Optimisation des ressources pour maximiser votre impact."),
            e()(),
            t(170, "li")(171, "strong"),
            n(172, "Tarif horaire :"),
            e(),
            n(173, " 135 \u20AC HTVA."),
            e()()()()()()(),
            t(174, "div", 42)(175, "div", 43)(176, "div", 44)(177, "div", 45),
            l(178, "img", 46),
            e(),
            t(179, "div", 47),
            l(180, "img", 48),
            e(),
            t(181, "div", 47),
            l(182, "img", 49),
            e()()()()()()()(),
            t(183, "section")(184, "div", 50)(185, "div", 3)(186, "div", 24)(
              187,
              "div",
              51
            )(188, "div", 52),
            l(189, "img", 53),
            e()(),
            t(190, "div", 54)(191, "div", 55)(192, "div", 35)(193, "p", 56)(
              194,
              "span",
              56
            ),
            n(195, "Pourquoi collaborer avec nous ?"),
            e()(),
            t(196, "h3"),
            n(197, "En choisissant MFINANCES, vous b\xE9n\xE9ficiez de :"),
            e()(),
            t(198, "div", 57)(199, "div", 6)(200, "div")(201, "div", 58)(
              202,
              "p"
            ),
            l(203, "img", 59),
            t(204, "strong"),
            n(205, "Conformit\xE9 l\xE9gale garantie :"),
            e(),
            n(
              206,
              " Respect des r\xE9glementations belges pour \xE9viter les erreurs co\xFBteuses."
            ),
            e()(),
            l(207, "div", 29),
            t(208, "div", 58)(209, "p"),
            l(210, "img", 59),
            t(211, "strong"),
            n(212, "Gain de temps :"),
            e(),
            n(
              213,
              " Vous vous concentrez sur vos actions, nous g\xE9rons l\u2019administratif."
            ),
            e()(),
            l(214, "div", 29),
            e(),
            t(215, "div")(216, "div", 58)(217, "p"),
            l(218, "img", 59),
            t(219, "strong"),
            n(220, "Optimisation des ressources :"),
            e(),
            n(
              221,
              " Chaque euro collect\xE9 est utilis\xE9 au mieux pour maximiser l\u2019impact de vos projets."
            ),
            e()(),
            l(222, "div", 29),
            t(223, "div", 58)(224, "p"),
            l(225, "img", 59),
            t(226, "strong"),
            n(227, "Un service personnalis\xE9 :"),
            e(),
            n(228, " Adapt\xE9 \xE0 la taille et aux ambitions de votre ASBL."),
            e()()()()(),
            t(229, "div", 60)(230, "a", 61),
            n(231, "Contactez-nous "),
            l(232, "i", 13),
            e()()()()()()()(),
            t(233, "section")(234, "div", 62)(235, "div", 3)(236, "div", 6)(
              237,
              "div",
              63
            )(238, "div", 64)(239, "h1", 4),
            n(240, "Questions fr\xE9quentes sur les "),
            l(241, "br"),
            t(242, "span", 28),
            n(243, " ASBL en Belgique "),
            e()()()()(),
            l(244, "div", 65),
            t(245, "div", 24)(246, "div", 66)(247, "div", 67),
            l(248, "img", 68),
            e()(),
            t(249, "div", 66)(250, "div", 69)(251, "h2", 4),
            n(
              252,
              "L\u2019ASBL peut-elle exercer une activit\xE9 commerciale ? "
            ),
            e(),
            t(253, "p", 4),
            n(
              254,
              "Oui, mais uniquement si cette activit\xE9 sert \xE0 financer le but social de l\u2019association. Les b\xE9n\xE9fices doivent \xEAtre r\xE9investis dans la mission et non redistribu\xE9s."
            ),
            e()(),
            l(255, "div", 29),
            t(256, "div", 70)(257, "div", 71)(258, "h2", 72)(259, "button", 73),
            n(
              260,
              " L\u2019ASBL peut-elle exercer une activit\xE9 commerciale ? "
            ),
            e()(),
            t(261, "div", 74)(262, "div", 75),
            n(
              263,
              " Oui, mais uniquement si cette activit\xE9 sert \xE0 financer le but social de l\u2019association. Les b\xE9n\xE9fices doivent \xEAtre r\xE9investis dans la mission et non redistribu\xE9s. "
            ),
            e()()(),
            t(264, "div", 71)(265, "h2", 76)(266, "button", 77),
            n(267, " Comment suivre efficacement les co\xFBts par projet ? "),
            e()(),
            t(268, "div", 78)(269, "div", 75),
            n(
              270,
              " Gr\xE2ce \xE0 la comptabilit\xE9 analytique, nous r\xE9partissons pr\xE9cis\xE9ment les frais directs et g\xE9n\xE9raux pour justifier vos demandes de subsides et optimiser vos ressources. "
            ),
            e()()(),
            t(271, "div", 71)(272, "h2", 79)(273, "button", 80),
            n(274, " Pourquoi surveiller les charges salariales ? "),
            e()(),
            t(275, "div", 81)(276, "div", 75),
            n(
              277,
              " Les salaires repr\xE9sentent souvent un poste majeur des frais g\xE9n\xE9raux. Une surveillance r\xE9guli\xE8re aide \xE0 anticiper leur impact sur votre tr\xE9sorerie. "
            ),
            e()()()()()()()()(),
            t(278, "section", 82)(279, "div", 83)(280, "div", 24)(
              281,
              "div",
              84
            ),
            l(282, "img", 85),
            e(),
            t(283, "div", 86)(284, "h2", 87),
            n(285, " Pr\xEAt \xE0 optimiser la gestion de votre "),
            l(286, "br"),
            t(287, "span", 88),
            n(288, "ASBL en Belgique ?"),
            e(),
            n(289, ". "),
            e(),
            t(290, "p", 89),
            n(
              291,
              " Contactez-nous d\xE8s aujourd\u2019hui pour une consultation gratuite ! Demander un devis personnalis\xE9 "
            ),
            e(),
            t(292, "a", 90),
            n(293, " Contactez-nous "),
            l(294, "i", 91),
            e()()()()(),
            l(295, "app-recommandation-profil");
        }
      },
      dependencies: [oe, se],
      styles: [
        '.header[_ngcontent-%COMP%]{background:url("./media/bg_about-AWPUCD7F.webp") no-repeat center center/cover;height:300px;position:relative;display:flex;align-items:center;justify-content:center}.header-overlay[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;color:#fff}.single-img[_ngcontent-%COMP%]{height:50vh;width:80vh;position:relative}.single-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;object-fit:cover}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;text-align:left}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:2.5em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;font-size:1em;opacity:.8}@media (max-width: 768px){.header[_ngcontent-%COMP%]{height:150px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 480px){.header[_ngcontent-%COMP%]{height:120px}.container[_ngcontent-%COMP%]{margin-left:10px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em}}.service-single[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;padding:60px 20px;box-sizing:border-box;width:100%}.sidebar-widget[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]{background-color:#edf3f5;padding:30px 40px;border-radius:20px;margin-bottom:50px}.sidebar-widget[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;color:#0f172a;margin-bottom:25px}.sidebar-widget[_ngcontent-%COMP%]   .widget-category[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-size:18px;color:#787b84;background-color:#fff;padding:17px 20px;border-radius:10px;transition:background-color .3s,color .3s}.sidebar-widget[_ngcontent-%COMP%]   .widget-category[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar-widget[_ngcontent-%COMP%]   .widget-category[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#f34947;color:#fff}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:20px}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#fff;display:block;text-align:center;padding:20px 10px;border-radius:10px;transition:box-shadow .3s}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{box-shadow:0 10px 20px #0000001a}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   .xb-item--icon[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;align-items:center;justify-content:center;background-color:#f34947;margin:0 auto 15px;border-radius:50%}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   .xb-item--title[_ngcontent-%COMP%]{font-size:16px;line-height:22px;margin-bottom:15px}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   .xb-item--size[_ngcontent-%COMP%]{color:#787b84;font-size:14px;border-top:1px solid #EDF3F5;padding-top:4px}.widget-banner[_ngcontent-%COMP%]{padding:50px 40px;color:#fff}.widget-banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:28px;line-height:40px;margin-bottom:40px}.single-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;margin-bottom:25px;font-size:32px}.single-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:24px;margin-bottom:30px}.single-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;line-height:32px;color:#020203;margin-bottom:30px}.single-content__feature[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -15px 50px}.single-content-feature[_ngcontent-%COMP%]{width:50%;padding:0 15px;box-sizing:border-box}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #EDF3F5;padding:30px 25px;border-radius:10px;display:flex;align-items:center;margin-bottom:30px;transition:box-shadow .3s;position:relative}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;left:0;width:4px;height:47px;background-color:#f34947;transform:translateY(-50%)}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner.color-2[_ngcontent-%COMP%]:before{background-color:#1496f8}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner.color-3[_ngcontent-%COMP%]:before{background-color:#0c9}single-content-feature[_ngcontent-%COMP%]   .xb-item--inner.color-4[_ngcontent-%COMP%]:before{background-color:#ffbd0f}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner[_ngcontent-%COMP%]:hover{box-shadow:0 21px 32px #cedce33b}.single-content-feature[_ngcontent-%COMP%]   .xb-item--icon[_ngcontent-%COMP%]{width:81px;height:47px;border-radius:50%;background-color:#fe6c3f1a;display:flex;align-items:center;justify-content:center;margin-right:15px}.single-content-feature[_ngcontent-%COMP%]   .xb-item--title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin:0}.single-content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:20px;align-items:center;margin-bottom:17px}.single-content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px}@media (max-width: 767px){.single-content-feature[_ngcontent-%COMP%]{width:100%;padding:0}}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}p[_ngcontent-%COMP%]{color:#020203}.single-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.service[_ngcontent-%COMP%]{background-color:#25335b}.rectangle-red[_ngcontent-%COMP%]{background-color:#f33;border-radius:8px;padding:6px}.hadding[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#0e1124;font-size:36px;font-weight:700;line-height:48px;padding-bottom:18px}a[_ngcontent-%COMP%]{text-decoration:none}.service-faq[_ngcontent-%COMP%]{background-color:#25335b}.contact-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f33}.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0e1124}.defis[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px;color:#020203!important}.sticky-container[_ngcontent-%COMP%]{position:relative}.sliding-image[_ngcontent-%COMP%]{position:sticky;top:10px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:20px}',
        `.section-title[_ngcontent-%COMP%] {
        font-size: 2rem;
        font-weight: bold;
        color: #25335b;
    }

    .highlighted[_ngcontent-%COMP%] {
        background-color: #FF3333;
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 0.25rem;
    }

    .section-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
        font-size: 1.25rem;
        font-weight: bold;
        color: #25335b;
    }

    .flex-content[_ngcontent-%COMP%] {
        display: flex;
        align-items: flex-start;
        margin-bottom: 1rem;
    }

    .icon-red[_ngcontent-%COMP%] {
        color: #FF3333;
        font-size: 1.5rem;
        margin-right: 1rem;
    }

    .vertical-divider[_ngcontent-%COMP%] {
        border-left: 2px solid #d1d1d1;
        height: 100%;
    }

    .custom-card[_ngcontent-%COMP%] {
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 1.5rem;
    }

    .custom-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .custom-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .custom-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
    }

    .custom-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
        color: #FF3333;
        margin-right: 0.5rem;
        font-size: 1.2rem;
    }

    .custom-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
        font-size: 1rem;
        color: #555;
    }

    .bg-custom--primary[_ngcontent-%COMP%] {
        background-color: #25335b;
    }

    .bg-custom--primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
        color: white;
    }

    .works-img[_ngcontent-%COMP%] {
  overflow: hidden; 

  position: relative; 

}



.works-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  max-width: 100%;
  height: auto;
  display: block;
  transition: transform 0.2s ease-out; 

}
.image-active[_ngcontent-%COMP%] {
  transform: translateY(0); 

}`,
      ],
    });
  };
var Pt = class a {
  static ɵfac = function (i) {
    return new (i || a)();
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-timeline-independant"]],
    decls: 49,
    vars: 0,
    consts: [
      [1, "bg-custom--primary", "py-5"],
      [1, "container"],
      ["data-aos", "fade-down", 1, "text-center", "mb-4"],
      [1, "fw-bold", 2, "font-size", "1.75rem"],
      [1, "highlighted"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "200",
        1,
        "text-center",
        "mb-5",
      ],
      [2, "font-size", "1rem", "max-width", "700px", "margin", "0 auto"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "400",
        1,
        "steps-container",
        "position-relative",
      ],
      [1, "steps-line"],
      [1, "row", "justify-content-center"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "500",
        1,
        "col-12",
        "col-sm-6",
        "col-md-3",
        "step",
      ],
      [1, "step-number"],
      [1, "step-dot"],
      [1, "step-text"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "600",
        1,
        "col-12",
        "col-sm-6",
        "col-md-3",
        "step",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "700",
        1,
        "col-12",
        "col-sm-6",
        "col-md-3",
        "step",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "800",
        1,
        "col-12",
        "col-sm-6",
        "col-md-3",
        "step",
      ],
      ["data-aos", "fade-in", "data-aos-delay", "1000", 1, "result-section"],
      [1, "result-border"],
      [1, "result-text"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3),
        n(4, " Comment devenir ind\xE9pendant "),
        t(5, "span", 4),
        n(6, "en Belgique ? "),
        e()()(),
        t(7, "div", 5)(8, "p", 6),
        n(9, " Voici les \xE9tapes essentielles pour vous lancer : "),
        e()(),
        t(10, "div", 7),
        l(11, "div", 8),
        t(12, "div", 9)(13, "div", 10)(14, "div", 11),
        n(15, "01"),
        e(),
        l(16, "div", 12),
        t(17, "div", 13)(18, "strong"),
        n(19, "Pr\xE9parer un business plan et un plan financier :"),
        e(),
        n(
          20,
          " Ces documents structurent votre projet et attirent les financements. "
        ),
        e()(),
        t(21, "div", 14)(22, "div", 11),
        n(23, "02"),
        e(),
        l(24, "div", 12),
        t(25, "div", 13)(26, "strong"),
        n(27, "Ouvrir un compte bancaire professionnel :"),
        e(),
        n(
          28,
          " Cela garantit une gestion claire et transparente de vos finances. "
        ),
        e()(),
        t(29, "div", 15)(30, "div", 11),
        n(31, "03"),
        e(),
        l(32, "div", 12),
        t(33, "div", 13)(34, "strong"),
        n(35, "S\u2019enregistrer \xE0 la BCE :"),
        e(),
        n(
          36,
          " Obtenez votre num\xE9ro d\u2019entreprise pour lancer officiellement votre activit\xE9. "
        ),
        e()(),
        t(37, "div", 16)(38, "div", 11),
        n(39, "04"),
        e(),
        l(40, "div", 12),
        t(41, "div", 13)(42, "strong"),
        n(43, "Activer votre num\xE9ro de TVA :"),
        e(),
        n(44, " Obligatoire pour facturer et d\xE9clarer la TVA. "),
        e()()()(),
        t(45, "div", 17)(46, "div", 18)(47, "p", 19),
        n(
          48,
          " Astuce : MFINANCES vous accompagne dans toutes ces d\xE9marches pour un d\xE9marrage simplifi\xE9 et rapide. "
        ),
        e()()()()());
    },
    styles: [
      `body[_ngcontent-%COMP%] {
    background-color: #001f3f;
    color: #fff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .highlighted[_ngcontent-%COMP%] {
    background-color: #ff4136;
    color: #fff;
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;
  }

  .steps-container[_ngcontent-%COMP%] {
    position: relative;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  

  .steps-line[_ngcontent-%COMP%] {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-top: 2px dashed #fff;
    opacity: 0.5;
    z-index: 1;
    transform: translateY(-50%);
  }

  .step[_ngcontent-%COMP%] {
    text-align: center;
    position: relative;
    z-index: 2;
    padding: 2rem 0;
  }

  .step-number[_ngcontent-%COMP%] {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 1rem;
  }

  .step-dot[_ngcontent-%COMP%] {
    width: 12px;
    height: 12px;
    background: #ff4136;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .step-text[_ngcontent-%COMP%] {
    font-size: 0.9rem;
    max-width: 200px;
    margin: 2rem auto 0; 

    padding-top: 32px;
  }



  .result-custom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    color: #ff4136;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    .steps-line[_ngcontent-%COMP%] {
      display: none;
    }

    .step-dot[_ngcontent-%COMP%] {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      margin: 1rem auto;
    }

    .step-text[_ngcontent-%COMP%] {
      margin-top: 2rem; 

    }
  }

  .bg-custom--primary[_ngcontent-%COMP%]{
    background-color: #25335b;;
    color: white;
}

.result-section[_ngcontent-%COMP%] {
    display: flex;
    align-items: center; 

    justify-content: center; 

    margin-top: 2rem; 

  }

  .result-border[_ngcontent-%COMP%] {
    border-left: 4px solid #ff4136; 

    padding-left: 1rem; 

  }

  .result-text[_ngcontent-%COMP%] {
    font-size: 1rem;
    font-weight: 500;
  }

  .result-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    color: #ff4136;
    font-weight: 700;
  }`,
    ],
  });
};
var Tt = class a {
  constructor(o) {
    this.metaService = o;
  }
  ngOnInit() {
    this.metaService.setIndependantPageMeta();
  }
  scrollToSection(o) {
    let i = document.getElementById(o);
    i && i.scrollIntoView({ behavior: "smooth" });
  }
  static ɵfac = function (i) {
    return new (i || a)(I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-profil-independant"]],
    decls: 397,
    vars: 0,
    consts: [
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
      [1, "text-white"],
      [1, "service-single", "pt-120", "pb-130", 2, "padding", "64px"],
      [1, "row"],
      [1, "col-lg-4"],
      [1, "col-lg-8"],
      [1, "single-content"],
      [1, "display-5", "fw-bold"],
      [1, "bg-custom--primary", "text-white", "px-2", "rounded"],
      [1, "button-container"],
      [1, "home2-btn", "mb-4"],
      [1, "btn-red", 3, "click"],
      [1, "fa-solid", "fa-arrow-right"],
      [1, "single-img", "mt-35", "mb-4", "custom-single"],
      ["src", "../../assets/img/webp/28.webp", "alt", "", 1, "rounded-4"],
      [1, "defis", "row", "align-items-center", "mt-10"],
      [1, "col-md-4"],
      [
        "src",
        "../../assets/img/webp/independant_mini.webp",
        "alt",
        "D\xE9fis ASBL",
        1,
        "img-fluid",
        2,
        "border-radius",
        "16px",
      ],
      [1, "col-md-8", "mt-30"],
      [1, "list-unstyled", "pl-25"],
      [
        1,
        "fa",
        "fa-star",
        2,
        "font-size",
        "14px",
        "color",
        "#FF3333",
        "margin-right",
        "6px",
      ],
      [1, "bg-custom--primary"],
      [1, "works", "sec-padding"],
      [1, "row", "align-items-center"],
      [1, "col-md-12", "col-lg-6"],
      [1, "how-in-work-sec"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "800",
        1,
        "hadding",
        "hadding-p",
      ],
      [1, "rectangle-red"],
      [1, "space20"],
      [1, "works-items"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1000",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "me-3"],
      [1, "work-icon", "img-border"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-1.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [1, "hadding", "hadding-p"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1200",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "work-icon"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-2.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1400",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [
        "src",
        "../../assets/img/image/profil/works-icon-3.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "src",
        "../../assets/img/image/profil/about-vision-icon-2.webp",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "flip-right",
        "data-aos-duration",
        "1000",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [1, "works-img", "space-sm-50", "img-border"],
      ["src", "../../assets/img/webp/9.webp", "alt", "", 1, "img-fluid"],
      ["id", "targetSection", 1, "about", "sec-padding"],
      ["data-aos", "fade-right", "data-aos-duration", "800", 1, "col-md-6"],
      [1, "about-img", "img-border"],
      ["src", "../../assets/img/webp/3.webp", "alt", ""],
      [
        "data-aos",
        "fade-left",
        "data-aos-duration",
        "800",
        1,
        "col-md-6",
        "space-sm-30",
      ],
      [1, "about-haddings"],
      [1, "check-list-all", 2, "padding", "1px 0 !important"],
      [1, "chek-list"],
      ["src", "../../assets/img/icons/checkfill.png", "alt", ""],
      [1, "home2-btn", "mt-4"],
      ["href", "/contact"],
      [1, "py-5"],
      ["data-aos", "fade-right", 1, "col-8", "col-md-6", "mb-4"],
      [1, "display-5", "fw-bold", 2, "font-size", "40px !important"],
      [1, "bg-danger", "text-white", "px-2", "rounded"],
      [1, "col-12", "col-md-6", "d-flex", "flex-column", "gap-4"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "200",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        1,
        "icon-wrapper",
        "me-3",
        "d-flex",
        "justify-content-center",
        "align-items-center",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border.png",
        "alt",
        "Icone Facturer",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "fw-semibold", "mb-2"],
      [1, "mb-0", "text-muted"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "400",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border2.png",
        "alt",
        "Icone Patrimoine",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "600",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border3.png",
        "alt",
        "Icone Risques",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "service-faq", "sec-padding"],
      [1, "col-md-6", "m-auto", "text-center"],
      [1, "hadding"],
      [1, "space40"],
      ["id", "accordionExample", 1, "accordion"],
      [1, "accordion-item"],
      ["id", "headingOne", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseOne",
        "aria-expanded",
        "true",
        "aria-controls",
        "collapseOne",
        1,
        "accordion-button",
      ],
      [
        "id",
        "collapseOne",
        "aria-labelledby",
        "headingOne",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
        "show",
      ],
      [1, "accordion-body"],
      ["id", "headingTwo", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseTwo",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseTwo",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseTwo",
        "aria-labelledby",
        "headingTwo",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingThree", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseThree",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseThree",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseThree",
        "aria-labelledby",
        "headingThree",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingFour", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseFour",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseFour",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseFour",
        "aria-labelledby",
        "headingFour",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingFive", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseFive",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseFive",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseFive",
        "aria-labelledby",
        "headingFive",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingSix", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseSix",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseSix",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseSix",
        "aria-labelledby",
        "headingSix",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingSeven", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseSeven",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseSeven",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseSeven",
        "aria-labelledby",
        "headingSeven",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingEight", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseEight",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseEight",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseEight",
        "aria-labelledby",
        "headingEight",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingNine", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseNine",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseNine",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseNine",
        "aria-labelledby",
        "headingNine",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingTen", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseTen",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseTen",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseTen",
        "aria-labelledby",
        "headingTen",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      [1, "container", "my-5"],
      [1, "rounded-4", "bg-custom--primary", "text-white", "px-4"],
      [
        "data-aos",
        "fade-left",
        "data-aos-delay",
        "200",
        1,
        "col-md-6",
        "d-none",
        "d-md-flex",
        "justify-content-center",
        "align-items-end",
      ],
      [
        "src",
        "../../assets/img/image/profil/h9_footer_banner_img 1 1.webp",
        "alt",
        "Personne souriante",
        1,
        "img-fluid",
        "custom-image-size",
        2,
        "z-index",
        "2",
        "position",
        "relative",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-delay",
        "400",
        1,
        "col-12",
        "col-md-6",
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center",
        "align-items-md-start",
        "text-center",
        "text-md-start",
        "mt-4",
        "mt-md-0",
      ],
      [1, "fw-bold", "mb-4"],
      [1, "bg-danger", "text-white", "px-2", "py-1", "rounded-2"],
      ["data-aos", "fade-up", "data-aos-delay", "600", 1, "mb-4"],
      [
        "href",
        "#",
        "data-aos",
        "zoom-in",
        "data-aos-delay",
        "800",
        1,
        "btn",
        "btn-danger",
        "btn-sm",
        "px-3",
        "py-2",
      ],
      [1, "fas", "fa-arrow-right"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1"),
        n(4, "Ind\xE9pendants et Starter"),
        e(),
        t(5, "p", 3),
        n(6, "Accueil > Ind\xE9pendants et Starter"),
        e()()()(),
        t(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "div", 6),
        l(11, "app-sidebar"),
        e(),
        t(12, "div", 7)(13, "div", 8)(14, "h2", 9),
        n(15, " Devenir ind\xE9pendant en Belgique: Lancez votre projet"),
        l(16, "br"),
        t(17, "span", 10),
        n(18, " avec succ\xE8s"),
        e()(),
        t(19, "div")(20, "p"),
        n(
          21,
          "Devenir ind\xE9pendant, c\u2019est bien plus qu\u2019un simple changement de statut. C\u2019est une aventure passionnante, un saut vers la libert\xE9 professionnelle et une occasion unique de concr\xE9tiser vos id\xE9es."
        ),
        e(),
        t(22, "p"),
        n(
          23,
          "Que vous soyez en d\xE9but de carri\xE8re ou en pleine r\xE9orientation, le statut d\u2019ind\xE9pendant vous permet de b\xE2tir un projet sur mesure, parfaitement adapt\xE9 \xE0 vos aspirations."
        ),
        e(),
        t(24, "p"),
        n(
          25,
          "Cependant, chaque aventure pr\xE9sente des d\xE9fis : d\xE9marches administratives, gestion financi\xE8re, p\xE9riodes de creux\u2026 Fort de plus de 20 ans d\u2019exp\xE9rience, MFINANCES accompagne les entrepreneurs dans la gestion de ces obstacles gr\xE2ce \xE0 des m\xE9thodes \xE9prouv\xE9es et un savoir-faire unique."
        ),
        e()(),
        t(26, "div", 11)(27, "div", 12)(28, "button", 13),
        O("click", function () {
          return s.scrollToSection("targetSection");
        }),
        n(29, "D\xE9couvrez ce que vous gagnerez avec nous "),
        l(30, "i", 14),
        e()()(),
        t(31, "div", 15),
        l(32, "img", 16),
        e(),
        t(33, "div", 17)(34, "h1"),
        n(35, "Les d\xE9fis des ind\xE9pendants : un statut exigeant "),
        e(),
        t(36, "p"),
        n(
          37,
          "Si devenir ind\xE9pendant offre une libert\xE9 unique, il comporte \xE9galement des d\xE9fis majeurs : "
        ),
        e(),
        t(38, "div", 18),
        l(39, "img", 19),
        e(),
        t(40, "div", 20)(41, "ul", 21)(42, "li"),
        l(43, "i", 22),
        t(44, "strong"),
        n(45, "Un investissement personnel important :"),
        e(),
        l(46, "br"),
        n(47, " Les semaines de travail peuvent d\xE9passer "),
        t(48, "strong"),
        n(49, "35 heures"),
        e(),
        n(
          50,
          ", surtout lors des phases de d\xE9marrage ou de croissance. L'absence de cong\xE9s pay\xE9s n\xE9cessite une planification rigoureuse. "
        ),
        e(),
        t(51, "li"),
        l(52, "i", 22),
        t(53, "strong"),
        n(54, "Des risques financiers \xE0 g\xE9rer :"),
        e(),
        l(55, "br"),
        n(
          56,
          " Une d\xE9pendance excessive \xE0 quelques clients peut fragiliser votre tr\xE9sorerie. Les retards de paiement ou les p\xE9riodes de faible activit\xE9 exigent une gestion proactive et une \xE9pargne de s\xE9curit\xE9. "
        ),
        e(),
        t(57, "li"),
        l(58, "i", 22),
        t(59, "strong"),
        n(60, "Une protection sociale limit\xE9e :"),
        e(),
        l(61, "br"),
        n(
          62,
          " Contrairement \xE0 un salari\xE9, un ind\xE9pendant ne b\xE9n\xE9ficie ni de cong\xE9s pay\xE9s ni de couverture ch\xF4mage. Des solutions alternatives, telles que des assurances sp\xE9cifiques ou une \xE9pargne personnelle, sont essentielles. "
        ),
        e()()()()()()()()(),
        t(63, "section", 23)(64, "div", 24)(65, "div", 2)(66, "div", 25)(
          67,
          "div",
          26
        )(68, "div", 27)(
          69,
          "div",
          28
        )(70, "h1"),
        n(71, "Pourquoi choisir le "),
        l(72, "br"),
        t(73, "span", 29),
        n(74, " statut d\u2019ind\xE9pendant ?"),
        e()()(),
        l(75, "div", 30),
        t(76, "div", 31)(77, "div", 32)(78, "div", 33)(79, "div", 34),
        l(80, "img", 35),
        e()(),
        t(81, "div", 36)(82, "h2"),
        n(83, "Libert\xE9 professionnelle"),
        e(),
        t(84, "ul")(85, "li"),
        n(86, "D\xE9finissez vos projets, vos horaires et vos priorit\xE9s. "),
        e(),
        t(87, "li"),
        n(
          88,
          "Une autonomie qui vous permet de concilier travail et vie personnelle selon vos besoins. "
        ),
        e()()()(),
        t(89, "div", 37)(90, "div", 33)(91, "div", 38),
        l(92, "img", 39),
        e()(),
        t(93, "div", 36)(94, "h2"),
        n(95, "D\xE9veloppement personnel et professionnel : "),
        e(),
        t(96, "ul")(97, "li"),
        n(
          98,
          "Transformez vos passions en une activit\xE9 rentable et \xE9panouissante. "
        ),
        e(),
        t(99, "li"),
        n(
          100,
          "Relevez des d\xE9fis motivants et d\xE9veloppez des comp\xE9tences essentielles en gestion, vente et leadership. "
        ),
        e()()()(),
        t(101, "div", 40)(102, "div", 33)(103, "div", 38),
        l(104, "img", 41),
        e()(),
        t(105, "div", 36)(106, "h2"),
        n(107, "Opportunit\xE9s financi\xE8res et aides disponibles : "),
        e(),
        t(108, "ul")(109, "li"),
        n(
          110,
          "Vos revenus d\xE9pendent de vos efforts et des performances de votre activit\xE9."
        ),
        e(),
        t(111, "li"),
        n(
          112,
          "Profitez des aides telles que Tremplin-Ind\xE9pendants, des subsides r\xE9gionaux et des microcr\xE9dits pour soutenir votre projet."
        ),
        e()()()(),
        t(113, "div", 40)(114, "div", 33)(115, "div", 38),
        l(116, "img", 42),
        e()(),
        t(117, "div", 36)(118, "h2"),
        n(119, "Flexibilit\xE9 dans les choix juridiques : "),
        e(),
        t(120, "ul")(121, "li"),
        n(
          122,
          "Commencez en tant qu\u2019ind\xE9pendant principal ou compl\xE9mentaire, selon vos besoins "
        ),
        e(),
        t(123, "li"),
        n(
          124,
          "Faites \xE9voluer votre activit\xE9 vers une soci\xE9t\xE9 (SRL, SA) pour accompagner sa croissance. "
        ),
        e()()()(),
        t(125, "div", 40)(126, "div", 33)(127, "div", 38),
        l(128, "img", 41),
        e()(),
        t(129, "div", 36)(130, "h2"),
        n(131, "Un r\xE9seau professionnel en constante \xE9volution : "),
        e(),
        t(132, "ul")(133, "li"),
        n(
          134,
          "Collaborez avec des clients, fournisseurs et partenaires pour \xE9largir vos opportunit\xE9s et renforcer votre position sur le march\xE9. "
        ),
        e()()()()()()(),
        t(135, "div", 43)(136, "div", 44),
        l(137, "img", 45),
        e()()()()()(),
        t(138, "section")(139, "div", 46)(140, "div", 2)(141, "div", 25)(
          142,
          "div",
          47
        )(143, "div", 48),
        l(144, "img", 49),
        e()(),
        t(145, "div", 50)(146, "div", 51)(147, "div", 36)(148, "h3"),
        n(149, "Comment MFINANCES vous aide \xE0 relever ces d\xE9fis ?"),
        e(),
        t(150, "p"),
        n(
          151,
          "Avec MFINANCES, ces obstacles se transforment en opportunit\xE9s : "
        ),
        e()(),
        t(152, "div", 52)(153, "div", 5)(154, "div")(155, "div", 53)(156, "p"),
        l(157, "img", 54),
        t(158, "strong"),
        n(159, "Une planification proactive :"),
        e(),
        n(
          160,
          " Nous structurons votre activit\xE9 pour anticiper les risques financiers et personnels."
        ),
        e()(),
        l(161, "div", 30),
        t(162, "div", 53)(163, "p"),
        l(164, "img", 54),
        t(165, "strong"),
        n(166, "Des solutions sur mesure : "),
        e(),
        n(
          167,
          " Diversifiez vos revenus, optimisez votre tr\xE9sorerie, et choisissez les meilleures protections sociales."
        ),
        e()(),
        l(168, "div", 30),
        e(),
        t(169, "div")(170, "div", 53)(171, "p"),
        l(172, "img", 54),
        t(173, "strong"),
        n(174, "Un suivi continu :"),
        e(),
        n(
          175,
          " Avec notre accompagnement r\xE9gulier, vous pouvez vous concentrer sur la croissance de votre activit\xE9 en toute s\xE9r\xE9nit\xE9."
        ),
        e()()()()(),
        t(176, "div", 55)(177, "a", 56),
        n(178, "Contactez-nous "),
        l(179, "i", 14),
        e()()()()()()()(),
        l(180, "app-timeline-independant"),
        t(181, "section", 57)(182, "div", 2)(183, "div", 25)(184, "div", 58)(
          185,
          "h2",
          59
        ),
        n(186, " Nos Points "),
        l(187, "br"),
        t(188, "span", 60),
        n(189, " Distinctif ? "),
        e()()(),
        t(190, "div", 61)(191, "div", 62)(192, "div", 63),
        l(193, "img", 64),
        e(),
        t(194, "div")(195, "h5", 65),
        n(196, "20 ans d\u2019expertise \xE9prouv\xE9e"),
        e(),
        t(197, "p", 66),
        n(
          198,
          "Nos bonnes pratiques garantissent un d\xE9marrage solide et une gestion efficace. "
        ),
        e()()(),
        t(199, "div", 67)(200, "div", 63),
        l(201, "img", 68),
        e(),
        t(202, "div")(203, "h5", 65),
        n(204, "Accompagnement sur mesure"),
        e(),
        t(205, "p", 66),
        n(
          206,
          "Nos solutions sont adapt\xE9es \xE0 vos besoins sp\xE9cifiques, que vous soyez d\xE9butant ou en pleine croissance."
        ),
        e()()(),
        t(207, "div", 69)(208, "div", 63),
        l(209, "img", 70),
        e(),
        t(210, "div")(211, "h5", 65),
        n(212, "Gain de temps et d\u2019efficacit\xE9"),
        e(),
        t(213, "p", 66),
        n(
          214,
          "D\xE9l\xE9guez les d\xE9marches complexes pour vous concentrer sur l\u2019essentiel. "
        ),
        e()()(),
        t(215, "div", 69)(216, "div", 63),
        l(217, "img", 70),
        e(),
        t(218, "div")(219, "h5", 65),
        n(220, "Optimisation des r\xE9sultats"),
        e(),
        t(221, "p", 66),
        n(
          222,
          "Maximisez vos revenus et s\xE9curisez votre avenir avec des strat\xE9gies sur mesure. "
        ),
        e()()()()()()(),
        t(223, "section")(224, "div", 71)(225, "div", 2)(226, "div", 5)(
          227,
          "div",
          72
        )(228, "div", 73)(229, "h1", 3),
        n(230, "Foire Aux Questions (FAQ) pour "),
        l(231, "br"),
        t(232, "span", 29),
        n(233, "Devenir Ind\xE9pendant en Belgique"),
        e()()()()(),
        l(234, "div", 74),
        t(235, "div", 25)(236, "div")(237, "div", 75)(238, "div", 76)(
          239,
          "h2",
          77
        )(240, "button", 78),
        n(
          241,
          " Quels sont les principaux avantages de devenir ind\xE9pendant ? "
        ),
        e()(),
        t(242, "div", 79)(243, "div", 80),
        n(244, " Devenir ind\xE9pendant vous permet de : "),
        t(245, "ul")(246, "li"),
        n(247, "\xCAtre votre propre patron et g\xE9rer vos horaires."),
        e(),
        t(248, "li"),
        n(249, "Transformer vos passions en m\xE9tier."),
        e(),
        t(250, "li"),
        n(
          251,
          "Acc\xE9der \xE0 des aides financi\xE8res pour les starters (comme Tremplin-Ind\xE9pendants ou les primes r\xE9gionales)."
        ),
        e()()()()(),
        t(252, "div", 76)(253, "h2", 81)(254, "button", 82),
        n(255, " Quels d\xE9fis dois-je anticiper avant de me lancer ? "),
        e()(),
        t(256, "div", 83)(257, "div", 80),
        n(258, " Les principaux d\xE9fis incluent : "),
        t(259, "ul")(260, "li"),
        n(
          261,
          "Une charge de travail importante, souvent au-del\xE0 des 35 heures hebdomadaires."
        ),
        e(),
        t(262, "li"),
        n(263, "Des revenus variables, parfois impr\xE9visibles."),
        e(),
        t(264, "li"),
        n(
          265,
          "L'absence de cong\xE9s pay\xE9s ou de ch\xF4mage en cas d'arr\xEAt d'activit\xE9."
        ),
        e()(),
        n(
          266,
          " Chez MFINANCES, nous vous aidons \xE0 structurer votre projet et \xE0 anticiper ces d\xE9fis avec des strat\xE9gies adapt\xE9es. "
        ),
        e()()(),
        t(267, "div", 76)(268, "h2", 84)(269, "button", 85),
        n(
          270,
          " Quelles sont les \xE9tapes administratives pour devenir ind\xE9pendant ? "
        ),
        e()(),
        t(271, "div", 86)(272, "div", 80),
        n(273, " Les \xE9tapes cl\xE9s sont : "),
        t(274, "ul")(275, "li"),
        n(276, "Pr\xE9parer un business plan et un plan financier."),
        e(),
        t(277, "li"),
        n(278, "Ouvrir un compte bancaire professionnel."),
        e(),
        t(279, "li"),
        n(
          280,
          "S\u2019enregistrer \xE0 la Banque-Carrefour des Entreprises (BCE)."
        ),
        e(),
        t(281, "li"),
        n(282, "Activer un num\xE9ro de TVA, si n\xE9cessaire."),
        e(),
        t(283, "li"),
        n(
          284,
          "S'affilier \xE0 une caisse d'assurances sociales pour travailleurs ind\xE9pendants."
        ),
        e()(),
        n(
          285,
          " Nous proposons un accompagnement personnalis\xE9 pour faciliter toutes ces d\xE9marches. "
        ),
        e()()(),
        t(286, "div", 76)(287, "h2", 87)(288, "button", 88),
        n(
          289,
          " Comment choisir entre le statut d\u2019ind\xE9pendant et celui de soci\xE9t\xE9 ? "
        ),
        e()(),
        t(290, "div", 89)(291, "div", 80),
        n(292, " Le choix d\xE9pend de votre situation : "),
        t(293, "ul")(294, "li"),
        n(
          295,
          "Une entreprise individuelle est id\xE9ale pour un d\xE9marrage rapide et flexible."
        ),
        e(),
        t(296, "li"),
        n(
          297,
          "Une soci\xE9t\xE9 (SRL, SA) est pr\xE9f\xE9rable pour limiter votre responsabilit\xE9 financi\xE8re et g\xE9rer une croissance importante."
        ),
        e()()()()(),
        t(298, "div", 76)(299, "h2", 90)(300, "button", 91),
        n(
          301,
          " Quelles sont les obligations fiscales et comptables d\u2019un ind\xE9pendant ? "
        ),
        e()(),
        t(302, "div", 92)(303, "div", 80),
        n(304, " Les obligations incluent : "),
        t(305, "ul")(306, "li"),
        n(307, "D\xE9clarer vos revenus aupr\xE8s du SPF Finances."),
        e(),
        t(308, "li"),
        n(
          309,
          "Tenir une comptabilit\xE9 simplifi\xE9e ou en partie double, selon votre chiffre d'affaires."
        ),
        e(),
        t(310, "li"),
        n(
          311,
          "Effectuer des d\xE9clarations TVA, si vous y \xEAtes assujetti."
        ),
        e()()()()(),
        t(312, "div", 76)(313, "h2", 93)(314, "button", 94),
        n(
          315,
          " Existe-t-il des aides financi\xE8res pour les ind\xE9pendants ? "
        ),
        e()(),
        t(316, "div", 95)(317, "div", 80),
        n(318, " Oui, notamment : "),
        t(319, "ul")(320, "li"),
        n(
          321,
          "Tremplin-Ind\xE9pendants pour r\xE9duire les cotisations sociales."
        ),
        e(),
        t(322, "li"),
        n(323, "Subsides r\xE9gionaux pour le lancement d\u2019activit\xE9."),
        e(),
        t(324, "li"),
        n(325, "Microcr\xE9dits pour financer vos premiers investissements."),
        e()()()()(),
        t(326, "div", 76)(327, "h2", 96)(328, "button", 97),
        n(
          329,
          " Comment g\xE9rer les p\xE9riodes de creux dans mon activit\xE9 ? "
        ),
        e()(),
        t(330, "div", 98)(331, "div", 80),
        n(332, " Voici quelques solutions : "),
        t(333, "ul")(334, "li"),
        n(
          335,
          "Constituer une \xE9pargne de s\xE9curit\xE9 pour couvrir vos besoins."
        ),
        e(),
        t(336, "li"),
        n(
          337,
          "Diversifier vos revenus pour limiter la d\xE9pendance \xE0 un seul client."
        ),
        e(),
        t(338, "li"),
        n(
          339,
          "Fid\xE9liser vos clients existants pour assurer des revenus r\xE9currents."
        ),
        e()()()()(),
        t(340, "div", 76)(341, "h2", 99)(342, "button", 100),
        n(
          343,
          " Quel est le co\xFBt des d\xE9marches administratives pour devenir ind\xE9pendant ? "
        ),
        e()(),
        t(344, "div", 101)(345, "div", 80),
        n(
          346,
          " Le co\xFBt d'inscription \xE0 la BCE est d'environ 105,50 euros, avec un suppl\xE9ment pour chaque unit\xE9 d\u2019\xE9tablissement. Certaines d\xE9marches suppl\xE9mentaires (comme l\u2019affiliation \xE0 un secr\xE9tariat social) peuvent \xE9galement engendrer des frais. "
        ),
        e()()(),
        t(347, "div", 76)(348, "h2", 102)(349, "button", 103),
        n(
          350,
          " Quelles assurances dois-je pr\xE9voir en tant qu\u2019ind\xE9pendant ? "
        ),
        e()(),
        t(351, "div", 104)(352, "div", 80),
        n(353, " Certaines assurances sont obligatoires : "),
        t(354, "ul")(355, "li"),
        n(356, "Assurance responsabilit\xE9 civile professionnelle."),
        e(),
        t(357, "li"),
        n(
          358,
          "Assurance accidents du travail (si vous engagez du personnel)."
        ),
        e()(),
        n(359, " D'autres sont recommand\xE9es : "),
        t(360, "ul")(361, "li"),
        n(362, "Assurance maladie et invalidit\xE9."),
        e(),
        t(363, "li"),
        n(364, "Assurance revenu garanti."),
        e()()()()(),
        t(365, "div", 76)(366, "h2", 105)(367, "button", 106),
        n(368, " Pourquoi choisir MFINANCES pour m\u2019accompagner ? "),
        e()(),
        t(369, "div", 107)(370, "div", 80),
        n(
          371,
          " Avec plus de 20 ans d\u2019exp\xE9rience, nous vous aidons \xE0 : "
        ),
        t(372, "ul")(373, "li"),
        n(
          374,
          "Structurer votre activit\xE9 pour \xE9viter les erreurs co\xFBteuses."
        ),
        e(),
        t(375, "li"),
        n(
          376,
          "Maximiser vos revenus gr\xE2ce \xE0 des strat\xE9gies \xE9prouv\xE9es."
        ),
        e(),
        t(377, "li"),
        n(
          378,
          "Vous concentrer sur le d\xE9veloppement de votre activit\xE9 en d\xE9l\xE9guant les d\xE9marches administratives complexes."
        ),
        e()()()()()()()()()()(),
        t(379, "section", 108)(380, "div", 109)(381, "div", 25)(
          382,
          "div",
          110
        ),
        l(383, "img", 111),
        e(),
        t(384, "div", 112)(385, "h2", 113),
        n(386, " Vous avez une"),
        l(387, "br"),
        t(388, "span", 114),
        n(389, "question sp\xE9cifique ?"),
        e(),
        n(390, ". "),
        e(),
        t(391, "p", 115),
        n(
          392,
          " Contactez MFINANCES d\xE8s aujourd\u2019hui pour une consultation gratuite. "
        ),
        e(),
        t(393, "a", 116),
        n(394, " Contactez-nous "),
        l(395, "i", 117),
        e()()()()(),
        l(396, "app-recommandation-profil"));
    },
    dependencies: [oe, se, Pt],
    styles: [
      '.header[_ngcontent-%COMP%]{background:url("./media/bg_about-AWPUCD7F.webp") no-repeat center center/cover;height:300px;position:relative;display:flex;align-items:center;justify-content:center}.header-overlay[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;color:#fff}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;text-align:left}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:2.5em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;font-size:1em;opacity:.8}@media (max-width: 768px){.header[_ngcontent-%COMP%]{height:150px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 480px){.header[_ngcontent-%COMP%]{height:120px}.container[_ngcontent-%COMP%]{margin-left:10px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5em}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em}}.service-single[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;padding:60px 20px;box-sizing:border-box;width:100%}.sidebar-widget[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]{background-color:#edf3f5;padding:30px 40px;border-radius:20px;margin-bottom:50px}.sidebar-widget[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;color:#0f172a;margin-bottom:25px}.sidebar-widget[_ngcontent-%COMP%]   .widget-category[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-size:18px;color:#787b84;background-color:#fff;padding:17px 20px;border-radius:10px;transition:background-color .3s,color .3s}.sidebar-widget[_ngcontent-%COMP%]   .widget-category[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar-widget[_ngcontent-%COMP%]   .widget-category[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#f34947;color:#fff}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:20px}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#fff;display:block;text-align:center;padding:20px 10px;border-radius:10px;transition:box-shadow .3s}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{box-shadow:0 10px 20px #0000001a}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   .xb-item--icon[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;align-items:center;justify-content:center;background-color:#f34947;margin:0 auto 15px;border-radius:50%}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   .xb-item--title[_ngcontent-%COMP%]{font-size:16px;line-height:22px;margin-bottom:15px}.sidebar-widget[_ngcontent-%COMP%]   .widget-download[_ngcontent-%COMP%]   .xb-item--size[_ngcontent-%COMP%]{color:#787b84;font-size:14px;border-top:1px solid #EDF3F5;padding-top:4px}.widget-banner[_ngcontent-%COMP%]{padding:50px 40px;color:#fff}.widget-banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:28px;line-height:40px;margin-bottom:40px}.single-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;margin-bottom:25px;font-size:32px}.single-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:24px;margin-bottom:30px}.single-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;line-height:32px;color:#020203;margin-bottom:30px}.single-content__feature[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -15px 50px}.single-content-feature[_ngcontent-%COMP%]{width:50%;padding:0 15px;box-sizing:border-box}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #EDF3F5;padding:30px 25px;border-radius:10px;display:flex;align-items:center;margin-bottom:30px;transition:box-shadow .3s;position:relative}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;left:0;width:4px;height:47px;background-color:#f34947;transform:translateY(-50%)}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner.color-2[_ngcontent-%COMP%]:before{background-color:#1496f8}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner.color-3[_ngcontent-%COMP%]:before{background-color:#0c9}single-content-feature[_ngcontent-%COMP%]   .xb-item--inner.color-4[_ngcontent-%COMP%]:before{background-color:#ffbd0f}.single-content-feature[_ngcontent-%COMP%]   .xb-item--inner[_ngcontent-%COMP%]:hover{box-shadow:0 21px 32px #cedce33b}.single-content-feature[_ngcontent-%COMP%]   .xb-item--icon[_ngcontent-%COMP%]{width:81px;height:47px;border-radius:50%;background-color:#fe6c3f1a;display:flex;align-items:center;justify-content:center;margin-right:15px}.single-content-feature[_ngcontent-%COMP%]   .xb-item--title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin:0}.single-content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:20px;align-items:center;margin-bottom:17px}.single-content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px}@media (max-width: 767px){.single-content-feature[_ngcontent-%COMP%]{width:100%;padding:0}}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}p[_ngcontent-%COMP%]{color:#020203}.single-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.service[_ngcontent-%COMP%]{background-color:#25335b}.rectangle-red[_ngcontent-%COMP%]{background-color:#f33;border-radius:8px;padding:6px}.hadding[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#0e1124;font-size:36px;font-weight:700;line-height:48px;padding-bottom:18px}a[_ngcontent-%COMP%]{text-decoration:none}.service-faq[_ngcontent-%COMP%]{background-color:#25335b}.contact-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f33}.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0e1124}.defis[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px;color:#020203!important}.sticky-container[_ngcontent-%COMP%]{position:relative}.sliding-image[_ngcontent-%COMP%]{position:sticky;top:10px}.bg-custom--primary[_ngcontent-%COMP%]{background-color:#25335b}.bg-custom--primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .bg-custom--primary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .bg-custom--primary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .bg-custom--primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff}',
      `.custom-card[_ngcontent-%COMP%] {
  border: 2px solid #e6e9f1;
  border-radius: 12px;
  background-color: #f8f9fb;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: transform 0.1s ease, box-shadow 0.1s ease, border-color 0.1s ease;
}

.custom-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-10px); 

  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); 

  border-color: #c3c9d9; 

}


  .icon-wrapper[_ngcontent-%COMP%] {
      min-width: 80px;
      min-height: 80px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }

  .icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
      max-width: 100%;
      height: auto;
  }

  .custom-image-size[_ngcontent-%COMP%] {
  width: 70%; 

  height: auto; 

  }
  .second-card[_ngcontent-%COMP%] {
      position: relative;
  }

  @media (min-width: 992px) {
      .second-card[_ngcontent-%COMP%] {
          left: -64px;
      }
  }

  @media (max-width: 991px) {
      .second-card[_ngcontent-%COMP%] {
          left: 0;
      }
  }

  .color-red[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {
      color: #FF3333;
  }

  .bg-custom--primary[_ngcontent-%COMP%] {
      background-color: #25335b;;
  }

  .bg-custom--primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
      color: white;
  }

  .rectangle-red[_ngcontent-%COMP%] {
      background-color: #FF3333;
      border-radius: 8px;
      padding: 6px;
  }

  .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      color: white;
      font-size: 29px !important;
      line-height: 48px;
      padding-bottom: 18px;
  }

  .highlighted[_ngcontent-%COMP%] {
      background-color: #ff4136;
      color: #fff;
      padding: 0.2rem 0.5rem;
      border-radius: 0.25rem;
  }

  .vertical-divider[_ngcontent-%COMP%] {
      border-left: 1px solid #d1d1d1;
      height: 100%;
  }

  .icon-red[_ngcontent-%COMP%] {
      color: #ff4136;
      font-size: 1.5rem;
      margin-right: 1rem; 
  }

  .section-title[_ngcontent-%COMP%] {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 2rem;
  }

  .flex-content[_ngcontent-%COMP%] {
      display: flex;
      align-items: flex-start; 
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
  }

  .header[_ngcontent-%COMP%] {
      background: url('../../assets/img/bg/bg_about.webp') no-repeat center center/cover;
      min-height: 400px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .header-overlay[_ngcontent-%COMP%] {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      color: white;
  }

  

  @media (max-width: 767px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 24px;
          line-height: 36px;
      }

      .custom-card[_ngcontent-%COMP%] {
          padding: 15px;
      }

      .icon-wrapper[_ngcontent-%COMP%] {
          min-width: 60px;
          min-height: 60px;
      }

      .works-items[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
          font-size: 1.2rem;
      }

      .section-title[_ngcontent-%COMP%] {
          font-size: 1.5rem;
      }
  }

  @media (max-width: 575px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 20px;
          line-height: 32px;
      }
  }`,
    ],
  });
};
var Dt = class a {
  static ɵfac = function (i) {
    return new (i || a)();
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-timeline-patrimoniale"]],
    decls: 44,
    vars: 0,
    consts: [
      [1, "bg-custom--primary", "py-5"],
      [1, "container"],
      ["data-aos", "fade-down", 1, "text-center", "mb-4"],
      [1, "fw-bold", 2, "font-size", "1.75rem"],
      [1, "highlighted"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "200",
        1,
        "text-center",
        "mb-5",
      ],
      [2, "font-size", "1rem", "max-width", "700px", "margin", "0 auto"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "400",
        1,
        "steps-container",
        "position-relative",
      ],
      [1, "steps-line"],
      [1, "row", "justify-content-center"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "500",
        1,
        "col-12",
        "col-sm-6",
        "col-md-3",
        "step",
      ],
      [1, "step-number"],
      [1, "step-dot"],
      [1, "step-text"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "600",
        1,
        "col-12",
        "col-sm-6",
        "col-md-3",
        "step",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "700",
        1,
        "col-12",
        "col-sm-6",
        "col-md-3",
        "step",
        "mt-4",
        "mt-md-0",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "800",
        1,
        "col-12",
        "col-sm-6",
        "col-md-3",
        "step",
        "mt-4",
        "mt-md-0",
      ],
      ["data-aos", "fade-in", "data-aos-delay", "1000", 1, "result-section"],
      [1, "result-border"],
      [1, "result-text"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3),
        n(4, " Comment MFINANCES optimise votre Soci\xE9t\xE9 "),
        t(5, "span", 4),
        n(6, "de Management Patrimoniale"),
        e()()(),
        t(7, "div", 5)(8, "p", 6),
        n(
          9,
          " Un dirigeant d\u2019une PME dans le secteur de la technologie cherchait \xE0 r\xE9duire sa pression fiscale et \xE0 d\xE9velopper un portefeuille immobilier. Avec MFINANCES, nous avons: "
        ),
        e()(),
        t(10, "div", 7),
        l(11, "div", 8),
        t(12, "div", 9)(13, "div", 10)(14, "div", 11),
        n(15, "01"),
        e(),
        l(16, "div", 12),
        t(17, "div", 13),
        n(
          18,
          " Cr\xE9\xE9 une Soci\xE9t\xE9 de Management Patrimoniale pour facturer ses services \xE0 la soci\xE9t\xE9 d'exploitation. "
        ),
        e()(),
        t(19, "div", 14)(20, "div", 11),
        n(21, "02"),
        e(),
        l(22, "div", 12),
        t(23, "div", 13),
        n(
          24,
          " Optimis\xE9 les management fees en respectant les normes fiscales. "
        ),
        e()(),
        t(25, "div", 15)(26, "div", 11),
        n(27, "03"),
        e(),
        l(28, "div", 12),
        t(29, "div", 13),
        n(
          30,
          " Utilis\xE9 ces revenus pour financer des biens immobiliers amortis int\xE9gralement dans la structure. "
        ),
        e()(),
        t(31, "div", 16)(32, "div", 11),
        n(33, "04"),
        e(),
        l(34, "div", 12),
        t(35, "div", 13),
        n(
          36,
          " \xC9labor\xE9 un plan successoral pour transmettre les actifs \xE0 un co\xFBt fiscal minimal. "
        ),
        e()()()(),
        t(37, "div", 17)(38, "div", 18)(39, "p", 19),
        n(40, " R\xE9sultat : R\xE9duction de "),
        t(41, "span"),
        n(42, "25%"),
        e(),
        n(
          43,
          " des charges fiscales et un patrimoine valoris\xE9 \xE0 1,2 million d'euros en 5 ans. "
        ),
        e()()()()());
    },
    styles: [
      "body[_ngcontent-%COMP%]{background-color:#001f3f;color:#fff;font-family:Arial,sans-serif;margin:0;padding:0}.highlighted[_ngcontent-%COMP%]{background-color:#ff4136;color:#fff;padding:.2rem .5rem;border-radius:.25rem}.steps-container[_ngcontent-%COMP%]{position:relative;margin-top:4rem;margin-bottom:4rem}.steps-line[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;right:0;border-top:2px dashed #fff;opacity:.5;z-index:1;transform:translateY(-50%)}.step[_ngcontent-%COMP%]{text-align:center;position:relative;z-index:2;padding:2rem 0}.step-number[_ngcontent-%COMP%]{font-size:3rem;font-weight:700;line-height:1;margin-bottom:1rem}.step-dot[_ngcontent-%COMP%]{width:12px;height:12px;background:#ff4136;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2}.step-text[_ngcontent-%COMP%]{font-size:.9rem;max-width:200px;margin:2rem auto 0;padding-top:32px}.result-custom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff4136;font-weight:700}@media (max-width: 767px){.steps-line[_ngcontent-%COMP%]{display:none}.step-dot[_ngcontent-%COMP%]{position:relative;top:auto;left:auto;transform:none;margin:1rem auto}.step-text[_ngcontent-%COMP%]{margin-top:2rem}}.bg-custom--primary[_ngcontent-%COMP%]{background-color:#25335b;color:#fff}.result-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:2rem}.result-border[_ngcontent-%COMP%]{border-left:4px solid #ff4136;padding-left:1rem}.result-text[_ngcontent-%COMP%]{font-size:1rem;font-weight:500}.result-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff4136;font-weight:700}",
    ],
  });
};
var kt = class a {
  constructor(o) {
    this.metaService = o;
  }
  ngOnInit() {
    this.metaService.setSocieteManagementPatrimonialePageMeta();
  }
  scrollToSection(o) {
    let i = document.getElementById(o);
    i && i.scrollIntoView({ behavior: "smooth" });
  }
  static ɵfac = function (i) {
    return new (i || a)(I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-profil-societe-management-patrimoniale"]],
    decls: 237,
    vars: 0,
    consts: [
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
      [1, "text-white"],
      [1, "service-single", "pt-120", "pb-130", 2, "padding", "64px"],
      [1, "row"],
      [1, "col-lg-4"],
      [1, "col-lg-8"],
      [1, "single-content"],
      [1, "display-5", "fw-bold"],
      [1, "bg-custom--primary", "text-white", "px-2", "rounded"],
      [1, "button-container"],
      [1, "home2-btn", "mb-4"],
      [1, "btn-red", 3, "click"],
      [1, "fa-solid", "fa-arrow-right"],
      [1, "single-img", "mt-35", "mb-4", "custom-single"],
      ["src", "../../assets/img/webp/grande12.webp", "alt", "", 1, "rounded-4"],
      [1, "row", "align-items-start", "mt-10"],
      [1, "col-lg-4", "mt-30", "custom-img"],
      [
        "src",
        "../../assets/img/webp/47.webp",
        "alt",
        "",
        1,
        "img-fluid",
        "rounded",
      ],
      [1, "col-lg-8", "mt-30"],
      [1, "p-3", "chek-list-all"],
      [1, "chek-list", "align-items-baseline", "gap-3", "d-flex", "mb-2"],
      [1, "fa", "fa-star"],
      [1, "mb-0"],
      [1, "text-red"],
      [1, "chek-list", "align-items-baseline", "gap-3", "d-flex"],
      [1, "bg-custom--primary"],
      [1, "works", "sec-padding"],
      [1, "row", "align-items-center"],
      [1, "col-md-12", "col-lg-6"],
      [1, "how-in-work-sec"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "800",
        1,
        "hadding",
        "hadding-p",
      ],
      [1, "rectangle-red"],
      [1, "space20"],
      [1, "works-items"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1000",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "me-3"],
      [1, "work-icon", "img-border"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-1.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [1, "hadding", "hadding-p"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1200",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "work-icon"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-2.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1400",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [
        "src",
        "../../assets/img/image/profil/works-icon-3.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "src",
        "../../assets/img/image/profil/about-vision-icon-2.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "flip-right",
        "data-aos-duration",
        "1000",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [1, "works-img", "space-sm-50", "img-border"],
      ["src", "../../assets/img/webp/grande13.webp", "alt", "", 1, "img-fluid"],
      [1, "py-5"],
      ["data-aos", "fade-right", 1, "col-8", "col-md-6", "mb-4"],
      [1, "display-5", "fw-bold", 2, "font-size", "40px !important"],
      [1, "bg-danger", "text-white", "px-2", "rounded"],
      [1, "text-muted", "mt-3"],
      [1, "col-12", "col-md-6", "d-flex", "flex-column", "gap-4"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "200",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        1,
        "icon-wrapper",
        "me-3",
        "d-flex",
        "justify-content-center",
        "align-items-center",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border.png",
        "alt",
        "Icone Facturer",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "fw-semibold", "mb-2"],
      [1, "mb-0", "text-muted"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "400",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
        "second-card",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border2.png",
        "alt",
        "Icone Patrimoine",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "600",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border3.png",
        "alt",
        "Icone Risques",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      ["id", "targetSection", 1, "container", "py-5"],
      ["data-aos", "fade-down", 1, "text-center", "mb-5"],
      [1, "section-title"],
      [1, "highlighted"],
      [1, "row", "align-items-start"],
      [
        "data-aos",
        "fade-right",
        "data-aos-delay",
        "200",
        1,
        "col-md-5",
        "section-content",
      ],
      ["data-aos", "fade-up", "data-aos-delay", "300", 1, "flex-content"],
      [1, "fas", "fa-check-circle", "icon-red"],
      ["data-aos", "fade-up", "data-aos-delay", "400", 1, "flex-content"],
      ["data-aos", "fade-up", "data-aos-delay", "500", 1, "flex-content"],
      [
        "data-aos",
        "zoom-in",
        "data-aos-delay",
        "600",
        1,
        "col-md-2",
        "text-center",
        "d-flex",
        "flex-column",
        "align-items-center",
        "mb-4",
        "mb-md-0",
      ],
      [1, "vertical-divider", "mx-auto", "d-none", "d-md-block", "mt-3"],
      [
        "data-aos",
        "fade-left",
        "data-aos-delay",
        "200",
        1,
        "col-md-5",
        "section-content",
        "d-flex",
      ],
      [1, "container", "my-5"],
      [1, "rounded-4", "bg-custom--primary", "text-white", "px-4"],
      [
        "data-aos",
        "fade-left",
        "data-aos-delay",
        "200",
        1,
        "col-md-6",
        "d-none",
        "d-md-flex",
        "justify-content-center",
        "align-items-end",
      ],
      [
        "src",
        "../../assets/img/image/profil/h9_footer_banner_img 1 1.webp",
        "alt",
        "Personne souriante",
        1,
        "img-fluid",
        "custom-image-size",
        2,
        "z-index",
        "2",
        "position",
        "relative",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-delay",
        "400",
        1,
        "col-12",
        "col-md-6",
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center",
        "align-items-md-start",
        "text-center",
        "text-md-start",
        "mt-4",
        "mt-md-0",
      ],
      [1, "fw-bold", "mb-4"],
      [1, "bg-danger", "text-white", "px-2", "py-1", "rounded-2"],
      ["data-aos", "fade-up", "data-aos-delay", "600", 1, "mb-4"],
      [
        "href",
        "#",
        "data-aos",
        "zoom-in",
        "data-aos-delay",
        "800",
        1,
        "btn",
        "btn-danger",
        "btn-sm",
        "px-3",
        "py-2",
      ],
      [1, "fas", "fa-arrow-right"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1"),
        n(4, "Soci\xE9t\xE9 de Management Patrimoniale"),
        e(),
        t(5, "p", 3),
        n(6, "Accueil > Soci\xE9t\xE9 de Management Patrimoniale"),
        e()()()(),
        t(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "div", 6),
        l(11, "app-sidebar"),
        e(),
        t(12, "div", 7)(13, "div", 8)(14, "h2", 9),
        n(15, " Qu\u2019est-ce qu\u2019une Soci\xE9t\xE9 de"),
        l(16, "br"),
        t(17, "span", 10),
        n(18, " Management Patrimoniale\u202F?"),
        e()(),
        t(19, "div")(20, "p"),
        n(
          21,
          "Face \xE0 une fiscalit\xE9 lourde et des revenus souvent sous-optimis\xE9s, les dirigeants d\u2019entreprise cherchent des solutions innovantes pour structurer leurs finances. La Soci\xE9t\xE9 de Management Patrimoniale r\xE9pond \xE0 ces enjeux en combinant optimisation fiscale et valorisation du patrimoine."
        ),
        e(),
        t(22, "p"),
        n(
          23,
          "La Soci\xE9t\xE9 de Management Patrimoniale permet au dirigeant d\u2019entreprise de facturer ses prestations \xE0 sa soci\xE9t\xE9 d\u2019exploitation tout en optimisant la gestion et la valorisation de son patrimoine personnel."
        ),
        e(),
        t(24, "p"),
        n(
          25,
          "En \xE9vitant les modes de r\xE9mun\xE9ration classiques, souvent tax\xE9s jusqu\u2019\xE0 55\u202F% (imp\xF4ts et cotisations sociales incluses), elle offre une solution strat\xE9gique pour :"
        ),
        e()(),
        t(26, "div", 11)(27, "div", 12)(28, "button", 13),
        O("click", function () {
          return s.scrollToSection("targetSection");
        }),
        n(29, "D\xE9couvrez ce que vous gagnerez avec nous "),
        l(30, "i", 14),
        e()()(),
        t(31, "div", 15),
        l(32, "img", 16),
        e(),
        t(33, "div", 17)(34, "div", 18),
        l(35, "img", 19),
        e(),
        t(36, "div", 20)(37, "p"),
        n(
          38,
          "En \xE9vitant les modes de r\xE9mun\xE9ration classiques, souvent tax\xE9s jusqu\u2019\xE0 55\u202F% (imp\xF4ts et cotisations sociales incluses), elle offre une solution strat\xE9gique pour :"
        ),
        e(),
        t(39, "div", 21)(40, "div", 22),
        l(41, "i", 23),
        t(42, "p", 24)(43, "strong", 25),
        n(44, "Optimiser la r\xE9mun\xE9ration"),
        e(),
        n(45, " du dirigeant par des management fees d\xE9ductibles."),
        e()(),
        t(46, "div", 26),
        l(47, "i", 23),
        t(48, "p", 24)(49, "strong", 25),
        n(50, "Accro\xEEtre la richesse patrimoniale"),
        e(),
        n(
          51,
          ", en r\xE9investissant ces revenus dans des actifs durables (immobilier, placements financiers, etc.)."
        ),
        e()()(),
        t(52, "div")(53, "p"),
        n(
          54,
          "En d\u2019autres termes, cette structure vous permet de \u201Csortir votre pion de l\u2019\xE9chiquier\u201D de l\u2019activit\xE9 commerciale pour l\u2019utiliser dans des projets personnels ou patrimoniaux.\xA0"
        ),
        e()()()()()()()()(),
        t(55, "section", 27)(56, "div", 28)(57, "div", 2)(58, "div", 29)(
          59,
          "div",
          30
        )(60, "div", 31)(
          61,
          "div",
          32
        )(62, "h1"),
        n(63, "Les Besoins sp\xE9cifiques des Soci\xE9t\xE9s de Management"),
        l(64, "br"),
        t(65, "span", 33),
        n(66, "Patrimoniales"),
        e()()(),
        l(67, "div", 34),
        t(68, "div", 35)(69, "div", 36)(70, "div", 37)(71, "div", 38),
        l(72, "img", 39),
        e()(),
        t(73, "div", 40)(74, "h2"),
        n(75, "Planification fiscale continue"),
        e(),
        t(76, "ul")(77, "li")(78, "strong"),
        n(79, "Fiscale proactive\u202F:"),
        e(),
        n(
          80,
          " Int\xE9gration des ajustements n\xE9cessaires pour s\u2019adapter aux \xE9volutions l\xE9gales et \xE9conomiques."
        ),
        e(),
        t(81, "li")(82, "strong"),
        n(83, "Maximisation des d\xE9ductions fiscales\u202F:"),
        e(),
        n(
          84,
          " R\xE9duction strat\xE9gique de la base imposable pour pr\xE9server la tr\xE9sorerie."
        ),
        e()()()(),
        t(85, "div", 41)(86, "div", 37)(87, "div", 42),
        l(88, "img", 43),
        e()(),
        t(89, "div", 40)(90, "h2"),
        n(
          91,
          "Surveillance de la rentabilit\xE9 des investissements patrimoniaux"
        ),
        e(),
        t(92, "ul")(93, "li")(94, "strong"),
        n(95, "\xC9valuation continue\u202F:"),
        e(),
        n(
          96,
          " Suivi des performances des actifs patrimoniaux pour en maximiser le rendement."
        ),
        e(),
        t(97, "li")(98, "strong"),
        n(99, "Tableaux de bord financiers\u202F:"),
        e(),
        n(
          100,
          " Analyse en temps r\xE9el pour identifier les opportunit\xE9s de diversification."
        ),
        e()()()(),
        t(101, "div", 44)(102, "div", 37)(103, "div", 42),
        l(104, "img", 45),
        e()(),
        t(105, "div", 40)(106, "h2"),
        n(
          107,
          "Documentation des management fees pour garantir leur d\xE9ductibilit\xE9"
        ),
        e(),
        t(108, "ul")(109, "li")(110, "strong"),
        n(111, "Justification des prestations\u202F:"),
        e(),
        n(
          112,
          " Contrats, rapports et factures claires d\xE9montrant l\u2019utilit\xE9 des services rendus."
        ),
        e(),
        t(113, "li")(114, "strong"),
        n(115, "Conformit\xE9 fiscale\u202F:"),
        e(),
        n(
          116,
          " Conservation rigoureuse des documents pour les contr\xF4les \xE9ventuels."
        ),
        e()()()(),
        t(117, "div", 44)(118, "div", 37)(119, "div", 42),
        l(120, "img", 46),
        e()(),
        t(121, "div", 40)(122, "h2"),
        n(123, "Une gestion comptable et financi\xE8re rigoureuse"),
        e(),
        t(124, "ul")(125, "li")(126, "strong"),
        n(127, "Bilans interm\xE9diaires\u202F:"),
        e(),
        n(
          128,
          " Suivi pr\xE9cis de l\u2019\xE9volution financi\xE8re pour justifier la solidit\xE9 de la structure."
        ),
        e(),
        t(129, "li")(130, "strong"),
        n(131, "Conformit\xE9 fiscale\u202F:"),
        e(),
        n(
          132,
          " Conservation rigoureuse des documents pour r\xE9pondre aux contr\xF4les."
        ),
        e()()()()()()(),
        t(133, "div", 47)(134, "div", 48),
        l(135, "img", 49),
        e()()()()()(),
        t(136, "section", 50)(137, "div", 2)(138, "div", 29)(139, "div", 51)(
          140,
          "h2",
          52
        ),
        n(141, " Les fonctions cl\xE9s de la"),
        l(142, "br"),
        n(143, " Soci\xE9t\xE9 de Management "),
        t(144, "span", 53),
        n(145, "Patrimoniale"),
        e()(),
        t(146, "p", 54),
        n(147, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        e()(),
        t(148, "div", 55)(149, "div", 56)(150, "div", 57),
        l(151, "img", 58),
        e(),
        t(152, "div")(153, "h5", 59),
        n(
          154,
          "Facturer des prestations \xE0 la soci\xE9t\xE9 d\u2019exploitation"
        ),
        e(),
        t(155, "p", 60),
        n(
          156,
          "Services de gestion ou de conseil strat\xE9gique factur\xE9s sous forme de management fees d\xE9ductibles."
        ),
        e()()(),
        t(157, "div", 61)(158, "div", 57),
        l(159, "img", 62),
        e(),
        t(160, "div")(161, "h5", 59),
        n(162, "Accro\xEEtre et prot\xE9ger le patrimoine personnel"),
        e(),
        t(163, "p", 60),
        n(
          164,
          "Revenus r\xE9investis dans des projets immobiliers ou financiers \xE0 long terme."
        ),
        e()()(),
        t(165, "div", 63)(166, "div", 57),
        l(167, "img", 64),
        e(),
        t(168, "div")(169, "h5", 59),
        n(170, "S\xE9parer les risques"),
        e(),
        t(171, "p", 60),
        n(
          172,
          "Protection du patrimoine personnel contre les al\xE9as de l\u2019activit\xE9 professionnelle."
        ),
        e()()()()()()(),
        l(173, "app-timeline-patrimoniale"),
        t(174, "div", 65)(175, "div", 66)(176, "h1", 67),
        n(177, " Pourquoi choisir "),
        t(178, "span", 68),
        n(179, "MFINANCES"),
        e(),
        n(180, " pour votre"),
        l(181, "br"),
        n(182, " Soci\xE9t\xE9 de Management Patrimoniale ? "),
        e()(),
        t(183, "div", 69)(184, "div", 70)(185, "h5"),
        n(186, "Une expertise adapt\xE9e \xE0 vos besoins"),
        e(),
        t(187, "ul")(188, "li", 71),
        l(189, "i", 72),
        t(190, "span"),
        n(191, "Structuration fiscale et comptable."),
        e()(),
        t(192, "li", 73),
        l(193, "i", 72),
        t(194, "span"),
        n(195, "Gestion patrimoniale int\xE9gr\xE9e."),
        e()(),
        t(196, "li", 74),
        l(197, "i", 72),
        t(198, "span"),
        n(199, "Planification successorale sur mesure."),
        e()()()(),
        t(200, "div", 75),
        l(201, "div", 76),
        e(),
        t(202, "div", 77)(203, "div")(204, "h5"),
        n(205, "Une solution cl\xE9 en main"),
        e(),
        t(206, "ul")(207, "li", 71),
        l(208, "i", 72),
        t(209, "span"),
        n(
          210,
          "Cr\xE9ation et gestion de votre Soci\xE9t\xE9 de Management Patrimoniale."
        ),
        e()(),
        t(211, "li", 73),
        l(212, "i", 72),
        t(213, "span"),
        n(214, "Mise en place de tableaux de bord personnalis\xE9s."),
        e()(),
        t(215, "li", 74),
        l(216, "i", 72),
        t(217, "span"),
        n(218, "Accompagnement fiscal et patrimonial \xE0 chaque \xE9tape."),
        e()()()()()()(),
        t(219, "section", 78)(220, "div", 79)(221, "div", 29)(222, "div", 80),
        l(223, "img", 81),
        e(),
        t(224, "div", 82)(225, "h2", 83),
        n(
          226,
          " Transformez vos revenus professionnels en patrimoine durable gr\xE2ce \xE0 une Soci\xE9t\xE9 de "
        ),
        l(227, "br"),
        t(228, "span", 84),
        n(229, "Management Patrimoniale"),
        e(),
        n(230, ". "),
        e(),
        t(231, "p", 85),
        n(
          232,
          " Contactez MFINANCES d\xE8s aujourd\u2019hui pour b\xE9n\xE9ficier d\u2019un accompagnement sur mesure et d\xE9couvrir comment r\xE9duire vos charges fiscales d\xE8s maintenant. "
        ),
        e(),
        t(233, "a", 86),
        n(234, " Contactez-nous "),
        l(235, "i", 87),
        e()()()()(),
        l(236, "app-recommandation-profil"));
    },
    dependencies: [Dt, oe, se],
    styles: [
      ".service-faq[_ngcontent-%COMP%]{background-color:#25335b}",
      `.custom-card[_ngcontent-%COMP%] {
  border: 2px solid #e6e9f1;
  border-radius: 12px;
  background-color: #f8f9fb;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: transform 0.1s ease, box-shadow 0.1s ease, border-color 0.1s ease;
}

.custom-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-10px); 

  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); 

  border-color: #c3c9d9; 

}


    .icon-wrapper[_ngcontent-%COMP%] {
        min-width: 80px;
        min-height: 80px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
        max-width: 100%;
        height: auto;
    }

    .custom-image-size[_ngcontent-%COMP%] {
    width: 70%; 

    height: auto; 

    }
    .second-card[_ngcontent-%COMP%] {
        position: relative;
    }

    @media (min-width: 992px) {
        .second-card[_ngcontent-%COMP%] {
            left: -64px;
        }
    }

    @media (max-width: 991px) {
        .second-card[_ngcontent-%COMP%] {
            left: 0;
        }
    }

    .color-red[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {
        color: #FF3333;
    }

    .bg-custom--primary[_ngcontent-%COMP%] {
        background-color: #25335b;
    }

    .bg-custom--primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
        color: white;
    }

    .rectangle-red[_ngcontent-%COMP%] {
        background-color: #FF3333;
        border-radius: 8px;
        padding: 6px;
    }

    .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
        color: white;
        font-size: 29px !important;
        line-height: 48px;
        padding-bottom: 18px;
    }

    .highlighted[_ngcontent-%COMP%] {
        background-color: #ff4136;
        color: #fff;
        padding: 0.2rem 0.5rem;
        border-radius: 0.25rem;
    }

    .vertical-divider[_ngcontent-%COMP%] {
        border-left: 1px solid #d1d1d1;
        height: 100%;
    }

    .icon-red[_ngcontent-%COMP%] {
        color: #ff4136;
        font-size: 1.5rem;
        margin-right: 1rem; 
    }

    .section-title[_ngcontent-%COMP%] {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    .flex-content[_ngcontent-%COMP%] {
        display: flex;
        align-items: flex-start; 
        margin-bottom: 1rem;
    }

    .section-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
        list-style: none;
        padding: 0;
    }

    .header[_ngcontent-%COMP%] {
        background: url('../../assets/img/bg/bg_about.webp') no-repeat center center/cover;
        min-height: 400px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-overlay[_ngcontent-%COMP%] {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        color: white;
    }

    

    @media (max-width: 767px) {
        .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
            font-size: 24px;
            line-height: 36px;
        }

        .custom-card[_ngcontent-%COMP%] {
            padding: 15px;
        }

        .icon-wrapper[_ngcontent-%COMP%] {
            min-width: 60px;
            min-height: 60px;
        }

        .works-items[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
            font-size: 1.2rem;
        }

        .section-title[_ngcontent-%COMP%] {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 575px) {
        .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
            font-size: 20px;
            line-height: 32px;
        }
    }`,
    ],
  });
};
var Nt = class a {
  constructor(o) {
    this.metaService = o;
  }
  ngOnInit() {
    this.metaService.setSocieteMoyenPageMeta();
  }
  scrollToSection(o) {
    let i = document.getElementById(o);
    i && i.scrollIntoView({ behavior: "smooth" });
  }
  static ɵfac = function (i) {
    return new (i || a)(I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-profil-societe-moyen"]],
    decls: 609,
    vars: 0,
    consts: [
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
      [1, "text-white"],
      [1, "service-single", "pt-120", "pb-130", 2, "padding", "64px"],
      [1, "row"],
      [1, "col-lg-4"],
      [1, "col-lg-8"],
      [1, "single-content"],
      [1, "display-5", "fw-bold"],
      [1, "bg-custom--primary", "text-white", "px-2", "rounded"],
      [1, "button-container"],
      [1, "home2-btn", "mb-4"],
      [1, "btn-red", 3, "click"],
      [1, "fa-solid", "fa-arrow-right"],
      [1, "defis", "row", "align-items-center", "mt-10", "mb-4"],
      [1, "col-md-4", "custo"],
      [
        "src",
        "../../assets/img/webp/societe_moyen1.webp",
        "alt",
        "D\xE9fis ASBL",
        1,
        "img-fluid",
        2,
        "border-radius",
        "16px",
      ],
      [1, "col-md-8", "mt-30"],
      [1, "list-unstyled", "pl-25"],
      [
        1,
        "fa",
        "fa-star",
        2,
        "font-size",
        "14px",
        "color",
        "#FF3333",
        "margin-right",
        "6px",
      ],
      [1, "defis", "row", "align-items-center", "mt-10"],
      [
        "src",
        "../../assets/img/webp/societe_moyen2.webp",
        "alt",
        "D\xE9fis ASBL",
        1,
        "img-fluid",
        2,
        "border-radius",
        "16px",
      ],
      [1, "bg-custom--primary"],
      [1, "works", "sec-padding"],
      [1, "row", "align-items-center"],
      [1, "col-md-12", "col-lg-6"],
      [1, "how-in-work-sec"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "800",
        1,
        "hadding",
        "hadding-p",
      ],
      [1, "rectangle-red"],
      [1, "space20"],
      [1, "works-items"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1000",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "me-3"],
      [1, "work-icon", "img-border"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-1.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [1, "hadding", "hadding-p"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1200",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "work-icon"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-2.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1400",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [
        "src",
        "../../assets/img/image/profil/works-icon-3.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "flip-right",
        "data-aos-duration",
        "1000",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [1, "works-img", "space-sm-50", "img-border"],
      ["src", "../../assets/img/webp/46.webp", "alt", "", 1, "img-fluid"],
      [1, "practical-section"],
      [1, "row", "mb-5"],
      [1, "col-12"],
      [1, "text-center", "mb-4"],
      [1, "bg-custom--primary", "text-white", "px-3", "py-2", "rounded"],
      [1, "row", "justify-content-center", "g-4"],
      [1, "col-md-6"],
      [1, "practical-card"],
      [1, "role-icon"],
      [1, "fas", "fa-users"],
      [1, "h4", "mb-3"],
      [1, "text-muted"],
      [1, "fas", "fa-user-tie"],
      [1, "bottom-note"],
      [1, "mb-0"],
      [1, "fas", "fa-hand-point-right", "pointer-icon"],
      [
        "src",
        "../../assets/img/image/profil/about-vision-icon-2.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [1, "mutualisation-section"],
      [1, "section-title-container"],
      [1, "section-title"],
      [1, "section-subtitle"],
      [1, "card-container"],
      [1, "row", "g-4"],
      [1, "col-md-4", "card-animation"],
      [1, "mutualisation-card"],
      [1, "shine-effect"],
      [1, "icon-container"],
      [1, "icon-circle"],
      [1, "fas", "fa-building"],
      [1, "card-title"],
      [1, "feature-list"],
      [1, "fas", "fa-check-circle"],
      [1, "fas", "fa-laptop-code"],
      [1, "fas", "fa-handshake"],
      ["id", "targetSection", 1, "about", "sec-padding"],
      ["data-aos", "fade-right", "data-aos-duration", "800", 1, "col-md-6"],
      [1, "about-img", "img-border"],
      ["src", "../../assets/img/webp/14.webp", "alt", ""],
      [
        "data-aos",
        "fade-left",
        "data-aos-duration",
        "800",
        1,
        "col-md-6",
        "space-sm-30",
      ],
      [1, "about-haddings"],
      [1, "check-list-all", 2, "padding", "1px 0 !important"],
      [1, "chek-list"],
      ["src", "../../assets/img/icons/checkfill.png", "alt", ""],
      [1, "home2-btn", "mt-4"],
      ["href", "/contact"],
      [1, "py-5"],
      [1, "case-study-section"],
      [1, "case-header"],
      [1, "case-title"],
      [1, "case-subtitle"],
      [1, "timeline-wrapper"],
      [1, "timeline-line"],
      [1, "timeline-dot", "top"],
      [1, "timeline-dot", "bottom"],
      [1, "timeline-item"],
      [1, "timeline-content", "left"],
      [1, "timeline-card"],
      [1, "card-icon"],
      [1, "fas", "fa-hospital-user"],
      [1, "timeline-content", "right"],
      [1, "fas", "fa-exclamation-triangle"],
      [1, "card-list"],
      [1, "fas", "fa-circle"],
      [1, "fas", "fa-lightbulb"],
      [1, "highlight"],
      [1, "results-card"],
      [1, "results-title"],
      [1, "fas", "fa-trophy"],
      [1, "results-list"],
      [1, "fas", "fa-chart-line"],
      ["data-aos", "fade-right", 1, "col-8", "col-md-6", "mb-4"],
      [1, "display-5", "fw-bold", 2, "font-size", "40px !important"],
      [1, "bg-danger", "text-white", "px-2", "rounded"],
      [1, "col-12", "col-md-6", "d-flex", "flex-column", "gap-4"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "200",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        1,
        "icon-wrapper",
        "me-3",
        "d-flex",
        "justify-content-center",
        "align-items-center",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border.png",
        "alt",
        "Icone Facturer",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "fw-semibold", "mb-2"],
      [1, "mb-0", "text-muted"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "400",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
        "second-card",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border2.png",
        "alt",
        "Icone Patrimoine",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "600",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border3.png",
        "alt",
        "Icone Risques",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "service-faq", "sec-padding"],
      [1, "col-md-6", "m-auto", "text-center"],
      [1, "hadding"],
      [1, "space40"],
      ["id", "accordionExample", 1, "accordion"],
      [1, "accordion-item"],
      ["id", "headingOne", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseOne",
        "aria-expanded",
        "true",
        "aria-controls",
        "collapseOne",
        1,
        "accordion-button",
      ],
      [
        "id",
        "collapseOne",
        "aria-labelledby",
        "headingOne",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
        "show",
      ],
      [1, "accordion-body"],
      ["id", "headingTwo", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseTwo",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseTwo",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseTwo",
        "aria-labelledby",
        "headingTwo",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingThree", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseThree",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseThree",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseThree",
        "aria-labelledby",
        "headingThree",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingFour", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseFour",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseFour",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseFour",
        "aria-labelledby",
        "headingFour",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingFive", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseFive",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseFive",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseFive",
        "aria-labelledby",
        "headingFive",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingSix", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseSix",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseSix",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseSix",
        "aria-labelledby",
        "headingSix",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      [1, "container", "my-5"],
      [1, "rounded-4", "bg-custom--primary", "text-white", "px-4"],
      [
        "data-aos",
        "fade-left",
        "data-aos-delay",
        "200",
        1,
        "col-md-6",
        "d-none",
        "d-md-flex",
        "justify-content-center",
        "align-items-end",
      ],
      [
        "src",
        "../../assets/img/image/profil/h9_footer_banner_img 1 1.webp",
        "alt",
        "Personne souriante",
        1,
        "img-fluid",
        "custom-image-size",
        2,
        "z-index",
        "2",
        "position",
        "relative",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-delay",
        "400",
        1,
        "col-12",
        "col-md-6",
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center",
        "align-items-md-start",
        "text-center",
        "text-md-start",
        "mt-4",
        "mt-md-0",
      ],
      [1, "fw-bold", "mb-4"],
      [1, "bg-danger", "text-white", "px-2", "py-1", "rounded-2"],
      ["data-aos", "fade-up", "data-aos-delay", "600", 1, "mb-4"],
      [
        "href",
        "#",
        "data-aos",
        "zoom-in",
        "data-aos-delay",
        "800",
        1,
        "btn",
        "btn-danger",
        "btn-sm",
        "px-3",
        "py-2",
      ],
      [1, "fas", "fa-arrow-right"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1"),
        n(4, "Soci\xE9t\xE9s de Moyens"),
        e(),
        t(5, "p", 3),
        n(6, "Accueil > Soci\xE9t\xE9s de Moyens"),
        e()()()(),
        t(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "div", 6),
        l(11, "app-sidebar"),
        e(),
        t(12, "div", 7)(13, "div", 8)(14, "h2", 9),
        n(15, " Qu\u2019est-ce qu\u2019une "),
        l(16, "br"),
        t(17, "span", 10),
        n(18, " soci\xE9t\xE9 de moyens\u202F?"),
        e()(),
        t(19, "div")(20, "p"),
        n(
          21,
          "Une soci\xE9t\xE9 de moyens est une structure juridique con\xE7ue pour mutualiser certains moyens mat\xE9riels, financiers ou humains entre plusieurs professionnels, sans que ceux-ci n\u2019exercent directement leur activit\xE9 au sein de cette structure. "
        ),
        e()(),
        t(22, "div", 11)(23, "div", 12)(24, "button", 13),
        O("click", function () {
          return s.scrollToSection("targetSection");
        }),
        n(25, "D\xE9couvrez ce que vous gagnerez avec nous "),
        l(26, "i", 14),
        e()()(),
        t(27, "div", 15)(28, "h1"),
        n(29, "Les avantages cl\xE9s d\u2019une soci\xE9t\xE9 de moyens : "),
        e(),
        t(30, "div", 16),
        l(31, "img", 17),
        e(),
        t(32, "div", 18)(33, "ul", 19)(34, "li"),
        l(35, "i", 20),
        t(36, "strong"),
        n(37, "R\xE9duction des co\xFBts : "),
        e(),
        l(38, "br"),
        n(
          39,
          " Partage des frais communs et n\xE9gociations group\xE9es avec les fournisseurs. "
        ),
        e(),
        t(40, "li"),
        l(41, "i", 20),
        t(42, "strong"),
        n(43, "Autonomie professionnelle pr\xE9serv\xE9e : "),
        e(),
        l(44, "br"),
        n(45, " Chaque membre reste ind\xE9pendant dans son activit\xE9. "),
        e(),
        t(46, "li"),
        l(47, "i", 20),
        t(48, "strong"),
        n(49, "Gestion structur\xE9e et transparente :"),
        e(),
        l(50, "br"),
        n(
          51,
          " Des r\xE8gles claires pour \xE9viter les tensions entre associ\xE9s. "
        ),
        e()()()(),
        t(52, "div", 21)(53, "h1"),
        n(
          54,
          "Fonctionnement et objectifs d\u2019une soci\xE9t\xE9 de moyens "
        ),
        e(),
        t(55, "div", 18)(56, "strong"),
        n(57, "Comment cela fonctionne ? "),
        e(),
        l(58, "p"),
        t(59, "ul", 19)(60, "li"),
        l(61, "i", 20),
        t(62, "strong"),
        n(63, "Mutualisation des moyens mat\xE9riels et financiers : "),
        e(),
        l(64, "br"),
        n(
          65,
          " Mise en commun des locaux, \xE9quipements, et abonnements n\xE9cessaires \xE0 l\u2019activit\xE9 professionnelle. Partage des frais communs comme les charges d\u2019\xE9lectricit\xE9, les fournitures de bureau ou les frais d\u2019entretien. "
        ),
        e(),
        t(66, "li"),
        l(67, "i", 20),
        t(68, "strong"),
        n(69, "R\xE9duction des co\xFBts :"),
        e(),
        l(70, "br"),
        n(
          71,
          " En centralisant les achats, la SCM b\xE9n\xE9ficie d\u2019une puissance de n\xE9gociation accrue aupr\xE8s des fournisseurs, obtenant ainsi des tarifs pr\xE9f\xE9rentiels pour ses adh\xE9rents. "
        ),
        e(),
        t(72, "li"),
        l(73, "i", 20),
        t(74, "strong"),
        n(75, "Facturation aux adh\xE9rents : "),
        e(),
        l(76, "br"),
        n(
          77,
          " Les frais engag\xE9s par la SCM sont r\xE9partis \xE9quitablement entre les membres. Cette contribution constitue la principale source de revenus de la soci\xE9t\xE9 de moyens. "
        ),
        e()()(),
        t(78, "div", 16),
        l(79, "img", 22),
        e()()()()()()(),
        t(80, "section", 23)(81, "div", 24)(82, "div", 2)(83, "div", 25)(
          84,
          "div",
          26
        )(85, "div", 27)(
          86,
          "div",
          28
        )(87, "h1"),
        n(88, "Besoins sp\xE9cifiques des "),
        l(89, "br"),
        t(90, "span", 29),
        n(91, " Soci\xE9t\xE9s de Moyens "),
        e()()(),
        l(92, "div", 30),
        t(93, "div", 31)(94, "div", 32)(95, "div", 33)(96, "div", 34),
        l(97, "img", 35),
        e()(),
        t(98, "div", 36)(99, "h2"),
        n(100, "R\xE9partition \xE9quitable des charges "),
        e(),
        t(101, "ul")(102, "li"),
        n(
          103,
          "Mise en place d\u2019un syst\xE8me comptable permettant de r\xE9partir les co\xFBts en fonction de l\u2019usage r\xE9el des ressources par chaque membre. "
        ),
        e(),
        t(104, "li"),
        n(
          105,
          "Transparence des flux financiers pour \xE9viter les tensions entre associ\xE9s. "
        ),
        e()()()(),
        t(106, "div", 37)(107, "div", 33)(108, "div", 38),
        l(109, "img", 39),
        e()(),
        t(110, "div", 36)(111, "h2"),
        n(112, "Gestion comptable et fiscale rigoureuse "),
        e(),
        t(113, "ul")(114, "li"),
        n(115, "Suivi pr\xE9cis des d\xE9penses et des recettes. "),
        e(),
        t(116, "li"),
        n(
          117,
          "Respect des obligations fiscales et des d\xE9clarations sp\xE9cifiques \xE0 la SCM. "
        ),
        e(),
        t(118, "li"),
        n(
          119,
          "Pr\xE9paration des documents financiers n\xE9cessaires pour justifier la r\xE9partition des charges entre les membres. "
        ),
        e()()()(),
        t(120, "div", 40)(121, "div", 33)(122, "div", 38),
        l(123, "img", 41),
        e()(),
        t(124, "div", 36)(125, "h2"),
        n(
          126,
          "Planification des achats et n\xE9gociation avec les fournisseurs "
        ),
        e(),
        t(127, "ul")(128, "li"),
        n(
          129,
          "Centralisation des commandes pour b\xE9n\xE9ficier de remises importantes gr\xE2ce \xE0 des volumes d\u2019achat \xE9lev\xE9s. "
        ),
        e(),
        t(130, "li"),
        n(
          131,
          "Planification des achats pour anticiper les besoins des membres et \xE9viter des d\xE9penses impr\xE9vues. "
        ),
        e()()()()()()(),
        t(132, "div", 42)(133, "div", 43),
        l(134, "img", 44),
        e()()()()()(),
        t(135, "section", 45)(136, "div", 2)(137, "div", 46)(138, "div", 47)(
          139,
          "h2",
          48
        )(140, "span", 49),
        n(141, "Fonctionnement pratique"),
        e()()()(),
        t(142, "div", 50)(143, "div", 51)(144, "div", 52)(145, "div", 53),
        l(146, "i", 54),
        e(),
        t(147, "h3", 55),
        n(148, "Les actionnaires"),
        e(),
        t(149, "p", 56)(150, "strong"),
        n(151, "Les membres associ\xE9s :"),
        e(),
        l(152, "br"),
        n(153, " \u2022 Apportent un capital \xE0 la soci\xE9t\xE9"),
        l(154, "br"),
        n(155, " \u2022 B\xE9n\xE9ficient des ressources mutualis\xE9es"),
        l(156, "br"),
        n(
          157,
          " \u2022 Ont une responsabilit\xE9 financi\xE8re limit\xE9e au montant de leur apport "
        ),
        e()()(),
        t(158, "div", 51)(159, "div", 52)(160, "div", 53),
        l(161, "i", 57),
        e(),
        t(162, "h3", 55),
        n(163, "Les administrateurs"),
        e(),
        t(164, "p", 56)(165, "strong"),
        n(166, "Leur r\xF4le :"),
        e(),
        l(167, "br"),
        n(168, " \u2022 G\xE8rent les ressources partag\xE9es selon le mandat"),
        l(169, "br"),
        n(170, " \u2022 Sont responsables de l'ex\xE9cution des d\xE9cisions"),
        l(171, "br"),
        n(172, " \u2022 Assurent une gestion rigoureuse "),
        e()()(),
        t(173, "div", 58)(174, "p", 59),
        l(175, "i", 60),
        n(
          176,
          " Le mod\xE8le administrateur garantit une gestion efficace des ressources, tout en prot\xE9geant les membres des risques financiers excessifs. "
        ),
        e()()()()(),
        t(177, "section", 23)(178, "div", 24)(179, "div", 2)(180, "div", 25)(
          181,
          "div",
          26
        )(182, "div", 27)(
          183,
          "div",
          28
        )(184, "h1"),
        n(185, "Fonctionnement et objectifs "),
        l(186, "br"),
        t(187, "span", 29),
        n(188, " d'une Soci\xE9t\xE9s de Moyens "),
        e()()(),
        l(189, "div", 30),
        t(190, "div", 31)(191, "div", 32)(192, "div", 33)(193, "div", 34),
        l(194, "img", 35),
        e()(),
        t(195, "div", 36)(196, "h2"),
        n(197, "Mutualisation des moyens mat\xE9riels et financiers "),
        e(),
        t(198, "ul")(199, "li"),
        n(
          200,
          "Mise en commun des locaux, \xE9quipements, abonnements n\xE9cessaires \xE0 l\u2019activit\xE9 professionnelle. "
        ),
        e(),
        t(201, "li"),
        n(
          202,
          "Partage des frais communs (loyer, \xE9lectricit\xE9, fournitures). "
        ),
        e()()()(),
        t(203, "div", 37)(204, "div", 33)(205, "div", 38),
        l(206, "img", 39),
        e()(),
        t(207, "div", 36)(208, "h2"),
        n(209, "R\xE9duction des co\xFBts"),
        e(),
        t(210, "ul")(211, "li"),
        n(
          212,
          "En centralisant les achats, la soci\xE9t\xE9 de moyens n\xE9gocie des tarifs pr\xE9f\xE9rentiels aupr\xE8s des fournisseurs"
        ),
        e()()()(),
        t(213, "div", 40)(214, "div", 33)(215, "div", 38),
        l(216, "img", 41),
        e()(),
        t(217, "div", 36)(218, "h2"),
        n(219, "Gestion transparente des charges communes"),
        e(),
        t(220, "ul")(221, "li"),
        n(
          222,
          "R\xE9partition \xE9quitable des frais entre les membres, d\xE9finie selon des r\xE8gles pr\xE9cises. "
        ),
        e()()()(),
        t(223, "div", 40)(224, "div", 33)(225, "div", 38),
        l(226, "img", 61),
        e()(),
        t(227, "div", 36)(228, "h2"),
        n(229, "Cash Collecting : Gestion des cotisations des membres "),
        e(),
        t(230, "ul")(231, "li"),
        n(
          232,
          "Suivi des paiements des membres : Garantir que chaque adh\xE9rent contribue \xE9quitablement aux frais communs. "
        ),
        e(),
        t(233, "li"),
        n(
          234,
          "Transparence et impartialit\xE9 : En externalisant cette t\xE2che \xE0 MFINANCES, les membres \xE9vitent les tensions potentielles li\xE9es \xE0 la collecte des contributions. "
        ),
        e(),
        t(235, "li"),
        n(
          236,
          "Suivi des paiements des membres : Garantir que chaque adh\xE9rent contribue \xE9quitablement aux frais communs. "
        ),
        e()()()()()()(),
        t(237, "div", 42)(238, "div", 43),
        l(239, "img", 44),
        e()()()()()(),
        t(240, "section", 62)(241, "div", 2)(242, "div", 63)(243, "h2", 64),
        n(244, "Exemples de mutualisation"),
        e(),
        t(245, "p", 65),
        n(
          246,
          "Optimisez vos ressources en partageant intelligemment vos moyens au sein de votre structure professionnelle"
        ),
        e()(),
        t(247, "div", 66)(248, "div", 67)(249, "div", 68)(250, "div", 69),
        l(251, "div", 70),
        t(252, "div", 71)(253, "div", 72),
        l(254, "i", 73),
        e()(),
        t(255, "h3", 74),
        n(256, "Locaux professionnels"),
        e(),
        t(257, "ul", 75)(258, "li"),
        l(259, "i", 76),
        n(260, "Loyer & charges locatives"),
        e(),
        t(261, "li"),
        l(262, "i", 76),
        n(263, "Services d'entretien premium"),
        e(),
        t(264, "li"),
        l(265, "i", 76),
        n(266, "Gestion climatisation & \xE9nergie"),
        e(),
        t(267, "li"),
        l(268, "i", 76),
        n(269, "Optimisation des espaces"),
        e()()()(),
        t(270, "div", 68)(271, "div", 69),
        l(272, "div", 70),
        t(273, "div", 71)(274, "div", 72),
        l(275, "i", 77),
        e()(),
        t(276, "h3", 74),
        n(277, "Mat\xE9riel et fournitures"),
        e(),
        t(278, "ul", 75)(279, "li"),
        l(280, "i", 76),
        n(281, "\xC9quipements high-tech"),
        e(),
        t(282, "li"),
        l(283, "i", 76),
        n(284, "Mobilier ergonomique"),
        e(),
        t(285, "li"),
        l(286, "i", 76),
        n(287, "Outils professionnels"),
        e(),
        t(288, "li"),
        l(289, "i", 76),
        n(290, "Gestion des stocks"),
        e()()()(),
        t(291, "div", 68)(292, "div", 69),
        l(293, "div", 70),
        t(294, "div", 71)(295, "div", 72),
        l(296, "i", 78),
        e()(),
        t(297, "h3", 74),
        n(298, "Services partag\xE9s"),
        e(),
        t(299, "ul", 75)(300, "li"),
        l(301, "i", 76),
        n(302, "Support administratif d\xE9di\xE9"),
        e(),
        t(303, "li"),
        l(304, "i", 76),
        n(305, "Solutions cloud innovantes"),
        e(),
        t(306, "li"),
        l(307, "i", 76),
        n(308, "Services digitaux avanc\xE9s"),
        e(),
        t(309, "li"),
        l(310, "i", 76),
        n(311, "Secr\xE9tariat personnalis\xE9"),
        e()()()()()()()(),
        t(312, "section")(313, "div", 79)(314, "div", 2)(315, "div", 25)(
          316,
          "div",
          80
        )(317, "div", 81),
        l(318, "img", 82),
        e()(),
        t(319, "div", 83)(320, "div", 84)(321, "div", 36)(322, "h3"),
        n(323, "Comment MFINANCES peut vous aider\u202F?"),
        e()(),
        t(324, "div", 85)(325, "div", 5)(326, "div")(327, "div", 86)(328, "p"),
        l(329, "img", 87),
        t(330, "strong"),
        n(331, "Gestion comptable et financi\xE8re sur mesure :"),
        e(),
        n(
          332,
          " Suivi d\xE9taill\xE9 des flux financiers pour une r\xE9partition transparente des charges entre les membres. Pr\xE9paration des bilans et des rapports financiers pour garantir la conformit\xE9 aux obligations l\xE9gales et fiscales."
        ),
        e()(),
        l(333, "div", 30),
        t(334, "div", 86)(335, "p"),
        l(336, "img", 87),
        t(337, "strong"),
        n(338, "Cash Collecting :"),
        e(),
        n(
          339,
          " Gestion des cotisations des membres de mani\xE8re automatis\xE9e et transparente. Relances r\xE9guli\xE8res en cas de retard de paiement, tout en pr\xE9servant la bonne entente entre les membres."
        ),
        e()(),
        l(340, "div", 30),
        t(341, "div", 86)(342, "p"),
        l(343, "img", 87),
        t(344, "strong"),
        n(
          345,
          "Accompagnement dans les n\xE9gociations avec les fournisseurs :"
        ),
        e(),
        n(
          346,
          " Centralisation des achats et gestion des n\xE9gociations pour obtenir des tarifs avantageux pour vos adh\xE9rents. Mise en place de tableaux de bord pour suivre les \xE9conomies r\xE9alis\xE9es."
        ),
        e()(),
        l(347, "div", 30),
        t(348, "div", 86)(349, "p"),
        l(350, "img", 87),
        t(351, "strong"),
        n(352, "R\xE9daction et optimisation des statuts :"),
        e(),
        n(
          353,
          " Assistance juridique pour r\xE9diger des statuts qui d\xE9finissent clairement les modalit\xE9s de fonctionnement de la SCM. Conseil strat\xE9gique pour \xE9viter les litiges entre membres et garantir une gestion efficace."
        ),
        e()(),
        l(354, "div", 30),
        t(355, "div", 86)(356, "p"),
        l(357, "img", 87),
        t(358, "strong"),
        n(359, "Outils de suivi des performances :"),
        e(),
        n(
          360,
          " Mise en place d\u2019indicateurs cl\xE9s pour suivre les \xE9conomies g\xE9n\xE9r\xE9es, les contributions des membres, et la rentabilit\xE9 des moyens partag\xE9s. Tableaux de bord personnalis\xE9s pour une vue d\u2019ensemble des finances de la SCM."
        ),
        e()()()()(),
        t(361, "div", 88)(362, "a", 89),
        n(363, "Contactez-nous "),
        l(364, "i", 14),
        e()()()()()()()(),
        t(365, "section", 90)(366, "section", 91)(367, "div", 2)(
          368,
          "div",
          92
        )(369, "h2", 93),
        n(370, "\xC9tude de cas : Cabinet m\xE9dical"),
        e(),
        t(371, "p", 94),
        n(
          372,
          "D\xE9couvrez comment MFINANCES a transform\xE9 la gestion d'un cabinet m\xE9dical partag\xE9"
        ),
        e()(),
        t(373, "div", 95),
        l(374, "div", 96)(375, "div", 97)(376, "div", 98),
        t(377, "div", 99)(378, "div", 100)(379, "div", 101)(380, "div", 102),
        l(381, "i", 103),
        e(),
        t(382, "h3", 74),
        n(383, "Situation initiale"),
        e(),
        t(384, "p"),
        n(
          385,
          "Un groupe de m\xE9decins partageant un cabinet cherchait \xE0 optimiser leur gestion commune."
        ),
        e()()()(),
        t(386, "div", 99)(387, "div", 104)(388, "div", 101)(389, "div", 102),
        l(390, "i", 105),
        e(),
        t(391, "h3", 74),
        n(392, "Les d\xE9fis rencontr\xE9s"),
        e(),
        t(393, "ul", 106)(394, "li"),
        l(395, "i", 107),
        t(396, "span"),
        n(
          397,
          "R\xE9partition \xE9quitable des charges locatives et des frais de personnel"
        ),
        e()(),
        t(398, "li"),
        l(399, "i", 107),
        t(400, "span"),
        n(401, "Centralisation des achats pour r\xE9duire les co\xFBts"),
        e()(),
        t(402, "li"),
        l(403, "i", 107),
        t(404, "span"),
        n(405, "Gestion des tensions li\xE9es aux contributions in\xE9gales"),
        e()()()()()(),
        t(406, "div", 99)(407, "div", 100)(408, "div", 101)(409, "div", 102),
        l(410, "i", 108),
        e(),
        t(411, "h3", 74),
        n(412, "Notre approche"),
        e(),
        t(413, "ul", 106)(414, "li"),
        l(415, "i", 76),
        t(416, "span"),
        n(
          417,
          "Mise en place d'une comptabilit\xE9 transparente bas\xE9e sur l'activit\xE9 r\xE9elle"
        ),
        e()(),
        t(418, "li"),
        l(419, "i", 76),
        t(420, "span"),
        n(421, "N\xE9gociation centralis\xE9e avec les fournisseurs ("),
        t(422, "span", 109),
        n(423, "-15%"),
        e(),
        n(424, " sur les consommables)"),
        e()(),
        t(425, "li"),
        l(426, "i", 76),
        t(427, "span"),
        n(428, "Syst\xE8me automatis\xE9 de gestion des cotisations"),
        e()()()()()(),
        t(429, "div", 99)(430, "div", 104)(431, "div", 110)(432, "div", 111),
        l(433, "i", 112),
        n(434, " R\xE9sultats obtenus "),
        e(),
        t(435, "ul", 113)(436, "li"),
        l(437, "i", 114),
        t(438, "span"),
        n(439, "R\xE9duction significative des charges d'exploitation"),
        e()(),
        t(440, "li"),
        l(441, "i", 78),
        t(442, "span"),
        n(443, "Collaboration harmonieuse entre les membres"),
        e()()()()()()()()()(),
        t(444, "section", 90)(445, "div", 2)(446, "div", 25)(447, "div", 115)(
          448,
          "h2",
          116
        ),
        n(449, " Pourquoi choisir MFINANCES pour votre "),
        l(450, "br"),
        t(451, "span", 117),
        n(452, " soci\xE9t\xE9 de moyens\u202F? "),
        e()()(),
        t(453, "div", 118)(454, "div", 119)(455, "div", 120),
        l(456, "img", 121),
        e(),
        t(457, "div")(458, "h5", 122),
        n(459, "Expertise sp\xE9cifique : "),
        e(),
        t(460, "p", 123),
        n(
          461,
          "Une exp\xE9rience approfondie dans la gestion des structures collaboratives. "
        ),
        e()()(),
        t(462, "div", 124)(463, "div", 120),
        l(464, "img", 125),
        e(),
        t(465, "div")(466, "h5", 122),
        n(467, "Solutions personnalis\xE9es :"),
        e(),
        t(468, "p", 123),
        n(469, "Des outils et services adapt\xE9s aux besoins de votre SCM. "),
        e()()(),
        t(470, "div", 126)(471, "div", 120),
        l(472, "img", 127),
        e(),
        t(473, "div")(474, "h5", 122),
        n(475, "Cash Collecting int\xE9gr\xE9 :"),
        e(),
        t(476, "p", 123),
        n(
          477,
          "Une gestion transparente et impartiale des cotisations, pour simplifier les relations entre membres. "
        ),
        e()()()()()()(),
        t(478, "section")(479, "div", 128)(480, "div", 2)(481, "div", 5)(
          482,
          "div",
          129
        )(483, "div", 130)(484, "h1", 3),
        n(485, "FAQ : Tout savoir sur les "),
        l(486, "br"),
        t(487, "span", 29),
        n(488, "Soci\xE9t\xE9s de Moyens"),
        e()()()()(),
        l(489, "div", 131),
        t(490, "div", 25)(491, "div")(492, "div", 132)(493, "div", 133)(
          494,
          "h2",
          134
        )(495, "button", 135),
        n(496, " Qu\u2019est-ce qu\u2019une soci\xE9t\xE9 de moyens ? "),
        e()(),
        t(497, "div", 136)(498, "div", 137),
        n(
          499,
          " Une soci\xE9t\xE9 de moyens est une structure juridique qui permet \xE0 plusieurs professionnels de mutualiser certains moyens mat\xE9riels, financiers ou humains n\xE9cessaires \xE0 leur activit\xE9. Elle ne vise pas \xE0 g\xE9n\xE9rer des b\xE9n\xE9fices ni \xE0 exercer une activit\xE9 professionnelle commune, mais simplement \xE0 g\xE9rer et r\xE9partir les frais li\xE9s aux ressources mutualis\xE9es. "
        ),
        e()()(),
        t(500, "div", 133)(501, "h2", 138)(502, "button", 139),
        n(
          503,
          " Quels sont les principaux avantages d\u2019une soci\xE9t\xE9 de moyens ? "
        ),
        e()(),
        t(504, "div", 140)(505, "div", 137)(506, "ul")(507, "li")(
          508,
          "strong"
        ),
        n(509, "R\xE9duction des co\xFBts :"),
        e(),
        n(
          510,
          " En mutualisant les charges d\u2019exploitation (loyer, abonnements, \xE9quipements), chaque membre peut r\xE9aliser d\u2019importantes \xE9conomies."
        ),
        e(),
        t(511, "li")(512, "strong"),
        n(513, "Conservation de l\u2019autonomie professionnelle :"),
        e(),
        n(514, " Chaque associ\xE9 reste ind\xE9pendant dans son activit\xE9."),
        e(),
        t(515, "li")(516, "strong"),
        n(517, "Gestion transparente des charges :"),
        e(),
        n(
          518,
          " Les frais sont r\xE9partis \xE9quitablement entre les membres selon des r\xE8gles claires d\xE9finies dans les statuts."
        ),
        e()()()()(),
        t(519, "div", 133)(520, "h2", 141)(521, "button", 142),
        n(
          522,
          " Quelle est la diff\xE9rence entre une soci\xE9t\xE9 de moyens et d\u2019autres soci\xE9t\xE9s ? "
        ),
        e()(),
        t(523, "div", 143)(524, "div", 137),
        n(
          525,
          " Contrairement \xE0 une soci\xE9t\xE9 commerciale ou une soci\xE9t\xE9 civile professionnelle, une soci\xE9t\xE9 de moyens ne permet pas \xE0 ses membres d\u2019exercer leur activit\xE9 professionnelle commune au sein de la structure. Elle se limite \xE0 g\xE9rer les \xE9l\xE9ments mutualis\xE9s comme les locaux, le mat\xE9riel ou les abonnements. "
        ),
        e()()(),
        t(526, "div", 133)(527, "h2", 144)(528, "button", 145),
        n(
          529,
          " Comment fonctionne la r\xE9partition des charges dans une soci\xE9t\xE9 de moyens ? "
        ),
        e()(),
        t(530, "div", 146)(531, "div", 137),
        n(
          532,
          " Les charges sont r\xE9parties entre les membres selon des crit\xE8res d\xE9finis dans les statuts de la soci\xE9t\xE9. Cela peut inclure : "
        ),
        t(533, "ul")(534, "li"),
        n(535, "Le temps d\u2019utilisation des locaux ou du mat\xE9riel."),
        e(),
        t(536, "li"),
        n(537, "La part de consommation des ressources."),
        e(),
        t(538, "li"),
        n(539, "Toute autre r\xE8gle convenue collectivement."),
        e()()()()(),
        t(540, "div", 133)(541, "h2", 147)(542, "button", 148),
        n(
          543,
          " Quels sont les risques li\xE9s \xE0 une soci\xE9t\xE9 de moyens ? "
        ),
        e()(),
        t(544, "div", 149)(545, "div", 137)(546, "ul")(547, "li")(
          548,
          "strong"
        ),
        n(549, "Responsabilit\xE9 financi\xE8re :"),
        e(),
        n(
          550,
          " Les membres sont responsables des dettes de la soci\xE9t\xE9 \xE0 hauteur du capital qu\u2019ils ont apport\xE9."
        ),
        e(),
        t(551, "li")(552, "strong"),
        n(553, "Conflits internes :"),
        e(),
        n(
          554,
          " Des tensions peuvent appara\xEEtre si les r\xE8gles de r\xE9partition des charges ne sont pas claires."
        ),
        e(),
        t(555, "li")(556, "strong"),
        n(557, "Mauvaise gestion :"),
        e(),
        n(
          558,
          " Une gestion rigoureuse est essentielle pour \xE9viter des d\xE9s\xE9quilibres financiers."
        ),
        e(),
        t(559, "li")(560, "strong"),
        n(561, "Limites l\xE9gales :"),
        e(),
        n(
          562,
          " Une soci\xE9t\xE9 de moyens ne peut pas exercer d\u2019activit\xE9 commerciale ni g\xE9n\xE9rer de b\xE9n\xE9fices."
        ),
        e()()()()(),
        t(563, "div", 133)(564, "h2", 150)(565, "button", 151),
        n(
          566,
          " Comment MFINANCES peut vous aider dans la gestion de votre soci\xE9t\xE9 de moyens ? "
        ),
        e()(),
        t(567, "div", 152)(568, "div", 137),
        n(569, " MFINANCES propose : "),
        t(570, "ul")(571, "li")(572, "strong"),
        n(573, "Gestion comptable et fiscale :"),
        e(),
        n(574, " Suivi rigoureux des charges et des cotisations."),
        e(),
        t(575, "li")(576, "strong"),
        n(577, "Cash collecting :"),
        e(),
        n(
          578,
          " Gestion automatis\xE9e des paiements pour \xE9viter les retards."
        ),
        e(),
        t(579, "li")(580, "strong"),
        n(581, "R\xE9daction des statuts :"),
        e(),
        n(
          582,
          " D\xE9finition claire des r\xE8gles de fonctionnement pour pr\xE9venir les conflits."
        ),
        e(),
        t(583, "li")(584, "strong"),
        n(585, "Optimisation des achats :"),
        e(),
        n(
          586,
          " Centralisation et n\xE9gociation pour r\xE9duire les co\xFBts."
        ),
        e(),
        t(587, "li")(588, "strong"),
        n(589, "Suivi des performances :"),
        e(),
        n(
          590,
          " Mise en place de tableaux de bord pour visualiser les \xE9conomies r\xE9alis\xE9es."
        ),
        e()()()()()()()()()()(),
        t(591, "section", 153)(592, "div", 154)(593, "div", 25)(
          594,
          "div",
          155
        ),
        l(595, "img", 156),
        e(),
        t(596, "div", 157)(597, "h2", 158),
        n(598, " Vous avez une"),
        l(599, "br"),
        t(600, "span", 159),
        n(601, "question sp\xE9cifique ?"),
        e(),
        n(602, ". "),
        e(),
        t(603, "p", 160),
        n(
          604,
          " Contactez MFINANCES d\xE8s aujourd\u2019hui pour une consultation gratuite. "
        ),
        e(),
        t(605, "a", 161),
        n(606, " Contactez-nous "),
        l(607, "i", 162),
        e()()()()(),
        l(608, "app-recommandation-profil"));
    },
    dependencies: [oe, se],
    styles: [
      '.service-faq[_ngcontent-%COMP%]{background-color:#25335b}.practical-section[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:4rem 0}.practical-card[_ngcontent-%COMP%]{border:2px solid #e6e9f1;border-radius:12px;background-color:#fff;padding:2rem;box-shadow:0 4px 6px #0000000d;transition:transform .3s ease-in-out}.practical-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.role-icon[_ngcontent-%COMP%]{width:60px;height:60px;background-color:#f33;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:1rem}.role-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:24px}.pointer-icon[_ngcontent-%COMP%]{color:#f33;font-size:24px;margin-right:10px}.bottom-note[_ngcontent-%COMP%]{border-left:4px solid #FF3333;padding:1rem;background-color:#fff;border-radius:0 8px 8px 0;box-shadow:0 2px 4px #0000000d}.mutualisation-section[_ngcontent-%COMP%]{padding:8rem 0;background:linear-gradient(135deg,#f8f9fb,#fff);position:relative;overflow:hidden;perspective:1000px}.section-title-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:6rem;position:relative}.section-title[_ngcontent-%COMP%]{font-size:3rem;font-weight:800;background:linear-gradient(120deg,#f33,#f55);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:1.5rem;position:relative;display:inline-block}.section-subtitle[_ngcontent-%COMP%]{font-size:1.2rem;color:#666;max-width:700px;margin:2rem auto 0;line-height:1.8}.card-container[_ngcontent-%COMP%]{transform-style:preserve-3d;transform:rotateX(5deg)}.mutualisation-card[_ngcontent-%COMP%]{background:#fff;border-radius:30px;padding:3rem;height:100%;position:relative;transition:all .5s cubic-bezier(.23,1,.32,1);transform-style:preserve-3d;box-shadow:0 20px 40px #0000000d;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.8)}.mutualisation-card[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,#f333,#ff55551a);border-radius:30px;opacity:0;transition:all .5s ease;z-index:-1}.mutualisation-card[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:1px;background:#fff;border-radius:29px;z-index:-1}.mutualisation-card[_ngcontent-%COMP%]:hover{transform:translateY(-20px) scale(1.02);box-shadow:0 30px 60px #ff33331a}.mutualisation-card[_ngcontent-%COMP%]:hover:before{opacity:1}.icon-container[_ngcontent-%COMP%]{position:relative;margin-bottom:2.5rem}.icon-circle[_ngcontent-%COMP%]{width:100px;height:100px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;box-shadow:0 15px 30px #ff33331a;transition:all .5s ease;transform-style:preserve-3d;transform:translateZ(20px)}.icon-circle[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-3px;border-radius:50%;background:linear-gradient(135deg,#f33,#f55);opacity:0;transition:all .5s ease;z-index:-1}.mutualisation-card[_ngcontent-%COMP%]:hover   .icon-circle[_ngcontent-%COMP%]{transform:translateZ(30px) scale(1.1)}.mutualisation-card[_ngcontent-%COMP%]:hover   .icon-circle[_ngcontent-%COMP%]:before{opacity:1}.icon-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:40px;color:#f33;transition:all .5s ease;transform:translateZ(10px)}.mutualisation-card[_ngcontent-%COMP%]:hover   .icon-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;transform:translateZ(15px)}.card-title[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#2d3748;margin-bottom:2rem;transition:all .5s ease;transform:translateZ(10px)}.feature-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;transform:translateZ(10px)}.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem 0;color:#4a5568;font-size:1.1rem;transition:all .3s ease;border-bottom:1px solid rgba(0,0,0,.05)}.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:15px;color:#f33;font-size:1.2rem;transition:all .3s ease}.mutualisation-card[_ngcontent-%COMP%]:hover   .feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{transform:translate(10px)}@keyframes _ngcontent-%COMP%_cardFloat{0%{opacity:0;transform:translateY(50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.card-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cardFloat .8s cubic-bezier(.23,1,.32,1) forwards;opacity:0}.card-animation[_ngcontent-%COMP%]:nth-child(1){animation-delay:.2s}.card-animation[_ngcontent-%COMP%]:nth-child(2){animation-delay:.4s}.card-animation[_ngcontent-%COMP%]:nth-child(3){animation-delay:.6s}.shine-effect[_ngcontent-%COMP%]{position:absolute;inset:0;background:linear-gradient(45deg,#fff0,#ffffff1a,#fff0);transform:translate(-100%);animation:_ngcontent-%COMP%_shine 3s infinite}@keyframes _ngcontent-%COMP%_shine{0%{transform:translate(-100%)}20%{transform:translate(100%)}to{transform:translate(100%)}}@media (max-width: 768px){.mutualisation-section[_ngcontent-%COMP%]{padding:4rem 0}.section-title[_ngcontent-%COMP%]{font-size:2.2rem}.mutualisation-card[_ngcontent-%COMP%]{margin-bottom:2rem;padding:2rem}.card-title[_ngcontent-%COMP%]{font-size:1.5rem}}.case-study-section[_ngcontent-%COMP%]{padding:6rem 0;background-color:#25335b}.timeline-wrapper[_ngcontent-%COMP%]{position:relative;padding:2rem 0}.timeline-line[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:50%;width:4px;background:linear-gradient(to bottom,#f33,#f55);transform:translate(-50%)}.timeline-dot[_ngcontent-%COMP%]{width:20px;height:20px;background:#f33;border-radius:50%;position:absolute;left:50%;transform:translate(-50%);border:4px solid white;box-shadow:0 0 0 3px #f33}.timeline-dot.top[_ngcontent-%COMP%]{top:0}.timeline-dot.bottom[_ngcontent-%COMP%]{bottom:0}.case-header[_ngcontent-%COMP%]{text-align:center;max-width:800px;margin:0 auto 5rem}.case-title[_ngcontent-%COMP%]{font-size:3rem;font-weight:800;margin-bottom:1.5rem;background:#fff;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.case-subtitle[_ngcontent-%COMP%]{font-size:1.2rem;color:#fff;position:relative;padding-bottom:2rem}.timeline-item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:3rem}.timeline-content[_ngcontent-%COMP%]{width:45%;position:relative}.timeline-content.left[_ngcontent-%COMP%]{margin-right:auto}.timeline-content.right[_ngcontent-%COMP%]{margin-left:auto}.timeline-card[_ngcontent-%COMP%]{background:#fff;border-radius:24px;padding:2.5rem;box-shadow:0 10px 30px #0000000d;border:1px solid rgba(255,51,51,.1);transition:all .3s ease}.timeline-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 20px 40px #ff33331a}.card-icon[_ngcontent-%COMP%]{width:70px;height:70px;background:linear-gradient(135deg,#f33,#f55);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:1.5rem;transition:all .3s ease}.timeline-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{transform:rotate(0) scale(1.1)}.card-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px;color:#fff}.card-title[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;margin-bottom:1.5rem;color:#2d3748}.card-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.card-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:flex-start;padding:1rem 0;border-bottom:1px solid rgba(0,0,0,.05);transition:all .3s ease}.card-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transform:translate(10px)}.card-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.card-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f33;margin-right:1rem;margin-top:.3rem}.results-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f33,#f55);color:#fff;border-radius:24px;padding:3rem;margin-top:2rem;transform:translateY(0);transition:all .3s ease}.results-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 20px 40px #f333}.results-card[_ngcontent-%COMP%]:hover, i[_ngcontent-%COMP%]{color:#fff}.results-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;margin-bottom:2rem;display:flex;align-items:center;gap:1rem}.results-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.results-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem 0;border-bottom:1px solid rgba(255,255,255,.2);font-size:1.2rem}.results-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.results-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:1rem;background:#fff3;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center}.highlight[_ngcontent-%COMP%]{background:#fff3;padding:.2rem .8rem;border-radius:20px;font-weight:600;margin:0 .3rem}@media (max-width: 768px){.timeline-line[_ngcontent-%COMP%]{left:20px}.timeline-content[_ngcontent-%COMP%]{width:90%;margin-left:50px}.timeline-dot[_ngcontent-%COMP%]{left:20px}.case-title[_ngcontent-%COMP%]{font-size:2.2rem}}',
      `.challenge-solution-container[_ngcontent-%COMP%] {
      position: relative;
      padding: 2rem 0;
    }
    .vertical-line[_ngcontent-%COMP%] {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 2px;
      background: #FF3333;
      margin-left: -1.5px;
      z-index: 1;
    }


    .custom-card[_ngcontent-%COMP%] {
  border: 2px solid #e6e9f1;
  border-radius: 12px;
  background-color: #f8f9fb;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: transform 0.02s linear, box-shadow 0.2s linear, border-color 0.2s linear;
}

.custom-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-10px); 

  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); 

  border-color: #c3c9d9; 

}

    .icon-wrapper[_ngcontent-%COMP%] {
        min-width: 80px;
        min-height: 80px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
  
    .icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
        max-width: 100%;
        height: auto;
    }
  
    .custom-image-size[_ngcontent-%COMP%] {
    width: 70%; 

    height: auto; 

    }
    .second-card[_ngcontent-%COMP%] {
        position: relative;
    }
  
    @media (min-width: 992px) {
        .second-card[_ngcontent-%COMP%] {
            left: -64px;
        }
    }
  
    @media (max-width: 991px) {
        .second-card[_ngcontent-%COMP%] {
            left: 0;
        }
    }
  
    



  
    .bg-custom--primary[_ngcontent-%COMP%] {
        background-color: #25335b;
    }
  
    .bg-custom--primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
        color: white;
    }
  
    .rectangle-red[_ngcontent-%COMP%] {
        background-color: #FF3333;
        border-radius: 8px;
        padding: 6px;
    }
  
    .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
        color: white;
        font-size: 29px !important;
        line-height: 48px;
        padding-bottom: 18px;
    }
  
    .highlighted[_ngcontent-%COMP%] {
        background-color: #ff4136;
        color: #fff;
        padding: 0.2rem 0.5rem;
        border-radius: 0.25rem;
    }
  
    .vertical-divider[_ngcontent-%COMP%] {
        border-left: 1px solid #d1d1d1;
        height: 100%;
    }
  
    .icon-red[_ngcontent-%COMP%] {
        color: #ff4136;
        font-size: 1.5rem;
        margin-right: 1rem; 
    }
  
    .section-title[_ngcontent-%COMP%] {
        font-weight: 700;
        margin-bottom: 2rem;
        font-size: 29px !important;
        line-height: 48px;
    }
  
    .flex-content[_ngcontent-%COMP%] {
        display: flex;
        align-items: flex-start; 
        margin-bottom: 1rem;
    }
  
    .section-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
  
    .section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
        list-style: none;
        padding: 0;
    }
  
    .header[_ngcontent-%COMP%] {
        background: url('../../assets/img/bg/bg_about.webp') no-repeat center center/cover;
        min-height: 400px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  
    .header-overlay[_ngcontent-%COMP%] {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        color: white;
    }
  
    

    @media (max-width: 767px) {
        .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
            font-size: 24px;
            line-height: 36px;
        }
  
        .custom-card[_ngcontent-%COMP%] {
            padding: 15px;
        }
  
        .icon-wrapper[_ngcontent-%COMP%] {
            min-width: 60px;
            min-height: 60px;
        }
  
        .works-items[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
            font-size: 1.2rem;
        }
  
        .section-title[_ngcontent-%COMP%] {
            font-size: 1.5rem;
        }
    }
  
    @media (max-width: 575px) {
        .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
            font-size: 20px;
            line-height: 32px;
        }
    }`,
    ],
  });
};
var At = class a {
  constructor(o) {
    this.metaService = o;
  }
  ngOnInit() {
    this.metaService.setSocieteExploitationPageMeta();
  }
  scrollToSection(o) {
    let i = document.getElementById(o);
    i && i.scrollIntoView({ behavior: "smooth" });
  }
  static ɵfac = function (i) {
    return new (i || a)(I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-profil-societe-exploitation"]],
    decls: 332,
    vars: 0,
    consts: [
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
      [1, "text-white"],
      [1, "service-single", "pt-120", "pb-130", 2, "padding", "64px"],
      [1, "row"],
      [1, "col-lg-4"],
      [1, "col-lg-8"],
      [1, "single-content"],
      [1, "display-5", "fw-bold"],
      [1, "bg-custom--primary", "text-white", "px-2", "rounded"],
      [1, "button-container"],
      [1, "home2-btn", "mb-4"],
      [1, "btn-red", 3, "click"],
      [1, "fa-solid", "fa-arrow-right"],
      [1, "single-img", "mt-35", "mb-4", "custom-single"],
      ["src", "../../assets/img/webp/grande14.webp", "alt", "", 1, "rounded-4"],
      [1, "defis", "row", "align-items-start", "mt-10"],
      [1, "col-md-4", "custom-img"],
      [
        "src",
        "../../assets/img/webp/37.webp",
        "alt",
        "D\xE9fis ASBL",
        1,
        "img-fluid",
        2,
        "border-radius",
        "16px",
        "height",
        "300px",
      ],
      [1, "col-md-8"],
      [1, "list-unstyled", "pl-25"],
      [1, "mb-3"],
      [
        1,
        "fa",
        "fa-star",
        2,
        "font-size",
        "14px",
        "color",
        "#FF3333",
        "margin-right",
        "6px",
      ],
      [1, "bg-custom--primary"],
      [1, "works", "sec-padding"],
      [1, "row", "align-items-center"],
      [1, "col-md-12", "col-lg-6"],
      [1, "how-in-work-sec"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "800",
        1,
        "hadding",
        "hadding-p",
      ],
      [1, "rectangle-red"],
      [1, "space20"],
      [1, "works-items"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1000",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "me-3"],
      [1, "work-icon", "img-border"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-1.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [1, "hadding", "hadding-p"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1200",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "work-icon"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-2.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1400",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [
        "src",
        "../../assets/img/image/profil/works-icon-3.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "flip-right",
        "data-aos-duration",
        "1000",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [1, "works-img", "space-sm-50", "img-border"],
      ["src", "../../assets/img/webp/49.webp", "alt", "", 1, "img-fluid"],
      [1, "home2-about", "sec-padding"],
      [
        "data-aos",
        "flip-left",
        "data-aos-duration",
        "800",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [1, "home2-about-img", "img-border"],
      ["src", "../../assets/img/image/profil/27.webp", "alt", ""],
      [1, "home2-about-text"],
      [1, "home2-about-after"],
      [
        "data-aos",
        "fade-left",
        "data-aos-duration",
        "800",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [
        1,
        "home2-hadding",
        "home2-hadding-p",
        "home2-about",
        "hadding-span",
        "home2-padding-after",
      ],
      [1, "space30"],
      [1, "home2-about-list"],
      ["src", "assets/img/icons/chek-cercle.svg", "alt", ""],
      [1, "space10"],
      [1, "home2-btn"],
      ["href", "about.html"],
      [1, "fa", "fa-arrow-right"],
      ["id", "targetSection", 1, "about", "sec-padding"],
      [
        "data-aos",
        "fade-left",
        "data-aos-duration",
        "800",
        1,
        "col-md-6",
        "space-sm-30",
      ],
      [1, "about-haddings"],
      [1, "home2-hadding", "hadding-p"],
      [1, "check-list-all", 2, "padding", "1px 0 !important"],
      [1, "chek-list"],
      ["src", "../../assets/img/icons/checkfill.png", "alt", ""],
      [1, "home2-btn", "mt-4"],
      ["href", "/contact"],
      ["data-aos", "fade-right", "data-aos-duration", "800", 1, "col-md-6"],
      [1, "about-img", "img-border"],
      ["src", "../../assets/img/image/about-07.webp", "alt", ""],
      [1, "service-faq", "sec-padding"],
      [1, "col-md-6", "m-auto", "text-center"],
      [1, "hadding"],
      [1, "space40"],
      ["id", "accordionExample", 1, "accordion"],
      [1, "accordion-item"],
      ["id", "headingOne", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseOne",
        "aria-expanded",
        "true",
        "aria-controls",
        "collapseOne",
        1,
        "accordion-button",
      ],
      [
        "id",
        "collapseOne",
        "aria-labelledby",
        "headingOne",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
        "show",
      ],
      [1, "accordion-body"],
      ["id", "headingTwo", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseTwo",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseTwo",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseTwo",
        "aria-labelledby",
        "headingTwo",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingThree", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseThree",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseThree",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseThree",
        "aria-labelledby",
        "headingThree",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingFour", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseFour",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseFour",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseFour",
        "aria-labelledby",
        "headingFour",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingFive", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseFive",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseFive",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseFive",
        "aria-labelledby",
        "headingFive",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingSix", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseSix",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseSix",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseSix",
        "aria-labelledby",
        "headingSix",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      ["id", "headingSeven", 1, "accordion-header"],
      [
        "type",
        "button",
        "data-bs-toggle",
        "collapse",
        "data-bs-target",
        "#collapseSeven",
        "aria-expanded",
        "false",
        "aria-controls",
        "collapseSeven",
        1,
        "accordion-button",
        "collapsed",
      ],
      [
        "id",
        "collapseSeven",
        "aria-labelledby",
        "headingSeven",
        "data-bs-parent",
        "#accordionExample",
        1,
        "accordion-collapse",
        "collapse",
      ],
      [1, "container", "my-5"],
      [1, "rounded-4", "bg-custom--primary", "text-white", "px-4"],
      [
        "data-aos",
        "fade-left",
        "data-aos-delay",
        "200",
        1,
        "col-md-6",
        "d-none",
        "d-md-flex",
        "justify-content-center",
        "align-items-end",
      ],
      [
        "src",
        "../../assets/img/image/profil/h9_footer_banner_img 1 1.webp",
        "alt",
        "Personne souriante",
        1,
        "img-fluid",
        "custom-image-size",
        2,
        "z-index",
        "2",
        "position",
        "relative",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-delay",
        "400",
        1,
        "col-12",
        "col-md-6",
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center",
        "align-items-md-start",
        "text-center",
        "text-md-start",
        "mt-4",
        "mt-md-0",
      ],
      [1, "fw-bold", "mb-4"],
      [1, "bg-danger", "text-white", "px-2", "py-1", "rounded-2"],
      ["data-aos", "fade-up", "data-aos-delay", "600", 1, "mb-4"],
      [
        "href",
        "#",
        "data-aos",
        "zoom-in",
        "data-aos-delay",
        "800",
        1,
        "btn",
        "btn-danger",
        "btn-sm",
        "px-3",
        "py-2",
      ],
      [1, "fas", "fa-arrow-right"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1"),
        n(4, "Soci\xE9t\xE9 d'exploitation"),
        e(),
        t(5, "p", 3),
        n(6, "Accueil > Societe d'exploitation"),
        e()()()(),
        t(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "div", 6),
        l(11, "app-sidebar"),
        e(),
        t(12, "div", 7)(13, "div", 8)(14, "h2", 9),
        n(15, " Soci\xE9t\xE9 d\u2019exploitation : Le moteur de votre "),
        t(16, "span", 10),
        n(17, " activit\xE9 professionnelle"),
        e()(),
        t(18, "div")(19, "p"),
        n(
          20,
          "Une soci\xE9t\xE9 d\u2019exploitation constitue le pilier central de votre activit\xE9 professionnelle ou commerciale. Elle se concentre sur la cr\xE9ation de valeur \xE0 travers une activit\xE9 productive, qu\u2019il s\u2019agisse de prestations de services, de production ou d\u2019activit\xE9s intellectuelles dans le cadre d\u2019une profession lib\xE9rale."
        ),
        e(),
        t(21, "p"),
        n(
          22,
          "De plus, une soci\xE9t\xE9 d\u2019exploitation peut \xEAtre associ\xE9e \xE0 une soci\xE9t\xE9 de management ou de patrimoine afin de r\xE9pondre \xE0 des besoins compl\xE9mentaires, tels que l\u2019optimisation de la r\xE9mun\xE9ration du dirigeant ou la gestion d\u2019actifs personnels \xE0 long terme."
        ),
        e(),
        l(23, "br"),
        e(),
        t(24, "div", 11)(25, "div", 12)(26, "button", 13),
        O("click", function () {
          return s.scrollToSection("targetSection");
        }),
        n(27, "D\xE9couvrez ce que vous gagnerez avec nous "),
        l(28, "i", 14),
        e()()(),
        t(29, "div", 15),
        l(30, "img", 16),
        e(),
        t(31, "div", 17)(32, "h1"),
        n(33, "Ca veut dire quoi? "),
        e(),
        t(34, "div", 18),
        l(35, "img", 19),
        e(),
        t(36, "div", 20)(37, "h3"),
        n(38, "Comment interpr\xE9ter cela ?"),
        e(),
        t(39, "ul", 21)(40, "li", 22),
        l(41, "i", 23),
        t(42, "strong"),
        n(43, " Une soci\xE9t\xE9 d\u2019exploitation :"),
        e(),
        l(44, "br"),
        n(
          45,
          " Elle repr\xE9sente le c\u0153ur de votre activit\xE9, l\u2019endroit o\xF9 sont concentr\xE9s tous les efforts pour maximiser la rentabilit\xE9 de votre entreprise. "
        ),
        e(),
        t(46, "li"),
        l(47, "i", 23),
        t(48, "strong"),
        n(49, "Une soci\xE9t\xE9 de patrimoine :"),
        e(),
        l(50, "br"),
        n(
          51,
          ' Elle vous permet de "sortir un pion de l\u2019\xE9chiquier" de l\u2019activit\xE9 commerciale pour l\u2019utiliser dans des projets personnels ou patrimoniaux, comme la gestion d\u2019actifs personnels \xE0 long terme. '
        ),
        e()()()()()()()()(),
        t(52, "section", 24)(53, "div", 25)(54, "div", 2)(55, "div", 26)(
          56,
          "div",
          27
        )(57, "div", 28)(
          58,
          "div",
          29
        )(59, "h1"),
        n(60, "Besoins sp\xE9cifiques des "),
        l(61, "br"),
        t(62, "span", 30),
        n(63, " Soci\xE9t\xE9s d'Exploitations "),
        e()()(),
        l(64, "div", 31),
        t(65, "div", 32)(66, "div", 33)(67, "div", 34)(68, "div", 35),
        l(69, "img", 36),
        e()(),
        t(70, "div", 37)(71, "h2"),
        n(72, "Une gestion comptable et financi\xE8re rigoureuse"),
        e(),
        t(73, "ul")(74, "li"),
        n(
          75,
          "Une gestion comptable et financi\xE8re rigoureuse les soci\xE9t\xE9s d\u2019exploitation, avec leur volume d\u2019activit\xE9 \xE9lev\xE9 et leurs d\xE9penses vari\xE9es, n\xE9cessitent une gestion comptable pr\xE9cise et proactive."
        ),
        e(),
        t(76, "li")(77, "strong"),
        n(78, "Bilans et situations financi\xE8res interm\xE9diaires :"),
        e(),
        n(
          79,
          " Ces documents vous permettent de suivre l\u2019\xE9volution de votre entreprise \xE0 des moments cl\xE9s et de justifier votre sant\xE9 financi\xE8re aupr\xE8s des banques et des investisseurs."
        ),
        e(),
        t(80, "li")(81, "strong"),
        n(82, "Situations pr\xE9visionnelles : "),
        e(),
        n(
          83,
          " Anticiper l\u2019avenir devient indispensable. Les projections financi\xE8res vous aident \xE0 planifier vos investissements strat\xE9giques et \xE0 \xE9viter les impr\xE9vus."
        ),
        e()()()(),
        t(84, "div", 38)(85, "div", 34)(86, "div", 39),
        l(87, "img", 40),
        e()(),
        t(88, "div", 37)(89, "h2"),
        n(90, "Accompagnement strat\xE9gique personnalis\xE9"),
        e(),
        t(91, "ul")(92, "li")(93, "strong"),
        n(94, "Tableaux de bord personnalis\xE9s :"),
        e(),
        n(
          95,
          " Nos outils sur mesure vous permettent de suivre vos indicateurs cl\xE9s (rentabilit\xE9, co\xFBts, tr\xE9sorerie)."
        ),
        e(),
        t(96, "li")(97, "strong"),
        n(98, "Conseil strat\xE9gique :"),
        e(),
        n(
          99,
          " Nous vous accompagnons dans vos d\xE9cisions cruciales, en alignant vos finances avec vos objectifs commerciaux."
        ),
        e(),
        t(100, "li")(101, "strong"),
        n(102, "Support administratif continu :"),
        e(),
        n(
          103,
          " Nous collectons et organisons vos pi\xE8ces comptables pour garantir une gestion rigoureuse et \xE9viter toute perte fiscale."
        ),
        e()()()(),
        t(104, "div", 41)(105, "div", 34)(106, "div", 39),
        l(107, "img", 42),
        e()(),
        t(108, "div", 37)(109, "h2"),
        n(110, "Une optimisation fiscale intelligente"),
        e(),
        t(111, "ul")(112, "li")(113, "strong"),
        n(114, "Imp\xF4t des soci\xE9t\xE9s (ISOC) :"),
        e(),
        n(
          115,
          " Une gestion proactive est essentielle pour optimiser ces d\xE9penses et pr\xE9server votre tr\xE9sorerie."
        ),
        e(),
        t(116, "li")(117, "strong"),
        n(118, "Maximisation des d\xE9ductions fiscales :"),
        e(),
        n(
          119,
          " Profitez des possibilit\xE9s offertes par les management fees, amortissements, et frais professionnels pour r\xE9duire vos imp\xF4ts."
        ),
        e(),
        t(120, "li")(121, "strong"),
        n(122, "Int\xE9gration des charges fiscales dans vos pr\xE9visions :"),
        e(),
        n(
          123,
          " Cela vous permet de mieux g\xE9rer vos flux de tr\xE9sorerie."
        ),
        e(),
        t(124, "li")(125, "strong"),
        n(126, "Avantages fiscaux : "),
        e(),
        n(
          127,
          " B\xE9n\xE9ficiez d\u2019une strat\xE9gie fiscale sur mesure pour optimiser vos finances \xE0 long terme."
        ),
        e()()()()()()(),
        t(128, "div", 43)(129, "div", 44),
        l(130, "img", 45),
        e()()()()()(),
        t(131, "section")(132, "div", 46)(133, "div", 2)(134, "div", 26)(
          135,
          "div",
          47
        )(136, "div", 48),
        l(137, "img", 49),
        t(138, "div", 50)(139, "div", 51)(140, "p"),
        n(
          141,
          "R\xE9sultat : Une r\xE9duction de 20\u202F% de son ISOC, permettant au client de r\xE9investir ces \xE9conomies dans le d\xE9veloppement de son activit\xE9. "
        ),
        e()()()()(),
        t(142, "div", 52)(143, "div", 53)(144, "h2"),
        n(145, "Comment MFINANCES optimise la rentabilit\xE9 d\u2019une PME "),
        e(),
        t(146, "p"),
        n(
          147,
          "Un de nos clients, dirigeant une PME dans le secteur des services, faisait face \xE0 une fiscalit\xE9 lourde qui freinait sa capacit\xE9 d\u2019investissement. En collaborant avec MFINANCES, nous avons pu :"
        ),
        e()(),
        l(148, "div", 54),
        t(149, "div", 55)(150, "ul")(151, "li"),
        l(152, "img", 56),
        n(
          153,
          " Mettre en place une soci\xE9t\xE9 de management et de patrimoine pour structurer et optimiser ses revenus de mani\xE8re efficace. "
        ),
        e(),
        t(154, "li"),
        l(155, "img", 56),
        n(
          156,
          "Optimiser les d\xE9ductions fiscales, notamment par des amortissements strat\xE9giques et des management fees, permettant ainsi une r\xE9duction de la charge fiscale. "
        ),
        e(),
        t(157, "li"),
        l(158, "img", 56),
        n(
          159,
          " Ajust\xE9 son plan financier pour anticiper ses charges fiscales et mieux g\xE9rer ses flux de tr\xE9sorerie. "
        ),
        e()()(),
        l(160, "div", 57),
        t(161, "div", 58)(162, "a", 59),
        n(163, "Contactez-Nous"),
        l(164, "i", 60),
        e()()()()()()(),
        t(165, "section")(166, "div", 61)(167, "div", 2)(168, "div", 26)(
          169,
          "div",
          62
        )(170, "div", 63)(
          171,
          "div",
          64
        )(172, "h2"),
        n(173, "Nos points distinctif"),
        e()(),
        t(174, "div", 65)(175, "div", 5)(176, "div")(177, "div", 66)(178, "p"),
        l(179, "img", 67),
        t(180, "strong"),
        n(181, "Une expertise compl\xE8te :"),
        e(),
        n(
          182,
          " Comptabilit\xE9, fiscalit\xE9, tr\xE9sorerie et strat\xE9gie. Nous couvrons tous les aspects essentiels pour structurer et optimiser votre activit\xE9."
        ),
        e()(),
        l(183, "div", 31),
        t(184, "div", 66)(185, "p"),
        l(186, "img", 67),
        t(187, "strong"),
        n(188, "Une vision proactive :"),
        e(),
        n(
          189,
          " Gr\xE2ce \xE0 nos bilans interm\xE9diaires et projections financi\xE8res, nous vous aidons \xE0 anticiper les \xE9volutions et \xE0 naviguer sereinement dans un environnement en constante mutation."
        ),
        e()(),
        l(190, "div", 31),
        t(191, "div", 66)(192, "p"),
        l(193, "img", 67),
        t(194, "strong"),
        n(195, "Un accompagnement personnalis\xE9 :"),
        e(),
        n(
          196,
          "Vous b\xE9n\xE9ficiez d'un interlocuteur d\xE9di\xE9 qui prend le temps de comprendre vos sp\xE9cificit\xE9s et d\u2019adapter nos solutions \xE0 vos besoins."
        ),
        e()()()()(),
        t(197, "div", 68)(198, "a", 69),
        n(199, "Contactez-nous "),
        l(200, "i", 14),
        e()()()(),
        t(201, "div", 70)(202, "div", 71),
        l(203, "img", 72),
        e()()()()()(),
        t(204, "section")(205, "div", 73)(206, "div", 2)(207, "div", 5)(
          208,
          "div",
          74
        )(209, "div", 75)(210, "h1", 3),
        n(211, "FAQ : "),
        l(212, "br"),
        t(213, "span", 30),
        n(214, "Soci\xE9t\xE9 d\u2019exploitation en Belgique"),
        e()()()()(),
        l(215, "div", 76),
        t(216, "div", 26)(217, "div")(218, "div", 77)(219, "div", 78)(
          220,
          "h2",
          79
        )(221, "button", 80),
        n(
          222,
          " Qu\u2019est-ce qu\u2019une soci\xE9t\xE9 d\u2019exploitation\u202F? "
        ),
        e()(),
        t(223, "div", 81)(224, "div", 82),
        n(
          225,
          " Une soci\xE9t\xE9 d\u2019exploitation est une structure juridique d\xE9di\xE9e \xE0 la gestion et au d\xE9veloppement d\u2019une activit\xE9 professionnelle ou commerciale. Elle regroupe les ressources n\xE9cessaires \xE0 la cr\xE9ation de valeur : personnel, finances, et \xE9quipements. Elle est utilis\xE9e pour des activit\xE9s vari\xE9es comme les prestations de services, la production, ou les professions lib\xE9rales. "
        ),
        e()()(),
        t(226, "div", 78)(227, "h2", 83)(228, "button", 84),
        n(
          229,
          " Quels sont les avantages d\u2019une soci\xE9t\xE9 d\u2019exploitation en Belgique\u202F? "
        ),
        e()(),
        t(230, "div", 85)(231, "div", 82)(232, "ul")(233, "li")(234, "strong"),
        n(235, "Gestion structur\xE9e :"),
        e(),
        n(
          236,
          " Encadrement des activit\xE9s principales et s\xE9paration des finances personnelles."
        ),
        e(),
        t(237, "li")(238, "strong"),
        n(239, "Avantages fiscaux :"),
        e(),
        n(
          240,
          " R\xE9duction des charges gr\xE2ce aux d\xE9ductions fiscales (management fees, amortissements, frais professionnels)."
        ),
        e(),
        t(241, "li")(242, "strong"),
        n(243, "Cr\xE9dibilit\xE9 accrue :"),
        e(),
        n(
          244,
          " La tenue d\u2019une comptabilit\xE9 rigoureuse et le d\xE9p\xF4t des comptes renforcent la confiance des partenaires financiers et commerciaux."
        ),
        e()()()()(),
        t(245, "div", 78)(246, "h2", 86)(247, "button", 87),
        n(
          248,
          " Quelles sont les obligations l\xE9gales et fiscales d\u2019une soci\xE9t\xE9 d\u2019exploitation\u202F? "
        ),
        e()(),
        t(249, "div", 88)(250, "div", 82)(251, "ul")(252, "li")(253, "strong"),
        n(254, "Comptabilit\xE9 :"),
        e(),
        n(
          255,
          " Respect du Plan Comptable Minimum Normalis\xE9 (PCMN) et tenue des comptes en partie double."
        ),
        e(),
        t(256, "li")(257, "strong"),
        n(258, "Fiscalit\xE9 :"),
        e(),
        n(
          259,
          " D\xE9claration TVA, paiement de l\u2019ISOC (imp\xF4t des soci\xE9t\xE9s), et autres obligations fiscales."
        ),
        e(),
        t(260, "li")(261, "strong"),
        n(262, "D\xE9p\xF4t des comptes annuels :"),
        e(),
        n(
          263,
          " Publication obligatoire des comptes aupr\xE8s de la Banque Nationale de Belgique pour garantir transparence et conformit\xE9."
        ),
        e()()()()(),
        t(264, "div", 78)(265, "h2", 89)(266, "button", 90),
        n(
          267,
          " En quoi consiste l\u2019optimisation fiscale d\u2019une soci\xE9t\xE9 d\u2019exploitation\u202F? "
        ),
        e()(),
        t(268, "div", 91)(269, "div", 82)(270, "ul")(271, "li"),
        n(
          272,
          "R\xE9duire vos charges fiscales en maximisant les d\xE9ductions disponibles, comme les management fees et les amortissements."
        ),
        e(),
        t(273, "li"),
        n(
          274,
          "Int\xE9grer les charges fiscales dans vos pr\xE9visions pour mieux g\xE9rer vos flux financiers."
        ),
        e(),
        t(275, "li"),
        n(
          276,
          "Exploiter les r\xE9gimes fiscaux sp\xE9cifiques pour am\xE9liorer votre rentabilit\xE9, tout en respectant strictement les normes l\xE9gales."
        ),
        e()()()()(),
        t(277, "div", 78)(278, "h2", 92)(279, "button", 93),
        n(
          280,
          " Comment une soci\xE9t\xE9 d\u2019exploitation peut-elle anticiper ses performances futures\u202F? "
        ),
        e()(),
        t(281, "div", 94)(282, "div", 82),
        n(
          283,
          " Gr\xE2ce \xE0 des situations pr\xE9visionnelles, qui s\u2019appuient sur : "
        ),
        t(284, "ul")(285, "li"),
        n(
          286,
          "L\u2019analyse des bilans interm\xE9diaires pour identifier les tendances financi\xE8res."
        ),
        e(),
        t(287, "li"),
        n(
          288,
          "L\u2019\xE9laboration de projections pr\xE9cises qui anticipent les besoins en tr\xE9sorerie, les investissements, et les risques potentiels."
        ),
        e(),
        t(289, "li"),
        n(
          290,
          "La mise \xE0 jour r\xE9guli\xE8re du plan financier pour refl\xE9ter les \xE9volutions \xE9conomiques et sectorielles."
        ),
        e()()()()(),
        t(291, "div", 78)(292, "h2", 95)(293, "button", 96),
        n(
          294,
          " Quelle est la diff\xE9rence entre une soci\xE9t\xE9 d\u2019exploitation et une soci\xE9t\xE9 de patrimoine\u202F? "
        ),
        e()(),
        t(295, "div", 97)(296, "div", 82),
        n(
          297,
          " Une soci\xE9t\xE9 d\u2019exploitation est d\xE9di\xE9e \xE0 l\u2019activit\xE9 \xE9conomique (production, services), tandis qu\u2019une soci\xE9t\xE9 de patrimoine se concentre sur la gestion d\u2019actifs (immobiliers, placements financiers) et l\u2019optimisation des revenus personnels du dirigeant. "
        ),
        e()()(),
        t(298, "div", 78)(299, "h2", 98)(300, "button", 99),
        n(
          301,
          " Comment MFINANCES peut m\u2019aider avec ma soci\xE9t\xE9 d\u2019exploitation\u202F? "
        ),
        e()(),
        t(302, "div", 100)(303, "div", 82),
        n(304, " MFINANCES offre un accompagnement sur mesure comprenant : "),
        t(305, "ul")(306, "li"),
        n(
          307,
          "Gestion comptable rigoureuse et pr\xE9paration des bilans interm\xE9diaires."
        ),
        e(),
        t(308, "li"),
        n(
          309,
          "Projections financi\xE8res fiables pour anticiper les besoins et maximiser les opportunit\xE9s."
        ),
        e(),
        t(310, "li"),
        n(
          311,
          "Optimisation fiscale compl\xE8te pour r\xE9duire vos charges et am\xE9liorer votre tr\xE9sorerie."
        ),
        e(),
        t(312, "li"),
        n(
          313,
          "Conseil strat\xE9gique personnalis\xE9 pour aligner vos finances sur vos objectifs de croissance."
        ),
        e()()()()()()()()()()(),
        t(314, "section", 101)(315, "div", 102)(316, "div", 26)(
          317,
          "div",
          103
        ),
        l(318, "img", 104),
        e(),
        t(319, "div", 105)(320, "h2", 106),
        n(321, " Vous avez une"),
        l(322, "br"),
        t(323, "span", 107),
        n(324, "question sp\xE9cifique ?"),
        e(),
        n(325, ". "),
        e(),
        t(326, "p", 108),
        n(
          327,
          " Contactez MFINANCES d\xE8s aujourd\u2019hui pour une consultation gratuite. "
        ),
        e(),
        t(328, "a", 109),
        n(329, " Contactez-nous "),
        l(330, "i", 110),
        e()()()()(),
        l(331, "app-recommandation-profil"));
    },
    dependencies: [oe, se],
    styles: [
      "ul[_ngcontent-%COMP%]{list-style-type:none}.home2-hadding[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#10002b;font-weight:700;font-size:32px;line-height:48px;padding-bottom:20px;padding-top:10px;transition:all.4s}.service-faq[_ngcontent-%COMP%]{background-color:#25335b}",
      `.challenge-solution-container[_ngcontent-%COMP%] {
    position: relative;
    padding: 2rem 0;
  }
  .vertical-line[_ngcontent-%COMP%] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #FF3333;
    margin-left: -1.5px;
    z-index: 1;
  }


  .custom-card[_ngcontent-%COMP%] {
      border: 2px solid #e6e9f1; 
      border-radius: 12px; 
      background-color: #f8f9fb; 
      padding: 20px; 
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%; 
  }

  .icon-wrapper[_ngcontent-%COMP%] {
      min-width: 80px;
      min-height: 80px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }

  .icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
      max-width: 100%;
      height: auto;
  }

  .custom-image-size[_ngcontent-%COMP%] {
  width: 70%; 

  height: auto; 

  }
  .second-card[_ngcontent-%COMP%] {
      position: relative;
  }

  @media (min-width: 992px) {
      .second-card[_ngcontent-%COMP%] {
          left: -64px;
      }
  }

  @media (max-width: 991px) {
      .second-card[_ngcontent-%COMP%] {
          left: 0;
      }
  }

  .color-red[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {
      color: #FF3333;
  }

  .bg-custom--primary[_ngcontent-%COMP%] {
      background-color: #25335b;
  }

  .bg-custom--primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
      color: white;
  }

  .rectangle-red[_ngcontent-%COMP%] {
      background-color: #FF3333;
      border-radius: 8px;
      padding: 6px;
  }

  .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      color: white;
      font-size: 29px !important;
      line-height: 48px;
      padding-bottom: 18px;
  }

  .highlighted[_ngcontent-%COMP%] {
      background-color: #ff4136;
      color: #fff;
      padding: 0.2rem 0.5rem;
      border-radius: 0.25rem;
  }

  .vertical-divider[_ngcontent-%COMP%] {
      border-left: 1px solid #d1d1d1;
      height: 100%;
  }

  .icon-red[_ngcontent-%COMP%] {
      color: #ff4136;
      font-size: 1.5rem;
      margin-right: 1rem; 
  }

  .section-title[_ngcontent-%COMP%] {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 2rem;
  }

  .flex-content[_ngcontent-%COMP%] {
      display: flex;
      align-items: flex-start; 
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
  }

  .header[_ngcontent-%COMP%] {
      background: url('../../assets/img/bg/bg_about.webp') no-repeat center center/cover;
      min-height: 400px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .header-overlay[_ngcontent-%COMP%] {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      color: white;
  }

  

  @media (max-width: 767px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 24px;
          line-height: 36px;
      }

      .custom-card[_ngcontent-%COMP%] {
          padding: 15px;
      }

      .icon-wrapper[_ngcontent-%COMP%] {
          min-width: 60px;
          min-height: 60px;
      }

      .works-items[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
          font-size: 1.2rem;
      }

      .section-title[_ngcontent-%COMP%] {
          font-size: 1.5rem;
      }
  }

  @media (max-width: 575px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 20px;
          line-height: 32px;
      }
  }`,
    ],
  });
};
var It = class a {
  constructor(o) {
    this.metaService = o;
  }
  ngOnInit() {
    this.metaService.setCommercantHorecaPageMeta();
  }
  scrollToSection(o) {
    let i = document.getElementById(o);
    i && i.scrollIntoView({ behavior: "smooth" });
  }
  static ɵfac = function (i) {
    return new (i || a)(I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-profil-commercant-horeca"]],
    decls: 330,
    vars: 0,
    consts: [
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
      [1, "text-white"],
      [1, "service-single", "pt-120", "pb-130", 2, "padding", "64px"],
      [1, "row"],
      [1, "col-lg-4"],
      [1, "col-lg-8"],
      [1, "single-content"],
      [1, "display-5", "fw-bold"],
      [1, "bg-custom--primary", "text-white", "px-2", "rounded"],
      [1, "button-container"],
      [1, "home2-btn", "mb-4"],
      [1, "btn-red", 3, "click"],
      [1, "fa-solid", "fa-arrow-right"],
      [1, "single-img", "mt-35", "mb-4", "custom-single"],
      ["src", "../../assets/img/webp/30.webp", "alt", "", 1, "rounded-4"],
      [1, "defis", "row", "align-items-center", "mt-10"],
      [1, "col-md-4"],
      [
        "src",
        "../../assets/img/webp/19.webp",
        "alt",
        "D\xE9fis ASBL",
        1,
        "img-fluid",
        2,
        "border-radius",
        "16px",
      ],
      [1, "col-md-8", "mt-30"],
      [1, "list-unstyled", "pl-25"],
      [
        1,
        "fa",
        "fa-star",
        2,
        "font-size",
        "14px",
        "color",
        "#FF3333",
        "margin-right",
        "6px",
      ],
      [1, "bg-custom--primary"],
      [1, "works", "sec-padding"],
      [1, "row", "align-items-center"],
      [1, "col-md-12", "col-lg-6"],
      [1, "how-in-work-sec"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "800",
        1,
        "hadding",
        "hadding-p",
      ],
      [1, "rectangle-red"],
      [1, "space20"],
      [1, "works-items"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1200",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "me-3"],
      [1, "work-icon"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-2.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [1, "hadding", "hadding-p"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1400",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [
        "src",
        "../../assets/img/image/profil/works-icon-3.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "flip-right",
        "data-aos-duration",
        "1000",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [1, "works-img", "space-sm-50", "img-border"],
      ["src", "../../assets/img/webp/horeca.webp", "alt", "", 1, "img-fluid"],
      [1, "about", "sec-padding"],
      ["data-aos", "fade-right", "data-aos-duration", "800", 1, "col-md-6"],
      [1, "about-img", "img-border"],
      ["src", "../../assets/img/webp/15.webp", "alt", ""],
      [
        "data-aos",
        "fade-left",
        "data-aos-duration",
        "800",
        1,
        "col-md-6",
        "space-sm-30",
      ],
      [1, "about-haddings"],
      [1, "check-list-all", 2, "padding", "1px 0 !important"],
      [1, "chek-list", 2, "display", "block"],
      ["src", "../../assets/img/icons/checkfill.png", "alt", ""],
      [1, "home2-btn", "mt-4"],
      ["href", "/contact"],
      [1, "bg-custom--primary", "py-5"],
      ["data-aos", "fade-right", 1, "col-8", "col-md-6", "mb-4"],
      [1, "display-5", "fw-bold", 2, "font-size", "40px !important"],
      [1, "bg-danger", "text-white", "px-2", "rounded"],
      [1, "col-12", "col-md-6", "d-flex", "flex-column", "gap-4"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "200",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        1,
        "icon-wrapper",
        "me-3",
        "d-flex",
        "justify-content-center",
        "align-items-center",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border.png",
        "alt",
        "Icone Facturer",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "fw-semibold", "mb-2"],
      [1, "mb-0", "text-muted"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "400",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
        "second-card",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border2.png",
        "alt",
        "Icone Patrimoine",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "600",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border3.png",
        "alt",
        "Icone Risques",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      ["id", "targetSection", 1, "py-5"],
      [1, "mt-3"],
      [1, "text-center"],
      [1, "rectangle-red", "text-white"],
      [1, "col-md-6", "col-lg-4"],
      [1, "box-after"],
      [1, "service-box", "hadding", "hadding-p"],
      ["src", "../../assets/img/image/about-choose-icon-1.webp", "alt", ""],
      ["src", "../../assets/img/image/about-choose-icon-2.webp", "alt", ""],
      [1, "col-lg-4", "col-md-6"],
      ["src", "../../assets/img/image/about-choose-icon-3.webp", "alt", ""],
      [1, "bg-custom--primary", "mt-5"],
      [1, "container", "py-5"],
      [1, "section-title"],
      [1, "row", "g-4"],
      [1, "col-md-6"],
      [1, "case-card"],
      [1, "h4", "text-danger"],
      [1, "problem", "text-dark"],
      [1, "solution", "text-dark"],
      [1, "result", "text-dark"],
      ["src", "../../assets/img/webp/12.webp", "alt", ""],
      [1, "container", "my-5"],
      [1, "rounded-4", "bg-custom--primary", "text-white", "px-4"],
      [
        "data-aos",
        "fade-left",
        "data-aos-delay",
        "200",
        1,
        "col-md-6",
        "d-none",
        "d-md-flex",
        "justify-content-center",
        "align-items-end",
      ],
      [
        "src",
        "../../assets/img/image/profil/h9_footer_banner_img 1 1.webp",
        "alt",
        "Personne souriante",
        1,
        "img-fluid",
        "custom-image-size",
        2,
        "z-index",
        "2",
        "position",
        "relative",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-delay",
        "400",
        1,
        "col-12",
        "col-md-6",
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center",
        "align-items-md-start",
        "text-center",
        "text-md-start",
        "mt-4",
        "mt-md-0",
      ],
      [1, "fw-bold", "mb-4"],
      [1, "bg-danger", "text-white", "px-2", "py-1", "rounded-2"],
      ["data-aos", "fade-up", "data-aos-delay", "600", 1, "mb-4"],
      [
        "href",
        "#",
        "data-aos",
        "zoom-in",
        "data-aos-delay",
        "800",
        1,
        "btn",
        "btn-danger",
        "btn-sm",
        "px-3",
        "py-2",
      ],
      [1, "fas", "fa-arrow-right"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1"),
        n(4, "Commer\xE7ants & HORECA"),
        e(),
        t(5, "p", 3),
        n(6, "Accueil > Commer\xE7ants & HORECA"),
        e()()()(),
        t(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "div", 6),
        l(11, "app-sidebar"),
        e(),
        t(12, "div", 7)(13, "div", 8)(14, "h2", 9),
        n(
          15,
          " Ma\xEEtrisez vos finances pour garantir la p\xE9rennit\xE9 de "
        ),
        t(16, "span", 10),
        n(17, " votre activit\xE9 "),
        e()(),
        t(18, "div")(19, "p"),
        n(
          20,
          "En tant que commer\xE7ant ou acteur du secteur HORECA (h\xF4tellerie, restauration, caf\xE9s), vous jonglez quotidiennement avec de multiples responsabilit\xE9s : assurer une exp\xE9rience client de qualit\xE9, ma\xEEtriser vos co\xFBts et g\xE9rer vos obligations comptables. Ces d\xE9fis sont d\u2019autant plus complexes que vos marges sont souvent r\xE9duites et que vos op\xE9rations impliquent de nombreuses variables. "
        ),
        e(),
        t(21, "p"),
        n(
          22,
          "Chez MFINANCES, nous comprenons vos besoins sp\xE9cifiques et vous proposons un accompagnement personnalis\xE9 pour simplifier la gestion de vos finances, optimiser vos marges, digitaliser vos processus et garantir votre conformit\xE9 l\xE9gale. "
        ),
        e(),
        l(23, "br"),
        e(),
        t(24, "div", 11)(25, "div", 12)(26, "button", 13),
        O("click", function () {
          return s.scrollToSection("targetSection");
        }),
        n(27, "D\xE9couvrez ce que vous gagnerez avec nous "),
        l(28, "i", 14),
        e()()(),
        t(29, "div", 15),
        l(30, "img", 16),
        e(),
        t(31, "div", 17)(32, "h1"),
        n(
          33,
          "Transition num\xE9rique : Digitalisez vos processus pour un service client fluide"
        ),
        e(),
        t(34, "div", 18),
        l(35, "img", 19),
        e(),
        t(36, "div", 20)(37, "p"),
        n(
          38,
          "\xC0 l\u2019\xE8re du num\xE9rique, offrir une exp\xE9rience client omnicanale et fluide est un facteur cl\xE9 de diff\xE9renciation."
        ),
        e(),
        t(39, "strong"),
        n(40, "Strat\xE9gies omnicanales :"),
        e(),
        t(41, "ul", 21)(42, "li"),
        l(43, "i", 22),
        n(
          44,
          " Connectez vos points de contact physiques et num\xE9riques pour offrir une exp\xE9rience coh\xE9rente et personnalis\xE9e. "
        ),
        e(),
        t(45, "li"),
        l(46, "i", 22),
        n(
          47,
          " Synchronisez vos stocks et vos prix sur tous vos canaux pour \xE9viter les incoh\xE9rences et am\xE9liorer la satisfaction client. "
        ),
        e()(),
        t(48, "strong"),
        n(49, "Outils technologiques :"),
        e(),
        t(50, "ul", 21)(51, "li"),
        l(52, "i", 22),
        n(
          53,
          " Int\xE9grez des syst\xE8mes ERP pour g\xE9rer vos stocks, vos commandes et vos donn\xE9es clients en temps r\xE9el. "
        ),
        e(),
        t(54, "li"),
        l(55, "i", 22),
        n(
          56,
          " Utilisez des CRM pour renforcer la fid\xE9lit\xE9 client gr\xE2ce \xE0 des interactions personnalis\xE9es. "
        ),
        e()()()()()()()()(),
        t(57, "section", 23)(58, "div", 24)(59, "div", 2)(60, "div", 25)(
          61,
          "div",
          26
        )(62, "div", 27)(
          63,
          "div",
          28
        )(64, "h1"),
        n(65, "Optimisation de la tr\xE9sorerie : Gardez le contr\xF4le sur "),
        l(66, "br"),
        t(67, "span", 29),
        n(68, "vos finances"),
        e()(),
        t(69, "p"),
        n(
          70,
          "Une gestion rigoureuse de la tr\xE9sorerie vous permet de r\xE9pondre aux impr\xE9vus et de financer vos projets de d\xE9veloppement sans compromettre votre stabilit\xE9 financi\xE8re. "
        ),
        e()(),
        l(71, "div", 30),
        t(72, "div", 31)(73, "div", 32)(74, "div", 33)(75, "div", 34),
        l(76, "img", 35),
        e()(),
        t(77, "div", 36)(78, "h2"),
        n(79, "Pr\xE9visions et planification"),
        e(),
        t(80, "ul")(81, "li"),
        n(
          82,
          "\xC9laborez des sc\xE9narios financiers pour anticiper vos besoins et \xE9viter les p\xE9nuries de liquidit\xE9s."
        ),
        e(),
        t(83, "li"),
        n(
          84,
          "Analysez vos flux de tr\xE9sorerie pour identifier les gaspillages et r\xE9duire les co\xFBts superflus."
        ),
        e()()()(),
        t(85, "div", 37)(86, "div", 33)(87, "div", 34),
        l(88, "img", 38),
        e()(),
        t(89, "div", 36)(90, "h2"),
        n(91, "Solutions de financement adapt\xE9es"),
        e(),
        t(92, "ul")(93, "li")(94, "strong"),
        n(95, "Pr\xEAts bancaires :"),
        e(),
        n(
          96,
          " Id\xE9al pour financer des projets \xE0 long terme tout en pr\xE9servant votre ind\xE9pendance."
        ),
        e(),
        t(97, "li")(98, "strong"),
        n(99, "Leasing :"),
        e(),
        n(
          100,
          " Une option flexible pour acqu\xE9rir des \xE9quipements sans grever votre tr\xE9sorerie."
        ),
        e(),
        t(101, "li")(102, "strong"),
        n(103, "Franchise en capital :"),
        e(),
        n(
          104,
          " Payez uniquement les int\xE9r\xEAts pendant une p\xE9riode initiale pour pr\xE9server vos liquidit\xE9s."
        ),
        e()()()()()()(),
        t(105, "div", 39)(106, "div", 40),
        l(107, "img", 41),
        e()()()()()(),
        t(108, "section")(109, "div", 42)(110, "div", 2)(111, "div", 25)(
          112,
          "div",
          43
        )(113, "div", 44),
        l(114, "img", 45),
        e()(),
        t(115, "div", 46)(116, "div", 47)(117, "div", 36)(118, "h3"),
        n(
          119,
          "Gestion des stocks : Lib\xE9rez des liquidit\xE9s et \xE9vitez les pertes "
        ),
        e(),
        t(120, "p"),
        n(
          121,
          "Un stock mal g\xE9r\xE9 peut rapidement immobiliser des fonds et g\xE9n\xE9rer des pertes. Une gestion efficace vous permet de transformer vos stocks en liquidit\xE9s tout en assurant la satisfaction client. "
        ),
        e()(),
        t(122, "div", 48)(123, "div", 5)(124, "div")(125, "div", 49)(126, "p"),
        l(127, "img", 50),
        t(128, "strong"),
        n(129, "Strat\xE9gies efficaces :"),
        e()(),
        t(130, "ul")(131, "li"),
        n(
          132,
          "Favorisez les produits \xE0 forte rotation et lancez des promotions pour \xE9couler les invendus."
        ),
        e(),
        t(133, "li"),
        n(
          134,
          "Utilisez des logiciels de gestion pour suivre vos stocks en temps r\xE9el et anticiper les besoins."
        ),
        e()()(),
        l(135, "div", 30),
        t(136, "div", 49)(137, "p"),
        l(138, "img", 50),
        t(139, "strong"),
        n(140, "M\xE9thodes adapt\xE9es :"),
        e()(),
        t(141, "ul")(142, "li")(143, "strong"),
        n(144, "FIFO (First-In, First-Out) :"),
        e(),
        n(145, " Minimisez les pertes sur les produits p\xE9rissables."),
        e(),
        t(146, "li")(147, "strong"),
        n(148, "JIT (Just-In-Time) :"),
        e(),
        n(
          149,
          " R\xE9duisez les stocks inutiles en commandant uniquement en fonction des besoins imm\xE9diats."
        ),
        e()()()()()(),
        t(150, "div", 51)(151, "a", 52),
        n(152, "Contactez-nous "),
        l(153, "i", 14),
        e()()()()()()()(),
        t(154, "section", 53)(155, "div", 2)(156, "div", 25)(157, "div", 54)(
          158,
          "h2",
          55
        ),
        n(159, " Les d\xE9fis sp\xE9cifiques de "),
        l(160, "br"),
        t(161, "span", 56),
        n(162, " votre secteur "),
        e()()(),
        t(163, "div", 57)(164, "div", 58)(165, "div", 59),
        l(166, "img", 60),
        e(),
        t(167, "div")(168, "h5", 61),
        n(169, "Expertise sp\xE9cifique : "),
        e(),
        t(170, "p", 62),
        n(
          171,
          "Une exp\xE9rience approfondie dans la gestion des structures collaboratives. "
        ),
        e()()(),
        t(172, "div", 63)(173, "div", 59),
        l(174, "img", 64),
        e(),
        t(175, "div")(176, "h5", 61),
        n(177, "Solutions personnalis\xE9es :"),
        e(),
        t(178, "p", 62),
        n(179, "Des outils et services adapt\xE9s aux besoins de votre SCM. "),
        e()()(),
        t(180, "div", 65)(181, "div", 59),
        l(182, "img", 66),
        e(),
        t(183, "div")(184, "h5", 61),
        n(185, "Cash Collecting int\xE9gr\xE9 :"),
        e(),
        t(186, "p", 62),
        n(
          187,
          "Une gestion transparente et impartiale des cotisations, pour simplifier les relations entre membres. "
        ),
        e()()()()()()(),
        t(188, "section", 67)(189, "div", 2)(190, "div", 5)(191, "div", 68)(
          192,
          "div"
        )(193, "h2", 69),
        n(194, "Les solutions MFINANCES pour votre"),
        l(195, "br"),
        t(196, "span", 70),
        n(197, "activit\xE9"),
        e()()()(),
        t(198, "div", 71)(199, "div", 72)(200, "div", 73),
        l(201, "img", 74)(202, "div", 30),
        t(203, "h2"),
        n(204, "Accompagnement comptable et fiscal personnalis\xE9"),
        e(),
        t(205, "p"),
        n(
          206,
          " Gestion compl\xE8te de votre comptabilit\xE9 et respect des obligations l\xE9gales. Calcul et optimisation de la TVA en fonction des prestations (vente \xE0 emporter, sur place, h\xE9bergement). "
        ),
        e(),
        l(207, "div", 30),
        e()()(),
        t(208, "div", 71)(209, "div", 72)(210, "div", 73),
        l(211, "img", 75)(212, "div", 30),
        t(213, "h2"),
        n(214, "Analyse des co\xFBts et des performances"),
        e(),
        t(215, "p"),
        n(
          216,
          " Calcul d\xE9taill\xE9 des co\xFBts alimentaires, des prix de revient et des marges pour chaque produit ou service. Identification des opportunit\xE9s pour r\xE9duire vos co\xFBts fixes et variables. "
        ),
        e(),
        l(217, "div", 30),
        e()()(),
        t(218, "div", 76)(219, "div", 72)(220, "div", 73),
        l(221, "img", 77)(222, "div", 30),
        t(223, "h2"),
        n(224, "Outils digitaux pour une gestion simplifi\xE9e"),
        e(),
        t(225, "p"),
        n(
          226,
          " Int\xE9gration de votre syst\xE8me de caisse avec un logiciel comptable pour un suivi en temps r\xE9el. Automatisation des rapports financiers pour une gestion simplifi\xE9e et sans erreurs. "
        ),
        e(),
        l(227, "div", 30),
        e()()()()()(),
        t(228, "section", 78)(229, "div", 79)(230, "h1", 80),
        n(231, "Exemples Concrets : R\xE9sultats Tangibles avec MFINANCES"),
        e(),
        t(232, "div", 81)(233, "div", 82)(234, "div", 83)(235, "h2", 84),
        n(236, "Un Restaurant HORECA"),
        e(),
        t(237, "p", 85)(238, "strong"),
        n(239, "Probl\xE8me :"),
        e(),
        n(
          240,
          " Stockage excessif entra\xEEnant des co\xFBts \xE9lev\xE9s et des invendus fr\xE9quents."
        ),
        e(),
        t(241, "p", 86)(242, "strong"),
        n(243, "Solution :"),
        e(),
        n(
          244,
          " Adoption d\u2019une gestion en flux tendu pour ajuster les commandes aux besoins r\xE9els."
        ),
        e(),
        t(245, "p", 87)(246, "strong"),
        n(247, "R\xE9sultat :"),
        e(),
        n(
          248,
          " R\xE9duction de 30 % des co\xFBts de stockage et am\xE9lioration significative de la tr\xE9sorerie."
        ),
        e()()(),
        t(249, "div", 82)(250, "div", 83)(251, "h2", 84),
        n(252, "Un Magasin de V\xEAtements"),
        e(),
        t(253, "p", 85)(254, "strong"),
        n(255, "Probl\xE8me :"),
        e(),
        n(
          256,
          " Accumulation de stocks sur des produits \xE0 faible rotation."
        ),
        e(),
        t(257, "p", 86)(258, "strong"),
        n(259, "Solution :"),
        e(),
        n(
          260,
          " Analyse des ventes pour prioriser les articles populaires et lancement de promotions sur les stocks dormants."
        ),
        e(),
        t(261, "p", 87)(262, "strong"),
        n(263, "R\xE9sultat :"),
        e(),
        n(
          264,
          " Augmentation de 15 % du taux de rotation des stocks et 20 % de liquidit\xE9s disponibles suppl\xE9mentaires."
        ),
        e()()()()()(),
        t(265, "section")(266, "div", 42)(267, "div", 2)(268, "div", 25)(
          269,
          "div",
          46
        )(270, "div", 47)(
          271,
          "div",
          36
        )(272, "h3"),
        n(273, "Pourquoi choisir MFINANCES pour votre activit\xE9 ?"),
        e(),
        t(274, "p"),
        n(
          275,
          "Des solutions sur mesure pour r\xE9pondre aux d\xE9fis sp\xE9cifiques de votre secteur et accompagner votre croissance."
        ),
        e()(),
        t(276, "div", 48)(277, "div", 5)(278, "div")(279, "div", 49)(280, "p"),
        l(281, "img", 50),
        t(282, "strong"),
        n(283, "Une expertise sectorielle reconnue :"),
        e()(),
        t(284, "ul")(285, "li"),
        n(
          286,
          "Des solutions adapt\xE9es aux r\xE9alit\xE9s du secteur HORECA et du commerce en Belgique."
        ),
        e()()(),
        l(287, "div", 30),
        t(288, "div", 49)(289, "p"),
        l(290, "img", 50),
        t(291, "strong"),
        n(292, "Des outils et un accompagnement cl\xE9 en main :"),
        e()(),
        t(293, "ul")(294, "li"),
        n(
          295,
          "Mise en place de logiciels, tableaux de bord et syst\xE8mes de suivi adapt\xE9s \xE0 votre activit\xE9."
        ),
        e()()(),
        l(296, "div", 30),
        t(297, "div", 49)(298, "p"),
        l(299, "img", 50),
        t(300, "strong"),
        n(301, "Un partenaire de confiance pour votre r\xE9ussite :"),
        e()(),
        t(302, "ul")(303, "li"),
        n(
          304,
          "Un suivi proactif et des conseils sur mesure pour s\xE9curiser vos marges et anticiper vos besoins financiers."
        ),
        e()()()()()(),
        t(305, "div", 51)(306, "a", 52),
        n(307, "Contactez-nous "),
        l(308, "i", 14),
        e()()()(),
        t(309, "div", 43)(310, "div", 44),
        l(311, "img", 88),
        e()()()()()(),
        t(312, "section", 89)(313, "div", 90)(314, "div", 25)(315, "div", 91),
        l(316, "img", 92),
        e(),
        t(317, "div", 93)(318, "h2", 94),
        n(319, " Transformez vos "),
        l(320, "br"),
        t(321, "span", 95),
        n(322, "d\xE9fis en opportunit\xE9s"),
        e(),
        n(323, ". "),
        e(),
        t(324, "p", 96),
        n(
          325,
          " Contactez-nous pour un diagnostic gratuit et d\xE9couvrez comment MFINANCES peut vous aider \xE0 optimiser vos marges, digitaliser vos processus et lib\xE9rer votre tr\xE9sorerie. "
        ),
        e(),
        t(326, "a", 97),
        n(327, " Contactez-nous "),
        l(328, "i", 98),
        e()()()()(),
        l(329, "app-recommandation-profil"));
    },
    dependencies: [oe, se],
    styles: [
      ".section-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;text-align:center;margin-bottom:1rem;color:#111}.case-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;box-shadow:0 4px 6px #0000001a;padding:2rem;transition:transform .2s}.case-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px)}.problem[_ngcontent-%COMP%], .solution[_ngcontent-%COMP%], .result[_ngcontent-%COMP%]{margin-bottom:1rem}.h4[_ngcontent-%COMP%]{font-weight:700}",
      `.challenge-solution-container[_ngcontent-%COMP%] {
    position: relative;
    padding: 2rem 0;
  }
  .vertical-line[_ngcontent-%COMP%] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #FF3333;
    margin-left: -1.5px;
    z-index: 1;
  }


  .custom-card[_ngcontent-%COMP%] {
      border: 2px solid #e6e9f1; 
      border-radius: 12px; 
      background-color: #f8f9fb; 
      padding: 20px; 
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%; 
  }

  .icon-wrapper[_ngcontent-%COMP%] {
      min-width: 80px;
      min-height: 80px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }

  .icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
      max-width: 100%;
      height: auto;
  }

  .custom-image-size[_ngcontent-%COMP%] {
  width: 70%; 

  height: auto; 

  }
  .second-card[_ngcontent-%COMP%] {
      position: relative;
  }

  @media (min-width: 992px) {
      .second-card[_ngcontent-%COMP%] {
          left: -64px;
      }
  }

  @media (max-width: 991px) {
      .second-card[_ngcontent-%COMP%] {
          left: 0;
      }
  }

  .color-red[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {
      color: #FF3333;
  }

  .bg-custom--primary[_ngcontent-%COMP%] {
      background-color: #25335b;;
  }

  .bg-custom--primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
      color: white;
  }

  .rectangle-red[_ngcontent-%COMP%] {
      background-color: #FF3333;
      border-radius: 8px;
      padding: 6px;
  }

  .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      color: white;
      font-size: 29px !important;
      line-height: 48px;
      padding-bottom: 18px;
  }

  .highlighted[_ngcontent-%COMP%] {
      background-color: #ff4136;
      color: #fff;
      padding: 0.2rem 0.5rem;
      border-radius: 0.25rem;
  }

  .vertical-divider[_ngcontent-%COMP%] {
      border-left: 1px solid #d1d1d1;
      height: 100%;
  }

  .icon-red[_ngcontent-%COMP%] {
      color: #ff4136;
      font-size: 1.5rem;
      margin-right: 1rem; 
  }

  .section-title[_ngcontent-%COMP%] {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 2rem;
  }

  .flex-content[_ngcontent-%COMP%] {
      display: flex;
      align-items: flex-start; 
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
  }

  .header[_ngcontent-%COMP%] {
      background: url('../../assets/img/bg/bg_about.webp') no-repeat center center/cover;
      min-height: 400px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .header-overlay[_ngcontent-%COMP%] {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      color: white;
  }

  

  @media (max-width: 767px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 24px;
          line-height: 36px;
      }

      .custom-card[_ngcontent-%COMP%] {
          padding: 15px;
      }

      .icon-wrapper[_ngcontent-%COMP%] {
          min-width: 60px;
          min-height: 60px;
      }

      .works-items[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
          font-size: 1.2rem;
      }

      .section-title[_ngcontent-%COMP%] {
          font-size: 1.5rem;
      }
  }

  @media (max-width: 575px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 20px;
          line-height: 32px;
      }
  }`,
    ],
  });
};
var Ft = class a {
  constructor(o) {
    this.metaService = o;
  }
  ngOnInit() {
    this.metaService.setProfessionnelSantePageMeta();
  }
  scrollToSection(o) {
    let i = document.getElementById(o);
    i && i.scrollIntoView({ behavior: "smooth" });
  }
  static ɵfac = function (i) {
    return new (i || a)(I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-professionel-sante"]],
    decls: 299,
    vars: 0,
    consts: [
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
      [1, "text-white"],
      [1, "service-single", "pt-120", "pb-130", 2, "padding", "64px"],
      [1, "row"],
      [1, "col-lg-4"],
      [1, "col-lg-8"],
      [1, "single-content"],
      [1, "display-5", "fw-bold"],
      [1, "bg-custom--primary", "text-white", "px-2", "rounded"],
      [1, "button-container"],
      [1, "home2-btn", "mb-4"],
      [1, "btn-red", 3, "click"],
      [1, "fa-solid", "fa-arrow-right"],
      [1, "single-img", "mt-35", "mb-4", "custom-single"],
      ["src", "../../assets/img/webp/29.webp", "alt", "", 1, "rounded-4"],
      [1, "bg-custom--primary"],
      [1, "works", "sec-padding"],
      [1, "row", "align-items-center"],
      [1, "col-md-12", "col-lg-6"],
      [1, "how-in-work-sec"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "800",
        1,
        "hadding",
        "hadding-p",
      ],
      [1, "rectangle-red"],
      [1, "space20"],
      [1, "works-items"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1200",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "me-3"],
      [1, "work-icon"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-1.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [1, "hadding", "hadding-p"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1400",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [
        "src",
        "../../assets/img/image/profil/works-icon-2.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1600",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [
        "src",
        "../../assets/img/image/profil/works-icon-3.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1800",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      ["aria-hidden", "true", 1, "fa", "fa-cogs"],
      [
        "data-aos",
        "flip-right",
        "data-aos-duration",
        "1000",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [1, "works-img", "space-sm-50", "img-border"],
      ["src", "../../assets/img/webp/42.webp", "alt", "", 1, "img-fluid"],
      [1, "home2-about", "sec-padding"],
      [
        "data-aos",
        "flip-left",
        "data-aos-duration",
        "800",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [1, "home2-about-img", "img-border"],
      ["src", "../../assets/img/webp/31.webp", "alt", ""],
      [1, "home2-about-text"],
      [1, "home2-about-after"],
      [
        "data-aos",
        "fade-left",
        "data-aos-duration",
        "800",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [
        1,
        "home2-hadding",
        "home2-hadding-p",
        "home2-about",
        "hadding-span",
        "home2-padding-after",
      ],
      [1, "space30"],
      [1, "home2-about-list"],
      [1, "li-custom"],
      ["src", "assets/img/icons/chek-cercle.svg", "alt", ""],
      [1, "space10"],
      [1, "home2-btn"],
      ["href", "about.html"],
      [1, "fa", "fa-arrow-right"],
      [1, "about", "sec-padding"],
      [
        "data-aos",
        "fade-left",
        "data-aos-duration",
        "800",
        1,
        "col-md-6",
        "space-sm-30",
      ],
      [1, "about-haddings"],
      [1, "home2-hadding", "hadding-p"],
      [1, "check-list-all", 2, "padding", "1px 0 !important"],
      [1, "chek-list"],
      ["src", "../../assets/img/icons/checkfill.png", "alt", ""],
      [1, "home2-btn", "mt-4"],
      ["href", "/contact"],
      ["data-aos", "fade-right", "data-aos-duration", "800", 1, "col-md-6"],
      [1, "about-img", "img-border"],
      ["src", "../../assets/img/webp/32.webp", "alt", ""],
      ["id", "targetSection", 1, "bg-custom--primary"],
      ["src", "../../assets/img/webp/1.webp", "alt", "", 1, "img-fluid"],
      [1, "py-5"],
      ["data-aos", "fade-right", 1, "col-8", "col-md-6", "mb-4"],
      [1, "display-5", "fw-bold", 2, "font-size", "40px !important"],
      [1, "bg-danger", "text-white", "px-2", "rounded"],
      [1, "col-12", "col-md-6", "d-flex", "flex-column", "gap-4"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "200",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        1,
        "icon-wrapper",
        "me-3",
        "d-flex",
        "justify-content-center",
        "align-items-center",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border.png",
        "alt",
        "Icone Expertise",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "fw-semibold", "mb-2"],
      [1, "mb-0", "text-muted"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "400",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
        "second-card",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border2.png",
        "alt",
        "Icone Accompagnement",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "600",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border3.png",
        "alt",
        "Icone Solutions",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "container", "my-5"],
      [1, "rounded-4", "bg-custom--primary", "text-white", "px-4"],
      [
        "data-aos",
        "fade-left",
        "data-aos-delay",
        "200",
        1,
        "col-md-6",
        "d-none",
        "d-md-flex",
        "justify-content-center",
        "align-items-end",
      ],
      [
        "src",
        "../../assets/img/image/profil/h9_footer_banner_img 1 1.webp",
        "alt",
        "Personne souriante",
        1,
        "img-fluid",
        "custom-image-size",
        2,
        "z-index",
        "2",
        "position",
        "relative",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-delay",
        "400",
        1,
        "col-12",
        "col-md-6",
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center",
        "align-items-md-start",
        "text-center",
        "text-md-start",
        "mt-4",
        "mt-md-0",
      ],
      [1, "fw-bold", "mb-4"],
      [1, "bg-danger", "text-white", "px-2", "py-1", "rounded-2"],
      ["data-aos", "fade-up", "data-aos-delay", "600", 1, "mb-4"],
      [
        "href",
        "#",
        "data-aos",
        "zoom-in",
        "data-aos-delay",
        "800",
        1,
        "btn",
        "btn-danger",
        "btn-sm",
        "px-3",
        "py-2",
      ],
      [1, "fas", "fa-arrow-right"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1"),
        n(4, "Professionnels de la sant\xE9"),
        e(),
        t(5, "p", 3),
        n(6, "Accueil > Professionnels de la sant\xE9"),
        e()()()(),
        t(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "div", 6),
        l(11, "app-sidebar"),
        e(),
        t(12, "div", 7)(13, "div", 8)(14, "h2", 9),
        n(15, " Des solutions adapt\xE9es \xE0 vos "),
        t(16, "span", 10),
        n(17, " d\xE9fis sp\xE9cifiques "),
        e()(),
        t(18, "div")(19, "p"),
        n(
          20,
          "M\xE9decins, dentistes, v\xE9t\xE9rinaires ou kin\xE9sith\xE9rapeutes, votre quotidien oscille entre la prise en charge des patients et la gestion de vos obligations comptables et fiscales. Que vous soyez ind\xE9pendant, gestionnaire d\u2019un centre m\xE9dical, membre d\u2019une association ou en situation hybride, MFINANCES est l\xE0 pour vous accompagner avec des solutions sur mesure. "
        ),
        e(),
        l(21, "br"),
        e(),
        t(22, "div", 11)(23, "div", 12)(24, "button", 13),
        O("click", function () {
          return s.scrollToSection("targetSection");
        }),
        n(25, "D\xE9couvrez ce que vous gagnerez avec nous "),
        l(26, "i", 14),
        e()()(),
        t(27, "div", 15),
        l(28, "img", 16),
        e()()()()()(),
        t(29, "section", 17)(30, "div", 18)(31, "div", 2)(32, "div", 19)(
          33,
          "div",
          20
        )(34, "div", 21)(
          35,
          "div",
          22
        )(36, "h1"),
        n(37, "Centres m\xE9dicaux et professionnels de sant\xE9 : "),
        l(38, "br"),
        t(39, "span", 23),
        n(40, "Optimisez votre organisation"),
        e()(),
        t(41, "p"),
        n(
          42,
          "Des solutions adapt\xE9es \xE0 chaque structure pour maximiser vos revenus, mutualiser vos frais et simplifier la gestion comptable."
        ),
        e()(),
        l(43, "div", 24),
        t(44, "div", 25)(45, "div", 26)(46, "div", 27)(47, "div", 28),
        l(48, "img", 29),
        e()(),
        t(49, "div", 30)(50, "h2"),
        n(51, "Centres m\xE9dicaux"),
        e(),
        t(52, "ul")(53, "li"),
        n(
          54,
          "Organisez vos finances collectives avec une tenue comptable transparente."
        ),
        e(),
        t(55, "li"),
        n(
          56,
          "Optimisez la fiscalit\xE9 collective et individuelle gr\xE2ce \xE0 des d\xE9ductions strat\xE9giques."
        ),
        e(),
        t(57, "li"),
        n(
          58,
          "Facilitez les d\xE9cisions strat\xE9giques pour le d\xE9veloppement du centre."
        ),
        e()()()(),
        t(59, "div", 31)(60, "div", 27)(61, "div", 28),
        l(62, "img", 32),
        e()(),
        t(63, "div", 30)(64, "h2"),
        n(65, "Associations m\xE9dicales"),
        e(),
        t(66, "ul")(67, "li"),
        n(
          68,
          "R\xE9duisez les co\xFBts gr\xE2ce \xE0 la mutualisation des charges (loyers, abonnements, etc.)."
        ),
        e(),
        t(69, "li"),
        n(
          70,
          "Assurez une r\xE9partition \xE9quitable et transparente des charges communes."
        ),
        e(),
        t(71, "li"),
        n(
          72,
          "Pr\xE9servez l'ind\xE9pendance de chaque m\xE9decin pour ses revenus et d\xE9cisions professionnelles."
        ),
        e()()()(),
        t(73, "div", 33)(74, "div", 27)(75, "div", 28),
        l(76, "img", 34),
        e()(),
        t(77, "div", 30)(78, "h2"),
        n(79, "Professionnels ind\xE9pendants"),
        e(),
        t(80, "ul")(81, "li"),
        n(
          82,
          "Facturez vos prestations avec des management fees d\xE9ductibles."
        ),
        e(),
        t(83, "li"),
        n(
          84,
          "Optimisez votre patrimoine en r\xE9investissant dans des projets strat\xE9giques."
        ),
        e(),
        t(85, "li"),
        n(
          86,
          "R\xE9duisez vos charges fiscales tout en restant en conformit\xE9 l\xE9gale."
        ),
        e()()()(),
        t(87, "div", 35)(88, "div", 27)(89, "div", 28),
        l(90, "i", 36),
        e()(),
        t(91, "div", 30)(92, "h2"),
        n(93, "Combinaison : Activit\xE9 mixte"),
        e(),
        t(94, "ul")(95, "li"),
        n(
          96,
          "Combinez les avantages des mod\xE8les soci\xE9t\xE9 d\u2019exploitation et soci\xE9t\xE9 de management patrimoniale."
        ),
        e(),
        t(97, "li"),
        n(
          98,
          "Optimisez la gestion fiscale globale pour chaque source de revenus."
        ),
        e(),
        t(99, "li"),
        n(
          100,
          "Simplifiez la gestion comptable avec des outils adapt\xE9s et centralis\xE9s."
        ),
        e()()()()()()(),
        t(101, "div", 37)(102, "div", 38),
        l(103, "img", 39),
        e()()()()()(),
        t(104, "section")(105, "div", 40)(106, "div", 2)(107, "div", 19)(
          108,
          "div",
          41
        )(109, "div", 42),
        l(110, "img", 43),
        t(111, "div", 44)(112, "div", 45)(113, "p"),
        n(
          114,
          "R\xE9sultat : Une rentabilit\xE9 accrue et une s\xE9curit\xE9 financi\xE8re renforc\xE9e pour anticiper sa retraite et transmettre son patrimoine."
        ),
        e()()()()(),
        t(115, "div", 46)(116, "div", 47)(117, "h2"),
        n(
          118,
          "Exemple concret : Maximisez vos avantages fiscaux et patrimoniaux"
        ),
        e(),
        t(119, "p"),
        n(
          120,
          "Un m\xE9decin g\xE9n\xE9raliste, avec un revenu annuel de 120 000 \u20AC, a sollicit\xE9 MFINANCES pour optimiser sa gestion fiscale et patrimoniale. Nos experts ont propos\xE9 une restructuration compl\xE8te :"
        ),
        e()(),
        l(121, "div", 48),
        t(122, "div", 49)(123, "ul", 50)(124, "li"),
        l(125, "img", 51),
        n(
          126,
          "Passage en soci\xE9t\xE9 avec une strat\xE9gie de d\xE9veloppement immobilier. "
        ),
        e(),
        t(127, "li"),
        l(128, "img", 51),
        n(
          129,
          "R\xE9duction des imp\xF4ts annuels de 60 %, soit 36 000 \u20AC \xE9conomis\xE9s. "
        ),
        e(),
        t(130, "li"),
        l(131, "img", 51),
        n(
          132,
          "Constitution d\u2019un patrimoine immobilier valoris\xE9 \xE0 500 000 \u20AC sur 10 ans. "
        ),
        e()()(),
        l(133, "div", 52),
        t(134, "div", 53)(135, "a", 54),
        n(136, "Contactez-Nous"),
        l(137, "i", 55),
        e()()()()()()(),
        t(138, "div", 56)(139, "div", 2)(140, "div", 19)(141, "div", 57)(
          142,
          "div",
          58
        )(
          143,
          "div",
          59
        )(144, "h2"),
        n(
          145,
          "TVA et professions m\xE9dicales : Comprendre l\u2019assujettissement mixte"
        ),
        e()(),
        t(146, "div", 60)(147, "div", 5)(148, "div")(149, "div", 61)(150, "p"),
        l(151, "img", 62),
        t(152, "strong"),
        n(153, "Optimisez vos d\xE9ductions :"),
        e(),
        n(
          154,
          " D\xE9duisez la TVA sur les frais sp\xE9cifiques li\xE9s \xE0 vos prestations taxables."
        ),
        e()(),
        l(155, "div", 24),
        t(156, "div", 61)(157, "p"),
        l(158, "img", 62),
        t(159, "strong"),
        n(160, "Appliquez un prorata g\xE9n\xE9ral :"),
        e(),
        n(
          161,
          " G\xE9rez efficacement la TVA sur les frais g\xE9n\xE9raux, en tenant compte du ratio entre vos revenus soumis et non soumis \xE0 TVA."
        ),
        e()()()()(),
        t(162, "p"),
        n(
          163,
          "Une gestion rigoureuse est essentielle pour \xE9viter les erreurs et maximiser vos avantages fiscaux. Contactez un expert MFINANCES d\xE8s aujourd\u2019hui pour clarifier vos obligations et optimiser votre gestion TVA."
        ),
        e(),
        t(164, "div", 63)(165, "a", 64),
        n(166, "Contactez-nous "),
        l(167, "i", 14),
        e()()()(),
        t(168, "div", 65)(169, "div", 66),
        l(170, "img", 67),
        e()()()()(),
        t(171, "section", 68)(172, "div", 18)(173, "div", 2)(174, "div", 19)(
          175,
          "div",
          37
        )(176, "div", 38),
        l(177, "img", 69),
        e()(),
        t(178, "div", 20)(179, "div", 21)(180, "div", 22)(181, "h1"),
        n(
          182,
          "Les services de MFINANCES pour les professionnels de la sant\xE9 : "
        ),
        l(183, "br"),
        t(184, "span", 23),
        n(185, "Un accompagnement complet et sur mesure"),
        e()()(),
        l(186, "div", 24),
        t(187, "div", 25)(188, "div", 26)(189, "div", 27)(190, "div", 28),
        l(191, "img", 29),
        e()(),
        t(192, "div", 30)(193, "h2"),
        n(194, "D\xE9velopper et structurer votre activit\xE9 m\xE9dicale"),
        e(),
        t(195, "ul")(196, "li"),
        n(
          197,
          "Passage en soci\xE9t\xE9 : Optimisez vos revenus et votre fiscalit\xE9 gr\xE2ce \xE0 des structures adapt\xE9es et bien con\xE7ues."
        ),
        e(),
        t(198, "li"),
        n(
          199,
          "Investissements strat\xE9giques : Planifiez vos acquisitions, comme du mat\xE9riel m\xE9dical ou des locaux, pour maximiser leur rentabilit\xE9 et r\xE9duire votre charge fiscale."
        ),
        e(),
        t(200, "li"),
        n(
          201,
          "Gestion immobili\xE8re proactive : Transformez vos d\xE9penses en un patrimoine immobilier solide pour assurer votre s\xE9curit\xE9 financi\xE8re \xE0 long terme et pr\xE9parer une transmission optimale."
        ),
        e(),
        t(202, "li"),
        n(
          203,
          "Optimisation des ressources professionnelles : Profitez d\u2019avantages fiscaux tels que le choix optimal entre indemnit\xE9s kilom\xE9triques ou v\xE9hicule de soci\xE9t\xE9."
        ),
        e()()()(),
        t(204, "div", 31)(205, "div", 27)(206, "div", 28),
        l(207, "img", 32),
        e()(),
        t(208, "div", 30)(209, "h2"),
        n(
          210,
          "Pr\xE9parer l\u2019avenir : S\xE9curisez votre patrimoine et votre succession"
        ),
        e(),
        t(211, "ul")(212, "li"),
        n(
          213,
          "Transmission ou cession de patient\xE8le : Maximisez la valeur de votre activit\xE9 gr\xE2ce \xE0 une strat\xE9gie de cession bien structur\xE9e."
        ),
        e(),
        t(214, "li"),
        n(
          215,
          "Pr\xE9paration de la retraite : Identifiez et mettez en \u0153uvre des dispositifs d\u2019\xE9pargne et d\u2019investissement qui s\xE9curisent vos revenus futurs."
        ),
        e(),
        t(216, "li"),
        n(
          217,
          "Optimisation fiscale en fin de carri\xE8re : R\xE9duisez vos charges fiscales gr\xE2ce \xE0 des strat\xE9gies adapt\xE9es \xE0 votre situation personnelle et professionnelle."
        ),
        e()()()(),
        t(218, "div", 33)(219, "div", 27)(220, "div", 28),
        l(221, "img", 34),
        e()(),
        t(222, "div", 30)(223, "h2"),
        n(224, "Cr\xE9er votre entreprise dans le secteur m\xE9dical"),
        e(),
        t(225, "ul")(226, "li"),
        n(
          227,
          "Choix du statut juridique : Adaptez votre structure \xE0 vos ambitions, qu\u2019il s\u2019agisse d\u2019exercer seul ou en groupe."
        ),
        e(),
        t(228, "li"),
        n(
          229,
          "Planification strat\xE9gique : \xC9laboration d\u2019un plan financier \xE0 plusieurs ann\xE9es pour d\xE9finir des objectifs clairs et garantir une croissance durable."
        ),
        e(),
        t(230, "li"),
        n(
          231,
          "Support administratif complet : Simplifiez vos d\xE9marches l\xE9gales et assurez la conformit\xE9 de votre entreprise d\xE8s sa cr\xE9ation."
        ),
        e()()()(),
        t(232, "div", 35)(233, "div", 27)(234, "div", 28),
        l(235, "i", 36),
        e()(),
        t(236, "div", 30)(237, "h2"),
        n(238, "Simplifier la gestion de votre activit\xE9"),
        e(),
        t(239, "ul")(240, "li"),
        n(
          241,
          "Gestion comptable compl\xE8te : Comptes annuels, d\xE9clarations fiscales, gestion des notes de frais, factures clients et fournisseurs."
        ),
        e(),
        t(242, "li"),
        n(
          243,
          "Suivi des indicateurs cl\xE9s : Analyse de votre rentabilit\xE9, de vos flux de tr\xE9sorerie et de vos performances financi\xE8res pour une ma\xEEtrise totale de votre activit\xE9."
        ),
        e(),
        t(244, "li"),
        n(
          245,
          "Conseils quotidiens : R\xE9solution rapide de vos probl\xE9matiques administratives et financi\xE8res gr\xE2ce \xE0 nos experts d\xE9di\xE9s."
        ),
        e()()()()()()()()()()(),
        t(246, "section", 70)(247, "div", 2)(248, "div", 19)(249, "div", 71)(
          250,
          "h2",
          72
        ),
        n(251, " Pourquoi choisir "),
        l(252, "br"),
        t(253, "span", 73),
        n(254, "MFINANCES"),
        e(),
        n(255, " pour vous accompagner\u202F? "),
        e()(),
        t(256, "div", 74)(257, "div", 75)(258, "div", 76),
        l(259, "img", 77),
        e(),
        t(260, "div")(261, "h5", 78),
        n(262, "Une expertise cibl\xE9e :"),
        e(),
        t(263, "p", 79),
        n(
          264,
          "Nos sp\xE9cialistes ma\xEEtrisent les sp\xE9cificit\xE9s du secteur m\xE9dical et param\xE9dical."
        ),
        e()()(),
        t(265, "div", 80)(266, "div", 76),
        l(267, "img", 81),
        e(),
        t(268, "div")(269, "h5", 78),
        n(270, "Un accompagnement global :"),
        e(),
        t(271, "p", 79),
        n(
          272,
          "De la cr\xE9ation de votre structure \xE0 la transmission de votre activit\xE9, nous sommes \xE0 vos c\xF4t\xE9s \xE0 chaque \xE9tape."
        ),
        e()()(),
        t(273, "div", 82)(274, "div", 76),
        l(275, "img", 83),
        e(),
        t(276, "div")(277, "h5", 78),
        n(278, "Des solutions personnalis\xE9es :"),
        e(),
        t(279, "p", 79),
        n(
          280,
          "Adapt\xE9es \xE0 vos besoins, pour optimiser vos finances et faciliter votre quotidien."
        ),
        e()()()()()()(),
        t(281, "section", 84)(282, "div", 85)(283, "div", 19)(284, "div", 86),
        l(285, "img", 87),
        e(),
        t(286, "div", 88)(287, "h2", 89),
        n(288, " Confiez votre activit\xE9 \xE0"),
        l(289, "br"),
        t(290, "span", 90),
        n(291, "des experts"),
        e(),
        n(292, ". "),
        e(),
        t(293, "p", 91),
        n(
          294,
          " Prenez rendez-vous d\xE8s aujourd\u2019hui avec un conseiller MFINANCES pour b\xE9n\xE9ficier d\u2019une analyse personnalis\xE9e et d\u2019un accompagnement complet. Transformez vos d\xE9fis financiers en opportunit\xE9s de croissance. "
        ),
        e(),
        t(295, "a", 92),
        n(296, " Contactez-nous "),
        l(297, "i", 93),
        e()()()()(),
        l(298, "app-recommandation-profil"));
    },
    dependencies: [oe, se],
    styles: [
      ".li-custom[_ngcontent-%COMP%]{list-style-type:none}.work-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px;color:#fff}",
      `.challenge-solution-container[_ngcontent-%COMP%] {
    position: relative;
    padding: 2rem 0;
  }
  .vertical-line[_ngcontent-%COMP%] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #FF3333;
    margin-left: -1.5px;
    z-index: 1;
  }


  .custom-card[_ngcontent-%COMP%] {
      border: 2px solid #e6e9f1; 
      border-radius: 12px; 
      background-color: #f8f9fb; 
      padding: 20px; 
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%; 
  }

  .icon-wrapper[_ngcontent-%COMP%] {
      min-width: 80px;
      min-height: 80px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }

  .icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
      max-width: 100%;
      height: auto;
  }

  .custom-image-size[_ngcontent-%COMP%] {
  width: 70%; 

  height: auto; 

  }
  .second-card[_ngcontent-%COMP%] {
      position: relative;
  }

  @media (min-width: 992px) {
      .second-card[_ngcontent-%COMP%] {
          left: -64px;
      }
  }

  @media (max-width: 991px) {
      .second-card[_ngcontent-%COMP%] {
          left: 0;
      }
  }

  .color-red[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {
      color: #FF3333;
  }

  .bg-custom--primary[_ngcontent-%COMP%] {
      background-color: #25335b;
  }

  .bg-custom--primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
      color: white;
  }

  .rectangle-red[_ngcontent-%COMP%] {
      background-color: #FF3333;
      border-radius: 8px;
      padding: 6px;
  }

  .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      color: white;
      font-size: 29px !important;
      line-height: 48px;
      padding-bottom: 18px;
  }

  .highlighted[_ngcontent-%COMP%] {
      background-color: #ff4136;
      color: #fff;
      padding: 0.2rem 0.5rem;
      border-radius: 0.25rem;
  }

  .vertical-divider[_ngcontent-%COMP%] {
      border-left: 1px solid #d1d1d1;
      height: 100%;
  }

  .icon-red[_ngcontent-%COMP%] {
      color: #ff4136;
      font-size: 1.5rem;
      margin-right: 1rem; 
  }

  .section-title[_ngcontent-%COMP%] {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 2rem;
  }

  .flex-content[_ngcontent-%COMP%] {
      display: flex;
      align-items: flex-start; 
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
  }

  .header[_ngcontent-%COMP%] {
      background: url('../../assets/img/bg/bg_about.webp') no-repeat center center/cover;
      min-height: 400px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .header-overlay[_ngcontent-%COMP%] {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      color: white;
  }

  

  @media (max-width: 767px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 24px;
          line-height: 36px;
      }

      .custom-card[_ngcontent-%COMP%] {
          padding: 15px;
      }

      .icon-wrapper[_ngcontent-%COMP%] {
          min-width: 60px;
          min-height: 60px;
      }

      .works-items[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
          font-size: 1.2rem;
      }

      .section-title[_ngcontent-%COMP%] {
          font-size: 1.5rem;
      }
  }

  @media (max-width: 575px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 20px;
          line-height: 32px;
      }
  }`,
    ],
  });
};
var Rt = class a {
  constructor(o) {
    this.metaService = o;
  }
  ngOnInit() {
    this.metaService.setContactPageMeta();
  }
  static ɵfac = function (i) {
    return new (i || a)(I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-contact"]],
    decls: 45,
    vars: 0,
    consts: [
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
      [1, "text-white"],
      [1, "contact-section"],
      [1, "contact-grid"],
      [1, "contact-card"],
      [1, "icon-wrapper"],
      [1, "fas", "fa-map-marker-alt"],
      [1, "fas", "fa-phone"],
      [1, "fas", "fa-envelope"],
      [1, "social-section"],
      [1, "follow-text"],
      [1, "social-icons"],
      [
        "href",
        "https://www.facebook.com/mfinancessrl/",
        1,
        "social-link",
        "facebook",
      ],
      [1, "fab", "fa-facebook-f"],
      [
        "href",
        "https://www.linkedin.com/in/mfinances-cabinet-expertise-comptable-l-bruxelles-4b0b9798/",
        1,
        "social-link",
        "linkedin",
      ],
      [1, "fab", "fa-linkedin-in"],
      [
        "href",
        "https://www.youtube.com/@mfinances4354",
        1,
        "social-link",
        "youtube",
      ],
      [1, "fab", "fa-youtube"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3),
        n(4, "Contactez nous"),
        e(),
        t(5, "p", 3),
        n(
          6,
          " Chez Mfinances, votre r\xE9ussite est notre mission. Pour toutes vos questions et besoins en conseil comptable"
        ),
        l(7, "br"),
        n(
          8,
          " et fiscal, contactez-nous pour discuter de votre projet d'entreprise. Notre \xE9quipe est \xE0 votre \xE9coute. "
        ),
        e()()()(),
        t(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "div", 7),
        l(13, "i", 8),
        e(),
        t(14, "h3"),
        n(15, "Bureau"),
        e(),
        t(16, "p"),
        n(17, "20 Rue de la Magnanerie \xE0"),
        l(18, "br"),
        n(19, "1180 Uccle"),
        e()(),
        t(20, "div", 6)(21, "div", 7),
        l(22, "i", 9),
        e(),
        t(23, "h3"),
        n(24, "Appelez-Nous"),
        e(),
        t(25, "p"),
        n(26, "+32 2 886 05 50"),
        e()(),
        t(27, "div", 6)(28, "div", 7),
        l(29, "i", 10),
        e(),
        t(30, "h3"),
        n(31, "Email"),
        e(),
        t(32, "p"),
        n(33, "info@mfinances.be"),
        e()()(),
        t(34, "div", 11)(35, "span", 12),
        n(36, "Suivez nous"),
        e(),
        t(37, "div", 13)(38, "a", 14),
        l(39, "i", 15),
        e(),
        t(40, "a", 16),
        l(41, "i", 17),
        e(),
        t(42, "a", 18),
        l(43, "i", 19),
        e()()()(),
        l(44, "app-zone-contact"));
    },
    dependencies: [Ke],
    styles: [
      '.header[_ngcontent-%COMP%]{background:url("./media/banner_contact-B6ERRJZE.webp") no-repeat center center/cover;min-height:300px;position:relative;display:flex;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]:after{content:"";background-color:#09132d;opacity:.5;width:100%;height:100%;position:absolute;top:0;left:0;transition:background .3s,border-radius .3s,opacity .3s;z-index:0}.header-overlay[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;color:#fff;z-index:1}.contact-section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:4rem 2rem}.contact-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-bottom:2rem}.contact-card[_ngcontent-%COMP%]{background:#f0f2f3;padding:2rem;border-radius:16px;text-align:center;box-shadow:0 4px 20px #0000000d;transition:transform .3s ease;border:#fff 10px solid}.contact-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.icon-wrapper[_ngcontent-%COMP%]{width:60px;height:60px;background:#ff3b30;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem}.icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:1.5rem}.contact-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1a2c51;font-size:1.2rem;font-weight:600;margin:0 0 1rem}.contact-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;margin:0;line-height:1.6}.social-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:1rem;margin-top:3rem}.follow-text[_ngcontent-%COMP%]{color:#4a5568;font-weight:500}.social-icons[_ngcontent-%COMP%]{display:flex;gap:1rem}.social-link[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;transition:transform .3s ease}.social-link[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.social-link.facebook[_ngcontent-%COMP%]{background:#1877f2}.social-link.linkedin[_ngcontent-%COMP%]{background:#0a66c2}.social-link.youtube[_ngcontent-%COMP%]{background:red}.social-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.2rem}.contact-from-input[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.contact-from-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:4px;border:none;padding:16px;width:49%;margin:8px 0;background-color:#f3f3f3;font-size:16px;transition:all .3s ease-in-out}.contact-from-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-from-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .contact-from-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{outline:none;background-color:#e6e6e6}.contact-from-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .contact-from-input2[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-radius:4px;border:none;padding:16px;width:45%;margin:8px 0;background-color:#f3f3f3;height:55px;font-size:16px;appearance:none;cursor:pointer;transition:all .3s ease-in-out}.contact-from-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{background-color:#e6e6e6}.nice-select[_ngcontent-%COMP%], .contact-from-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:49%}.nice-select[_ngcontent-%COMP%], .contact-from-input2[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%}.contact-from-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:4px;border:none;padding:16px;width:100%;margin:8px 0;background-color:#f3f3f3;font-size:16px;resize:none}.contact-form-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#f33;color:#fff;border:none;padding:14px 32px;border-radius:4px;font-size:16px;font-weight:700;cursor:pointer;transition:all .3s ease-in-out}.contact-form-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#c00}@media screen and (max-width: 768px){.contact-from-input[_ngcontent-%COMP%]{flex-direction:column}.contact-from-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-from-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .nice-select[_ngcontent-%COMP%]{width:100%}}@media (max-width: 768px){.contact-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1.5rem}.social-section[_ngcontent-%COMP%]{flex-direction:column;align-items:center;text-align:center}.contact-section[_ngcontent-%COMP%]{padding:2rem 1rem}}.contact-form[_ngcontent-%COMP%]{width:100%}',
    ],
  });
};
var Bt = class a {
  constructor(o, i) {
    this.renderer = o;
    this.metaService = i;
  }
  scrollToSection(o) {
    let i = document.getElementById(o);
    i && i.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    this.metaService.setGrandeEntreprisePageMeta();
  }
  onScroll(o) {
    let i = document.querySelector(".works-img img"),
      s = o.target.scrollTop;
    if (i) {
      let r = Math.min(s * 0.2, 200);
      this.renderer.setStyle(i, "transform", `translateY(${r}px)`);
    }
  }
  static ɵfac = function (i) {
    return new (i || a)(I(Ti), I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-profil-grande-entreprise"]],
    decls: 306,
    vars: 0,
    consts: [
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
      [1, "text-white"],
      [1, "service-single", "pt-120", "pb-130", 2, "padding", "64px"],
      [1, "row"],
      [1, "col-lg-4"],
      [1, "col-lg-8"],
      [1, "single-content"],
      [1, "display-5", "fw-bold"],
      [1, "bg-custom--primary", "text-white", "px-2", "rounded"],
      [1, "button-container"],
      [1, "home2-btn", "mb-4"],
      [1, "btn-red", 3, "click"],
      [1, "fa-solid", "fa-arrow-right"],
      [1, "single-img", "mt-35", "mb-4", "custom-single"],
      ["src", "../../assets/img/webp/26.webp", "alt", "", 1, "rounded-4"],
      [1, "defis", "row", "align-items-center", "mt-10"],
      [1, "col-md-4", "custom-img"],
      [
        "src",
        "../../assets/img/webp/39.webp",
        "alt",
        "D\xE9fis ASBL",
        1,
        "img-fluid",
        2,
        "border-radius",
        "16px",
      ],
      [1, "col-md-8", "mt-30"],
      [1, "list-unstyled", "pl-25"],
      [
        1,
        "fa",
        "fa-star",
        2,
        "font-size",
        "14px",
        "color",
        "#FF3333",
        "margin-right",
        "6px",
      ],
      [1, "bg-custom--primary"],
      [1, "works2", "sec-padding"],
      [1, "row", "align-items-start"],
      [1, "col-md-12", "col-lg-6"],
      [1, "how-in-work-sec"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "800",
        1,
        "hadding",
        "hadding-p",
      ],
      [1, "rectangle-red"],
      [1, "space20"],
      [1, "works-items"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1200",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "me-3"],
      [1, "work-icon"],
      [
        "src",
        "../../assets/img/image/profil/works-icon-1.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [1, "hadding", "hadding-p"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1400",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [
        "src",
        "../../assets/img/image/profil/works-icon-2.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1600",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [
        "src",
        "../../assets/img/image/profil/works-icon-3.png",
        "alt",
        "",
        1,
        "img-fluid",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1800",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "fa-solid", "fa-clock"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "2000",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      ["aria-hidden", "true", 1, "fa", "fa-cogs"],
      [
        "data-aos",
        "flip-right",
        "data-aos-duration",
        "1000",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [1, "works-img-gallery", "space-sm-50", "img-border"],
      [1, "row", "g-3"],
      [1, "col-12", "mb-3"],
      [
        "src",
        "../../assets/img/webp/5.webp",
        "alt",
        "Image illustrative",
        1,
        "img-fluid",
        "w-100",
        "main-image",
      ],
      [1, "col-12"],
      [
        "src",
        "../../assets/img/webp/grande_entreprise.webp",
        "alt",
        "Image illustrative",
        1,
        "img-fluid",
        "w-100",
        "secondary-image",
      ],
      [
        "src",
        "../../assets/img/webp/16.webp",
        "alt",
        "Image illustrative",
        1,
        "img-fluid",
        "w-100",
        "secondary-image",
      ],
      [1, "py-5"],
      [1, "row", "align-items-center"],
      [1, "col-lg-5"],
      [1, "fw-bold", "mb-3"],
      [1, "mb-4"],
      [1, "col-lg-7", "mt-5", "mt-lg-0"],
      [1, "mb-4", "position-relative", "p-4", "bg-white", "rounded", "shadow"],
      [
        1,
        "text-uppercase",
        "text-danger",
        "fw-bold",
        "small",
        "d-block",
        "mb-1",
      ],
      [1, "fw-semibold", "mb-2"],
      [1, "mb-2"],
      [1, "mb-0", "fw-bold"],
      [
        1,
        "position-absolute",
        2,
        "right",
        "1rem",
        "bottom",
        "-0.5rem",
        "font-size",
        "72px",
        "opacity",
        "0.1",
      ],
      [1, "bg-custom--primary", "mt-5"],
      [1, "container", "py-5"],
      [1, "section-title"],
      [1, "row", "g-4"],
      [1, "col-md-6"],
      [1, "case-card"],
      [1, "h4", "text-danger"],
      [1, "problem", "text-dark"],
      [1, "solution", "text-dark"],
      [1, "text-dark"],
      [1, "result", "text-dark"],
      ["id", "targetSection", 1, "py-5"],
      ["data-aos", "fade-right", 1, "col-8", "col-md-6", "mb-4"],
      [1, "display-5", "fw-bold", 2, "font-size", "40px !important"],
      [1, "bg-danger", "text-white", "px-2", "rounded"],
      [1, "col-12", "col-md-6", "d-flex", "flex-column", "gap-4"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "200",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        1,
        "icon-wrapper",
        "me-3",
        "d-flex",
        "justify-content-center",
        "align-items-center",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border.png",
        "alt",
        "Icone Expertise",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "mb-0", "text-muted"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "400",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
        "second-card",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border2.png",
        "alt",
        "Icone Accompagnement",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "600",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border3.png",
        "alt",
        "Icone Solutions",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "container", "my-5"],
      [1, "rounded-4", "bg-custom--primary", "text-white", "px-4"],
      [
        "data-aos",
        "fade-left",
        "data-aos-delay",
        "200",
        1,
        "col-md-6",
        "d-none",
        "d-md-flex",
        "justify-content-center",
        "align-items-end",
      ],
      [
        "src",
        "../../assets/img/image/profil/h9_footer_banner_img 1 1.webp",
        "alt",
        "Personne souriante",
        1,
        "img-fluid",
        "custom-image-size",
        2,
        "z-index",
        "2",
        "position",
        "relative",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-delay",
        "400",
        1,
        "col-12",
        "col-md-6",
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center",
        "align-items-md-start",
        "text-center",
        "text-md-start",
        "mt-4",
        "mt-md-0",
      ],
      [1, "fw-bold", "mb-4"],
      [1, "bg-danger", "text-white", "px-2", "py-1", "rounded-2"],
      ["data-aos", "fade-up", "data-aos-delay", "600", 1, "mb-4"],
      [
        "href",
        "#",
        "data-aos",
        "zoom-in",
        "data-aos-delay",
        "800",
        1,
        "btn",
        "btn-danger",
        "btn-sm",
        "px-3",
        "py-2",
      ],
      [1, "fas", "fa-arrow-right"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1"),
        n(4, "Grande Entreprise"),
        e(),
        t(5, "p", 3),
        n(6, "Accueil > Grande Entreprise"),
        e()()()(),
        t(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "div", 6),
        l(11, "app-sidebar"),
        e(),
        t(12, "div", 7)(13, "div", 8)(14, "h2", 9),
        n(15, " Anticipez, g\xE9rez et innovez pour maximiser "),
        t(16, "span", 10),
        n(17, " votre rentabilit\xE9 "),
        e()(),
        t(18, "div")(19, "p"),
        n(
          20,
          "Les grandes entreprises \xE9voluent dans un environnement complexe o\xF9 une gestion rigoureuse des finances est essentielle pour garantir leur comp\xE9titivit\xE9. Entre le pilotage strat\xE9gique, la gestion des flux de tr\xE9sorerie, et l\u2019optimisation des ressources, il est crucial de disposer d\u2019outils adapt\xE9s et d\u2019un accompagnement expert. "
        ),
        e(),
        t(21, "p"),
        n(
          22,
          "Chez MFINANCES, nous proposons des solutions sur mesure, int\xE9grant des budgets pr\xE9visionnels, des situations mensuelles d\xE9taill\xE9es, et un syst\xE8me de cash collecting optimis\xE9"
        ),
        e(),
        l(23, "br"),
        e(),
        t(24, "div", 11)(25, "div", 12)(26, "button", 13),
        O("click", function () {
          return s.scrollToSection("targetSection");
        }),
        n(27, "D\xE9couvrez ce que vous gagnerez avec nous "),
        l(28, "i", 14),
        e()()(),
        t(29, "div", 15),
        l(30, "img", 16),
        e()(),
        t(31, "div", 17)(32, "div", 18),
        l(33, "img", 19),
        e(),
        t(34, "div", 20)(35, "p"),
        n(
          36,
          "Gr\xE2ce \xE0 l\u2019intervention d\u2019un contr\xF4leur de gestion et d\u2019un directeur financier (DAF) \xE0 temps partiel, vous b\xE9n\xE9ficiez d\u2019un pilotage financier pr\xE9cis et accessible, avec des b\xE9n\xE9fices imm\xE9diats :"
        ),
        e(),
        t(37, "ul", 21)(38, "li"),
        l(39, "i", 22),
        n(40, " R\xE9duction des co\xFBts op\xE9rationnels "),
        e(),
        t(41, "li"),
        l(42, "i", 22),
        n(43, " Meilleure allocation des ressources "),
        e(),
        t(44, "li"),
        l(45, "i", 22),
        n(46, " Capacit\xE9 accrue \xE0 investir dans l\u2019innovation "),
        e()()()()()()()(),
        t(47, "section", 23)(48, "div", 24)(49, "div", 2)(50, "div", 25)(
          51,
          "div",
          26
        )(52, "div", 27)(
          53,
          "div",
          28
        )(54, "h1"),
        n(55, "Besoins sp\xE9cifiques des grandes entreprises : "),
        l(56, "br"),
        t(57, "span", 29),
        n(58, "Une gestion sur mesure pour des r\xE9sultats concrets"),
        e()()(),
        l(59, "div", 30),
        t(60, "div", 31)(61, "div", 32)(62, "div", 33)(63, "div", 34),
        l(64, "img", 35),
        e()(),
        t(65, "div", 36)(66, "h2"),
        n(67, "Budgets pr\xE9visionnels dynamiques :"),
        e(),
        t(68, "ul")(69, "li"),
        n(
          70,
          "Le budget pr\xE9visionnel projette vos recettes et d\xE9penses pour une planification strat\xE9gique."
        ),
        e(),
        t(71, "li"),
        n(
          72,
          "Anticipez vos besoins financiers et r\xE9\xE9valuez vos priorit\xE9s strat\xE9giques."
        ),
        e()(),
        t(73, "p")(74, "b"),
        n(75, "R\xE9sultat :"),
        e(),
        n(
          76,
          " Une prise de d\xE9cision \xE9clair\xE9e et une r\xE9duction des impr\xE9vus financiers."
        ),
        e()()(),
        t(77, "div", 37)(78, "div", 33)(79, "div", 34),
        l(80, "img", 38),
        e()(),
        t(81, "div", 36)(82, "h2"),
        n(83, "Gestion proactive de la tr\xE9sorerie :"),
        e(),
        t(84, "ul")(85, "li"),
        n(
          86,
          "Identifiez \xE0 l\u2019avance les p\xE9riodes critiques pour \xE9viter les d\xE9couverts co\xFBteux."
        ),
        e(),
        t(87, "li"),
        n(
          88,
          "Optimisez vos flux financiers et r\xE9duisez les d\xE9lais de paiement clients."
        ),
        e()(),
        t(89, "p")(90, "b"),
        n(91, "R\xE9sultat :"),
        e(),
        n(
          92,
          " Une meilleure capacit\xE9 d\u2019investissement et une visibilit\xE9 renforc\xE9e."
        ),
        e()()(),
        t(93, "div", 39)(94, "div", 33)(95, "div", 34),
        l(96, "img", 40),
        e()(),
        t(97, "div", 36)(98, "h2"),
        n(99, "Contr\xF4le de gestion avanc\xE9 :"),
        e(),
        t(100, "ul")(101, "li"),
        n(
          102,
          "Mise en place de tableaux de bord personnalis\xE9s pour suivre vos indicateurs cl\xE9s."
        ),
        e(),
        t(103, "li"),
        n(
          104,
          "Analyse proactive des \xE9carts entre le pr\xE9visionnel et le r\xE9alis\xE9 pour ajustements rapides."
        ),
        e()(),
        t(105, "p")(106, "b"),
        n(107, "R\xE9sultat :"),
        e(),
        n(
          108,
          " Une allocation optimis\xE9e des ressources et une performance accrue."
        ),
        e()()(),
        t(109, "div", 41)(110, "div", 33)(111, "div", 34),
        l(112, "i", 42),
        e()(),
        t(113, "div", 36)(114, "h2"),
        n(115, "Flexibilit\xE9 avec un DAF \xE0 temps partiel :"),
        e(),
        t(116, "ul")(117, "li"),
        n(
          118,
          "\xC9laboration de business plans et supervision des projets complexes."
        ),
        e(),
        t(119, "li"),
        n(
          120,
          "Gestion de la tr\xE9sorerie et optimisation des fonctions financi\xE8res et juridiques."
        ),
        e()(),
        t(121, "p")(122, "b"),
        n(123, "R\xE9sultat :"),
        e(),
        n(
          124,
          " Une expertise de haut niveau accessible \xE0 co\xFBt r\xE9duit."
        ),
        e()()(),
        t(125, "div", 43)(126, "div", 33)(127, "div", 34),
        l(128, "i", 44),
        e()(),
        t(129, "div", 36)(130, "h2"),
        n(131, "Digitalisation et automatisation des processus :"),
        e(),
        t(132, "ul")(133, "li"),
        n(
          134,
          "Int\xE9grez des outils ERP et CRM pour centraliser vos donn\xE9es financi\xE8res et commerciales."
        ),
        e(),
        t(135, "li"),
        n(
          136,
          "Automatisez vos reportings pour une r\xE9duction des erreurs et un suivi en temps r\xE9el."
        ),
        e()(),
        t(137, "p")(138, "b"),
        n(139, "R\xE9sultat :"),
        e(),
        n(140, " Une productivit\xE9 accrue et des analyses plus fiables."),
        e()()()()()(),
        t(141, "div", 45)(142, "div", 46)(143, "div", 47)(144, "div", 48),
        l(145, "img", 49),
        e(),
        t(146, "div", 50),
        l(147, "img", 51),
        e(),
        t(148, "div", 50),
        l(149, "img", 52),
        e()()()()()()()(),
        t(150, "section", 53)(151, "div", 2)(152, "div", 54)(153, "div", 55)(
          154,
          "h2",
          56
        ),
        n(155, " Pratiques compl\xE9mentaires pour une gestion optimis\xE9e "),
        e(),
        t(156, "p", 57),
        n(157, " Les pratiques pour une gestion efficace "),
        e()(),
        t(158, "div", 58)(159, "div", 59)(160, "span", 60),
        n(161, " Etape "),
        e(),
        t(162, "h5", 61),
        n(163, "Situations mensuelles interm\xE9diaires"),
        e(),
        t(164, "p", 62),
        n(
          165,
          " Produisez des rapports r\xE9guliers pour analyser les \xE9carts et ajuster les strat\xE9gies en cours. Identifiez rapidement les anomalies pour garantir un pilotage pr\xE9cis. "
        ),
        e(),
        t(166, "p", 63),
        n(
          167,
          " Avantage client : Une r\xE9activit\xE9 accrue face aux impr\xE9vus,"
        ),
        l(168, "br"),
        n(169, " \xE9vitant des pertes op\xE9rationnelles. "),
        e(),
        t(170, "span", 64),
        n(171, " 01 "),
        e()(),
        t(172, "div", 59)(173, "span", 60),
        n(174, " Etape "),
        e(),
        t(175, "h5", 61),
        n(176, "Analyse approfondie des indicateurs financiers"),
        e(),
        t(177, "p", 62),
        n(
          178,
          " Ratio de tr\xE9sorerie, d\xE9lai moyen de paiement clients (DSO), marge brute et rentabilit\xE9 par projet. "
        ),
        e(),
        t(179, "p", 63),
        n(
          180,
          " Avantage client : Une vision claire pour prioriser les actions"
        ),
        l(181, "br"),
        n(182, " et allouer les budgets efficacement. "),
        e(),
        t(183, "span", 64),
        n(184, " 02 "),
        e()(),
        t(185, "div", 59)(186, "span", 60),
        n(187, " Etape "),
        e(),
        t(188, "h5", 61),
        n(189, "Automatisation des t\xE2ches et outils de suivi"),
        e(),
        t(190, "p", 62),
        n(
          191,
          " Impl\xE9mentez des logiciels adapt\xE9s pour r\xE9duire le temps pass\xE9 sur les t\xE2ches administratives. "
        ),
        e(),
        t(192, "p", 63),
        n(
          193,
          " Avantage client : Moins de ressources immobilis\xE9es sur des t\xE2ches r\xE9p\xE9titives,"
        ),
        l(194, "br"),
        n(
          195,
          " et davantage consacr\xE9es \xE0 l\u2019innovation et \xE0 la strat\xE9gie. "
        ),
        e(),
        t(196, "span", 64),
        n(197, " 03 "),
        e()()()()()(),
        t(198, "section", 65)(199, "div", 66)(200, "h1", 67),
        n(201, "Exemples Concrets : R\xE9sultats obtenus avec MFINANCES"),
        e(),
        t(202, "div", 68)(203, "div", 69)(204, "div", 70)(205, "h2", 71),
        n(206, "Entreprise industrielle multi-sites"),
        e(),
        t(207, "p", 72)(208, "strong"),
        n(209, "Probl\xE8me :"),
        e(),
        n(
          210,
          " Manque de visibilit\xE9 sur les flux financiers et tensions fr\xE9quentes sur la tr\xE9sorerie."
        ),
        e(),
        t(211, "p", 73)(212, "strong"),
        n(213, "Solution :"),
        e()(),
        t(214, "ul", 74)(215, "li"),
        n(216, "Situations mensuelles interm\xE9diaires."),
        e(),
        t(217, "li"),
        n(
          218,
          "Tableaux de tr\xE9sorerie pr\xE9visionnels actualis\xE9s chaque semaine."
        ),
        e(),
        t(219, "li"),
        n(220, "Syst\xE8me de cash collecting centralis\xE9."),
        e()(),
        t(221, "p", 75)(222, "strong"),
        n(223, "R\xE9sultat :"),
        e()(),
        t(224, "ul", 74)(225, "li"),
        n(226, "R\xE9duction des retards de paiement de 40 %."),
        e(),
        t(227, "li"),
        n(
          228,
          "Projections financi\xE8res fiables sur 12 mois, permettant une planification optimis\xE9e."
        ),
        e()()()(),
        t(229, "div", 69)(230, "div", 70)(231, "h2", 71),
        n(232, "Groupe technologique en pleine croissance"),
        e(),
        t(233, "p", 72)(234, "strong"),
        n(235, "Probl\xE8me :"),
        e(),
        n(
          236,
          " Retards dans les encaissements clients, entra\xEEnant des difficult\xE9s \xE0 financer l\u2019innovation."
        ),
        e(),
        t(237, "p", 73)(238, "strong"),
        n(239, "Solution :"),
        e()(),
        t(240, "ul", 74)(241, "li"),
        n(
          242,
          "Mise en place de budgets pr\xE9visionnels dynamiques et tableaux de tr\xE9sorerie."
        ),
        e(),
        t(243, "li"),
        n(244, "Formation des \xE9quipes au cash collecting."),
        e()(),
        t(245, "p", 75)(246, "strong"),
        n(247, "R\xE9sultat :"),
        e()(),
        t(248, "ul", 74)(249, "li"),
        n(250, "Diminution des d\xE9lais de paiement clients de 20 jours."),
        e(),
        t(251, "li"),
        n(
          252,
          "Augmentation des liquidit\xE9s, permettant de financer un projet strat\xE9gique en R&D."
        ),
        e()()()()()()(),
        t(253, "section", 76)(254, "div", 2)(255, "div", 54)(256, "div", 77)(
          257,
          "h2",
          78
        ),
        n(258, " Pourquoi choisir "),
        l(259, "br"),
        t(260, "span", 79),
        n(261, "MFINANCES"),
        e(),
        n(262, " pour vous accompagner\u202F? "),
        e()(),
        t(263, "div", 80)(264, "div", 81)(265, "div", 82),
        l(266, "img", 83),
        e(),
        t(267, "div")(268, "h5", 61),
        n(269, "Un accompagnement strat\xE9gique et personnalis\xE9 "),
        e(),
        t(270, "p", 84),
        n(
          271,
          "Nos contr\xF4leurs de gestion et DAF apportent des solutions sp\xE9cifiques \xE0 vos d\xE9fis. "
        ),
        e()()(),
        t(272, "div", 85)(273, "div", 82),
        l(274, "img", 86),
        e(),
        t(275, "div")(276, "h5", 61),
        n(277, "Des outils modernes et flexibles"),
        e(),
        t(278, "p", 84),
        n(
          279,
          "Int\xE9gration de tableaux de bord, ERP, et CRM pour un pilotage pr\xE9cis. "
        ),
        e()()(),
        t(280, "div", 87)(281, "div", 82),
        l(282, "img", 88),
        e(),
        t(283, "div")(284, "h5", 61),
        n(285, "Des r\xE9sultats concrets et mesurables"),
        e(),
        t(286, "p", 84),
        n(
          287,
          "R\xE9duction des co\xFBts op\xE9rationnels, am\xE9lioration des liquidit\xE9s, et croissance durable. "
        ),
        e()()()()()()(),
        t(288, "section", 89)(289, "div", 90)(290, "div", 54)(291, "div", 91),
        l(292, "img", 92),
        e(),
        t(293, "div", 93)(294, "h2", 94),
        n(295, " Transformez vos d\xE9fis "),
        l(296, "br"),
        t(297, "span", 95),
        n(298, "en opportunit\xE9s"),
        e(),
        n(299, ". "),
        e(),
        t(300, "p", 96),
        n(
          301,
          " Contactez-nous d\xE8s aujourd\u2019hui pour un diagnostic gratuit et d\xE9couvrez comment MFINANCES peut optimiser vos processus financiers, am\xE9liorer votre tr\xE9sorerie, et acc\xE9l\xE9rer votre croissance. "
        ),
        e(),
        t(302, "a", 97),
        n(303, " Contactez-nous "),
        l(304, "i", 98),
        e()()()()(),
        l(305, "app-recommandation-profil"));
    },
    dependencies: [oe, se],
    styles: [
      ".work-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px;color:#fff}.cards-container[_ngcontent-%COMP%]{display:flex;gap:20px;flex-wrap:wrap;justify-content:center;padding:20px}.card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;box-shadow:0 4px 6px #0000001a;padding:20px;width:400px;max-width:90%;text-align:left}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;color:#ff4136;margin-bottom:10px}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;color:#222;margin-bottom:10px}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem;color:#555;margin-bottom:10px;line-height:1.6}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{font-weight:700;color:#444}.case-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;box-shadow:0 4px 6px #0000001a;padding:2rem;transition:transform .2s}.case-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px)}.problem[_ngcontent-%COMP%], .solution[_ngcontent-%COMP%], .result[_ngcontent-%COMP%]{margin-bottom:1rem}.h4[_ngcontent-%COMP%]{font-weight:700}.section-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;text-align:center;margin-bottom:1rem;color:#111}.demo-section[_ngcontent-%COMP%]{min-height:2000px;background-color:#f3f3f3}.works-img[_ngcontent-%COMP%]{position:sticky;top:50px;z-index:10}",
      `.challenge-solution-container[_ngcontent-%COMP%] {
    position: relative;
    padding: 2rem 0;
  }
  .vertical-line[_ngcontent-%COMP%] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #FF3333;
    margin-left: -1.5px;
    z-index: 1;
  }


  .custom-card[_ngcontent-%COMP%] {
      border: 2px solid #e6e9f1; 
      border-radius: 12px; 
      background-color: #f8f9fb; 
      padding: 20px; 
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%; 
  }

  .icon-wrapper[_ngcontent-%COMP%] {
      min-width: 80px;
      min-height: 80px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }

  .icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
      max-width: 100%;
      height: auto;
  }

  .custom-image-size[_ngcontent-%COMP%] {
  width: 70%; 

  height: auto; 

  }
  .second-card[_ngcontent-%COMP%] {
      position: relative;
  }

  @media (min-width: 992px) {
      .second-card[_ngcontent-%COMP%] {
          left: -64px;
      }
  }

  @media (max-width: 991px) {
      .second-card[_ngcontent-%COMP%] {
          left: 0;
      }
  }

  .color-red[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {
      color: #FF3333;
  }

  .bg-custom--primary[_ngcontent-%COMP%] {
      background-color: #25335b;
  }

  .bg-custom--primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
      color: white;
  }

  .rectangle-red[_ngcontent-%COMP%] {
      background-color: #FF3333;
      border-radius: 8px;
      padding: 6px;
  }

  .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      color: white;
      font-size: 29px !important;
      line-height: 48px;
      padding-bottom: 18px;
  }

  .highlighted[_ngcontent-%COMP%] {
      background-color: #ff4136;
      color: #fff;
      padding: 0.2rem 0.5rem;
      border-radius: 0.25rem;
  }

  .vertical-divider[_ngcontent-%COMP%] {
      border-left: 1px solid #d1d1d1;
      height: 100%;
  }

  .icon-red[_ngcontent-%COMP%] {
      color: #ff4136;
      font-size: 1.5rem;
      margin-right: 1rem; 
  }

  .section-title[_ngcontent-%COMP%] {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 2rem;
  }

  .flex-content[_ngcontent-%COMP%] {
      display: flex;
      align-items: flex-start; 
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
  }

  .header[_ngcontent-%COMP%] {
      background: url('../../assets/img/bg/bg_about.webp') no-repeat center center/cover;
      min-height: 400px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .header-overlay[_ngcontent-%COMP%] {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      color: white;
  }

  

  @media (max-width: 767px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 24px;
          line-height: 36px;
      }

      .custom-card[_ngcontent-%COMP%] {
          padding: 15px;
      }

      .icon-wrapper[_ngcontent-%COMP%] {
          min-width: 60px;
          min-height: 60px;
      }

      .works-items[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
          font-size: 1.2rem;
      }

      .section-title[_ngcontent-%COMP%] {
          font-size: 1.5rem;
      }
  }

  @media (max-width: 575px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 20px;
          line-height: 32px;
      }
  }

  .sticky-image[_ngcontent-%COMP%] {
  position: relative;
  transition: all 0.3s ease-in-out; 
}

.sticky[_ngcontent-%COMP%] {
  position: fixed;
  top: 20px; 
  z-index: 10; 
}

.works-img2[_ngcontent-%COMP%] {
  position: sticky;
  top: 2rem; 

  height: fit-content;
  padding: 1rem;
}



.works2[_ngcontent-%COMP%] {
  min-height: 100vh;
  overflow: hidden;
}



.works-img2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  max-width: 100%;
  height: auto;
  border-radius: 8px; 

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

}`,
    ],
  });
};
var zt = class a {
  constructor(o) {
    this.metaService = o;
  }
  ngOnInit() {
    this.metaService.setPromoteurImmobilierPageMeta();
  }
  scrollToSection(o) {
    let i = document.getElementById(o);
    i && i.scrollIntoView({ behavior: "smooth" });
  }
  static ɵfac = function (i) {
    return new (i || a)(I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-profil-promoteur-immobilier"]],
    decls: 289,
    vars: 0,
    consts: [
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
      [1, "text-white"],
      [1, "service-single", "pt-120", "pb-130", 2, "padding", "64px"],
      [1, "row"],
      [1, "col-lg-4"],
      [1, "col-lg-8"],
      [1, "single-content"],
      [1, "display-5", "fw-bold"],
      [1, "bg-custom--primary", "text-white", "px-2", "rounded"],
      [1, "button-container"],
      [1, "home2-btn", "mb-4"],
      [1, "btn-red", 3, "click"],
      [1, "fa-solid", "fa-arrow-right"],
      [1, "single-img", "mt-35", "mb-4", "custom-single"],
      ["src", "../../assets/img/webp/33.webp", "alt", "", 1, "rounded-4"],
      [1, "defis", "row", "align-items-center", "mt-10"],
      [1, "col-md-4", "custom-img"],
      [
        "src",
        "../../assets/img/webp/22.webp",
        "alt",
        "D\xE9fis ASBL",
        1,
        "img-fluid",
        2,
        "border-radius",
        "16px",
      ],
      [1, "col-md-8", "mt-30"],
      [1, "list-unstyled", "pl-25"],
      [
        1,
        "fa",
        "fa-star",
        2,
        "font-size",
        "14px",
        "color",
        "#FF3333",
        "margin-right",
        "6px",
      ],
      [1, "bg-custom--primary"],
      [1, "works", "sec-padding"],
      [1, "row", "align-items-center"],
      [1, "col-md-12", "col-lg-6"],
      [1, "how-in-work-sec"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "800",
        1,
        "hadding",
        "hadding-p",
      ],
      [1, "space20"],
      [1, "works-items"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1200",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "me-3"],
      [1, "work-icon"],
      [1, "fa-solid", "fa-chart-line"],
      [1, "hadding", "hadding-p"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1400",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "fa-solid", "fa-file-invoice-dollar"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1600",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "fa-solid", "fa-calculator"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "1800",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "fa-solid", "fa-cogs"],
      [
        "data-aos",
        "fade-right",
        "data-aos-duration",
        "2000",
        1,
        "work-item",
        "d-flex",
        "align-items-baseline",
      ],
      [1, "fa-solid", "fa-handshake"],
      [
        "data-aos",
        "flip-right",
        "data-aos-duration",
        "1000",
        1,
        "col-md-12",
        "col-lg-6",
      ],
      [1, "works-img", "space-sm-50", "img-border"],
      ["src", "../../assets/img/webp/35.webp", "alt", "", 1, "img-fluid"],
      [1, "py-5"],
      [1, "text-center"],
      [1, "cards-container"],
      [1, "card"],
      [1, "bg-custom--primary", "mt-5"],
      [1, "container", "py-5"],
      [1, "section-title", "text-white"],
      [1, "row", "g-4", "align-items-center"],
      [1, "col-md-6"],
      [
        "src",
        "../../assets/img/webp/34.webp",
        "alt",
        "Projet immobilier",
        1,
        "img-fluid",
      ],
      [1, "col-md-6", "text-white"],
      [1, "h4", 2, "color", "#FF3333"],
      ["id", "targetSection", 1, "py-5"],
      ["data-aos", "fade-right", 1, "col-8", "col-md-6", "mb-4"],
      [1, "display-5", "fw-bold", 2, "font-size", "40px !important"],
      [1, "bg-danger", "text-white", "px-2", "rounded"],
      [1, "col-12", "col-md-6", "d-flex", "flex-column", "gap-4"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "200",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        1,
        "icon-wrapper",
        "me-3",
        "d-flex",
        "justify-content-center",
        "align-items-center",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border.png",
        "alt",
        "Icone Expertise",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "fw-semibold", "mb-2"],
      [1, "mb-0", "text-muted"],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "400",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
        "second-card",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border2.png",
        "alt",
        "Icone Accompagnement",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [
        "data-aos",
        "fade-up",
        "data-aos-delay",
        "600",
        1,
        "custom-card",
        "p-4",
        "d-flex",
        "align-items-start",
      ],
      [
        "src",
        "../../assets/img/image/profil/Background+Border3.png",
        "alt",
        "Icone Solutions",
        1,
        "img-fluid",
        2,
        "max-width",
        "50px",
      ],
      [1, "container", "my-5"],
      [1, "rounded-4", "bg-custom--primary", "text-white", "px-4"],
      [
        "data-aos",
        "fade-left",
        "data-aos-delay",
        "200",
        1,
        "col-md-6",
        "d-none",
        "d-md-flex",
        "justify-content-center",
        "align-items-end",
      ],
      [
        "src",
        "../../assets/img/image/profil/h9_footer_banner_img 1 1.webp",
        "alt",
        "Personne souriante",
        1,
        "img-fluid",
        "custom-image-size",
        2,
        "z-index",
        "2",
        "position",
        "relative",
      ],
      [
        "data-aos",
        "fade-right",
        "data-aos-delay",
        "400",
        1,
        "col-12",
        "col-md-6",
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center",
        "align-items-md-start",
        "text-center",
        "text-md-start",
        "mt-4",
        "mt-md-0",
      ],
      [1, "fw-bold", "mb-4"],
      [1, "bg-danger", "text-white", "px-2", "py-1", "rounded-2"],
      ["data-aos", "fade-up", "data-aos-delay", "600", 1, "mb-4"],
      [
        "href",
        "#",
        "data-aos",
        "zoom-in",
        "data-aos-delay",
        "800",
        1,
        "btn",
        "btn-danger",
        "btn-sm",
        "px-3",
        "py-2",
      ],
      [1, "fas", "fa-arrow-right"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1"),
        n(4, "Promoteur Immobilier"),
        e(),
        t(5, "p", 3),
        n(6, "Accueil > Promoteur Immobilier"),
        e()()()(),
        t(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "div", 6),
        l(11, "app-sidebar"),
        e(),
        t(12, "div", 7)(13, "div", 8)(14, "h2", 9),
        n(15, " Anticipez, g\xE9rez et innovez pour maximiser "),
        t(16, "span", 10),
        n(17, " votre rentabilit\xE9 "),
        e()(),
        t(18, "div")(19, "p"),
        n(
          20,
          "La promotion immobili\xE8re est une activit\xE9 complexe qui exige une gestion rigoureuse des finances, de la fiscalit\xE9, et des flux de tr\xE9sorerie."
        ),
        e(),
        t(21, "p"),
        n(
          22,
          "Chez MFINANCES, nous proposons des solutions sur mesure, int\xE9grant des budgets pr\xE9visionnels, des situations mensuelles d\xE9taill\xE9es, et un syst\xE8me de cash collecting optimis\xE9"
        ),
        e(),
        l(23, "br"),
        e(),
        t(24, "div", 11)(25, "div", 12)(26, "button", 13),
        O("click", function () {
          return s.scrollToSection("targetSection");
        }),
        n(27, "D\xE9couvrez ce que vous gagnerez avec nous "),
        l(28, "i", 14),
        e()()(),
        t(29, "div", 15),
        l(30, "img", 16),
        e()(),
        t(31, "div", 17)(32, "div", 18),
        l(33, "img", 19),
        e(),
        t(34, "div", 20)(35, "p"),
        n(
          36,
          "En tant qu\u2019acteurs cl\xE9s du d\xE9veloppement immobilier, les promoteurs doivent relever plusieurs d\xE9fis sp\xE9cifiques : "
        ),
        e(),
        t(37, "ul", 21)(38, "li"),
        l(39, "i", 22),
        t(40, "strong"),
        n(41, "Budgets cons\xE9quents et marges serr\xE9es"),
        e(),
        n(42, " n\xE9cessitant une planification financi\xE8re pr\xE9cise. "),
        e(),
        t(43, "li"),
        l(44, "i", 22),
        t(45, "strong"),
        n(46, "R\xE8gles TVA complexes "),
        e(),
        n(
          47,
          " qui varient selon la finalit\xE9 des immeubles (revente, location, r\xE9novation). "
        ),
        e(),
        t(48, "li"),
        l(49, "i", 22),
        t(50, "strong"),
        n(51, "Analyse d\xE9taill\xE9e des co\xFBts par projet"),
        e(),
        n(52, " essentielle pour optimiser la rentabilit\xE9. "),
        e()()()()()()()(),
        t(53, "section", 23)(54, "div", 24)(55, "div", 2)(56, "div", 25)(
          57,
          "div",
          26
        )(58, "div", 27)(
          59,
          "div",
          28
        )(60, "h1"),
        n(61, "Besoins sp\xE9cifiques des Promoteurs Immobiliers"),
        e()(),
        l(62, "div", 29),
        t(63, "div", 30)(64, "div", 31)(65, "div", 32)(66, "div", 33),
        l(67, "i", 34),
        e()(),
        t(68, "div", 35)(69, "h2"),
        n(
          70,
          "Planification financi\xE8re pr\xE9cise et pr\xE9visions budg\xE9taires"
        ),
        e(),
        t(71, "ul")(72, "li"),
        n(
          73,
          "Budgets d\xE9taill\xE9s : Pr\xE9voir les co\xFBts li\xE9s \xE0 l\u2019acquisition, la construction, et la commercialisation."
        ),
        e(),
        t(74, "li"),
        n(
          75,
          "Analyse des besoins en financement : Planifier les apports n\xE9cessaires pour \xE9viter les tensions de tr\xE9sorerie."
        ),
        e(),
        t(76, "li"),
        n(
          77,
          "Projection des flux de tr\xE9sorerie : Pr\xE9voir les entr\xE9es (ventes ou locations) et les sorties (charges fixes et impr\xE9vus) pour \xE9quilibrer vos finances."
        ),
        e()()()(),
        t(78, "div", 36)(79, "div", 32)(80, "div", 33),
        l(81, "i", 37),
        e()(),
        t(82, "div", 35)(83, "h2"),
        n(
          84,
          "Suivi rigoureux des co\xFBts et reporting financier transparent"
        ),
        e(),
        t(85, "ul")(86, "li"),
        n(
          87,
          "Gestion des postes budg\xE9taires : Contr\xF4ler les co\xFBts de construction, les taxes, et les charges administratives."
        ),
        e(),
        t(88, "li"),
        n(
          89,
          "Reporting financier : Offrir une vue claire et synth\xE9tique des revenus et d\xE9penses, facilitant une prise de d\xE9cision \xE9clair\xE9e."
        ),
        e(),
        t(90, "li"),
        n(
          91,
          "Digitalisation des processus : Automatiser le suivi des flux financiers pour une visibilit\xE9 en temps r\xE9el et une gestion optimale des ressources."
        ),
        e()()()(),
        t(92, "div", 38)(93, "div", 32)(94, "div", 33),
        l(95, "i", 39),
        e()(),
        t(96, "div", 35)(97, "h2"),
        n(98, "TVA : Entre opportunit\xE9 et complexit\xE9"),
        e(),
        t(99, "ul")(100, "li"),
        n(
          101,
          "Immeuble neuf destin\xE9 \xE0 la revente : TVA de 21 % d\xE9ductible."
        ),
        e(),
        t(102, "li"),
        n(
          103,
          "Immeuble neuf destin\xE9 \xE0 la location : TVA de 21 % non d\xE9ductible."
        ),
        e(),
        t(104, "li"),
        n(
          105,
          "Immeuble ancien (plus de 10 ans) destin\xE9 \xE0 l\u2019habitation : TVA r\xE9duite \xE0 6 %, non d\xE9ductible."
        ),
        e(),
        t(106, "li"),
        n(
          107,
          "R\xE9gime d\u2019autoliquidation : N\xE9cessite un suivi rigoureux pour \xE9viter les erreurs co\xFBteuses."
        ),
        e(),
        t(108, "li"),
        n(
          109,
          "Calcul du prorata de d\xE9ductibilit\xE9 : Frais g\xE9n\xE9raux d\xE9ductibles au prorata du chiffre d\u2019affaires TVA."
        ),
        e()()()(),
        t(110, "div", 40)(111, "div", 32)(112, "div", 33),
        l(113, "i", 41),
        e()(),
        t(114, "div", 35)(115, "h2"),
        n(116, "Comptabilit\xE9 analytique pour optimiser la rentabilit\xE9"),
        e(),
        t(117, "ul")(118, "li"),
        n(
          119,
          "Zoom sur la structure des co\xFBts : Segmentation des d\xE9penses par projet ou service."
        ),
        e(),
        t(120, "li"),
        n(
          121,
          "Identification des co\xFBts par projet : Analyse fine des postes les plus co\xFBteux."
        ),
        e(),
        t(122, "li"),
        n(
          123,
          "Prise de d\xE9cisions \xE9clair\xE9es : Revoir les mod\xE8les \xE9conomiques pour optimiser la rentabilit\xE9."
        ),
        e()()()(),
        t(124, "div", 42)(125, "div", 32)(126, "div", 33),
        l(127, "i", 43),
        e()(),
        t(128, "div", 35)(129, "h2"),
        n(130, "Collaboration \xE9troite et accompagnement strat\xE9gique"),
        e(),
        t(131, "ul")(132, "li"),
        n(
          133,
          "Compr\xE9hension des objectifs : Identifier les priorit\xE9s et ajuster les strat\xE9gies."
        ),
        e(),
        t(134, "li"),
        n(
          135,
          "Leviers de rentabilit\xE9 : Proposer des solutions concr\xE8tes pour am\xE9liorer les marges."
        ),
        e(),
        t(136, "li"),
        n(
          137,
          "Conseils strat\xE9giques : Vous accompagner dans toutes les \xE9tapes, de l\u2019acquisition \xE0 la commercialisation."
        ),
        e()()()()()()(),
        t(138, "div", 44)(139, "div", 45),
        l(140, "img", 46),
        e()()()()()(),
        t(141, "section", 47)(142, "h2", 48),
        n(143, "Comment MFINANCES transforme vos projets immobiliers ?"),
        e(),
        t(144, "div", 49)(145, "div", 50)(146, "h2"),
        n(147, "01"),
        e(),
        t(148, "h3"),
        n(149, "Gestion comptable et analytique d\xE9di\xE9e"),
        e(),
        t(150, "p"),
        l(151, "i", 22),
        n(
          152,
          " Comptabilit\xE9 analytique par projet pour une tra\xE7abilit\xE9 optimale des flux financiers."
        ),
        e(),
        t(153, "p"),
        l(154, "i", 22),
        n(155, "Suivi pr\xE9cis des marges \xE0 chaque phase du projet."),
        e(),
        t(156, "p"),
        l(157, "i", 22),
        n(
          158,
          "\xC9laboration de bilans interm\xE9diaires pour ajuster les strat\xE9gies en temps r\xE9el."
        ),
        e()(),
        t(159, "div", 50)(160, "h2"),
        n(161, "02"),
        e(),
        t(162, "h3"),
        n(163, "Optimisation fiscale et TVA"),
        e(),
        t(164, "p"),
        l(165, "i", 22),
        n(
          166,
          " R\xE9cup\xE9ration de la TVA sur les travaux et acquisitions."
        ),
        e(),
        t(167, "p"),
        l(168, "i", 22),
        n(
          169,
          "Calcul pr\xE9cis du prorata pour optimiser les d\xE9ductions fiscales."
        ),
        e(),
        t(170, "p"),
        l(171, "i", 22),
        n(
          172,
          "Strat\xE9gies fiscales adapt\xE9es, comme la m\xE9thode \xE0 l\u2019ach\xE8vement, pour r\xE9duire les charges."
        ),
        e()(),
        t(173, "div", 50)(174, "h2"),
        n(175, "03"),
        e(),
        t(176, "h3"),
        n(177, "Outils digitaux et reporting avanc\xE9"),
        e(),
        t(178, "p"),
        l(179, "i", 22),
        n(
          180,
          " Tableaux de bord personnalis\xE9s pour surveiller les co\xFBts, marges, et flux financiers en temps r\xE9el."
        ),
        e(),
        t(181, "p"),
        l(182, "i", 22),
        n(
          183,
          " Automatisation des rapports comptables et fiscaux pour une gestion rapide et sans erreur."
        ),
        e(),
        t(184, "p"),
        l(185, "i", 22),
        n(
          186,
          " Pr\xE9visions financi\xE8res pour anticiper les besoins en tr\xE9sorerie et ajuster vos strat\xE9gies."
        ),
        e()()()(),
        t(187, "section", 51)(188, "div", 52)(189, "h1", 53),
        n(
          190,
          "Exemple concret : MFINANCES optimise la rentabilit\xE9 et la tr\xE9sorerie d\u2019un projet r\xE9sidentiel"
        ),
        e(),
        t(191, "div", 54)(192, "div", 55),
        l(193, "img", 56),
        e(),
        t(194, "div", 57)(195, "h2", 58),
        n(196, "Contexte :"),
        e(),
        t(197, "ul")(198, "li"),
        n(
          199,
          "Un promoteur immobilier g\xE9rait plusieurs projets r\xE9sidentiels avec des ventes concentr\xE9es en fin de projet. Les principaux d\xE9fis incluaient :"
        ),
        e(),
        t(200, "li"),
        n(
          201,
          "Une gestion complexe des co\xFBts par unit\xE9, impactant les marges globales."
        ),
        e(),
        t(202, "li"),
        n(
          203,
          "La n\xE9cessit\xE9 de lisser les flux financiers pour \xE9viter des tensions de tr\xE9sorerie."
        ),
        e(),
        t(204, "li"),
        n(
          205,
          "L\u2019annualit\xE9 de l\u2019imp\xF4t, rendant certaines ventes d\xE9favorables d\u2019un point de vue fiscal."
        ),
        e()(),
        t(206, "h2", 58),
        n(207, "Solutions apport\xE9es par MFINANCES :"),
        e(),
        t(208, "ul")(209, "li")(210, "strong"),
        n(211, "Comptabilit\xE9 analytique d\xE9taill\xE9e :"),
        e(),
        n(
          212,
          " Ventilation des co\xFBts par projet et par unit\xE9 pour mieux \xE9valuer la rentabilit\xE9."
        ),
        e(),
        t(213, "li")(214, "strong"),
        n(215, "Suivi budg\xE9taire rigoureux :"),
        e(),
        n(
          216,
          " Analyse des sc\xE9narios de vente et des implications fiscales pour optimiser la tr\xE9sorerie."
        ),
        e(),
        t(217, "li")(218, "strong"),
        n(219, "Strat\xE9gie d\u2019ajustement des ventes :"),
        e(),
        n(
          220,
          " Report strat\xE9gique de la vente de certaines unit\xE9s pour les faire co\xEFncider avec le lancement de nouveaux projets, r\xE9duisant ainsi l\u2019impact fiscal."
        ),
        e()(),
        t(221, "h2", 58),
        n(222, "R\xE9sultats :"),
        e(),
        t(223, "ul")(224, "li"),
        n(
          225,
          "Une rentabilit\xE9 globale accrue, avec une augmentation de 12 \xE0 20 % selon les projets."
        ),
        e(),
        t(226, "li"),
        n(
          227,
          "Une tr\xE9sorerie renforc\xE9e gr\xE2ce \xE0 des flux financiers \xE9quilibr\xE9s, permettant d\u2019initier un nouveau projet sans financement externe."
        ),
        e(),
        t(228, "li"),
        n(
          229,
          "Une gestion fiscale optimis\xE9e, r\xE9duisant les charges li\xE9es \xE0 l\u2019annualit\xE9 de l\u2019imp\xF4t."
        ),
        e()()()()()(),
        t(230, "section", 59)(231, "div", 2)(232, "div", 25)(233, "div", 60)(
          234,
          "h2",
          61
        ),
        n(235, " Pourquoi choisir "),
        l(236, "br"),
        t(237, "span", 62),
        n(238, "MFINANCES"),
        e(),
        n(239, " pour vos projets immobiliers ? "),
        e()(),
        t(240, "div", 63)(241, "div", 64)(242, "div", 65),
        l(243, "img", 66),
        e(),
        t(244, "div")(245, "h5", 67),
        n(246, "Une expertise sectorielle \xE9prouv\xE9e"),
        e(),
        t(247, "p", 68),
        n(
          248,
          "Une ma\xEEtrise approfondie des sp\xE9cificit\xE9s fiscales, comptables, et financi\xE8res des promoteurs immobiliers."
        ),
        e(),
        t(249, "p", 68),
        n(
          250,
          "Des solutions sur mesure pour r\xE9pondre aux besoins de chaque projet."
        ),
        e()()(),
        t(251, "div", 69)(252, "div", 65),
        l(253, "img", 70),
        e(),
        t(254, "div")(255, "h5", 67),
        n(256, "Des outils et strat\xE9gies adapt\xE9s"),
        e(),
        t(257, "p", 68),
        n(
          258,
          "Automatisation et digitalisation pour un pilotage efficace et en temps r\xE9el."
        ),
        e(),
        t(259, "p", 68),
        n(
          260,
          "Conseils strat\xE9giques pour maximiser la rentabilit\xE9 \xE0 chaque \xE9tape."
        ),
        e()()(),
        t(261, "div", 71)(262, "div", 65),
        l(263, "img", 72),
        e(),
        t(264, "div")(265, "h5", 67),
        n(266, "Un suivi avanc\xE9 pour des r\xE9sultats durables"),
        e(),
        t(267, "p", 68),
        n(
          268,
          "Pr\xE9visions financi\xE8res claires pour lisser les revenus et anticiper les besoins en tr\xE9sorerie."
        ),
        e(),
        t(269, "p", 68),
        n(
          270,
          "Analyses d\xE9taill\xE9es pour ajuster rapidement vos strat\xE9gies et s\xE9curiser vos marges."
        ),
        e()()()()()()(),
        t(271, "section", 73)(272, "div", 74)(273, "div", 25)(274, "div", 75),
        l(275, "img", 76),
        e(),
        t(276, "div", 77)(277, "h2", 78),
        n(
          278,
          " Pilotez vos projets immobiliers avec MFINANCES et transformez vos d\xE9fis "
        ),
        l(279, "br"),
        t(280, "span", 79),
        n(281, "en opportunit\xE9s"),
        e(),
        n(282, ". "),
        e(),
        t(283, "p", 80),
        n(
          284,
          " Contactez-nous d\xE8s aujourd\u2019hui pour un diagnostic fiscal et financier personnalis\xE9. "
        ),
        e(),
        t(285, "a", 81),
        n(286, " Contactez-nous "),
        l(287, "i", 82),
        e()()()()(),
        l(288, "app-recommandation-profil"));
    },
    dependencies: [oe, se],
    styles: [
      ".work-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px;color:#fff}.cards-container[_ngcontent-%COMP%]{display:flex;gap:20px;flex-wrap:wrap;justify-content:center;padding:20px}.card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;box-shadow:0 4px 6px #0000001a;padding:20px;width:400px;max-width:90%;text-align:left}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;color:#ff4136;margin-bottom:10px}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;color:#222;margin-bottom:10px}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem;color:#555;margin-bottom:10px;line-height:1.6}",
      `.challenge-solution-container[_ngcontent-%COMP%] {
    position: relative;
    padding: 2rem 0;
  }
  .vertical-line[_ngcontent-%COMP%] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #FF3333;
    margin-left: -1.5px;
    z-index: 1;
  }


  .custom-card[_ngcontent-%COMP%] {
      border: 2px solid #e6e9f1; 
      border-radius: 12px; 
      background-color: #f8f9fb; 
      padding: 20px; 
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%; 
  }

  .icon-wrapper[_ngcontent-%COMP%] {
      min-width: 80px;
      min-height: 80px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }

  .icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
      max-width: 100%;
      height: auto;
  }

  .custom-image-size[_ngcontent-%COMP%] {
  width: 70%; 

  height: auto; 

  }
  .second-card[_ngcontent-%COMP%] {
      position: relative;
  }

  @media (min-width: 992px) {
      .second-card[_ngcontent-%COMP%] {
          left: -64px;
      }
  }

  @media (max-width: 991px) {
      .second-card[_ngcontent-%COMP%] {
          left: 0;
      }
  }

  .color-red[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {
      color: #FF3333;
  }

  .bg-custom--primary[_ngcontent-%COMP%] {
      background-color: #25335b;;
  }

  .bg-custom--primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
   .bg-custom--primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
      color: white;
  }

  .rectangle-red[_ngcontent-%COMP%] {
      background-color: #FF3333;
      border-radius: 8px;
      padding: 6px;
  }

  .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      color: white;
      font-size: 29px !important;
      line-height: 48px;
      padding-bottom: 18px;
  }

  .highlighted[_ngcontent-%COMP%] {
      background-color: #ff4136;
      color: #fff;
      padding: 0.2rem 0.5rem;
      border-radius: 0.25rem;
  }

  .vertical-divider[_ngcontent-%COMP%] {
      border-left: 1px solid #d1d1d1;
      height: 100%;
  }

  .icon-red[_ngcontent-%COMP%] {
      color: #ff4136;
      font-size: 1.5rem;
      margin-right: 1rem; 
  }

  .section-title[_ngcontent-%COMP%] {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 2rem;
  }

  .flex-content[_ngcontent-%COMP%] {
      display: flex;
      align-items: flex-start; 
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
  }

  .section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
  }

  .header[_ngcontent-%COMP%] {
      background: url('../../assets/img/bg/bg_about.webp') no-repeat center center/cover;
      min-height: 400px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .header-overlay[_ngcontent-%COMP%] {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      color: white;
  }

  

  @media (max-width: 767px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 24px;
          line-height: 36px;
      }

      .custom-card[_ngcontent-%COMP%] {
          padding: 15px;
      }

      .icon-wrapper[_ngcontent-%COMP%] {
          min-width: 60px;
          min-height: 60px;
      }

      .works-items[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
          font-size: 1.2rem;
      }

      .section-title[_ngcontent-%COMP%] {
          font-size: 1.5rem;
      }
  }

  @media (max-width: 575px) {
      .hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
          font-size: 20px;
          line-height: 32px;
      }
  }`,
    ],
  });
};
var Uo = ["*"];
var Go = ["dialog"];
var Qi = { animation: !0, transitionTimerDelayMs: 5 },
  $o = (() => {
    class a {
      constructor() {
        this.animation = Qi.animation;
      }
      static {
        this.ɵfac = function (s) {
          return new (s || a)();
        };
      }
      static {
        this.ɵprov = Me({ token: a, factory: a.ɵfac, providedIn: "root" });
      }
    }
    return a;
  })();
function Wo(a) {
  let { transitionDelay: o, transitionDuration: i } =
      window.getComputedStyle(a),
    s = parseFloat(o),
    r = parseFloat(i);
  return (s + r) * 1e3;
}
function Ki(a) {
  return typeof a == "string";
}
function In(a) {
  return a != null;
}
function Qo(a) {
  return a && a.then;
}
function Yi(a) {
  return (a || document.body).getBoundingClientRect();
}
function Ko(a) {
  return (o) =>
    new _i((i) => {
      let s = (d) => a.run(() => i.next(d)),
        r = (d) => a.run(() => i.error(d)),
        c = () => a.run(() => i.complete());
      return o.subscribe({ next: s, error: r, complete: c });
    });
}
var Yo = () => {},
  { transitionTimerDelayMs: Jo } = Qi,
  Lt = new Map(),
  Be = (a, o, i, s) => {
    let r = s.context || {},
      c = Lt.get(o);
    if (c)
      switch (s.runningTransition) {
        case "continue":
          return bi;
        case "stop":
          a.run(() => c.transition$.complete()),
            (r = Object.assign(c.context, r)),
            Lt.delete(o);
      }
    let d = i(o, s.animation, r) || Yo;
    if (
      !s.animation ||
      window.getComputedStyle(o).transitionProperty === "none"
    )
      return a.run(() => d()), Xe(void 0).pipe(Ko(a));
    let u = new Ce(),
      m = new Ce(),
      p = u.pipe(xi(!0));
    Lt.set(o, {
      transition$: u,
      complete: () => {
        m.next(), m.complete();
      },
      context: r,
    });
    let f = Wo(o);
    return (
      a.runOutsideAngular(() => {
        let g = ye(o, "transitionend").pipe(
            fe(p),
            Ie(({ target: x }) => x === o)
          ),
          h = vi(f + Jo).pipe(fe(p));
        Ei(h, g, m)
          .pipe(fe(p))
          .subscribe(() => {
            Lt.delete(o),
              a.run(() => {
                d(), u.next(), u.complete();
              });
          });
      }),
      u.asObservable()
    );
  };
var ml = (() => {
  let a = () =>
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (/Macintosh/.test(navigator.userAgent) &&
        navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2),
    o = () => /Android/.test(navigator.userAgent);
  return typeof navigator < "u" ? !!navigator.userAgent && (a() || o()) : !1;
})();
var Zo = [
  "a[href]",
  "button:not([disabled])",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[contenteditable]",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");
function Ji(a) {
  let o = Array.from(a.querySelectorAll(Zo)).filter((i) => i.tabIndex !== -1);
  return [o[0], o[o.length - 1]];
}
var Xo = (a, o, i, s = !1) => {
  a.runOutsideAngular(() => {
    let r = ye(o, "focusin").pipe(
      fe(i),
      mn((c) => c.target)
    );
    ye(o, "keydown")
      .pipe(
        fe(i),
        Ie((c) => c.key === "Tab"),
        fn(r)
      )
      .subscribe(([c, d]) => {
        let [u, m] = Ji(o);
        (d === u || d === o) && c.shiftKey && (m.focus(), c.preventDefault()),
          d === m && !c.shiftKey && (u.focus(), c.preventDefault());
      }),
      s &&
        ye(o, "click")
          .pipe(
            fe(i),
            fn(r),
            mn((c) => c[1])
          )
          .subscribe((c) => c.focus());
  });
};
var pl = new Date(1882, 10, 12),
  gl = new Date(2174, 10, 25);
var fl = 1e3 * 60 * 60 * 24;
var Bn = 1080,
  es = 24 * Bn,
  ts = 12 * Bn + 793,
  hl = 29 * es + ts,
  _l = 11 * Bn + 204;
var ns = (() => {
    class a {
      constructor() {
        (this._ngbConfig = ae($o)),
          (this.backdrop = !0),
          (this.fullscreen = !1),
          (this.keyboard = !0);
      }
      get animation() {
        return this._animation ?? this._ngbConfig.animation;
      }
      set animation(i) {
        this._animation = i;
      }
      static {
        this.ɵfac = function (s) {
          return new (s || a)();
        };
      }
      static {
        this.ɵprov = Me({ token: a, factory: a.ɵfac, providedIn: "root" });
      }
    }
    return a;
  })(),
  Ye = class {
    constructor(o, i, s) {
      (this.nodes = o), (this.viewRef = i), (this.componentRef = s);
    }
  };
var is = (() => {
    class a {
      constructor() {
        this._document = ae($e);
      }
      hide() {
        let i = Math.abs(
            window.innerWidth - this._document.documentElement.clientWidth
          ),
          s = this._document.body,
          r = s.style,
          { overflow: c, paddingRight: d } = r;
        if (i > 0) {
          let u = parseFloat(window.getComputedStyle(s).paddingRight);
          r.paddingRight = `${u + i}px`;
        }
        return (
          (r.overflow = "hidden"),
          () => {
            i > 0 && (r.paddingRight = d), (r.overflow = c);
          }
        );
      }
      static {
        this.ɵfac = function (s) {
          return new (s || a)();
        };
      }
      static {
        this.ɵprov = Me({ token: a, factory: a.ɵfac, providedIn: "root" });
      }
    }
    return a;
  })(),
  os = (() => {
    class a {
      constructor() {
        (this._nativeElement = ae(bn).nativeElement),
          (this._zone = ae(Ue)),
          (this._injector = ae(Ve));
      }
      ngOnInit() {
        yn(
          () =>
            Be(
              this._zone,
              this._nativeElement,
              (i, s) => {
                s && Yi(i), i.classList.add("show");
              },
              { animation: this.animation, runningTransition: "continue" }
            ),
          { injector: this._injector, phase: xn.MixedReadWrite }
        );
      }
      hide() {
        return Be(
          this._zone,
          this._nativeElement,
          ({ classList: i }) => i.remove("show"),
          { animation: this.animation, runningTransition: "stop" }
        );
      }
      static {
        this.ɵfac = function (s) {
          return new (s || a)();
        };
      }
      static {
        this.ɵcmp = w({
          type: a,
          selectors: [["ngb-modal-backdrop"]],
          hostAttrs: [2, "z-index", "1055"],
          hostVars: 6,
          hostBindings: function (s, r) {
            s & 2 &&
              (bt(
                "modal-backdrop" +
                  (r.backdropClass ? " " + r.backdropClass : "")
              ),
              Cn("show", !r.animation)("fade", r.animation));
          },
          inputs: { animation: "animation", backdropClass: "backdropClass" },
          standalone: !0,
          features: [On],
          decls: 0,
          vars: 0,
          template: function (s, r) {},
          encapsulation: 2,
        });
      }
    }
    return a;
  })(),
  jt = class {
    update(o) {}
    close(o) {}
    dismiss(o) {}
  },
  ss = [
    "animation",
    "ariaLabelledBy",
    "ariaDescribedBy",
    "backdrop",
    "centered",
    "fullscreen",
    "keyboard",
    "scrollable",
    "size",
    "windowClass",
    "modalDialogClass",
  ],
  rs = ["animation", "backdropClass"],
  Fn = class {
    _applyWindowOptions(o, i) {
      ss.forEach((s) => {
        In(i[s]) && (o[s] = i[s]);
      });
    }
    _applyBackdropOptions(o, i) {
      rs.forEach((s) => {
        In(i[s]) && (o[s] = i[s]);
      });
    }
    update(o) {
      this._applyWindowOptions(this._windowCmptRef.instance, o),
        this._backdropCmptRef &&
          this._backdropCmptRef.instance &&
          this._applyBackdropOptions(this._backdropCmptRef.instance, o);
    }
    get componentInstance() {
      if (this._contentRef && this._contentRef.componentRef)
        return this._contentRef.componentRef.instance;
    }
    get closed() {
      return this._closed.asObservable().pipe(fe(this._hidden));
    }
    get dismissed() {
      return this._dismissed.asObservable().pipe(fe(this._hidden));
    }
    get hidden() {
      return this._hidden.asObservable();
    }
    get shown() {
      return this._windowCmptRef.instance.shown.asObservable();
    }
    constructor(o, i, s, r) {
      (this._windowCmptRef = o),
        (this._contentRef = i),
        (this._backdropCmptRef = s),
        (this._beforeDismiss = r),
        (this._closed = new Ce()),
        (this._dismissed = new Ce()),
        (this._hidden = new Ce()),
        o.instance.dismissEvent.subscribe((c) => {
          this.dismiss(c);
        }),
        (this.result = new Promise((c, d) => {
          (this._resolve = c), (this._reject = d);
        })),
        this.result.then(null, () => {});
    }
    close(o) {
      this._windowCmptRef &&
        (this._closed.next(o), this._resolve(o), this._removeModalElements());
    }
    _dismiss(o) {
      this._dismissed.next(o), this._reject(o), this._removeModalElements();
    }
    dismiss(o) {
      if (this._windowCmptRef)
        if (!this._beforeDismiss) this._dismiss(o);
        else {
          let i = this._beforeDismiss();
          Qo(i)
            ? i.then(
                (s) => {
                  s !== !1 && this._dismiss(o);
                },
                () => {}
              )
            : i !== !1 && this._dismiss(o);
        }
    }
    _removeModalElements() {
      let o = this._windowCmptRef.instance.hide(),
        i = this._backdropCmptRef
          ? this._backdropCmptRef.instance.hide()
          : Xe(void 0);
      o.subscribe(() => {
        let { nativeElement: s } = this._windowCmptRef.location;
        s.parentNode.removeChild(s),
          this._windowCmptRef.destroy(),
          this._contentRef?.viewRef?.destroy(),
          (this._windowCmptRef = null),
          (this._contentRef = null);
      }),
        i.subscribe(() => {
          if (this._backdropCmptRef) {
            let { nativeElement: s } = this._backdropCmptRef.location;
            s.parentNode.removeChild(s),
              this._backdropCmptRef.destroy(),
              (this._backdropCmptRef = null);
          }
        }),
        ht(o, i).subscribe(() => {
          this._hidden.next(), this._hidden.complete();
        });
    }
  },
  Rn = (function (a) {
    return (
      (a[(a.BACKDROP_CLICK = 0)] = "BACKDROP_CLICK"),
      (a[(a.ESC = 1)] = "ESC"),
      a
    );
  })(Rn || {}),
  as = (() => {
    class a {
      constructor() {
        (this._document = ae($e)),
          (this._elRef = ae(bn)),
          (this._zone = ae(Ue)),
          (this._injector = ae(Ve)),
          (this._closed$ = new Ce()),
          (this._elWithFocus = null),
          (this.backdrop = !0),
          (this.keyboard = !0),
          (this.dismissEvent = new _n()),
          (this.shown = new Ce()),
          (this.hidden = new Ce());
      }
      get fullscreenClass() {
        return this.fullscreen === !0
          ? " modal-fullscreen"
          : Ki(this.fullscreen)
          ? ` modal-fullscreen-${this.fullscreen}-down`
          : "";
      }
      dismiss(i) {
        this.dismissEvent.emit(i);
      }
      ngOnInit() {
        (this._elWithFocus = this._document.activeElement),
          yn(() => this._show(), {
            injector: this._injector,
            phase: xn.MixedReadWrite,
          });
      }
      ngOnDestroy() {
        this._disableEventHandling();
      }
      hide() {
        let { nativeElement: i } = this._elRef,
          s = { animation: this.animation, runningTransition: "stop" },
          r = Be(this._zone, i, () => i.classList.remove("show"), s),
          c = Be(this._zone, this._dialogEl.nativeElement, () => {}, s),
          d = ht(r, c);
        return (
          d.subscribe(() => {
            this.hidden.next(), this.hidden.complete();
          }),
          this._disableEventHandling(),
          this._restoreFocus(),
          d
        );
      }
      _show() {
        let i = { animation: this.animation, runningTransition: "continue" },
          s = Be(
            this._zone,
            this._elRef.nativeElement,
            (c, d) => {
              d && Yi(c), c.classList.add("show");
            },
            i
          ),
          r = Be(this._zone, this._dialogEl.nativeElement, () => {}, i);
        ht(s, r).subscribe(() => {
          this.shown.next(), this.shown.complete();
        }),
          this._enableEventHandling(),
          this._setFocus();
      }
      _enableEventHandling() {
        let { nativeElement: i } = this._elRef;
        this._zone.runOutsideAngular(() => {
          ye(i, "keydown")
            .pipe(
              fe(this._closed$),
              Ie((r) => r.key === "Escape")
            )
            .subscribe((r) => {
              this.keyboard
                ? requestAnimationFrame(() => {
                    r.defaultPrevented ||
                      this._zone.run(() => this.dismiss(Rn.ESC));
                  })
                : this.backdrop === "static" && this._bumpBackdrop();
            });
          let s = !1;
          ye(this._dialogEl.nativeElement, "mousedown")
            .pipe(
              fe(this._closed$),
              Si(() => (s = !1)),
              yi(() => ye(i, "mouseup").pipe(fe(this._closed$), pn(1))),
              Ie(({ target: r }) => i === r)
            )
            .subscribe(() => {
              s = !0;
            }),
            ye(i, "click")
              .pipe(fe(this._closed$))
              .subscribe(({ target: r }) => {
                i === r &&
                  (this.backdrop === "static"
                    ? this._bumpBackdrop()
                    : this.backdrop === !0 &&
                      !s &&
                      this._zone.run(() => this.dismiss(Rn.BACKDROP_CLICK))),
                  (s = !1);
              });
        });
      }
      _disableEventHandling() {
        this._closed$.next();
      }
      _setFocus() {
        let { nativeElement: i } = this._elRef;
        if (!i.contains(document.activeElement)) {
          let s = i.querySelector("[ngbAutofocus]"),
            r = Ji(i)[0];
          (s || r || i).focus();
        }
      }
      _restoreFocus() {
        let i = this._document.body,
          s = this._elWithFocus,
          r;
        s && s.focus && i.contains(s) ? (r = s) : (r = i),
          this._zone.runOutsideAngular(() => {
            setTimeout(() => r.focus()), (this._elWithFocus = null);
          });
      }
      _bumpBackdrop() {
        this.backdrop === "static" &&
          Be(
            this._zone,
            this._elRef.nativeElement,
            ({ classList: i }) => (
              i.add("modal-static"), () => i.remove("modal-static")
            ),
            { animation: this.animation, runningTransition: "continue" }
          );
      }
      static {
        this.ɵfac = function (s) {
          return new (s || a)();
        };
      }
      static {
        this.ɵcmp = w({
          type: a,
          selectors: [["ngb-modal-window"]],
          viewQuery: function (s, r) {
            if ((s & 1 && it(Go, 7), s & 2)) {
              let c;
              ot((c = st())) && (r._dialogEl = c.first);
            }
          },
          hostAttrs: ["role", "dialog", "tabindex", "-1"],
          hostVars: 7,
          hostBindings: function (s, r) {
            s & 2 &&
              (Di("aria-modal", !0)("aria-labelledby", r.ariaLabelledBy)(
                "aria-describedby",
                r.ariaDescribedBy
              ),
              bt("modal d-block" + (r.windowClass ? " " + r.windowClass : "")),
              Cn("fade", r.animation));
          },
          inputs: {
            animation: "animation",
            ariaLabelledBy: "ariaLabelledBy",
            ariaDescribedBy: "ariaDescribedBy",
            backdrop: "backdrop",
            centered: "centered",
            fullscreen: "fullscreen",
            keyboard: "keyboard",
            scrollable: "scrollable",
            size: "size",
            windowClass: "windowClass",
            modalDialogClass: "modalDialogClass",
          },
          outputs: { dismissEvent: "dismiss" },
          standalone: !0,
          features: [On],
          ngContentSelectors: Uo,
          decls: 4,
          vars: 2,
          consts: [
            ["dialog", ""],
            ["role", "document"],
            [1, "modal-content"],
          ],
          template: function (s, r) {
            s & 1 && (ki(), t(0, "div", 1, 0)(2, "div", 2), Ni(3), e()()),
              s & 2 &&
                bt(
                  "modal-dialog" +
                    (r.size ? " modal-" + r.size : "") +
                    (r.centered ? " modal-dialog-centered" : "") +
                    r.fullscreenClass +
                    (r.scrollable ? " modal-dialog-scrollable" : "") +
                    (r.modalDialogClass ? " " + r.modalDialogClass : "")
                );
          },
          styles: [
            `ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`,
          ],
          encapsulation: 2,
        });
      }
    }
    return a;
  })(),
  ls = (() => {
    class a {
      constructor() {
        (this._applicationRef = ae(Ai)),
          (this._injector = ae(Ve)),
          (this._environmentInjector = ae(hn)),
          (this._document = ae($e)),
          (this._scrollBar = ae(is)),
          (this._activeWindowCmptHasChanged = new Ce()),
          (this._ariaHiddenValues = new Map()),
          (this._scrollBarRestoreFn = null),
          (this._modalRefs = []),
          (this._windowCmpts = []),
          (this._activeInstances = new _n());
        let i = ae(Ue);
        this._activeWindowCmptHasChanged.subscribe(() => {
          if (this._windowCmpts.length) {
            let s = this._windowCmpts[this._windowCmpts.length - 1];
            Xo(i, s.location.nativeElement, this._activeWindowCmptHasChanged),
              this._revertAriaHidden(),
              this._setAriaHidden(s.location.nativeElement);
          }
        });
      }
      _restoreScrollBar() {
        let i = this._scrollBarRestoreFn;
        i && ((this._scrollBarRestoreFn = null), i());
      }
      _hideScrollBar() {
        this._scrollBarRestoreFn ||
          (this._scrollBarRestoreFn = this._scrollBar.hide());
      }
      open(i, s, r) {
        let c =
          r.container instanceof HTMLElement
            ? r.container
            : In(r.container)
            ? this._document.querySelector(r.container)
            : this._document.body;
        if (!c)
          throw new Error(
            `The specified modal container "${
              r.container || "body"
            }" was not found in the DOM.`
          );
        this._hideScrollBar();
        let d = new jt();
        i = r.injector || i;
        let u = i.get(hn, null) || this._environmentInjector,
          m = this._getContentRef(i, u, s, d, r),
          p = r.backdrop !== !1 ? this._attachBackdrop(c) : void 0,
          f = this._attachWindowComponent(c, m.nodes),
          g = new Fn(f, m, p, r.beforeDismiss);
        return (
          this._registerModalRef(g),
          this._registerWindowCmpt(f),
          g.hidden.pipe(pn(1)).subscribe(() =>
            Promise.resolve(!0).then(() => {
              this._modalRefs.length ||
                (this._document.body.classList.remove("modal-open"),
                this._restoreScrollBar(),
                this._revertAriaHidden());
            })
          ),
          (d.close = (h) => {
            g.close(h);
          }),
          (d.dismiss = (h) => {
            g.dismiss(h);
          }),
          (d.update = (h) => {
            g.update(h);
          }),
          g.update(r),
          this._modalRefs.length === 1 &&
            this._document.body.classList.add("modal-open"),
          p && p.instance && p.changeDetectorRef.detectChanges(),
          f.changeDetectorRef.detectChanges(),
          g
        );
      }
      get activeInstances() {
        return this._activeInstances;
      }
      dismissAll(i) {
        this._modalRefs.forEach((s) => s.dismiss(i));
      }
      hasOpenModals() {
        return this._modalRefs.length > 0;
      }
      _attachBackdrop(i) {
        let s = Et(os, {
          environmentInjector: this._applicationRef.injector,
          elementInjector: this._injector,
        });
        return (
          this._applicationRef.attachView(s.hostView),
          i.appendChild(s.location.nativeElement),
          s
        );
      }
      _attachWindowComponent(i, s) {
        let r = Et(as, {
          environmentInjector: this._applicationRef.injector,
          elementInjector: this._injector,
          projectableNodes: s,
        });
        return (
          this._applicationRef.attachView(r.hostView),
          i.appendChild(r.location.nativeElement),
          r
        );
      }
      _getContentRef(i, s, r, c, d) {
        return r
          ? r instanceof Oi
            ? this._createFromTemplateRef(r, c)
            : Ki(r)
            ? this._createFromString(r)
            : this._createFromComponent(i, s, r, c, d)
          : new Ye([]);
      }
      _createFromTemplateRef(i, s) {
        let r = {
            $implicit: s,
            close(d) {
              s.close(d);
            },
            dismiss(d) {
              s.dismiss(d);
            },
          },
          c = i.createEmbeddedView(r);
        return this._applicationRef.attachView(c), new Ye([c.rootNodes], c);
      }
      _createFromString(i) {
        let s = this._document.createTextNode(`${i}`);
        return new Ye([[s]]);
      }
      _createFromComponent(i, s, r, c, d) {
        let u = Ve.create({
            providers: [{ provide: jt, useValue: c }],
            parent: i,
          }),
          m = Et(r, { environmentInjector: s, elementInjector: u }),
          p = m.location.nativeElement;
        return (
          d.scrollable && p.classList.add("component-host-scrollable"),
          this._applicationRef.attachView(m.hostView),
          new Ye([[p]], m.hostView, m)
        );
      }
      _setAriaHidden(i) {
        let s = i.parentElement;
        s &&
          i !== this._document.body &&
          (Array.from(s.children).forEach((r) => {
            r !== i &&
              r.nodeName !== "SCRIPT" &&
              (this._ariaHiddenValues.set(r, r.getAttribute("aria-hidden")),
              r.setAttribute("aria-hidden", "true"));
          }),
          this._setAriaHidden(s));
      }
      _revertAriaHidden() {
        this._ariaHiddenValues.forEach((i, s) => {
          i
            ? s.setAttribute("aria-hidden", i)
            : s.removeAttribute("aria-hidden");
        }),
          this._ariaHiddenValues.clear();
      }
      _registerModalRef(i) {
        let s = () => {
          let r = this._modalRefs.indexOf(i);
          r > -1 &&
            (this._modalRefs.splice(r, 1),
            this._activeInstances.emit(this._modalRefs));
        };
        this._modalRefs.push(i),
          this._activeInstances.emit(this._modalRefs),
          i.result.then(s, s);
      }
      _registerWindowCmpt(i) {
        this._windowCmpts.push(i),
          this._activeWindowCmptHasChanged.next(),
          i.onDestroy(() => {
            let s = this._windowCmpts.indexOf(i);
            s > -1 &&
              (this._windowCmpts.splice(s, 1),
              this._activeWindowCmptHasChanged.next());
          });
      }
      static {
        this.ɵfac = function (s) {
          return new (s || a)();
        };
      }
      static {
        this.ɵprov = Me({ token: a, factory: a.ɵfac, providedIn: "root" });
      }
    }
    return a;
  })(),
  Zi = (() => {
    class a {
      constructor() {
        (this._injector = ae(Ve)),
          (this._modalStack = ae(ls)),
          (this._config = ae(ns));
      }
      open(i, s = {}) {
        let r = Ae(
          fi(Ae({}, this._config), { animation: this._config.animation }),
          s
        );
        return this._modalStack.open(this._injector, i, r);
      }
      get activeInstances() {
        return this._modalStack.activeInstances;
      }
      dismissAll(i) {
        this._modalStack.dismissAll(i);
      }
      hasOpenModals() {
        return this._modalStack.hasOpenModals();
      }
      static {
        this.ɵfac = function (s) {
          return new (s || a)();
        };
      }
      static {
        this.ɵprov = Me({ token: a, factory: a.ɵfac, providedIn: "root" });
      }
    }
    return a;
  })();
var bl = new Mi("live announcer delay", {
  providedIn: "root",
  factory: () => 100,
});
function us(a, o) {
  if (a & 1) {
    let i = be();
    t(0, "div", 62)(1, "button", 63),
      O("click", function () {
        let r = te(i).$implicit;
        return ne(r.dismiss("Cross click"));
      }),
      e()(),
      t(2, "div", 64)(3, "h6", 65),
      n(4, " Disponibilit\xE9 pour R\xE9pondre \xE0 Vos Questions "),
      e(),
      t(5, "ul")(6, "li"),
      n(
        7,
        " Acc\xE8s direct \xE0 un expert-comptable pour des r\xE9ponses claires et rapides. "
      ),
      e(),
      t(8, "li"),
      n(
        9,
        " Conseils personnalis\xE9s adapt\xE9s \xE0 la situation sp\xE9cifique de votre entreprise. "
      ),
      e()(),
      t(10, "h6", 66),
      n(11, " Montant des D\xE9penses Non Admises "),
      e(),
      t(12, "ul")(13, "li"),
      n(
        14,
        " Liste des d\xE9penses support\xE9es par l'entreprise, enregistr\xE9es sur le plan comptable, mais non d\xE9ductibles fiscalement. "
      ),
      e(),
      t(15, "li"),
      n(
        16,
        " Optimisation de la nature des d\xE9penses pour am\xE9liorer la d\xE9duction fiscale des frais professionnels. "
      ),
      e()(),
      t(17, "h6", 66),
      n(18, " Base Imposable de l'Entreprise "),
      e(),
      t(19, "ul")(20, "li"),
      n(21, "Calcul pr\xE9cis et semestriel de la base imposable."),
      e(),
      t(22, "li")(23, "strong"),
      n(24, "Imp\xF4t Actuel"),
      e(),
      t(25, "ul")(26, "li"),
      n(27, "Estimation fiable de l'imp\xF4t actuel d\xFB."),
      e(),
      t(28, "li"),
      n(29, "Strat\xE9gies pour optimiser la charge fiscale."),
      e()()(),
      t(30, "li")(31, "strong"),
      n(32, "Base Estim\xE9e de l'Exercice"),
      e(),
      t(33, "ul")(34, "li"),
      n(
        35,
        " Pr\xE9vision de la base imposable pour l'ensemble de l'exercice. "
      ),
      e(),
      t(36, "li"),
      n(
        37,
        " Conseils pour une meilleure planification financi\xE8re et fiscale. "
      ),
      e()()()(),
      t(38, "h6", 66),
      n(39, " Imp\xF4t Estim\xE9 de l'Exercice "),
      e(),
      t(40, "ul")(41, "li"),
      n(
        42,
        " Projection de l'imp\xF4t pour l'exercice en cours \xE0 trajectoire inchang\xE9e. "
      ),
      e(),
      t(43, "li")(44, "strong"),
      n(45, "Situation du Compte Courant Administrateur (CCA)"),
      e(),
      t(46, "ul")(47, "li"),
      n(48, " Suivi et analyse du compte courant de l'administrateur. "),
      e()()(),
      t(49, "li")(50, "strong"),
      n(51, "NB"),
      e(),
      t(52, "p"),
      n(
        53,
        " Le CCA est le poste comptable o\xF9 est enregistr\xE9 l'argent que doit l'administrateur \xE0 sa soci\xE9t\xE9 ou inversement. Cet \xE9tat permet \xE0 l'entrepreneur de conna\xEEtre sa situation. "
      ),
      e()()()(),
      t(54, "div", 67)(55, "button", 68),
      O("click", function () {
        let r = te(i).$implicit;
        return ne(r.close("Close click"));
      }),
      n(56, " Fermer "),
      e()();
  }
}
function ms(a, o) {
  if (a & 1) {
    let i = be();
    t(0, "div", 62)(1, "h5", 69),
      n(2, " D\xE9tails de l'Offre "),
      e(),
      t(3, "button", 63),
      O("click", function () {
        let r = te(i).$implicit;
        return ne(r.dismiss("Cross click"));
      }),
      e()(),
      t(4, "div", 64)(5, "ol")(6, "li")(7, "strong"),
      n(8, "La totalit\xE9 du package de base"),
      e()(),
      t(9, "li")(10, "strong"),
      n(11, "Analyse Comparative Saisonni\xE8re"),
      e(),
      t(12, "ul")(13, "li"),
      n(
        14,
        " Examen d\xE9taill\xE9 des performances de votre entreprise \xE0 travers les trimestres, permettant de comparer et d'analyser l'\xE9volution saisonni\xE8re. "
      ),
      e(),
      t(15, "li"),
      n(
        16,
        " Comparaisons horizontales (trimestres de l'ann\xE9e en cours) et verticales (par exemple, 1er trimestre 2023 vs 1er trimestre 2022), offrant une perspective claire sur la croissance et les tendances. "
      ),
      e()()(),
      t(17, "li")(18, "strong"),
      n(19, "Planification Financi\xE8re Avanc\xE9e"),
      e(),
      t(20, "ul")(21, "li"),
      n(
        22,
        " \xC9laboration d'un plan financier bas\xE9 sur vos r\xE9sultats pr\xE9c\xE9dents, vous fournissant une feuille de route claire pour l'avenir. "
      ),
      e(),
      t(23, "li"),
      n(
        24,
        " Pr\xE9visions et objectifs financiers pour l'exercice en cours, ajust\xE9s annuellement en fonction des r\xE9sultats et tendances observ\xE9s. "
      ),
      e()()()(),
      t(25, "h6", 70),
      n(
        26,
        " Avantages suppl\xE9mentaires de notre package Premium par rapport \xE0 l'offre de base "
      ),
      e(),
      t(27, "ul")(28, "li"),
      n(
        29,
        " Une compr\xE9hension approfondie des cycles et des tendances de votre entreprise, permettant une planification et une prise de d\xE9cision plus \xE9clair\xE9es. "
      ),
      e(),
      t(30, "li"),
      n(
        31,
        " Une capacit\xE9 \xE0 anticiper les besoins financiers et les opportunit\xE9s, vous positionnant id\xE9alement pour la croissance et l'adaptation. "
      ),
      e(),
      t(32, "li"),
      n(
        33,
        " Un accompagnement personnalis\xE9 qui va au-del\xE0 de la simple comptabilit\xE9, offrant des conseils strat\xE9giques pour maximiser votre potentiel tout en vous permettant de vous concentrer sur votre core business. "
      ),
      e()()(),
      t(34, "div", 67)(35, "button", 68),
      O("click", function () {
        let r = te(i).$implicit;
        return ne(r.close("Close click"));
      }),
      n(36, " Fermer "),
      e()();
  }
}
function ps(a, o) {
  if (a & 1) {
    let i = be();
    t(0, "div", 62)(1, "h5", 69),
      n(2, " D\xE9tails de l'Offre "),
      e(),
      t(3, "button", 63),
      O("click", function () {
        let r = te(i).$implicit;
        return ne(r.dismiss("Cross click"));
      }),
      e()(),
      t(4, "div", 64)(5, "ol")(6, "li")(7, "strong"),
      n(
        8,
        "L'offre Premium est comprise mais r\xE9alis\xE9e sur une base mensuelle"
      ),
      e()(),
      t(9, "li")(10, "strong"),
      n(11, "Planification Financi\xE8re Flexible"),
      e(),
      t(12, "ul")(13, "li"),
      n(
        14,
        " R\xE9visions et ajustements r\xE9guliers du plan financier pour s'assurer qu'il reste align\xE9 avec vos objectifs d'affaires et les r\xE9alit\xE9s du march\xE9. "
      ),
      e()()(),
      t(15, "li")(16, "strong"),
      n(17, "Analyse Budg\xE9taire Approfondie"),
      e(),
      t(18, "ul")(19, "li"),
      n(
        20,
        " Comparaison d\xE9taill\xE9e et r\xE9guli\xE8re des pr\xE9visions avec les r\xE9sultats r\xE9els, fournissant des insights pr\xE9cieux pour vous ajuster rapidement aux r\xE9alit\xE9s du march\xE9. "
      ),
      e(),
      t(21, "li"),
      n(22, " \xC9laboration de rapports de Forcast "),
      t(23, "strong"),
      n(24, "mensuels"),
      e(),
      n(
        25,
        ", soulignant les \xE9carts et offrant des recommandations pour les corriger et d\xE9velopper la facult\xE9 \xE0 anticiper les \xE9volutions du march\xE9. "
      ),
      e()()()(),
      t(26, "h6", 70),
      n(
        27,
        " Les avantages uniques de l'offre Excellence par rapport \xE0 l'offre Premium comprennent : "
      ),
      e(),
      t(28, "ul")(29, "li"),
      n(
        30,
        " Des analyses financi\xE8res et des rapports plus fr\xE9quents pour une vision toujours actualis\xE9e de la situation financi\xE8re de votre entreprise. "
      ),
      e(),
      t(31, "li"),
      n(
        32,
        " Une capacit\xE9 d'adaptation sans pr\xE9c\xE9dent, permettant des ajustements rapides et efficaces en fonction des \xE9volutions du march\xE9 et des opportunit\xE9s d'affaires. "
      ),
      e(),
      t(33, "li"),
      n(
        34,
        " Des insights strat\xE9giques pour une prise de d\xE9cision \xE9clair\xE9e, soutenant une croissance et un d\xE9veloppement d'entreprise robustes. "
      ),
      e()(),
      t(35, "p", 71),
      n(36, " En choisissant l'offre "),
      t(37, "strong"),
      n(38, "Excellence"),
      e(),
      n(
        39,
        ", vous vous assurez non seulement une gestion comptable de pointe, mais aussi un partenariat strat\xE9gique qui anticipe et s'adapte aux besoins uniques de votre entreprise. "
      ),
      e()(),
      t(40, "div", 67)(41, "button", 68),
      O("click", function () {
        let r = te(i).$implicit;
        return ne(r.close("Close click"));
      }),
      n(42, " Fermer "),
      e()();
  }
}
var qt = class a {
  constructor(o, i, s) {
    this.sanitizer = o;
    this.modalService = i;
    this.metaService = s;
    let r = "https://www.youtube.com/embed/ghSPTixak4c",
      c = "https://www.youtube.com/embed/qc18dXxbibU";
    (this.videoUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(c)),
      (this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(r));
  }
  isAccordionOpen = !1;
  videoUrl;
  videoUrl2;
  ngOnInit() {
    this.metaService.setTarifPageMeta();
  }
  scrollToVideo(o) {
    let i = document.getElementById(o);
    i && i.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  isAccordionOpenSituation = !1;
  isAccordionOpenAnticipation = !1;
  isAccordionOpenServices = !1;
  toggleAccordion(o) {
    o === "situation"
      ? (this.isAccordionOpenSituation = !this.isAccordionOpenSituation)
      : o === "anticipation"
      ? (this.isAccordionOpenAnticipation = !this.isAccordionOpenAnticipation)
      : o === "services" &&
        (this.isAccordionOpenServices = !this.isAccordionOpenServices);
  }
  open(o) {
    this.modalService.open(o, {
      ariaLabelledBy: "detailsModalLabel",
      size: "lg",
      scrollable: !0,
    });
  }
  static ɵfac = function (i) {
    return new (i || a)(I(Li), I(Zi), I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-tarif"]],
    decls: 227,
    vars: 2,
    consts: [
      ["content", ""],
      ["content2", ""],
      ["content3", ""],
      [1, "header"],
      [1, "header-overlay"],
      [1, "container"],
      [1, "text-white"],
      [1, "container", "py-5"],
      [1, "row", "align-items-center"],
      [1, "col-lg-6", "col-md-12", "mb-4", "mb-lg-0"],
      [1, "image-wrapper"],
      [
        "src",
        "../../assets/img/webp/15.webp",
        "alt",
        "Professionnelle de la comptabilit\xE9",
        1,
        "img-fluid",
      ],
      [1, "col-lg-6", "col-md-12"],
      [1, "content-wrapper"],
      [1, "text-red"],
      [1, "mb-4"],
      [1, "font-red"],
      [1, "mb-3"],
      [1, "features-box"],
      [1, "bg-custom--primary", "py-5"],
      [2, "padding-top", "24px"],
      [1, "text-center", "text-white"],
      [1, "pricing-container"],
      [1, "pricing-card"],
      ["viewBox", "0 0 24 24", 1, "card-icon"],
      [
        "d",
        "M20 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 10H4V8h16v8z",
      ],
      ["d", "M4 14h16v2H4z"],
      [1, "card-title"],
      [1, "price-container"],
      [1, "currency"],
      [1, "price"],
      [1, "period"],
      [1, "frequency"],
      [1, "features-list"],
      [1, "video-btn", 3, "click"],
      [1, "popular-badge"],
      [
        "d",
        "M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h16V4H4zm2 2h12v2H6V6zm0 4h12v2H6v-2zm0 4h8v2H6v-2z",
      ],
      [
        "d",
        "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      ],
      [
        "d",
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
      ],
      ["href", "/contact", 1, "contact-btn"],
      [1, "col-6"],
      [1, "main-text"],
      [1, "highlight-text"],
      [
        "src",
        "../../assets/img/webp/15.webp",
        "alt",
        "Professionnelle de la comptabilit\xE9",
      ],
      [1, "bg-custom--primary"],
      [1, "py-5"],
      [1, "offer-section"],
      [1, "offer-container"],
      ["id", "video-base", 1, "video-side"],
      [1, "video-wrapper"],
      [
        "width",
        "100%",
        "height",
        "100%",
        "title",
        "L'essentiel de votre comptabilit\xE9",
        "frameborder",
        "0",
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        "allowfullscreen",
        "",
        3,
        "src",
      ],
      [1, "details-side"],
      [1, "details-header"],
      [1, "title"],
      [1, "price", "text-white"],
      [1, "description"],
      ["type", "button", 1, "btn", "btn-red", 3, "click"],
      [1, "offer-section2"],
      [1, "description2"],
      ["id", "video-premium", 1, "video-side"],
      [
        "width",
        "100%",
        "height",
        "100%",
        "src",
        wi`https://www.youtube.com/embed/iaec1s9QEXU`,
        "title",
        "L'essentiel de votre comptabilit\xE9",
        "frameborder",
        "0",
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        "allowfullscreen",
        "",
      ],
      ["id", "video-excellence", 1, "video-side"],
      [1, "modal-header"],
      ["type", "button", "aria-label", "Fermer", 1, "btn-close", 3, "click"],
      [1, "modal-body"],
      [1, "text-primary-custom"],
      [1, "text-primary-custom", "mt-3"],
      [1, "modal-footer"],
      ["type", "button", 1, "btn", "btn-secondary", 3, "click"],
      ["id", "detailsModalLabel", 1, "modal-title"],
      [1, "text-danger", "mt-3"],
      [1, "mt-3"],
    ],
    template: function (i, s) {
      if (i & 1) {
        let r = be();
        t(0, "header", 3)(1, "div", 4)(2, "div", 5)(3, "h1", 6),
          n(4, "Nos tarifs"),
          e(),
          t(5, "p", 6),
          n(
            6,
            " Pour les entreprises non assujetties \xE0 la TVA, nous offrons une r\xE9duction de 21% sur nos tarifs."
          ),
          l(7, "br"),
          n(
            8,
            " Cette politique refl\xE8te notre engagement \xE0 fournir des solutions financi\xE8res adapt\xE9es \xE0 chaque structure. "
          ),
          e()()()(),
          t(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10),
          l(13, "img", 11),
          e()(),
          t(14, "div", 12)(15, "div", 13)(16, "span", 14),
          n(17, "CE QUE NOUS VOUS PROPOSONS"),
          e(),
          t(18, "h1", 15),
          n(19, " Comptabilit\xE9 Proactive, Croissance "),
          t(20, "span", 16),
          n(21, "Assur\xE9e"),
          e()(),
          t(22, "p", 17),
          n(
            23,
            " Comptabilit\xE9 proactive, croissance assur\xE9e dans le monde dynamique des affaires, la r\xE9ussite d'une entreprise d\xE9pend souvent de sa capacit\xE9 \xE0 prendre des d\xE9cisions \xE9clair\xE9es et rapides. "
          ),
          e(),
          t(24, "p", 15),
          n(
            25,
            " Chez Mfinances, nous comprenons cette exigence et avons con\xE7u nos services pour \xEAtre bien plus qu'un simple cabinet d'expertise comptable. "
          ),
          e(),
          t(26, "div", 18)(27, "h3", 17),
          n(28, " Situations Interminables et Pr\xE9visionnelles de Pointe "),
          e(),
          t(29, "p"),
          n(
            30,
            " Au c\u0153ur de notre offre, Mfinances s'engage \xE0 fournir des situations interm\xE9diaires et pr\xE9visionnelles sur une base r\xE9guli\xE8re. Cette pratique vous permet de g\xE9rer votre entreprise de mani\xE8re \xE9clair\xE9e, en prenant des d\xE9cisions fond\xE9es sur des donn\xE9es actualis\xE9es et pr\xE9cises. "
          ),
          e()()()()()(),
          t(31, "div", 19)(32, "div", 20)(33, "h2", 21),
          n(34, " Nos Offres, accompagn\xE9es d'une expertise de pointe "),
          e()(),
          t(35, "div", 22)(36, "div", 23),
          et(),
          t(37, "svg", 24),
          l(38, "path", 25)(39, "path", 26),
          e(),
          tt(),
          t(40, "h3", 27),
          n(41, "Offre de Base"),
          e(),
          t(42, "div", 28)(43, "span", 29),
          n(44, "\u20AC"),
          e(),
          t(45, "span", 30),
          n(46, "350"),
          e(),
          t(47, "span", 31),
          n(48, "/mois"),
          e()(),
          t(49, "div", 32),
          n(50, " \xC9tats financiers fournis \xE0 une fr\xE9quence "),
          t(51, "strong"),
          n(52, "Semestrielle"),
          e(),
          n(53, ". "),
          e(),
          t(54, "ul", 33)(55, "li"),
          n(56, "Situation Actuelle"),
          e(),
          t(57, "li"),
          n(58, "Anticipation Du R\xE9sultat"),
          e(),
          t(59, "li"),
          n(60, "Estimation De L'imp\xF4t"),
          e(),
          t(61, "li"),
          n(62, "Tarif HTVA"),
          e()(),
          t(63, "button", 34),
          O("click", function () {
            return te(r), ne(s.scrollToVideo("video-base"));
          }),
          n(64, " VID\xC9O EXPLICATIVE "),
          e()(),
          t(65, "div", 23)(66, "div", 35),
          n(67, "POPULAIRE"),
          e(),
          et(),
          t(68, "svg", 24),
          l(69, "path", 36),
          e(),
          tt(),
          t(70, "h3", 27),
          n(71, "Offre Premium"),
          e(),
          t(72, "div", 28)(73, "span", 29),
          n(74, "\u20AC"),
          e(),
          t(75, "span", 30),
          n(76, "450"),
          e(),
          t(77, "span", 31),
          n(78, "/mois"),
          e()(),
          t(79, "div", 32),
          n(80, " \xC9tats financiers fournis \xE0 une fr\xE9quence "),
          t(81, "strong"),
          n(82, "Trimestrielle"),
          e(),
          n(83, ". "),
          e(),
          t(84, "ul", 33)(85, "li"),
          n(86, "Tous L'offre De Base"),
          e(),
          t(87, "li"),
          n(88, "Analyse Des Tendances"),
          e(),
          t(89, "li"),
          n(90, "Plan Financier Annuel"),
          e(),
          t(91, "li"),
          n(92, "Tarif HTVA"),
          e()(),
          t(93, "button", 34),
          O("click", function () {
            return te(r), ne(s.scrollToVideo("video-premium"));
          }),
          n(94, " VID\xC9O EXPLICATIVE "),
          e()(),
          t(95, "div", 23),
          et(),
          t(96, "svg", 24),
          l(97, "path", 37),
          e(),
          tt(),
          t(98, "h3", 27),
          n(99, "Offre Excellence"),
          e(),
          t(100, "div", 28)(101, "span", 29),
          n(102, "\u20AC"),
          e(),
          t(103, "span", 30),
          n(104, "650"),
          e(),
          t(105, "span", 31),
          n(106, "/mois"),
          e()(),
          t(107, "div", 32),
          n(108, " \xC9tats financiers fournis \xE0 une fr\xE9quence "),
          t(109, "strong"),
          n(110, "Mensuelle"),
          e(),
          n(111, ". "),
          e(),
          t(112, "ul", 33)(113, "li"),
          n(114, "Tous L'offre Premium"),
          e(),
          t(115, "li"),
          n(116, "Budget Et Analyse Des \xC9carts"),
          e(),
          t(117, "li"),
          n(118, "Plan Financier Semestrielle"),
          e(),
          t(119, "li"),
          n(120, "Tarif HTVA"),
          e()(),
          t(121, "button", 34),
          O("click", function () {
            return te(r), ne(s.scrollToVideo("video-excellence"));
          }),
          n(122, " VID\xC9O EXPLICATIVE "),
          e()(),
          t(123, "div", 23),
          et(),
          t(124, "svg", 24),
          l(125, "path", 38),
          e(),
          tt(),
          t(126, "h3", 27),
          n(127, "Au Tarif Horaire"),
          e(),
          t(128, "div", 28)(129, "span", 29),
          n(130, "\u20AC"),
          e(),
          t(131, "span", 30),
          n(132, "150"),
          e(),
          t(133, "span", 31),
          n(134, "/heure"),
          e()(),
          t(135, "div", 32),
          n(136, "\xC0 la demande"),
          e(),
          t(137, "ul", 33)(138, "li"),
          n(139, "Tarif HTVA"),
          e()(),
          t(140, "a", 39),
          n(141, "CONTACTEZ-NOUS"),
          e()()()(),
          t(142, "div", 7)(143, "div", 8)(144, "div", 40)(145, "div", 13)(
            146,
            "h1"
          ),
          n(147, " Un engagement de temps et de "),
          t(148, "span", 16),
          n(149, "pr\xE9cision"),
          e()(),
          t(150, "p"),
          n(
            151,
            " Pour produire ces analyses indispensables et respecter syst\xE9matiquement les dates convenues, notre \xE9quipe accorde une attention particuli\xE8re \xE0 chaque dossier. Cet investissement en temps garantit non seulement la qualit\xE9 et la r\xE9gularit\xE9 des informations fournies, mais t\xE9moigne aussi de notre engagement \xE0 soutenir activement votre entreprise dans sa trajectoire de croissance. "
          ),
          e(),
          t(152, "p", 41)(153, "span", 42),
          n(
            154,
            "Chez Mfinances, nous ne nous contentons pas de traiter des chiffres :"
          ),
          e(),
          n(
            155,
            " nous veillons \xE0 ce qu'ils racontent l'histoire de votre entreprise, vous aidant ainsi \xE0 b\xE2tir un avenir financier solide et prosp\xE8re. "
          ),
          e(),
          t(156, "div", 18)(157, "h3"),
          n(158, "Assistance Administrative sur Mesure"),
          e(),
          t(159, "p"),
          n(
            160,
            " En compl\xE9ment, Mfinances propose une assistance administrative d\xE9di\xE9e. Nous nous concentrons sur la compl\xE9tude de vos documents comptables, l'optimisation de vos processus financiers et la s\xE9curisation de vos d\xE9ductions de charges. Cette assistance est cruciale pour garantir l'int\xE9grit\xE9 de votre comptabilit\xE9 et la s\xE9r\xE9nit\xE9 de votre gestion d'entreprise. Avec Mfinances, vous n'avez pas seulement un comptable ; vous avez une \xE9quipe qui travaille inlassablement pour assurer que chaque aspect de votre comptabilit\xE9 soit impeccable. "
          ),
          e()()()(),
          t(161, "div", 40)(162, "div", 10),
          l(163, "img", 43),
          e()()()(),
          t(164, "div", 44)(165, "div", 45)(166, "div", 46)(167, "div", 47)(
            168,
            "div",
            48
          )(169, "div", 49),
          l(170, "iframe", 50),
          e()(),
          t(171, "div", 51)(172, "div", 52)(173, "span", 14),
          n(174, "D\xC9TAILS DU TARIF"),
          e(),
          t(175, "h1", 53),
          n(176, " Offre de Base : "),
          t(177, "span", 54),
          n(178, "350 \u20AC HTVA / Mois"),
          e()()(),
          t(179, "p", 55),
          n(
            180,
            " L'offre de base de Mfinances est la solution parfaite pour les petites entreprises, offrant une gestion comptable essentielle et un soutien personnalis\xE9. Elle inclut un acc\xE8s direct \xE0 notre expert-comptable, une analyse p\xE9riodique de vos finances, ainsi que des conseils pour optimiser votre situation fiscale. Parfaite pour maintenir une bonne sant\xE9 financi\xE8re tout en se concentrant sur la croissance de votre entreprise. "
          ),
          e(),
          t(181, "button", 56),
          O("click", function () {
            te(r);
            let d = rt(184);
            return ne(s.open(d));
          }),
          n(182, " Voir les d\xE9tails de l'offre "),
          e(),
          pe(183, us, 57, 0, "ng-template", null, 0, lt),
          e()()()()(),
          t(185, "div", 45)(186, "div", 57)(187, "div", 47)(188, "div", 51)(
            189,
            "div",
            52
          )(190, "span", 14),
          n(191, "D\xC9TAILS DU TARIF"),
          e(),
          t(192, "h1"),
          n(193, " Offre Premium : "),
          t(194, "span", 30),
          n(195, " 450 \u20AC HTVA / Mois"),
          e()()(),
          t(196, "p", 58),
          n(
            197,
            " L'offre premium de Mfinances est sp\xE9cialement con\xE7ue pour les dirigeants d'entreprises moyennes, cherchant \xE0 d\xE9passer la simple compr\xE9hension de leur situation financi\xE8re pour une planification proactive et strat\xE9gique. Ce service offre un accompagnement approfondi, permettant aux dirigeants de se concentrer sur leur activit\xE9 principale tout en naviguant efficacement dans le monde des affaires moderne. "
          ),
          e(),
          t(198, "button", 56),
          O("click", function () {
            te(r);
            let d = rt(201);
            return ne(s.open(d));
          }),
          n(199, " Voir les d\xE9tails de l'offre "),
          e(),
          pe(200, ms, 37, 0, "ng-template", null, 1, lt),
          e(),
          t(202, "div", 59)(203, "div", 49),
          l(204, "iframe", 60),
          e()()()()(),
          t(205, "div", 44)(206, "div", 45)(207, "div", 46)(208, "div", 47)(
            209,
            "div",
            61
          )(210, "div", 49),
          l(211, "iframe", 50),
          e()(),
          t(212, "div", 51)(213, "div", 52)(214, "span", 14),
          n(215, "D\xC9TAILS DU TARIF"),
          e(),
          t(216, "h1", 53),
          n(217, " Offre Excellence : "),
          t(218, "span", 54),
          n(219, "650 \u20AC HTVA / Mois"),
          e()()(),
          t(220, "p", 55),
          n(
            221,
            " L'offre Excellence repr\xE9sente le summum de nos services comptables et financiers, sp\xE9cialement con\xE7ue pour les entreprises qui recherchent la perfection en termes de pr\xE9cision, d'adaptabilit\xE9 et de pr\xE9vision. En plus des services habituels, cette offre met un accent particulier sur le contr\xF4le de gestion, permettant une analyse approfondie et continue des performances financi\xE8res. Comprendre l'origine des \xE9carts entre le budget et les chiffres r\xE9alis\xE9s est essentiel pour mieux anticiper l'avenir. Nous assurons une optimisation constante des ressources et une anticipation proactive des d\xE9fis financiers. "
          ),
          e(),
          t(222, "button", 56),
          O("click", function () {
            te(r);
            let d = rt(225);
            return ne(s.open(d));
          }),
          n(223, " Voir les d\xE9tails de l'offre "),
          e(),
          pe(224, ps, 43, 0, "ng-template", null, 2, lt),
          e()()()()(),
          l(226, "app-zone-contact");
      }
      i & 2 &&
        (ie(170),
        le("src", s.videoUrl, En),
        ie(41),
        le("src", s.videoUrl2, En));
    },
    dependencies: [Ke],
    styles: [
      '*[_ngcontent-%COMP%]{color:#0e1124}.content-section[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:3rem;padding:2rem 0}.content-image[_ngcontent-%COMP%]{flex:1}.content-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:8px;box-shadow:0 4px 12px #00000014}.content-text[_ngcontent-%COMP%]{flex:1}.section-tag[_ngcontent-%COMP%]{color:#f44;font-size:.9rem;font-weight:600;margin-bottom:1rem;display:block}h2[_ngcontent-%COMP%]{color:#114d5a;font-size:2rem;line-height:1.2;margin-bottom:1.5rem}.highlight[_ngcontent-%COMP%]{color:#f44;margin:1.5rem 0}.features-box[_ngcontent-%COMP%]{background:#f8f9fa;padding:1.5rem;border-radius:8px;margin-top:1.5rem}.features-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#114d5a;margin-bottom:1rem;font-size:1.2rem}@media (max-width: 768px){.content-section[_ngcontent-%COMP%]{flex-direction:column;gap:2rem}h2[_ngcontent-%COMP%]{font-size:1.75rem}}.header[_ngcontent-%COMP%]{background:url("./media/Background_Compta-5OOUPIYR.png") no-repeat center center/cover;min-height:300px;position:relative;display:flex;align-items:center;justify-content:center}.header-overlay[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;color:#fff}a[_ngcontent-%COMP%]{text-decoration:none}h1[_ngcontent-%COMP%]{padding:0}.home2-hadding[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .home2-hadding[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home2-hadding[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#fff}.expert-text[_ngcontent-%COMP%]{font-size:1em}.text-primary-custom[_ngcontent-%COMP%]{color:red}.text-red[_ngcontent-%COMP%]{color:#f34947;font-style:italic}.about-choose[_ngcontent-%COMP%]{background-color:#25335b}.font-red[_ngcontent-%COMP%]{background-color:#f34947;border-radius:8px;padding:2px}.pricing-container[_ngcontent-%COMP%]{margin:0 auto;padding:2rem;display:flex;flex-wrap:wrap;gap:2rem;justify-content:center}.pricing-card[_ngcontent-%COMP%]{background:#fff;border-radius:20px;padding:2rem;width:280px;position:relative;box-shadow:0 10px 30px #0000001a;transition:transform .3s ease,box-shadow .3s ease;display:flex;flex-direction:column;gap:1.5rem}.pricing-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 15px 40px #00000026}.card-icon[_ngcontent-%COMP%]{width:50px;height:50px;fill:#ff3b30;margin-bottom:1rem}.card-title[_ngcontent-%COMP%]{color:#1a2c51;font-size:1.5rem;font-weight:700;margin:0}.price-container[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:.25rem}.currency[_ngcontent-%COMP%]{color:#ff3b30;font-size:1.5rem}.price[_ngcontent-%COMP%]{color:#1a2c51;font-size:3rem;font-weight:700;line-height:1}.period[_ngcontent-%COMP%]{color:#666;font-size:1rem}.frequency[_ngcontent-%COMP%], .frequency[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1rem;color:#22c55e;font-weight:600;margin-bottom:1rem}.features-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.75rem;flex-grow:1}.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;font-size:.95rem;display:flex;align-items:center;gap:.5rem}.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";color:#22c55e;font-weight:700}.video-btn[_ngcontent-%COMP%], .contact-btn[_ngcontent-%COMP%]{background:#ff3b30;color:#fff;border:none;padding:1rem;border-radius:10px;font-weight:600;cursor:pointer;transition:background .3s ease;text-align:center;text-decoration:none;text-transform:uppercase;font-size:.9rem;letter-spacing:.5px}.video-btn[_ngcontent-%COMP%]:hover, .contact-btn[_ngcontent-%COMP%]:hover{background:#e62e24}.popular-badge[_ngcontent-%COMP%]{position:absolute;top:-12px;right:20px;background:#22c55e;color:#fff;padding:.5rem 1rem;border-radius:20px;font-size:.8rem;font-weight:600;letter-spacing:.5px}@media (max-width: 768px){.pricing-container[_ngcontent-%COMP%]{padding:1rem}.pricing-card[_ngcontent-%COMP%]{width:100%;max-width:340px}}.highlight-text[_ngcontent-%COMP%]{color:#ff3b30;font-weight:600}.offer-section[_ngcontent-%COMP%]{width:100%;background:#25335b;padding:4rem 2rem}.offer-section2[_ngcontent-%COMP%]{width:100%;padding:4rem 2rem}.offer-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}.video-side[_ngcontent-%COMP%]{position:relative;width:100%}.video-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 20px 40px #0000001a}.video-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.details-side[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.details-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.badge[_ngcontent-%COMP%]{display:inline-block;padding:.5rem 1rem;background:#ff3b301a;color:#ff3b30;font-weight:600;font-size:.875rem;border-radius:.5rem;align-self:flex-start}.title[_ngcontent-%COMP%]{color:#fff;font-size:2.5rem;font-weight:800;line-height:1.2;margin:0}.price[_ngcontent-%COMP%]{display:block;font-size:2rem;margin-top:.5rem}.description[_ngcontent-%COMP%]{color:#fff;line-height:1.8;font-size:1.1rem;margin:0}.description2[_ngcontent-%COMP%]{line-height:1.8;font-size:1.1rem;margin:0}.accordion-body[_ngcontent-%COMP%]{background:#fff!important}.accordion-item2[_ngcontent-%COMP%]{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border-radius:16px}.accordion-trigger[_ngcontent-%COMP%]{width:100%;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;background:#fff;border:none;cursor:pointer;font-weight:600;color:#1a2c51;transition:background-color .3s ease}.accordion-trigger[_ngcontent-%COMP%]:hover{background-color:#f8fafc}.chevron[_ngcontent-%COMP%]{width:12px;height:12px;border-right:2px solid #1a2c51;border-bottom:2px solid #1a2c51;transform:rotate(45deg);transition:transform .3s ease}.chevron.open[_ngcontent-%COMP%]{transform:rotate(-135deg);margin-top:6px}.accordion-content[_ngcontent-%COMP%]{padding:0 1.5rem 1.5rem}.service-section[_ngcontent-%COMP%]{padding:1.5rem 0;border-top:1px solid #e2e8f0}.service-section[_ngcontent-%COMP%]:first-child{border-top:none;padding-top:0}.service-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#00bfff;font-size:1.1rem;font-weight:600;margin:0 0 1rem}.service-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.75rem}.service-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:1.5rem;color:#4a5568}.service-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);width:.5rem;height:.5rem;background:#00bfff;border-radius:50%}@media (max-width: 1024px){.offer-container[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:3rem}.title[_ngcontent-%COMP%]{font-size:2rem}.price[_ngcontent-%COMP%]{font-size:1.75rem}}@media (max-width: 640px){.offer-section[_ngcontent-%COMP%]{padding:2rem 1rem}.title[_ngcontent-%COMP%]{font-size:1.75rem}.price[_ngcontent-%COMP%]{font-size:1.5rem}.accordion-trigger[_ngcontent-%COMP%]{padding:1.25rem}}.bg-custom--primary[_ngcontent-%COMP%]{background-color:#25335b}.btn-red[_ngcontent-%COMP%]{background-color:#f34947;color:#fff}',
    ],
  });
};
var gs = [
    { path: "", redirectTo: "accueil", pathMatch: "full" },
    {
      path: "accueil",
      loadChildren: () =>
        import("./chunk-26LUXNNN.js").then((a) => a.ModuleAccueilModule),
    },
    { path: "about", component: wt },
    { path: "tarif", component: qt },
    { path: "absl", component: Ot },
    { path: "profil-independant", component: Tt },
    { path: "societe-management-patrimoniale", component: kt },
    { path: "societe-moyen", component: Nt },
    { path: "societe-exploitation", component: At },
    { path: "commercant-horeca", component: It },
    { path: "professionel-sante", component: Ft },
    { path: "contact", component: Rt },
    { path: "grande-entreprise", component: Bt },
    { path: "promoteur-immobilier", component: zt },
    {
      path: "services",
      loadChildren: () =>
        import("./chunk-SRVUGPQK.js").then((a) => a.ServicesModule),
    },
    {
      path: "vente",
      loadChildren: () =>
        import("./chunk-YMMOMWXX.js").then((a) => a.VenteModule),
    },
    {
      path: "tresorerie",
      loadChildren: () =>
        import("./chunk-3ML6VQ32.js").then((a) => a.TresorireModule),
    },
  ],
  Ht = class a {
    static ɵfac = function (i) {
      return new (i || a)();
    };
    static ɵmod = Re({ type: a });
    static ɵinj = Fe({
      imports: [Dn.forRoot(gs, { scrollPositionRestoration: "enabled" }), Dn],
    });
  };
var eo = Ao(Xi());
function fs(a, o) {
  if (a & 1) {
    let i = be();
    t(0, "div", 1)(1, "div", 2)(2, "span", 3),
      n(3, " Profitez de 400 \u20AC de r\xE9duction avec le code "),
      t(4, "strong"),
      n(5, '"BOOSTPME"'),
      e(),
      n(6),
      e(),
      t(7, "button", 4),
      O("click", function () {
        te(i);
        let r = Ge();
        return ne(r.closeBanner());
      }),
      n(8, " \xD7 "),
      e()()();
  }
  if (a & 2) {
    let i = Ge();
    ie(6),
      at(
        ' - Valable sur la toute section "Boostez votre Entreprise" La promotion se termine dans ',
        i.countdownDisplay,
        " "
      );
  }
}
var Vt = class a {
  showBanner = !0;
  endTime;
  countdownDisplay = "";
  countdownInterval;
  constructor() {
    (this.endTime = new Date()),
      this.endTime.setHours(this.endTime.getHours() + 5),
      this.endTime.setMinutes(this.endTime.getMinutes() + 28),
      this.endTime.setSeconds(this.endTime.getSeconds() + 8);
  }
  ngOnInit() {
    this.startCountdown();
  }
  ngOnDestroy() {
    this.countdownInterval && clearInterval(this.countdownInterval);
  }
  startCountdown() {
    this.countdownInterval = setInterval(() => {
      let o = new Date(),
        i = this.endTime.getTime() - o.getTime();
      if (i <= 0) {
        clearInterval(this.countdownInterval),
          (this.countdownDisplay = "Promotion termin\xE9e");
        return;
      }
      let s = Math.floor(i / (1e3 * 60 * 60)),
        r = Math.floor((i % (1e3 * 60 * 60)) / (1e3 * 60)),
        c = Math.floor((i % (1e3 * 60)) / 1e3);
      this.countdownDisplay = `${s}h ${r}m ${c}s`;
    }, 1e3);
  }
  closeBanner() {
    this.showBanner = !1;
  }
  static ɵfac = function (i) {
    return new (i || a)();
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-promo-banner"]],
    decls: 1,
    vars: 1,
    consts: [
      ["class", "promo-banner", 4, "ngIf"],
      [1, "promo-banner"],
      [1, "promo-content"],
      [1, "promo-text"],
      [1, "close-banner", 3, "click"],
    ],
    template: function (i, s) {
      i & 1 && pe(0, fs, 9, 1, "div", 0), i & 2 && le("ngIf", s.showBanner);
    },
    dependencies: [We],
    styles: [
      ".promo-banner[_ngcontent-%COMP%]{background-color:#ff4b4b;color:#fff;text-align:center;padding:10px;top:0;left:0;width:100%;min-height:40px;animation:_ngcontent-%COMP%_slideDown .5s ease-out}.promo-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;max-width:1200px;margin:0 auto;position:relative;padding:0 40px}.promo-text[_ngcontent-%COMP%]{flex-grow:1;text-align:center;font-size:.9rem;line-height:1.2;margin:0}.close-banner[_ngcontent-%COMP%]{background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer;position:absolute;right:10px;top:50%;transform:translateY(-50%);padding:5px;display:flex;align-items:center;justify-content:center}@keyframes _ngcontent-%COMP%_slideDown{0%{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}@media screen and (max-width: 768px){.promo-banner[_ngcontent-%COMP%]{min-height:50px;padding:8px 5px}.promo-text[_ngcontent-%COMP%]{font-size:.8rem;padding:0 25px}.close-banner[_ngcontent-%COMP%]{font-size:1.2rem;right:5px}}@media screen and (max-width: 480px){.promo-banner[_ngcontent-%COMP%]{min-height:60px}.promo-text[_ngcontent-%COMP%]{font-size:.75rem;line-height:1.3}.promo-content[_ngcontent-%COMP%]{padding:0 30px}}@media screen and (max-width: 320px){.promo-banner[_ngcontent-%COMP%]{min-height:70px}.promo-text[_ngcontent-%COMP%]{font-size:.7rem}}",
    ],
  });
};
var Ut = class a {
  static ɵfac = function (i) {
    return new (i || a)();
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-top-bar"]],
    decls: 21,
    vars: 0,
    consts: [
      [1, "top-bar"],
      [
        1,
        "container",
        "d-flex",
        "justify-content-between",
        "align-items-center",
      ],
      [1, "social-section"],
      [1, "mb-0", "me-2"],
      [1, "social-icons", "d-flex"],
      ["href", "https://www.facebook.com/mfinancessrl/", 1, "text-white"],
      [1, "fab", "fa-facebook"],
      [
        "href",
        "https://www.linkedin.com/in/mfinances-cabinet-expertise-comptable-l-bruxelles-4b0b9798/",
        1,
        "text-white",
      ],
      [1, "fab", "fa-linkedin"],
      ["href", "https://www.youtube.com/@mfinances4354", 1, "text-white"],
      [1, "fab", "fa-youtube"],
      [1, "contact-section"],
      [1, "address", 2, "margin-right", "16px"],
      [1, "fas", "fa-map-marker-alt"],
      [1, "email"],
      [1, "fas", "fa-envelope"],
      ["href", "mailto:info@mfinances.be"],
    ],
    template: function (i, s) {
      i & 1 &&
        (l(0, "app-promo-banner"),
        t(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "p", 3),
        n(5, "Suivez-nous sur:"),
        e(),
        t(6, "div", 4)(7, "a", 5),
        l(8, "i", 6),
        e(),
        t(9, "a", 7),
        l(10, "i", 8),
        e(),
        t(11, "a", 9),
        l(12, "i", 10),
        e()()(),
        t(13, "div", 11)(14, "span", 12),
        l(15, "i", 13),
        n(16, " 20 Rue de la Magnanerie, 1180 Uccle "),
        e(),
        t(17, "span", 14),
        l(18, "i", 15),
        t(19, "a", 16),
        n(20, "info@mfinances.be"),
        e()()()()());
    },
    dependencies: [Vt],
    styles: [
      ".top-bar[_ngcontent-%COMP%]{background-color:#25335b;color:#fff;padding:15px 0;width:100%}.top-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;margin:0 15px;transition:color .3s ease}.top-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f34947}i[_ngcontent-%COMP%]{color:#f34947;margin-right:5px}.top-bar[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}.top-bar[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{font-size:14px}.social-section[_ngcontent-%COMP%], .contact-section[_ngcontent-%COMP%]{display:flex;align-items:center}@media (max-width: 992px){.top-bar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column;gap:10px}.top-bar[_ngcontent-%COMP%]{padding:10px 0}.contact-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px}}@media (max-width: 768px){.top-bar[_ngcontent-%COMP%]{text-align:center;padding:8px 0}.social-section[_ngcontent-%COMP%], .contact-section[_ngcontent-%COMP%]{flex-direction:column;gap:5px}.top-bar[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]{margin-top:5px}.contact-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin:5px 0}.top-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 8px}.top-bar[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}}@media (max-width: 480px){.top-bar[_ngcontent-%COMP%]{display:none}}",
    ],
  });
};
var Gt = class a {
  isSidebarActive = !1;
  activeSubmenus = {};
  ngOnInit() {
    this.initializeMobileMenu();
  }
  initializeMobileMenu() {
    let o = document.querySelector(".mobile-nav-icon"),
      i = document.querySelector(".menu-close"),
      s = document.querySelector(".mobile-sidebar"),
      r = document.querySelector(".overlay"),
      c = () => {
        s.classList.toggle("mobile-menu-active"), r.classList.toggle("active");
      };
    o?.addEventListener("click", c),
      i?.addEventListener("click", c),
      r?.addEventListener("click", c),
      document
        .querySelectorAll(".mobile-nav-list .has-submenu")
        .forEach((u) => {
          u.addEventListener("click", (m) => {
            m.preventDefault();
            let p = u.nextElementSibling;
            p && p.classList.contains("sub-menu") && p.classList.toggle("open");
          });
        });
  }
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
  toggleSubmenu(o) {
    for (let i in this.activeSubmenus) i !== o && (this.activeSubmenus[i] = !1);
    this.activeSubmenus[o] = !this.activeSubmenus[o];
  }
  static ɵfac = function (i) {
    return new (i || a)();
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-nav-bar"]],
    decls: 179,
    vars: 0,
    consts: [
      [1, "sticky-header"],
      [1, "header-area-home1", "header-area-home3", "d-none", "d-lg-block"],
      [1, "container"],
      [1, "header-elements"],
      [1, "site-logo"],
      ["href", "/accueil"],
      ["src", "../../assets/img/logo/logoMfinances.png", "alt", "Logo"],
      [1, "main-menu-ex"],
      ["href", "/about"],
      ["href", "/services"],
      [1, "fa-solid", "fa-angle-down"],
      ["href", "/services/creation-entreprise"],
      ["href", "/services/comptabilite"],
      ["href", "/services/fiscalite"],
      ["href", "/services/declaration-impot"],
      ["href", "/tarif"],
      ["href", "#"],
      ["href", "/vente/salarie-independant"],
      ["href", "/vente/passage-en-societe"],
      ["href", "/vente/compte-courant"],
      ["href", "/tresorerie/proteger-sa-tresorerie"],
      [1, "fa-solid", "fa-angle-right"],
      ["href", "/tresorerie/tresorerie-benefice"],
      ["href", "/tresorerie/investir-tresorerie"],
      ["href", "/tresorerie/optimiser-stock"],
      ["href", "/tresorerie/alerte-tresorerie"],
      ["href", "/tresorerie/anticiper-sa-tresorerie"],
      ["href", "/tresorerie/accompagnement"],
      ["href", "https://get.anydesk.com/dzQb9eHl/AnyDesk_Custom_Client.exe"],
      ["href", "https://get.anydesk.com/U2eK2Jqz/AnyDesk_Custom_Client.dmg"],
      [1, "header-btn"],
      ["href", "/contact", 1, "btn-red"],
      [1, "fa-solid", "fa-arrow-right"],
      [1, "mobile-header", "d-block", "d-lg-none"],
      [1, "mobile-header-elements"],
      [1, "mobile-logo"],
      ["src", "assets/img/logo/logoMfinances.png", "alt", "Logo"],
      [1, "mobile-nav-icon"],
      [1, "fas", "fa-bars"],
      [1, "mobile-sidebar"],
      [1, "menu-close"],
      [1, "fas", "fa-times"],
      [1, "mobile-nav"],
      [1, "mobile-nav-list"],
      ["href", "#", 1, "has-submenu"],
      [1, "sub-menu"],
      [1, "fas", "fa-arrow-right"],
      [1, "overlay"],
    ],
    template: function (i, s) {
      i & 1 &&
        (l(0, "app-top-bar"),
        t(1, "header", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(
          6,
          "a",
          5
        ),
        l(7, "img", 6),
        e()(),
        t(8, "div", 7)(9, "ul")(10, "li")(11, "a", 8),
        n(12, "\xC0 propos"),
        e()(),
        t(13, "li")(14, "a", 9),
        n(15, "Services "),
        l(16, "i", 10),
        e(),
        t(17, "ul")(18, "li")(19, "a", 11),
        n(20, "Cr\xE9ation d'entreprise"),
        e()(),
        t(21, "li")(22, "a", 12),
        n(23, "Comptabilit\xE9"),
        e()(),
        t(24, "li")(25, "a", 13),
        n(26, "Fiscalit\xE9"),
        e()(),
        t(27, "li")(28, "a", 14),
        n(29, "D\xE9claration d'impot"),
        e()()()(),
        t(30, "li")(31, "a", 15),
        n(32, "Nos Tarifs"),
        e()(),
        t(33, "li")(34, "a", 16),
        n(35, "Boostez votre entreprise "),
        l(36, "i", 10),
        e(),
        t(37, "ul")(38, "li")(39, "a", 17),
        n(40, "Salari\xE9 et ind\xE9pendants"),
        e()(),
        t(41, "li")(42, "a", 18),
        n(43, "Passage en societe"),
        e()(),
        t(44, "li")(45, "a", 19),
        n(46, "Compte Courant administrateur"),
        e()(),
        t(47, "li")(48, "a", 20),
        n(49, " Tr\xE9sorerie Transformez le Stress en Succ\xE8s "),
        l(50, "i", 21),
        e(),
        t(51, "ul")(52, "li")(53, "a", 22),
        n(54, "Tr\xE9sorerie vs B\xE9n\xE9fices"),
        e()(),
        t(55, "li")(56, "a", 23),
        n(57, "Investir sans risquer"),
        e()(),
        t(58, "li")(59, "a", 24),
        n(60, "Optimisez vos Stocks"),
        e()(),
        t(61, "li")(62, "a", 25),
        n(63, "Alerte tr\xE9sorerie"),
        e()(),
        t(64, "li")(65, "a", 20),
        n(66, "Prot\xE9gez Votre Tr\xE9sorerie"),
        e()(),
        t(67, "li")(68, "a", 26),
        n(69, "Anticipez vos Finances"),
        e()(),
        t(70, "li")(71, "a", 27),
        n(72, "Service d'accompagnement"),
        e()()()()()(),
        t(73, "li")(74, "a", 16),
        n(75, "Support "),
        l(76, "i", 10),
        e(),
        t(77, "ul")(78, "li")(79, "a", 28),
        n(80, "Support pour Windows"),
        e()(),
        t(81, "li")(82, "a", 29),
        n(83, "Support pour Mac"),
        e()()()()()(),
        t(84, "div", 30)(85, "a", 31),
        n(86, "Nos contacts "),
        l(87, "i", 32),
        e()()()()(),
        t(88, "div", 33)(89, "div", 34)(90, "div", 35)(91, "a", 5),
        l(92, "img", 36),
        e()(),
        t(93, "div", 37),
        l(94, "i", 38),
        e()()(),
        t(95, "div", 39)(96, "div", 40),
        l(97, "i", 41),
        e(),
        t(98, "div", 42)(99, "ul", 43)(100, "li")(101, "a", 8),
        n(102, "\xC0 propos"),
        e()(),
        t(103, "li")(104, "a", 44),
        n(105, "Services "),
        l(106, "i", 10),
        e(),
        t(107, "ul", 45)(108, "li")(109, "a", 11),
        n(110, "Cr\xE9ation d'entreprise"),
        e()(),
        t(111, "li")(112, "a", 12),
        n(113, "Comptabilit\xE9"),
        e()(),
        t(114, "li")(115, "a", 13),
        n(116, "Fiscalit\xE9 des entreprises"),
        e()(),
        t(117, "li")(118, "a", 14),
        n(119, "D\xE9claration d'impot"),
        e()()()(),
        t(120, "li")(121, "a", 15),
        n(122, "Nos Tarifs"),
        e()(),
        t(123, "li")(124, "a", 44),
        n(125, "Boostez votre entreprise "),
        l(126, "i", 10),
        e(),
        t(127, "ul", 45)(128, "li")(129, "a", 17),
        n(130, "Salari\xE9 et ind\xE9pendants"),
        e()(),
        t(131, "li")(132, "a", 18),
        n(133, "Passage en societe"),
        e()(),
        t(134, "li")(135, "a", 19),
        n(136, "Compte Courant administrateur"),
        e()(),
        t(137, "li")(138, "a", 44),
        n(139, "Tr\xE9sorerie Transformez le Stress en Succ\xE8s "),
        l(140, "i", 10),
        e(),
        t(141, "ul", 45)(142, "li")(143, "a", 22),
        n(144, "Tr\xE9sorerie vs B\xE9n\xE9fices"),
        e()(),
        t(145, "li")(146, "a", 23),
        n(147, "Investir sans risquer"),
        e()(),
        t(148, "li")(149, "a", 24),
        n(150, "Optimisez vos Stocks"),
        e()(),
        t(151, "li")(152, "a", 25),
        n(153, "Alerte tr\xE9sorerie"),
        e()(),
        t(154, "li")(155, "a", 20),
        n(156, "Prot\xE9gez Votre Tr\xE9sorerie"),
        e()(),
        t(157, "li")(158, "a", 26),
        n(159, "Anticipez vos Finances"),
        e()(),
        t(160, "li")(161, "a", 27),
        n(162, "Service d'accompagnement"),
        e()()()()()(),
        t(163, "li")(164, "a", 44),
        n(165, "Support "),
        l(166, "i", 10),
        e(),
        t(167, "ul", 45)(168, "li")(169, "a", 28),
        n(170, "Support pour Windows"),
        e()(),
        t(171, "li")(172, "a", 29),
        n(173, "Support pour Mac"),
        e()()()()(),
        t(174, "div", 30)(175, "a", 31),
        n(176, "Nos contacts "),
        l(177, "i", 46),
        e()()()(),
        l(178, "div", 47),
        e());
    },
    dependencies: [Ut],
    styles: [
      '.sticky-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1000;background:#fff}.header-area-home1[_ngcontent-%COMP%]{background:#fff;box-shadow:0 2px 10px #0000001a}.header-elements[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:1rem;display:flex;justify-content:space-between;align-items:center}.site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;gap:2rem;list-style:none}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;text-decoration:none;font-weight:500;padding:.5rem 0;display:flex;align-items:center;gap:.5rem}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]{color:#ff4d4d}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[href="/tresorerie/proteger-sa-tresorerie"][_ngcontent-%COMP%]{color:#ff4d4d}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]{color:#fff}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[href="/tresorerie/proteger-sa-tresorerie"][_ngcontent-%COMP%], .main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[href="/tresorerie/proteger-sa-tresorerie"][_ngcontent-%COMP%]{color:#333}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;background:#fff;min-width:200px;display:none;flex-direction:column;gap:0;box-shadow:0 2px 10px #0000001a;border-radius:4px}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > ul[_ngcontent-%COMP%]{display:flex}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.8rem 1rem;width:100%}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{left:100%;top:0}.btn-red[_ngcontent-%COMP%]{background-color:#ff4d4d;color:#fff;padding:.8rem 1.5rem;border-radius:25px;text-decoration:none;font-weight:500;display:inline-flex;align-items:center;gap:.5rem;transition:background-color .3s}.btn-red[_ngcontent-%COMP%]:hover{background-color:#f33}.mobile-header[_ngcontent-%COMP%]{display:none;padding:1rem;background:#fff;box-shadow:0 2px 10px #0000001a}.mobile-header-elements[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.mobile-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:auto}.mobile-sidebar[_ngcontent-%COMP%]{position:fixed;top:0;right:-100%;width:300px;height:100vh;background:#fff;z-index:1001;padding:1.5rem;transition:all .3s ease;overflow-y:auto;box-shadow:-2px 0 10px #0000001a}.mobile-nav-icon[_ngcontent-%COMP%]{cursor:pointer;padding:8px}.mobile-nav-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px;color:#333}.mobile-sidebar.mobile-menu-active[_ngcontent-%COMP%]{right:0;transition:all .3s ease}.mobile-nav-list[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{display:block;max-height:0;overflow:hidden;transition:max-height .3s ease-out;padding-left:1rem;margin:0}.mobile-nav-list[_ngcontent-%COMP%]   .sub-menu.open[_ngcontent-%COMP%]{max-height:1000px;transition:max-height .5s ease-in}.mobile-nav-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.mobile-nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.mobile-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;text-decoration:none;font-weight:500;padding:.8rem 0;display:flex;justify-content:space-between;align-items:center}.mobile-nav-list[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{display:none;padding-left:1rem;margin:.5rem 0}.mobile-nav-list[_ngcontent-%COMP%]   .sub-menu.open[_ngcontent-%COMP%]{display:block}.mobile-nav-list[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.5rem 0;font-size:.95em}.menu-close[_ngcontent-%COMP%]{text-align:right;margin-bottom:1.5rem;cursor:pointer}.menu-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem;color:#333}.mobile-nav[_ngcontent-%COMP%]   .header-btn[_ngcontent-%COMP%]{margin-top:2rem;text-align:center}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;opacity:0;visibility:hidden;transition:all .3s;z-index:1000}.overlay.active[_ngcontent-%COMP%]{opacity:1;visibility:visible}@media (max-width: 1024px){.header-elements[_ngcontent-%COMP%]{padding:1rem 2rem}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{gap:1.5rem}}@media (max-width: 768px){.header-area-home1[_ngcontent-%COMP%]{display:none!important}.mobile-header[_ngcontent-%COMP%]{padding:.8rem 1.5rem}.mobile-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}.mobile-nav-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem;cursor:pointer}.btn-red[_ngcontent-%COMP%]{padding:.7rem 1.2rem;font-size:.95em}}@media (max-width: 480px){.mobile-sidebar[_ngcontent-%COMP%]{width:100%;right:-100%}.mobile-header[_ngcontent-%COMP%]{padding:.8rem 1rem}}.mobile-nav-list[_ngcontent-%COMP%]   a[href="/tresorerie/accompagnement"][_ngcontent-%COMP%], .main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[href="/tresorerie/accompagnement"][_ngcontent-%COMP%]{background-color:#25335b;color:#fff!important;padding:.8rem 1rem;border-radius:4px;transition:all .3s ease}.main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[href="/tresorerie/accompagnement"][_ngcontent-%COMP%], .mobile-nav-list[_ngcontent-%COMP%]   a[href="/tresorerie/accompagnement"][_ngcontent-%COMP%]:hover, .main-menu-ex[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[href="/tresorerie/accompagnement"][_ngcontent-%COMP%]:hover{background-color:#ff4d4d;color:#fff!important;text-decoration:none}.mobile-nav-list[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[href="/tresorerie/accompagnement"][_ngcontent-%COMP%]{margin:.5rem 0;width:calc(100% - 1rem)}',
    ],
  });
};
var $t = class a {
  static ɵfac = function (i) {
    return new (i || a)();
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-footer"]],
    decls: 77,
    vars: 0,
    consts: [
      [1, "footer-container"],
      [1, "footer-content"],
      [1, "contact-section"],
      [1, "fas", "fa-map-marker-alt"],
      [1, "tap-info"],
      [1, "fas", "fa-phone"],
      ["href", "tel:+3228838686", 2, "text-decoration", "none"],
      [1, "fas", "fa-envelope"],
      ["href", "mailto:info@mfinances.be", 2, "text-decoration", "none"],
      [1, "social-links"],
      [
        "href",
        "https://www.facebook.com/mfinancessrl/",
        "aria-label",
        "Facebook",
      ],
      [1, "fab", "fa-facebook-f"],
      [
        "href",
        "https://www.linkedin.com/in/mfinances-cabinet-expertise-comptable-l-bruxelles-4b0b9798/",
        "aria-label",
        "LinkedIn",
      ],
      [1, "fab", "fa-linkedin-in"],
      [
        "href",
        "https://www.youtube.com/@mfinances4354",
        "aria-label",
        "YouTube",
      ],
      [1, "fab", "fa-youtube"],
      [
        "href",
        "https://www.tiktok.com/@mfinances8?lang=fr",
        "aria-label",
        "TikTok",
      ],
      [1, "fab", "fa-tiktok"],
      ["href", "https://twitter.com/InfoMfinances", "aria-label", "Twitter"],
      [1, "fab", "fa-twitter"],
      [
        "href",
        "https://www.instagram.com/mfinances_expertcomptable/",
        "aria-label",
        "Instagram",
      ],
      [1, "fab", "fa-instagram"],
      [2, "width", "150px"],
      [1, "section-title"],
      [1, "footer-links"],
      ["href", "/about"],
      ["href", "/services"],
      ["href", "/tarif"],
      [2, "width", "250px"],
      ["href", "/salarie-independant"],
      ["href", "https://get.anydesk.com/dzQb9eHl/AnyDesk_Custom_Client.exe"],
      ["href", "https://get.anydesk.com/U2eK2Jqz/AnyDesk_Custom_Client.dmg"],
      ["href", "/contact"],
      ["type", "email", "placeholder", "Adresse e-mail", 1, "newsletter-input"],
      [1, "subscribe-button"],
      [1, "bottom-bar"],
      [1, "bottom-bar-content"],
      ["href", "#"],
      [2, "margin", "0 0.8rem", "color", "white"],
    ],
    template: function (i, s) {
      i & 1 &&
        (t(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p"),
        l(4, "i", 3),
        n(5, " 20 Rue de la Magnanerie"),
        e(),
        t(6, "p"),
        n(7, "\xE0 1180 Uccle"),
        e(),
        t(8, "p", 4),
        l(9, "i", 5),
        t(10, "a", 6),
        n(11, "+32 2 886 05 50"),
        e()(),
        t(12, "p", 4),
        l(13, "i", 7),
        t(14, "a", 8),
        n(15, "info@mfinances.be"),
        e()(),
        t(16, "div", 9)(17, "a", 10),
        l(18, "i", 11),
        e(),
        t(19, "a", 12),
        l(20, "i", 13),
        e(),
        t(21, "a", 14),
        l(22, "i", 15),
        e(),
        t(23, "a", 16),
        l(24, "i", 17),
        e(),
        t(25, "a", 18),
        l(26, "i", 19),
        e(),
        t(27, "a", 20),
        l(28, "i", 21),
        e()()(),
        t(29, "div", 22)(30, "h3", 23),
        n(31, "\xC0 PROPOS"),
        e(),
        t(32, "ul", 24)(33, "li")(34, "a", 25),
        n(35, "\xC0 propos"),
        e()(),
        t(36, "li")(37, "a", 26),
        n(38, "Nos services"),
        e()(),
        t(39, "li")(40, "a", 27),
        n(41, "Nos tarifs"),
        e()()()(),
        t(42, "div", 28)(43, "h3", 23),
        n(44, "LIENS UTILES"),
        e(),
        t(45, "ul", 24)(46, "li")(47, "a", 29),
        n(48, "Boostez votre entreprise"),
        e()(),
        t(49, "li")(50, "a", 30),
        n(51, "Support pour Windows"),
        e()(),
        t(52, "li")(53, "a", 31),
        n(54, "Support pour Mac"),
        e()(),
        t(55, "li")(56, "a", 32),
        n(57, "Contactez-nous"),
        e()()()(),
        t(58, "div")(59, "h3", 23),
        n(60, "NEWSLETTER"),
        e(),
        t(61, "p"),
        n(62, "Abonnez-vous pour ne rien manquer de notre newsletter."),
        e(),
        l(63, "input", 33),
        t(64, "button", 34),
        n(65, "S'abonner"),
        e()()(),
        t(66, "div", 35)(67, "div", 36)(68, "p"),
        n(69, "Copyright \xA9 2025 Mfinances S.R.L."),
        e(),
        t(70, "div")(71, "a", 37),
        n(72, "Conditions g\xE9n\xE9rales"),
        e(),
        t(73, "span", 38),
        n(74, "\u2022"),
        e(),
        t(75, "a", 37),
        n(76, "Mentions l\xE9gales"),
        e()()()()());
    },
    styles: [
      '.footer-container[_ngcontent-%COMP%]{background-color:#fff;color:#333;padding:4rem 0 0}.footer-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;max-width:1200px;margin:0 auto;gap:3rem}.contact-section[_ngcontent-%COMP%]{background-color:#25335b;color:#fff;padding:2.5rem;border-radius:12px;box-shadow:0 8px 24px #0a174426;transition:transform .3s ease}.contact-section[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.contact-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.7rem 0;font-size:.95rem;display:flex;align-items:center;gap:.5rem}.section-title[_ngcontent-%COMP%]{color:#333;font-size:1.1rem;font-weight:600;margin-bottom:1.8rem;position:relative;padding-left:1rem;letter-spacing:.5px}.section-title[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);width:4px;height:80%;background-color:#ff3c3c;border-radius:4px}.footer-links[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:1rem}.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#555;text-decoration:none;transition:all .3s ease;font-size:.95rem;position:relative;padding-left:0}.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"\\2192";opacity:0;margin-right:.5rem;transform:translate(-10px);display:inline-block;transition:all .3s ease}.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#0a1744;padding-left:.5rem}.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{opacity:1;transform:translate(0)}.newsletter-input[_ngcontent-%COMP%]{padding:.8rem 1rem;border:2px solid #eee;border-radius:6px;width:100%;max-width:300px;margin-bottom:1rem;transition:border-color .3s ease;font-size:.95rem}.newsletter-input[_ngcontent-%COMP%]:focus{outline:none;border-color:#0a1744}.subscribe-button[_ngcontent-%COMP%]{background-color:#ff3c3c;color:#fff;border:none;padding:.8rem 1.8rem;border-radius:6px;cursor:pointer;transition:all .3s ease;font-weight:500;font-size:.95rem}.subscribe-button[_ngcontent-%COMP%]:hover{background-color:#0a1744;transform:translateY(-2px);box-shadow:0 4px 12px #0a174426}.social-links[_ngcontent-%COMP%]{margin-top:1.5rem;display:flex;gap:1rem}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;background-color:#ffffff1a;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:all .3s ease}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ff3c3c;transform:translateY(-3px)}.bottom-bar[_ngcontent-%COMP%]{margin-top:3rem;background-color:#25335b;color:#fff;padding:1.5rem 0;width:100%}.bottom-bar-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;padding:0 2rem}.bottom-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.bottom-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;transition:color .3s ease}.tap-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.tap-info[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover, .tap-info[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#ff3c3c;cursor:pointer}.bottom-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff3c3c}@media (max-width: 768px){.bottom-bar-content[_ngcontent-%COMP%]{flex-direction:column;gap:1rem;text-align:center}}@media (max-width: 992px){.footer-content[_ngcontent-%COMP%]{flex-wrap:wrap;gap:2rem}.contact-section[_ngcontent-%COMP%]{width:100%}}@media (max-width: 768px){.footer-container[_ngcontent-%COMP%]{padding:3rem 1rem}.bottom-bar[_ngcontent-%COMP%]{flex-direction:column;gap:1rem;text-align:center}}',
    ],
  });
};
function Es(a, o) {
  a & 1 &&
    (Mn(0), l(1, "app-nav-bar")(2, "router-outlet")(3, "app-footer"), wn());
}
var Wt = class a {
  constructor(o, i) {
    this.router = o;
    this.metaService = i;
  }
  title = "MFinances";
  isLoaded$;
  ngOnInit() {
    eo.init({ duration: 1200, once: !0 }),
      (this.isLoaded$ = Xe(!0).pipe(gn(100))),
      this.router.events.pipe(Ie((o) => o instanceof qi)).subscribe((o) => {
        this.updateMetaTagsForRoute(o.url);
      });
  }
  updateMetaTagsForRoute(o) {
    switch (o.split("?")[0].replace(/^\//, "")) {
      case "":
      case "accueil":
        this.metaService.setHomePageMeta();
        break;
      case "about":
        this.metaService.setAboutPageMeta();
        break;
      case "contact":
        this.metaService.setContactPageMeta();
        break;
      case "tarif":
        this.metaService.setTarifPageMeta();
        break;
      case "profil-independant":
        this.metaService.setIndependantPageMeta();
        break;
      case "absl":
        this.metaService.setAbslPageMeta();
        break;
      case "societe-management-patrimoniale":
        this.metaService.setSocieteManagementPatrimonialePageMeta();
        break;
      case "societe-moyen":
        this.metaService.setSocieteMoyenPageMeta();
        break;
      case "societe-exploitation":
        this.metaService.setSocieteExploitationPageMeta();
        break;
      case "commercant-horeca":
        this.metaService.setCommercantHorecaPageMeta();
        break;
      case "professionel-sante":
        this.metaService.setProfessionnelSantePageMeta();
        break;
      case "grande-entreprise":
        this.metaService.setGrandeEntreprisePageMeta();
        break;
      case "promoteur-immobilier":
        this.metaService.setPromoteurImmobilierPageMeta();
        break;
      case "services":
        this.metaService.setServicesPageMeta();
        break;
      case "services/comptabilite":
        this.metaService.setComptabilitePageMeta();
        break;
      case "services/fiscalite":
        this.metaService.setFiscalitePageMeta();
        break;
      case "services/creation-entreprise":
        this.metaService.setCreationEntreprisePageMeta();
        break;
      case "services/declaration-impot":
        this.metaService.setDeclarationImpotPageMeta();
        break;
      case "vente":
        this.metaService.setVentePageMeta();
        break;
      case "vente/passage-en-societe":
        this.metaService.setPassageEnSocietePageMeta();
        break;
      case "vente/compte-courant":
        this.metaService.setCompteCourantPageMeta();
        break;
      case "vente/salarie-independant":
        this.metaService.setSalarieIndependantPageMeta();
        break;
      case "tresorerie":
        this.metaService.setTresoreriePageMeta();
        break;
      case "tresorerie/tresorerie-benefice":
        this.metaService.setTresorerieBeneficePageMeta();
        break;
      case "tresorerie/investir-tresorerie":
        this.metaService.setInvestirTresoreriePageMeta();
        break;
      case "tresorerie/optimiser-stock":
        this.metaService.setOptimiserStockPageMeta();
        break;
      case "tresorerie/alerte-tresorerie":
        this.metaService.setAlerteTresoreriePageMeta();
        break;
      case "tresorerie/proteger-sa-tresorerie":
        this.metaService.setProtegerTresoreriePageMeta();
        break;
      case "tresorerie/anticiper-sa-tresorerie":
        this.metaService.setAnticiperTresoreriePageMeta();
        break;
      case "tresorerie/accompagnement":
        this.metaService.setAccompagnementTresoreriePageMeta();
        break;
      default:
        this.metaService.updateMetaTags(
          "MFinances - Cabinet d'expertise comptable \xE0 Bruxelles",
          "MFinances est un cabinet d'expertise comptable \xE0 Bruxelles offrant des services de comptabilit\xE9, fiscalit\xE9 et conseil aux entreprises et ind\xE9pendants.",
          "expertise comptable, comptabilit\xE9, fiscalit\xE9, audit, gestion d'entreprise, Bruxelles"
        );
        break;
    }
  }
  static ɵfac = function (i) {
    return new (i || a)(I(St), I(H));
  };
  static ɵcmp = w({
    type: a,
    selectors: [["app-root"]],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"]],
    template: function (i, s) {
      i & 1 && (pe(0, Es, 4, 0, "ng-container", 0), Pn(1, "async")),
        i & 2 && le("ngIf", Tn(1, 1, s.isLoaded$));
    },
    dependencies: [We, Hi, Gt, $t, Fi],
  });
};
function to(a) {
  return new A(3e3, !1);
}
function xs() {
  return new A(3100, !1);
}
function ys() {
  return new A(3101, !1);
}
function Ss(a) {
  return new A(3001, !1);
}
function Cs(a) {
  return new A(3003, !1);
}
function Ms(a) {
  return new A(3004, !1);
}
function ws(a, o) {
  return new A(3005, !1);
}
function Os() {
  return new A(3006, !1);
}
function Ps() {
  return new A(3007, !1);
}
function Ts(a, o) {
  return new A(3008, !1);
}
function Ds(a) {
  return new A(3002, !1);
}
function ks(a, o, i, s, r) {
  return new A(3010, !1);
}
function Ns() {
  return new A(3011, !1);
}
function As() {
  return new A(3012, !1);
}
function Is() {
  return new A(3200, !1);
}
function Fs() {
  return new A(3202, !1);
}
function Rs() {
  return new A(3013, !1);
}
function Bs(a) {
  return new A(3014, !1);
}
function zs(a) {
  return new A(3015, !1);
}
function Ls(a) {
  return new A(3016, !1);
}
function js(a, o) {
  return new A(3404, !1);
}
function qs(a) {
  return new A(3502, !1);
}
function Hs(a) {
  return new A(3503, !1);
}
function Vs() {
  return new A(3300, !1);
}
function Us(a) {
  return new A(3504, !1);
}
function Gs(a) {
  return new A(3301, !1);
}
function $s(a, o) {
  return new A(3302, !1);
}
function Ws(a) {
  return new A(3303, !1);
}
function Qs(a, o) {
  return new A(3400, !1);
}
function Ks(a) {
  return new A(3401, !1);
}
function Ys(a) {
  return new A(3402, !1);
}
function Js(a, o) {
  return new A(3505, !1);
}
function Ne(a) {
  switch (a.length) {
    case 0:
      return new Qe();
    case 1:
      return a[0];
    default:
      return new Nn(a);
  }
}
function ho(a, o, i = new Map(), s = new Map()) {
  let r = [],
    c = [],
    d = -1,
    u = null;
  if (
    (o.forEach((m) => {
      let p = m.get("offset"),
        f = p == d,
        g = (f && u) || new Map();
      m.forEach((h, x) => {
        let v = x,
          C = h;
        if (x !== "offset")
          switch (((v = a.normalizePropertyName(v, r)), C)) {
            case Ct:
              C = i.get(x);
              break;
            case we:
              C = s.get(x);
              break;
            default:
              C = a.normalizeStyleValue(x, v, C, r);
              break;
          }
        g.set(v, C);
      }),
        f || c.push(g),
        (u = g),
        (d = p);
    }),
    r.length)
  )
    throw qs(r);
  return c;
}
function ai(a, o, i, s) {
  switch (o) {
    case "start":
      a.onStart(() => s(i && Ln(i, "start", a)));
      break;
    case "done":
      a.onDone(() => s(i && Ln(i, "done", a)));
      break;
    case "destroy":
      a.onDestroy(() => s(i && Ln(i, "destroy", a)));
      break;
  }
}
function Ln(a, o, i) {
  let s = i.totalTime,
    r = !!i.disabled,
    c = li(
      a.element,
      a.triggerName,
      a.fromState,
      a.toState,
      o || a.phaseName,
      s ?? a.totalTime,
      r
    ),
    d = a._data;
  return d != null && (c._data = d), c;
}
function li(a, o, i, s, r = "", c = 0, d) {
  return {
    element: a,
    triggerName: o,
    fromState: i,
    toState: s,
    phaseName: r,
    totalTime: c,
    disabled: !!d,
  };
}
function _e(a, o, i) {
  let s = a.get(o);
  return s || a.set(o, (s = i)), s;
}
function no(a) {
  let o = a.indexOf(":"),
    i = a.substring(1, o),
    s = a.slice(o + 1);
  return [i, s];
}
var Zs = typeof document > "u" ? null : document.documentElement;
function ci(a) {
  let o = a.parentNode || a.host || null;
  return o === Zs ? null : o;
}
function Xs(a) {
  return a.substring(1, 6) == "ebkit";
}
var ze = null,
  io = !1;
function er(a) {
  ze ||
    ((ze = tr() || {}), (io = ze.style ? "WebkitAppearance" in ze.style : !1));
  let o = !0;
  return (
    ze.style &&
      !Xs(a) &&
      ((o = a in ze.style),
      !o &&
        io &&
        (o = "Webkit" + a.charAt(0).toUpperCase() + a.slice(1) in ze.style)),
    o
  );
}
function tr() {
  return typeof document < "u" ? document.body : null;
}
function _o(a, o) {
  for (; o; ) {
    if (o === a) return !0;
    o = ci(o);
  }
  return !1;
}
function bo(a, o, i) {
  if (i) return Array.from(a.querySelectorAll(o));
  let s = a.querySelector(o);
  return s ? [s] : [];
}
var di = (() => {
    class a {
      validateStyleProperty(i) {
        return er(i);
      }
      containsElement(i, s) {
        return _o(i, s);
      }
      getParentElement(i) {
        return ci(i);
      }
      query(i, s, r) {
        return bo(i, s, r);
      }
      computeStyle(i, s, r) {
        return r || "";
      }
      animate(i, s, r, c, d, u = [], m) {
        return new Qe(r, c);
      }
      static {
        this.ɵfac = function (s) {
          return new (s || a)();
        };
      }
      static {
        this.ɵprov = Me({ token: a, factory: a.ɵfac });
      }
    }
    return a;
  })(),
  qe = class {
    static {
      this.NOOP = new di();
    }
  },
  He = class {};
var nr = 1e3,
  vo = "{{",
  ir = "}}",
  Eo = "ng-enter",
  Gn = "ng-leave",
  Qt = "ng-trigger",
  Xt = ".ng-trigger",
  oo = "ng-animating",
  $n = ".ng-animating";
function De(a) {
  if (typeof a == "number") return a;
  let o = a.match(/^(-?[\.\d]+)(m?s)/);
  return !o || o.length < 2 ? 0 : Wn(parseFloat(o[1]), o[2]);
}
function Wn(a, o) {
  switch (o) {
    case "s":
      return a * nr;
    default:
      return a;
  }
}
function en(a, o, i) {
  return a.hasOwnProperty("duration") ? a : or(a, o, i);
}
function or(a, o, i) {
  let s =
      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    r,
    c = 0,
    d = "";
  if (typeof a == "string") {
    let u = a.match(s);
    if (u === null) return o.push(to(a)), { duration: 0, delay: 0, easing: "" };
    r = Wn(parseFloat(u[1]), u[2]);
    let m = u[3];
    m != null && (c = Wn(parseFloat(m), u[4]));
    let p = u[5];
    p && (d = p);
  } else r = a;
  if (!i) {
    let u = !1,
      m = o.length;
    r < 0 && (o.push(xs()), (u = !0)),
      c < 0 && (o.push(ys()), (u = !0)),
      u && o.splice(m, 0, to(a));
  }
  return { duration: r, delay: c, easing: d };
}
function sr(a) {
  return a.length
    ? a[0] instanceof Map
      ? a
      : a.map((o) => new Map(Object.entries(o)))
    : [];
}
function Oe(a, o, i) {
  o.forEach((s, r) => {
    let c = ui(r);
    i && !i.has(r) && i.set(r, a.style[c]), (a.style[c] = s);
  });
}
function je(a, o) {
  o.forEach((i, s) => {
    let r = ui(s);
    a.style[r] = "";
  });
}
function dt(a) {
  return Array.isArray(a) ? (a.length == 1 ? a[0] : Ui(a)) : a;
}
function rr(a, o, i) {
  let s = o.params || {},
    r = xo(a);
  r.length &&
    r.forEach((c) => {
      s.hasOwnProperty(c) || i.push(Ss(c));
    });
}
var Qn = new RegExp(`${vo}\\s*(.+?)\\s*${ir}`, "g");
function xo(a) {
  let o = [];
  if (typeof a == "string") {
    let i;
    for (; (i = Qn.exec(a)); ) o.push(i[1]);
    Qn.lastIndex = 0;
  }
  return o;
}
function mt(a, o, i) {
  let s = `${a}`,
    r = s.replace(Qn, (c, d) => {
      let u = o[d];
      return u == null && (i.push(Cs(d)), (u = "")), u.toString();
    });
  return r == s ? a : r;
}
var ar = /-+([a-z0-9])/g;
function ui(a) {
  return a.replace(ar, (...o) => o[1].toUpperCase());
}
function lr(a, o) {
  return a === 0 || o === 0;
}
function cr(a, o, i) {
  if (i.size && o.length) {
    let s = o[0],
      r = [];
    if (
      (i.forEach((c, d) => {
        s.has(d) || r.push(d), s.set(d, c);
      }),
      r.length)
    )
      for (let c = 1; c < o.length; c++) {
        let d = o[c];
        r.forEach((u) => d.set(u, mi(a, u)));
      }
  }
  return o;
}
function he(a, o, i) {
  switch (o.type) {
    case T.Trigger:
      return a.visitTrigger(o, i);
    case T.State:
      return a.visitState(o, i);
    case T.Transition:
      return a.visitTransition(o, i);
    case T.Sequence:
      return a.visitSequence(o, i);
    case T.Group:
      return a.visitGroup(o, i);
    case T.Animate:
      return a.visitAnimate(o, i);
    case T.Keyframes:
      return a.visitKeyframes(o, i);
    case T.Style:
      return a.visitStyle(o, i);
    case T.Reference:
      return a.visitReference(o, i);
    case T.AnimateChild:
      return a.visitAnimateChild(o, i);
    case T.AnimateRef:
      return a.visitAnimateRef(o, i);
    case T.Query:
      return a.visitQuery(o, i);
    case T.Stagger:
      return a.visitStagger(o, i);
    default:
      throw Ms(o.type);
  }
}
function mi(a, o) {
  return window.getComputedStyle(a)[o];
}
var dr = new Set([
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "left",
    "top",
    "bottom",
    "right",
    "fontSize",
    "outlineWidth",
    "outlineOffset",
    "paddingTop",
    "paddingLeft",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginLeft",
    "marginBottom",
    "marginRight",
    "borderRadius",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "textIndent",
    "perspective",
  ]),
  tn = class extends He {
    normalizePropertyName(o, i) {
      return ui(o);
    }
    normalizeStyleValue(o, i, s, r) {
      let c = "",
        d = s.toString().trim();
      if (dr.has(i) && s !== 0 && s !== "0")
        if (typeof s == "number") c = "px";
        else {
          let u = s.match(/^[+-]?[\d\.]+([a-z]*)$/);
          u && u[1].length == 0 && r.push(ws(o, s));
        }
      return d + c;
    }
  };
var nn = "*";
function ur(a, o) {
  let i = [];
  return (
    typeof a == "string"
      ? a.split(/\s*,\s*/).forEach((s) => mr(s, i, o))
      : i.push(a),
    i
  );
}
function mr(a, o, i) {
  if (a[0] == ":") {
    let m = pr(a, i);
    if (typeof m == "function") {
      o.push(m);
      return;
    }
    a = m;
  }
  let s = a.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (s == null || s.length < 4) return i.push(zs(a)), o;
  let r = s[1],
    c = s[2],
    d = s[3];
  o.push(so(r, d));
  let u = r == nn && d == nn;
  c[0] == "<" && !u && o.push(so(d, r));
}
function pr(a, o) {
  switch (a) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (i, s) => parseFloat(s) > parseFloat(i);
    case ":decrement":
      return (i, s) => parseFloat(s) < parseFloat(i);
    default:
      return o.push(Ls(a)), "* => *";
  }
}
var Kt = new Set(["true", "1"]),
  Yt = new Set(["false", "0"]);
function so(a, o) {
  let i = Kt.has(a) || Yt.has(a),
    s = Kt.has(o) || Yt.has(o);
  return (r, c) => {
    let d = a == nn || a == r,
      u = o == nn || o == c;
    return (
      !d && i && typeof r == "boolean" && (d = r ? Kt.has(a) : Yt.has(a)),
      !u && s && typeof c == "boolean" && (u = c ? Kt.has(o) : Yt.has(o)),
      d && u
    );
  };
}
var yo = ":self",
  gr = new RegExp(`s*${yo}s*,?`, "g");
function So(a, o, i, s) {
  return new Kn(a).build(o, i, s);
}
var ro = "",
  Kn = class {
    constructor(o) {
      this._driver = o;
    }
    build(o, i, s) {
      let r = new Yn(i);
      return this._resetContextStyleTimingState(r), he(this, dt(o), r);
    }
    _resetContextStyleTimingState(o) {
      (o.currentQuerySelector = ro),
        (o.collectedStyles = new Map()),
        o.collectedStyles.set(ro, new Map()),
        (o.currentTime = 0);
    }
    visitTrigger(o, i) {
      let s = (i.queryCount = 0),
        r = (i.depCount = 0),
        c = [],
        d = [];
      return (
        o.name.charAt(0) == "@" && i.errors.push(Os()),
        o.definitions.forEach((u) => {
          if ((this._resetContextStyleTimingState(i), u.type == T.State)) {
            let m = u,
              p = m.name;
            p
              .toString()
              .split(/\s*,\s*/)
              .forEach((f) => {
                (m.name = f), c.push(this.visitState(m, i));
              }),
              (m.name = p);
          } else if (u.type == T.Transition) {
            let m = this.visitTransition(u, i);
            (s += m.queryCount), (r += m.depCount), d.push(m);
          } else i.errors.push(Ps());
        }),
        {
          type: T.Trigger,
          name: o.name,
          states: c,
          transitions: d,
          queryCount: s,
          depCount: r,
          options: null,
        }
      );
    }
    visitState(o, i) {
      let s = this.visitStyle(o.styles, i),
        r = (o.options && o.options.params) || null;
      if (s.containsDynamicStyles) {
        let c = new Set(),
          d = r || {};
        s.styles.forEach((u) => {
          u instanceof Map &&
            u.forEach((m) => {
              xo(m).forEach((p) => {
                d.hasOwnProperty(p) || c.add(p);
              });
            });
        }),
          c.size && i.errors.push(Ts(o.name, [...c.values()]));
      }
      return {
        type: T.State,
        name: o.name,
        style: s,
        options: r ? { params: r } : null,
      };
    }
    visitTransition(o, i) {
      (i.queryCount = 0), (i.depCount = 0);
      let s = he(this, dt(o.animation), i),
        r = ur(o.expr, i.errors);
      return {
        type: T.Transition,
        matchers: r,
        animation: s,
        queryCount: i.queryCount,
        depCount: i.depCount,
        options: Le(o.options),
      };
    }
    visitSequence(o, i) {
      return {
        type: T.Sequence,
        steps: o.steps.map((s) => he(this, s, i)),
        options: Le(o.options),
      };
    }
    visitGroup(o, i) {
      let s = i.currentTime,
        r = 0,
        c = o.steps.map((d) => {
          i.currentTime = s;
          let u = he(this, d, i);
          return (r = Math.max(r, i.currentTime)), u;
        });
      return (
        (i.currentTime = r), { type: T.Group, steps: c, options: Le(o.options) }
      );
    }
    visitAnimate(o, i) {
      let s = br(o.timings, i.errors);
      i.currentAnimateTimings = s;
      let r,
        c = o.styles ? o.styles : kn({});
      if (c.type == T.Keyframes) r = this.visitKeyframes(c, i);
      else {
        let d = o.styles,
          u = !1;
        if (!d) {
          u = !0;
          let p = {};
          s.easing && (p.easing = s.easing), (d = kn(p));
        }
        i.currentTime += s.duration + s.delay;
        let m = this.visitStyle(d, i);
        (m.isEmptyStep = u), (r = m);
      }
      return (
        (i.currentAnimateTimings = null),
        { type: T.Animate, timings: s, style: r, options: null }
      );
    }
    visitStyle(o, i) {
      let s = this._makeStyleAst(o, i);
      return this._validateStyleAst(s, i), s;
    }
    _makeStyleAst(o, i) {
      let s = [],
        r = Array.isArray(o.styles) ? o.styles : [o.styles];
      for (let u of r)
        typeof u == "string"
          ? u === we
            ? s.push(u)
            : i.errors.push(Ds(u))
          : s.push(new Map(Object.entries(u)));
      let c = !1,
        d = null;
      return (
        s.forEach((u) => {
          if (
            u instanceof Map &&
            (u.has("easing") && ((d = u.get("easing")), u.delete("easing")), !c)
          ) {
            for (let m of u.values())
              if (m.toString().indexOf(vo) >= 0) {
                c = !0;
                break;
              }
          }
        }),
        {
          type: T.Style,
          styles: s,
          easing: d,
          offset: o.offset,
          containsDynamicStyles: c,
          options: null,
        }
      );
    }
    _validateStyleAst(o, i) {
      let s = i.currentAnimateTimings,
        r = i.currentTime,
        c = i.currentTime;
      s && c > 0 && (c -= s.duration + s.delay),
        o.styles.forEach((d) => {
          typeof d != "string" &&
            d.forEach((u, m) => {
              let p = i.collectedStyles.get(i.currentQuerySelector),
                f = p.get(m),
                g = !0;
              f &&
                (c != r &&
                  c >= f.startTime &&
                  r <= f.endTime &&
                  (i.errors.push(ks(m, f.startTime, f.endTime, c, r)),
                  (g = !1)),
                (c = f.startTime)),
                g && p.set(m, { startTime: c, endTime: r }),
                i.options && rr(u, i.options, i.errors);
            });
        });
    }
    visitKeyframes(o, i) {
      let s = { type: T.Keyframes, styles: [], options: null };
      if (!i.currentAnimateTimings) return i.errors.push(Ns()), s;
      let r = 1,
        c = 0,
        d = [],
        u = !1,
        m = !1,
        p = 0,
        f = o.steps.map((U) => {
          let G = this._makeStyleAst(U, i),
            Q = G.offset != null ? G.offset : _r(G.styles),
            F = 0;
          return (
            Q != null && (c++, (F = G.offset = Q)),
            (m = m || F < 0 || F > 1),
            (u = u || F < p),
            (p = F),
            d.push(F),
            G
          );
        });
      m && i.errors.push(As()), u && i.errors.push(Is());
      let g = o.steps.length,
        h = 0;
      c > 0 && c < g ? i.errors.push(Fs()) : c == 0 && (h = r / (g - 1));
      let x = g - 1,
        v = i.currentTime,
        C = i.currentAnimateTimings,
        R = C.duration;
      return (
        f.forEach((U, G) => {
          let Q = h > 0 ? (G == x ? 1 : h * G) : d[G],
            F = Q * R;
          (i.currentTime = v + C.delay + F),
            (C.duration = F),
            this._validateStyleAst(U, i),
            (U.offset = Q),
            s.styles.push(U);
        }),
        s
      );
    }
    visitReference(o, i) {
      return {
        type: T.Reference,
        animation: he(this, dt(o.animation), i),
        options: Le(o.options),
      };
    }
    visitAnimateChild(o, i) {
      return i.depCount++, { type: T.AnimateChild, options: Le(o.options) };
    }
    visitAnimateRef(o, i) {
      return {
        type: T.AnimateRef,
        animation: this.visitReference(o.animation, i),
        options: Le(o.options),
      };
    }
    visitQuery(o, i) {
      let s = i.currentQuerySelector,
        r = o.options || {};
      i.queryCount++, (i.currentQuery = o);
      let [c, d] = fr(o.selector);
      (i.currentQuerySelector = s.length ? s + " " + c : c),
        _e(i.collectedStyles, i.currentQuerySelector, new Map());
      let u = he(this, dt(o.animation), i);
      return (
        (i.currentQuery = null),
        (i.currentQuerySelector = s),
        {
          type: T.Query,
          selector: c,
          limit: r.limit || 0,
          optional: !!r.optional,
          includeSelf: d,
          animation: u,
          originalSelector: o.selector,
          options: Le(o.options),
        }
      );
    }
    visitStagger(o, i) {
      i.currentQuery || i.errors.push(Rs());
      let s =
        o.timings === "full"
          ? { duration: 0, delay: 0, easing: "full" }
          : en(o.timings, i.errors, !0);
      return {
        type: T.Stagger,
        animation: he(this, dt(o.animation), i),
        timings: s,
        options: null,
      };
    }
  };
function fr(a) {
  let o = !!a.split(/\s*,\s*/).find((i) => i == yo);
  return (
    o && (a = a.replace(gr, "")),
    (a = a
      .replace(/@\*/g, Xt)
      .replace(/@\w+/g, (i) => Xt + "-" + i.slice(1))
      .replace(/:animating/g, $n)),
    [a, o]
  );
}
function hr(a) {
  return a ? Ae({}, a) : null;
}
var Yn = class {
  constructor(o) {
    (this.errors = o),
      (this.queryCount = 0),
      (this.depCount = 0),
      (this.currentTransition = null),
      (this.currentQuery = null),
      (this.currentQuerySelector = null),
      (this.currentAnimateTimings = null),
      (this.currentTime = 0),
      (this.collectedStyles = new Map()),
      (this.options = null),
      (this.unsupportedCSSPropertiesFound = new Set());
  }
};
function _r(a) {
  if (typeof a == "string") return null;
  let o = null;
  if (Array.isArray(a))
    a.forEach((i) => {
      if (i instanceof Map && i.has("offset")) {
        let s = i;
        (o = parseFloat(s.get("offset"))), s.delete("offset");
      }
    });
  else if (a instanceof Map && a.has("offset")) {
    let i = a;
    (o = parseFloat(i.get("offset"))), i.delete("offset");
  }
  return o;
}
function br(a, o) {
  if (a.hasOwnProperty("duration")) return a;
  if (typeof a == "number") {
    let c = en(a, o).duration;
    return jn(c, 0, "");
  }
  let i = a;
  if (i.split(/\s+/).some((c) => c.charAt(0) == "{" && c.charAt(1) == "{")) {
    let c = jn(0, 0, "");
    return (c.dynamic = !0), (c.strValue = i), c;
  }
  let r = en(i, o);
  return jn(r.duration, r.delay, r.easing);
}
function Le(a) {
  return (
    a ? ((a = Ae({}, a)), a.params && (a.params = hr(a.params))) : (a = {}), a
  );
}
function jn(a, o, i) {
  return { duration: a, delay: o, easing: i };
}
function pi(a, o, i, s, r, c, d = null, u = !1) {
  return {
    type: 1,
    element: a,
    keyframes: o,
    preStyleProps: i,
    postStyleProps: s,
    duration: r,
    delay: c,
    totalTime: r + c,
    easing: d,
    subTimeline: u,
  };
}
var pt = class {
    constructor() {
      this._map = new Map();
    }
    get(o) {
      return this._map.get(o) || [];
    }
    append(o, i) {
      let s = this._map.get(o);
      s || this._map.set(o, (s = [])), s.push(...i);
    }
    has(o) {
      return this._map.has(o);
    }
    clear() {
      this._map.clear();
    }
  },
  vr = 1,
  Er = ":enter",
  xr = new RegExp(Er, "g"),
  yr = ":leave",
  Sr = new RegExp(yr, "g");
function Co(a, o, i, s, r, c = new Map(), d = new Map(), u, m, p = []) {
  return new Jn().buildKeyframes(a, o, i, s, r, c, d, u, m, p);
}
var Jn = class {
    buildKeyframes(o, i, s, r, c, d, u, m, p, f = []) {
      p = p || new pt();
      let g = new Zn(o, i, p, r, c, f, []);
      g.options = m;
      let h = m.delay ? De(m.delay) : 0;
      g.currentTimeline.delayNextStep(h),
        g.currentTimeline.setStyles([d], null, g.errors, m),
        he(this, s, g);
      let x = g.timelines.filter((v) => v.containsAnimation());
      if (x.length && u.size) {
        let v;
        for (let C = x.length - 1; C >= 0; C--) {
          let R = x[C];
          if (R.element === i) {
            v = R;
            break;
          }
        }
        v &&
          !v.allowOnlyTimelineStyles() &&
          v.setStyles([u], null, g.errors, m);
      }
      return x.length
        ? x.map((v) => v.buildKeyframes())
        : [pi(i, [], [], [], 0, h, "", !1)];
    }
    visitTrigger(o, i) {}
    visitState(o, i) {}
    visitTransition(o, i) {}
    visitAnimateChild(o, i) {
      let s = i.subInstructions.get(i.element);
      if (s) {
        let r = i.createSubContext(o.options),
          c = i.currentTimeline.currentTime,
          d = this._visitSubInstructions(s, r, r.options);
        c != d && i.transformIntoNewTimeline(d);
      }
      i.previousNode = o;
    }
    visitAnimateRef(o, i) {
      let s = i.createSubContext(o.options);
      s.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([o.options, o.animation.options], i, s),
        this.visitReference(o.animation, s),
        i.transformIntoNewTimeline(s.currentTimeline.currentTime),
        (i.previousNode = o);
    }
    _applyAnimationRefDelays(o, i, s) {
      for (let r of o) {
        let c = r?.delay;
        if (c) {
          let d =
            typeof c == "number" ? c : De(mt(c, r?.params ?? {}, i.errors));
          s.delayNextStep(d);
        }
      }
    }
    _visitSubInstructions(o, i, s) {
      let c = i.currentTimeline.currentTime,
        d = s.duration != null ? De(s.duration) : null,
        u = s.delay != null ? De(s.delay) : null;
      return (
        d !== 0 &&
          o.forEach((m) => {
            let p = i.appendInstructionToTimeline(m, d, u);
            c = Math.max(c, p.duration + p.delay);
          }),
        c
      );
    }
    visitReference(o, i) {
      i.updateOptions(o.options, !0),
        he(this, o.animation, i),
        (i.previousNode = o);
    }
    visitSequence(o, i) {
      let s = i.subContextCount,
        r = i,
        c = o.options;
      if (
        c &&
        (c.params || c.delay) &&
        ((r = i.createSubContext(c)),
        r.transformIntoNewTimeline(),
        c.delay != null)
      ) {
        r.previousNode.type == T.Style &&
          (r.currentTimeline.snapshotCurrentStyles(), (r.previousNode = on));
        let d = De(c.delay);
        r.delayNextStep(d);
      }
      o.steps.length &&
        (o.steps.forEach((d) => he(this, d, r)),
        r.currentTimeline.applyStylesToKeyframe(),
        r.subContextCount > s && r.transformIntoNewTimeline()),
        (i.previousNode = o);
    }
    visitGroup(o, i) {
      let s = [],
        r = i.currentTimeline.currentTime,
        c = o.options && o.options.delay ? De(o.options.delay) : 0;
      o.steps.forEach((d) => {
        let u = i.createSubContext(o.options);
        c && u.delayNextStep(c),
          he(this, d, u),
          (r = Math.max(r, u.currentTimeline.currentTime)),
          s.push(u.currentTimeline);
      }),
        s.forEach((d) => i.currentTimeline.mergeTimelineCollectedStyles(d)),
        i.transformIntoNewTimeline(r),
        (i.previousNode = o);
    }
    _visitTiming(o, i) {
      if (o.dynamic) {
        let s = o.strValue,
          r = i.params ? mt(s, i.params, i.errors) : s;
        return en(r, i.errors);
      } else return { duration: o.duration, delay: o.delay, easing: o.easing };
    }
    visitAnimate(o, i) {
      let s = (i.currentAnimateTimings = this._visitTiming(o.timings, i)),
        r = i.currentTimeline;
      s.delay && (i.incrementTime(s.delay), r.snapshotCurrentStyles());
      let c = o.style;
      c.type == T.Keyframes
        ? this.visitKeyframes(c, i)
        : (i.incrementTime(s.duration),
          this.visitStyle(c, i),
          r.applyStylesToKeyframe()),
        (i.currentAnimateTimings = null),
        (i.previousNode = o);
    }
    visitStyle(o, i) {
      let s = i.currentTimeline,
        r = i.currentAnimateTimings;
      !r && s.hasCurrentStyleProperties() && s.forwardFrame();
      let c = (r && r.easing) || o.easing;
      o.isEmptyStep
        ? s.applyEmptyStep(c)
        : s.setStyles(o.styles, c, i.errors, i.options),
        (i.previousNode = o);
    }
    visitKeyframes(o, i) {
      let s = i.currentAnimateTimings,
        r = i.currentTimeline.duration,
        c = s.duration,
        u = i.createSubContext().currentTimeline;
      (u.easing = s.easing),
        o.styles.forEach((m) => {
          let p = m.offset || 0;
          u.forwardTime(p * c),
            u.setStyles(m.styles, m.easing, i.errors, i.options),
            u.applyStylesToKeyframe();
        }),
        i.currentTimeline.mergeTimelineCollectedStyles(u),
        i.transformIntoNewTimeline(r + c),
        (i.previousNode = o);
    }
    visitQuery(o, i) {
      let s = i.currentTimeline.currentTime,
        r = o.options || {},
        c = r.delay ? De(r.delay) : 0;
      c &&
        (i.previousNode.type === T.Style ||
          (s == 0 && i.currentTimeline.hasCurrentStyleProperties())) &&
        (i.currentTimeline.snapshotCurrentStyles(), (i.previousNode = on));
      let d = s,
        u = i.invokeQuery(
          o.selector,
          o.originalSelector,
          o.limit,
          o.includeSelf,
          !!r.optional,
          i.errors
        );
      i.currentQueryTotal = u.length;
      let m = null;
      u.forEach((p, f) => {
        i.currentQueryIndex = f;
        let g = i.createSubContext(o.options, p);
        c && g.delayNextStep(c),
          p === i.element && (m = g.currentTimeline),
          he(this, o.animation, g),
          g.currentTimeline.applyStylesToKeyframe();
        let h = g.currentTimeline.currentTime;
        d = Math.max(d, h);
      }),
        (i.currentQueryIndex = 0),
        (i.currentQueryTotal = 0),
        i.transformIntoNewTimeline(d),
        m &&
          (i.currentTimeline.mergeTimelineCollectedStyles(m),
          i.currentTimeline.snapshotCurrentStyles()),
        (i.previousNode = o);
    }
    visitStagger(o, i) {
      let s = i.parentContext,
        r = i.currentTimeline,
        c = o.timings,
        d = Math.abs(c.duration),
        u = d * (i.currentQueryTotal - 1),
        m = d * i.currentQueryIndex;
      switch (c.duration < 0 ? "reverse" : c.easing) {
        case "reverse":
          m = u - m;
          break;
        case "full":
          m = s.currentStaggerTime;
          break;
      }
      let f = i.currentTimeline;
      m && f.delayNextStep(m);
      let g = f.currentTime;
      he(this, o.animation, i),
        (i.previousNode = o),
        (s.currentStaggerTime =
          r.currentTime - g + (r.startTime - s.currentTimeline.startTime));
    }
  },
  on = {},
  Zn = class a {
    constructor(o, i, s, r, c, d, u, m) {
      (this._driver = o),
        (this.element = i),
        (this.subInstructions = s),
        (this._enterClassName = r),
        (this._leaveClassName = c),
        (this.errors = d),
        (this.timelines = u),
        (this.parentContext = null),
        (this.currentAnimateTimings = null),
        (this.previousNode = on),
        (this.subContextCount = 0),
        (this.options = {}),
        (this.currentQueryIndex = 0),
        (this.currentQueryTotal = 0),
        (this.currentStaggerTime = 0),
        (this.currentTimeline = m || new sn(this._driver, i, 0)),
        u.push(this.currentTimeline);
    }
    get params() {
      return this.options.params;
    }
    updateOptions(o, i) {
      if (!o) return;
      let s = o,
        r = this.options;
      s.duration != null && (r.duration = De(s.duration)),
        s.delay != null && (r.delay = De(s.delay));
      let c = s.params;
      if (c) {
        let d = r.params;
        d || (d = this.options.params = {}),
          Object.keys(c).forEach((u) => {
            (!i || !d.hasOwnProperty(u)) && (d[u] = mt(c[u], d, this.errors));
          });
      }
    }
    _copyOptions() {
      let o = {};
      if (this.options) {
        let i = this.options.params;
        if (i) {
          let s = (o.params = {});
          Object.keys(i).forEach((r) => {
            s[r] = i[r];
          });
        }
      }
      return o;
    }
    createSubContext(o = null, i, s) {
      let r = i || this.element,
        c = new a(
          this._driver,
          r,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(r, s || 0)
        );
      return (
        (c.previousNode = this.previousNode),
        (c.currentAnimateTimings = this.currentAnimateTimings),
        (c.options = this._copyOptions()),
        c.updateOptions(o),
        (c.currentQueryIndex = this.currentQueryIndex),
        (c.currentQueryTotal = this.currentQueryTotal),
        (c.parentContext = this),
        this.subContextCount++,
        c
      );
    }
    transformIntoNewTimeline(o) {
      return (
        (this.previousNode = on),
        (this.currentTimeline = this.currentTimeline.fork(this.element, o)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(o, i, s) {
      let r = {
          duration: i ?? o.duration,
          delay: this.currentTimeline.currentTime + (s ?? 0) + o.delay,
          easing: "",
        },
        c = new Xn(
          this._driver,
          o.element,
          o.keyframes,
          o.preStyleProps,
          o.postStyleProps,
          r,
          o.stretchStartingKeyframe
        );
      return this.timelines.push(c), r;
    }
    incrementTime(o) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + o);
    }
    delayNextStep(o) {
      o > 0 && this.currentTimeline.delayNextStep(o);
    }
    invokeQuery(o, i, s, r, c, d) {
      let u = [];
      if ((r && u.push(this.element), o.length > 0)) {
        (o = o.replace(xr, "." + this._enterClassName)),
          (o = o.replace(Sr, "." + this._leaveClassName));
        let m = s != 1,
          p = this._driver.query(this.element, o, m);
        s !== 0 &&
          (p = s < 0 ? p.slice(p.length + s, p.length) : p.slice(0, s)),
          u.push(...p);
      }
      return !c && u.length == 0 && d.push(Bs(i)), u;
    }
  },
  sn = class a {
    constructor(o, i, s, r) {
      (this._driver = o),
        (this.element = i),
        (this.startTime = s),
        (this._elementTimelineStylesLookup = r),
        (this.duration = 0),
        (this.easing = null),
        (this._previousKeyframe = new Map()),
        (this._currentKeyframe = new Map()),
        (this._keyframes = new Map()),
        (this._styleSummary = new Map()),
        (this._localTimelineStyles = new Map()),
        (this._pendingStyles = new Map()),
        (this._backFill = new Map()),
        (this._currentEmptyStepKeyframe = null),
        this._elementTimelineStylesLookup ||
          (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(i)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(i, this._localTimelineStyles)),
        this._loadKeyframe();
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(o) {
      let i = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || i
        ? (this.forwardTime(this.currentTime + o),
          i && this.snapshotCurrentStyles())
        : (this.startTime += o);
    }
    fork(o, i) {
      return (
        this.applyStylesToKeyframe(),
        new a(
          this._driver,
          o,
          i || this.currentTime,
          this._elementTimelineStylesLookup
        )
      );
    }
    _loadKeyframe() {
      this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()),
          this._keyframes.set(this.duration, this._currentKeyframe));
    }
    forwardFrame() {
      (this.duration += vr), this._loadKeyframe();
    }
    forwardTime(o) {
      this.applyStylesToKeyframe(), (this.duration = o), this._loadKeyframe();
    }
    _updateStyle(o, i) {
      this._localTimelineStyles.set(o, i),
        this._globalTimelineStyles.set(o, i),
        this._styleSummary.set(o, { time: this.currentTime, value: i });
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(o) {
      o && this._previousKeyframe.set("easing", o);
      for (let [i, s] of this._globalTimelineStyles)
        this._backFill.set(i, s || we), this._currentKeyframe.set(i, we);
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(o, i, s, r) {
      i && this._previousKeyframe.set("easing", i);
      let c = (r && r.params) || {},
        d = Cr(o, this._globalTimelineStyles);
      for (let [u, m] of d) {
        let p = mt(m, c, s);
        this._pendingStyles.set(u, p),
          this._localTimelineStyles.has(u) ||
            this._backFill.set(u, this._globalTimelineStyles.get(u) ?? we),
          this._updateStyle(u, p);
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((o, i) => {
          this._currentKeyframe.set(i, o);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((o, i) => {
          this._currentKeyframe.has(i) || this._currentKeyframe.set(i, o);
        }));
    }
    snapshotCurrentStyles() {
      for (let [o, i] of this._localTimelineStyles)
        this._pendingStyles.set(o, i), this._updateStyle(o, i);
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let o = [];
      for (let i in this._currentKeyframe) o.push(i);
      return o;
    }
    mergeTimelineCollectedStyles(o) {
      o._styleSummary.forEach((i, s) => {
        let r = this._styleSummary.get(s);
        (!r || i.time > r.time) && this._updateStyle(s, i.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let o = new Set(),
        i = new Set(),
        s = this._keyframes.size === 1 && this.duration === 0,
        r = [];
      this._keyframes.forEach((u, m) => {
        let p = new Map([...this._backFill, ...u]);
        p.forEach((f, g) => {
          f === Ct ? o.add(g) : f === we && i.add(g);
        }),
          s || p.set("offset", m / this.duration),
          r.push(p);
      });
      let c = [...o.values()],
        d = [...i.values()];
      if (s) {
        let u = r[0],
          m = new Map(u);
        u.set("offset", 0), m.set("offset", 1), (r = [u, m]);
      }
      return pi(
        this.element,
        r,
        c,
        d,
        this.duration,
        this.startTime,
        this.easing,
        !1
      );
    }
  },
  Xn = class extends sn {
    constructor(o, i, s, r, c, d, u = !1) {
      super(o, i, d.delay),
        (this.keyframes = s),
        (this.preStyleProps = r),
        (this.postStyleProps = c),
        (this._stretchStartingKeyframe = u),
        (this.timings = {
          duration: d.duration,
          delay: d.delay,
          easing: d.easing,
        });
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let o = this.keyframes,
        { delay: i, duration: s, easing: r } = this.timings;
      if (this._stretchStartingKeyframe && i) {
        let c = [],
          d = s + i,
          u = i / d,
          m = new Map(o[0]);
        m.set("offset", 0), c.push(m);
        let p = new Map(o[0]);
        p.set("offset", ao(u)), c.push(p);
        let f = o.length - 1;
        for (let g = 1; g <= f; g++) {
          let h = new Map(o[g]),
            x = h.get("offset"),
            v = i + x * s;
          h.set("offset", ao(v / d)), c.push(h);
        }
        (s = d), (i = 0), (r = ""), (o = c);
      }
      return pi(
        this.element,
        o,
        this.preStyleProps,
        this.postStyleProps,
        s,
        i,
        r,
        !0
      );
    }
  };
function ao(a, o = 3) {
  let i = Math.pow(10, o - 1);
  return Math.round(a * i) / i;
}
function Cr(a, o) {
  let i = new Map(),
    s;
  return (
    a.forEach((r) => {
      if (r === "*") {
        s ??= o.keys();
        for (let c of s) i.set(c, we);
      } else for (let [c, d] of r) i.set(c, d);
    }),
    i
  );
}
function lo(a, o, i, s, r, c, d, u, m, p, f, g, h) {
  return {
    type: 0,
    element: a,
    triggerName: o,
    isRemovalTransition: r,
    fromState: i,
    fromStyles: c,
    toState: s,
    toStyles: d,
    timelines: u,
    queriedElements: m,
    preStyleProps: p,
    postStyleProps: f,
    totalTime: g,
    errors: h,
  };
}
var qn = {},
  rn = class {
    constructor(o, i, s) {
      (this._triggerName = o), (this.ast = i), (this._stateStyles = s);
    }
    match(o, i, s, r) {
      return Mr(this.ast.matchers, o, i, s, r);
    }
    buildStyles(o, i, s) {
      let r = this._stateStyles.get("*");
      return (
        o !== void 0 && (r = this._stateStyles.get(o?.toString()) || r),
        r ? r.buildStyles(i, s) : new Map()
      );
    }
    build(o, i, s, r, c, d, u, m, p, f) {
      let g = [],
        h = (this.ast.options && this.ast.options.params) || qn,
        x = (u && u.params) || qn,
        v = this.buildStyles(s, x, g),
        C = (m && m.params) || qn,
        R = this.buildStyles(r, C, g),
        U = new Set(),
        G = new Map(),
        Q = new Map(),
        F = r === "void",
        ge = { params: Mo(C, h), delay: this.ast.options?.delay },
        D = f ? [] : Co(o, i, this.ast.animation, c, d, v, R, ge, p, g),
        L = 0;
      return (
        D.forEach((W) => {
          L = Math.max(W.duration + W.delay, L);
        }),
        g.length
          ? lo(i, this._triggerName, s, r, F, v, R, [], [], G, Q, L, g)
          : (D.forEach((W) => {
              let y = W.element,
                _ = _e(G, y, new Set());
              W.preStyleProps.forEach((M) => _.add(M));
              let N = _e(Q, y, new Set());
              W.postStyleProps.forEach((M) => N.add(M)), y !== i && U.add(y);
            }),
            lo(
              i,
              this._triggerName,
              s,
              r,
              F,
              v,
              R,
              D,
              [...U.values()],
              G,
              Q,
              L
            ))
      );
    }
  };
function Mr(a, o, i, s, r) {
  return a.some((c) => c(o, i, s, r));
}
function Mo(a, o) {
  let i = Ae({}, o);
  return (
    Object.entries(a).forEach(([s, r]) => {
      r != null && (i[s] = r);
    }),
    i
  );
}
var ei = class {
  constructor(o, i, s) {
    (this.styles = o), (this.defaultParams = i), (this.normalizer = s);
  }
  buildStyles(o, i) {
    let s = new Map(),
      r = Mo(o, this.defaultParams);
    return (
      this.styles.styles.forEach((c) => {
        typeof c != "string" &&
          c.forEach((d, u) => {
            d && (d = mt(d, r, i));
            let m = this.normalizer.normalizePropertyName(u, i);
            (d = this.normalizer.normalizeStyleValue(u, m, d, i)), s.set(u, d);
          });
      }),
      s
    );
  }
};
function wr(a, o, i) {
  return new ti(a, o, i);
}
var ti = class {
  constructor(o, i, s) {
    (this.name = o),
      (this.ast = i),
      (this._normalizer = s),
      (this.transitionFactories = []),
      (this.states = new Map()),
      i.states.forEach((r) => {
        let c = (r.options && r.options.params) || {};
        this.states.set(r.name, new ei(r.style, c, s));
      }),
      co(this.states, "true", "1"),
      co(this.states, "false", "0"),
      i.transitions.forEach((r) => {
        this.transitionFactories.push(new rn(o, r, this.states));
      }),
      (this.fallbackTransition = Or(o, this.states, this._normalizer));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(o, i, s, r) {
    return this.transitionFactories.find((d) => d.match(o, i, s, r)) || null;
  }
  matchStyles(o, i, s) {
    return this.fallbackTransition.buildStyles(o, i, s);
  }
};
function Or(a, o, i) {
  let s = [(d, u) => !0],
    r = { type: T.Sequence, steps: [], options: null },
    c = {
      type: T.Transition,
      animation: r,
      matchers: s,
      options: null,
      queryCount: 0,
      depCount: 0,
    };
  return new rn(a, c, o);
}
function co(a, o, i) {
  a.has(o) ? a.has(i) || a.set(i, a.get(o)) : a.has(i) && a.set(o, a.get(i));
}
var Pr = new pt(),
  ni = class {
    constructor(o, i, s) {
      (this.bodyNode = o),
        (this._driver = i),
        (this._normalizer = s),
        (this._animations = new Map()),
        (this._playersById = new Map()),
        (this.players = []);
    }
    register(o, i) {
      let s = [],
        r = [],
        c = So(this._driver, i, s, r);
      if (s.length) throw Hs(s);
      r.length && void 0, this._animations.set(o, c);
    }
    _buildPlayer(o, i, s) {
      let r = o.element,
        c = ho(this._normalizer, o.keyframes, i, s);
      return this._driver.animate(r, c, o.duration, o.delay, o.easing, [], !0);
    }
    create(o, i, s = {}) {
      let r = [],
        c = this._animations.get(o),
        d,
        u = new Map();
      if (
        (c
          ? ((d = Co(
              this._driver,
              i,
              c,
              Eo,
              Gn,
              new Map(),
              new Map(),
              s,
              Pr,
              r
            )),
            d.forEach((f) => {
              let g = _e(u, f.element, new Map());
              f.postStyleProps.forEach((h) => g.set(h, null));
            }))
          : (r.push(Vs()), (d = [])),
        r.length)
      )
        throw Us(r);
      u.forEach((f, g) => {
        f.forEach((h, x) => {
          f.set(x, this._driver.computeStyle(g, x, we));
        });
      });
      let m = d.map((f) => {
          let g = u.get(f.element);
          return this._buildPlayer(f, new Map(), g);
        }),
        p = Ne(m);
      return (
        this._playersById.set(o, p),
        p.onDestroy(() => this.destroy(o)),
        this.players.push(p),
        p
      );
    }
    destroy(o) {
      let i = this._getPlayer(o);
      i.destroy(), this._playersById.delete(o);
      let s = this.players.indexOf(i);
      s >= 0 && this.players.splice(s, 1);
    }
    _getPlayer(o) {
      let i = this._playersById.get(o);
      if (!i) throw Gs(o);
      return i;
    }
    listen(o, i, s, r) {
      let c = li(i, "", "", "");
      return ai(this._getPlayer(o), s, c, r), () => {};
    }
    command(o, i, s, r) {
      if (s == "register") {
        this.register(o, r[0]);
        return;
      }
      if (s == "create") {
        let d = r[0] || {};
        this.create(o, i, d);
        return;
      }
      let c = this._getPlayer(o);
      switch (s) {
        case "play":
          c.play();
          break;
        case "pause":
          c.pause();
          break;
        case "reset":
          c.reset();
          break;
        case "restart":
          c.restart();
          break;
        case "finish":
          c.finish();
          break;
        case "init":
          c.init();
          break;
        case "setPosition":
          c.setPosition(parseFloat(r[0]));
          break;
        case "destroy":
          this.destroy(o);
          break;
      }
    }
  },
  uo = "ng-animate-queued",
  Tr = ".ng-animate-queued",
  Hn = "ng-animate-disabled",
  Dr = ".ng-animate-disabled",
  kr = "ng-star-inserted",
  Nr = ".ng-star-inserted",
  Ar = [],
  wo = {
    namespaceId: "",
    setForRemoval: !1,
    setForMove: !1,
    hasAnimation: !1,
    removedBeforeQueried: !1,
  },
  Ir = {
    namespaceId: "",
    setForMove: !1,
    setForRemoval: !1,
    hasAnimation: !1,
    removedBeforeQueried: !0,
  },
  Se = "__ng_removed",
  gt = class {
    get params() {
      return this.options.params;
    }
    constructor(o, i = "") {
      this.namespaceId = i;
      let s = o && o.hasOwnProperty("value"),
        r = s ? o.value : o;
      if (((this.value = Rr(r)), s)) {
        let c = o,
          { value: d } = c,
          u = hi(c, ["value"]);
        this.options = u;
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(o) {
      let i = o.params;
      if (i) {
        let s = this.options.params;
        Object.keys(i).forEach((r) => {
          s[r] == null && (s[r] = i[r]);
        });
      }
    }
  },
  ut = "void",
  Vn = new gt(ut),
  ii = class {
    constructor(o, i, s) {
      (this.id = o),
        (this.hostElement = i),
        (this._engine = s),
        (this.players = []),
        (this._triggers = new Map()),
        (this._queue = []),
        (this._elementListeners = new Map()),
        (this._hostClassName = "ng-tns-" + o),
        Ee(i, this._hostClassName);
    }
    listen(o, i, s, r) {
      if (!this._triggers.has(i)) throw $s(s, i);
      if (s == null || s.length == 0) throw Ws(i);
      if (!Br(s)) throw Qs(s, i);
      let c = _e(this._elementListeners, o, []),
        d = { name: i, phase: s, callback: r };
      c.push(d);
      let u = _e(this._engine.statesByElement, o, new Map());
      return (
        u.has(i) || (Ee(o, Qt), Ee(o, Qt + "-" + i), u.set(i, Vn)),
        () => {
          this._engine.afterFlush(() => {
            let m = c.indexOf(d);
            m >= 0 && c.splice(m, 1), this._triggers.has(i) || u.delete(i);
          });
        }
      );
    }
    register(o, i) {
      return this._triggers.has(o) ? !1 : (this._triggers.set(o, i), !0);
    }
    _getTrigger(o) {
      let i = this._triggers.get(o);
      if (!i) throw Ks(o);
      return i;
    }
    trigger(o, i, s, r = !0) {
      let c = this._getTrigger(i),
        d = new ft(this.id, i, o),
        u = this._engine.statesByElement.get(o);
      u ||
        (Ee(o, Qt),
        Ee(o, Qt + "-" + i),
        this._engine.statesByElement.set(o, (u = new Map())));
      let m = u.get(i),
        p = new gt(s, this.id);
      if (
        (!(s && s.hasOwnProperty("value")) && m && p.absorbOptions(m.options),
        u.set(i, p),
        m || (m = Vn),
        !(p.value === ut) && m.value === p.value)
      ) {
        if (!jr(m.params, p.params)) {
          let C = [],
            R = c.matchStyles(m.value, m.params, C),
            U = c.matchStyles(p.value, p.params, C);
          C.length
            ? this._engine.reportError(C)
            : this._engine.afterFlush(() => {
                je(o, R), Oe(o, U);
              });
        }
        return;
      }
      let h = _e(this._engine.playersByElement, o, []);
      h.forEach((C) => {
        C.namespaceId == this.id &&
          C.triggerName == i &&
          C.queued &&
          C.destroy();
      });
      let x = c.matchTransition(m.value, p.value, o, p.params),
        v = !1;
      if (!x) {
        if (!r) return;
        (x = c.fallbackTransition), (v = !0);
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: o,
          triggerName: i,
          transition: x,
          fromState: m,
          toState: p,
          player: d,
          isFallbackTransition: v,
        }),
        v ||
          (Ee(o, uo),
          d.onStart(() => {
            Je(o, uo);
          })),
        d.onDone(() => {
          let C = this.players.indexOf(d);
          C >= 0 && this.players.splice(C, 1);
          let R = this._engine.playersByElement.get(o);
          if (R) {
            let U = R.indexOf(d);
            U >= 0 && R.splice(U, 1);
          }
        }),
        this.players.push(d),
        h.push(d),
        d
      );
    }
    deregister(o) {
      this._triggers.delete(o),
        this._engine.statesByElement.forEach((i) => i.delete(o)),
        this._elementListeners.forEach((i, s) => {
          this._elementListeners.set(
            s,
            i.filter((r) => r.name != o)
          );
        });
    }
    clearElementCache(o) {
      this._engine.statesByElement.delete(o), this._elementListeners.delete(o);
      let i = this._engine.playersByElement.get(o);
      i &&
        (i.forEach((s) => s.destroy()),
        this._engine.playersByElement.delete(o));
    }
    _signalRemovalForInnerTriggers(o, i) {
      let s = this._engine.driver.query(o, Xt, !0);
      s.forEach((r) => {
        if (r[Se]) return;
        let c = this._engine.fetchNamespacesByElement(r);
        c.size
          ? c.forEach((d) => d.triggerLeaveAnimation(r, i, !1, !0))
          : this.clearElementCache(r);
      }),
        this._engine.afterFlushAnimationsDone(() =>
          s.forEach((r) => this.clearElementCache(r))
        );
    }
    triggerLeaveAnimation(o, i, s, r) {
      let c = this._engine.statesByElement.get(o),
        d = new Map();
      if (c) {
        let u = [];
        if (
          (c.forEach((m, p) => {
            if ((d.set(p, m.value), this._triggers.has(p))) {
              let f = this.trigger(o, p, ut, r);
              f && u.push(f);
            }
          }),
          u.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, o, !0, i, d),
            s && Ne(u).onDone(() => this._engine.processLeaveNode(o)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(o) {
      let i = this._elementListeners.get(o),
        s = this._engine.statesByElement.get(o);
      if (i && s) {
        let r = new Set();
        i.forEach((c) => {
          let d = c.name;
          if (r.has(d)) return;
          r.add(d);
          let m = this._triggers.get(d).fallbackTransition,
            p = s.get(d) || Vn,
            f = new gt(ut),
            g = new ft(this.id, d, o);
          this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: o,
              triggerName: d,
              transition: m,
              fromState: p,
              toState: f,
              player: g,
              isFallbackTransition: !0,
            });
        });
      }
    }
    removeNode(o, i) {
      let s = this._engine;
      if (
        (o.childElementCount && this._signalRemovalForInnerTriggers(o, i),
        this.triggerLeaveAnimation(o, i, !0))
      )
        return;
      let r = !1;
      if (s.totalAnimations) {
        let c = s.players.length ? s.playersByQueriedElement.get(o) : [];
        if (c && c.length) r = !0;
        else {
          let d = o;
          for (; (d = d.parentNode); )
            if (s.statesByElement.get(d)) {
              r = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(o), r))
        s.markElementAsRemoved(this.id, o, !1, i);
      else {
        let c = o[Se];
        (!c || c === wo) &&
          (s.afterFlush(() => this.clearElementCache(o)),
          s.destroyInnerAnimations(o),
          s._onRemovalComplete(o, i));
      }
    }
    insertNode(o, i) {
      Ee(o, this._hostClassName);
    }
    drainQueuedTransitions(o) {
      let i = [];
      return (
        this._queue.forEach((s) => {
          let r = s.player;
          if (r.destroyed) return;
          let c = s.element,
            d = this._elementListeners.get(c);
          d &&
            d.forEach((u) => {
              if (u.name == s.triggerName) {
                let m = li(
                  c,
                  s.triggerName,
                  s.fromState.value,
                  s.toState.value
                );
                (m._data = o), ai(s.player, u.phase, m, u.callback);
              }
            }),
            r.markedForDestroy
              ? this._engine.afterFlush(() => {
                  r.destroy();
                })
              : i.push(s);
        }),
        (this._queue = []),
        i.sort((s, r) => {
          let c = s.transition.ast.depCount,
            d = r.transition.ast.depCount;
          return c == 0 || d == 0
            ? c - d
            : this._engine.driver.containsElement(s.element, r.element)
            ? 1
            : -1;
        })
      );
    }
    destroy(o) {
      this.players.forEach((i) => i.destroy()),
        this._signalRemovalForInnerTriggers(this.hostElement, o);
    }
  },
  oi = class {
    _onRemovalComplete(o, i) {
      this.onRemovalComplete(o, i);
    }
    constructor(o, i, s) {
      (this.bodyNode = o),
        (this.driver = i),
        (this._normalizer = s),
        (this.players = []),
        (this.newHostElements = new Map()),
        (this.playersByElement = new Map()),
        (this.playersByQueriedElement = new Map()),
        (this.statesByElement = new Map()),
        (this.disabledNodes = new Set()),
        (this.totalAnimations = 0),
        (this.totalQueuedPlayers = 0),
        (this._namespaceLookup = {}),
        (this._namespaceList = []),
        (this._flushFns = []),
        (this._whenQuietFns = []),
        (this.namespacesByHostElement = new Map()),
        (this.collectedEnterElements = []),
        (this.collectedLeaveElements = []),
        (this.onRemovalComplete = (r, c) => {});
    }
    get queuedPlayers() {
      let o = [];
      return (
        this._namespaceList.forEach((i) => {
          i.players.forEach((s) => {
            s.queued && o.push(s);
          });
        }),
        o
      );
    }
    createNamespace(o, i) {
      let s = new ii(o, i, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, i)
          ? this._balanceNamespaceList(s, i)
          : (this.newHostElements.set(i, s), this.collectEnterElement(i)),
        (this._namespaceLookup[o] = s)
      );
    }
    _balanceNamespaceList(o, i) {
      let s = this._namespaceList,
        r = this.namespacesByHostElement;
      if (s.length - 1 >= 0) {
        let d = !1,
          u = this.driver.getParentElement(i);
        for (; u; ) {
          let m = r.get(u);
          if (m) {
            let p = s.indexOf(m);
            s.splice(p + 1, 0, o), (d = !0);
            break;
          }
          u = this.driver.getParentElement(u);
        }
        d || s.unshift(o);
      } else s.push(o);
      return r.set(i, o), o;
    }
    register(o, i) {
      let s = this._namespaceLookup[o];
      return s || (s = this.createNamespace(o, i)), s;
    }
    registerTrigger(o, i, s) {
      let r = this._namespaceLookup[o];
      r && r.register(i, s) && this.totalAnimations++;
    }
    destroy(o, i) {
      o &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let s = this._fetchNamespace(o);
          this.namespacesByHostElement.delete(s.hostElement);
          let r = this._namespaceList.indexOf(s);
          r >= 0 && this._namespaceList.splice(r, 1),
            s.destroy(i),
            delete this._namespaceLookup[o];
        }));
    }
    _fetchNamespace(o) {
      return this._namespaceLookup[o];
    }
    fetchNamespacesByElement(o) {
      let i = new Set(),
        s = this.statesByElement.get(o);
      if (s) {
        for (let r of s.values())
          if (r.namespaceId) {
            let c = this._fetchNamespace(r.namespaceId);
            c && i.add(c);
          }
      }
      return i;
    }
    trigger(o, i, s, r) {
      if (Jt(i)) {
        let c = this._fetchNamespace(o);
        if (c) return c.trigger(i, s, r), !0;
      }
      return !1;
    }
    insertNode(o, i, s, r) {
      if (!Jt(i)) return;
      let c = i[Se];
      if (c && c.setForRemoval) {
        (c.setForRemoval = !1), (c.setForMove = !0);
        let d = this.collectedLeaveElements.indexOf(i);
        d >= 0 && this.collectedLeaveElements.splice(d, 1);
      }
      if (o) {
        let d = this._fetchNamespace(o);
        d && d.insertNode(i, s);
      }
      r && this.collectEnterElement(i);
    }
    collectEnterElement(o) {
      this.collectedEnterElements.push(o);
    }
    markElementAsDisabled(o, i) {
      i
        ? this.disabledNodes.has(o) || (this.disabledNodes.add(o), Ee(o, Hn))
        : this.disabledNodes.has(o) &&
          (this.disabledNodes.delete(o), Je(o, Hn));
    }
    removeNode(o, i, s) {
      if (Jt(i)) {
        let r = o ? this._fetchNamespace(o) : null;
        r ? r.removeNode(i, s) : this.markElementAsRemoved(o, i, !1, s);
        let c = this.namespacesByHostElement.get(i);
        c && c.id !== o && c.removeNode(i, s);
      } else this._onRemovalComplete(i, s);
    }
    markElementAsRemoved(o, i, s, r, c) {
      this.collectedLeaveElements.push(i),
        (i[Se] = {
          namespaceId: o,
          setForRemoval: r,
          hasAnimation: s,
          removedBeforeQueried: !1,
          previousTriggersValues: c,
        });
    }
    listen(o, i, s, r, c) {
      return Jt(i) ? this._fetchNamespace(o).listen(i, s, r, c) : () => {};
    }
    _buildInstruction(o, i, s, r, c) {
      return o.transition.build(
        this.driver,
        o.element,
        o.fromState.value,
        o.toState.value,
        s,
        r,
        o.fromState.options,
        o.toState.options,
        i,
        c
      );
    }
    destroyInnerAnimations(o) {
      let i = this.driver.query(o, Xt, !0);
      i.forEach((s) => this.destroyActiveAnimationsForElement(s)),
        this.playersByQueriedElement.size != 0 &&
          ((i = this.driver.query(o, $n, !0)),
          i.forEach((s) => this.finishActiveQueriedAnimationOnElement(s)));
    }
    destroyActiveAnimationsForElement(o) {
      let i = this.playersByElement.get(o);
      i &&
        i.forEach((s) => {
          s.queued ? (s.markedForDestroy = !0) : s.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(o) {
      let i = this.playersByQueriedElement.get(o);
      i && i.forEach((s) => s.finish());
    }
    whenRenderingDone() {
      return new Promise((o) => {
        if (this.players.length) return Ne(this.players).onDone(() => o());
        o();
      });
    }
    processLeaveNode(o) {
      let i = o[Se];
      if (i && i.setForRemoval) {
        if (((o[Se] = wo), i.namespaceId)) {
          this.destroyInnerAnimations(o);
          let s = this._fetchNamespace(i.namespaceId);
          s && s.clearElementCache(o);
        }
        this._onRemovalComplete(o, i.setForRemoval);
      }
      o.classList?.contains(Hn) && this.markElementAsDisabled(o, !1),
        this.driver.query(o, Dr, !0).forEach((s) => {
          this.markElementAsDisabled(s, !1);
        });
    }
    flush(o = -1) {
      let i = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((s, r) =>
            this._balanceNamespaceList(s, r)
          ),
          this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let s = 0; s < this.collectedEnterElements.length; s++) {
          let r = this.collectedEnterElements[s];
          Ee(r, kr);
        }
      if (
        this._namespaceList.length &&
        (this.totalQueuedPlayers || this.collectedLeaveElements.length)
      ) {
        let s = [];
        try {
          i = this._flushAnimations(s, o);
        } finally {
          for (let r = 0; r < s.length; r++) s[r]();
        }
      } else
        for (let s = 0; s < this.collectedLeaveElements.length; s++) {
          let r = this.collectedLeaveElements[s];
          this.processLeaveNode(r);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach((s) => s()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let s = this._whenQuietFns;
        (this._whenQuietFns = []),
          i.length
            ? Ne(i).onDone(() => {
                s.forEach((r) => r());
              })
            : s.forEach((r) => r());
      }
    }
    reportError(o) {
      throw Ys(o);
    }
    _flushAnimations(o, i) {
      let s = new pt(),
        r = [],
        c = new Map(),
        d = [],
        u = new Map(),
        m = new Map(),
        p = new Map(),
        f = new Set();
      this.disabledNodes.forEach((b) => {
        f.add(b);
        let E = this.driver.query(b, Tr, !0);
        for (let S = 0; S < E.length; S++) f.add(E[S]);
      });
      let g = this.bodyNode,
        h = Array.from(this.statesByElement.keys()),
        x = go(h, this.collectedEnterElements),
        v = new Map(),
        C = 0;
      x.forEach((b, E) => {
        let S = Eo + C++;
        v.set(E, S), b.forEach((P) => Ee(P, S));
      });
      let R = [],
        U = new Set(),
        G = new Set();
      for (let b = 0; b < this.collectedLeaveElements.length; b++) {
        let E = this.collectedLeaveElements[b],
          S = E[Se];
        S &&
          S.setForRemoval &&
          (R.push(E),
          U.add(E),
          S.hasAnimation
            ? this.driver.query(E, Nr, !0).forEach((P) => U.add(P))
            : G.add(E));
      }
      let Q = new Map(),
        F = go(h, Array.from(U));
      F.forEach((b, E) => {
        let S = Gn + C++;
        Q.set(E, S), b.forEach((P) => Ee(P, S));
      }),
        o.push(() => {
          x.forEach((b, E) => {
            let S = v.get(E);
            b.forEach((P) => Je(P, S));
          }),
            F.forEach((b, E) => {
              let S = Q.get(E);
              b.forEach((P) => Je(P, S));
            }),
            R.forEach((b) => {
              this.processLeaveNode(b);
            });
        });
      let ge = [],
        D = [];
      for (let b = this._namespaceList.length - 1; b >= 0; b--)
        this._namespaceList[b].drainQueuedTransitions(i).forEach((S) => {
          let P = S.player,
            $ = S.element;
          if ((ge.push(P), this.collectedEnterElements.length)) {
            let B = $[Se];
            if (B && B.setForMove) {
              if (
                B.previousTriggersValues &&
                B.previousTriggersValues.has(S.triggerName)
              ) {
                let ce = B.previousTriggersValues.get(S.triggerName),
                  J = this.statesByElement.get(S.element);
                if (J && J.has(S.triggerName)) {
                  let ue = J.get(S.triggerName);
                  (ue.value = ce), J.set(S.triggerName, ue);
                }
              }
              P.destroy();
              return;
            }
          }
          let K = !g || !this.driver.containsElement(g, $),
            q = Q.get($),
            re = v.get($),
            k = this._buildInstruction(S, s, re, q, K);
          if (k.errors && k.errors.length) {
            D.push(k);
            return;
          }
          if (K) {
            P.onStart(() => je($, k.fromStyles)),
              P.onDestroy(() => Oe($, k.toStyles)),
              r.push(P);
            return;
          }
          if (S.isFallbackTransition) {
            P.onStart(() => je($, k.fromStyles)),
              P.onDestroy(() => Oe($, k.toStyles)),
              r.push(P);
            return;
          }
          let ee = [];
          k.timelines.forEach((B) => {
            (B.stretchStartingKeyframe = !0),
              this.disabledNodes.has(B.element) || ee.push(B);
          }),
            (k.timelines = ee),
            s.append($, k.timelines);
          let Y = { instruction: k, player: P, element: $ };
          d.push(Y),
            k.queriedElements.forEach((B) => _e(u, B, []).push(P)),
            k.preStyleProps.forEach((B, ce) => {
              if (B.size) {
                let J = m.get(ce);
                J || m.set(ce, (J = new Set())), B.forEach((ue, j) => J.add(j));
              }
            }),
            k.postStyleProps.forEach((B, ce) => {
              let J = p.get(ce);
              J || p.set(ce, (J = new Set())), B.forEach((ue, j) => J.add(j));
            });
        });
      if (D.length) {
        let b = [];
        D.forEach((E) => {
          b.push(Js(E.triggerName, E.errors));
        }),
          ge.forEach((E) => E.destroy()),
          this.reportError(b);
      }
      let L = new Map(),
        W = new Map();
      d.forEach((b) => {
        let E = b.element;
        s.has(E) &&
          (W.set(E, E),
          this._beforeAnimationBuild(b.player.namespaceId, b.instruction, L));
      }),
        r.forEach((b) => {
          let E = b.element;
          this._getPreviousPlayers(
            E,
            !1,
            b.namespaceId,
            b.triggerName,
            null
          ).forEach((P) => {
            _e(L, E, []).push(P), P.destroy();
          });
        });
      let y = R.filter((b) => fo(b, m, p)),
        _ = new Map();
      po(_, this.driver, G, p, we).forEach((b) => {
        fo(b, m, p) && y.push(b);
      });
      let M = new Map();
      x.forEach((b, E) => {
        po(M, this.driver, new Set(b), m, Ct);
      }),
        y.forEach((b) => {
          let E = _.get(b),
            S = M.get(b);
          _.set(b, new Map([...(E?.entries() ?? []), ...(S?.entries() ?? [])]));
        });
      let X = [],
        de = [],
        xe = {};
      d.forEach((b) => {
        let { element: E, player: S, instruction: P } = b;
        if (s.has(E)) {
          if (f.has(E)) {
            S.onDestroy(() => Oe(E, P.toStyles)),
              (S.disabled = !0),
              S.overrideTotalTime(P.totalTime),
              r.push(S);
            return;
          }
          let $ = xe;
          if (W.size > 1) {
            let q = E,
              re = [];
            for (; (q = q.parentNode); ) {
              let k = W.get(q);
              if (k) {
                $ = k;
                break;
              }
              re.push(q);
            }
            re.forEach((k) => W.set(k, $));
          }
          let K = this._buildAnimation(S.namespaceId, P, L, c, M, _);
          if ((S.setRealPlayer(K), $ === xe)) X.push(S);
          else {
            let q = this.playersByElement.get($);
            q && q.length && (S.parentPlayer = Ne(q)), r.push(S);
          }
        } else
          je(E, P.fromStyles),
            S.onDestroy(() => Oe(E, P.toStyles)),
            de.push(S),
            f.has(E) && r.push(S);
      }),
        de.forEach((b) => {
          let E = c.get(b.element);
          if (E && E.length) {
            let S = Ne(E);
            b.setRealPlayer(S);
          }
        }),
        r.forEach((b) => {
          b.parentPlayer ? b.syncPlayerEvents(b.parentPlayer) : b.destroy();
        });
      for (let b = 0; b < R.length; b++) {
        let E = R[b],
          S = E[Se];
        if ((Je(E, Gn), S && S.hasAnimation)) continue;
        let P = [];
        if (u.size) {
          let K = u.get(E);
          K && K.length && P.push(...K);
          let q = this.driver.query(E, $n, !0);
          for (let re = 0; re < q.length; re++) {
            let k = u.get(q[re]);
            k && k.length && P.push(...k);
          }
        }
        let $ = P.filter((K) => !K.destroyed);
        $.length ? zr(this, E, $) : this.processLeaveNode(E);
      }
      return (
        (R.length = 0),
        X.forEach((b) => {
          this.players.push(b),
            b.onDone(() => {
              b.destroy();
              let E = this.players.indexOf(b);
              this.players.splice(E, 1);
            }),
            b.play();
        }),
        X
      );
    }
    afterFlush(o) {
      this._flushFns.push(o);
    }
    afterFlushAnimationsDone(o) {
      this._whenQuietFns.push(o);
    }
    _getPreviousPlayers(o, i, s, r, c) {
      let d = [];
      if (i) {
        let u = this.playersByQueriedElement.get(o);
        u && (d = u);
      } else {
        let u = this.playersByElement.get(o);
        if (u) {
          let m = !c || c == ut;
          u.forEach((p) => {
            p.queued || (!m && p.triggerName != r) || d.push(p);
          });
        }
      }
      return (
        (s || r) &&
          (d = d.filter(
            (u) => !((s && s != u.namespaceId) || (r && r != u.triggerName))
          )),
        d
      );
    }
    _beforeAnimationBuild(o, i, s) {
      let r = i.triggerName,
        c = i.element,
        d = i.isRemovalTransition ? void 0 : o,
        u = i.isRemovalTransition ? void 0 : r;
      for (let m of i.timelines) {
        let p = m.element,
          f = p !== c,
          g = _e(s, p, []);
        this._getPreviousPlayers(p, f, d, u, i.toState).forEach((x) => {
          let v = x.getRealPlayer();
          v.beforeDestroy && v.beforeDestroy(), x.destroy(), g.push(x);
        });
      }
      je(c, i.fromStyles);
    }
    _buildAnimation(o, i, s, r, c, d) {
      let u = i.triggerName,
        m = i.element,
        p = [],
        f = new Set(),
        g = new Set(),
        h = i.timelines.map((v) => {
          let C = v.element;
          f.add(C);
          let R = C[Se];
          if (R && R.removedBeforeQueried) return new Qe(v.duration, v.delay);
          let U = C !== m,
            G = Lr((s.get(C) || Ar).map((L) => L.getRealPlayer())).filter(
              (L) => {
                let W = L;
                return W.element ? W.element === C : !1;
              }
            ),
            Q = c.get(C),
            F = d.get(C),
            ge = ho(this._normalizer, v.keyframes, Q, F),
            D = this._buildPlayer(v, ge, G);
          if ((v.subTimeline && r && g.add(C), U)) {
            let L = new ft(o, u, C);
            L.setRealPlayer(D), p.push(L);
          }
          return D;
        });
      p.forEach((v) => {
        _e(this.playersByQueriedElement, v.element, []).push(v),
          v.onDone(() => Fr(this.playersByQueriedElement, v.element, v));
      }),
        f.forEach((v) => Ee(v, oo));
      let x = Ne(h);
      return (
        x.onDestroy(() => {
          f.forEach((v) => Je(v, oo)), Oe(m, i.toStyles);
        }),
        g.forEach((v) => {
          _e(r, v, []).push(x);
        }),
        x
      );
    }
    _buildPlayer(o, i, s) {
      return i.length > 0
        ? this.driver.animate(o.element, i, o.duration, o.delay, o.easing, s)
        : new Qe(o.duration, o.delay);
    }
  },
  ft = class {
    constructor(o, i, s) {
      (this.namespaceId = o),
        (this.triggerName = i),
        (this.element = s),
        (this._player = new Qe()),
        (this._containsRealPlayer = !1),
        (this._queuedCallbacks = new Map()),
        (this.destroyed = !1),
        (this.parentPlayer = null),
        (this.markedForDestroy = !1),
        (this.disabled = !1),
        (this.queued = !0),
        (this.totalTime = 0);
    }
    setRealPlayer(o) {
      this._containsRealPlayer ||
        ((this._player = o),
        this._queuedCallbacks.forEach((i, s) => {
          i.forEach((r) => ai(o, s, void 0, r));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(o.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(o) {
      this.totalTime = o;
    }
    syncPlayerEvents(o) {
      let i = this._player;
      i.triggerCallback && o.onStart(() => i.triggerCallback("start")),
        o.onDone(() => this.finish()),
        o.onDestroy(() => this.destroy());
    }
    _queueEvent(o, i) {
      _e(this._queuedCallbacks, o, []).push(i);
    }
    onDone(o) {
      this.queued && this._queueEvent("done", o), this._player.onDone(o);
    }
    onStart(o) {
      this.queued && this._queueEvent("start", o), this._player.onStart(o);
    }
    onDestroy(o) {
      this.queued && this._queueEvent("destroy", o), this._player.onDestroy(o);
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      (this.destroyed = !0), this._player.destroy();
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(o) {
      this.queued || this._player.setPosition(o);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(o) {
      let i = this._player;
      i.triggerCallback && i.triggerCallback(o);
    }
  };
function Fr(a, o, i) {
  let s = a.get(o);
  if (s) {
    if (s.length) {
      let r = s.indexOf(i);
      s.splice(r, 1);
    }
    s.length == 0 && a.delete(o);
  }
  return s;
}
function Rr(a) {
  return a ?? null;
}
function Jt(a) {
  return a && a.nodeType === 1;
}
function Br(a) {
  return a == "start" || a == "done";
}
function mo(a, o) {
  let i = a.style.display;
  return (a.style.display = o ?? "none"), i;
}
function po(a, o, i, s, r) {
  let c = [];
  i.forEach((m) => c.push(mo(m)));
  let d = [];
  s.forEach((m, p) => {
    let f = new Map();
    m.forEach((g) => {
      let h = o.computeStyle(p, g, r);
      f.set(g, h), (!h || h.length == 0) && ((p[Se] = Ir), d.push(p));
    }),
      a.set(p, f);
  });
  let u = 0;
  return i.forEach((m) => mo(m, c[u++])), d;
}
function go(a, o) {
  let i = new Map();
  if ((a.forEach((u) => i.set(u, [])), o.length == 0)) return i;
  let s = 1,
    r = new Set(o),
    c = new Map();
  function d(u) {
    if (!u) return s;
    let m = c.get(u);
    if (m) return m;
    let p = u.parentNode;
    return i.has(p) ? (m = p) : r.has(p) ? (m = s) : (m = d(p)), c.set(u, m), m;
  }
  return (
    o.forEach((u) => {
      let m = d(u);
      m !== s && i.get(m).push(u);
    }),
    i
  );
}
function Ee(a, o) {
  a.classList?.add(o);
}
function Je(a, o) {
  a.classList?.remove(o);
}
function zr(a, o, i) {
  Ne(i).onDone(() => a.processLeaveNode(o));
}
function Lr(a) {
  let o = [];
  return Oo(a, o), o;
}
function Oo(a, o) {
  for (let i = 0; i < a.length; i++) {
    let s = a[i];
    s instanceof Nn ? Oo(s.players, o) : o.push(s);
  }
}
function jr(a, o) {
  let i = Object.keys(a),
    s = Object.keys(o);
  if (i.length != s.length) return !1;
  for (let r = 0; r < i.length; r++) {
    let c = i[r];
    if (!o.hasOwnProperty(c) || a[c] !== o[c]) return !1;
  }
  return !0;
}
function fo(a, o, i) {
  let s = i.get(a);
  if (!s) return !1;
  let r = o.get(a);
  return r ? s.forEach((c) => r.add(c)) : o.set(a, s), i.delete(a), !0;
}
var Ze = class {
  constructor(o, i, s) {
    (this._driver = i),
      (this._normalizer = s),
      (this._triggerCache = {}),
      (this.onRemovalComplete = (r, c) => {}),
      (this._transitionEngine = new oi(o.body, i, s)),
      (this._timelineEngine = new ni(o.body, i, s)),
      (this._transitionEngine.onRemovalComplete = (r, c) =>
        this.onRemovalComplete(r, c));
  }
  registerTrigger(o, i, s, r, c) {
    let d = o + "-" + r,
      u = this._triggerCache[d];
    if (!u) {
      let m = [],
        p = [],
        f = So(this._driver, c, m, p);
      if (m.length) throw js(r, m);
      p.length && void 0,
        (u = wr(r, f, this._normalizer)),
        (this._triggerCache[d] = u);
    }
    this._transitionEngine.registerTrigger(i, r, u);
  }
  register(o, i) {
    this._transitionEngine.register(o, i);
  }
  destroy(o, i) {
    this._transitionEngine.destroy(o, i);
  }
  onInsert(o, i, s, r) {
    this._transitionEngine.insertNode(o, i, s, r);
  }
  onRemove(o, i, s) {
    this._transitionEngine.removeNode(o, i, s);
  }
  disableAnimations(o, i) {
    this._transitionEngine.markElementAsDisabled(o, i);
  }
  process(o, i, s, r) {
    if (s.charAt(0) == "@") {
      let [c, d] = no(s),
        u = r;
      this._timelineEngine.command(c, i, d, u);
    } else this._transitionEngine.trigger(o, i, s, r);
  }
  listen(o, i, s, r, c) {
    if (s.charAt(0) == "@") {
      let [d, u] = no(s);
      return this._timelineEngine.listen(d, i, u, c);
    }
    return this._transitionEngine.listen(o, i, s, r, c);
  }
  flush(o = -1) {
    this._transitionEngine.flush(o);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(o) {
    this._transitionEngine.afterFlushAnimationsDone(o);
  }
};
function qr(a, o) {
  let i = null,
    s = null;
  return (
    Array.isArray(o) && o.length
      ? ((i = Un(o[0])), o.length > 1 && (s = Un(o[o.length - 1])))
      : o instanceof Map && (i = Un(o)),
    i || s ? new si(a, i, s) : null
  );
}
var si = class a {
  static {
    this.initialStylesByElement = new WeakMap();
  }
  constructor(o, i, s) {
    (this._element = o),
      (this._startStyles = i),
      (this._endStyles = s),
      (this._state = 0);
    let r = a.initialStylesByElement.get(o);
    r || a.initialStylesByElement.set(o, (r = new Map())),
      (this._initialStyles = r);
  }
  start() {
    this._state < 1 &&
      (this._startStyles &&
        Oe(this._element, this._startStyles, this._initialStyles),
      (this._state = 1));
  }
  finish() {
    this.start(),
      this._state < 2 &&
        (Oe(this._element, this._initialStyles),
        this._endStyles &&
          (Oe(this._element, this._endStyles), (this._endStyles = null)),
        (this._state = 1));
  }
  destroy() {
    this.finish(),
      this._state < 3 &&
        (a.initialStylesByElement.delete(this._element),
        this._startStyles &&
          (je(this._element, this._startStyles), (this._endStyles = null)),
        this._endStyles &&
          (je(this._element, this._endStyles), (this._endStyles = null)),
        Oe(this._element, this._initialStyles),
        (this._state = 3));
  }
};
function Un(a) {
  let o = null;
  return (
    a.forEach((i, s) => {
      Hr(s) && ((o = o || new Map()), o.set(s, i));
    }),
    o
  );
}
function Hr(a) {
  return a === "display" || a === "position";
}
var an = class {
    constructor(o, i, s, r) {
      (this.element = o),
        (this.keyframes = i),
        (this.options = s),
        (this._specialStyles = r),
        (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._initialized = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this.time = 0),
        (this.parentPlayer = null),
        (this.currentSnapshot = new Map()),
        (this._duration = s.duration),
        (this._delay = s.delay || 0),
        (this.time = this._duration + this._delay);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((o) => o()),
        (this._onDoneFns = []));
    }
    init() {
      this._buildPlayer(), this._preparePlayerBeforeStart();
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let o = this.keyframes;
      (this.domPlayer = this._triggerWebAnimation(
        this.element,
        o,
        this.options
      )),
        (this._finalKeyframe = o.length ? o[o.length - 1] : new Map());
      let i = () => this._onFinish();
      this.domPlayer.addEventListener("finish", i),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", i);
        });
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(o) {
      let i = [];
      return (
        o.forEach((s) => {
          i.push(Object.fromEntries(s));
        }),
        i
      );
    }
    _triggerWebAnimation(o, i, s) {
      return o.animate(this._convertKeyframesToObject(i), s);
    }
    onStart(o) {
      this._originalOnStartFns.push(o), this._onStartFns.push(o);
    }
    onDone(o) {
      this._originalOnDoneFns.push(o), this._onDoneFns.push(o);
    }
    onDestroy(o) {
      this._onDestroyFns.push(o);
    }
    play() {
      this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach((o) => o()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play();
    }
    pause() {
      this.init(), this.domPlayer.pause();
    }
    finish() {
      this.init(),
        this._specialStyles && this._specialStyles.finish(),
        this._onFinish(),
        this.domPlayer.finish();
    }
    reset() {
      this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      this.reset(), this.play();
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach((o) => o()),
        (this._onDestroyFns = []));
    }
    setPosition(o) {
      this.domPlayer === void 0 && this.init(),
        (this.domPlayer.currentTime = o * this.time);
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let o = new Map();
      this.hasStarted() &&
        this._finalKeyframe.forEach((s, r) => {
          r !== "offset" && o.set(r, this._finished ? s : mi(this.element, r));
        }),
        (this.currentSnapshot = o);
    }
    triggerCallback(o) {
      let i = o === "start" ? this._onStartFns : this._onDoneFns;
      i.forEach((s) => s()), (i.length = 0);
    }
  },
  ln = class {
    validateStyleProperty(o) {
      return !0;
    }
    validateAnimatableStyleProperty(o) {
      return !0;
    }
    containsElement(o, i) {
      return _o(o, i);
    }
    getParentElement(o) {
      return ci(o);
    }
    query(o, i, s) {
      return bo(o, i, s);
    }
    computeStyle(o, i, s) {
      return mi(o, i);
    }
    animate(o, i, s, r, c, d = []) {
      let u = r == 0 ? "both" : "forwards",
        m = { duration: s, delay: r, fill: u };
      c && (m.easing = c);
      let p = new Map(),
        f = d.filter((x) => x instanceof an);
      lr(s, r) &&
        f.forEach((x) => {
          x.currentSnapshot.forEach((v, C) => p.set(C, v));
        });
      let g = sr(i).map((x) => new Map(x));
      g = cr(o, g, p);
      let h = qr(o, g);
      return new an(o, g, m, h);
    }
  };
var Zt = "@",
  Po = "@.disabled",
  cn = class {
    constructor(o, i, s, r) {
      (this.namespaceId = o),
        (this.delegate = i),
        (this.engine = s),
        (this._onDestroy = r),
        (this.ɵtype = 0);
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(o) {
      this.delegate.destroyNode?.(o);
    }
    destroy() {
      this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.();
    }
    createElement(o, i) {
      return this.delegate.createElement(o, i);
    }
    createComment(o) {
      return this.delegate.createComment(o);
    }
    createText(o) {
      return this.delegate.createText(o);
    }
    appendChild(o, i) {
      this.delegate.appendChild(o, i),
        this.engine.onInsert(this.namespaceId, i, o, !1);
    }
    insertBefore(o, i, s, r = !0) {
      this.delegate.insertBefore(o, i, s),
        this.engine.onInsert(this.namespaceId, i, o, r);
    }
    removeChild(o, i, s) {
      this.parentNode(i) &&
        this.engine.onRemove(this.namespaceId, i, this.delegate);
    }
    selectRootElement(o, i) {
      return this.delegate.selectRootElement(o, i);
    }
    parentNode(o) {
      return this.delegate.parentNode(o);
    }
    nextSibling(o) {
      return this.delegate.nextSibling(o);
    }
    setAttribute(o, i, s, r) {
      this.delegate.setAttribute(o, i, s, r);
    }
    removeAttribute(o, i, s) {
      this.delegate.removeAttribute(o, i, s);
    }
    addClass(o, i) {
      this.delegate.addClass(o, i);
    }
    removeClass(o, i) {
      this.delegate.removeClass(o, i);
    }
    setStyle(o, i, s, r) {
      this.delegate.setStyle(o, i, s, r);
    }
    removeStyle(o, i, s) {
      this.delegate.removeStyle(o, i, s);
    }
    setProperty(o, i, s) {
      i.charAt(0) == Zt && i == Po
        ? this.disableAnimations(o, !!s)
        : this.delegate.setProperty(o, i, s);
    }
    setValue(o, i) {
      this.delegate.setValue(o, i);
    }
    listen(o, i, s) {
      return this.delegate.listen(o, i, s);
    }
    disableAnimations(o, i) {
      this.engine.disableAnimations(o, i);
    }
  },
  ri = class extends cn {
    constructor(o, i, s, r, c) {
      super(i, s, r, c), (this.factory = o), (this.namespaceId = i);
    }
    setProperty(o, i, s) {
      i.charAt(0) == Zt
        ? i.charAt(1) == "." && i == Po
          ? ((s = s === void 0 ? !0 : !!s), this.disableAnimations(o, s))
          : this.engine.process(this.namespaceId, o, i.slice(1), s)
        : this.delegate.setProperty(o, i, s);
    }
    listen(o, i, s) {
      if (i.charAt(0) == Zt) {
        let r = Vr(o),
          c = i.slice(1),
          d = "";
        return (
          c.charAt(0) != Zt && ([c, d] = Ur(c)),
          this.engine.listen(this.namespaceId, r, c, d, (u) => {
            let m = u._data || -1;
            this.factory.scheduleListenerCallback(m, s, u);
          })
        );
      }
      return this.delegate.listen(o, i, s);
    }
  };
function Vr(a) {
  switch (a) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return a;
  }
}
function Ur(a) {
  let o = a.indexOf("."),
    i = a.substring(0, o),
    s = a.slice(o + 1);
  return [i, s];
}
var dn = class {
  constructor(o, i, s) {
    (this.delegate = o),
      (this.engine = i),
      (this._zone = s),
      (this._currentId = 0),
      (this._microtaskId = 1),
      (this._animationCallbacksBuffer = []),
      (this._rendererCache = new Map()),
      (this._cdRecurDepth = 0),
      (i.onRemovalComplete = (r, c) => {
        c?.removeChild(null, r);
      });
  }
  createRenderer(o, i) {
    let s = "",
      r = this.delegate.createRenderer(o, i);
    if (!o || !i?.data?.animation) {
      let p = this._rendererCache,
        f = p.get(r);
      if (!f) {
        let g = () => p.delete(r);
        (f = new cn(s, r, this.engine, g)), p.set(r, f);
      }
      return f;
    }
    let c = i.id,
      d = i.id + "-" + this._currentId;
    this._currentId++, this.engine.register(d, o);
    let u = (p) => {
      Array.isArray(p)
        ? p.forEach(u)
        : this.engine.registerTrigger(c, d, o, p.name, p);
    };
    return i.data.animation.forEach(u), new ri(this, d, r, this.engine);
  }
  begin() {
    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(o, i, s) {
    if (o >= 0 && o < this._microtaskId) {
      this._zone.run(() => i(s));
      return;
    }
    let r = this._animationCallbacksBuffer;
    r.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          r.forEach((c) => {
            let [d, u] = c;
            d(u);
          }),
            (this._animationCallbacksBuffer = []);
        });
      }),
      r.push([i, s]);
  }
  end() {
    this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask(), this.engine.flush(this._microtaskId);
        }),
      this.delegate.end && this.delegate.end();
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};
var $r = (() => {
  class a extends Ze {
    constructor(i, s, r) {
      super(i, s, r);
    }
    ngOnDestroy() {
      this.flush();
    }
    static {
      this.ɵfac = function (s) {
        return new (s || a)(_t($e), _t(qe), _t(He));
      };
    }
    static {
      this.ɵprov = Me({ token: a, factory: a.ɵfac });
    }
  }
  return a;
})();
function Wr() {
  return new tn();
}
function Qr(a, o, i) {
  return new dn(a, o, i);
}
var Do = [
    { provide: He, useFactory: Wr },
    { provide: Ze, useClass: $r },
    { provide: Pi, useFactory: Qr, deps: [Bi, Ze, Ue] },
  ],
  To = [
    { provide: qe, useFactory: () => new ln() },
    { provide: vn, useValue: "BrowserAnimations" },
    ...Do,
  ],
  Kr = [
    { provide: qe, useClass: di },
    { provide: vn, useValue: "NoopAnimations" },
    ...Do,
  ],
  ko = (() => {
    class a {
      static withConfig(i) {
        return { ngModule: a, providers: i.disableAnimations ? Kr : To };
      }
      static {
        this.ɵfac = function (s) {
          return new (s || a)();
        };
      }
      static {
        this.ɵmod = Re({ type: a });
      }
      static {
        this.ɵinj = Fe({ providers: To, imports: [yt] });
      }
    }
    return a;
  })();
var un = class a {
  static ɵfac = function (i) {
    return new (i || a)();
  };
  static ɵmod = Re({ type: a, bootstrap: [Wt] });
  static ɵinj = Fe({
    imports: [
      yt,
      Ht,
      $i,
      ji,
      Ri,
      ko,
      Gi.forRoot({
        timeOut: 3e3,
        positionClass: "toast-top-right",
        preventDuplicates: !0,
        progressBar: !0,
      }),
    ],
  });
};
zi()
  .bootstrapModule(un, { ngZoneEventCoalescing: !0 })
  .catch((a) => console.error(a));
