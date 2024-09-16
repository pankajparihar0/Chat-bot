import React, { useState } from 'react';
import './ChatComponent.css'; // Assume you have some CSS for styling

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { sender: 'user', text: input }]);

    // Simulate a bot response
    setTimeout(() => {
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: 'Thanks for your message!' }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="chat-container  items-centre rounded-xl shadow-lg border border-gray-200">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender}`}
          >
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
