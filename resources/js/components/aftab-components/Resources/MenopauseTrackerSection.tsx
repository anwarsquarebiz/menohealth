import React, { useState } from "react";
import { Heart } from "lucide-react";
import CustomBtn from "../CustomBtn";

const SYMPTOMS = [
  "Hot flushes",
  "Night sweats",
  "Sleep problems",
  "Fatigue / low energy",
  "Brain fog / memory issues",
  "Difficulty concentrating",
  "Mood swings",
  "Low mood or depression",
  "Anxiety / panic",
  "Irritability",
  "Low libido",
  "Vaginal dryness / discomfort",
  "Pain during sex",
  "Bladder issues",
  "Joint or muscle pain",
  "Headaches or migraines",
  "Heart palpitations",
  "Weight change",
  "Hair or skin changes",
  "Changes in menstrual cycle",
];

const LIFE_AREAS = [
  "Work / productivity",
  "Home / daily life",
  "Relationships",
  "Emotional wellbeing",
  "Social life",
  "Sleep quality",
];

const PRIORITIES = [
  "Mood & emotional stability",
  "Sleep improvement",
  "Relieving hot flushes",
  "Supporting intimacy & sex life",
  "Brain fog / cognitive clarity",
  "Weight, nutrition & metabolism",
  "Pain & physical comfort",
  "Overall energy & vitality",
  "Bone & heart health",
  "Understanding my stage of menopause",
  "A plan from a menopause specialist",
  "Community support / not feeling alone",
];

const SUPPORT_TYPES = [
  "Specialist medical advice (HRT etc.)",
  "Nutrition & supplements",
  "Fitness & pelvic health",
  "Mental wellbeing / CBT / coaching",
  "Holistic therapies",
  "Peer community conversations",
  "Lifestyle programmes & education",
];

export default function MenopauseTrackerSection() {
  /* ---------------- PERSONAL INFO ---------------- */
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    date: "",
    age: "",
    menstrualStatus: "",
  });

  /* ---------------- SYMPTOMS ---------------- */
  const [symptoms, setSymptoms] = useState<Record<string, number>>({});

  /* ---------------- LIFE IMPACT ---------------- */
  const [lifeImpact, setLifeImpact] = useState<Record<string, number>>({});

  /* ---------------- MEDICAL HISTORY ---------------- */
  const [medicalHistory, setMedicalHistory] = useState<Record<string, boolean>>(
    {
      earlyMenopause: false,
      anxietyDepression: false,
      thyroid: false,
      smoker: false,
      hysterectomy: false,
      hrt: false,
      contraception: false,
    }
  );

  const [otherMedicalNotes, setOtherMedicalNotes] = useState("");

  /* ---------------- PRIORITIES & SUPPORT ---------------- */
  const [priorities, setPriorities] = useState<string[]>([]);
  const [supportPreferences, setSupportPreferences] = useState<string[]>([]);
  const [otherPriority, setOtherPriority] = useState("");

  /* ---------------- HELPERS ---------------- */
  const totalSymptomScore = Object.values(symptoms).reduce((a, b) => a + b, 0);

  const toggleMultiSelect = (
    value: string,
    list: string[],
    setter: (v: string[]) => void,
    limit?: number
  ) => {
    if (list.includes(value)) {
      setter(list.filter((v) => v !== value));
    } else {
      if (!limit || list.length < limit) {
        setter([...list, value]);
      }
    }
  };

  const handleSubmit = () => {
    const payload = {
      personalInfo,
      symptoms,
      lifeImpact,
      medicalHistory,
      priorities: otherPriority ? [...priorities, otherPriority] : priorities,
      supportPreferences,
      totalSymptomScore,
    };

    console.log("TRACKER DATA 👉", payload);
    alert("Tracker data logged in console.");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* ---------- HEADER ---------- */}
        <div className="flex flex-col items-center gap-4 mb-14 text-center">
          <Heart className="w-5 h-5 text-brand" />
          <p className="font-lato text-xs uppercase tracking-widest text-brand opacity-75">
            MENOPAUSE SYMPTOM TRACKER
          </p>
          <h2 className="font-lora text-black text-2xl sm:text-3xl lg:text-4xl max-w-2xl">
            Understand Your Symptoms. Take Control.
          </h2>
          <p className="font-lato text-sm text-black/70 max-w-3xl">
            Track symptoms, understand their impact, and build a clearer picture
            of what support you may need — all in one place.
          </p>
        </div>

        {/* ---------- PERSONAL INFO ---------- */}
        <Section title="Personal Information">
          <Input
            label="Name"
            value={personalInfo.name}
            placeholder="eg: Jhon Doe"
            onChange={(v) => setPersonalInfo({ ...personalInfo, name: v })}
          />
          <Input
            label="Date"
            type="date"
            value={personalInfo.date}
            onChange={(v) => setPersonalInfo({ ...personalInfo, date: v })}
          />
          <Input
            label="Age"
            type="number"
            value={personalInfo.age}
            placeholder="eg: 21"
            onChange={(v) => setPersonalInfo({ ...personalInfo, age: v })}
          />

          <Select
            label="Menstrual Status"
            options={[
              "Regular periods",
              "Irregular periods",
              "No periods (12+ months)",
            ]}
            value={personalInfo.menstrualStatus}
            onChange={(v) =>
              setPersonalInfo({ ...personalInfo, menstrualStatus: v })
            }
          />
        </Section>

        {/* ---------- SYMPTOMS ---------- */}
        <Section title="Symptom Rating (Past 4 Weeks)">
          {SYMPTOMS.map((symptom) => (
            <RatingRow
              key={symptom}
              label={symptom}
              value={symptoms[symptom]}
              onChange={(v) => setSymptoms({ ...symptoms, [symptom]: v })}
            />
          ))}
          <p className="text-sm text-black/70 mt-4">
            Total Symptom Score: <b>{totalSymptomScore} / 60</b>
          </p>
        </Section>

        {/* ---------- LIFE IMPACT ---------- */}
        <Section title="Life Impact Assessment">
          {LIFE_AREAS.map((area) => (
            <RatingRow
              key={area}
              label={area}
              value={lifeImpact[area]}
              onChange={(v) => setLifeImpact({ ...lifeImpact, [area]: v })}
            />
          ))}
        </Section>

        {/* ---------- MEDICAL HISTORY ---------- */}
        <Section title="Medical & Personal History">
          {Object.entries(medicalHistory).map(([key, value]) => (
            <Checkbox
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              checked={value}
              onChange={(v) =>
                setMedicalHistory({ ...medicalHistory, [key]: v })
              }
            />
          ))}

          <textarea
            className="mt-4 w-full text-black/85 rounded-xl border border-black/10 p-4 text-sm"
            placeholder="Other medical conditions or medications..."
            value={otherMedicalNotes}
            onChange={(e) => setOtherMedicalNotes(e.target.value)}
          />
        </Section>

        {/* ---------- PRIORITIES ---------- */}
        <Section title="What Matters Most Right Now (Select up to 3)">
          {PRIORITIES.map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={priorities.includes(item)}
              onChange={() =>
                toggleMultiSelect(item, priorities, setPriorities, 3)
              }
            />
          ))}

          <Input
            label="Other"
            value={otherPriority}
            onChange={setOtherPriority}
            placeholder="Write Other Info Here..."
          />
        </Section>

        {/* ---------- SUPPORT ---------- */}
        <Section title="Preferred Types of Support">
          {SUPPORT_TYPES.map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={supportPreferences.includes(item)}
              onChange={() =>
                toggleMultiSelect(
                  item,
                  supportPreferences,
                  setSupportPreferences
                )
              }
            />
          ))}
        </Section>

        {/* ---------- SUBMIT ---------- */}
        <div className="mt-14 flex justify-center">
          {/* <button
            onClick={handleSubmit}
            className="rounded-full bg-brand px-10 py-3 text-sm font-lato uppercase tracking-widest text-white hover:bg-[#b89476] transition"
          >
            Submit Tracker
          </button> */}
          <CustomBtn label={"Submit Tracker"} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- SMALL UI PARTS ---------------- */

const Section = ({ title, children }: any) => (
  <div className="mb-14">
    <h3 className="font-lora text-xl mb-6 text-black">{title}</h3>
    <div className="grid gap-4">{children}</div>
  </div>
);

const Input = ({ label, value, onChange, type = "text", placeholder }: any) => (
  <div>
    <label className="text-sm text-black/70">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mt-1 w-full text-black/85 rounded-xl border border-black/10 px-4 py-2 text-sm"
    />
  </div>
);

const Select = ({ label, options, value, onChange }: any) => (
  <div>
    <label className="text-sm text-black/70">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full rounded-xl text-black/85 border border-black/10 px-4 py-2 text-sm"
    >
      <option value="">Select</option>
      {options.map((o: string) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

const RatingRow = ({ label, value, onChange }: any) => (
  <div className="flex items-center justify-between gap-4">
    <span className="text-sm text-black/80">{label}</span>
    <div className="flex gap-2">
      {[0, 1, 2, 3].map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`w-8 h-8 text-xs rounded-full border ${
            value === n
              ? "bg-brand text-white border-brand"
              : "border-black/20 text-black/85"
          }`}
        >
          {n}
        </button>
      ))}
    </div>
  </div>
);

const Checkbox = ({ label, checked, onChange }: any) => (
  <label className="flex text-black items-center gap-3 text-sm cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="accent-brand"
    />
    {label}
  </label>
);
