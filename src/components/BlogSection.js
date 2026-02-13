import React from 'react';
import BlogCard from './BlogCard';

const posts = [
  {
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    title: 'Waves and Wanderlust',
    description:
      'A reflection on finding peace while watching the ocean and letting life slow down.',
    link: '#'
  },
  {
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    title: 'Mountain Mornings',
    description:
      'How early hikes in quiet mountains taught me discipline, gratitude, and wonder.',
    link: '#'
  },
  {
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    title: 'Stories from the City',
    description:
      'Moments from crowded streets that became unforgettable lessons in human connection.',
    link: '#'
  }
];

function BlogSection() {
  return (
    <section className="blog-section" id="blog">
      <h2>Blog</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard
            key={post.title}
            image={post.image}
            title={post.title}
            description={post.description}
            link={post.link}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
