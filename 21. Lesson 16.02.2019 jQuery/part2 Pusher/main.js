const button = document.querySelector('button');
const messageContainer = document.querySelector('.container');

const tokenProvider = new Chatkit.TokenProvider({
    url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/4d0e1af9-a130-4f52-8231-96619f9c1e11/token"
});

const chatManager = new Chatkit.ChatManager({
    instanceLocator: "v1:us1:4d0e1af9-a130-4f52-8231-96619f9c1e11",
    userId: "1234",
    tokenProvider: tokenProvider
});
chatManager
    .connect()
    .then(currentUser => {
        currentUser.subscribeToRoom({
            roomId: currentUser.rooms[0].id,
            hooks: {
                onMessage: message => {
                    const preparedMessage = `${message.userStore.users[message.senderId].name}: ${message.text}`;
                    const userMessage = document.createElement('p');
                    userMessage.textContent = preparedMessage;
                    messageContainer.appendChild(userMessage);
                }
            },
            messageLimit: 0
        });
        button.onclick = () => {
            const input = document.getElementById('message');
            currentUser.sendMessage({
                text: input.value,
                roomId: currentUser.rooms[0].id
            });
            input.value = '';
        };
    })
    .catch(error => {
        console.error("error:", error);
    });