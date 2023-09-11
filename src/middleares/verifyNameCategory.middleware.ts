import { NextFunction, Request, Response } from 'express';
import { categoryRespository } from '../repository';
import { AppError } from '../errors/App.Error';

const verifyNameCategoryMiddleware = async (
    req: Request,
    res:Response,
    next: NextFunction
):Promise<void> => {
    const { name } = req.body;

    const category = await categoryRespository.findOneBy({name:name})

    if(category) {
        throw new AppError("Category already exists", 409);
    }

    if(!name) return next()

    return next();
}

export {verifyNameCategoryMiddleware}