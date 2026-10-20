import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Clock3, Calendar } from 'lucide-react';
import type { BlogPost } from '../../types';
import { fadeUp } from '../../utils/animations';
import {
  cardOnCream,
  cardTitle,
  cardDescription,
} from '../home/sectionStyles';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`${cardOnCream} overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300 group`}
    >
      <Link to={`/health-hub/${post.slug}`} className="flex flex-col h-full">
        {/* Blog Card Image Header */}
        <div className="w-full h-48 relative overflow-hidden shrink-0 bg-gray-50 border-b border-[#E2E8E4]/60">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#FF7A1A] bg-[#FEF3E8] border border-[#FF7A1A]/20 px-2.5 py-1 rounded-full shadow-sm z-10">
            <Building2 className="w-3 h-3" strokeWidth={2.3} />
            {post.category}
          </span>
        </div>

        {/* Content Padding container */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#5F6B6E]">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#5F6B6E]">
              <Clock3 className="w-3.5 h-3.5 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h3 className={`${cardTitle} text-base sm:text-lg leading-snug mb-2 flex-grow group-hover:text-[#FF7A1A] transition-colors duration-300`}>
            {post.title}
          </h3>
          <p className={`${cardDescription} mb-6`}>{post.excerpt}</p>

          <div className="pt-2 mt-auto">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004B57] hover:text-[#FF7A1A] transition-colors">
              Read Article
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
