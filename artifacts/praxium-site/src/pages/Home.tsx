import { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle2, Play, X } from "lucide-react";

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
              >
                Turn technical docs and knowledge into multimedia training
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-8 sm:mb-10 max-w-xl"
              >
                PraxiumAI captures your expertise and complex docs and transforms them into personalized upskilling experiences grounded in learning science. Built for the agentic era.
              </motion.p>
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
              <div className="relative w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
                <img
                  src={heroProductImage}
                  alt="PraxiumAI course builder interface preview"
                  className="block w-full select-none pointer-events-none"
                  draggable={false}
                />

                {/* Play button overlay */}
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  aria-label="Play product introduction video"
                  className="group absolute top-3 right-3 sm:top-5 sm:right-5 lg:top-6 lg:right-6 flex items-center gap-3 focus:outline-none"
                  data-testid="button-play-intro-video"
                >
                  <span className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white/40 animate-ping" />
                    <span className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full bg-white shadow-xl transition-transform group-hover:scale-110 group-focus-visible:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-white/70">
                      <Play className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary fill-primary ml-0.5" />
                    </span>
                  </span>
                  <span className="hidden sm:inline-flex items-center rounded-full bg-white/95 px-3 py-1.5 text-xs lg:text-sm font-semibold text-primary shadow-md transition-transform group-hover:-translate-y-0.5">
                    Watch 2-min intro
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

      {/* Tagline Strip */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-2xl lg:text-4xl font-semibold text-gray-900 leading-tight"
          >
            Upload PDFs and take an intake interview. PraxiumAI then builds rich personalized interactive courses with assessments.
          </motion.h2>
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
                  { img: feature1Img, eyebrow: "AI-Powered Course Creation", lead: "Start with your docs and expertise. Let AI build the rest.", body: "Turn complex PDFs, slides, and SOPs into rich, interactive courses with quizzes—with manual updating." },
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
                        {col.sub && (
                          <div className={`text-xs mt-1 font-normal ${col.highlight ? "text-white/80" : "text-gray-500"}`}>
                            {col.sub}
                          </div>
                        )}
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
              Ready to ship training 10× faster?
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
          <div>
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
          className="max-w-4xl w-[95vw] p-0 bg-black border-0 overflow-hidden rounded-xl shadow-2xl [&>button]:hidden"
          data-testid="dialog-intro-video"
        >
          <DialogTitle className="sr-only">PraxiumAI product introduction</DialogTitle>
          <DialogClose
            className="absolute right-3 top-3 z-50 rounded-full bg-black/60 hover:bg-black/80 text-white p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Close video"
            data-testid="button-close-video"
          >
            <X className="h-5 w-5" />
          </DialogClose>
          <div className="relative w-full aspect-video bg-black">
            {videoOpen && (
              <Suspense fallback={
                <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
                  Loading video…
                </div>
              }>
                <MuxPlayer
                  playbackId={MUX_PLAYBACK_ID}
                  poster={MUX_POSTER_URL}
                  metadata={{ video_title: "PraxiumAI product introduction" }}
                  accentColor="#166A6C"
                  streamType="on-demand"
                  autoPlay
                  style={{ width: "100%", height: "100%", aspectRatio: "16 / 9", "--media-object-fit": "contain" } as any}
                />
              </Suspense>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}