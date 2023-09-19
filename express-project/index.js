const express = require("express");

const { getFriend, getFriends, postFriend} = require("./controllers/friends.controller.js");
const { getMessages, postMessage } = require("./controllers/messages.controller.js");


const app = express();

const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    next()
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
    
})

app.get('/friends', getFriends);

app.post('/friends', postFriend)

app.get('/friends/:friendId', getFriend)

app.get('/messages', getMessages);
app.post('/messages', postMessage);



app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));

