import { c as E, r as c, j as t, a as T, H as L } from "./app-sbiZZbzh.js";
import {
  g as m,
  S as C,
  H as v,
  C as P,
  a as M,
} from "./site-layout-Co0qRaK2.js";
/* empty css            */ import "./createLucideIcon-0TJadoOv.js";
import "./x-jz9tJxld.js";
m.registerPlugin(C);
function H() {
  const e = E.c(7),
    s = c.useRef(null),
    l = c.useRef(null),
    a = c.useRef(null),
    n = c.useRef(null),
    u = c.useRef(null),
    r = c.useRef(null);
  let D, o;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((D = () => {
        const F = m.context(() => {
          m
            .timeline()
            .from(n.current, {
              opacity: 0,
              y: 40,
              duration: 1,
              ease: "power3.out",
            })
            .from(
              u.current,
              { opacity: 0, y: 25, duration: 0.8, ease: "power3.out" },
              "-=0.5"
            )
            .from(
              r.current,
              { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" },
              "-=0.4"
            ),
            m
              .timeline({
                scrollTrigger: {
                  trigger: s.current,
                  start: "top top",
                  end: "bottom top",
                  scrub: !0,
                },
              })
              .to(l.current, { opacity: 0, ease: "none" })
              .to(a.current, { opacity: 1, ease: "none" }, 0);
        }, s);
        return () => F.revert();
      }),
      (o = []),
      (e[0] = D),
      (e[1] = o))
    : ((D = e[0]), (o = e[1])),
    c.useLayoutEffect(D, o);
  let i;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((i = t.jsx("div", {
        ref: a,
        className: "absolute inset-0 z-10  opacity-25",
        children: t.jsx("img", {
          src: "/assets/green-bg.avif",
          alt: "",
          className: "w-full h-full object-cover",
        }),
      })),
      (e[2] = i))
    : (i = e[2]);
  let x;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((x = t.jsx("div", {
        ref: l,
        className: "absolute inset-0 opacity-100",
        children: t.jsx("img", {
          src: "/assets/home-hero-img.svg",
          alt: "",
          className: "absolute inset-0 w-full h-full object-cover",
        }),
      })),
      (e[3] = x))
    : (x = e[3]);
  let f;
  e[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((f = t.jsxs("div", {
        className: "absolute inset-0",
        children: [
          i,
          x,
          t.jsxs("div", {
            className: "absolute inset-0 pointer-events-none opacity-20",
            children: [
              t.jsx("div", {
                className:
                  "absolute w-[900px] h-[900px] right-[-300px] bottom-[-300px] border border-white rounded-full",
              }),
              t.jsx("div", {
                className:
                  "absolute w-[700px] h-[700px] left-[-250px] top-[200px] border border-white rounded-full",
              }),
            ],
          }),
        ],
      })),
      (e[4] = f))
    : (f = e[4]);
  let p;
  e[5] === Symbol.for("react.memo_cache_sentinel")
    ? ((p = t.jsxs("div", {
        ref: n,
        children: [
          t.jsx("h1", {
            className:
              "font-lora text-white text-3xl md:text-6xl xl:text-8xl 2xl:text-9xl leading-normal",
            children: "MenoHealth",
          }),
          t.jsx("p", {
            className:
              "font-lora text-white text-sm md:text-lg 2xl:text-xl max-w-[700px]",
            children: "– Where Every Woman's Menopause Journey Matters",
          }),
        ],
      })),
      (e[5] = p))
    : (p = e[5]);
  let d;
  return (
    e[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((d = t.jsxs("section", {
          ref: s,
          className: "relative w-full min-h-screen overflow-hidden",
          children: [
            f,
            t.jsx("div", {
              className:
                "relative z-10 flex items-end min-h-screen px-6 md:px-16 pb-16",
              children: t.jsxs("div", {
                className:
                  "w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between lg:items-end gap-12 lg:gap-30",
                children: [
                  p,
                  t.jsx("div", {
                    className: "flex flex-col gap-8 max-w-[640px]",
                    children: t.jsx("p", {
                      ref: u,
                      className:
                        "font-lato text-white leading-relaxed text-xs md:text-sm 2xl:text-base",
                      children:
                        "Your trusted hub for expert support, personalised guidance, and real connection through peri-menopause and menopause.",
                    }),
                  }),
                ],
              }),
            }),
          ],
        })),
        (e[6] = d))
      : (d = e[6]),
    d
  );
}
m.registerPlugin(C);
const S = [
  {
    title: "Medical guidance and services",
    description:
      "Clinically led care, trusted advice, and services designed to support you at every stage.",
    image: "/assets/services/medical-guidance.jpg",
  },
  {
    title: "Holistic support and products",
    description:
      "Evidence-based supplements, wellness products, and holistic care to support body and mind.",
    image: "/assets/services/holistic-support.jpg",
  },
  {
    title: "Safe access",
    description:
      "Trusted, vetted access to menopause specialists, practitioners, and support resources.",
    image: "/assets/services/safe-access.jpg",
  },
  {
    title: "Practical tools",
    description:
      "Trackers, education tools, and practical guidance to manage symptoms and daily life.",
    image: "/assets/services/practical-tools.jpg",
  },
  {
    title: "Real stories and community",
    description:
      "Shared experiences, real conversations, and community support so no woman feels alone.",
    image: "/assets/services/community.jpg",
  },
];
function W() {
  const e = E.c(8),
    s = c.useRef(null),
    l = c.useRef(null),
    [a, n] = c.useState(0);
  let u, r;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((u = () => {
        const p = m.context(() => {
          const d = m.utils.toArray(".service-card");
          m.set(".expanded-content", {
            autoAlpha: 0,
            y: 40,
            pointerEvents: "none",
          }),
            m.set(".collapsed-label", { autoAlpha: 1 }),
            m.fromTo(
              d,
              { opacity: 0, y: 80 },
              {
                opacity: 1,
                y: 0,
                ease: "none",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: s.current,
                  start: "top 85%",
                  end: "top 55%",
                  scrub: !0,
                },
              }
            );
        }, s);
        return () => p.revert();
      }),
      (r = []),
      (e[0] = u),
      (e[1] = r))
    : ((u = e[0]), (r = e[1])),
    c.useLayoutEffect(u, r);
  let D, o;
  e[2] !== a
    ? ((D = () => {
        if (!l.current) return;
        Array.from(l.current.querySelectorAll(".service-card")).forEach(
          (d, F) => {
            const h = d.querySelector(".expanded-content"),
              g = d.querySelector(".collapsed-label"),
              j = F === a,
              y = m.timeline({ defaults: { ease: "power3.inOut" } });
            y.to(d, { width: j ? 420 : 120, duration: 0.8 }),
              j
                ? y.to(g, { autoAlpha: 0, duration: 0.25 }, 0).to(
                    h,
                    {
                      autoAlpha: 1,
                      y: 0,
                      duration: 0.45,
                      pointerEvents: "auto",
                    },
                    0.4
                  )
                : y
                    .to(
                      h,
                      {
                        autoAlpha: 0,
                        y: 40,
                        duration: 0.25,
                        pointerEvents: "none",
                      },
                      0
                    )
                    .to(g, { autoAlpha: 1, duration: 0.3 }, 0.45);
          }
        );
      }),
      (o = [a]),
      (e[2] = a),
      (e[3] = D),
      (e[4] = o))
    : ((D = e[3]), (o = e[4])),
    c.useLayoutEffect(D, o);
  let i;
  e[5] === Symbol.for("react.memo_cache_sentinel")
    ? ((i = t.jsx("p", {
        className:
          "font-lato text-black/60 text-center uppercase tracking-wider text-xs max-w-4xl mx-auto",
        children:
          "At MenoHealth, we bring together the expert knowledge, services, and community that women have been asking for:",
      })),
      (e[5] = i))
    : (i = e[5]);
  let x;
  e[6] === Symbol.for("react.memo_cache_sentinel")
    ? ((x = t.jsx("div", {
        className: "grid grid-cols-1 md:grid-col s-2 gap-6 lg:hidden",
        children: S.map($),
      })),
      (e[6] = x))
    : (x = e[6]);
  let f;
  return (
    e[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((f = t.jsx("section", {
          ref: s,
          className: "w-full bg-white ",
          children: t.jsxs("div", {
            className: "mx-auto max-w-7xl flex flex-col gap-6 md:gap-8",
            children: [
              i,
              x,
              t.jsx("div", {
                ref: l,
                className: "hidden lg:flex gap-4 h-[420px] justify-center",
                children: S.map((p, d) =>
                  t.jsxs(
                    "div",
                    {
                      onClick: () => n(d),
                      className:
                        "service-card relative h-full overflow-hidden rounded-xl cursor-pointer",
                      children: [
                        t.jsx("img", {
                          src: p.image,
                          alt: p.title,
                          className: "w-full h-full object-cover",
                        }),
                        t.jsx("div", {
                          className: "absolute inset-0 bg-black/30",
                        }),
                        t.jsxs("div", {
                          className: "absolute inset-0 p-6 flex items-end",
                          children: [
                            t.jsxs("div", {
                              className: "expanded-content max-w-md",
                              children: [
                                t.jsx("h3", {
                                  className:
                                    "font-lora text-white text-2xl mb-2",
                                  children: p.title,
                                }),
                                t.jsx("p", {
                                  className:
                                    "font-lato text-white/90 text-sm leading-relaxed",
                                  children: p.description,
                                }),
                              ],
                            }),
                            t.jsx("div", {
                              className:
                                "collapsed-label absolute left-4 bottom-6 bg-black/40 px-2 py-3 rounded-md",
                              style: {
                                writingMode: "vertical-rl",
                                textOrientation: "mixed",
                              },
                              children: t.jsx("span", {
                                className:
                                  "font-lora text-white text-lg tracking-wide",
                                children: p.title,
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    d
                  )
                ),
              }),
            ],
          }),
        })),
        (e[7] = f))
      : (f = e[7]),
    f
  );
}
function $(e, s) {
  return t.jsxs(
    "div",
    {
      className: "service-card relative rounded-xl overflow-hidden",
      children: [
        t.jsx("img", {
          src: e.image,
          alt: e.title,
          className: "w-full aspect-square object-cover",
        }),
        t.jsxs("div", {
          className:
            "absolute inset-0 bg-black/40 flex flex-col justify-end p-4",
          children: [
            t.jsx("h3", {
              className: "font-lora text-white text-xl mb-1",
              children: e.title,
            }),
            t.jsx("p", {
              className: "font-lato text-xs text-white/85 leading-relaxed",
              children: e.description,
            }),
          ],
        }),
      ],
    },
    s
  );
}
m.registerPlugin(C);
function q() {
  const e = E.c(5),
    s = c.useRef(null),
    l = c.useRef(null),
    a = c.useRef(null),
    n = c.useRef(null);
  let u, r;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((u = () => {
        const x = m.context(() => {
          m.from([l.current, n.current, a.current], {
            scrollTrigger: {
              trigger: s.current,
              start: "top 80%",
              end: "top 50%",
              scrub: !0,
            },
            opacity: 0,
            y: 24,
            stagger: 0.2,
            ease: "power2.out",
          });
        }, s);
        return () => x.revert();
      }),
      (r = []),
      (e[0] = u),
      (e[1] = r))
    : ((u = e[0]), (r = e[1])),
    c.useLayoutEffect(u, r);
  let D;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((D = t.jsx("p", {
        ref: a,
        className:
          "font-lato font-semibold text-accent text-xs tracking-widest uppercase",
        children: "Menopause support that actually gets it",
      })),
      (e[2] = D))
    : (D = e[2]);
  let o;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((o = t.jsx("em", { className: "italic", children: "Yourself" })),
      (e[3] = o))
    : (o = e[3]);
  let i;
  return (
    e[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((i = t.jsxs("section", {
          ref: s,
          className:
            "w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex flex-col gap-10",
          children: [
            t.jsxs("div", {
              className:
                "mx-auto max-w-4xl flex flex-col items-center gap-4 md:gap-6 text-center",
              children: [
                D,
                t.jsxs("h2", {
                  ref: l,
                  className:
                    "font-lora font-medium text-black text-2xl md:text-4xl lg:text-5xl leading-tight max-w-3xl",
                  children: [
                    "You Deserve to Feel Like ",
                    o,
                    " ",
                    t.jsx("span", { children: "Again." }),
                  ],
                }),
                t.jsx("p", {
                  ref: n,
                  className:
                    "font-lato text-muted-foreground text-xs sm:text-sm  leading-relaxed max-w-2xl",
                  children:
                    "Menopause isn't a single moment — it's a transition that affects your mind, body, confidence, and relationships. And you shouldn't have to navigate it alone.",
                }),
              ],
            }),
            t.jsx(W, {}),
          ],
        })),
        (e[4] = i))
      : (i = e[4]),
    i
  );
}
var Y = /(?:^\s+|\s+$)/g,
  I = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function R(e) {
  var s = e.nodeType,
    l = "";
  if (s === 1 || s === 9 || s === 11) {
    if (typeof e.textContent == "string") return e.textContent;
    for (e = e.firstChild; e; e = e.nextSibling) l += R(e);
  } else if (s === 3 || s === 4) return e.nodeValue;
  return l;
}
function _(e, s, l, a, n) {
  for (var u = e.firstChild, r = [], D; u; )
    u.nodeType === 3
      ? ((D = (u.nodeValue + "").replace(/^\n+/g, "")),
        a || (D = D.replace(/\s+/g, " ")),
        r.push.apply(r, k(D, s, l, a, n)))
      : (u.nodeName + "").toLowerCase() === "br"
      ? (r[r.length - 1] += "<br>")
      : r.push(u.outerHTML),
      (u = u.nextSibling);
  if (!n) for (D = r.length; D--; ) r[D] === "&" && r.splice(D, 1, "&amp;");
  return r;
}
function k(e, s, l, a, n) {
  if (
    ((e += ""), l && (e = e.trim ? e.trim() : e.replace(Y, "")), s && s !== "")
  )
    return e.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(s);
  for (var u = [], r = e.length, D = 0, o, i; D < r; D++)
    (i = e.charAt(D)),
      ((i.charCodeAt(0) >= 55296 && i.charCodeAt(0) <= 56319) ||
        (e.charCodeAt(D + 1) >= 65024 && e.charCodeAt(D + 1) <= 65039)) &&
        ((o = ((e.substr(D, 12).split(I) || [])[1] || "").length || 2),
        (i = e.substr(D, o)),
        (u.emoji = 1),
        (D += o - 1)),
      u.push(
        n
          ? i
          : i === ">"
          ? "&gt;"
          : i === "<"
          ? "&lt;"
          : a &&
            i === " " &&
            (e.charAt(D - 1) === " " || e.charAt(D + 1) === " ")
          ? "&nbsp;"
          : i
      );
  return u;
}
var w,
  B,
  O = function () {
    return (
      w || (typeof window < "u" && (w = window.gsap) && w.registerPlugin && w)
    );
  },
  N = {
    version: "3.14.2",
    name: "text",
    init: function (s, l, a) {
      typeof l != "object" && (l = { value: l });
      var n = s.nodeName.toUpperCase(),
        u = this,
        r = l,
        D = r.newClass,
        o = r.oldClass,
        i = r.preserveSpaces,
        x = r.rtl,
        f = (u.delimiter = l.delimiter || ""),
        p = (u.fillChar = l.fillChar || (l.padSpace ? "&nbsp;" : "")),
        d,
        F,
        h,
        g,
        j,
        y,
        b,
        A;
      if (
        ((u.svg = s.getBBox && (n === "TEXT" || n === "TSPAN")),
        !("innerHTML" in s) && !u.svg)
      )
        return !1;
      if (((u.target = s), !("value" in l))) {
        u.text = u.original = [""];
        return;
      }
      for (
        h = _(s, f, !1, i, u.svg),
          B || (B = document.createElement("div")),
          B.innerHTML = l.value,
          F = _(B, f, !1, i, u.svg),
          u.from = a._from,
          (u.from || x) && !(x && u.from) && ((n = h), (h = F), (F = n)),
          u.hasClass = !!(D || o),
          u.newClass = x ? o : D,
          u.oldClass = x ? D : o,
          n = h.length - F.length,
          d = n < 0 ? h : F,
          n < 0 && (n = -n);
        --n > -1;

      )
        d.push(p);
      if (l.type === "diff") {
        for (g = 0, j = [], y = [], b = "", n = 0; n < F.length; n++)
          (A = F[n]),
            A === h[n]
              ? (b += A)
              : ((j[g] = b + A), (y[g++] = b + h[n]), (b = ""));
        (F = j), (h = y), b && (F.push(b), h.push(b));
      }
      l.speed &&
        a.duration(
          Math.min((0.05 / l.speed) * d.length, l.maxDuration || 9999)
        ),
        (u.rtl = x),
        (u.original = h),
        (u.text = F),
        u._props.push("text");
    },
    render: function (s, l) {
      s > 1 ? (s = 1) : s < 0 && (s = 0), l.from && (s = 1 - s);
      var a = l.text,
        n = l.hasClass,
        u = l.newClass,
        r = l.oldClass,
        D = l.delimiter,
        o = l.target,
        i = l.fillChar,
        x = l.original,
        f = l.rtl,
        p = a.length,
        d = ((f ? 1 - s : s) * p + 0.5) | 0,
        F,
        h,
        g;
      n && s
        ? ((F = u && d),
          (h = r && d !== p),
          (g =
            (F ? "<span class='" + u + "'>" : "") +
            a.slice(0, d).join(D) +
            (F ? "</span>" : "") +
            (h ? "<span class='" + r + "'>" : "") +
            D +
            x.slice(d).join(D) +
            (h ? "</span>" : "")))
        : (g = a.slice(0, d).join(D) + D + x.slice(d).join(D)),
        l.svg
          ? (o.textContent = g)
          : (o.innerHTML =
              i === "&nbsp;" && ~g.indexOf("  ")
                ? g.split("  ").join("&nbsp;&nbsp;")
                : g);
    },
  };
N.splitInnerHTML = _;
N.emojiSafeSplit = k;
N.getText = R;
O() && w.registerPlugin(N);
m.registerPlugin(C, N);
function G() {
  const e = E.c(6),
    s = c.useRef(null),
    l = c.useRef(null),
    a = c.useRef(null),
    n = c.useRef(null),
    u = c.useRef(null);
  let r, D;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((r = () => {
        const p = m.context(() => {
          m.from([l.current, a.current], {
            scrollTrigger: {
              trigger: s.current,
              start: "top 70%",
              end: "top 40%",
              scrub: 1,
            },
            opacity: 0,
            y: 30,
            stagger: 0.15,
          }),
            n.current &&
              C.create({
                trigger: n.current,
                start: "top 80%",
                once: !0,
                onEnter: () => {
                  const d = n.current?.querySelector(".stat-number");
                  d &&
                    m.fromTo(
                      d,
                      { textContent: 0 },
                      {
                        textContent: 1e9,
                        duration: 1.5,
                        ease: "power1.out",
                        snap: { textContent: 1 },
                        onUpdate: () => {
                          d.textContent = Math.floor(
                            Number(d.textContent)
                          ).toLocaleString();
                        },
                      }
                    );
                },
              });
        }, s);
        return () => p.revert();
      }),
      (D = []),
      (e[0] = r),
      (e[1] = D))
    : ((r = e[0]), (D = e[1])),
    c.useLayoutEffect(r, D);
  let o;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((o = t.jsxs("div", {
        className: "flex flex-col items-center gap-4 mb-12 text-center",
        children: [
          t.jsxs("div", {
            ref: l,
            className: "flex flex-col items-center gap-6",
            children: [
              t.jsx(v, { className: "w-5 h-5 text-brand" }),
              t.jsx("p", {
                className:
                  "font-lato font-semibold text-brand text-xs tracking-widest uppercase opacity-75",
                children: "A Global Community",
              }),
            ],
          }),
          t.jsx("h2", {
            ref: a,
            className:
              "font-lora font-medium text-black text-3xl sm:text-4xl lg:text-[44px] leading-tight max-w-xl sm:max-w-2xl",
            children: "A Global Community, A Unified Solution",
          }),
          t.jsx("p", {
            className:
              "font-lato font-semibold text-black/90 text-xs tracking-widest uppercase opacity-75",
            children:
              "Our mission is to provide a supportive space where women can:",
          }),
        ],
      })),
      (e[2] = o))
    : (o = e[2]);
  let i;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((i = t.jsx("p", {
        className: "font-lato font-medium text-black/60 text-base sm:text-lg",
        children: "Over",
      })),
      (e[3] = i))
    : (i = e[3]);
  let x;
  e[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((x = t.jsxs("div", {
        ref: n,
        className:
          "flex w-full lg:w-1/2 flex-col items-center justify-center gap-3 sm:gap-4 p-6 sm:p-10",
        children: [
          i,
          t.jsx("div", {
            className: "h-[56px] sm:h-[72px] flex items-center",
            children: t.jsx("p", {
              className:
                "stat-number font-lora font-medium text-black text-4xl sm:text-5xl lg:text-[64px] leading-none",
              children: "1,000,000,000",
            }),
          }),
          t.jsx("p", {
            className:
              "font-lora font-bold text-black/85 text-xl sm:text-2xl lg:text-[32px]",
            children: "Women",
          }),
        ],
      })),
      (e[4] = x))
    : (x = e[4]);
  let f;
  return (
    e[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((f = t.jsx("section", {
          ref: s,
          className: "w-full bg-white py-16 px-6 sm:px-10 lg:px-16",
          children: t.jsxs("div", {
            className: "w-full max-w-[1600px] mx-auto",
            children: [
              o,
              t.jsxs("div", {
                className:
                  "flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center",
                children: [
                  x,
                  t.jsxs("div", {
                    ref: u,
                    className:
                      "flex w-full lg:w-1/2 flex-col gap-4 max-w-xl sm:max-w-2xl px-0 sm:px-4",
                    children: [
                      t.jsx("p", {
                        className:
                          "font-lato text-black/85 text-base sm:text-lg leading-relaxed",
                        children: "are in peri-menopause or menopause today.",
                      }),
                      t.jsx("p", {
                        className:
                          "font-lato font-medium text-black/90 text-sm sm:text-base leading-relaxed",
                        children:
                          "Yet so many still navigate it without the support, clarity, and care they deserve.",
                      }),
                      t.jsx("p", {
                        className:
                          "font-lato text-black/90 text-sm sm:text-base leading-relaxed",
                        children:
                          "Traditional healthcare often focuses on symptoms — but menopause affects every part of life: physical, emotional, social, and hormonal. Women need access to guidance that reflects the full picture.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })),
        (e[5] = f))
      : (f = e[5]),
    f
  );
}
m.registerPlugin(C);
const U = [
  {
    title: "Discover What Works for You",
    description:
      "Every woman's menopause journey is different. We help you find information, support, and solutions that align with your body, lifestyle, and needs.",
  },
  {
    title: "Learn Through Shared Experiences",
    description:
      "From personal stories to collective insights, we create space for women to learn from each other and feel less alone through every stage.",
  },
  {
    title: "Feel Informed, Empowered, and Understood",
    description:
      "Access reliable guidance, practical knowledge, and empathetic support designed to help you navigate menopause with clarity and confidence.",
  },
];
function z() {
  const e = E.c(5),
    s = c.useRef(null),
    l = c.useRef(null);
  let a, n;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((a = () => {
        const o = m.context(() => {
          if (l.current) {
            const i = l.current.querySelectorAll(".mission-card");
            m.from(i, {
              scrollTrigger: {
                trigger: l.current,
                start: "top 75%",
                end: "bottom bottom",
                scrub: 1,
              },
              opacity: 0,
              y: 40,
              stagger: 0.15,
            });
          }
        }, s);
        return () => o.revert();
      }),
      (n = []),
      (e[0] = a),
      (e[1] = n))
    : ((a = e[0]), (n = e[1])),
    c.useLayoutEffect(a, n);
  let u;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((u = t.jsxs("div", {
        className: "flex flex-col items-center gap-4 mb-12 text-center",
        children: [
          t.jsxs("div", {
            className: "flex flex-col items-center gap-6",
            children: [
              t.jsx(v, { className: "w-5 h-5 text-brand" }),
              t.jsx("p", {
                className:
                  "font-lato font-semibold text-brand text-xs tracking-widest uppercase opacity-75",
                children: "Our Mission",
              }),
            ],
          }),
          t.jsx("h2", {
            className:
              "font-lora font-medium text-black text-3xl sm:text-4xl lg:text-[44px] leading-tight max-w-2xl",
            children: "A Platform Built for Women, By Women",
          }),
        ],
      })),
      (e[2] = u))
    : (u = e[2]);
  let r;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((r = t.jsx("div", {
        ref: l,
        className:
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 items-start",
        children: U.map(J),
      })),
      (e[3] = r))
    : (r = e[3]);
  let D;
  return (
    e[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((D = t.jsx("section", {
          ref: s,
          className: "w-full bg-white py-16 px-6 sm:px-10 lg:px-16",
          children: t.jsxs("div", {
            className: "w-full max-w-6xl mx-auto",
            children: [
              u,
              r,
              t.jsx("div", {
                className: "flex flex-col items-center pt-10 opacity-75",
                children: t.jsx("p", {
                  className:
                    "font-lato font-semibold text-black/90 text-xs tracking-widest uppercase text-center max-w-xl",
                  children:
                    "Access reliable guidance, practical knowledge, and empathetic support designed to help you navigate menopause with clarity and confidence.",
                }),
              }),
            ],
          }),
        })),
        (e[4] = D))
      : (D = e[4]),
    D
  );
}
function J(e, s) {
  return t.jsxs(
    "div",
    {
      className: `mission-card flex flex-col gap-4 max-w-sm mx-auto text-center ${
        s === 1 ? "lg:pt-24" : ""
      }`,
      children: [
        t.jsx("h3", {
          className: "font-lora text-brand text-xl sm:text-2xl leading-snug",
          children: e.title,
        }),
        t.jsx("p", {
          className:
            "font-lato text-muted-foreground text-sm sm:text-base leading-relaxed",
          children: e.description,
        }),
      ],
    },
    s
  );
}
m.registerPlugin(C);
const V = [
  {
    title: "Expert-Verified Care & Practitioners",
    description:
      "HRT specialists, nutritionists, counsellors, therapists, and coaches — all carefully screened for quality, credibility, and menopause expertise.",
  },
  {
    title: "Community & Shared Experience",
    description:
      "A safe, supportive space to share experiences, learn from others, and connect with women who understand what you're going through.",
  },
  {
    title: "Reliable Information You Can Trust",
    description:
      "Clear, evidence-based guidance from leading clinicians and experts, built to inform — without fads, fear, or judgement.",
  },
  {
    title: "Tools Designed for Real Life",
    description:
      "Symptom trackers, wellness resources, and lifestyle guidance created to support confidence and clarity through every stage.",
  },
];
function Q() {
  const e = E.c(5),
    s = c.useRef(null),
    l = c.useRef(null);
  let a, n;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((a = () => {
        const o = m.context(() => {
          if (l.current) {
            const i = l.current.querySelectorAll(".feature-card");
            m.from(i, {
              scrollTrigger: {
                trigger: l.current,
                start: "top 75%",
                end: "bottom bottom",
                scrub: 1,
              },
              opacity: 0,
              y: 40,
              stagger: 0.1,
            });
          }
        }, s);
        return () => o.revert();
      }),
      (n = []),
      (e[0] = a),
      (e[1] = n))
    : ((a = e[0]), (n = e[1])),
    c.useLayoutEffect(a, n);
  let u;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((u = t.jsxs("div", {
        className: "flex flex-col items-center gap-6",
        children: [
          t.jsx(v, { className: "w-5 h-5 text-brand" }),
          t.jsx("p", {
            className:
              "font-lato font-semibold text-brand text-xs tracking-widest uppercase opacity-75",
            children: "What We Provide",
          }),
        ],
      })),
      (e[2] = u))
    : (u = e[2]);
  let r;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((r = t.jsxs("div", {
        className: "flex flex-col items-center gap-4 mb-12 text-center",
        children: [
          u,
          t.jsxs("div", {
            className: "flex flex-col items-center gap-4 max-w-2xl",
            children: [
              t.jsx("h2", {
                className:
                  "font-lora font-medium text-black text-3xl sm:text-4xl lg:text-[44px] leading-tight",
                children: "Everything You Need, All in One Place",
              }),
              t.jsx("p", {
                className:
                  "font-lato font-semibold text-black/90 text-xs tracking-widest uppercase",
                children:
                  "From expert care to trusted information, supportive tools, and community — we bring it all together in one place.",
              }),
            ],
          }),
        ],
      })),
      (e[3] = r))
    : (r = e[3]);
  let D;
  return (
    e[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((D = t.jsx("section", {
          ref: s,
          className: "w-full bg-white py-16 px-6 sm:px-10 lg:px-16",
          children: t.jsxs("div", {
            className: "w-full max-w-7xl mx-auto",
            children: [
              r,
              t.jsx("div", {
                ref: l,
                className:
                  "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto",
                children: V.map(X),
              }),
            ],
          }),
        })),
        (e[4] = D))
      : (D = e[4]),
    D
  );
}
function X(e, s) {
  return t.jsxs(
    "div",
    {
      className:
        "feature-card rounded-xl border border-black/10 p-6 sm:p-8 flex flex-col gap-3 bg-white",
      children: [
        t.jsx("h3", {
          className:
            "font-lora font-medium text-black text-xl sm:text-2xl leading-snug",
          children: e.title,
        }),
        t.jsx("p", {
          className:
            "font-lato text-black/85 text-sm sm:text-base leading-relaxed",
          children: e.description,
        }),
      ],
    },
    s
  );
}
const K = {
  p2f4bbf00:
    "M66.6326 1.5004C104.799 94.958 130.958 268.217 66.6326 366.5C-19.042 497.404 18.0745 663.413 66.6326 731.5C123.964 811.89 138.433 1001.76 66.6328 1096.5C-23.3623 1215.25 -17.0013 1439.31 66.6327 1503",
};
m.registerPlugin(C);
const Z = [
  {
    number: "01",
    title: "Explore What Fits Your Stage",
    description:
      "Understand where you are in your menopause journey with resources and guidance tailored to your current needs.",
  },
  {
    number: "02",
    title: "Connect With Trusted Experts",
    description:
      "Find and connect with vetted menopause professionals and product providers you can trust.",
  },
  {
    number: "03",
    title: "Build a Plan That Works for You",
    description:
      "Create a personalised approach that supports your mind, body, lifestyle, and everyday reality.",
  },
  {
    number: "04",
    title: "Stay Supported Over Time",
    description:
      "Get ongoing guidance, tools, and community support as your needs evolve over time.",
  },
];
function ee() {
  const e = E.c(5),
    s = c.useRef(null),
    l = c.useRef(null),
    a = c.useRef(null);
  let n, u;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((n = () => {
        const i = m.context(() => {
          if (
            (l.current &&
              m.fromTo(
                l.current,
                { strokeDasharray: 1500, strokeDashoffset: 1500 },
                {
                  strokeDashoffset: 0,
                  scrollTrigger: {
                    trigger: s.current,
                    start: "top 60%",
                    end: "bottom bottom",
                    scrub: 1.5,
                  },
                  ease: "none",
                }
              ),
            a.current)
          ) {
            const x = a.current.querySelectorAll(".step-card");
            m.from(x, {
              scrollTrigger: {
                trigger: a.current,
                start: "top 70%",
                end: "bottom bottom",
                scrub: 1,
              },
              opacity: 0,
              x: ue,
              stagger: 0.2,
            });
          }
        }, s);
        return () => i.revert();
      }),
      (u = []),
      (e[0] = n),
      (e[1] = u))
    : ((n = e[0]), (u = e[1])),
    c.useLayoutEffect(n, u);
  let r;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((r = t.jsxs("div", {
        className: "flex flex-col items-center gap-4 mb-12 text-center",
        children: [
          t.jsxs("div", {
            className: "flex flex-col items-center gap-6",
            children: [
              t.jsx(v, { className: "w-5 h-5 text-brand" }),
              t.jsx("p", {
                className:
                  "font-lato font-semibold text-brand text-xs tracking-widest uppercase opacity-75",
                children: "How It Works",
              }),
            ],
          }),
          t.jsx("h2", {
            className:
              "font-lora font-medium text-black text-3xl sm:text-4xl lg:text-[44px] leading-tight max-w-xl",
            children: "Your Path Through Menopause",
          }),
        ],
      })),
      (e[2] = r))
    : (r = e[2]);
  let D;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((D = t.jsx("div", {
        className:
          "hidden lg:block absolute left-1/2 top-0 w-[114px] h-full -translate-x-1/2 pointer-events-none",
        children: t.jsx("svg", {
          className: "w-full h-full",
          fill: "none",
          preserveAspectRatio: "none",
          viewBox: "0 0 117 1505",
          children: t.jsx("path", {
            ref: l,
            d: K.p2f4bbf00,
            stroke: "#C7A486",
            strokeLinecap: "round",
            strokeWidth: "3",
            fill: "none",
          }),
        }),
      })),
      (e[3] = D))
    : (D = e[3]);
  let o;
  return (
    e[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((o = t.jsx("section", {
          ref: s,
          className: "w-full bg-white py-16 pb-8 px-6 sm:px-10 lg:px-16",
          children: t.jsxs("div", {
            className: "w-full max-w-7xl mx-auto",
            children: [
              r,
              t.jsxs("div", {
                className: "relative w-full",
                children: [
                  D,
                  t.jsx("div", {
                    ref: a,
                    className:
                      "relative flex flex-col gap-10 max-w-5xl mx-auto",
                    children: Z.map(te),
                  }),
                ],
              }),
            ],
          }),
        })),
        (e[4] = o))
      : (o = e[4]),
    o
  );
}
function te(e, s) {
  return t.jsx(
    "div",
    {
      className: `step-card flex ${
        s % 2 === 1 ? "lg:justify-end" : "lg:justify-start"
      } justify-center`,
      children: t.jsxs("div", {
        className:
          "flex flex-col gap-4 bg-white px-6 py-8 max-w-md text-center lg:text-left",
        children: [
          t.jsxs("div", {
            className:
              "bg-brand rounded-full px-3 py-1 flex items-center gap-2 w-fit mx-auto lg:mx-0",
            children: [
              t.jsx("div", { className: "w-1.5 h-1.5 bg-white rounded-full" }),
              t.jsxs("span", {
                className: "font-lato text-white text-xs uppercase",
                children: ["Step ", e.number],
              }),
            ],
          }),
          t.jsx("h3", {
            className:
              "font-lora font-medium text-black text-xl sm:text-2xl uppercase",
            children: e.title,
          }),
          t.jsx("p", {
            className:
              "font-lato text-black/85 text-sm sm:text-base leading-relaxed uppercase",
            children: e.description,
          }),
        ],
      }),
    },
    s
  );
}
function ue(e) {
  return e % 2 === 0 ? -50 : 50;
}
m.registerPlugin(C);
function se() {
  const e = E.c(7),
    s = c.useRef(null),
    l = c.useRef(null),
    a = c.useRef(null);
  let n, u;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((n = () => {
        const f = m.context(() => {
          s.current &&
            (m.fromTo(
              s.current,
              { borderTopLeftRadius: "50vw", borderTopRightRadius: "50vw" },
              {
                borderTopLeftRadius: "0vw",
                borderTopRightRadius: "0vw",
                ease: "none",
                scrollTrigger: {
                  trigger: s.current,
                  start: "top 90%",
                  end: "top 30%",
                  scrub: !0,
                },
              }
            ),
            m.to(s.current, {
              backgroundPosition: "50% 80%",
              scrollTrigger: {
                trigger: s.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            }),
            m.from([l.current, a.current], {
              scrollTrigger: {
                trigger: s.current,
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
              },
              opacity: 0,
              y: 30,
              stagger: 0.2,
            }));
        });
        return () => f.revert();
      }),
      (u = []),
      (e[0] = n),
      (e[1] = u))
    : ((n = e[0]), (u = e[1])),
    c.useLayoutEffect(n, u);
  let r, D;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((r = { backgroundImage: "url(/assets/quote-img.png)" }),
      (D = t.jsx("div", { className: "absolute inset-0 bg-black/50" })),
      (e[2] = r),
      (e[3] = D))
    : ((r = e[2]), (D = e[3]));
  let o;
  e[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((o = t.jsxs("div", {
        className: "font-lora flex flex-col gap-1",
        children: [
          t.jsx("p", { children: "With the right support," }),
          t.jsx("p", { children: "confidence returns." }),
          t.jsx("p", { children: "Energy returns." }),
        ],
      })),
      (e[4] = o))
    : (o = e[4]);
  let i;
  e[5] === Symbol.for("react.memo_cache_sentinel")
    ? ((i = t.jsx("div", {
        ref: l,
        className: "flex justify-end text-white/85",
        children: t.jsxs("div", {
          className:
            "flex flex-col gap-2 text-sm sm:text-base lg:text-lg max-w-md",
          children: [
            o,
            t.jsx("div", {
              className: "font-lora font-medium",
              children: t.jsx("p", { children: "You return." }),
            }),
          ],
        }),
      })),
      (e[5] = i))
    : (i = e[5]);
  let x;
  return (
    e[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((x = t.jsx("section", {
          className: "relative w-full bg-white overflow-hidden",
          children: t.jsxs("div", {
            ref: s,
            className: `
          relative min-h-screen flex flex-col w-full
          overflow-hidden
          bg-cover bg-top
        `,
            style: r,
            children: [
              D,
              t.jsxs("div", {
                className: `
            relative z-10 h-full flex-1 flex flex-col justify-between
            px-6 py-12
            sm:px-10 sm:py-16
            lg:px-24 lg:py-28
          `,
                children: [
                  i,
                  t.jsx("div", {
                    ref: a,
                    className: "max-w-full lg:max-w-1/2 mt-10 lg:mt-0",
                    children: t.jsxs("blockquote", {
                      className: `
                font-lora text-white leading-snug capitalize
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              `,
                      children: [
                        t.jsx("span", {
                          className: "font-medium",
                          children: '"',
                        }),
                        t.jsxs("span", {
                          children: [
                            t.jsx("span", {
                              className: "text-brand",
                              children: "Menopause",
                            }),
                            " is a",
                            " ",
                          ],
                        }),
                        t.jsx("em", {
                          className: "italic",
                          children: "transition",
                        }),
                        t.jsx("span", {
                          children: " — Not the End of Who You Are",
                        }),
                        t.jsx("span", {
                          className: "font-medium",
                          children: '"',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        })),
        (e[6] = x))
      : (x = e[6]),
    x
  );
}
m.registerPlugin(C);
function De() {
  const e = E.c(6),
    s = c.useRef(null);
  let l, a;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((l = () => {
        const i = m.context(() => {
          m.from(".join-animate", {
            scrollTrigger: { trigger: s.current, start: "top 70%" },
            opacity: 0,
            y: 24,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          });
        }, s);
        return () => i.revert();
      }),
      (a = []),
      (e[0] = l),
      (e[1] = a))
    : ((l = e[0]), (a = e[1])),
    c.useLayoutEffect(l, a);
  const n = le;
  let u;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((u = t.jsxs("div", {
        className: "join-animate flex flex-col items-center gap-3",
        children: [
          t.jsx(v, { className: "w-5 h-5 text-brand" }),
          t.jsx("p", {
            className:
              "text-[10px] tracking-widest uppercase text-brand font-lato",
            children: "Join the Community",
          }),
        ],
      })),
      (e[2] = u))
    : (u = e[2]);
  let r, D;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((r = t.jsxs("h2", {
        className:
          "join-animate font-lora text-[#211f1e] text-2xl sm:text-3xl lg:text-4xl leading-tight",
        children: ["Join the MenoHealth", t.jsx("br", {}), "Community"],
      })),
      (D = t.jsx("p", {
        className:
          "join-animate font-lato text-black/70 text-sm sm:text-base max-w-xl",
        children:
          "Be the first to access tools, events, and experts designed around your needs.",
      })),
      (e[3] = r),
      (e[4] = D))
    : ((r = e[3]), (D = e[4]));
  let o;
  return (
    e[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((o = t.jsx("section", {
          ref: s,
          className: "w-full bg-white py-16",
          children: t.jsxs("div", {
            className:
              "mx-auto max-w-4xl px-6 text-center flex flex-col items-center gap-6",
            children: [
              u,
              r,
              D,
              t.jsx("div", {
                className: "join-animate pt-2",
                children: t.jsx(P, { label: "Connect Now", onClick: n }),
              }),
            ],
          }),
        })),
        (e[5] = o))
      : (o = e[5]),
    o
  );
}
function le() {
  T.visit("/contact");
}
m.registerPlugin(C);
const ne = [{ title: "Home", href: "/home" }];
function xe() {
  const e = E.c(4),
    s = c.useRef(null);
  let l, a;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((l = () => {
        const r = m.context(re, s);
        return () => r.revert();
      }),
      (a = []),
      (e[0] = l),
      (e[1] = a))
    : ((l = e[0]), (a = e[1])),
    c.useEffect(l, a);
  let n;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((n = t.jsx(L, { title: "Home" })), (e[2] = n))
    : (n = e[2]);
  let u;
  return (
    e[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((u = t.jsxs(M, {
          breadcrumbs: ne,
          children: [
            n,
            t.jsxs("main", {
              ref: s,
              className: "w-full overflow-hidden bg-white",
              children: [
                t.jsx(H, {}),
                t.jsx(q, {}),
                t.jsx(G, {}),
                t.jsx(z, {}),
                t.jsx(Q, {}),
                t.jsx(ee, {}),
                t.jsx(se, {}),
                t.jsx(De, {}),
              ],
            }),
          ],
        })),
        (e[3] = u))
      : (u = e[3]),
    u
  );
}
function re() {
  C.refresh();
}
export { xe as default };
