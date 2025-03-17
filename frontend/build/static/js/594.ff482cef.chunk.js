"use strict";
(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [594],
  {
    594: (e, s, r) => {
      r.r(s), r.d(s, { default: () => l });
      r(483);
      var a = r(948),
        c = r(723);
      function l() {
        const { err: e } = (0, a.Us)();
        return (0, c.jsx)(c.Fragment, {
          children:
            e &&
            (0, c.jsxs)("div", {
              className: "error " + e.type,
              children: [
                "success" === e.type
                  ? (0, c.jsx)("span", {
                      role: "img",
                      "aria-label": "success",
                      children: "\u2705",
                    })
                  : (0, c.jsx)("span", {
                      role: "img",
                      "aria-label": "danger",
                      children: "\u274c",
                    }),
                (0, c.jsx)("p", { children: e.message }),
              ],
            }),
        });
      }
    },
  },
]);
//# sourceMappingURL=594.ff482cef.chunk.js.map
