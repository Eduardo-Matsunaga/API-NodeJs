import {Router} from "express"
import {GetUsers, CreateUser, DeleteUser} from  "./controllers/UserController.js"


const routes = Router()

routes.get('/user', GetUsers) //Listar usuarios
routes.post('/user',CreateUser)//Cria um Usuario
routes.delete('/user/:id', DeleteUser)

export default routes