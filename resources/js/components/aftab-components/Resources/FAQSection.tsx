import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ITEMS_PER_PAGE = 6;

const faqs = [
  {
    question: "What is menopause?",
    answer: [
      {
        type: "paragraph",
        text:
          "Menopause is the time when a woman stops having menstrual periods for 12 consecutive months due to a natural decline in hormones, especially oestrogen. It marks the end of reproductive years.",
      },
    ],
  },

  {
    question: "What is peri-menopause?",
    answer: [
      {
        type: "paragraph",
        text:
          "Peri-menopause is the transition leading up to menopause. Hormones fluctuate, and symptoms may begin even while periods are still happening — often in a less predictable pattern.",
      },
    ],
  },

  {
    question: "When does menopause usually start?",
    answer: [
      {
        type: "paragraph",
        text:
          "Most women reach menopause between 45–55, with the average age around 51.",
      },
      {
        type: "paragraph",
        text: "Peri-menopause can start 4–8 years earlier.",
      },
    ],
  },

  {
    question: "What are the most common symptoms?",
    answer: [
      {
        type: "paragraph",
        text: "Symptoms vary but commonly include:",
      },
      {
        type: "list",
        items: [
          "Hot flushes and night sweats",
          "Irregular or heavy periods",
          "Mood changes and anxiety",
          "Brain fog and memory issues",
          "Fatigue and sleep problems",
          "Vaginal dryness and low libido",
          "Weight changes",
        ],
      },
      {
        type: "paragraph",
        text:
          "Every woman’s experience is unique — some have mild symptoms, others more severe.",
      },
    ],
  },

  {
    question: "How long does menopause last?",
    answer: [
      {
        type: "list",
        items: [
          "Peri-menopause can last 4–10 years",
          "Symptoms may continue into post-menopause — some only briefly, others longer-term",
        ],
      },
    ],
  },

  {
    question: "How is menopause diagnosed?",
    answer: [
      {
        type: "list",
        items: [
          "If you’re over 45: usually based on symptoms and menstrual changes",
          "If you’re under 45: a blood test may be used to check hormone levels",
        ],
      },
    ],
  },

  {
    question: "What is post-menopause?",
    answer: [
      {
        type: "paragraph",
        text:
          "Post-menopause is the time after menopause — symptoms may ease but health considerations like bone and heart health become more important.",
      },
    ],
  },

  {
    question: "What treatments are available?",
    answer: [
      {
        type: "paragraph",
        text: "Options include:",
      },
      {
        type: "list",
        items: [
          "HRT (Hormone Replacement Therapy)",
          "Non-hormonal medication",
          "Cognitive behavioral therapy (CBT)",
          "Nutrition, supplements, fitness & lifestyle changes",
          "Pelvic health physiotherapy",
          "Talk therapy / coaching",
        ],
      },
      {
        type: "paragraph",
        text:
          "Getting personalised care helps you choose what’s right for you.",
      },
    ],
  },

  {
    question: "What is HRT and how does it help?",
    answer: [
      {
        type: "paragraph",
        text:
          "HRT replaces hormones that decline during menopause. It can help with:",
      },
      {
        type: "list",
        items: [
          "Hot flushes & night sweats",
          "Low mood & anxiety",
          "Sleep problems",
          "Joint aches",
          "Vaginal dryness",
          "Long-term bone protection",
        ],
      },
      {
        type: "paragraph",
        text:
          "Your healthcare provider will discuss benefits, risks, and the best formulation for you.",
      },
    ],
  },

  {
    question: "Is menopause linked to mental health issues?",
    answer: [
      {
        type: "paragraph",
        text: "Yes — hormonal changes can affect:",
      },
      {
        type: "list",
        items: [
          "Mood",
          "Stress response",
          "Concentration",
          "Emotional resilience",
        ],
      },
      {
        type: "paragraph",
        text:
          "Support is available through therapy, medication, lifestyle changes, and peer support.",
      },
    ],
  },

  {
    question: "Can menopause affect sex and intimacy?",
    answer: [
      {
        type: "paragraph",
        text:
          "Yes. Vaginal dryness, pain during intercourse, and reduced libido are common.",
      },
      {
        type: "paragraph",
        text:
          "Treatments — including vaginal oestrogen, lubricants, moisturisers, and sexual therapy — can make intimacy enjoyable again.",
      },
    ],
  },

  {
    question: "Does menopause increase health risks?",
    answer: [
      {
        type: "paragraph",
        text: "Lower oestrogen can impact:",
      },
      {
        type: "list",
        items: [
          "Bone density → osteoporosis risk",
          "Heart health → increased cardiovascular risk",
          "Metabolism → weight and cholesterol changes",
        ],
      },
      {
        type: "paragraph",
        text:
          "Regular health checks, exercise, and nutrition help protect long-term health.",
      },
    ],
  },

  {
    question: "Can early or surgical menopause cause different symptoms?",
    answer: [
      {
        type: "paragraph",
        text:
          "Yes. If menopause happens before 45 (early) or before 40 (premature), symptoms may be more intense and medical treatment is often recommended for long-term protection.",
      },
    ],
  },

  {
    question: "What lifestyle changes help symptoms?",
    answer: [
      {
        type: "list",
        items: [
          "Regular exercise",
          "Nutrient-rich diet",
          "Prioritising sleep",
          "Managing stress",
          "Reducing alcohol and caffeine",
          "Staying socially connected",
        ],
      },
      {
        type: "paragraph",
        text: "Small, consistent changes make a big difference.",
      },
    ],
  },

  {
    question: "Where can I get help?",
    answer: [
      {
        type: "paragraph",
        text: "You can speak to:",
      },
      {
        type: "list",
        items: [
          "Your GP, gynaecologist, or menopause specialist",
          "Pharmacists trained in women’s health",
          "Accredited nutritionists, physiotherapists, and therapists",
          "Peer support communities like MenoHealth",
        ],
      },
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const sectionRef = useRef<HTMLElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        y: 30,
        opacity: 0,
      });

      if (faqsRef.current) {
        gsap.from(faqsRef.current.querySelectorAll(".faq-item"), {
          scrollTrigger: {
            trigger: faqsRef.current,
            start: "top 75%",
            end: "bottom bottom",
            scrub: 1,
          },
          y: 30,
          opacity: 0,
          stagger: 0.05,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- SEARCH FILTER ---------------- */
  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /* ---------------- PAGINATION LOGIC ---------------- */
  const totalPages = Math.ceil(filteredFAQs.length / ITEMS_PER_PAGE);

  const paginatedFAQs = filteredFAQs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* Reset page when search changes */
  useEffect(() => {
    setCurrentPage(1);
    setOpenIndex(null);
  }, [searchQuery]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="faq-heading flex flex-col items-center gap-4 mb-12 text-center">
          <Heart className="w-5 h-5 text-[#c7a486]" />

          <p className="font-lato text-xs uppercase tracking-widest text-[#c7a486] opacity-75">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="font-lora font-medium text-black text-2xl sm:text-3xl lg:text-4xl max-w-2xl">
            Your Questions About Menopause, Answered
          </h2>

          {/* Search */}
          <div className="w-full max-w-xl mt-4">
            <div className="flex flex-col sm:flex-row overflow-hidden rounded-full border border-black/20">
              <input
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-3 font-lato text-sm text-black/85 bg-transparent focus:outline-none"
              />
              <button className="bg-[#c7a486]/70 hover:bg-[#c7a486] transition-colors px-6 py-3 text-sm font-lato text-white">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div ref={faqsRef} className="mx-auto max-w-3xl">
          {paginatedFAQs.map((faq, index) => {
            const realIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;

            return (
              <div
                key={realIndex}
                className="faq-item border-b border-black/10 last:border-none"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === realIndex ? null : realIndex)
                  }
                  className="w-full py-5 sm:py-6 flex items-start justify-between gap-4 text-left hover:bg-black/5 transition rounded-md px-2 sm:px-4"
                >
                  <h3 className="font-lora text-base sm:text-lg text-black">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c7a486] transition-transform ${
                      openIndex === realIndex ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === realIndex && (
                  <div className="px-2 sm:px-4 pb-6">
                    <div className="flex flex-col gap-3">
                      {faq.answer.map((block, i) => {
                        if (block.type === "paragraph") {
                          return (
                            <p
                              key={i}
                              className="font-lato text-sm sm:text-base text-black/70 leading-relaxed"
                            >
                              {block.text}
                            </p>
                          );
                        }

                        if (block.type === "list") {
                          return (
                            <ul
                              key={i}
                              className="list-disc pl-5 space-y-1 font-lato text-sm sm:text-base text-black/70"
                            >
                              {block.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          );
                        }

                        return null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2 flex-wrap">
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setOpenIndex(null);
                  }}
                  className={`
                    px-4 py-2 rounded-full text-sm font-lato transition
                    ${
                      isActive
                        ? "bg-[#c7a486] text-white"
                        : "border border-black/20 text-black/70 hover:bg-black/5"
                    }
                  `}
                >
                  {page}
                </button>
              );
            })}
          </div>
        )}

        {filteredFAQs.length === 0 && (
          <p className="mt-8 text-center text-sm font-lato text-black/50">
            No FAQs found matching your search.
          </p>
        )}
      </div>
    </section>
  );
}
