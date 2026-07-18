import React from "react";

function CourseDetails() {

  const courses = [
    {
      id: 1,
      name: "Java Full Stack",
      duration: "6 Months",
      trainer: "Mr. Raj"
    },
    {
      id: 2,
      name: "React JS",
      duration: "2 Months",
      trainer: "Mr. Kumar"
    },
    {
      id: 3,
      name: "Spring Boot",
      duration: "3 Months",
      trainer: "Mrs. Priya"
    }
  ];

  return (
    <div>
      <h2>Course Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Course</th>
            <th>Duration</th>
            <th>Trainer</th>
          </tr>
        </thead>

        <tbody>
          {
            courses.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.duration}</td>
                <td>{course.trainer}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default CourseDetails;