import express from "express";
import * as veterinaryUserCase from "../useCase/veterinary.userCase.js";

// import { autoritation } from "../middlewares/autentication.js";
import jwt from 'jsonwebtoken';

const router = express.Router();


// *POST
router.post("/:type", async (request, response) => {
    try {
        const { type } = request.params
        const {veterinariy,vet} = request.body;
        console.log(veterinariy);
        console.log(vet);
        console.log(type);
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

export default router;