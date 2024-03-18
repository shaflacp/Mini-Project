import axios from "axios"

const AdminInstance = axios.create({baseURL:"http://localhost:4000/admin"})
const UserInstance = axios.create({baseURL:"http://localhost:4000"})
export{AdminInstance,UserInstance}