// src/chatbot/config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';

const config = {
  botName: "PortfolioBot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. Ask me about my skills, projects, education, or experience!")],
  customComponents: {},
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
