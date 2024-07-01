import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = () => {
  // Example data for courses
  const courses = [
    { id: 1, title: 'Course Title 1', description: 'Course description goes here.', instructor: 'John Doe', rating: 4.5 },
    { id: 2, title: 'Course Title 2', description: 'Another course description.', instructor: 'Jane Smith', rating: 4.8 },
    { id: 3, title: 'Course Title 3', description: 'Yet another course description.', instructor: 'Alex Johnson', rating: 4.2 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Explore Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md course-card">
              <div className="relative">
                <img src={`https://picsum.photos/id/${course.id}/400/250`} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 bg-blue-600 px-4 py-2 text-white font-semibold">{course.title}</div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 fill-current text-yellow-400 mr-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1l2.65 5.45L18 7.5l-4.65 4.45L15.5 19 10 15.5 4.5 19l1.15-7.05L2 7.5l5.35-.05L10 1z" />
                    </svg>
                    <span className="text-gray-600">{course.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-600">{course.instructor}</span>
                </div>
                <Link to={`/course/${course.id}`} className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">View Course</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
