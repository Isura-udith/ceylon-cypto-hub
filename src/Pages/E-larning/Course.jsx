import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = () => {
  // Example data for courses
  const courses = [
    { id: 1, title: 'Introduction to Cryptocurrency and Blockchain Technology', description: 'Dive into the world of digital currencies with this comprehensive beginnerDive into the world of digital currencies with this comprehensive beginner course. Understand the basics of cryptocurrency, the underlying blockchain technology, and how these innovations are transforming the financial landscape. Perfect for those new to the crypto space. This course will provide you with the foundational knowledge to start your journey confidently.', instructor: 'John Doe', rating: 4.5 },
    { id: 2, title: 'Advanced Trading Strategies in Cryptocurrency Markets', description: 'Enhance your trading skills with advanced strategies tailored for the volatile cryptocurrency markets. And also can learn about technical analysis, risk management, and market psychology to make informed trading decisions. This course is designed for intermediate to advanced traders looking to refine their strategies and maximize their returns in the dynamic crypto environment.This will knowledge about advanced trading strategies.', instructor: 'Jane Smith', rating: 4.8 },
    { id: 3, title: 'Legal and Regulatory Aspects of Cryptocurrencies', description: 'Stay ahead of the curve with a thorough understanding of the legal and regulatory landscape surrounding cryptocurrencies. This course covers international regulations, compliance requirements, and legal considerations for individuals and businesses operating in the crypto space. Ideal for legal professionals, entrepreneurs, and anyone keen on staying informed about the legalities of digital currencies.', instructor: 'Alex Johnson', rating: 4.2 },
    { id: 4, title: 'Candlestick Patterns for Cryptocurrency Trading', description: 'Master the art of reading candlestick patterns and improve your trading strategies. This course covers essential patterns, their meanings, and how to apply them in real-world trading scenarios.', instructor: 'Mark Lee', rating: 4.7 },
    { id: 5, title: 'Chart Patterns and Technical Analysis', description: 'Gain in-depth knowledge of chart patterns and their significance in predicting market movements. In here can learn to identify and utilize these patterns to enhance your trading decisions.', instructor: 'Samantha Green', rating: 4.6 },
  ];

  return (
    <div>
      {/* Introduction Section */}
      <div className="intro-section bg-dark-blue text-white py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Welcome to CEYLON CRYPTO HUB</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-90xl mx-auto mb-6 text-center">
          Cryptocurrencies have revolutionized the financial world by offering a decentralized and secure method of transaction. They are built on blockchain technology, which ensures transparency and immutability. However, as with any financial asset, there are legal considerations to be aware of. Different countries have varying regulations regarding the use and trading of cryptocurrencies. It is essential to stay informed about the legal landscape to ensure compliance and secure transactions.
        </p>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center">
          At CEYLON CRYPTO HUB, we offer a range of courses designed to educate you on the intricacies of cryptocurrencies and the legal aspects surrounding them. Our goal is to provide you with the knowledge and skills to navigate the crypto world confidently and securely.
        </p>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto py-0 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Explore Our Courses</h2>
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
