"use strict";
(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [294],
  {
    294: (e, r, s) => {
      s.r(r), s.d(r, { default: () => j });
      var n = s(483),
        t = s(948),
        l = s(376),
        a = s(723);
      class i extends n.Component {
        constructor(e) {
          super(e), (this.state = { hasError: !1 });
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, r) {
          console.error("Error caught in ErrorBoundary: ", e, r);
        }
        render() {
          return this.state.hasError
            ? (0, a.jsx)("div", { children: "Something went wrong." })
            : this.props.children;
        }
      }
      const h = i,
        o = n.lazy(() => s.e(832).then(s.bind(s, 832))),
        d = n.lazy(() =>
          Promise.all([s.e(493), s.e(471)]).then(s.bind(s, 117))
        ),
        c = n.lazy(() => Promise.all([s.e(493), s.e(602)]).then(s.bind(s, 58))),
        u = n.lazy(() => s.e(687).then(s.bind(s, 687))),
        x = n.lazy(() => s.e(594).then(s.bind(s, 594)));
      const j = function () {
        const [e, r] = (0, n.useState)(null),
          [s, i] = (0, n.useState)(null),
          j = n.useRef(null),
          p = { user: e, setUser: r, err: s, setError: i, video: j };
        return (
          (0, n.useEffect)(() => {
            s &&
              setTimeout(() => {
                i(null);
              }, 3e3);
          }, [s]),
          (0, a.jsx)(h, {
            children: (0, a.jsx)(n.Suspense, {
              fallback: (0, a.jsx)("div", { children: "Loading..." }),
              children: (0, a.jsx)("div", {
                className: "App",
                children: (0, a.jsxs)(t.Dv, {
                  values: p,
                  children: [
                    (0, a.jsx)(x, {}),
                    (0, a.jsx)(u, {}),
                    (0, a.jsx)("main", {
                      id: "main",
                      children: (0, a.jsxs)(l.BV, {
                        children: [
                          (0, a.jsx)(l.qh, {
                            path: "/",
                            element: (0, a.jsx)(o, {}),
                          }),
                          (0, a.jsx)(l.qh, {
                            path: "/login",
                            element: (0, a.jsx)(c, {}),
                          }),
                          (0, a.jsx)(l.qh, {
                            path: "/register",
                            element: (0, a.jsx)(d, {}),
                          }),
                          (0, a.jsx)(l.qh, {
                            path: "*",
                            element: (0, a.jsx)("div", {
                              children: "Not Found",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
    },
    948: (e, r, s) => {
      s.d(r, { Dv: () => a, Us: () => i });
      var n = s(483),
        t = s(723);
      const l = (0, n.createContext)(),
        a = (e) => {
          let { children: r, values: s } = e;
          return (0, t.jsx)(l.Provider, { value: s, children: r });
        },
        i = () => (0, n.useContext)(l);
    },
  },
]);
//# sourceMappingURL=294.3f4e7674.chunk.js.map
