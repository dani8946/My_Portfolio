// src/chatbot/Chatbot.js
import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../components/config';
import MessageParser from '../components/messageparser';
import ActionProvider from '../components/actionprovider';
import chatbotIcon from '../assets/chat-bot.gif';
import Draggable from 'react-draggable';

const PortfolioChatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  const handleBotIconClick = () => {
    setShowChatbot(true);
    setShowIcon(false);
  };

  const handleCloseChatbot = () => {
    setShowChatbot(false);
    setShowIcon(true);
  };

  const handleBotIconTouchStart = (e) => {
    e.preventDefault(); // Prevents scrolling on touch devices
    handleBotIconClick();
  };

  return (
    <div>
      {showIcon && (
        <Draggable>
          <button 
            onClick={handleBotIconClick} 
            onTouchStart={handleBotIconTouchStart} // Handle touch events
            className="chatbot-button"
          >
            <img src={chatbotIcon} alt="Chatbot Icon" />
          </button>
        </Draggable>
      )}
      {showChatbot && (
        <div className="chatbot-container">
          <button onClick={handleCloseChatbot} className="close-button">✖</button>
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}
    </div>
  );
};

export default PortfolioChatbot;
