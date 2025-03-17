(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [602],
  {
    312: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var a = r(483),
        s = r(587),
        n = r(948),
        c = r(723);
      function i() {
        const { video: e } = (0, n.Us)();
        return (
          (0, a.useEffect)(() => {
            async function t() {
              await (0, s.Zl)(s.Ts), a();
            }
            const r = () => {
                var r;
                document.hidden
                  ? ((0, s.OI)(),
                    null === (r = document.querySelector("canvas")) ||
                      void 0 === r ||
                      r.remove(),
                    cancelAnimationFrame(e.current))
                  : t();
              },
              a = () => {
                e.current = requestAnimationFrame(a);
              };
            return (
              document.addEventListener("visibilitychange", r),
              t(),
              () => {
                var t;
                document.removeEventListener("visibilitychange", r),
                  (0, s.OI)(),
                  null === (t = document.querySelector("canvas")) ||
                    void 0 === t ||
                    t.remove(),
                  cancelAnimationFrame(e.current);
              }
            );
          }, [e]),
          (0, c.jsx)("div", {
            className: "video_container",
            children: (0, c.jsx)("video", {
              id: "facecam",
              width: "680",
              height: "560",
              className: "",
              autoPlay: !0,
              muted: !0,
            }),
          })
        );
      }
    },
    208: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => s, g: () => n });
      const a = r(826).A.create({
        baseURL:
          {
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }.API_URL || "http://localhost:8000",
        timeout: 1e3,
        headers: { "X-Custom-Header": "foobar" },
      });
      async function s(e) {
        try {
          return (await a.post("/login", { fD: e })).data;
        } catch (t) {
          return null;
        }
      }
      async function n(e) {
        try {
          return (await a.post("/register", e)).data;
        } catch (t) {
          return null;
        }
      }
    },
    58: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => l });
      var a = r(483),
        s = r(312),
        n = r(948),
        c = r(723);
      function i() {
        const { user: e } = (0, n.Us)();
        return (0, c.jsx)("div", {
          className: "Usercard",
          children:
            null === e
              ? (0, c.jsx)("h2", { children: "No User Found" })
              : (0, c.jsxs)(c.Fragment, {
                  children: [
                    (0, c.jsx)("h2", { children: "User Card" }),
                    (0, c.jsx)("img", { src: e.img, alt: "User" }),
                    (0, c.jsxs)("p", { children: ["Name: ", e.name] }),
                    (0, c.jsxs)("p", { children: ["Email: ", e.email] }),
                    (0, c.jsxs)("p", { children: ["Roll No: ", e.rollNo] }),
                  ],
                }),
        });
      }
      var o = r(208),
        d = r(587);
      function l() {
        const { setUser: e, setError: t, video: r } = (0, n.Us)();
        return (
          (0, a.useEffect)(() => {
            const a = setInterval(async () => {
              if (r)
                try {
                  const r = await (async function () {
                    const e = await (0, d.tN)();
                    if (!e) return !1;
                    const t = await (0, d.yZ)(e);
                    if (!t || 0 === t.length) return;
                    return await (0, o.w)(t);
                  })();
                  r && r.user
                    ? (e(r.user),
                      t({
                        message: "User found",
                        type: "success",
                        status: 200,
                      }),
                      setTimeout(() => {
                        e(null);
                      }, 5e3))
                    : r &&
                      r.message &&
                      (e(null),
                      t({ message: r.message, type: "error", status: 404 }));
                } catch (a) {
                  t(a.message);
                }
            }, 1e3);
            return () => clearInterval(a);
          }, [r, t, e]),
          (0, c.jsx)(c.Fragment, {
            children: (0, c.jsxs)("div", {
              className: "Login",
              children: [
                (0, c.jsx)("h1", { children: "Login" }),
                (0, c.jsxs)("div", {
                  className: "login__container",
                  children: [(0, c.jsx)(s.A, {}), (0, c.jsx)(i, {})],
                }),
              ],
            }),
          })
        );
      }
    },
    587: (e, t, r) => {
      "use strict";
      r.d(t, {
        Cb: () => u,
        Ng: () => h,
        OI: () => d,
        Ts: () => c,
        Zl: () => n,
        tN: () => l,
        yZ: () => m,
      });
      var a = r(444),
        s = document.getElementById("facecam");
      const n = async (e) => {
          const t = "./models";
          try {
            await Promise.all([
              a.B0.tinyFaceDetector.loadFromUri(t),
              a.B0.faceLandmark68Net.loadFromUri(t),
              a.B0.faceRecognitionNet.loadFromUri(t),
              a.B0.ssdMobilenetv1.loadFromUri(t),
            ])
              .then(async () => await e())
              .catch((e) => {
                console.error("Error loading models:", e);
              });
          } catch (r) {
            console.error("Error loading models:", r);
          }
        },
        c = async () => {
          if ((await i(), s))
            return (
              s.addEventListener("play", async () => {
                await o();
              }),
              s
            );
        },
        i = async () => {
          const e = { video: !0 };
          try {
            ((e) => {
              (s = document.getElementById("facecam")).srcObject = e;
            })(await navigator.mediaDevices.getUserMedia(e));
          } catch (t) {
            ((e) => {
              console.error("Error accessing media devices.", e);
            })(t);
          }
        },
        o = async () => {
          if (!s) return;
          const e = a.pL(s);
          document.querySelectorAll("canvas").length > 0 ||
            ((s.style.position = "relative"),
            (s.style.zIndex = "1"),
            (e.style.position = "absolute"),
            (e.style.zIndex = "1000"),
            (e.style.top = s.offsetTop + "px"),
            (e.style.left = s.offsetLeft + "px"),
            document.body.append(e));
          const t = { width: s.width, height: s.height };
          a.L0(e, t),
            setInterval(async () => {
              const r = await a
                  .R(s, new a.ex())
                  .withFaceLandmarks()
                  .withFaceDescriptors(),
                n = a.Lz(r, t);
              e.getContext("2d").clearRect(0, 0, e.width, e.height),
                a.$2.drawDetections(e, n);
            }, 200);
        },
        d = () => {
          if (s && s.srcObject) {
            s.srcObject.getTracks().forEach((e) => e.stop());
          }
        },
        l = async () => {
          if (!s) return;
          Array.from(document.querySelectorAll("canvas")).forEach((e) =>
            e.remove()
          );
          const e = document.createElement("canvas");
          (e.width = s.videoWidth), (e.height = s.videoHeight);
          return (
            e.getContext("2d").drawImage(s, 0, 0, s.videoWidth, s.videoHeight),
            e.toDataURL("image/jpeg")
          );
        },
        u = async (e) => {
          if (!e) return;
          const t = await a.aK(e),
            r = await a
              .R(t, new a.ex())
              .withFaceLandmarks()
              .withFaceDescriptors();
          if (!r || 0 === r.length) return;
          return r.map((e) => ({
            descriptor: e.descriptor,
            landmarks: e.landmarks,
          }));
        },
        m = async () => {
          if (!s) return;
          const e = await a
            .R(s, new a.ex())
            .withFaceLandmarks()
            .withFaceDescriptors();
          if (!e || 0 === e.length) return;
          return e.map((e) => ({
            descriptor: e.descriptor,
            landmarks: e.landmarks,
          }));
        },
        h = async (e) => y(e),
        y = async (e) => {
          const t = a.pL(e);
          document.querySelectorAll("canvas").length > 0 ||
            ((e.style.zIndex = "1"),
            (t.style.position = "absolute"),
            (t.style.zIndex = "1000"),
            (t.style.top = e.offsetTop + "px"),
            (t.style.left = e.offsetLeft + "px"));
          const r = { width: e.width, height: e.height };
          a.L0(t, r);
          const s = await a
            .R(e, new a.ex())
            .withFaceLandmarks()
            .withFaceDescriptors();
          if (!s || 0 === s.length) return !1;
          const n = a.Lz(s, r);
          return (
            t.getContext("2d").clearRect(0, 0, t.width, t.height),
            a.$2.drawDetections(t, n),
            !0
          );
        };
    },
    82: () => {},
    318: () => {},
    745: () => {},
  },
]);
//# sourceMappingURL=602.f3d228a2.chunk.js.map
