import React from "react";

const Blog = () => {
  const blogs = [
    {
      image: "",
      title: "AI & Education",
      intro: "The Future of AI in Pakistan's Education Sector",
      date: "July 20, 2024",
      description:
        "Exploring how artificial intelligence is set to revolutionize learning, assessment, and career guidance for students across Pakistan.",
    },
    {
      image: "",
      title: "Teacher Training",
      intro: "Why Continuous Professional Development is Key for Teachers",
      date: "July 15, 2024",
      description:
        "A deep dive into the importance of lifelong learning for educators and how digital platforms can support their growth.",
    },
    {
      image: "",
      title: "Career Development",
      intro: "Bridging the Gap: Connecting Academia with Industry Demands",
      date: "July 10, 2024",
      description:
        "How platforms like Consultants are creating vital links between educational institutions and the evolving job market.",
    },
  ];
  return (
    <div>
      <h2>Our Insights</h2>
      <p>
        Thoughts, articles, and updates on the future of EdTech, AI, and
        professional development in Pakistan.
      </p>
      <div>
        {blogs.map((blog, index) => (
          <div key={index}>
            <span>{blog.image}</span>
            <p> {blog.title}</p>
            <p>{blog.intro}</p>
            <p>{blog.date}</p>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
