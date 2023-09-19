

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

function getFriend(req, res){
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];

    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({error: `friend does not exist with ${friendId} ID.`}); 
    }
}

function getFriends(req, res){
    res.status(200).json(friends);
}

function postFriend(req, res){
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
}


module.exports = {
  getFriend,
  getFriends,
  postFriend,
}
