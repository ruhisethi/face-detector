"use strict";
(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [262],
  {
    262: (e, t, l) => {
      l.r(t), l.d(t, { default: () => c });
      var n = l(15),
        a = l.n(n),
        r = l(822);
      function c() {
        return a().createElement(
          "nav",
          { className: "navbar" },
          a().createElement(
            "ul",
            null,
            a().createElement(
              "li",
              null,
              a().createElement(r.Link, { to: "/" }, "Home")
            ),
            a().createElement(
              "li",
              null,
              a().createElement(r.Link, { to: "/login" }, "Login")
            ),
            a().createElement(
              "li",
              null,
              a().createElement(r.Link, { to: "/register" }, "Register")
            )
          )
        );
      }
    },
  },
]);
