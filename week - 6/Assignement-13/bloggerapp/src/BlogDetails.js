import React from "react";

function BlogDetails() {

  const blogs = [
    {
      id: 1,
      title: "Introduction to React",
      author: "Surya",
      category: "React"
    },
    {
      id: 2,
      title: "Spring Boot REST API",
      author: "John",
      category: "Spring Boot"
    },
    {
      id: 3,
      title: "Java Collections",
      author: "David",
      category: "Java"
    }
  ];

  return (
    <div>
      <h2>Blog Details</h2>

      {
        blogs.map(blog => (
          <div
            key={blog.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px"
            }}
          >
            <h3>{blog.title}</h3>
            <p><b>Author:</b> {blog.author}</p>
            <p><b>Category:</b> {blog.category}</p>
          </div>
        ))
      }

    </div>
  );
}

export default BlogDetails;