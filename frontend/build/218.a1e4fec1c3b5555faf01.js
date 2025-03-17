"use strict";
(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [218],
  {
    218: (e, t, n) => {
      n.r(t), n.d(t, { default: () => h });
      var r = n(15),
        l = n.n(r),
        a = n(331),
        u = n(822);
      class s extends r.Component {
        constructor(e) {
          super(e), (this.state = { hasError: !1 });
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          console.error("Error caught in ErrorBoundary: ", e, t);
        }
        render() {
          return this.state.hasError
            ? l().createElement("div", null, "Something went wrong.")
            : this.props.children;
        }
      }
      const c = s,
        o = l().lazy(() => n.e(45).then(n.bind(n, 45))),
        m = l().lazy(() => n.e(755).then(n.bind(n, 755))),
        i = l().lazy(() => n.e(813).then(n.bind(n, 813))),
        E = l().lazy(() => n.e(262).then(n.bind(n, 262))),
        d = l().lazy(() => n.e(394).then(n.bind(n, 394))),
        h = function () {
          const [e, t] = (0, r.useState)(null),
            [n, s] = (0, r.useState)(null),
            h = l().useRef(null),
            p = { user: e, setUser: t, err: n, setError: s, video: h };
          return (
            (0, r.useEffect)(() => {
              n &&
                setTimeout(() => {
                  s(null);
                }, 3e3);
            }, [n]),
            l().createElement(
              c,
              null,
              l().createElement(
                l().Suspense,
                { fallback: l().createElement("div", null, "Loading...") },
                l().createElement(
                  "div",
                  { className: "App" },
                  l().createElement(
                    a.Dv,
                    { values: p },
                    l().createElement(d, null),
                    l().createElement(E, null),
                    l().createElement(
                      "main",
                      { id: "main" },
                      l().createElement(
                        u.Routes,
                        null,
                        l().createElement(u.Route, {
                          path: "/",
                          element: l().createElement(o, null),
                        }),
                        l().createElement(u.Route, {
                          path: "/login",
                          element: l().createElement(i, null),
                        }),
                        l().createElement(u.Route, {
                          path: "/register",
                          element: l().createElement(m, null),
                        }),
                        l().createElement(u.Route, {
                          path: "*",
                          element: l().createElement("div", null, "Not Found"),
                        })
                      )
                    )
                  )
                )
              )
            )
          );
        };
    },
    331: (e, t, n) => {
      n.d(t, { Dv: () => u, Us: () => s });
      var r = n(15),
        l = n.n(r);
      const a = (0, r.createContext)(),
        u = (e) => {
          let { children: t, values: n } = e;
          return l().createElement(a.Provider, { value: n }, t);
        },
        s = () => (0, r.useContext)(a);
    },
  },
]);
