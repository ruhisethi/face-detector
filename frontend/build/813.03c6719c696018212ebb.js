"use strict";
(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [813],
  {
    443: (e, t, a) => {
      a.d(t, { A: () => o });
      var n = a(15),
        r = a.n(n),
        s = a(718),
        c = a(331);
      function o() {
        const { video: e } = (0, c.Us)();
        return (
          (0, n.useEffect)(() => {
            async function t() {
              await (0, s.Zl)(s.Ts), n();
            }
            const a = () => {
                document.hidden
                  ? ((0, s.OI)(),
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
                  (0, s.OI)(),
                  document.querySelector("canvas")?.remove(),
                  cancelAnimationFrame(e.current);
              }
            );
          }, [e]),
          r().createElement(
            "div",
            { className: "video_container" },
            r().createElement("video", {
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
      a.d(t, { w: () => s, g: () => c });
      var n = a(938);
      const r = a
        .n(n)()
        .create({
          baseURL: process.env.API_URL || "http://localhost:8000",
          timeout: 1e3,
          headers: { "X-Custom-Header": "foobar" },
        });
      async function s(e) {
        try {
          return (await r.post("/login", { fD: e })).data;
        } catch (e) {
          return null;
        }
      }
      async function c(e) {
        try {
          return (await r.post("/register", e)).data;
        } catch (e) {
          return null;
        }
      }
    },
    813: (e, t, a) => {
      a.r(t), a.d(t, { default: () => d });
      var n = a(15),
        r = a.n(n),
        s = a(443),
        c = a(331);
      function o() {
        const { user: e } = (0, c.Us)();
        return r().createElement(
          "div",
          { className: "Usercard" },
          null === e
            ? r().createElement("h2", null, "No User Found")
            : r().createElement(
                r().Fragment,
                null,
                r().createElement("h2", null, "User Card"),
                r().createElement("img", { src: e.img, alt: "User" }),
                r().createElement("p", null, "Name: ", e.name),
                r().createElement("p", null, "Email: ", e.email),
                r().createElement("p", null, "Roll No: ", e.rollNo)
              )
        );
      }
      var i = a(204),
        l = a(718);
      function d() {
        const { setUser: e, setError: t, video: a } = (0, c.Us)();
        return (
          (0, n.useEffect)(() => {
            const n = setInterval(async () => {
              if (a)
                try {
                  const a = await (async function () {
                    const e = await (0, l.tN)();
                    if (!e) return !1;
                    const t = await (0, l.yZ)(e);
                    return t && 0 !== t.length ? await (0, i.w)(t) : void 0;
                  })();
                  a && a.user
                    ? (e(a.user),
                      t({
                        message: "User found",
                        type: "success",
                        status: 200,
                      }),
                      setTimeout(() => {
                        e(null);
                      }, 5e3))
                    : a &&
                      a.message &&
                      (e(null),
                      t({ message: a.message, type: "error", status: 404 }));
                } catch (e) {
                  t(e.message);
                }
            }, 1e3);
            return () => clearInterval(n);
          }, [a, t, e]),
          r().createElement(
            r().Fragment,
            null,
            r().createElement(
              "div",
              { className: "Login" },
              r().createElement("h1", null, "Login"),
              r().createElement(
                "div",
                { className: "login__container" },
                r().createElement(s.A, null),
                r().createElement(o, null)
              )
            )
          )
        );
      }
    },
    718: (e, t, a) => {
      a.d(t, {
        Cb: () => m,
        Ng: () => h,
        OI: () => l,
        Ts: () => c,
        Zl: () => s,
        tN: () => d,
        yZ: () => u,
      });
      var n = a(426),
        r = document.getElementById("facecam");
      const s = async (e) => {
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
        c = async () => {
          if ((await o(), r))
            return (
              r.addEventListener("play", async () => {
                await i();
              }),
              r
            );
        },
        o = async () => {
          const e = { video: !0 };
          try {
            (t = await navigator.mediaDevices.getUserMedia(e)),
              ((r = document.getElementById("facecam")).srcObject = t);
          } catch (e) {
            ((e) => {
              console.error("Error accessing media devices.", e);
            })(e);
          }
          var t;
        },
        i = async () => {
          if (!r) return;
          const e = n.createCanvasFromMedia(r);
          document.querySelectorAll("canvas").length > 0 ||
            ((r.style.position = "relative"),
            (r.style.zIndex = "1"),
            (e.style.position = "absolute"),
            (e.style.zIndex = "1000"),
            (e.style.top = r.offsetTop + "px"),
            (e.style.left = r.offsetLeft + "px"),
            document.body.append(e));
          const t = { width: r.width, height: r.height };
          n.matchDimensions(e, t),
            setInterval(async () => {
              const a = await n
                  .detectAllFaces(r, new n.TinyFaceDetectorOptions())
                  .withFaceLandmarks()
                  .withFaceDescriptors(),
                s = n.resizeResults(a, t);
              e.getContext("2d").clearRect(0, 0, e.width, e.height),
                n.draw.drawDetections(e, s);
            }, 200);
        },
        l = () => {
          r && r.srcObject && r.srcObject.getTracks().forEach((e) => e.stop());
        },
        d = async () => {
          if (!r) return;
          Array.from(document.querySelectorAll("canvas")).forEach((e) =>
            e.remove()
          );
          const e = document.createElement("canvas");
          return (
            (e.width = r.videoWidth),
            (e.height = r.videoHeight),
            e.getContext("2d").drawImage(r, 0, 0, r.videoWidth, r.videoHeight),
            e.toDataURL("image/jpeg")
          );
        },
        m = async (e) => {
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
        u = async () => {
          if (!r) return;
          const e = await n
            .detectAllFaces(r, new n.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptors();
          return e && 0 !== e.length
            ? e.map((e) => ({
                descriptor: e.descriptor,
                landmarks: e.landmarks,
              }))
            : void 0;
        },
        h = async (e) => y(e),
        y = async (e) => {
          const t = n.createCanvasFromMedia(e);
          document.querySelectorAll("canvas").length > 0 ||
            ((e.style.zIndex = "1"),
            (t.style.position = "absolute"),
            (t.style.zIndex = "1000"),
            (t.style.top = e.offsetTop + "px"),
            (t.style.left = e.offsetLeft + "px"));
          const a = { width: e.width, height: e.height };
          n.matchDimensions(t, a);
          const r = await n
            .detectAllFaces(e, new n.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptors();
          if (!r || 0 === r.length) return !1;
          const s = n.resizeResults(r, a);
          return (
            t.getContext("2d").clearRect(0, 0, t.width, t.height),
            n.draw.drawDetections(t, s),
            !0
          );
        };
    },
  },
]);
