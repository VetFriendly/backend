import express from "express";
import * as veterinaryUserCase from "../useCase/veterinary.userCase.js";
import { autoritation } from '../middlewares/autentication.js'
import jwt from 'jsonwebtoken';

const router = express.Router();


// *POST
router.post("/", async (request, response) => {
    try {
        const {veterinariy,vet} = request.body;
        const vetCreated = await veterinaryUserCase.create(veterinariy, vet);

        response.json({
            succes: true,
            message: "user created",
            data: vetCreated,
        });
    } catch (error) {
        console.log(error);
        response.json({
            succes: false,
            message: error.message
        });
    }
});


// *GET
router.get("/", autoritation ,async (request, response) => {
    try {
        const token = request.headers.authorization
        const { id } = jwt.decode(token)
        const getUser = await veterinaryUserCase.getById(id);
        if (!id) {
            throw new StatusHttp("author no encontrado", 401);
        }
        response.json({
            succes: true,
            data: {
                author: getUser,
            },
        });
    }catch (error)  {
        response.json({
            succes: false,
            message: error.message
        });
    }
})

// *patch
router.patch("/", autoritation ,async (request, response) => {
    try {
        const data = request.body;
        const token = request.headers.authorization
        const { id } = jwt.decode(token)

        const getUser = await veterinaryUserCase.update(id, data);

        response.json({
            succes: true,
            data: {
                author: getUser,
            },
        });
    }catch (error)  {
        response.json({
            succes: false,
            message: error.message
        });
    }
})


export default router;