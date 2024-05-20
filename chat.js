function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;

    if (message.trim() !== "") {
        displayMessage("voce", message, "user-message");
        messageInput.value = "";
    }
}

function displayMessage(sender ,message, className) {
    var chatBox = document.getElementById("chat-box");

    var messageElement = document.createElement("div");
    messageElement.textContent = message; 
    messageElement.classList.add("message", className);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}







































