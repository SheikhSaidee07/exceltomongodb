import user from '../models/user.mjs'
import csv from 'csvtojson' 

const importEmployee =  async(req,res)=>{
    try {
        let userData=[]
        csv().fromFile(req.file.path).then(async(res)=>{
            for(let x=0;x<res.length;x++){
                userData.push({
                    name:res[x].name,
                    email:res[x].email,
                    address:res[x].address,
                    mobileNumber:res[x].mobileNumber
                })
            }
            await user.insertMany(userData)
        })
        res.send({status:200,success:true,msg:"successfully added"})
        
    } catch (error) {
        res.send({status:200,success:true,msg:error.messaage})
    }
}
export default {importEmployee}