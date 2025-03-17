"use strict";
(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [45],
  {
    45: (e, l, n) => {
      n.r(l), n.d(l, { default: () => r });
      var t = n(15),
        u = n.n(t),
        a = n(331);
      const r = () => {
        const e = (0, a.Us)();
        return u().createElement(
          "div",
          null,
          u().createElement("h1", null, "Home"),
          u().createElement("p", null, "Welcome, ", e.user && e.user.name)
        );
      };
    },
  },
]);
