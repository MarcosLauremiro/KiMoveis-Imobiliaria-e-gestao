import { z } from "zod";
import { createRealEstateSchema, realEstateSchema } from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { CreateAddress } from "./address.interface";

type RealEstateCreate = z.infer<typeof createRealEstateSchema>;
type RealEstateAddress = {
  realEstates: RealEstateCreate;
  address: CreateAddress;
};
type ReadRealEstate = Array<RealEstate>;
type RealEstateReturn = z.infer<typeof realEstateSchema>;
type RealEstateRepository = Repository<RealEstate>;

export { RealEstateCreate, RealEstateAddress, ReadRealEstate, RealEstateRepository,RealEstateReturn };