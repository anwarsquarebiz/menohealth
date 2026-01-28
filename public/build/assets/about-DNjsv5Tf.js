import { c as p, r as c, j as t, H as b } from "./app-sbiZZbzh.js";
import { g as i, H as h, S as f, a as y } from "./site-layout-Co0qRaK2.js";
/* empty css            */ import "./createLucideIcon-0TJadoOv.js";
import "./x-jz9tJxld.js";
function w() {
  const e = p.c(5),
    n = c.useRef(null),
    l = c.useRef(null),
    r = c.useRef(null),
    o = c.useRef(null);
  let s, a;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((s = () => {
        const g = i.context(() => {
          i.timeline({ delay: 0.3 })
            .from(l.current, {
              y: 50,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
            })
            .from(
              r.current,
              { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
              "-=0.5"
            )
            .from(
              o.current,
              { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
              "-=0.4"
            );
        }, n);
        return () => g.revert();
      }),
      (a = []),
      (e[0] = s),
      (e[1] = a))
    : ((s = e[0]), (a = e[1])),
    c.useLayoutEffect(s, a);
  let m;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((m = t.jsxs("div", {
        className: "absolute inset-0 pointer-events-none opacity-5",
        children: [
          t.jsx("div", {
            className:
              "absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-brand rounded-full -top-40 -right-40 blur-3xl",
          }),
          t.jsx("div", {
            className:
              "absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-brand rounded-full -bottom-20 -left-20 blur-3xl",
          }),
        ],
      })),
      (e[2] = m))
    : (m = e[2]);
  let d;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((d = t.jsxs("h1", {
        ref: l,
        className: `
            font-lora font-medium text-black
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[76px]
            leading-tight lg:leading-normal
            max-w-[1485px]
          `,
        children: [
          "Supporting Women Through Every Stage of",
          " ",
          t.jsx("span", { className: "text-brand", children: "Menopause" }),
        ],
      })),
      (e[3] = d))
    : (d = e[3]);
  let x;
  return (
    e[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((x = t.jsxs("section", {
          ref: n,
          className: `
        relative w-full
        min-h-screen
        flex items-center
        bg-gradient-to-br from-[#faf9f8] to-white
        overflow-hidden
      `,
          children: [
            m,
            t.jsxs("div", {
              className: `
          relative z-10 w-full max-w-[1710px] mx-auto
          px-6 sm:px-10 lg:px-24
          flex flex-col gap-10 lg:gap-12
          items-center lg:items-end
          text-center lg:text-right
        `,
              children: [
                d,
                t.jsxs("div", {
                  className: `
            w-full flex flex-col lg:flex-row
            gap-6 lg:gap-10
            items-center lg:items-end
            justify-between
          `,
                  children: [
                    t.jsxs("p", {
                      ref: r,
                      className: `
              font-lato font-medium
              text-base sm:text-lg md:text-xl lg:text-2xl
              leading-relaxed
              max-w-[772px]
              text-black/85
            `,
                      children: [
                        t.jsx("span", {
                          className: "text-brand",
                          children: "Menopause",
                        }),
                        " is a universal experience, yet millions of women still feel unheard, uninformed, and unsupported. The journey can bring physical changes, emotional challenges, and shifts in identity — and too often, the systems meant to help fall short.",
                      ],
                    }),
                    t.jsx("p", {
                      ref: o,
                      className: `
              font-lato font-semibold
              text-brand
              text-[11px] sm:text-xs
              tracking-widest
              uppercase
              whitespace-nowrap
            `,
                      children: "— ABOUT MENOPAUSE",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })),
        (e[4] = x))
      : (x = e[4]),
    x
  );
}
i.registerPlugin(f);
const u = [
  {
    title: "Clear, Evidence-Based Information",
    description:
      "Reliable, clinically informed guidance that helps women understand what's happening in their bodies — without misinformation, fear, or conflicting advice.",
  },
  {
    title: "Expert Care You Can Trust",
    description:
      "Access to menopause practitioners and specialists who are vetted for expertise, experience, and a genuine understanding of women's health.",
  },
  {
    title: "Personalised Support, Not One-Size-Fits-All",
    description:
      "Menopause is not the same for everyone. We believe support should reflect individual needs, preferences, and lived experiences.",
  },
  {
    title: "Choice in How Women Manage Wellbeing",
    description:
      "From medical options to lifestyle support, women should have the freedom to choose what works best for their bodies and their lives.",
  },
  {
    title: "Services Designed for Midlife Women",
    description:
      "Carefully selected products, tools, and services created specifically to support women through peri-menopause, menopause, and beyond.",
  },
];
function v() {
  const e = p.c(5),
    n = c.useRef(null),
    l = c.useRef(null);
  let r, o;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((r = () => {
        const d = i.context(() => {
          if (
            (i.from(".why-exist-heading", {
              scrollTrigger: {
                trigger: n.current,
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
              },
              y: 30,
              opacity: 0,
            }),
            l.current)
          ) {
            const x = l.current.querySelectorAll(".why-card");
            i.from(x, {
              scrollTrigger: {
                trigger: l.current,
                start: "top 75%",
                end: "bottom bottom",
                scrub: 1,
              },
              y: 40,
              opacity: 0,
              stagger: 0.1,
            });
          }
        }, n);
        return () => d.revert();
      }),
      (o = []),
      (e[0] = r),
      (e[1] = o))
    : ((r = e[0]), (o = e[1])),
    c.useLayoutEffect(r, o);
  let s;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((s = t.jsxs("div", {
        className:
          "why-exist-heading flex flex-col items-center gap-4 mb-12 text-center",
        children: [
          t.jsxs("div", {
            className: "flex flex-col items-center gap-4",
            children: [
              t.jsx(h, { className: "w-5 h-5 text-brand" }),
              t.jsx("p", {
                className:
                  "font-lato text-xs uppercase tracking-widest text-brand opacity-75",
                children: "Why We Exist",
              }),
            ],
          }),
          t.jsx("h2", {
            className:
              "font-lora font-medium text-[#211f1e] text-2xl sm:text-3xl lg:text-4xl max-w-2xl",
            children: "Menopause is personal. Support should be too.",
          }),
          t.jsx("p", {
            className:
              "font-lato text-xs sm:text-sm uppercase tracking-wider text-black/80 max-w-3xl opacity-75",
            children:
              "Over one billion women globally are navigating peri-menopause or menopause right now. Many struggle to access the right care, support, and information.",
          }),
        ],
      })),
      (e[2] = s))
    : (s = e[2]);
  let a;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((a = u.slice(0, 2).map(N)), (e[3] = a))
    : (a = e[3]);
  let m;
  return (
    e[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((m = t.jsx("section", {
          ref: n,
          className: "w-full bg-white py-16",
          children: t.jsxs("div", {
            className: "mx-auto max-w-7xl px-6",
            children: [
              s,
              t.jsxs("div", {
                ref: l,
                className: `
    grid gap-6
    grid-cols-1
    md:grid-cols-2
    max-w-[1400px]
    mx-auto
    px-4 sm:px-8 lg:px-16
  `,
                children: [
                  a,
                  t.jsx("div", {
                    className: "md:col-span-2 flex justify-center",
                    children: t.jsxs("div", {
                      className:
                        "why-card max-w-[620px] w-full border border-black/10 rounded-xl p-6 sm:p-8",
                      children: [
                        t.jsx("h3", {
                          className:
                            "font-lora text-lg sm:text-xl text-black mb-2",
                          children: u[2].title,
                        }),
                        t.jsx("p", {
                          className:
                            "font-lato text-sm sm:text-base text-black/85 leading-relaxed",
                          children: u[2].description,
                        }),
                      ],
                    }),
                  }),
                  u.slice(3, 5).map(j),
                ],
              }),
            ],
          }),
        })),
        (e[4] = m))
      : (m = e[4]),
    m
  );
}
function j(e, n) {
  return t.jsxs(
    "div",
    {
      className: "why-card border border-black/10 rounded-xl p-6 sm:p-8",
      children: [
        t.jsx("h3", {
          className: "font-lora text-lg sm:text-xl text-black mb-2",
          children: e.title,
        }),
        t.jsx("p", {
          className:
            "font-lato text-sm sm:text-base text-black/85 leading-relaxed",
          children: e.description,
        }),
      ],
    },
    n
  );
}
function N(e, n) {
  return t.jsxs(
    "div",
    {
      className: "why-card border border-black/10 rounded-xl p-6 sm:p-8",
      children: [
        t.jsx("h3", {
          className: "font-lora text-lg sm:text-xl text-black mb-2",
          children: e.title,
        }),
        t.jsx("p", {
          className:
            "font-lato text-sm sm:text-base text-black/85 leading-relaxed",
          children: e.description,
        }),
      ],
    },
    n
  );
}
i.registerPlugin(f);
function _() {
  const e = p.c(4),
    n = c.useRef(null);
  let l, r;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((l = () => {
        const a = i.context(() => {
          i.from(".team-left", {
            scrollTrigger: {
              trigger: n.current,
              start: "top 70%",
              end: "top 30%",
              scrub: 1,
            },
            x: -50,
            opacity: 0,
          }),
            i.from(".team-right", {
              scrollTrigger: {
                trigger: n.current,
                start: "top 70%",
                end: "top 30%",
                scrub: 1,
              },
              x: 50,
              opacity: 0,
            });
        }, n);
        return () => a.revert();
      }),
      (r = []),
      (e[0] = l),
      (e[1] = r))
    : ((l = e[0]), (r = e[1])),
    c.useLayoutEffect(l, r);
  let o;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((o = t.jsxs("div", {
        className: "team-left flex flex-col gap-4",
        children: [
          t.jsx("p", {
            className:
              "font-lato text-xs sm:text-sm uppercase tracking-widest text-black/60",
            children: "OUR TEAM",
          }),
          t.jsx("h2", {
            className: `
              font-lora font-medium text-black
              text-2xl sm:text-3xl lg:text-4xl
              leading-snug
              max-w-lg
            `,
            children: "A Team Driven by Women's Wellbeing",
          }),
        ],
      })),
      (e[2] = o))
    : (o = e[2]);
  let s;
  return (
    e[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((s = t.jsx("section", {
          ref: n,
          className: "w-full bg-white py-16",
          children: t.jsxs("div", {
            className: `
          mx-auto max-w-7xl
          px-6 sm:px-8 lg:px-16
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-16
          items-start
        `,
            children: [
              o,
              t.jsxs("div", {
                className: `
            team-right
            font-lato text-black/85
            text-sm sm:text-base lg:text-lg
            leading-relaxed
            flex flex-col gap-5
            max-w-2xl
          `,
                children: [
                  t.jsx("p", {
                    children:
                      "With roots in both India and London, we are a diverse and committed team united by one mission: to give every woman navigating peri-menopause and menopause access to clear information, trusted support, and high-quality care — all in one place.",
                  }),
                  t.jsx("p", {
                    children:
                      "Every day, we are motivated by the women we meet along this journey — women who deserve answers, not confusion. We understand how overwhelming the flood of advice can feel.",
                  }),
                  t.jsx("p", {
                    children:
                      "We're here to provide a simpler, stronger starting point — cutting through noise to deliver guidance women can truly trust.",
                  }),
                  t.jsx("p", {
                    children:
                      "Our passion is to help women feel healthy, confident, and in control, so menopause never becomes a barrier to living life fully. By empowering women with choice, knowledge, and connection, we're committed to creating meaningful change — one life at a time.",
                  }),
                ],
              }),
            ],
          }),
        })),
        (e[3] = s))
      : (s = e[3]),
    s
  );
}
i.registerPlugin(f);
const S = [
  {
    title: "Empowerment",
    description:
      "We give women the tools, knowledge, and confidence to take control of their wellbeing through every stage of menopause.",
  },
  {
    title: "Trust",
    description:
      "Everything we share is evidence-based, clinically reviewed, and created to inform — never to mislead or profit from uncertainty.",
  },
  {
    title: "Community",
    description:
      "We believe no woman should feel alone during menopause. Real connection and shared experiences create lasting support.",
  },
  {
    title: "Accessibility",
    description:
      "Whether it's understanding symptoms, accessing practitioners, or connecting with others, menopause support should be simple, approachable, and inclusive.",
  },
  {
    title: "Integrity",
    description:
      "Our recommendations are independent — never influenced by partnerships or advertising. We stand by the quality and credibility of everything we recommend.",
  },
  {
    title: "Compassion",
    description:
      "We approach every woman's journey with empathy, dignity, and respect. You are not just a set of symptoms — you are seen, heard, and valued.",
  },
];
function k() {
  const e = p.c(4),
    n = c.useRef(null),
    l = c.useRef(null);
  let r, o;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((r = () => {
        const m = i.context(() => {
          if (
            (i.from(".values-heading", {
              scrollTrigger: {
                trigger: n.current,
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
              },
              y: 30,
              opacity: 0,
            }),
            l.current)
          ) {
            const d = l.current.querySelectorAll(".value-card");
            i.from(d, {
              scrollTrigger: {
                trigger: l.current,
                start: "top 75%",
                end: "bottom bottom",
                scrub: 1,
              },
              y: 40,
              opacity: 0,
              stagger: 0.08,
            });
          }
        }, n);
        return () => m.revert();
      }),
      (o = []),
      (e[0] = r),
      (e[1] = o))
    : ((r = e[0]), (o = e[1])),
    c.useLayoutEffect(r, o);
  let s;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((s = t.jsxs("div", {
        className:
          "values-heading flex flex-col items-center gap-4 mb-12 text-center",
        children: [
          t.jsxs("div", {
            className: "flex flex-col items-center gap-4",
            children: [
              t.jsx(h, { className: "w-5 h-5 text-brand" }),
              t.jsx("p", {
                className:
                  "font-lato text-xs uppercase tracking-widest text-brand opacity-75",
                children: "OUR BRAND VALUES",
              }),
            ],
          }),
          t.jsx("h2", {
            className:
              "font-lora font-medium text-[#211f1e] text-2xl sm:text-3xl lg:text-4xl max-w-2xl",
            children: "What We Stand For",
          }),
        ],
      })),
      (e[2] = s))
    : (s = e[2]);
  let a;
  return (
    e[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((a = t.jsx("section", {
          ref: n,
          className: "w-full bg-white py-16",
          children: t.jsxs("div", {
            className: "mx-auto max-w-7xl px-6",
            children: [
              s,
              t.jsx("div", {
                ref: l,
                className: `
            grid gap-6
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          `,
                children: S.map(R),
              }),
            ],
          }),
        })),
        (e[3] = a))
      : (a = e[3]),
    a
  );
}
function R(e, n) {
  return t.jsxs(
    "div",
    {
      className: `
                value-card
                border border-black/10
                rounded-xl
                p-6 sm:p-8
                bg-white
                flex flex-col gap-3
              `,
      children: [
        t.jsx("h3", {
          className: "font-lora text-lg sm:text-xl text-black",
          children: e.title,
        }),
        t.jsx("p", {
          className:
            "font-lato text-sm sm:text-base text-black/85 leading-relaxed",
          children: e.description,
        }),
      ],
    },
    n
  );
}
i.registerPlugin(f);
const E = [{ title: "About", href: "/about" }];
function $() {
  const e = p.c(4),
    n = c.useRef(null);
  let l, r;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((l = () => {
        const a = i.context(W, n);
        return () => a.revert();
      }),
      (r = []),
      (e[0] = l),
      (e[1] = r))
    : ((l = e[0]), (r = e[1])),
    c.useEffect(l, r);
  let o;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((o = t.jsx(b, { title: "About" })), (e[2] = o))
    : (o = e[2]);
  let s;
  return (
    e[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((s = t.jsxs(y, {
          breadcrumbs: E,
          children: [
            o,
            t.jsxs("main", {
              ref: n,
              className: "w-full overflow-hidden bg-white",
              children: [
                t.jsx(w, {}),
                t.jsx(v, {}),
                t.jsx(_, {}),
                t.jsx(k, {}),
              ],
            }),
          ],
        })),
        (e[3] = s))
      : (s = e[3]),
    s
  );
}
function W() {
  f.refresh();
}
export { $ as default };
