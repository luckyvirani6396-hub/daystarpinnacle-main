import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Clock3 } from 'lucide-react';
import {
  cardDescription,
  cardOnCream,
  cardTitle,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
  btnSecondary,
} from './sectionStyles';

const previewPosts = [
  {
    title: 'How to Improve Employee Participation in Wellness Programs',
    excerpt:
      'Practical strategies HR teams can use to drive engagement across onsite, remote, and hybrid teams.',
    category: 'HR Strategy',
    readTime: '5 min read',
    image: '/images/blog-participation.png',
  },
  {
    title: 'Designing a 12-Month Corporate Wellness Calendar That Works',
    excerpt:
      'A planning framework to balance fitness, nutrition, mental wellbeing, and measurable outcomes month by month.',
    category: 'Program Planning',
    readTime: '6 min read',
    image: '/images/blog-calendar.png',
  },
  {
    title: 'ROI of Corporate Wellness: Metrics Leadership Actually Cares About',
    excerpt:
      'What to track beyond attendance so leadership can connect employee wellbeing efforts to business performance.',
    category: 'Business Impact',
    readTime: '4 min read',
    image: '/images/blog-roi.png',
  },
];

export default function BlogPreview() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[10%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.12)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${sectionIntroBlock} mb-10 md:mb-14`}
        >
          <span className={sectionIntroBadge}>Wellness Insights</span>
          <h2 className={sectionIntroHeading}>
            Latest <span className={sectionHeadingAccent}>Corporate Wellness</span> Articles
          </h2>
          <p className={sectionBody}>
            Insights for HR teams and business leaders to design engaging, measurable, and
            sustainable workplace wellness programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`${cardOnCream} overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300 group`}
            >
              {/* Blog Card Image Header */}
              <div className="w-full h-48 relative overflow-hidden shrink-0 bg-gray-50 border-b border-[#E2E8E4]/60">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content Padding container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#FF7A1A] bg-[#FEF3E8] border border-[#FF7A1A]/20 px-2.5 py-1 rounded-full">
                    <Building2 className="w-3 h-3" strokeWidth={2.3} />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#5F6B6E]">
                    <Clock3 className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className={`${cardTitle} text-base sm:text-lg leading-snug mb-2 flex-grow`}>{post.title}</h3>
                <p className={`${cardDescription} mb-6`}>{post.excerpt}</p>

                <div className="pt-2 mt-auto">
                  <Link
                    to="/health-hub"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004B57] hover:text-[#FF7A1A] transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/health-hub" className={btnSecondary}>
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
