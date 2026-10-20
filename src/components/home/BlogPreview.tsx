import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock3, Calendar } from 'lucide-react';
import { allBlogPosts } from '../../assets/data/content';
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

export default function BlogPreview() {
  const previewPosts = allBlogPosts.slice(0, 3);

  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
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
            Evidence-based frameworks, workplace nutrition strategies, and ergonomic insights from our certified wellness team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {previewPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="h-full"
            >
              <Link
                to={`/health-hub/${post.slug}`}
                className={`${cardOnCream} overflow-hidden flex flex-col h-full hover:shadow-xl hover:border-[#FF7A1A]/30 transition-all duration-300 group cursor-pointer block`}
              >
                {/* Blog Card Image Header */}
                <div className="w-full h-52 relative overflow-hidden shrink-0 bg-gray-50 border-b border-[#E2E8E4]/60">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[10px] font-extrabold uppercase tracking-wider text-[#FF7A1A] px-3 py-1 rounded-full shadow-sm border border-[#FF7A1A]/20">
                    {post.category}
                  </span>
                </div>

                {/* Content Padding container */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-3 text-xs text-[#5F6B6E] font-semibold mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FF7A1A]" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#5F6B6E]">
                      <Clock3 className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className={`${cardTitle} text-base sm:text-lg leading-snug mb-3 flex-grow group-hover:text-[#FF7A1A] transition-colors`}>
                    {post.title}
                  </h3>
                  <p className={`${cardDescription} line-clamp-3 mb-6 font-medium text-xs sm:text-sm leading-relaxed`}>
                    {post.excerpt}
                  </p>

                  <div className="pt-3 mt-auto border-t border-[#E2E8E4]/60">
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#004B57] group-hover:text-[#FF7A1A] transition-colors">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/health-hub" className={`${btnSecondary} shadow-sm`}>
            <span>View All Corporate Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
