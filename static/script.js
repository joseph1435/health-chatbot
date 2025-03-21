const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Welcome message on page load
window.onload = () => {
  showMessage("👩‍⚕️ HealthBot: Hi there! I'm your friendly health assistant. How can I help you today? 😊", 'bot');
};

// Handle sending message
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const input = userInput.value.trim();
  if (input === '') return;

  showMessage(`🧑‍💻 You: ${input}`, 'user');
  userInput.value = '';
  getBotResponse(input);
}

function showMessage(message, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.innerHTML = message;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  showTyping();

  fetch('/chat', {
    method: 'POST',
    body: JSON.stringify({ message: input }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      removeTyping();
      simulateTyping(`👩‍⚕️ HealthBot: ${data.response}`);
    })
    .catch(error => {
      removeTyping();
      showMessage("❌ Bot Error: Something went wrong. Please try again later.", 'bot');
      console.error(error);
    });
}

// Typing animation logic
function showTyping() {
  const typing = document.createElement('div');
  typing.classList.add('message', 'bot', 'typing');
  typing.innerHTML = '<em>HealthBot is typing<span class="dots">...</span></em>';
  typing.id = 'typing';
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById('typing');
  if (typing) typing.remove();
}

function simulateTyping(message) {
  let index = 0;
  const speed = 30;
  let display = '';

  const interval = setInterval(() => {
    if (index < message.length) {
      display += message.charAt(index);
      index++;
      chatBox.lastElementChild?.remove();
      const msg = document.createElement('div');
      msg.classList.add('message', 'bot');
      msg.innerHTML = display;
      chatBox.appendChild(msg);
      chatBox.scrollTop = chatBox.scrollHeight;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
