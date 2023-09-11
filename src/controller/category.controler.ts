import { Request, Response } from 'express';
import { CategoryReturn } from '../interfaces';
import { categoryId, createCategory, readCategory } from '../services';

const createCategoryControler = async (req:Request, res:Response): Promise<Response> => {
    const category: CategoryReturn = await createCategory(req.body)
    return res.status(201).json(category)
}

const readCreategoryControler = async (req:Request, res:Response): Promise<Response> => {
    const read = await readCategory();
    return res.status(200).json(read)
}

const categoryIdControler = async (
    req:Request,res:Response
):Promise<Response> => {
    const category = res.locals.category

    const realEstate = await categoryId(category);
    return res.status(200).json(realEstate)
}

export { createCategoryControler, readCreategoryControler, categoryIdControler }