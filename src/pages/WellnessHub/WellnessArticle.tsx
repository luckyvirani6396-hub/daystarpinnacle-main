import { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Phone,
  Bookmark,
  Share2,
  MessageCircle,
  Quote,
} from 'lucide-react';
import { getBlogPostBySlug, getRelatedBlogPosts } from '../../assets/data/content';
import {
  btnPrimary,
  btnSecondary,
  sectionHeadingAccent,
} from '../../components/home/sectionStyles';

export default function WellnessArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedBlogPosts(slug, 3) : [];

  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track active section for Table of Contents
  useEffect(() => {
    if (!post?.sections || post.sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -60% 0%',
        threshold: 0,
      }
    );

    post.sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post]);

  if (!post) {
    return <Navigate to="/health-hub" replace />;
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const author = post.author || {
    name: 'Daystar Pinnacle Clinical Board',
    role: 'Corporate Wellness & Preventive Medicine Advisory',
    credentials: 'Board-Certified Corporate Health Faculty',
    avatar: '/images/team-doctor.png',
  };

  const tags = post.tags || [post.category, 'Workplace Health', 'HR Strategy', 'Preventative Care'];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7A1A] via-[#72A93B] to-[#004B57] origin-left z-50 pointer-events-none"
      />

      <div className="w-full bg-[#FAF9F5] min-h-screen">
        {/* Article Header Container */}
        <header className="relative pt-8 pb-10 sm:pt-10 sm:pb-12 border-b border-[#E2E8E4]/80 bg-white/70 backdrop-blur-sm">
          <div className="w-[95%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Breadcrumbs & Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <Link
                to="/health-hub"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#004B57] hover:text-[#FF7A1A] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Health Hub</span>
              </Link>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#5F6B6E]">
                <Link to="/" className="hover:text-[#004B57]">Home</Link>
                <span>/</span>
                <Link to="/health-hub" className="hover:text-[#004B57]">Health Hub</Link>
                <span>/</span>
                <span className="text-[#004B57] truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
              </div>
            </div>

            {/* Badges & Meta */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-[#FEF3E8] border border-[#FF7A1A]/30 text-[#FF7A1A] text-xs font-extrabold uppercase tracking-wider">
                {post.category}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F2F4] border border-[#004B57]/20 text-[#004B57] text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#004B57]" />
                <span>Medically Verified</span>
              </span>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#5F6B6E] ml-auto">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-serif font-bold text-[#004B57] leading-[1.2] tracking-tight mb-4 max-w-5xl">
              {post.title}
            </h1>

            {/* Excerpt / Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#1A2E32]/75 leading-relaxed font-normal max-w-4xl">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Main Content Area: 2-Column Responsive Reader */}
        <main className="w-[95%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14">
          {/* Featured Hero Image */}
          <div className="mb-10 sm:mb-12">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-[#004B57]/8 border border-[#E2E8E4] bg-white">
              <img
                src={post.image}
                alt={post.title}
                loading="eager"
                className="w-full h-64 sm:h-96 md:h-[28rem] lg:h-[32rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white text-xs">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full font-medium">
                  {post.category} Playbook &bull; Executive Guide
                </span>
                <span className="hidden sm:inline bg-black/60 backdrop-blur-md px-3 py-1 rounded-full font-medium">
                  Photo Credit: Corporate Healthcare Archives
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Article Column (Prose & Content) */}
            <article className="lg:col-span-8 min-w-0">
              {/* Rich Structured Sections */}
              {post.sections && post.sections.length > 0 ? (
                <div className="space-y-12">
                  {post.sections.map((sec) => (
                    <section key={sec.id} id={sec.id} className="scroll-mt-28">
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#004B57] leading-snug mb-5 pb-2 border-b border-[#E2E8E4]/70">
                        {sec.heading}
                      </h2>

                      <div className="space-y-5 mb-6">
                        {sec.paragraphs.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-[16.5px] sm:text-[18px] text-[#1A2E32]/85 leading-[1.8] font-normal"
                          >
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Optional Callout / Pull Quote */}
                      {sec.callout && (
                        <div className="my-8 bg-[#FAF9F5] border-l-4 border-[#FF7A1A] rounded-r-2xl p-6 sm:p-7 shadow-[0_2px_16px_rgba(0,75,87,0.04)] border-y border-r border-[#E2E8E4]">
                          <div className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-xl bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center shrink-0 border border-[#FF7A1A]/20 shadow-xs">
                              <Quote className="w-4 h-4 text-[#FF7A1A]" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#FF7A1A] block mb-1.5">
                                Key Takeaway
                              </span>
                              <p className="text-base sm:text-[1.125rem] font-semibold text-[#1A2E32] leading-relaxed">
                                &ldquo;{sec.callout}&rdquo;
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Optional Checklist */}
                      {sec.checklist && sec.checklist.length > 0 && (
                        <div className="my-7 bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E8E4] shadow-sm">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF7A1A] mb-3">
                            Executive Action Checklist
                          </h4>
                          <div className="space-y-2.5">
                            {sec.checklist.map((item, cIdx) => (
                              <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A2E32]/80">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#72A93B] shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Optional Stat Highlight */}
                      {sec.stat && (
                        <div className="my-7 bg-gradient-to-r from-[#FAF9F5] to-white rounded-2xl p-6 border border-[#E2E8E4] flex flex-col sm:flex-row items-center gap-5 shadow-sm">
                          <div className="text-4xl sm:text-5xl font-serif font-bold text-[#004B57] shrink-0">
                            {sec.stat.value}
                          </div>
                          <div className="text-xs sm:text-sm text-[#1A2E32]/75 font-medium leading-relaxed">
                            {sec.stat.label}
                          </div>
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              ) : (
                /* Fallback for raw paragraph posts */
                <div className="space-y-6">
                  {post.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? 'text-lg sm:text-xl text-[#004B57] font-medium leading-relaxed mb-6'
                          : 'text-[16.5px] sm:text-[18px] text-[#1A2E32]/85 leading-[1.8] font-normal'
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Tags & Taxonomy */}
              <div className="mt-12 pt-8 border-t border-[#E2E8E4] flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#5F6B6E] mr-2">Tags:</span>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white border border-[#E2E8E4] text-xs font-semibold text-[#004B57] hover:border-[#FF7A1A] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio Box */}
              <div className="mt-10 rounded-2xl bg-white border border-[#E2E8E4] p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row gap-5 items-start">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#FF7A1A]/30 shrink-0 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF7A1A] block mb-1">
                    About the Author &bull; Clinical Faculty
                  </span>
                  <h3 className="text-lg font-bold text-[#004B57]">
                    {author.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#72A93B] mb-2">
                    {author.credentials || author.role}
                  </p>
                  <p className="text-xs sm:text-sm text-[#1A2E32]/75 leading-relaxed font-normal">
                    Specializing in preventative workplace health interventions, stress resilience, and corporate
                    clinical nutrition to help enterprises build resilient, high-retention workforces.
                  </p>
                </div>
              </div>

              {/* Share & Feedback Banner */}
              <div className="mt-10 p-6 rounded-2xl bg-[#E6F2F4]/60 border border-[#004B57]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[#004B57]">
                    Found this executive guide valuable?
                  </h4>
                  <p className="text-xs text-[#1A2E32]/70 mt-0.5">
                    Share this playbook with your HR or leadership peers.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#004B57]/20 text-xs font-bold text-[#004B57] hover:border-[#FF7A1A] hover:text-[#FF7A1A] shadow-sm transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-[#004B57]/20 flex items-center justify-center text-[#004B57] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] shadow-sm transition-all"
                    aria-label="Share on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-[#004B57]/20 flex items-center justify-center text-[#004B57] hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] shadow-sm transition-all"
                    aria-label="Share on LinkedIn"
                  >
                    <span className="font-bold text-xs">in</span>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-[#004B57]/20 flex items-center justify-center text-[#004B57] hover:bg-black hover:text-white hover:border-black shadow-sm transition-all"
                    aria-label="Share on X"
                  >
                    <span className="font-bold text-xs">𝕏</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Right: Sticky Sidebar (TOC & Corporate CTA) */}
            <aside className="lg:col-span-4 hidden lg:block sticky top-24 space-y-6">
              {/* Table of Contents Widget */}
              {post.sections && post.sections.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-[#E2E8E4] shadow-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E2E8E4]/70">
                    <Bookmark className="w-4 h-4 text-[#FF7A1A]" />
                    <h3 className="text-sm font-bold text-[#004B57] uppercase tracking-wider">
                      Table of Contents
                    </h3>
                  </div>

                  <nav className="space-y-1.5">
                    {post.sections.map((sec) => {
                      const isActive = activeSection === sec.id;
                      return (
                        <a
                          key={sec.id}
                          href={`#${sec.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`block text-xs py-1.5 px-2.5 rounded-lg transition-all duration-200 leading-snug ${
                            isActive
                              ? 'bg-[#FEF3E8] text-[#FF7A1A] font-bold pl-3 border-l-2 border-[#FF7A1A]'
                              : 'text-[#1A2E32]/70 hover:text-[#004B57] hover:bg-[#FAF9F5]'
                          }`}
                        >
                          {sec.heading}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              )}

              {/* Share Guide Widget in Sidebar */}
              <div className="bg-white rounded-2xl p-5 border border-[#E2E8E4] shadow-sm">
                <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-[#E2E8E4]/70">
                  <Share2 className="w-4 h-4 text-[#FF7A1A]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#004B57]">
                    Share This Playbook
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-[#E2E8E4] text-xs font-bold text-[#004B57] hover:border-[#FF7A1A] hover:text-[#FF7A1A] transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-[#E2E8E4] text-xs font-bold text-[#004B57] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-[#E2E8E4] text-xs font-bold text-[#004B57] hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all"
                  >
                    <span className="font-bold text-xs">in</span>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-[#E2E8E4] text-xs font-bold text-[#004B57] hover:bg-black hover:text-white hover:border-black transition-all"
                  >
                    <span className="font-bold text-xs">𝕏</span>
                    <span>Twitter</span>
                  </a>
                </div>
              </div>

              {/* Corporate Consultation CTA Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#004B57] to-[#0A333B] text-white p-6 shadow-xl shadow-[#004B57]/15 relative overflow-hidden">
                <div className="absolute right-[-15%] top-[-15%] w-32 h-32 rounded-full bg-[#FF7A1A]/20 blur-xl pointer-events-none" />

                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF7A1A] block mb-2">
                  Enterprise Wellness Partner
                </span>

                <h3 className="text-lg font-serif font-bold mb-2 leading-snug">
                  Build Your Custom Workplace Program
                </h3>

                <p className="text-xs text-white/80 leading-relaxed mb-6 font-normal">
                  Our certified clinical experts design tailored hybrid or onsite health roadmaps for companies across India.
                </p>

                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#FF7A1A] hover:bg-[#E86800] text-white font-bold text-xs shadow-lg shadow-[#FF7A1A]/30 transition-all"
                  >
                    <span>Book Strategy Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href="tel:01204414400"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/20 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF7A1A]" />
                    <span>0120 - 4414400</span>
                  </a>
                </div>
              </div>

              {/* Fast Highlights Card */}
              <div className="bg-white rounded-2xl p-5 border border-[#E2E8E4] shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#004B57] mb-3">
                  Why Leading HR Leaders Partner With Us
                </h4>
                <div className="space-y-2 text-xs text-[#1A2E32]/75">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#72A93B] shrink-0" />
                    <span>100% Turnkey Speaker &amp; Calendar Logistics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#72A93B] shrink-0" />
                    <span>Verified MDs, Dietitians &amp; Ergonomists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#72A93B] shrink-0" />
                    <span>Quarterly Attendance &amp; ROI Reporting</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 sm:mt-20 pt-12 border-t border-[#E2E8E4]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF7A1A] block mb-1">
                    Continue Reading
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#004B57]">
                    Related Articles &amp; Insights
                  </h3>
                </div>

                <Link
                  to="/health-hub"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#004B57] hover:text-[#FF7A1A] transition-colors"
                >
                  <span>View All Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.id}
                    to={`/health-hub/${rPost.slug}`}
                    className="group bg-white rounded-2xl border border-[#E2E8E4] overflow-hidden shadow-sm hover:shadow-lg hover:border-[#FF7A1A]/35 transition-all duration-300 flex flex-col"
                  >
                    <div className="h-44 overflow-hidden relative bg-gray-100">
                      <img
                        src={rPost.image}
                        alt={rPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-[#FF7A1A] shadow-sm uppercase tracking-wider">
                        {rPost.category}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-[11px] text-[#5F6B6E] font-medium mb-2">
                        <span>{rPost.date}</span>
                        <span>&bull;</span>
                        <span>{rPost.readTime}</span>
                      </div>

                      <h4 className="text-sm font-bold text-[#004B57] group-hover:text-[#FF7A1A] transition-colors line-clamp-2 mb-2 leading-snug">
                        {rPost.title}
                      </h4>

                      <p className="text-xs text-[#1A2E32]/70 line-clamp-2 leading-relaxed mb-4 font-normal">
                        {rPost.excerpt}
                      </p>

                      <div className="mt-auto pt-3 border-t border-[#E2E8E4]/60 flex items-center gap-1 text-xs font-bold text-[#004B57] group-hover:text-[#FF7A1A]">
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Full-Width CTA Banner */}
          <section className="mt-16 sm:mt-20 rounded-3xl bg-white border border-[#E2E8E4] p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-[#FF7A1A]/5 blur-3xl" />
              <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-[#004B57]/5 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FEF3E8] border border-[#FF7A1A]/25 text-[#FF7A1A] text-xs font-extrabold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Workplace Health Transformation
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#004B57] mb-3">
                Ready to Implement a <span className={sectionHeadingAccent}>High-Impact</span> Program?
              </h3>

              <p className="text-xs sm:text-sm text-[#1A2E32]/75 leading-relaxed mb-7 font-normal">
                Partner with Daystar Pinnacle to design an evidence-based corporate wellness strategy tailored to your team size and work format.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  to="/contact"
                  className={`${btnPrimary} px-7 py-3.5 w-full sm:w-auto shadow-lg shadow-[#FF7A1A]/20`}
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/programs"
                  className={`${btnSecondary} px-7 py-3.5 w-full sm:w-auto`}
                >
                  <span>Explore All Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
