// src/chatbot/ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleAboutYou = () => {
    const message = this.createChatBotMessage("I am a Web Developer and ML enthusiast.");
    this.addMessageToState(message);
  }

  handleSkills = () => {
    const message = this.createChatBotMessage("I am skilled in React, Python, JavaScript, and Machine Learning.");
    this.addMessageToState(message);
  }

  handleProjects = () => {
    const message = this.createChatBotMessage("I have worked on various projects including web development and ML projects.");
    this.addMessageToState(message);
  }

  handleEducation = () => {
    const message = this.createChatBotMessage("I have a Bachelor's degree in Computer Science & Engineering.");
    this.addMessageToState(message);
  }

  handleExperience = () => {
    const message = this.createChatBotMessage("I have experience in Web Development and providing technical support.");
    this.addMessageToState(message);
  }

  handleContact = () => {
    const message = this.createChatBotMessage("You can contact me at brahmadanielkr@gmail.com.");
    this.addMessageToState(message);
  }

  handleUnknown = () => {
    const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Can you please rephrase?");
    this.addMessageToState(message);
  }

  addMessageToState = (message) => {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;
