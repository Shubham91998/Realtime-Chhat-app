import express from "express";
import { addUser, getUsers } from "../controller/userController.js";
import { newConversation } from "../controller/ConversationController.js";
const route = express.Router();



route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation)

export default route;