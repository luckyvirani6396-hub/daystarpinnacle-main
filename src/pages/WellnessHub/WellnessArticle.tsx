import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import { getBlogPostBySlug } from '../../assets/data/content';
import { fadeUp } from '../../utils/animations';

export default function WellnessArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/health-hub" replace />;
  }

  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-20 bg-[#FAF9F5]">
      <Container>
        <div className="max-w-8xl mx-auto">
          <motion.header
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-8 md:mb-10"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-5">
              <Link
                to="/health-hub"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004B57] hover:text-[#FF7A1A] transition-colors"
              >
                ← Back to Blog
              </Link>
              <span className="px-3.5 py-1 rounded-full bg-[#FEF3E8] border border-[#FF7A1A]/20 text-[#FF7A1A] text-xs font-extrabold uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold text-[#004B57] leading-tight mb-5">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 text-sm text-[#5F6B6E] font-medium">
              <span>{post.date}</span>
              <span aria-hidden="true">&bull;</span>
              <span>{post.readTime}</span>
            </div>
          </motion.header>

          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full min-w-0"
          >
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-[#004B57]/10 mb-8 md:mb-10">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[26rem] object-cover"
              />
            </div>

            <div className="space-y-5 md:space-y-6">
              {post.content.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-[#2C4033] leading-relaxed text-base md:text-lg font-normal"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 md:mt-12 pt-8 border-t border-[#E2E8E4] flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF7A1A] hover:bg-[#E86800] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-[#FF7A1A]/15 hover:scale-[1.02]"
              >
                <span>Book Consultation</span>
              </Link>
              <Link
                to="/health-hub"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#004B57]/20 text-[#004B57] hover:border-[#FF7A1A] hover:text-[#FF7A1A] font-bold text-sm transition-all duration-300 shadow-sm"
              >
                <span>More Articles</span>
              </Link>
            </div>
          </motion.article>
        </div>
      </Container>
    </section>
  );
}
