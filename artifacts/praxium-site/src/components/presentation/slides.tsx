import { motion } from "framer-motion";
import {
  Upload,
  Check,
  User,
  Target,
  Goal,
  FileText,
  LayoutList,
  Clapperboard,
  ClipboardCheck,
  BarChart3,
  Search,
  ShieldCheck,
  KanbanSquare,
  Palette,
  MousePointerClick,
  ToggleRight,
  Users,
  GraduationCap,
  Accessibility,
  TrendingUp,
  RefreshCw,
  BookOpen,
  Network,
  LayoutGrid,
  AlertTriangle,
  BookA,
  Layers,
  MessageSquare,
  Quote,
  ListChecks,
  Languages,
  PieChart,
  Image as ImageIcon,
  Video,
  Cpu,
  FlaskConical,
  Stethoscope,
  Landmark,
  Menu,
  ChevronDown,
  Mic,
  type LucideIcon,
} from "lucide-react";
import {
  SlideShell,
  SlideHeader,
  PraxiumMark,
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  popIn,
  growUp,
  stagger,
  NAVY,
  TEAL,
  CORAL,
  AMBER,
  RED,
} from "./shared";

import logoWhite from "@assets/praxium/praxium-ai-logo-white.png";
import lgNovaLogo from "@assets/lg_lg_nova_1778899717963.png";
import nvidiaInceptionLogo from "@assets/nvidia-inception-program-badge-rgb-for-screen_1778899479113.png";

/* ============================================================= */
/* Slide 1 — Title                                                */
/* ============================================================= */
function Slide01() {
  return (
    <SlideShell variant="teal" className="flex flex-col justify-center px-[120px]">
      <motion.img
        variants={fadeUp}
        src={logoWhite}
        alt="PraxiumAI"
        className="h-9 w-auto self-start"
      />
      <motion.h1
        variants={fadeUp}
        className="mt-7 text-[78px] font-extrabold leading-[0.98] tracking-tight text-white"
      >
        Turn Know-how
        <br />
        into Impact. Now.
      </motion.h1>

      <motion.div
        variants={fadeIn}
        className="absolute bottom-[54px] left-1/2 flex -translate-x-1/2 items-center gap-7"
      >
        <img src={lgNovaLogo} alt="LG · LG NOVA" className="h-9 w-auto brightness-0 invert" />
        <span className="h-8 w-px bg-white/30" />
        <div className="rounded-lg bg-white px-3 py-1.5">
          <img src={nvidiaInceptionLogo} alt="NVIDIA Inception Program" className="h-7 w-auto" />
        </div>
      </motion.div>
    </SlideShell>
  );
}

/* ============================================================= */
/* Slide 2 — Value proposition                                    */
/* ============================================================= */
function Slide02() {
  return (
    <SlideShell variant="teal" className="flex items-center gap-10 px-[96px]">
      {/* Illustration */}
      <motion.div variants={fadeRight} className="relative flex h-[420px] w-[520px] flex-shrink-0 items-center justify-center">
        <div className="absolute h-[360px] w-[360px] rounded-full bg-white/[0.06]" />
        {/* Upload card */}
        <div className="absolute left-6 top-12 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
          <div className="flex flex-col items-center rounded-xl border border-dashed border-slate-300 py-6">
            <Upload className="h-6 w-6 text-slate-400" />
            <span className="mt-2 text-[12px] font-semibold text-slate-700">Upload Text Document</span>
          </div>
          <div className="mt-3 rounded-lg py-2 text-center text-[11px] font-semibold text-white" style={{ background: TEAL }}>
            Converted to Presentation
          </div>
        </div>
        {/* Result card */}
        <div className="absolute right-4 top-28 w-[210px] rounded-2xl bg-white p-4 shadow-2xl">
          <span className="text-[13px] font-bold" style={{ color: NAVY }}>Your Course is Ready</span>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-50 p-2">
            <span className="text-[11px] font-medium text-slate-600">Course Introduction</span>
            <div className="ml-auto h-7 w-7 rounded-full bg-gradient-to-br from-teal-400 to-teal-600" />
          </div>
        </div>
        {/* Coral arrow */}
        <svg className="absolute left-[200px] top-[150px]" width="150" height="120" viewBox="0 0 150 120" fill="none">
          <motion.path
            d="M8 96 C 50 96, 70 30, 130 26"
            stroke={CORAL}
            strokeWidth={3.5}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeInOut" }}
          />
          <motion.path
            d="M118 16 L132 25 L120 37"
            stroke={CORAL}
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          />
        </svg>
      </motion.div>

      {/* Copy */}
      <div className="flex flex-col">
        <motion.img variants={fadeUp} src={logoWhite} alt="PraxiumAI" className="h-8 w-auto self-start" />
        <motion.h2 variants={fadeUp} className="mt-5 text-[52px] font-extrabold leading-[1.02] tracking-tight text-white">
          Turn knowledge into
          <br />
          multimedia modules
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-5 max-w-[520px] text-[19px] leading-relaxed text-white/85">
          PraxiumAI captures your expertise and technical docs and transforms them into
          personalized upskilling experiences grounded in proven learning science.
          Built for the agentic era.
        </motion.p>
      </div>
    </SlideShell>
  );
}

/* ============================================================= */
/* Slide 3 — Broken model stats                                   */
/* ============================================================= */
function StatCard({ value, label, source }: { value: string; label: string; source: string }) {
  return (
    <motion.div
      variants={growUp}
      className="relative flex flex-col justify-between rounded-2xl bg-white p-7 shadow-[0_10px_40px_-12px_rgba(15,27,43,0.18)]"
      style={{ borderLeft: `5px solid ${TEAL}` }}
    >
      <div>
        <div className="text-[46px] font-extrabold leading-none tracking-tight" style={{ color: NAVY }}>
          {value}
        </div>
        <p className="mt-3 text-[16px] font-medium text-slate-600">{label}</p>
      </div>
      <div className="mt-6 border-t border-slate-100 pt-3 text-[12px] text-slate-400">{source}</div>
    </motion.div>
  );
}

function Slide03() {
  const stats = [
    { value: "4–10%", label: "of workplace learning time is formal", source: "Lombardo & Eichinger, 1996" },
    { value: "10–20%", label: "of formal training transfers to the job", source: "Baldwin & Ford, 1988" },
    { value: "90% → 33%", label: "test score vs real-world adherence", source: "Salesforce, 2023" },
    { value: "$400B → 74%", label: "annual spend vs execs saying skills gap", source: "Bersin, 2026" },
  ];
  return (
    <SlideShell className="flex flex-col px-[110px] pt-[52px]">
      <SlideHeader title="The current model isn’t working" sub="The data is clear. The system is broken." />
      <div className="mt-9 grid flex-1 grid-cols-2 grid-rows-2 gap-6 pb-[56px]">
        {stats.map((s) => (
          <StatCard key={s.value} {...s} />
        ))}
      </div>
    </SlideShell>
  );
}

/* ============================================================= */
/* Slide 4 — Bring your content                                   */
/* ============================================================= */
function OrbitIcon({ icon: Icon, style }: { icon: LucideIcon; style: React.CSSProperties }) {
  return (
    <div
      className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md"
      style={style}
    >
      <Icon className="h-5 w-5" style={{ color: TEAL }} />
    </div>
  );
}

function Slide04() {
  return (
    <SlideShell className="flex flex-col px-[90px] pt-[48px]">
      <SlideHeader title="Bring your content. We’ll build the modules" sub="No need to start from scratch" />

      <div className="mt-6 grid flex-1 grid-cols-2 gap-8 pb-[44px]">
        {/* Left: orbit + upload list */}
        <div className="flex flex-col">
          <motion.div variants={fadeIn} className="relative mx-auto h-[210px] w-[300px]">
            <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-teal-300/60" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <PraxiumMark size={58} />
            </div>
            <OrbitIcon icon={FileText} style={{ left: "calc(50% + 78px)", top: "calc(50% - 24px)", transform: "translate(-50%,-50%)" }} />
            <OrbitIcon icon={Mic} style={{ left: "calc(50% + 55px)", top: "calc(50% + 60px)", transform: "translate(-50%,-50%)" }} />
            <OrbitIcon icon={BookOpen} style={{ left: "calc(50% - 55px)", top: "calc(50% + 60px)", transform: "translate(-50%,-50%)" }} />
            <OrbitIcon icon={LayoutList} style={{ left: "calc(50% - 78px)", top: "calc(50% - 24px)", transform: "translate(-50%,-50%)" }} />
            <OrbitIcon icon={Clapperboard} style={{ left: "50%", top: "calc(50% - 84px)", transform: "translate(-50%,-50%)" }} />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-2">
            <h3 className="text-[20px] font-bold" style={{ color: NAVY }}>Upload files:</h3>
            <ul className="mt-3 space-y-2.5 text-[16px] text-slate-600">
              <Bullet>PDFs, Docs, Slides, transcripts, notes</Bullet>
              <Bullet>Training manuals or existing materials</Bullet>
              <Bullet>Up to 500 pages total</Bullet>
            </ul>
          </motion.div>
        </div>

        {/* Right: interview mock + list */}
        <div className="flex flex-col">
          <motion.div variants={fadeLeft} className="relative mx-auto h-[210px] w-[360px]">
            <div className="absolute left-0 top-6 w-[230px] rounded-2xl bg-white p-5 shadow-xl">
              <span className="text-[13px] font-bold" style={{ color: NAVY }}>Slide Title</span>
              <div className="mt-3 space-y-2">
                {[100, 80, 90].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: TEAL }} />
                    <span className="h-2 rounded bg-slate-200" style={{ width: `${w}px` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute left-3 top-[150px] flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lg">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-slate-300 to-slate-400" />
              <span className="text-[12px] font-semibold" style={{ color: NAVY }}>Customize for Manager</span>
            </div>
            <div className="absolute right-0 top-0 w-[150px] rounded-2xl bg-white p-4 shadow-xl">
              <span className="text-[13px] font-bold" style={{ color: NAVY }}>Audience</span>
              {["Engineer", "Manager", "CEO"].map((a, i) => (
                <div
                  key={a}
                  className="mt-2 flex items-center gap-1.5 text-[12px] font-medium"
                  style={{ color: i === 1 ? TEAL : "#64748b" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: i === 1 ? TEAL : "#cbd5e1" }} />
                  {a}
                </div>
              ))}
              <MousePointerClick className="absolute -bottom-2 right-3 h-6 w-6" style={{ color: NAVY }} />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-2">
            <h3 className="text-[20px] font-bold" style={{ color: NAVY }}>Add context via guided interview:</h3>
            <ul className="mt-3 space-y-2.5 text-[16px] text-slate-600">
              <Bullet>Who it’s for</Bullet>
              <Bullet>What they need to learn</Bullet>
              <Bullet>Key outcomes</Bullet>
            </ul>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: TEAL }} />
      <span>{children}</span>
    </li>
  );
}

/* ============================================================= */
/* Slide 5 — Complete personalized course                         */
/* ============================================================= */
function Slide05() {
  return (
    <SlideShell className="flex flex-col px-[90px] pt-[48px]">
      <SlideHeader title="A complete, personalized course" sub="Built, organised, and ready to deliver" />

      <div className="mt-5 grid flex-1 grid-cols-[1fr_1.05fr] gap-10 pb-[64px]">
        {/* Course tree */}
        <motion.div variants={fadeRight} className="relative flex items-center justify-center">
          <div className="absolute h-[260px] w-[260px] rounded-full bg-teal-500/[0.06]" />
          <div className="relative w-full max-w-[340px] space-y-3">
            <div className="flex w-[150px] items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg">
              <Menu className="h-4 w-4" style={{ color: NAVY }} />
              <span className="text-[14px] font-bold" style={{ color: NAVY }}>Course</span>
            </div>
            <div className="ml-10 flex w-[220px] items-center justify-between rounded-xl bg-white px-4 py-3 shadow-lg">
              <span className="text-[13px] font-semibold" style={{ color: NAVY }}>
                Module <span className="font-normal text-slate-500">- Fundamentals</span>
              </span>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>
            {["Lesson 1", "Lesson 2", "Lesson 3"].map((l, i) => (
              <div key={l} className="ml-20 flex w-[200px] items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-lg">
                {i === 0 ? <FileText className="h-4 w-4" style={{ color: TEAL }} /> : <Video className="h-4 w-4" style={{ color: TEAL }} />}
                <span className="text-[13px] font-semibold" style={{ color: NAVY }}>{l}</span>
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full" style={{ background: TEAL }}>
                  <Check className="h-3 w-3 text-white" />
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes list */}
        <motion.ul variants={fadeLeft} className="flex flex-col justify-center gap-2.5 text-[17px] text-slate-700">
          <Bullet>Lesson Video</Bullet>
          <Bullet>By the End, You’ll Be Able To…</Bullet>
          <Bullet>Key point(s)</Bullet>
          <li className="ml-8 flex flex-col gap-2.5 text-[15px] text-slate-500">
            <SubBullet>Visuals: Slide, Interactive, Diagram, …</SubBullet>
            <SubBullet>Key Point Text</SubBullet>
            <SubBullet>Source References</SubBullet>
          </li>
          <Bullet>Scenario-based Multiple-choice Questions</Bullet>
          <Bullet>Interactive Document Explorer</Bullet>
          <Bullet>AI-Tutor</Bullet>
        </motion.ul>
      </div>

      {/* Teal footer bar */}
      <motion.div
        variants={fadeUp}
        className="absolute bottom-0 left-0 flex h-[56px] w-full items-center justify-center gap-3 text-[18px] font-semibold text-white"
        style={{ background: TEAL }}
      >
        From raw content <span className="text-white/70">→</span> Structured learning
      </motion.div>
    </SlideShell>
  );
}

function SubBullet({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-start gap-2.5">
      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
      <span>{children}</span>
    </span>
  );
}

/* ============================================================= */
/* Slide 6 — SME ≠ ID                                             */
/* ============================================================= */
function Slide06() {
  return (
    <SlideShell variant="teal" className="flex flex-col items-center justify-center px-[120px]">
      <motion.div variants={popIn} className="relative h-[300px] w-[420px]">
        <svg viewBox="0 0 420 300" className="h-full w-full" fill="none">
          {/* axes */}
          <path d="M70 20 L70 250 L380 250" stroke="#fff" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
          {/* S curve */}
          <motion.path
            d="M120 235 C 170 235, 175 95, 235 95 C 300 95, 300 60, 350 60"
            stroke="#fff"
            strokeWidth={8}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
        <span className="absolute -left-2 top-0 w-[120px] text-center text-[14px] font-bold leading-tight text-white">
          Instructional Designer (ID)
        </span>
        <span className="absolute bottom-[6px] right-0 w-[170px] text-center text-[14px] font-bold leading-tight text-white">
          Subject Matter Experts (SME)
        </span>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-6 max-w-[760px] text-center text-[34px] font-extrabold leading-tight text-white"
      >
        SME ≠ ID. Deep knowledge and effective teaching are distinct skills.
      </motion.p>
    </SlideShell>
  );
}

/* ============================================================= */
/* Slide 7 — Key Differentiators table                            */
/* ============================================================= */
type Rating = "best" | "ok" | "weak";
function Dot({ r }: { r: Rating }) {
  const color = r === "best" ? TEAL : r === "ok" ? AMBER : RED;
  return (
    <motion.span
      variants={popIn}
      className="inline-block h-[18px] w-[18px] rounded-full"
      style={{ background: color }}
    />
  );
}

function Slide07() {
  const cols = [
    { name: "PraxiumAI", sub: "", highlight: true },
    { name: "Agentic Apps", sub: "NotebookLM, Claude, …" },
    { name: "AI Copilots", sub: "Powerpoint copilot, …" },
    { name: "L&D Authoring", sub: "Articulate Rise 360 AI, …" },
    { name: "New Startups", sub: "" },
  ];
  const rows: { label: string; ratings: Rating[] }[] = [
    { label: "Evidence-based Frameworks", ratings: ["best", "ok", "weak", "ok", "weak"] },
    { label: "Speed & Automation", ratings: ["ok", "best", "ok", "best", "best"] },
    { label: "Multimedia Personalization", ratings: ["best", "best", "weak", "ok", "ok"] },
    { label: "Rigorous Skill Modeling", ratings: ["best", "ok", "weak", "ok", "weak"] },
    { label: "Faithfulness & Technical Grounding", ratings: ["best", "ok", "weak", "weak", "weak"] },
    { label: "In-workflow Integrations", ratings: ["best", "weak", "ok", "best", "ok"] },
  ];
  return (
    <SlideShell className="flex flex-col px-[80px] pt-[44px]">
      <SlideHeader title="PraxiumAI’s Key Differentiators" />

      <motion.div variants={fadeUp} className="mt-7 flex-1">
        <div className="grid" style={{ gridTemplateColumns: "1.5fr repeat(5, 1fr)" }}>
          {/* header row */}
          <div />
          {cols.map((c, i) => (
            <div
              key={c.name}
              className="mx-1 flex flex-col items-center justify-center rounded-t-xl px-2 py-3 text-center"
              style={{ background: c.highlight ? TEAL : "#1f3b4d" }}
            >
              <span className="text-[15px] font-bold text-white">{c.name}</span>
              {c.sub && <span className="mt-0.5 text-[10px] leading-tight text-white/70">{c.sub}</span>}
            </div>
          ))}

          {/* body rows */}
          {rows.map((row, ri) => (
            <div key={row.label} className="contents">
              <div className="flex items-center py-[14px] pr-3 text-[15px] font-semibold" style={{ color: NAVY }}>
                {row.label}
              </div>
              {row.ratings.map((r, ci) => (
                <div
                  key={ci}
                  className="mx-1 flex items-center justify-center"
                  style={{ background: ci === 0 ? "rgba(22,106,108,0.07)" : "transparent" }}
                >
                  <Dot r={r} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* legend */}
      <motion.div variants={fadeUp} className="mb-[34px] mt-3 flex items-center gap-6 rounded-xl bg-white px-5 py-3 shadow-sm" style={{ width: "fit-content" }}>
        <span className="text-[13px] font-bold" style={{ color: NAVY }}>Performance scale</span>
        <Legend color={TEAL} label="Best in class" />
        <Legend color={AMBER} label="Acceptable" />
        <Legend color={RED} label="Weak" />
      </motion.div>
    </SlideShell>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-2 text-[13px] text-slate-600">
      <span className="h-3.5 w-3.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

/* ============================================================= */
/* Slide 8 — In-workflow Agents grid                              */
/* ============================================================= */
function IconCard({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <motion.div
      variants={growUp}
      className="flex flex-col items-center justify-center rounded-2xl bg-white px-3 py-4 text-center shadow-[0_8px_24px_-14px_rgba(15,27,43,0.25)]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50">
        <Icon className="h-[22px] w-[22px]" style={{ color: TEAL }} strokeWidth={1.7} />
      </div>
      <span className="mt-2.5 text-[12.5px] font-semibold leading-tight" style={{ color: NAVY }}>
        {label}
      </span>
    </motion.div>
  );
}

function Slide08() {
  const agents: { icon: LucideIcon; label: string }[] = [
    { icon: User, label: "Persona" },
    { icon: Target, label: "Learning Objectives" },
    { icon: Goal, label: "Instructional Goals" },
    { icon: FileText, label: "Content Development" },
    { icon: LayoutList, label: "Curriculum Design" },
    { icon: Clapperboard, label: "Storyboarding" },
    { icon: ClipboardCheck, label: "Assessment Design" },
    { icon: BarChart3, label: "Learning Analytics" },
    { icon: Search, label: "Content Research" },
    { icon: ShieldCheck, label: "Quality Assurance" },
    { icon: KanbanSquare, label: "Project Management" },
    { icon: Palette, label: "Multimedia Design" },
    { icon: MousePointerClick, label: "User Experience Testing" },
    { icon: ToggleRight, label: "Interactive Widgets" },
    { icon: Users, label: "Collaboration" },
    { icon: GraduationCap, label: "Faculty/Staff Training" },
    { icon: Accessibility, label: "Accessibility" },
    { icon: TrendingUp, label: "Business Outcomes" },
    { icon: RefreshCw, label: "Course Updating" },
    { icon: BookOpen, label: "Documentation" },
  ];
  return (
    <SlideShell className="flex flex-col px-[80px] pt-[50px]">
      <SlideHeader title="In-workflow integrations: Agents" />
      <motion.div variants={stagger(0.035, 0.25)} className="mt-9 grid flex-1 grid-cols-5 grid-rows-4 gap-4 pb-[52px]">
        {agents.map((a) => (
          <IconCard key={a.label} {...a} />
        ))}
      </motion.div>
    </SlideShell>
  );
}

/* ============================================================= */
/* Slide 9 — Instructional Design Agentic Workflow               */
/* ============================================================= */
type Stage = { n: number; title: string; subtitle: string; fields: { k: string; v: string }[] };
function StageCard({ stage, accent }: { stage: Stage; accent: string }) {
  return (
    <motion.div
      variants={growUp}
      className="flex flex-col rounded-lg bg-white px-3 py-3 shadow-[0_6px_20px_-12px_rgba(15,27,43,0.3)]"
      style={{ borderLeft: `4px solid ${accent}` }}
    >
      <span className="text-[8.5px] font-bold uppercase tracking-wider" style={{ color: accent }}>
        Stage {stage.n}
      </span>
      <h4 className="mt-0.5 text-[13px] font-extrabold leading-tight" style={{ color: NAVY }}>
        {stage.title}
      </h4>
      <p className="mt-0.5 text-[9.5px] italic leading-tight text-slate-500">{stage.subtitle}</p>
      <div className="mt-2 space-y-1.5">
        {stage.fields.map((f) => (
          <div key={f.k}>
            <div className="text-[9px] font-bold" style={{ color: NAVY }}>{f.k}</div>
            <div className="text-[8.5px] leading-tight text-slate-500">{f.v}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const ROW1: Stage[] = [
  { n: 1, title: "Chunk Boundary Repair", subtitle: "Post-extraction structural repair", fields: [
    { k: "Decision", v: "JOIN · KEEP" },
    { k: "Bridge Type", v: "marginalia · page-number" },
    { k: "Constraint", v: "≤ 2 content chunks" },
    { k: "Join Signals", v: "mid-sentence end · lowercase start · no heading" },
  ] },
  { n: 2, title: "Personas Identification", subtitle: "Target-learner profiles (N = 3)", fields: [
    { k: "Required Fields", v: "index · name · role · description · needs · pain_points" },
    { k: "Optional Fields", v: "experience · background · context" },
    { k: "Derivation Basis", v: "technical depth · job function · industry" },
  ] },
  { n: 3, title: "CIF Classification", subtitle: "Critical Impact of Failure · per chunk", fields: [
    { k: "4 Classes", v: "Minimal · Moderate · Significant · Catastrophic" },
    { k: "Basis", v: "real-world operational consequence" },
    { k: "Filter", v: "Minimal-impact chunks excluded from clustering" },
    { k: "Output", v: "enriched knowledge_map_instructional.json" },
  ] },
  { n: 4, title: "Capability Clusters", subtitle: "Operational domains (CIF ≠ Minimal)", fields: [
    { k: "Score (1–10)", v: "cognitive weight × CIF weight formula" },
    { k: "Micro_skill_potential", v: "Low · Medium · High" },
    { k: "Knowledge Mix", v: "fact / procedure / concept / trbl" },
    { k: "Size · Output", v: "3–15 chunks per cluster · clusters.json" },
  ] },
  { n: 5, title: "Micro-skill Generation", subtitle: "Smallest assessable performance unit", fields: [
    { k: "5 Types", v: "execution · interpretation · decision" },
    { k: "Priority_score", v: "1–10 · inherited from cluster formula" },
    { k: "Lineage", v: "source_cluster_ids · source_chunk_ids" },
    { k: "Output", v: "skills.json" },
  ] },
];

const ROW2: Stage[] = [
  { n: 6, title: "Competency Domains", subtitle: "Higher-order skill family groupings", fields: [
    { k: "Domain Types (5)", v: "operational · security & governance · workflow · troubleshooting · mixed" },
    { k: "Score (1–10)", v: "avg + max micro-skill priority + dominant CIF" },
    { k: "Suggested Personas", v: "included per domain" },
    { k: "Output", v: "competency_domains.json" },
  ] },
  { n: 7, title: "Skill Relationship Graph", subtitle: "Directed knowledge graph over skills", fields: [
    { k: "Relationship Types (6)", v: "belongs_to · prerequisite_of · composed_of · precedes_in_workflow · related_to · risk_if_failed_before" },
    { k: "Edge Attributes", v: "from_id · to_id · confidence (0–1) · why" },
    { k: "Output", v: "skill_relationships.json" },
  ] },
  { n: 8, title: "Assessment Design", subtitle: "Graph-aware skill assessment definitions", fields: [
    { k: "Assessment Types (6)", v: "performance_task · simulation · scenario_decision · troubleshooting_scenario · knowledge_performance_check · blended" },
    { k: "Evidence Types (5)", v: "direct · applied · diagnostic · decision · mixed" },
    { k: "Output", v: "assessment.json" },
  ] },
  { n: 9, title: "Question Generation", subtitle: "Learner-facing questions with UI specs", fields: [
    { k: "Question Types", v: "mcq_scenario · mcq_applied · free_response · simulation_step · decision_case · troubleshooting_case" },
    { k: "MCQ Structure", v: "3 options · scenario-based · plausible distractors" },
    { k: "UI Components", v: "multiple_choice_card · scenario_panel · simulation_workspace · checklist_task" },
  ] },
  { n: 10, title: "Course Outline → Content", subtitle: "Dick & Carey model", fields: [
    { k: "Course Hierarchy", v: "Course → Module → Section → Subsection" },
    { k: "Timing", v: "3–10 min / lesson" },
    { k: "Framework", v: "Goals → Analyze → Objectives → Assess → Instruct → Evaluate" },
    { k: "Formats", v: "Figures · Diagrams · Slides · Videos" },
  ] },
];

function Slide09() {
  return (
    <SlideShell className="flex flex-col px-[56px] pt-[34px]">
      <motion.h2 variants={fadeUp} className="text-[30px] font-extrabold tracking-tight" style={{ color: NAVY }}>
        Instructional Design Agentic Workflow
      </motion.h2>

      <motion.div variants={fadeUp} className="mt-2 text-[11px] font-bold uppercase tracking-wider" style={{ color: TEAL }}>
        1 · Ingest & Classify
      </motion.div>
      <motion.div variants={stagger(0.05, 0.2)} className="mt-2 grid grid-cols-5 gap-2.5">
        {ROW1.map((s) => (
          <StageCard key={s.n} stage={s} accent={TEAL} />
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-3 text-[11px] font-bold uppercase tracking-wider" style={{ color: CORAL }}>
        Row 2 · Skill Architecture → Course → Media
      </motion.div>
      <motion.div variants={stagger(0.05, 0.2)} className="mt-2 grid grid-cols-5 gap-2.5">
        {ROW2.map((s) => (
          <StageCard key={s.n} stage={s} accent={CORAL} />
        ))}
      </motion.div>
    </SlideShell>
  );
}

/* ============================================================= */
/* Slide 10 — Quality Control                                     */
/* ============================================================= */
function Slide10() {
  const items: { icon: LucideIcon; label: string }[] = [
    { icon: Network, label: "Sequence Accuracy & Hierarchical Consistency" },
    { icon: LayoutGrid, label: "Content Coverage" },
    { icon: AlertTriangle, label: "Fabrication" },
    { icon: BookA, label: "Terminology & Meaning Precision" },
    { icon: Layers, label: "Instructional Scaffolding" },
    { icon: MessageSquare, label: "Tone & Language Personalization" },
    { icon: Quote, label: "Technical Attribution Accuracy" },
    { icon: ListChecks, label: "MCQ Accuracy" },
    { icon: Languages, label: "Tone & Language Personalization" },
    { icon: PieChart, label: "Figures & Diagrams Content Relevance" },
    { icon: ImageIcon, label: "Figures & Diagrams Visual Accuracy" },
    { icon: Video, label: "Narrated Video Script and Pacing Fidelity" },
  ];
  return (
    <SlideShell className="flex flex-col px-[90px] pt-[50px]">
      <SlideHeader title="Quality Control" sub="Automated & manual quality control rubrics" />
      <motion.div variants={stagger(0.04, 0.25)} className="mt-9 grid flex-1 grid-cols-4 grid-rows-3 gap-5 pb-[56px]">
        {items.map((it, i) => (
          <motion.div
            key={i}
            variants={growUp}
            className="flex flex-col items-center justify-center rounded-2xl bg-white px-4 py-5 text-center shadow-[0_8px_26px_-14px_rgba(15,27,43,0.25)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
              <it.icon className="h-6 w-6" style={{ color: TEAL }} strokeWidth={1.7} />
            </div>
            <span className="mt-3 text-[13px] font-semibold leading-tight" style={{ color: NAVY }}>
              {it.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </SlideShell>
  );
}

/* ============================================================= */
/* Slide 11 — Customer Verticals                                  */
/* ============================================================= */
function Slide11() {
  const verticals: { icon: LucideIcon; title: string; items: string[] }[] = [
    { icon: Cpu, title: "Hi-Tech", items: ["Semiconductors", "Automotive", "Defense, Aerospace", "Energy"] },
    { icon: FlaskConical, title: "BioPharma", items: ["CDMOs/CROs", "Platforms & Systems", "Core Tech / Reagents", "Compute Infra"] },
    { icon: Stethoscope, title: "Healthcare", items: ["Hospitals", "Health Systems", "Diagnostics", "Dental & Orthodontics"] },
    { icon: Landmark, title: "Finance", items: ["Insurance", "Banking", "Financial Services"] },
  ];
  return (
    <SlideShell className="flex flex-col px-[80px] pt-[52px]">
      <SlideHeader title="Customer Verticals" sub="Technical documents" />
      <motion.div variants={stagger(0.08, 0.25)} className="mt-10 grid flex-1 grid-cols-4 gap-6 pb-[64px]">
        {verticals.map((v) => (
          <motion.div
            key={v.title}
            variants={growUp}
            className="flex flex-col rounded-2xl bg-white p-7 shadow-[0_10px_36px_-16px_rgba(15,27,43,0.25)]"
          >
            <v.icon className="h-9 w-9" style={{ color: TEAL }} strokeWidth={1.6} />
            <h3 className="mt-6 text-[24px] font-extrabold" style={{ color: NAVY }}>{v.title}</h3>
            <ul className="mt-4 space-y-2.5 text-[15px] text-slate-600">
              {v.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: TEAL }} />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SlideShell>
  );
}

/* ============================================================= */
/* Slide 12 — Cost comparison                                     */
/* ============================================================= */
function Slide12() {
  return (
    <SlideShell variant="teal" className="grid grid-cols-2 items-center gap-16 px-[120px]">
      <motion.div variants={fadeRight}>
        <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-white/60">Current</span>
        <p className="mt-5 text-[40px] font-extrabold leading-[1.12] text-white">
          High cost, slow speed: Creating a 30-min course with best-in-class tools? Expect $30K–$50K and a 12-week wait.
        </p>
      </motion.div>
      <motion.div variants={fadeLeft}>
        <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-white/60">Praxium AI</span>
        <p className="mt-5 text-[40px] font-extrabold leading-[1.12] text-white">
          Low cost, fast turnaround: Create a 30-min course for under $1k in just 1 hour—with proven quality you can trust.
        </p>
      </motion.div>
    </SlideShell>
  );
}

/* ============================================================= */
/* Slide 13 — Contact                                             */
/* ============================================================= */
function Slide13() {
  const rows = [
    { k: "Website", v: "getpraxium.ai" },
    { k: "Contact", v: "pk@getpraxium.ai" },
    { k: "Request Access", v: "app.getpraxium.ai" },
  ];
  return (
    <SlideShell variant="teal" className="px-[90px] py-[64px]">
      <motion.img variants={fadeUp} src={logoWhite} alt="PraxiumAI" className="h-10 w-auto" />
      <motion.div
        variants={fadeUp}
        className="absolute bottom-[80px] right-[90px] space-y-3 text-[24px] font-bold text-white"
      >
        {rows.map((r) => (
          <div key={r.k} className="flex items-center">
            <span className="w-[210px]">{r.k}</span>
            <span className="text-white/70">: </span>
            <span className="ml-2">{r.v}</span>
          </div>
        ))}
      </motion.div>
    </SlideShell>
  );
}

/* ============================================================= */
export type SlideDef = { id: number; title: string; Component: React.ComponentType };

export const SLIDES: SlideDef[] = [
  { id: 1, title: "Turn Know-how into Impact", Component: Slide01 },
  { id: 2, title: "Multimedia modules", Component: Slide02 },
  { id: 3, title: "The current model isn’t working", Component: Slide03 },
  { id: 4, title: "Bring your content", Component: Slide04 },
  { id: 5, title: "A complete, personalized course", Component: Slide05 },
  { id: 6, title: "SME ≠ ID", Component: Slide06 },
  { id: 7, title: "Key Differentiators", Component: Slide07 },
  { id: 8, title: "In-workflow Agents", Component: Slide08 },
  { id: 9, title: "Agentic Workflow", Component: Slide09 },
  { id: 10, title: "Quality Control", Component: Slide10 },
  { id: 11, title: "Customer Verticals", Component: Slide11 },
  { id: 12, title: "Cost comparison", Component: Slide12 },
  { id: 13, title: "Contact", Component: Slide13 },
];
