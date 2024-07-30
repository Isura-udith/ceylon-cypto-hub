import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './YouTubeSearch.css'; // Create and import a CSS file for styling

const apiKey = 'AIzaSyBMFQfWuRaQ1-ZtKV4EFy5OMzzl9JkGLyk';
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  systemInstruction: "Search the YouTube and give me their details and the links related to cryptocurrency.",
});

const YouTubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [input, setInput] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { role: 'user', parts: [{ text: input }] };

      try {
        const chatSession = model.startChat({
          generationConfig: {
            temperature: 1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: 'text/plain',
          },
          history: [userMessage],
        });

        const result = await chatSession.sendMessage(input);
        const responseText = result.response.candidates[0].content.parts[0].text;
        console.log("AI Response:", responseText);

        // Attempt to parse the response text as JSON
        let searchResults;
        try {
          searchResults = JSON.parse(responseText);
        } catch (jsonError) {
          console.error("JSON Parsing Error:", jsonError);
          searchResults = { videos: [] };
        }

        setVideos(searchResults.videos);
      } catch (error) {
        console.error("Error in YouTube search session:", error);
      }
    }
  };

  return (
    <div className="youtube-search container mx-auto py-6 px-6">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Search YouTube Videos</h2>
      <form onSubmit={handleSearch} className="flex mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l-lg"
          placeholder="Type your search query..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300 flex items-center"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md video-card">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-700 mb-4">{video.description}</p>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSearch;
