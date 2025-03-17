(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [471],
  {
    312: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      var s = a(483),
        n = a(587),
        r = a(948),
        c = a(723);
      function i() {
        const { video: e } = (0, r.Us)();
        return (
          (0, s.useEffect)(() => {
            async function t() {
              await (0, n.Zl)(n.Ts), s();
            }
            const a = () => {
                var a;
                document.hidden
                  ? ((0, n.OI)(),
                    null === (a = document.querySelector("canvas")) ||
                      void 0 === a ||
                      a.remove(),
                    cancelAnimationFrame(e.current))
                  : t();
              },
              s = () => {
                e.current = requestAnimationFrame(s);
              };
            return (
              document.addEventListener("visibilitychange", a),
              t(),
              () => {
                var t;
                document.removeEventListener("visibilitychange", a),
                  (0, n.OI)(),
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
    208: (e, t, a) => {
      "use strict";
      a.d(t, { w: () => n, g: () => r });
      const s = a(826).A.create({
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
      async function n(e) {
        try {
          return (await s.post("/login", { fD: e })).data;
        } catch (t) {
          return null;
        }
      }
      async function r(e) {
        try {
          return (await s.post("/register", e)).data;
        } catch (t) {
          return null;
        }
      }
    },
    117: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => l });
      var s = a(483),
        n = a(312),
        r = a(587),
        c = a(948),
        i = a(208),
        o = a(723);
      function l() {
        const [e, t] = (0, s.useState)(""),
          [a, l] = (0, s.useState)(""),
          [d, u] = (0, s.useState)(""),
          [m, h] = (0, s.useState)(!1),
          [g, p] = (0, s.useState)(!1),
          [y, f] = (0, s.useState)(null),
          { setError: v } = (0, c.Us)();
        return (
          (0, s.useEffect)(() => {
            if (y && y) {
              p(!1);
              const e = document.getElementById("FaceImg"),
                t = setInterval(async () => {
                  if (e.complete) {
                    (await (0, r.Ng)(e))
                      ? (v({
                          type: "success",
                          message: "Face detected",
                          status: 200,
                          stack: "Face detected successfully",
                        }),
                        clearInterval(t))
                      : (v({
                          type: "danger",
                          message: "No face detected",
                          status: 400,
                          stack: "Please upload an image with a face",
                        }),
                        f(null),
                        clearInterval(t));
                  }
                }, 200);
            }
          }, [y, v]),
          (0, o.jsxs)("div", {
            className: "Register",
            children: [
              (0, o.jsx)("h1", { children: "Register" }),
              (0, o.jsxs)("div", {
                className: "container-l",
                children: [
                  m && (0, o.jsx)(n.A, {}),
                  (0, o.jsxs)("div", {
                    className: "container",
                    children: [
                      g &&
                        (0, o.jsxs)("div", {
                          className: "upload",
                          children: [
                            !m &&
                              (0, o.jsx)("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: async (e) => {
                                  const t = e.target.files[0],
                                    a = new FileReader();
                                  (a.onload = () => {
                                    f(a.result);
                                  }),
                                    a.readAsDataURL(t);
                                },
                              }),
                            (0, o.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                m
                                  ? (async () => {
                                      const e = await (0, r.tN)();
                                      e && (f(e), h(!1), p(!1));
                                    })()
                                  : h(!0);
                              },
                              children: "Capture",
                            }),
                          ],
                        }),
                      (0, o.jsxs)("form", {
                        onSubmit: async function (s) {
                          if ((s.preventDefault(), !e || !a || !d))
                            return void v({
                              type: "danger",
                              message: "Please fill all the fields",
                              status: 400,
                              stack: "Please fill all the fields to register",
                            });
                          if (!y)
                            return void v({
                              type: "danger",
                              message: "Please upload an image",
                              status: 400,
                              stack: "Please upload an image with a face",
                            });
                          const n = await (0, r.Cb)(y);
                          if (!n || 0 === n.length)
                            return (
                              v({ message: "No face detected", status: 400 }),
                              f(null),
                              void (document.getElementsByTagName(
                                "input"
                              )[0].value = "")
                            );
                          await (0, i.g)({
                            name: e,
                            email: a,
                            rollNo: d,
                            img: y,
                            faceData: n,
                          }),
                            v({
                              type: "success",
                              message: "User registered successfully",
                              status: 200,
                              stack: "User registered successfully",
                            }),
                            f(null),
                            t(""),
                            l(""),
                            u(""),
                            h(!1),
                            p(!1);
                        },
                        children: [
                          y &&
                            (0, o.jsx)("img", {
                              id: "FaceImg",
                              src: y,
                              alt: "img",
                            }),
                          (0, o.jsx)("input", {
                            type: "text",
                            placeholder: "Name",
                            value: e,
                            onChange: (e) => t(e.target.value),
                          }),
                          (0, o.jsx)("input", {
                            type: "email",
                            placeholder: "Email",
                            value: a,
                            onChange: (e) => l(e.target.value),
                          }),
                          (0, o.jsx)("input", {
                            type: "text",
                            placeholder: "Roll No",
                            value: d,
                            onChange: (e) => u(e.target.value),
                          }),
                          !y &&
                            (0, o.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                p(!0);
                              },
                              children: "Upload",
                            }),
                          (0, o.jsx)("button", {
                            type: "submit",
                            children: "Register",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    587: (e, t, a) => {
      "use strict";
      a.d(t, {
        Cb: () => u,
        Ng: () => h,
        OI: () => l,
        Ts: () => c,
        Zl: () => r,
        tN: () => d,
        yZ: () => m,
      });
      var s = a(444),
        n = document.getElementById("facecam");
      const r = async (e) => {
          const t = "./models";
          try {
            await Promise.all([
              s.B0.tinyFaceDetector.loadFromUri(t),
              s.B0.faceLandmark68Net.loadFromUri(t),
              s.B0.faceRecognitionNet.loadFromUri(t),
              s.B0.ssdMobilenetv1.loadFromUri(t),
            ])
              .then(async () => await e())
              .catch((e) => {
                console.error("Error loading models:", e);
              });
          } catch (a) {
            console.error("Error loading models:", a);
          }
        },
        c = async () => {
          if ((await i(), n))
            return (
              n.addEventListener("play", async () => {
                await o();
              }),
              n
            );
        },
        i = async () => {
          const e = { video: !0 };
          try {
            ((e) => {
              (n = document.getElementById("facecam")).srcObject = e;
            })(await navigator.mediaDevices.getUserMedia(e));
          } catch (t) {
            ((e) => {
              console.error("Error accessing media devices.", e);
            })(t);
          }
        },
        o = async () => {
          if (!n) return;
          const e = s.pL(n);
          document.querySelectorAll("canvas").length > 0 ||
            ((n.style.position = "relative"),
            (n.style.zIndex = "1"),
            (e.style.position = "absolute"),
            (e.style.zIndex = "1000"),
            (e.style.top = n.offsetTop + "px"),
            (e.style.left = n.offsetLeft + "px"),
            document.body.append(e));
          const t = { width: n.width, height: n.height };
          s.L0(e, t),
            setInterval(async () => {
              const a = await s
                  .R(n, new s.ex())
                  .withFaceLandmarks()
                  .withFaceDescriptors(),
                r = s.Lz(a, t);
              e.getContext("2d").clearRect(0, 0, e.width, e.height),
                s.$2.drawDetections(e, r);
            }, 200);
        },
        l = () => {
          if (n && n.srcObject) {
            n.srcObject.getTracks().forEach((e) => e.stop());
          }
        },
        d = async () => {
          if (!n) return;
          Array.from(document.querySelectorAll("canvas")).forEach((e) =>
            e.remove()
          );
          const e = document.createElement("canvas");
          (e.width = n.videoWidth), (e.height = n.videoHeight);
          return (
            e.getContext("2d").drawImage(n, 0, 0, n.videoWidth, n.videoHeight),
            e.toDataURL("image/jpeg")
          );
        },
        u = async (e) => {
          if (!e) return;
          const t = await s.aK(e),
            a = await s
              .R(t, new s.ex())
              .withFaceLandmarks()
              .withFaceDescriptors();
          if (!a || 0 === a.length) return;
          return a.map((e) => ({
            descriptor: e.descriptor,
            landmarks: e.landmarks,
          }));
        },
        m = async () => {
          if (!n) return;
          const e = await s
            .R(n, new s.ex())
            .withFaceLandmarks()
            .withFaceDescriptors();
          if (!e || 0 === e.length) return;
          return e.map((e) => ({
            descriptor: e.descriptor,
            landmarks: e.landmarks,
          }));
        },
        h = async (e) => g(e),
        g = async (e) => {
          const t = s.pL(e);
          document.querySelectorAll("canvas").length > 0 ||
            ((e.style.zIndex = "1"),
            (t.style.position = "absolute"),
            (t.style.zIndex = "1000"),
            (t.style.top = e.offsetTop + "px"),
            (t.style.left = e.offsetLeft + "px"));
          const a = { width: e.width, height: e.height };
          s.L0(t, a);
          const n = await s
            .R(e, new s.ex())
            .withFaceLandmarks()
            .withFaceDescriptors();
          if (!n || 0 === n.length) return !1;
          const r = s.Lz(n, a);
          return (
            t.getContext("2d").clearRect(0, 0, t.width, t.height),
            s.$2.drawDetections(t, r),
            !0
          );
        };
    },
    82: () => {},
    318: () => {},
    745: () => {},
  },
]);
//# sourceMappingURL=471.4622abba.chunk.js.map
