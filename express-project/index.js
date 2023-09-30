const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

const friendsRouter = require("./routes/friends.router.js");
const messagesRouter = require("./routes/messages.router.js");

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    next()
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);




app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));

