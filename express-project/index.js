const express = require("express");
const { win32 } = require("path");

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Brendan",

    },
    {
        id: 1,
        name: "Eich", 
    },
]

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    next()
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
    
})

app.post('/friends', (req, res) => {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
           error: 'Missing friend name', 
       });
    }

    const isFriendExist = friends.find(friend => friend.name == name)

    if (isFriendExist) {
        return res.status(400).json({error: `${name} is already exist.`});
    }

    const newFriend = {
        id: friends.length,
        name: name,
    }
    
    friends.push(newFriend);

    return res.json(newFriend);
});

app.get('/friends', (req, res) => {
    res.status(200).json(friends);
})

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];

    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({error: `friend does not exist with ${friendId} ID.`}); 
    }
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Brendan Eich</li></ul>');
})


app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));

