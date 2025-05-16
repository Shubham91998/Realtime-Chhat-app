import express from "express";
import upload from "../utils/upload.js";

import { addUser, getUsers } from "../controller/userController.js";
import { newConversation, getConversation } from "../controller/ConversationController.js";
import { newMessage, getMessage } from "../controller/MessageController.js";
import { uploadFile, getImage } from "../controller/ImaheController.js";



const route = express.Router();



route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation)
route.post('/conversation/get', getConversation)

route.post('/message/add', newMessage)
route.get('/message/get/:id', getMessage)

route.post('/file/upload',upload.single('file'), uploadFile)
route.get('/file/:filename', getImage);

export default route;