"use strict";
(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [394],
  {
    394: (e, a, r) => {
      r.r(a), r.d(a, { default: () => n });
      var l = r(15),
        s = r.n(l),
        t = r(331);
      function n() {
        const { err: e } = (0, t.Us)();
        return s().createElement(
          s().Fragment,
          null,
          e &&
            s().createElement(
              "div",
              { className: "error " + e.type },
              "success" === e.type
                ? s().createElement(
                    "span",
                    { role: "img", "aria-label": "success" },
                    "✅"
                  )
                : s().createElement(
                    "span",
                    { role: "img", "aria-label": "danger" },
                    "❌"
                  ),
              s().createElement("p", null, e.message)
            )
        );
      }
    },
  },
]);
