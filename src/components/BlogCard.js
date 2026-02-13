import React from 'react';

function BlogCard({ image, title, description, link }) {
  return (
    <article className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="read-more" target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
    </article>
  );
}

export default BlogCard;
