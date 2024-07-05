// src/chatbot/MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("about you")) {
      this.actionProvider.handleAboutYou();
    } else if (lowerCaseMessage.includes("skills")) {
      this.actionProvider.handleSkills();
    } else if (lowerCaseMessage.includes("projects")) {
      this.actionProvider.handleProjects();
    } else if (lowerCaseMessage.includes("education")) {
      this.actionProvider.handleEducation();
    } else if (lowerCaseMessage.includes("experience")) {
      this.actionProvider.handleExperience();
    } else if (lowerCaseMessage.includes("contact")) {
      this.actionProvider.handleContact();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
