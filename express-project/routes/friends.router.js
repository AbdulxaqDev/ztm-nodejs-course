const express = require("express");

const friendsRouter = express.Router();

const { getFriend, getFriends, postFriend} = require("../controllers/friends.controller.js");

friendsRouter.use((req, res, next) => {
  console.log(`ip address is `, req.ip);
  next();
})

friendsRouter.get('/', getFriends);

friendsRouter.post('/', postFriend)

friendsRouter.get('/:friendId', getFriend)

module.exports = friendsRouter;
