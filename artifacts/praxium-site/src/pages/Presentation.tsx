import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Grid3x3,
  X,
  Upload,
  FileText,
  Mic,
  Edit3,
  Clock,
  Users,
  BookOpen,
  Search,
  Layout,
  PenTool,
  ClipboardCheck,
  BarChart3,
  FileSearch,
  CheckSquare,
  Settings,
  Layers,
  TestTube,
  Workflow,
  Handshake,
  Cog,
  Accessibility,
  Repeat,
  RefreshCw,
  FileCheck,
  Wrench,
  GraduationCap,
  Tag,
  RotateCw,
  UserCog,
  Lightbulb,
  Flag,
  Image as ImageIcon,
  Store,
  Star,
  Cpu,
  HeartPulse,
  ShieldPlus,
  TrendingUp,
  CheckCircle2,
  Circle,
  Sparkles,
  ChevronDown,
  Briefcase,
} from "lucide-react";
import logoWhite from "@assets/praxium/praxium-ai-logo-white.png";

const TEAL = "#157777";
const TEAL_DARK = "#0f5e5e";
const NAVY = "#0a1a2e";
const LIGHT_BG = "#f4f6f8";

type SlideProps = {
  isActive: boolean;
};

// ============ SLIDE 1: TITLE ============
function Slide1Title({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col justify-center px-[8%] overflow-hidden"
      style={{ backgroundColor: TEAL }}
    >
      <GridBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 flex items-center gap-3 mb-8"
      >
        <img src={logoWhite} alt="PraxiumAI" className="h-10 md:h-12" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 text-white font-extrabold tracking-tight leading-[1.05]"
        style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
      >
        Turn Know-how
        <br />
        into Impact. Now.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-[8%] right-[8%] flex items-center gap-6"
      >
        <div className="flex items-center gap-3 text-white">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white">
            <span className="font-bold text-sm" style={{ color: "#a50034" }}>LG</span>
          </div>
          <div className="text-white/40">|</div>
          <span className="font-bold text-base md:text-lg">LG NOVA</span>
        </div>
        <div className="px-4 py-2 bg-white rounded flex items-center gap-2">
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#76b900" }}>
            <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">N</div>
          </div>
          <div className="text-xs leading-tight">
            <div className="font-bold" style={{ color: NAVY }}>NVIDIA</div>
            <div style={{ color: NAVY }}>Inception<br />Program</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ============ SLIDE 2: TURN KNOWLEDGE INTO MODULES ============
function Slide2Modules({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex items-center px-[8%] overflow-hidden"
      style={{ backgroundColor: TEAL }}
    >
      <GridBackground />
      <div className="relative z-10 grid grid-cols-2 gap-12 w-full items-center">
        {/* Left visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[420px] h-[420px] rounded-full bg-white/5" />
          <div className="relative w-full max-w-md">
            <motion.div
              initial={{ rotate: -3, y: 20 }}
              animate={isActive ? { rotate: -3, y: 0 } : { rotate: -3, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute left-0 top-12 bg-white rounded-2xl shadow-xl p-6 w-64"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <Upload className="w-6 h-6 text-slate-500" />
              </div>
              <div className="text-center font-bold text-slate-900">Upload Text Document</div>
              <div
                className="mt-6 -mx-6 -mb-6 py-3 text-center text-white text-sm rounded-b-2xl"
                style={{ backgroundColor: TEAL }}
              >
                Converted to Presentaion
              </div>
            </motion.div>
            <motion.div
              initial={{ rotate: 3, x: 20, y: 0 }}
              animate={isActive ? { rotate: 3, x: 60, y: -20 } : { rotate: 3, x: 20, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute right-0 top-0 bg-white rounded-2xl shadow-xl p-5 w-56"
            >
              <div className="font-bold text-slate-900 text-sm mb-3">Your Course<br />is Ready</div>
              <div className="bg-slate-50 rounded-lg p-3 flex items-center gap-2">
                <div className="text-xs font-semibold text-slate-700">Course<br />Introduction</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex-shrink-0" />
              </div>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute top-24 left-32"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <path
                d="M 10 80 Q 50 30 80 20"
                stroke="#f97316"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path d="M 70 15 L 80 20 L 75 30" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" />
            </motion.svg>
          </div>
        </motion.div>

        {/* Right copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 mb-6"
          >
            <img src={logoWhite} alt="PraxiumAI" className="h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white font-extrabold leading-[1.1] mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            Turn knowledge into multimedia modules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            PraxiumAI captures your expertise and technical docs and transforms them into personalized upskilling experiences grounded in proven learning science. Built for the agentic era.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

// ============ SLIDE 3: CURRENT MODEL ISN'T WORKING ============
function Slide3Stats({ isActive }: SlideProps) {
  const stats = [
    { value: "4–10%", label: "of workplace learning time is formal", source: "Lombardo & Eichinger, 1996" },
    { value: "10–20%", label: "of formal training transfers to the job", source: "Baldwin & Ford, 1988" },
    { value: "90% → 33%", label: "test score vs real-world adherence", source: "Salesforce, 2023" },
    { value: "$400B → 74%", label: "annual spend vs execs saying skills gap", source: "Bersin, 2026" },
  ];
  return (
    <div
      className="relative w-full h-full flex flex-col px-[8%] py-[6%]"
      style={{ backgroundColor: LIGHT_BG }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2
          className="font-extrabold mb-3"
          style={{ color: NAVY, fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
        >
          The current model isn't working
        </h2>
        <div
          className="font-bold tracking-widest text-sm"
          style={{ color: TEAL }}
        >
          THE DATA IS CLEAR. THE SYSTEM IS BROKEN
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-6 flex-1 content-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            className="bg-white rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="absolute left-0 top-6 bottom-6 w-1.5 rounded-r" style={{ backgroundColor: TEAL }} />
            <div className="pl-4">
              <div
                className="font-extrabold mb-3 leading-none"
                style={{ color: NAVY, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {stat.value}
              </div>
              <div className="font-bold text-base md:text-xl mb-4" style={{ color: NAVY }}>
                {stat.label}
              </div>
              <div className="border-t pt-3 text-sm text-slate-500">{stat.source}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============ SLIDE 4: BRING YOUR CONTENT ============
function Slide4BringContent({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col px-[8%] py-[6%]"
      style={{ backgroundColor: LIGHT_BG }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-extrabold mb-3" style={{ color: NAVY, fontSize: "clamp(2rem, 4.5vw, 4rem)" }}>
          Bring your content. We'll build the modules
        </h2>
        <div className="font-bold tracking-widest text-sm" style={{ color: TEAL }}>
          NO NEED TO START FROM SCRATCH
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-12 flex-1">
        {/* Left: Upload files */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-72 h-72 mb-8">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-teal-700/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: TEAL }}>
                <img src={logoWhite} alt="" className="w-10 h-10" />
              </div>
            </div>
            {[
              { icon: <Edit3 className="w-5 h-5" />, pos: "top-0 left-1/4" },
              { icon: <FileText className="w-5 h-5" />, pos: "top-1/4 right-0" },
              { icon: <Mic className="w-5 h-5" />, pos: "bottom-1/4 right-1/4" },
              { icon: <FileText className="w-5 h-5" />, pos: "bottom-1/4 left-1/4" },
              { icon: <Clock className="w-5 h-5" />, pos: "top-1/2 left-0" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={isActive ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className={`absolute ${item.pos} w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center`}
                style={{ color: TEAL }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
          <div className="w-full">
            <h3 className="font-extrabold text-2xl mb-4" style={{ color: NAVY }}>Upload files:</h3>
            <ul className="space-y-3 text-lg" style={{ color: "#475569" }}>
              <li className="flex gap-3"><span style={{ color: TEAL }}>•</span> PDFs, Docs, Slides, transcripts, notes</li>
              <li className="flex gap-3"><span style={{ color: TEAL }}>•</span> Training manuals or existing materials</li>
              <li className="flex gap-3"><span style={{ color: TEAL }}>•</span> Up to 500 pages total</li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Add context */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full h-72 mb-8">
            <div className="absolute left-0 top-8 bg-white rounded-xl shadow-lg p-5 w-64">
              <div className="font-bold text-sm mb-3" style={{ color: NAVY }}>Slide Title</div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TEAL }} />
                    <div className="h-2 bg-slate-200 rounded flex-1" style={{ width: `${80 - i * 10}%` }} />
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-white rounded-lg shadow border p-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-500" />
                <div className="text-sm font-semibold" style={{ color: NAVY }}>Customize for Manager</div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute right-0 top-0 bg-white rounded-xl shadow-lg p-4 w-56"
            >
              <div className="font-bold text-base mb-3" style={{ color: NAVY }}>Audience</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 px-2 py-1.5 rounded" style={{ color: TEAL }}>
                  <Cog className="w-4 h-4" /> Engineer
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-slate-100" style={{ color: TEAL }}>
                  <Briefcase className="w-4 h-4" /> Manager
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded" style={{ color: TEAL }}>
                  <Star className="w-4 h-4" /> CEO
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full">
            <h3 className="font-extrabold text-2xl mb-4" style={{ color: NAVY }}>Add context via guided interview:</h3>
            <ul className="space-y-3 text-lg" style={{ color: "#475569" }}>
              <li className="flex gap-3"><span style={{ color: TEAL }}>•</span> Who it's for</li>
              <li className="flex gap-3"><span style={{ color: TEAL }}>•</span> What they need to learn</li>
              <li className="flex gap-3"><span style={{ color: TEAL }}>•</span> Key outcomes</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ============ SLIDE 5: COMPLETE PERSONALIZED COURSE ============
function Slide5Course({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col"
      style={{ backgroundColor: LIGHT_BG }}
    >
      <div className="flex-1 flex flex-col px-[8%] pt-[5%] pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-extrabold mb-2" style={{ color: NAVY, fontSize: "clamp(2rem, 4.5vw, 4rem)" }}>
            A complete, personalized course
          </h2>
          <div className="font-bold tracking-widest text-sm" style={{ color: TEAL }}>
            BUILT, ORGANISED, AND READY TO DELIVER
          </div>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-12 items-center">
          {/* Left: Course tree */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-80 h-80 rounded-full bg-slate-200/30" />
            <div className="relative space-y-3 w-full max-w-md">
              <div className="bg-white rounded-xl shadow-sm border px-5 py-3 flex items-center gap-3">
                <div className="space-y-1">
                  <div className="w-5 h-0.5 bg-teal-700" />
                  <div className="w-5 h-0.5 bg-teal-700" />
                  <div className="w-5 h-0.5 bg-teal-700" />
                </div>
                <div className="font-bold" style={{ color: NAVY }}>Course</div>
              </div>
              <div className="ml-8 bg-white rounded-xl shadow-sm border px-5 py-3 flex items-center justify-between">
                <div className="font-bold" style={{ color: NAVY }}>
                  <span style={{ color: NAVY }}>Module - </span>
                  <span className="font-normal">Fundamentals</span>
                </div>
                <ChevronDown className="w-5 h-5" style={{ color: TEAL }} />
              </div>
              {[
                { num: 1, done: true, icon: <FileText className="w-4 h-4" /> },
                { num: 2, done: false, icon: <Play className="w-4 h-4" /> },
                { num: 3, done: false, icon: <Play className="w-4 h-4" /> },
              ].map((lesson, idx) => (
                <motion.div
                  key={lesson.num}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.15 }}
                  className="ml-16 bg-white rounded-xl shadow-sm border px-5 py-3 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div style={{ color: TEAL }}>{lesson.icon}</div>
                    <div className="font-bold" style={{ color: NAVY }}>Lesson {lesson.num}</div>
                  </div>
                  {lesson.done ? (
                    <CheckCircle2 className="w-5 h-5" style={{ color: TEAL }} />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-3 text-lg md:text-xl"
            style={{ color: "#475569" }}
          >
            {[
              "Lesson Video",
              "By the End, You'll Be Able To...",
              "Key point(s)",
            ].map((item) => (
              <li key={item} className="flex gap-3"><span style={{ color: TEAL }}>•</span>{item}</li>
            ))}
            <ul className="ml-8 space-y-2 text-base">
              {["Visuals: Slide, Interactive, Diagram,...", "Key Point Text", "Source References"].map((item) => (
                <li key={item} className="flex gap-3"><span style={{ color: TEAL }}>•</span>{item}</li>
              ))}
            </ul>
            {["Scenario-based Multiple-choice Questions", "Interactive Document Explorer", "AI-Tutor"].map((item) => (
              <li key={item} className="flex gap-3"><span style={{ color: TEAL }}>•</span>{item}</li>
            ))}
          </motion.ul>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="py-6 text-center text-white text-xl md:text-2xl font-bold"
        style={{ backgroundColor: TEAL }}
      >
        From raw content <ArrowRight className="inline w-6 h-6 mx-2" /> Structured learning
      </motion.div>
    </div>
  );
}

function Play(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" />
      <polygon points="10,8 16,12 10,16" fill="white" />
    </svg>
  );
}

// ============ SLIDE 6: SME != ID ============
function Slide6SmeId({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center px-[8%] overflow-hidden"
      style={{ backgroundColor: TEAL }}
    >
      <GridBackground />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="absolute -top-6 left-6 text-white font-bold text-sm md:text-base leading-tight">
            Instructional<br />Designer<br />(ID)
          </div>
          <svg width="320" height="280" viewBox="0 0 320 280" fill="none">
            <path d="M 100 20 L 100 240 L 300 240" stroke="white" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M 150 220 Q 170 220 180 180 Q 190 110 220 90 Q 240 80 250 60"
              stroke="white"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <div className="absolute bottom-0 right-2 text-white font-bold text-sm md:text-base leading-tight">
            Subject Matter<br />Experts (SME)
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white font-extrabold leading-tight max-w-4xl"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
        >
          SME ≠ ID. Deep knowledge and effective teaching are distinct skills.
        </motion.h2>
      </div>
    </div>
  );
}

// ============ SLIDE 7: DIFFERENTIATORS TABLE ============
function Slide7Differentiators({ isActive }: SlideProps) {
  const rows = [
    { label: "Evidence-based Frameworks", scores: ["best", "ok", "weak", "ok", "weak"] },
    { label: "Speed & Automation", scores: ["ok", "best", "ok", "best", "best"] },
    { label: "Multimedia Personalization", scores: ["best", "best", "weak", "ok", "ok"] },
    { label: "Rigorous Skill Modeling", scores: ["best", "ok", "weak", "ok", "weak"] },
    { label: "Faithfulness & Technical Grounding", scores: ["best", "ok", "weak", "weak", "weak"] },
    { label: "In-workflow Integrations", scores: ["best", "weak", "ok", "best", "ok"] },
  ];
  const cols = [
    { label: "PraxiumAI", sub: "" },
    { label: "Agentic Apps", sub: "NotebookLM, Claude,..." },
    { label: "AI Copilots", sub: "Powerpoint copilot,..." },
    { label: "L&D Authoring", sub: "Articulate Rise 360 AI,..." },
    { label: "New Startups", sub: "" },
  ];
  const dotColor: Record<string, string> = {
    best: TEAL,
    ok: "#f5b800",
    weak: "#e74c3c",
  };
  return (
    <div className="relative w-full h-full flex flex-col px-[6%] py-[4%]" style={{ backgroundColor: LIGHT_BG }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-center font-extrabold mb-8"
        style={{ color: NAVY, fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
      >
        PraxiumAI's Key Differentiators
      </motion.h2>

      <div className="flex-1 overflow-hidden">
        <table className="w-full h-full border-separate" style={{ borderSpacing: "0 4px" }}>
          <thead>
            <tr>
              <th className="w-1/4"></th>
              {cols.map((col, i) => (
                <motion.th
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  className="px-2 py-3 text-white rounded-t-lg align-middle"
                  style={{ backgroundColor: i === 0 ? TEAL : TEAL }}
                >
                  <div className="font-extrabold text-sm md:text-base">{col.label}</div>
                  {col.sub && <div className="text-xs font-normal opacity-90 mt-1">{col.sub}</div>}
                </motion.th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <motion.tr
                key={ri}
                initial={{ opacity: 0, x: -10 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.4 + ri * 0.06 }}
              >
                <td className="font-bold text-sm md:text-base pr-4 py-3" style={{ color: NAVY }}>
                  {row.label}
                </td>
                {row.scores.map((s, si) => (
                  <td
                    key={si}
                    className="text-center py-3"
                    style={{ backgroundColor: si === 0 ? "#dceae8" : "#f1f3f5" }}
                  >
                    <div
                      className="inline-block w-4 h-4 md:w-5 md:h-5 rounded-full"
                      style={{ backgroundColor: dotColor[s] }}
                    />
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-4 bg-slate-100 rounded-lg p-3 inline-flex items-center gap-4 self-start"
      >
        <span className="font-bold text-sm" style={{ color: NAVY }}>Performance scale</span>
        <span className="flex items-center gap-1.5 text-sm"><span className="w-3 h-3 rounded-full" style={{ backgroundColor: TEAL }} />Best in class</span>
        <span className="flex items-center gap-1.5 text-sm"><span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f5b800" }} />Acceptable</span>
        <span className="flex items-center gap-1.5 text-sm"><span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#e74c3c" }} />Weak</span>
      </motion.div>
    </div>
  );
}

// ============ SLIDE 8: AGENTS GRID ============
function Slide8Agents({ isActive }: SlideProps) {
  const agents = [
    { icon: <Users />, label: "Persona" },
    { icon: <BookOpen />, label: "Learning Objectives" },
    { icon: <Search />, label: "Instructional Goals" },
    { icon: <FileText />, label: "Content Development" },
    { icon: <Layout />, label: "Curriculum Design" },
    { icon: <PenTool />, label: "Storyboarding" },
    { icon: <ClipboardCheck />, label: "Assessment Design" },
    { icon: <BarChart3 />, label: "Learning Analytics" },
    { icon: <FileSearch />, label: "Content Research" },
    { icon: <CheckSquare />, label: "Quality Assurance" },
    { icon: <Settings />, label: "Project Management" },
    { icon: <Layers />, label: "Multimedia Design" },
    { icon: <TestTube />, label: "User Experience Testing" },
    { icon: <Workflow />, label: "Interactive Widgets" },
    { icon: <Handshake />, label: "Collaboration" },
    { icon: <UserCog />, label: "Faculty/Staff Training" },
    { icon: <Accessibility />, label: "Accessibility" },
    { icon: <Repeat />, label: "Business Outcomes" },
    { icon: <RefreshCw />, label: "Course Updating" },
    { icon: <FileCheck />, label: "Documentation" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col px-[6%] py-[5%]" style={{ backgroundColor: LIGHT_BG }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-center font-extrabold mb-10"
        style={{ color: NAVY, fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
      >
        In-workflow integrations: Agents
      </motion.h2>
      <div className="grid grid-cols-5 gap-4 flex-1">
        {agents.map((agent, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 + (idx % 5) * 0.05 + Math.floor(idx / 5) * 0.08 }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-4 flex flex-col items-center justify-center gap-3 cursor-pointer"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#e8f1f0", color: TEAL }}
            >
              {agent.icon}
            </div>
            <div className="text-center font-bold text-sm" style={{ color: NAVY }}>{agent.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============ SLIDE 9: AGENTIC WORKFLOW ============
function Slide9Workflow({ isActive }: SlideProps) {
  const row1 = [
    { stage: 1, title: "Chunk Boundary Repair", sub: "Post-extraction structural repair" },
    { stage: 2, title: "Personas Identification", sub: "Target-learner profiles (N = 3)" },
    { stage: 3, title: "CIF Classification", sub: "Critical Impact of Failure · per chunk" },
    { stage: 4, title: "Capability Clusters", sub: "Operational domains (CIF ≠ Minimal)" },
    { stage: 5, title: "Micro-skill Generation", sub: "Smallest assessable performance unit" },
  ];
  const row2 = [
    { stage: 6, title: "Competency Domains", sub: "Higher-order skill family groupings" },
    { stage: 7, title: "Skill Relationship Graph", sub: "Directed knowledge graph over skills" },
    { stage: 8, title: "Assessment Design", sub: "Graph-aware skill assessment definitions" },
    { stage: 9, title: "Question Generation", sub: "Learner-facing questions with UI specs" },
    { stage: 10, title: "Course Outline → Content", sub: "Dick & Carey model" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col px-[5%] py-[4%]" style={{ backgroundColor: LIGHT_BG }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="font-extrabold mb-4"
        style={{ color: NAVY, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
      >
        Instructional Design Agentic Workflow
      </motion.h2>

      <div className="font-bold text-xs tracking-widest mb-3" style={{ color: TEAL }}>
        1 · INGEST & CLASSIFY
      </div>
      <div className="grid grid-cols-5 gap-3 mb-4">
        {row1.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
            className="bg-white rounded-lg shadow-sm p-3 relative overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: TEAL }} />
            <div className="text-xs font-bold tracking-wider mb-1" style={{ color: "#94a3b8" }}>
              STAGE {s.stage}
            </div>
            <div className="font-extrabold text-sm mb-1" style={{ color: NAVY }}>{s.title}</div>
            <div className="text-xs italic" style={{ color: "#64748b" }}>{s.sub}</div>
          </motion.div>
        ))}
      </div>

      <div className="font-bold text-xs tracking-widest mb-3" style={{ color: "#e74c3c" }}>
        ROW 2 · SKILL ARCHITECTURE → COURSE → MEDIA
      </div>
      <div className="grid grid-cols-5 gap-3">
        {row2.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
            className="bg-white rounded-lg shadow-sm p-3 relative overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#e74c3c" }} />
            <div className="text-xs font-bold tracking-wider mb-1" style={{ color: "#94a3b8" }}>
              STAGE {s.stage}
            </div>
            <div className="font-extrabold text-sm mb-1" style={{ color: NAVY }}>{s.title}</div>
            <div className="text-xs italic" style={{ color: "#64748b" }}>{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============ SLIDE 10: QUALITY CONTROL ============
function Slide10Quality({ isActive }: SlideProps) {
  const rubrics = [
    { icon: <Wrench />, label: "Sequence Accuracy & Hierarchical Consistency" },
    { icon: <GraduationCap />, label: "Content Coverage" },
    { icon: <Tag />, label: "Fabrication" },
    { icon: <RotateCw />, label: "Terminology & Meaning Precision" },
    { icon: <UserCog />, label: "Instructional Scaffolding" },
    { icon: <Lightbulb />, label: "Tone & Language Personalization" },
    { icon: <Flag />, label: "Technical Attribution Accuracy" },
    { icon: <Cog />, label: "MCQ Accuracy" },
    { icon: <GraduationCap />, label: "Tone & Language Personalization" },
    { icon: <GraduationCap />, label: "Figures & Diagrams Content Relevance" },
    { icon: <Store />, label: "Figures & Diagrams Visual Accuracy" },
    { icon: <Star />, label: "Narrated Video Script and Pacing Fidelity" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col px-[8%] py-[5%]" style={{ backgroundColor: LIGHT_BG }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="font-extrabold mb-2" style={{ color: NAVY, fontSize: "clamp(2rem, 4.5vw, 4rem)" }}>
          Quality Control
        </h2>
        <div className="font-bold tracking-widest text-sm" style={{ color: TEAL }}>
          AUTOMATED & MANUAL QUALITY CONTROL RUBRICS
        </div>
      </motion.div>
      <div className="grid grid-cols-4 gap-5 flex-1">
        {rubrics.map((r, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-5 flex flex-col items-center justify-center gap-3 cursor-pointer"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#e8f1f0", color: TEAL }}
            >
              {r.icon}
            </div>
            <div className="text-center font-bold text-sm" style={{ color: NAVY }}>{r.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============ SLIDE 11: CUSTOMER VERTICALS ============
function Slide11Verticals({ isActive }: SlideProps) {
  const verticals = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Hi-Tech",
      items: ["Semiconductors", "Automotive", "Defense, Aerospace", "Energy"],
    },
    {
      icon: <HeartPulse className="w-10 h-10" />,
      title: "BioPharma",
      items: ["CDMOs/CROs", "Platforms & Systems", "Core Tech / Reagents", "Compute Infra"],
    },
    {
      icon: <ShieldPlus className="w-10 h-10" />,
      title: "Healthcare",
      items: ["Hospitals", "Health Systems", "Diagnostics", "Dental & Orthodontics"],
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Finance",
      items: ["Insurance", "Banking", "Financial Services"],
    },
  ];
  return (
    <div className="relative w-full h-full flex flex-col px-[6%] py-[5%]" style={{ backgroundColor: LIGHT_BG }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-extrabold mb-2" style={{ color: NAVY, fontSize: "clamp(2rem, 4.5vw, 4rem)" }}>
          Customer Verticals
        </h2>
        <div className="font-bold tracking-widest text-sm" style={{ color: TEAL }}>
          TECHNICAL DOCUMENTS
        </div>
      </motion.div>
      <div className="grid grid-cols-4 gap-6 flex-1 content-center">
        {verticals.map((v, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-8 flex flex-col"
          >
            <div style={{ color: TEAL }} className="mb-8">{v.icon}</div>
            <h3 className="font-extrabold text-2xl mb-4" style={{ color: NAVY }}>{v.title}</h3>
            <ul className="space-y-2 text-base" style={{ color: "#475569" }}>
              {v.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span style={{ color: TEAL }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============ SLIDE 12: CURRENT vs PRAXIUM ============
function Slide12Compare({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col justify-center px-[8%] overflow-hidden"
      style={{ backgroundColor: TEAL }}
    >
      <GridBackground />
      <div className="relative z-10 grid grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-white/80 font-bold tracking-widest text-sm mb-4">CURRENT</div>
          <h3
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.8rem)" }}
          >
            High cost, slow speed: Creating a 30-min course with best-in-class tools? Expect $30K–$50K and a 12-week wait.
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="text-white/80 font-bold tracking-widest text-sm mb-4">PRAXIUM AI</div>
          <h3
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.8rem)" }}
          >
            Low cost, fast turnaround: Create a 30-min course for under $1k in just 1 hour—with proven quality you can trust.
          </h3>
        </motion.div>
      </div>
    </div>
  );
}

// ============ SLIDE 13: CONTACT ============
function Slide13Contact({ isActive }: SlideProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col justify-between px-[8%] py-[8%] overflow-hidden"
      style={{ backgroundColor: TEAL }}
    >
      <GridBackground />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10"
      >
        <img src={logoWhite} alt="PraxiumAI" className="h-12" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 self-end text-white space-y-3"
      >
        {[
          { label: "Website", value: "getpraxium.ai", href: "https://getpraxium.ai" },
          { label: "Contact", value: "pk@getpraxium.ai", href: "mailto:pk@getpraxium.ai" },
          { label: "Request Access", value: "app.getpraxium.ai", href: "https://app.getpraxium.ai" },
        ].map((row) => (
          <div key={row.label} className="flex gap-2 items-baseline font-bold text-xl md:text-2xl">
            <span className="w-44">{row.label}</span>
            <span>:</span>
            <a
              href={row.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all hover:text-white/80"
            >
              {row.value}
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ============ DECORATIONS ============
function GridBackground() {
  return (
    <div
      className="absolute inset-0 opacity-15 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />
  );
}

// ============ SLIDE REGISTRY ============
const SLIDES = [
  { component: Slide1Title, title: "Turn Know-how into Impact. Now." },
  { component: Slide2Modules, title: "Turn knowledge into multimedia modules" },
  { component: Slide3Stats, title: "The current model isn't working" },
  { component: Slide4BringContent, title: "Bring your content. We'll build the modules" },
  { component: Slide5Course, title: "A complete, personalized course" },
  { component: Slide6SmeId, title: "SME ≠ ID" },
  { component: Slide7Differentiators, title: "PraxiumAI's Key Differentiators" },
  { component: Slide8Agents, title: "In-workflow integrations: Agents" },
  { component: Slide9Workflow, title: "Instructional Design Agentic Workflow" },
  { component: Slide10Quality, title: "Quality Control" },
  { component: Slide11Verticals, title: "Customer Verticals" },
  { component: Slide12Compare, title: "Current vs PraxiumAI" },
  { component: Slide13Contact, title: "Contact" },
];

// ============ MAIN PRESENTATION COMPONENT ============
export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showGrid, setShowGrid] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, next));
      setDirection(clamped >= current ? 1 : -1);
      setCurrent(clamped);
    },
    [current]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (showGrid) {
        if (e.key === "Escape") setShowGrid(false);
        return;
      }
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(current + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(SLIDES.length - 1);
      } else if (e.key === "g" || e.key === "G") {
        setShowGrid((s) => !s);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "Escape" && isFullscreen) {
        toggleFullscreen();
      } else if (/^[0-9]$/.test(e.key)) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= SLIDES.length) go(num - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, go, showGrid, isFullscreen]);

  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      stageRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const SlideComp = SLIDES[current].component;

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-900 text-white border-b border-slate-800">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logoWhite} alt="PraxiumAI" className="h-7" />
          <span className="text-sm text-slate-400 hidden sm:inline">/ Presentation</span>
        </a>
        <div className="text-sm text-slate-300 font-medium">
          {current + 1} / {SLIDES.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGrid(true)}
            className="p-2 hover:bg-slate-800 rounded transition-colors"
            title="Slide grid (G)"
          >
            <Grid3x3 className="w-4 h-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 hover:bg-slate-800 rounded transition-colors"
            title="Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Stage */}
      <div ref={stageRef} className="flex-1 flex items-center justify-center bg-slate-950 p-4 md:p-8 relative">
        <div
          className="relative w-full max-w-[1600px] bg-white rounded-xl shadow-2xl overflow-hidden"
          style={{ aspectRatio: "16 / 9" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <SlideComp isActive={true} />
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 z-20">
            <motion.div
              className="h-full"
              style={{ backgroundColor: TEAL }}
              animate={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Side arrows */}
        <button
          onClick={() => go(current - 1)}
          disabled={current === 0}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => go(current + 1)}
          disabled={current === SLIDES.length - 1}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom keyboard hints */}
      <div className="bg-slate-900 border-t border-slate-800 px-6 py-2 text-xs text-slate-400 flex items-center justify-center gap-4 flex-wrap">
        <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded">←</kbd> <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">→</kbd> navigate</span>
        <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded">G</kbd> grid view</span>
        <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded">F</kbd> fullscreen</span>
        <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded">1-9</kbd> jump to slide</span>
      </div>

      {/* Grid overlay */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur p-8 overflow-y-auto"
            onClick={() => setShowGrid(false)}
          >
            <div className="flex items-center justify-between mb-6 max-w-7xl mx-auto">
              <h2 className="text-white text-2xl font-bold">All Slides</h2>
              <button
                onClick={() => setShowGrid(false)}
                className="p-2 text-white hover:bg-slate-800 rounded"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {SLIDES.map((slide, idx) => {
                const SC = slide.component;
                return (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      go(idx);
                      setShowGrid(false);
                    }}
                    className={`relative bg-white rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                      idx === current ? "border-teal-500 shadow-xl" : "border-transparent"
                    }`}
                    style={{ aspectRatio: "16/9" }}
                  >
                    <div className="absolute inset-0 origin-top-left" style={{ transform: "scale(0.2)", width: "500%", height: "500%" }}>
                      <SC isActive={false} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-white text-xs font-semibold">
                      {idx + 1}. {slide.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
