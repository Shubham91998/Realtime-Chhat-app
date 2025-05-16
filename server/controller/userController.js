import userModel from "../model/userModel.js";

export const addUser = async (req, res) => {
    try {
        let exist = await userModel.findOne({sub: req.body.sub});
        console.log("User exist => ",exist)
        if (exist){
            res.status(200).json({msg:'User already exist'})
            return;
        }
        const newUser = new userModel(req.body);
        await newUser.save();
        return res.status(200).json("New user save sucessfully => ",newUser);
    } catch (error) {
        return res.status(500).json(error.message);
    }

}


export const getUsers = async(req, res) => {

    try {
        const users = await userModel.find({});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}