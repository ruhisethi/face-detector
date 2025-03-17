"use strict";
(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [755],
  {
    443: (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a(15),
        s = a.n(n),
        c = a(718),
        r = a(331);
      function i() {
        const { video: e } = (0, r.Us)();
        return (
          (0, n.useEffect)(() => {
            async function t() {
              await (0, c.Zl)(c.Ts), n();
            }
            const a = () => {
                document.hidden
                  ? ((0, c.OI)(),
                    document.querySelector("canvas")?.remove(),
                    cancelAnimationFrame(e.current))
                  : t();
              },
              n = () => {
                e.current = requestAnimationFrame(n);
              };
            return (
              document.addEventListener("visibilitychange", a),
              t(),
              () => {
                document.removeEventListener("visibilitychange", a),
                  (0, c.OI)(),
                  document.querySelector("canvas")?.remove(),
                  cancelAnimationFrame(e.current);
              }
            );
          }, [e]),
          s().createElement(
            "div",
            { className: "video_container" },
            s().createElement("video", {
              id: "facecam",
              width: "680",
              height: "560",
              className: "",
              autoPlay: !0,
              muted: !0,
            })
          )
        );
      }
    },
    204: (e, t, a) => {
      a.d(t, { w: () => c, g: () => r });
      var n = a(938);
      const s = a
        .n(n)()
        .create({
          baseURL: process.env.API_URL || "http://localhost:8000",
          timeout: 1e3,
          headers: { "X-Custom-Header": "foobar" },
        });
      async function c(e) {
        try {
          return (await s.post("/login", { fD: e })).data;
        } catch (e) {
          return null;
        }
      }
      async function r(e) {
        try {
          return (await s.post("/register", e)).data;
        } catch (e) {
          return null;
        }
      }
    },
    755: (e, t, a) => {
      a.r(t), a.d(t, { default: () => l });
      var n = a(15),
        s = a.n(n),
        c = a(443),
        r = a(718),
        i = a(331),
        o = a(204);
      function l() {
        const [e, t] = (0, n.useState)(""),
          [a, l] = (0, n.useState)(""),
          [d, u] = (0, n.useState)(""),
          [m, g] = (0, n.useState)(!1),
          [h, y] = (0, n.useState)(!1),
          [p, f] = (0, n.useState)(null),
          { setError: v } = (0, i.Us)();
        return (
          (0, n.useEffect)(() => {
            if (p && p) {
              y(!1);
              const e = document.getElementById("FaceImg"),
                t = setInterval(async () => {
                  e.complete &&
                    ((await (0, r.Ng)(e))
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
                        clearInterval(t)));
                }, 200);
            }
          }, [p, v]),
          s().createElement(
            "div",
            { className: "Register" },
            s().createElement("h1", null, "Register"),
            s().createElement(
              "div",
              { className: "container-l" },
              m && s().createElement(c.A, null),
              s().createElement(
                "div",
                { className: "container" },
                h &&
                  s().createElement(
                    "div",
                    { className: "upload" },
                    !m &&
                      s().createElement("input", {
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
                    s().createElement(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          m
                            ? (async () => {
                                const e = await (0, r.tN)();
                                e && (f(e), g(!1), y(!1));
                              })()
                            : g(!0);
                        },
                      },
                      "Capture"
                    )
                  ),
                s().createElement(
                  "form",
                  {
                    onSubmit: async function (n) {
                      if ((n.preventDefault(), !e || !a || !d))
                        return void v({
                          type: "danger",
                          message: "Please fill all the fields",
                          status: 400,
                          stack: "Please fill all the fields to register",
                        });
                      if (!p)
                        return void v({
                          type: "danger",
                          message: "Please upload an image",
                          status: 400,
                          stack: "Please upload an image with a face",
                        });
                      const s = await (0, r.Cb)(p);
                      if (!s || 0 === s.length)
                        return (
                          v({ message: "No face detected", status: 400 }),
                          f(null),
                          void (document.getElementsByTagName(
                            "input"
                          )[0].value = "")
                        );
                      await (0, o.g)({
                        name: e,
                        email: a,
                        rollNo: d,
                        img: p,
                        faceData: s,
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
                        g(!1),
                        y(!1);
                    },
                  },
                  p &&
                    s().createElement("img", {
                      id: "FaceImg",
                      src: p,
                      alt: "img",
                    }),
                  s().createElement("input", {
                    type: "text",
                    placeholder: "Name",
                    value: e,
                    onChange: (e) => t(e.target.value),
                  }),
                  s().createElement("input", {
                    type: "email",
                    placeholder: "Email",
                    value: a,
                    onChange: (e) => l(e.target.value),
                  }),
                  s().createElement("input", {
                    type: "text",
                    placeholder: "Roll No",
                    value: d,
                    onChange: (e) => u(e.target.value),
                  }),
                  !p &&
                    s().createElement(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          y(!0);
                        },
                      },
                      "Upload"
                    ),
                  s().createElement("button", { type: "submit" }, "Register")
                )
              )
            )
          )
        );
      }
    },
    718: (e, t, a) => {
      a.d(t, {
        Cb: () => u,
        Ng: () => g,
        OI: () => l,
        Ts: () => r,
        Zl: () => c,
        tN: () => d,
        yZ: () => m,
      });
      var n = a(426),
        s = document.getElementById("facecam");
      const c = async (e) => {
          const t = "./models";
          try {
            await Promise.all([
              n.nets.tinyFaceDetector.loadFromUri(t),
              n.nets.faceLandmark68Net.loadFromUri(t),
              n.nets.faceRecognitionNet.loadFromUri(t),
              n.nets.ssdMobilenetv1.loadFromUri(t),
            ])
              .then(async () => await e())
              .catch((e) => {
                console.error("Error loading models:", e);
              });
          } catch (e) {
            console.error("Error loading models:", e);
          }
        },
        r = async () => {
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
            (t = await navigator.mediaDevices.getUserMedia(e)),
              ((s = document.getElementById("facecam")).srcObject = t);
          } catch (e) {
            ((e) => {
              console.error("Error accessing media devices.", e);
            })(e);
          }
          var t;
        },
        o = async () => {
          if (!s) return;
          const e = n.createCanvasFromMedia(s);
          document.querySelectorAll("canvas").length > 0 ||
            ((s.style.position = "relative"),
            (s.style.zIndex = "1"),
            (e.style.position = "absolute"),
            (e.style.zIndex = "1000"),
            (e.style.top = s.offsetTop + "px"),
            (e.style.left = s.offsetLeft + "px"),
            document.body.append(e));
          const t = { width: s.width, height: s.height };
          n.matchDimensions(e, t),
            setInterval(async () => {
              const a = await n
                  .detectAllFaces(s, new n.TinyFaceDetectorOptions())
                  .withFaceLandmarks()
                  .withFaceDescriptors(),
                c = n.resizeResults(a, t);
              e.getContext("2d").clearRect(0, 0, e.width, e.height),
                n.draw.drawDetections(e, c);
            }, 200);
        },
        l = () => {
          s && s.srcObject && s.srcObject.getTracks().forEach((e) => e.stop());
        },
        d = async () => {
          if (!s) return;
          Array.from(document.querySelectorAll("canvas")).forEach((e) =>
            e.remove()
          );
          const e = document.createElement("canvas");
          return (
            (e.width = s.videoWidth),
            (e.height = s.videoHeight),
            e.getContext("2d").drawImage(s, 0, 0, s.videoWidth, s.videoHeight),
            e.toDataURL("image/jpeg")
          );
        },
        u = async (e) => {
          if (!e) return;
          const t = await n.fetchImage(e),
            a = await n
              .detectAllFaces(t, new n.TinyFaceDetectorOptions())
              .withFaceLandmarks()
              .withFaceDescriptors();
          return a && 0 !== a.length
            ? a.map((e) => ({
                descriptor: e.descriptor,
                landmarks: e.landmarks,
              }))
            : void 0;
        },
        m = async () => {
          if (!s) return;
          const e = await n
            .detectAllFaces(s, new n.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptors();
          return e && 0 !== e.length
            ? e.map((e) => ({
                descriptor: e.descriptor,
                landmarks: e.landmarks,
              }))
            : void 0;
        },
        g = async (e) => h(e),
        h = async (e) => {
          const t = n.createCanvasFromMedia(e);
          document.querySelectorAll("canvas").length > 0 ||
            ((e.style.zIndex = "1"),
            (t.style.position = "absolute"),
            (t.style.zIndex = "1000"),
            (t.style.top = e.offsetTop + "px"),
            (t.style.left = e.offsetLeft + "px"));
          const a = { width: e.width, height: e.height };
          n.matchDimensions(t, a);
          const s = await n
            .detectAllFaces(e, new n.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptors();
          if (!s || 0 === s.length) return !1;
          const c = n.resizeResults(s, a);
          return (
            t.getContext("2d").clearRect(0, 0, t.width, t.height),
            n.draw.drawDetections(t, c),
            !0
          );
        };
    },
  },
]);
