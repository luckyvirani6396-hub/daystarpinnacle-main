import { useState } from 'react';
import { allBlogPosts } from '../../assets/data/content';
import WellnessHubHero from '../../components/wellness-hub/WellnessHubHero';
import HubStatsBar from '../../components/wellness-hub/HubStatsBar';
import FeaturedArticle from '../../components/wellness-hub/FeaturedArticle';
import WellnessTips from '../../components/wellness-hub/WellnessTips';
import ArticleGrid from '../../components/wellness-hub/ArticleGrid';
import BlogFAQ from '../../components/wellness-hub/BlogFAQ';
import BlogContactCTA from '../../components/wellness-hub/BlogContactCTA';

const featuredPost = allBlogPosts[0];

export default function WellnessHub() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? allBlogPosts
    : allBlogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      <WellnessHubHero />
      <HubStatsBar />
      <FeaturedArticle post={featuredPost} />
      <WellnessTips />
      <ArticleGrid
        posts={filteredPosts}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <BlogFAQ />
      <BlogContactCTA />
    </>
  );
}


