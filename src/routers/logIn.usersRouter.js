import express from 'express'
import * as autenticationUserCase from '../useCase/autentication.userCase.js'

const router = express.Router()

router.post('/', async (request, response)=>{
    try{
        const {email, password} = request.body
        const token = await autenticationUserCase.login(email, password)
        response.json({
            success:true,
            token
        })
    } catch(error){
        response.status(400)
        console.log(error.message)
        response.json({
            success: false,
            error: error.message
        })
    }
})

export default router;
