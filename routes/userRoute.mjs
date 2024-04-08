import express from 'express'
const user=express();
import multer from 'multer'
import path from 'path'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import userController from '../controllers/userController.mjs'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

user.use(bodyParser.urlencoded({extended:true}));
user.use(express.static(path.resolve(__dirname,'public')))

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload =multer({storage:storage})

user.post('/employee',upload.single('file'),userController.importEmployee)

export default user;