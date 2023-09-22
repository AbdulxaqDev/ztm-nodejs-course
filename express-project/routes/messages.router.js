const express = require("express");

const messagesRouter = express.Router();

const { getMessages, postMessage } = require("../controllers/messages.controller.js");

messagesRouter.get('/', getMessages);

messagesRouter.post('/', postMessage)

module.exports = messagesRouter;
