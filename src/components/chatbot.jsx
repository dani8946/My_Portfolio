// src/chatbot/Chatbot.js
import React, {useState} from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import Draggable from 'react-draggable';
import config from './config';
import MessageParser from './messageparser';
import ActionProvider from './actionprovider';
import chatbotIcon from '../assets/chat-bot.gif';

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

  return (
    <div>
      {showIcon && (
        <Draggable>
          <button onClick={handleBotIconClick} className="chatbot-button">
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
}

export default PortfolioChatbot;
