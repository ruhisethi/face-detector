(() => {
  "use strict";
  var e,
    r,
    t = {
      938: (e) => {
        e.exports = require("axios");
      },
      426: (e) => {
        e.exports = require("face-api.js");
      },
      15: (e) => {
        e.exports = require("react");
      },
      822: (e) => {
        e.exports = require("react-router-dom");
      },
    },
    a = {};
  function o(e) {
    var r = a[e];
    if (void 0 !== r) return r.exports;
    var n = (a[e] = { exports: {} });
    return t[e](n, n.exports, o), n.exports;
  }
  (o.m = t),
    (o.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return o.d(r, { a: r }), r;
    }),
    (o.d = (e, r) => {
      for (var t in r)
        o.o(r, t) &&
          !o.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((r, t) => (o.f[t](e, r), r), []))),
    (o.u = (e) =>
      e +
      "." +
      {
        45: "1173a68e81dcf45e822d",
        218: "a1e4fec1c3b5555faf01",
        262: "d59b6a03751e64a3d6de",
        394: "063e113c1ab3e63a641f",
        755: "9016f3d1882e03233e5b",
        813: "03c6719c696018212ebb",
      }[e] +
      ".js"),
    (o.miniCssF = (e) => {}),
    (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = "myapp:"),
    (o.l = (t, a, n, l) => {
      if (e[t]) e[t].push(a);
      else {
        var i, u;
        if (void 0 !== n)
          for (
            var d = document.getElementsByTagName("script"), c = 0;
            c < d.length;
            c++
          ) {
            var s = d[c];
            if (
              s.getAttribute("src") == t ||
              s.getAttribute("data-webpack") == r + n
            ) {
              i = s;
              break;
            }
          }
        i ||
          ((u = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          o.nc && i.setAttribute("nonce", o.nc),
          i.setAttribute("data-webpack", r + n),
          (i.src = t)),
          (e[t] = [a]);
        var p = (r, a) => {
            (i.onerror = i.onload = null), clearTimeout(f);
            var o = e[t];
            if (
              (delete e[t],
              i.parentNode && i.parentNode.removeChild(i),
              o && o.forEach((e) => e(a)),
              r)
            )
              return r(a);
          },
          f = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = p.bind(null, i.onerror)),
          (i.onload = p.bind(null, i.onload)),
          u && document.head.appendChild(i);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.p = "/"),
    (() => {
      var e = { 792: 0 };
      o.f.j = (r, t) => {
        var a = o.o(e, r) ? e[r] : void 0;
        if (0 !== a)
          if (a) t.push(a[2]);
          else {
            var n = new Promise((t, o) => (a = e[r] = [t, o]));
            t.push((a[2] = n));
            var l = o.p + o.u(r),
              i = new Error();
            o.l(
              l,
              (t) => {
                if (o.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var n = t && ("load" === t.type ? "missing" : t.type),
                    l = t && t.target && t.target.src;
                  (i.message =
                    "Loading chunk " + r + " failed.\n(" + n + ": " + l + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = n),
                    (i.request = l),
                    a[1](i);
                }
              },
              "chunk-" + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var a,
            n,
            l = t[0],
            i = t[1],
            u = t[2],
            d = 0;
          if (l.some((r) => 0 !== e[r])) {
            for (a in i) o.o(i, a) && (o.m[a] = i[a]);
            u && u(o);
          }
          for (r && r(t); d < l.length; d++)
            (n = l[d]), o.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
        },
        t = (self.webpackChunkmyapp = self.webpackChunkmyapp || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
  var n = o(15),
    l = o.n(n);
  const i = require("react-dom/client");
  var u = o.n(i),
    d = o(822);
  const c = (0, n.lazy)(() => o.e(218).then(o.bind(o, 218)));
  u()
    .createRoot(document.getElementById("root"))
    .render(
      l().createElement(
        l().StrictMode,
        null,
        l().createElement(
          d.BrowserRouter,
          null,
          l().createElement(
            n.Suspense,
            { fallback: l().createElement("div", null, "Loading...") },
            l().createElement(c, null)
          )
        )
      )
    );
})();
