import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../repository';
import { AppError } from '../errors/App.Error';


const verifyEmailMiddleare = async (req:Request, res:Response, next:NextFunction):Promise<void> => {

    const {email} = req.body
    const existEmail = await userRepository.findOne({ where: { email: email } })

    if(existEmail) {
        throw new AppError("Email already exists", 409);
    }

    return next()
}

export { verifyEmailMiddleare }