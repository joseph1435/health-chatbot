document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.getElementById('chat-box');
  const chatForm = document.getElementById('chat-form');
  const userInput = document.getElementById('user-input');

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    chatBox.scrollTop = chatBox.scrollHeight;
  };

  // Typing effect for bot response
  const typeMessage = (element, message, delay = 20) => {
    let i = 0;
    const type = () => {
      if (i < message.length) {
        element.innerHTML += message.charAt(i);
        i++;
        setTimeout(type, delay);
      }
    };
    type();
  };

  // Display messages
  const addMessage = (text, sender) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    chatBox.appendChild(messageDiv);

    if (sender === 'bot') {
      typeMessage(messageDiv, text);
    } else {
      messageDiv.textContent = text;
    }

    scrollToBottom();
  };

  // Initial welcome message
  setTimeout(() => {
    addMessage("👩‍⚕️ Hello! I'm your Health Assistant. How can I help you today?", 'bot');
  }, 300);

  // Handle form submission
  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    userInput.value = '';

    try {
      const res = await fetch('/get', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ msg: message })
      });

      const data = await res.json();
      addMessage(data.response, 'bot');
    } catch (err) {
      addMessage("⚠️ Sorry, there was an error getting a response. Please try again.", 'bot');
    }
  });
});
