
import users from "../modules/users.js";

async function GetUsers (resquest, response){
    const userList = await users.find();

  return response.status(200).json(userList);
}

async function CreateUser (request, response){
    const user = request.body;

    const newUser = await users.create(user);
  
    return response.status(201).json(newUser);
}

async function DeleteUser (request, response){
  const id = request.params.id

  await users.findByIdAndDelete({_id: id});

  return response.status(200).json({reponse: "Deleted successfuly"})
}

export {GetUsers, CreateUser, DeleteUser}