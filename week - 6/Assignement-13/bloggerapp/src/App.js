import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

  const [page, setPage] = useState("books");

  return (
    <div style={{ padding: "20px" }}>

      <h1>Blogger App</h1>

      <button onClick={() => setPage("books")}>
        Book Details
      </button>

      <button
        onClick={() => setPage("blogs")}
        style={{ marginLeft: "10px" }}
      >
        Blog Details
      </button>

      <button
        onClick={() => setPage("courses")}
        style={{ marginLeft: "10px" }}
      >
        Course Details
      </button>

      <hr />

      {page === "books" && <BookDetails />}

      {page === "blogs" && <BlogDetails />}

      {page === "courses" && <CourseDetails />}

    </div>
  );
}

export default App;