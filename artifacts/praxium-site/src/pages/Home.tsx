import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle2, Play, X, Linkedin, Instagram } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";

const MuxPlayer = lazy(() => import("@mux/mux-player-react"));

const MUX_PLAYBACK_ID = "g4mWtFkEpHWYsO4t004ktdkRFt0001N3TH4OU01lZpRliNk";
const MUX_POSTER_TIME = 134;
const MUX_POSTER_URL = `https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.jpg?time=${MUX_POSTER_TIME}`;

// Asset imports
import logoWhite from "@assets/praxium/praxium-ai-logo-white.png";
import timeIcon from "@assets/praxium/time-icon.png";
import courseIcon from "@assets/praxium/course-icon.png";
import videoIcon from "@assets/praxium/video-icon.png";
import resultsImg from "@assets/praxium/results-img-2.png";
import step1Img from "@assets/praxium/step-1.png";
import step2Img from "@assets/praxium/step-2.png";
import step3Img from "@assets/praxium/steps-img-3.png";

import feature1Img from "@assets/praxium/ai-powered-course-creation.jpg";
import feature2Img from "@assets/praxium/source-attribution.png";
import feature3Img from "@assets/praxium/personalization.png";
import feature4Img from "@assets/praxium/in-workflow-learning.png";
import feature5Img from "@assets/praxium/skill-assessment.png";
import heroProductImage from "@assets/image_1778677837312.png";
import lgNovaLogo from "@assets/lg_lg_nova_1778899717963.png";
import nvidiaInceptionLogo from "@assets/nvidia-inception-program-badge-rgb-for-screen_1778899479113.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoPaused, setVideoPaused] = useState(false);
  const muxPlayerRef = useRef<any>(null);

  const openVideo = () => {
    setVideoEnded(false);
    setVideoPaused(false);
    setVideoOpen(true);
  };

  const resumeVideo = () => {
    setVideoPaused(false);
    const player = muxPlayerRef.current;
    if (player) {
      try {
        const playPromise = player.play?.();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } catch {
        // ignore
      }
    }
  };

  const replayVideo = () => {
    setVideoEnded(false);
    setVideoPaused(false);
    const player = muxPlayerRef.current;
    if (player) {
      try {
        player.currentTime = 0;
        const playPromise = player.play?.();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } catch {
        // ignore
      }
    }
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between gap-3">
          <div className="flex-shrink-0 min-w-0">
            <img
              src={logoWhite}
              alt="PraxiumAI"
              className={`h-7 sm:h-8 transition-all duration-300 ${isScrolled ? "brightness-0" : ""}`}
            />
          </div>
          <a href="https://app.getpraxium.ai/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-[7px] font-medium h-10 sm:h-11 px-4 sm:px-6 text-sm sm:text-base shadow-md transition-transform hover:-translate-y-0.5">
              Request Access
              <ArrowUpRight className="ml-1.5 sm:ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative bg-primary pt-28 sm:pt-32 pb-32 sm:pb-48 lg:pt-40 lg:pb-56 overflow-hidden hero-grid">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* Left Content */}
            <motion.div 
              className="lg:w-1/2 text-white"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-[2rem] sm:text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6"
              >No one reads your datasheets, manuals, and decks</motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-8 sm:mb-10 max-w-xl"
              >PraxiumAI turns them into multimedia modules your customers and colleagues actually use. Grounded in learning science. Built for the agentic era.</motion.p>
              <motion.div variants={fadeInUp}>
                <a href="https://app.getpraxium.ai/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent/90 text-white rounded-[7px] text-lg font-medium h-14 px-8 shadow-lg transition-transform hover:-translate-y-0.5">
                    Request Access
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Product Image (cropped on right like the original) */}
            <motion.div
              className="lg:w-1/2 w-full mt-12 lg:mt-0 relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-2xl mx-auto lg:max-w-none lg:mx-0 lg:w-[140%] lg:translate-x-[12%]">
                <img
                  src={heroProductImage}
                  alt="PraxiumAI course builder interface preview"
                  className="block w-full select-none pointer-events-none"
                  draggable={false}
                />

                {/* Play button overlay */}
                <button
                  type="button"
                  onClick={openVideo}
                  aria-label="Play product introduction video"
                  className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 focus:outline-none"
                  data-testid="button-play-intro-video"
                >
                  {/* Soft glow halo behind button for contrast against laptop screen */}
                  <span aria-hidden className="absolute -inset-10 rounded-full bg-accent/25 blur-2xl" />

                  <span className="relative flex items-center justify-center">
                    {/* Outer pulsing rings */}
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent/50 animate-ping" />
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white/30 animate-ping [animation-delay:600ms]" />

                    {/* Main button */}
                    <span className="relative flex items-center justify-center h-[60px] w-[60px] sm:h-[72px] sm:w-[72px] lg:h-[84px] lg:w-[84px] rounded-full bg-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] ring-[3px] ring-accent/80 transition-all duration-200 group-hover:scale-110 group-hover:ring-accent group-hover:shadow-[0_25px_60px_-10px_rgba(233,116,81,0.6)] group-focus-visible:scale-110 group-focus-visible:ring-white">
                      <Play className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 text-accent fill-accent ml-0.5" strokeWidth={1.5} />
                    </span>
                  </span>

                  {/* Label pill */}
                  <span className="relative inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-lg ring-2 ring-white/40 transition-transform group-hover:-translate-y-0.5">
                    Watch intro video
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="wave-divider h-24 lg:h-32">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,191.9,101.4,235.3,88.75,278.47,72.48,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>
      {/* Trust Banner */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl border-y border-gray-200 py-8 lg:py-10"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-20 lg:gap-x-28">
              <img
                src={lgNovaLogo}
                alt="LG / LG Nova"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                data-testid="trust-logo-lg-nova"
              />
              <img
                src={nvidiaInceptionLogo}
                alt="NVIDIA Inception Program"
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain"
                data-testid="trust-logo-nvidia-inception"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Tagline Strip */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-2xl lg:text-4xl font-semibold text-gray-900 leading-tight"
          >Upload PDFs and take an intake interview. PraxiumAI then builds rich personalized interactive modules with assessments.</motion.h2>
        </div>
      </section>
      {/* Three Icons Row */}
      <section className="bg-white pb-20 lg:pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: timeIcon, text: "Cut course build time by 90%" },
              { icon: courseIcon, text: "Trusted courses with click-to-source references" },
              { icon: videoIcon, text: "Personalized technical training backed by learning science" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center group">
                <div className="h-24 w-24 mb-6 relative transition-transform duration-300 group-hover:-translate-y-2">
                  <img src={item.icon} alt="" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.text}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Results that matter */}
      <section className="bg-white py-20 lg:py-32 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img src={resultsImg} alt="Results dashboard" className="w-full h-auto rounded-2xl shadow-xl border border-gray-100" />
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-10 tracking-tight">
                Results that matter
              </motion.h2>
              <ul className="space-y-8">
                {[
                  { title: "Ship training 10× faster.", desc: "Stop hand-building slides." },
                  { title: "Defend every lesson.", desc: "Built-in reasoning, references, and change tracking." },
                  { title: "Boost impact.", desc: "Interactive paths, quizzes, and choose-your-format learning." }
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-start">
                    <div className="mt-1 mr-4 bg-primary/10 rounded-full p-1 text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xl text-gray-700 leading-relaxed">
                        <strong className="text-gray-900 font-semibold">{item.title}</strong> {item.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Three simple steps */}
      <section className="bg-secondary py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Three simple steps to smarter training
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Upload, review with built-in sources, then personalize and publish in any format.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { img: step1Img, title: "Upload your docs", body: "Manuals, Datasheets, App Notes and more in PDF, PPT and DOC." },
              { img: step2Img, title: "Review & trust the draft", body: "AI-assisted learning objective selection. Every claim sourced and tested." },
              { img: step3Img, title: "Personalize & publish", body: "Personalized by role and experience. Delivered as video, slides, or AI tutor." }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
                  <img src={step.img} alt={step.title} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Features Carousel */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            className="mb-16 lg:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Features
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-3xl">
              Build. Verify. Personalize. Automate. Iterate.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 lg:gap-8 touch-pan-y">
                {[
                  { img: feature1Img, eyebrow: "AI-Powered Course Creation", lead: "Start with your docs and expertise. Let AI build the rest.", body: "Turn complex PDFs, slides, and SOPs into rich, interactive modules with quizzes—with manual updating." },
                  { img: feature2Img, eyebrow: "Built-in Accuracy and Trust", lead: "Course quality you don't have to second-guess.", body: "Every lesson backed by learning science, with technical attribution and grounded generation—easy to audit and verify." },
                  { img: feature3Img, eyebrow: "Total Personalization", lead: "One course. Infinite versions.", body: "Personalize by role and experience, then let learners choose their format—video, diagrams, slides, or an AI tutor." },
                  { img: feature4Img, eyebrow: "In-Workflow Learning", lead: "Training that comes to you", body: "With MCP, Plugins, and API, embed learning directly into tools and workflows—no detours, no context switching." },
                  { img: feature5Img, eyebrow: "Rigorous Skill Modeling", lead: "Measure mastery, and gaps", body: "Auto-generated skill modeling and assessments target specific skill gaps with priority rankings giving you verifiable learning outcomes." }
                ].map((feat, i) => (
                  <div key={i} className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0">
                    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col md:flex-row group hover:shadow-lg transition-all duration-300">
                      <div className="md:w-1/2 aspect-[4/3] md:aspect-auto relative overflow-hidden bg-gray-50 border-r border-gray-100">
                        <img src={feat.img} alt={feat.eyebrow} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                          {feat.eyebrow}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-snug">
                          {feat.lead}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {feat.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 mt-8 lg:absolute lg:top-[-80px] lg:right-0 lg:mt-0">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-12 w-12 border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-12 w-12 border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors"
                onClick={scrollNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Why PraxiumAI - Differentiators */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Why PraxiumAI
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              How PraxiumAI compares to other approaches across the capabilities that matter for technical training.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-5 lg:p-6 font-semibold text-gray-500 text-sm uppercase tracking-wider w-[26%]">
                      Capability
                    </th>
                    {[
                      { name: "PraxiumAI", sub: null, highlight: true },
                      { name: "Agentic Apps", sub: "NotebookLM, Claude, …" },
                      { name: "AI Copilots", sub: "PowerPoint copilot, …" },
                      { name: "L&D Authoring", sub: "Articulate Rise 360, …" },
                      { name: "New Startups", sub: null }
                    ].map((col, i) => (
                      <th
                        key={i}
                        className={`p-4 lg:p-6 text-center align-bottom ${
                          col.highlight ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
                        } ${i === 0 ? "rounded-tl-2xl" : ""}`}
                      >
                        <div className="font-bold text-base lg:text-lg leading-tight">{col.name}</div>
                        <div
                          className={`text-xs mt-1 font-normal ${col.highlight ? "text-white/80" : "text-gray-500"}`}
                          aria-hidden={!col.sub}
                        >
                          {col.sub ?? "\u00A0"}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { row: "Evidence-based Frameworks",   ratings: ["best", "ok", "weak", "ok", "weak"] },
                    { row: "Speed & Automation",          ratings: ["ok", "best", "ok", "best", "best"] },
                    { row: "Multimedia Personalization",  ratings: ["best", "best", "weak", "ok", "ok"] },
                    { row: "Rigorous Skill Modeling",     ratings: ["best", "ok", "weak", "ok", "weak"] },
                    { row: "Faithfulness & Technical Grounding", ratings: ["best", "ok", "weak", "weak", "weak"] },
                    { row: "In-workflow Integrations",    ratings: ["best", "weak", "ok", "best", "ok"] }
                  ].map((row, ri) => (
                    <tr key={ri} className="border-t border-gray-100">
                      <td className="p-5 lg:p-6 font-semibold text-gray-900 text-sm lg:text-base">
                        {row.row}
                      </td>
                      {row.ratings.map((r, ci) => (
                        <td
                          key={ci}
                          className={`p-4 lg:p-6 text-center ${ci === 0 ? "bg-primary/5" : ""}`}
                        >
                          <span
                            className={`inline-block w-4 h-4 lg:w-5 lg:h-5 rounded-full ${
                              r === "best"
                                ? "bg-primary"
                                : r === "ok"
                                ? "bg-amber-400"
                                : "bg-accent"
                            }`}
                            aria-label={r === "best" ? "Best in class" : r === "ok" ? "Acceptable" : "Weak"}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-100 p-5 lg:p-6 bg-white">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <span className="text-sm font-semibold text-gray-700">Performance scale</span>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3.5 h-3.5 rounded-full bg-primary" />
                  <span className="text-sm text-gray-600">Best in class</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3.5 h-3.5 rounded-full bg-amber-400" />
                  <span className="text-sm text-gray-600">Acceptable</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3.5 h-3.5 rounded-full bg-accent" />
                  <span className="text-sm text-gray-600">Weak</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Pricing */}
      <section className="bg-white py-20 lg:py-32" id="pricing">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Simple, transparent pricing
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Start free. Upgrade when you're ready to publish and scale.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Free",
                tagline: "Explore the platform, free",
                price: "$0",
                priceSuffix: "",
                features: [
                  "1 draft",
                  "Up to 100 pages per course",
                  "Formats: PDF, Doc, Docx, PPT, PPTx",
                  "AI tutor / chatbot",
                  "Guided intake interview",
                  "Max 30 min per course",
                ],
                cta: "Get started",
                ctaHref: "https://app.getpraxium.ai/",
                ctaVariant: "outline" as const,
                highlighted: false,
              },
              {
                name: "Starter",
                tagline: "Perfect for getting started",
                price: "$99",
                priceSuffix: "one-time",
                features: [
                  "Publish up to 1 course",
                  "3 drafts",
                  "Up to 300 pages per course",
                  "Formats: PDF, Doc, Docx, PPT, PPTx",
                  "AI tutor / chatbot",
                  "Guided intake interview",
                  "Max 1 hour per course",
                ],
                cta: "Buy Starter — $99",
                ctaHref: "https://app.getpraxium.ai/",
                ctaVariant: "outline" as const,
                highlighted: false,
              },
              {
                name: "Pro",
                tagline: "Built for power users and teams",
                price: "$199",
                priceSuffix: "one-time",
                features: [
                  "Publish up to 3 courses",
                  "12 drafts",
                  "Up to 500 pages per course",
                  "Formats: PDF, Doc, Docx, PPT, PPTx",
                  "AI tutor / chatbot",
                  "Guided intake interview",
                  "Max 2 hours per course",
                ],
                cta: "Buy Pro — $199",
                ctaHref: "https://app.getpraxium.ai/",
                ctaVariant: "solid" as const,
                highlighted: true,
              },
              {
                name: "Enterprise",
                tagline: "Built for scale",
                price: "Custom",
                priceSuffix: "",
                features: [
                  "More than 2 hours per course",
                  "Automated quality control reports on AI-generated output",
                  "Professional instructional designer review",
                  "Custom branding",
                  "Fine-tuned models",
                  "Custom integrations and export",
                  "Enterprise-grade security",
                  "Support for your unique use cases",
                ],
                cta: "Contact us",
                ctaHref: "mailto:contact@getpraxium.ai",
                ctaVariant: "outline" as const,
                highlighted: false,
              },
            ].map((tier, idx) => (
              <motion.div
                key={tier.name}
                variants={fadeInUp}
                className={`relative flex flex-col rounded-2xl bg-white p-7 lg:p-8 ${
                  tier.highlighted
                    ? "border-2 border-primary shadow-lg lg:-translate-y-2"
                    : "border border-gray-200"
                }`}
                data-testid={`pricing-tier-${tier.name.toLowerCase()}`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-600 mb-5 min-h-[2.5rem]">{tier.tagline}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className={`font-extrabold ${tier.price === "Custom" ? "text-4xl" : "text-5xl"} text-gray-900`}>
                      {tier.price}
                    </span>
                  </div>
                  {tier.priceSuffix && (
                    <p className="text-xs text-gray-500 mt-1">{tier.priceSuffix}</p>
                  )}
                </div>
                <ul className="space-y-3 flex-1 mb-7 border-t border-gray-100 pt-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.ctaHref}
                  target={tier.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={tier.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-auto"
                  data-testid={`pricing-cta-${tier.name.toLowerCase()}`}
                >
                  <Button
                    className={`w-full rounded-[7px] h-11 font-medium ${
                      tier.ctaVariant === "solid"
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-center text-sm text-gray-500 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Have questions?{" "}
            <a
              href="mailto:contact@getpraxium.ai"
              className="text-primary hover:underline font-medium"
            >
              Contact support
            </a>
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Frequently asked questions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about creating and taking courses on PraxiumAI.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-3xl shadow-sm border border-gray-100 p-2 sm:p-4 lg:p-6"
          >
            <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
              {[
                {
                  q: "How do I get started?",
                  a: (
                    <>
                      The fastest path is a product demo — no slide deck, no pitch, just the product with your actual
                      use case as the context. We'll look at a real challenge you're facing, walk through how
                      PraxiumAI would approach it, and show you the quality of the output on something built for a
                      situation like yours. Email{" "}
                      <a
                        href="mailto:pk@getpraxium.ai"
                        className="text-primary font-semibold hover:text-primary/80 underline underline-offset-4"
                        data-testid="link-faq-getting-started-email"
                      >
                        pk@getpraxium.ai
                      </a>{" "}
                      to book a slot — every inquiry gets a personal response.
                    </>
                  )
                },
                {
                  q: "What's the difference between a creator and a learner?",
                  a: (
                    <>
                      A creator builds multimedia modules: they upload source material, configure structure, and invite
                      people in. A learner takes the course: they work through the modules and lessons, ask the AI tutor
                      questions, and track their own progress. One account, two distinct roles — and a creator can also
                      be a learner in someone else's course.
                    </>
                  )
                },
                {
                  q: "What is PraxiumAI and what does it actually do?",
                  a: (
                    <>
                      PraxiumAI is an AI-powered training course creation platform. It transforms your existing
                      documents and subject matter expertise into complete, evidence-based, interactive technical
                      training courses — in approximately one hour. Unlike tools that simply convert documents into
                      content, PraxiumAI starts with learner analysis and skill decomposition before generating a
                      single word of content, ensuring every course is calibrated to produce real behavioral change on
                      the job.
                    </>
                  )
                },
                {
                  q: "How long does course creation take, and when do I need to be involved?",
                  a: (
                    <>
                      <p className="mb-3">
                        Approximately one hour for a complete 30-minute course — including learner analysis, objective
                        setting, content generation, assessment design, and formatting for delivery. The traditional
                        process for the same course takes 8–12 weeks and costs $30,000–$50,000 at fully-loaded industry
                        rates. PraxiumAI does not cut corners to achieve that speed; it automates the execution so
                        human attention can stay focused on judgment, validation, and strategic design.
                      </p>
                      <p className="mb-3">There are four short checkpoints early on where your input is needed:</p>
                      <ol className="list-decimal pl-5 space-y-2 mb-3">
                        <li>Upload your source documents to start the course.</li>
                        <li>
                          Confirm the learner persona — after ~5–15 minutes (depending on doc length) of document
                          analysis, you'll be prompted to accept or refine the suggested audience.
                        </li>
                        <li>
                          Confirm the instructional goal — after ~5 more minutes, you'll review and refine the
                          recommended goal.
                        </li>
                        <li>
                          Approve the learning objectives — after ~5–10 more minutes, you'll finalize the proposed
                          objectives.
                        </li>
                      </ol>
                      <p>
                        You don't have to stay on the page between steps. Each course's current state — for example,
                        "Action required" or "Generating" — is shown on the home page, so you can step away and pick up
                        where you left off whenever it's convenient.
                      </p>
                    </>
                  )
                },
                {
                  q: "How do creators add learners to a course?",
                  a: (
                    <>
                      From the creator dashboard, open the Learners tab and send an invite by email. Invited learners
                      click the link, sign in, and land directly in the course. You can revoke access from the same
                      dashboard at any time.
                    </>
                  )
                },
                {
                  q: "What kinds of content can a creator produce?",
                  a: (
                    <>
                      PraxiumAI creates eLearning modules and lessons — lesson video, learning objectives, key points,
                      source references, scenario-based multiple-choice questions, plus an interactive document
                      explorer and AI tutor. Creators can also generate slides, diagrams, narration audio, narrated
                      video, and avatar-presented video — all derived from your source material and editable inline.
                      The visual language is intentionally minimal: the goal is a calm, distraction-free surface that
                      keeps the learner focused on the material.
                    </>
                  )
                },
                {
                  q: "Can I bring in media made with my own design tools?",
                  a: (
                    <>
                      Yes — direct upload of your own slides, images, audio, and video is on the way. We're shipping
                      upload rather than wiring up a long list of third-party integrations on purpose: every external
                      connector is another surface where your content and customer data could be exposed, and we'd
                      rather give you a single, audited way in. Keep working in the tools you already love — Keynote,
                      Figma, your video editor — apply your full branding, then bring the finished asset onto the
                      platform yourself.
                    </>
                  )
                },
                {
                  q: "What kinds of quizzes does PraxiumAI support?",
                  a: (
                    <>
                      Every lesson includes short inline checks — fill-the-blank, matching, and ordering exercises,
                      plus predict-before-reveal worked examples — designed to build reasoning as the learner reads.
                      Each lesson then closes with a multiple-choice quiz. Only the multiple-choice quiz is graded; the
                      inline checks are formative practice and don't affect a learner's score.
                    </>
                  )
                },
                {
                  q: "Is my content private and secure?",
                  a: (
                    <>
                      Yes. Your source documents and generated content stay in your workspace and are never used to
                      train AI models. All data is encrypted in transit and at rest, and our underlying infrastructure
                      providers are SOC 2 Type 2 certified.
                    </>
                  )
                }
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-gray-200 last:border-b-0 px-3 sm:px-4"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger className="py-5 lg:py-6 text-left text-base lg:text-lg font-semibold text-gray-900 hover:no-underline hover:text-primary [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-0 text-base text-gray-600 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-gray-600 mt-10 text-base"
          >
            Still have questions?{" "}
            <a
              href="mailto:contact@getpraxium.ai"
              className="text-primary font-semibold hover:text-primary/80 underline underline-offset-4"
              data-testid="link-faq-contact"
            >
              Get in touch
            </a>
            .
          </motion.p>
        </div>
      </section>
      {/* Closing CTA */}
      <section className="bg-primary py-24 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-white mb-10 tracking-tight">
              Ready to ship training with better outcomes?
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <a href="https://app.getpraxium.ai/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent hover:bg-accent/90 text-white rounded-[7px] text-lg font-medium h-14 px-8 shadow-xl transition-transform hover:-translate-y-0.5">
                  Request Access
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0b3334] py-12 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img src={logoWhite} alt="PraxiumAI" className="h-6 opacity-90" />
            <span className="text-white/60 text-sm">© PraxiumAI</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/113215291/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PraxiumAI on LinkedIn"
              className="text-white/70 hover:text-white transition-colors"
              data-testid="link-social-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/getpraxiumai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PraxiumAI on Instagram"
              className="text-white/70 hover:text-white transition-colors"
              data-testid="link-social-instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://privacy.us.lg.com/policies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
      {/* Product Intro Video Modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent
          className="max-w-4xl w-[95vw] p-0 bg-transparent border-0 shadow-none [&>button]:hidden"
          data-testid="dialog-intro-video"
        >
          <DialogTitle className="sr-only">PraxiumAI product introduction</DialogTitle>

          {/* Close button — outside the video frame, always visible */}
          <DialogClose
            className="absolute -top-12 right-0 sm:-top-14 sm:-right-2 z-50 flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/95 hover:bg-white text-gray-900 shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close video"
            data-testid="button-close-video"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </DialogClose>

          <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            {videoOpen && (
              <Suspense fallback={
                <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
                  Loading video…
                </div>
              }>
                <MuxPlayer
                  ref={muxPlayerRef}
                  playbackId={MUX_PLAYBACK_ID}
                  poster={MUX_POSTER_URL}
                  metadata={{ video_title: "PraxiumAI product introduction" }}
                  accentColor="#166A6C"
                  streamType="on-demand"
                  autoPlay
                  onEnded={() => {
                    setVideoPaused(false);
                    setVideoEnded(true);
                  }}
                  onPlay={() => {
                    setVideoEnded(false);
                    setVideoPaused(false);
                  }}
                  onPause={() => {
                    const player = muxPlayerRef.current;
                    const duration = player?.duration ?? 0;
                    const currentTime = player?.currentTime ?? 0;
                    // Don't show paused overlay when pause fires due to natural end
                    if (duration > 0 && currentTime >= duration - 0.5) return;
                    setVideoPaused(true);
                  }}
                  style={{ width: "100%", height: "100%", aspectRatio: "16 / 9", "--media-object-fit": "contain" } as any}
                />
              </Suspense>
            )}

            {/* End-card overlay */}
            {videoEnded && (
              <div
                className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-black/85 backdrop-blur-sm px-6 text-center animate-in fade-in duration-300"
                data-testid="overlay-video-ended"
              >
                <div>
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                    Ready to turn your docs into training?
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base">
                    Get early access to PraxiumAI.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://app.getpraxium.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    data-testid="link-end-card-request-access"
                  >
                    <Button className="bg-accent hover:bg-accent/90 text-white rounded-[7px] font-medium h-12 px-6 text-base shadow-lg transition-transform hover:-translate-y-0.5 w-full sm:w-auto">
                      Request Access
                      <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <button
                    type="button"
                    onClick={replayVideo}
                    className="text-white/90 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors px-4 py-2"
                    data-testid="button-end-card-replay"
                  >
                    Watch again
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoOpen(false)}
                    className="text-white/90 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors px-4 py-2"
                    data-testid="button-end-card-close"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* Paused overlay */}
            {videoPaused && !videoEnded && (
              <div
                className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-black/85 backdrop-blur-sm px-6 text-center animate-in fade-in duration-300"
                data-testid="overlay-video-paused"
              >
                <div>
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                    Like what you see?
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base">
                    Get early access to PraxiumAI — or keep watching.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://app.getpraxium.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    data-testid="link-paused-card-request-access"
                  >
                    <Button className="bg-accent hover:bg-accent/90 text-white rounded-[7px] font-medium h-12 px-6 text-base shadow-lg transition-transform hover:-translate-y-0.5 w-full sm:w-auto">
                      Request Access
                      <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <button
                    type="button"
                    onClick={resumeVideo}
                    className="inline-flex items-center gap-2 rounded-[7px] border border-white/40 bg-white/10 hover:bg-white/20 text-white font-medium h-12 px-5 text-base transition-colors w-full sm:w-auto justify-center"
                    data-testid="button-paused-card-resume"
                  >
                    <Play className="h-4 w-4 fill-white" strokeWidth={1.5} />
                    Resume video
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoOpen(false)}
                    className="text-white/90 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors px-4 py-2"
                    data-testid="button-paused-card-close"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}