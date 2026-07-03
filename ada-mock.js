// Mock data for ADA prototype
window.ADA_MOCK = {
  patient: {
    name: "Ona Petraitienė",
    initials: "OP",
    gender: "Female",
    age: 58,
    dob: "1967-03-14",
    phone: "+370 612 34 567",
    allergies: ["Penicillin"],
    problems: [
      { code: "I10", label: "Hypertension" },
      { code: "E11.9", label: "Type 2 Diabetes" },
      { code: "E78.5", label: "Hyperlipidemia" },
    ],
    chiefComplaint:
      "Intermittent numbness in right thumb with pulling sensation when extending arm. ~2 weeks duration.",
    vitals: {
      BP: "132/84",
      HR: "76 bpm",
      "SpO₂": "98 %",
      Temp: "36.6 °C",
      Weight: "72 kg",
    },
    recentVisits: [
      { date: "2025-11-20", specialty: "Cardiology", note: "BP review — ramipril continued; BP 128/80 at home." },
      { date: "2025-08-03", specialty: "GP", note: "URI, supportive care, no antibiotics." },
      { date: "2025-05-12", specialty: "GP", note: "Annual physical, labs ordered, HbA1c slightly up." },
    ],
  },

  patientsToday: [
    { id: "ona", name: "Ona Petraitienė", initials: "OP", time: "10:59 AM", active: true },
  ],
  patientsOlder: [
    { id: "tadas", name: "Tadas Vasiliauskas", initials: "TV", time: "Wed" },
    { id: "rasa", name: "Rasa Jonaitienė", initials: "RJ", time: "Tue" },
    { id: "marius", name: "Marius Kazlauskas", initials: "MK", time: "Mon" },
  ],
  encountersToday: [
    { id: "enc1", name: "Encounter 10:59 PM", initials: "—", time: "10:59 PM" },
  ],
  encountersOlder: [
    { id: "enc2", name: "Encounter — fatty liver Q&A", initials: "—", time: "Fri" },
  ],

  e025: [
    {
      label: "Chief complaint",
      ai: true,
      content:
        "Intermittent numbness in right thumb with pulling sensation when extending arm.",
    },
    {
      label: "History of present illness",
      ai: true,
      content:
        "Patient reports numbness in part of the right thumb for ~2 weeks. Pulling sensation along upper thumb with wrist rotation. Pain/inflammation when arm is extended — not constant, movement-triggered. No neck pain, no weakness reported.",
    },
    {
      label: "Past medical history",
      ai: false,
      content:
        "Hypertension (I10) on ramipril 5 mg; Type 2 Diabetes (E11.9) on metformin 1000 mg BID; Hyperlipidemia on atorvastatin 20 mg. Penicillin allergy.",
    },
    {
      label: "Examination",
      ai: true,
      content:
        "Right thumb: full ROM, no swelling, tenderness over dorsal aspect, positive Finkelstein test. Neuro: sensation intact except mild reduction over median nerve distribution.",
    },
    {
      label: "Assessment",
      ai: true,
      content:
        "Likely de Quervain's tenosynovitis vs early carpal tunnel syndrome. Comorbid T2DM and hypertension — borderline metabolic control (HbA1c 7.1 %, LDL 142).",
    },
    {
      label: "Plan",
      ai: true,
      content:
        "1) Wrist splint + NSAIDs. 2) Refer Neurology for NCS if not improved in 2 weeks. 3) Tighten glycemic & lipid control: recheck HbA1c in 3 mo, consider statin up-titration. 4) Follow up in 2 weeks.",
    },
  ],

  // Consultation tab (v2) — 9 structured sections across 3 groups
  consultation: {
    complaints: {
      ai: "drafted",
      value:
        "Intermittent numbness in right thumb with pulling sensation when extending arm. ~2 weeks duration.",
    },
    hpi: {
      ai: "drafted",
      value:
        "Patient reports numbness in part of the right thumb for ~2 weeks. Pulling sensation along upper thumb with wrist rotation. Pain/inflammation when arm is extended — movement-triggered, not constant. No neck pain, no weakness reported.",
    },
    pmh: {
      ai: "edited",
      value:
        "Hypertension (I10) on ramipril 5 mg; Type 2 Diabetes (E11.9) on metformin 1000 mg BID; Hyperlipidemia on atorvastatin 20 mg. Non-smoker, occasional alcohol.",
    },
    fh: { ai: "missing", value: "" },
    vitals: {
      ai: "drafted",
      value: {
        BP: "132/84 mmHg",
        HR: "76 bpm",
        "SpO₂": "98 %",
        Temp: "36.6 °C",
        Resp: "16 k/min",
        BMI: "26.8",
        Weight: "72 kg",
        Height: "164 cm",
      },
    },
    exam: {
      ai: "drafted",
      value:
        "Right thumb: full ROM, no swelling, tenderness over dorsal aspect, positive Finkelstein test. Neuro: sensation intact except mild reduction over median nerve distribution.",
    },
    dx: {
      ai: "drafted",
      code: "",
      label: "",
      suggestions: [
        { code: "M65.4", label: "Radial styloid tenosynovitis [de Quervain]" },
        { code: "G56.0", label: "Carpal tunnel syndrome" },
        { code: "M54.12", label: "Radiculopathy, cervical region" },
      ],
    },
    ddx: {
      ai: "drafted",
      value:
        "1) de Quervain's tenosynovitis · 2) Early carpal tunnel syndrome · 3) C6 radiculopathy.",
    },
    nonpharm: {
      ai: "drafted",
      value: "Wrist splint",
    },
    pharm: {
      ai: "drafted",
      value: "Ibuprofen 400 mg TID × 7 days, statin up-titration",
    },
    recs: {
      ai: "drafted",
      value: "1) Recheck HbA1c in 3 months.\n2) Follow-up in 2 weeks.",
    },
    diagPlan: {
      ai: "drafted",
      value: "Refer Neurology for NCS if not improved in 2 weeks",
    },
    notes: {
      ai: "missing",
      value: "",
    },
  },

  history: [
    {
      date: "2025-11-20",
      specialty: "Cardiology",
      icd: "I10",
      summary: "BP controlled on current regimen. Continue ramipril 5 mg.",
    },
    {
      date: "2025-08-03",
      specialty: "GP",
      icd: "J06.9",
      summary: "URI, supportive care, no antibiotics.",
    },
    {
      date: "2025-05-12",
      specialty: "GP",
      icd: "Z00.0",
      summary: "Annual physical. Labs ordered, HbA1c slightly up.",
    },
    {
      date: "2024-12-08",
      specialty: "Endocrinology",
      icd: "E11.9",
      summary: "Diabetes review — metformin dose maintained.",
    },
  ],

  labs: [
    { test: "HbA1c", date: "2025-11-18", result: "7.1 %", ref: "< 6.5 %", flag: "High" },
    { test: "LDL", date: "2025-11-18", result: "142 mg/dL", ref: "< 100", flag: "High" },
    { test: "TSH", date: "2025-11-18", result: "2.3 mIU/L", ref: "0.4–4.0", flag: "Normal" },
    { test: "Creatinine", date: "2025-11-18", result: "0.9 mg/dL", ref: "0.6–1.1", flag: "Normal" },
    { test: "Hemoglobin", date: "2025-08-03", result: "13.4 g/dL", ref: "12–16", flag: "Normal" },
  ],

  transcript: [
    { t: "00:04", who: "Doctor", text: "Sveiki, papasakokite, dėl ko atvykote." },
    { t: "00:09", who: "Patient", text: "Jaučiu tirpimą dešiniojo nykščio dalyje jau apie dvi savaites." },
    { t: "00:18", who: "Doctor", text: "Ar tirpimas pastovus, ar atsiranda tik judant?" },
    { t: "00:25", who: "Patient", text: "Atsiranda ištiesus ranką, ir kai suku riešą — tada skauda viršutinę nykščio dalį." },
    { t: "00:38", who: "Doctor", text: "Suprantu. Ar būna silpnumas, ar tik tirpimas ir skausmas?" },
    { t: "00:45", who: "Patient", text: "Silpnumo nejaučiu, tik tirpimas ir skausmas." },
  ],

  recordings: [
    {
      id: "rec-1",
      title: "Initial complaint",
      date: "Apr 17 · 09:42",
      durationSec: 52,
      lines: [
        { t: "00:04", who: "Doctor", text: "Sveiki, papasakokite, dėl ko atvykote." },
        { t: "00:09", who: "Patient", text: "Jaučiu tirpimą dešiniojo nykščio dalyje jau apie dvi savaites." },
        { t: "00:18", who: "Doctor", text: "Ar tirpimas pastovus, ar atsiranda tik judant?" },
        { t: "00:25", who: "Patient", text: "Atsiranda ištiesus ranką, ir kai suku riešą — tada skauda viršutinę nykščio dalį." },
        { t: "00:38", who: "Doctor", text: "Suprantu. Ar būna silpnumas, ar tik tirpimas ir skausmas?" },
        { t: "00:45", who: "Patient", text: "Silpnumo nejaučiu, tik tirpimas ir skausmas." },
      ],
    },
    {
      id: "rec-2",
      title: "Physical examination",
      date: "Apr 17 · 09:48",
      durationSec: 138,
      lines: [
        { t: "00:03", who: "Doctor", text: "Pakelkite, prašau, dešinę ranką ir suspauskite mano pirštus." },
        { t: "00:11", who: "Patient", text: "Štai, suspaudžiau. Atrodo, kad jėga gera." },
        { t: "00:17", who: "Doctor", text: "Gerai. Dabar sulenkite riešą į priekį ir palaikykite minutę. Pajusite tirpimą?" },
        { t: "00:34", who: "Patient", text: "Taip, po kelių sekundžių pradeda tirpti nykštys ir smilius." },
        { t: "00:42", who: "Doctor", text: "Tai vadinama Phalen testas — teigiamas. Pažiūrėsime ir Tinel ženklą." },
        { t: "00:58", who: "Doctor", text: "Pabaksnosiu lengvai per riešo vidinę pusę. Pajusite kažką?" },
        { t: "01:06", who: "Patient", text: "Taip, lyg elektros srovė nubėgo iki pirštų." },
        { t: "01:12", who: "Doctor", text: "Tinel ženklas taip pat teigiamas. Tai dažniausiai būdinga riešo kanalo sindromui." },
        { t: "01:28", who: "Patient", text: "Ar tai pavojinga?" },
        { t: "01:33", who: "Doctor", text: "Dažniausiai gydoma konservatyviai — riešo įtvaras naktį, fizioterapija. Pradėsime nuo to." },
        { t: "01:54", who: "Patient", text: "Aišku. Ar reikia atlikti tyrimų?" },
        { t: "02:01", who: "Doctor", text: "Norėčiau elektroneuromiografijos, kad patvirtintume diagnozę." },
        { t: "02:14", who: "Patient", text: "Gerai, sutinku." },
      ],
    },
    {
      id: "rec-3",
      title: "Treatment plan & follow-up",
      date: "Apr 17 · 10:04",
      durationSec: 312,
      lines: [
        { t: "00:02", who: "Doctor", text: "Aptarkime gydymo planą. Pirmiausia — riešo įtvaras naktį, šešias savaites." },
        { t: "00:18", who: "Patient", text: "Ar reikės nešioti ir dieną?" },
        { t: "00:23", who: "Doctor", text: "Dieną tik tada, kai dirbate prie kompiuterio ar atliekate kartotinius judesius." },
        { t: "00:41", who: "Doctor", text: "Antra — fizioterapija. Paskirsiu dešimt seansų: ultragarsas, mankštos, švelnus tempimas." },
        { t: "01:05", who: "Patient", text: "Kaip dažnai reikia eiti?" },
        { t: "01:09", who: "Doctor", text: "Du-tris kartus per savaitę. Galite susitarti registratūroje." },
        { t: "01:22", who: "Doctor", text: "Trečia — vaistai. Skirsiu nesteroidinius priešuždegiminius, septynioms dienoms." },
        { t: "01:44", who: "Patient", text: "Ar tikrai reikia? Vengiu vaistų." },
        { t: "01:50", who: "Doctor", text: "Suprantu. Galime pradėti tik nuo įtvaro ir fizioterapijos. Jei skausmas neslūgs per dvi savaites, grįšime prie vaistų." },
        { t: "02:18", who: "Patient", text: "Tai man patinka labiau. Sutinku." },
        { t: "02:24", who: "Doctor", text: "Taip pat — elektroneuromiografija. Užregistruosime per artimiausias dvi savaites." },
        { t: "02:46", who: "Patient", text: "Ar tai skausmingas tyrimas?" },
        { t: "02:51", who: "Doctor", text: "Nemalonus, bet trumpas. Trunka apie dvidešimt minučių." },
        { t: "03:08", who: "Doctor", text: "Po keturių savaičių susitiksime kontroliniam vizitui. Pažiūrėsime, kaip pavyko." },
        { t: "03:30", who: "Patient", text: "Gerai. Ar yra dar kažkas, į ką turėčiau atkreipti dėmesį?" },
        { t: "03:38", who: "Doctor", text: "Stenkitės nedaryti pasikartojančių riešo judesių. Padarykite pertraukas dirbdami prie kompiuterio." },
        { t: "04:01", who: "Doctor", text: "Jei pajusite stiprų silpnumą, raumenų išnykimą — kreipkitės nedelsdami." },
        { t: "04:18", who: "Patient", text: "Suprantu. Ačiū už paaiškinimą." },
        { t: "04:24", who: "Doctor", text: "Prašom. Receptas ir siuntimas bus paruošti per kelias minutes registratūroje." },
        { t: "04:48", who: "Patient", text: "Ačiū, viso gero." },
        { t: "04:52", who: "Doctor", text: "Sveiki, gražios dienos." },
      ],
    },
  ],

  referrals: [
    {
      specialty: "Cardiology",
      urgency: "Routine",
      reason: "Evaluation of chest symptoms; HbA1c and LDL trending up — risk stratification.",
    },
    {
      specialty: "Neurology",
      urgency: "Routine",
      reason: "Right thumb paresthesia with movement-triggered pain — rule out nerve compression.",
    },
  ],

  tabs: [
    { id: "anamnesis", label: "Current Anamnesis" },
    { id: "overview", label: "Patient Overview" },
    { id: "history", label: "Historical Anamnesis" },
    { id: "labs", label: "Tests & Labs" },
    { id: "referrals", label: "Referrals & Orders" },
    { id: "transcript", label: "Transcription" },
  ],

  // Action suggestions — icon names map to lucide lookups in icons.js
  actions: [
    { icon: "Stethoscope", label: "Draft E025", tab: "anamnesis",
      reply: "Drafted the E025 record from the scribing session — see the Current Anamnesis tab. Sections marked with ✨ were AI-populated." },
    { icon: "ClipboardList", label: "Generate Referral (E027)", tab: "referrals",
      reply: "Generated two E027 referral drafts (Cardiology, Neurology). Review them in the Referrals & Orders tab." },
    { icon: "Pill", label: "Draft Prescription", tab: "referrals",
      reply: "Suggested prescription: Ibuprofen 400 mg TID × 7 days + wrist splint. Added as a draft order." },
    { icon: "FlaskConical", label: "Order Tests", tab: "labs",
      reply: "Ordered: HbA1c (follow-up in 3 mo), Lipid panel, TSH. See the Tests & Labs tab." },
    { icon: "History", label: "Summarize Patient History", tab: "history",
      reply: "3 most relevant past encounters summarised. Opening Historical Anamnesis." },
    { icon: "FileText", label: "Draft Clinic Note", tab: "anamnesis",
      reply: "Clinical note drafted — see Current Anamnesis, bottom section." },
    { icon: "Lightbulb", label: "Suggest Diagnoses (DDx)", tab: "anamnesis",
      reply: "Top differentials: 1) de Quervain's tenosynovitis, 2) Carpal tunnel syndrome, 3) C6 radiculopathy." },
    { icon: "ArrowRight", label: "Suggest Next Steps", tab: "anamnesis",
      reply: "Next steps: splint + NSAIDs × 2 weeks, recheck HbA1c in 3 months, Neurology referral if no improvement." },
    { icon: "MessageCircle", label: "Draft Patient Handout", tab: "referrals",
      reply: "Patient handout drafted — simple language, Lithuanian. Ready in Referrals & Orders." },
  ],
};
