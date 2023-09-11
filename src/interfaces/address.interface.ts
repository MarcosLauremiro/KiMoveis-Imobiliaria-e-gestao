import { Repository } from 'typeorm';
import { createAddressSchema } from '../schemas';
import { Address } from '../entities';
import { z } from 'zod';

type CreateAddress = z.infer<typeof createAddressSchema>
type AddressRepository = Repository<Address>

export {CreateAddress, AddressRepository};