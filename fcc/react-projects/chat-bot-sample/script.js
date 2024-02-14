const chatBox = document.getElementById("chat-box");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function writeToChat(message, delayTime = 50, isUser = false) {
  const className = isUser ? "user-message" : "bot-message";
  for (let i = 0; i < message.length; i++) {
    chatBox.innerHTML += `<span class="${className}">${message[i]}</span>`;
    await delay(delayTime);
  }
  chatBox.innerHTML += "<br>";
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function chatBot() {
  await writeToChat("Hello! I'm the chatbot. How can I help you?");
  await writeToChat(
    "This is a demo chatbot. You can type a message below and press Enter."
  );
}

document
  .getElementById("user-input")
  .addEventListener("keypress", async function (e) {
    if (e.key === "Enter") {
      const userInput = this.value;
      await writeToChat(`You: ${userInput}`, 10, true);
      // Process user input and generate bot response
      const botResponse = `Bot: You said "${userInput}".`;
      await writeToChat(botResponse, 30);
      this.value = ""; // Clear input field after sending message
    }
  });

chatBot();
