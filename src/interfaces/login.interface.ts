import { z } from 'zod';
import { loginCreateSchema } from '../schemas';

type LoginCreate = z.infer<typeof loginCreateSchema>
type LoginReturn = {
    token: string
}

export {LoginCreate, LoginReturn};