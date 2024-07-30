import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FaPaperPlane } from 'react-icons/fa'; // Import the icon
import './Chat.css'; // Create and import a CSS file for animations

const apiKey = 'AIzaSyBMFQfWuRaQ1-ZtKV4EFy5OMzzl9JkGLyk';
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  systemInstruction: "Welcome to the chat! Here, you can ask any questions about cryptocurrency. Whether you're curious about blockchain technology, trading strategies, or legal regulations, we're here to help.",
});

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { role: 'user', parts: [{ text: input }] };

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, fromUser: true },
      ]);
      setInput('');

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
        const botMessage = result.response.candidates[0].content.parts[0].text;

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botMessage, fromUser: false },
        ]);
      } catch (error) {
        console.error("Error in chat session:", error);
      }
    }
  };

  return (
    <div className="chat-box container mx-auto py-6 px-6">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">CEYLON CRYPTO HUB AI Assistant: Your Guide in the Crypto World





</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="chat-messages mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message flex items-start my-2 animate-fade-in ${msg.fromUser ? 'justify-end' : 'justify-start'}`}>
              {!msg.fromUser && (
                <img src="https://tint.creativemarket.com/1SVrwmhb78JgYlYBi1pei44pgrdbrAs_Vm_11cakHHU/width:1820/height:1214/gravity:nowe/rt:fill-down/el:1/preset:cm_watermark_retina/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzczNC83MzQ5LzczNDk5MTMvYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2UtYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2UtcHN5Y2hvbG9neS1jaGlwLW1lY2hhbmlzbS1odW1hbm9pZC1saW5ndWlzdGljLW8uanBn" alt="Bot" className="rounded-full mr-2 w-8 h-8" />
              )}
              <div className={`p-2 rounded ${msg.fromUser ? 'bg-blue-100' : 'bg-green-100'}`}>
                {msg.text}
              </div>
              {msg.fromUser && (
                <img src="https://th.bing.com/th/id/OIP.jixXH_Els1MXBRmKFdMQPAHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7" alt="User" className="rounded-full ml-2 w-8 h-8" />
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300 flex items-center"
          >
            <FaPaperPlane className="mr-2" /> {/* Icon next to the text */}
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
