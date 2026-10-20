import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import type { BlogPost } from '../../types';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { fadeUp } from '../../utils/animations';

interface FeaturedArticleProps {
  post: BlogPost;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  return (
    <section id="featured" className="py-14 md:py-18 bg-white relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Editor's Pick"
          title="Featured Article"
          description="Our top read this week — handpicked by our health experts."
        />

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="group bg-white rounded-[28px] overflow-hidden border border-[#E2E8E4]/60 hover:border-[#FF7A1A]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF7A1A]/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden h-64 lg:h-auto lg:min-h-[380px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-5 left-5 bg-[#FF7A1A] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                Featured
              </span>
            </div>

            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center relative">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#FF7A1A] bg-[#FEF3E8] rounded-full px-3.5 py-1.5 w-fit mb-5 border border-[#FF7A1A]/10">
                {post.category}
              </span>

              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#004B57] mb-4 leading-snug group-hover:text-[#FF7A1A] transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-[#5F6B6E] text-base leading-relaxed mb-6 line-clamp-3 font-medium">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-[#5F6B6E] mb-8 font-semibold">
                <span className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#FF7A1A]">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {post.date}
                </span>
                <span className="text-[#5F6B6E]/30">•</span>
                <span className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#FF7A1A]">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {post.readTime}
                </span>
              </div>

              <Link
                to={`/health-hub/${post.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF7A1A] hover:bg-[#E86800] text-white font-bold text-sm transition-all duration-300 w-fit shadow-lg shadow-[#FF7A1A]/20 hover:scale-[1.02] hover:-translate-y-0.5"
              >
                <span>Read Full Article</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.article>
      </Container>
    </section>
  );
}
