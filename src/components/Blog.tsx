import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Software Development',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and maintain enterprise applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    category: 'AI & Machine Learning',
    author: 'Pascal',
    date: '2024-03-10',
    readTime: '8 min read',
    tags: ['AI', 'Enterprise', 'Software Development']
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for South Florida Businesses',
    excerpt: 'Essential security measures and strategies to protect your business in the digital age.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80',
    category: 'Cybersecurity',
    author: 'Pascal',
    date: '2024-03-08',
    readTime: '6 min read',
    tags: ['Cybersecurity', 'Business', 'Florida']
  },
  {
    id: 3,
    title: 'Digital Transformation Success Stories in Fort Lauderdale',
    excerpt: 'How local businesses are leveraging technology to stay competitive and grow their market share.',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80',
    category: 'Digital Transformation',
    author: 'Pascal',
    date: '2024-03-05',
    readTime: '7 min read',
    tags: ['Digital Transformation', 'Case Study', 'Fort Lauderdale']
  }
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Digital Transformation',
  'Cloud Computing',
  'Software Development'
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expert perspectives on technology, innovation, and digital transformation
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-red-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-red-500/90 text-white text-sm rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gradient">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-red-500/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Stay Updated with Industry Insights
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest tech trends, best practices, and industry news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;