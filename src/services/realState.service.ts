import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../errors/App.Error";
import { ReadRealEstate, RealEstateCreate } from "../interfaces";
import {
  addressesRepository,
  categoryRespository,
  realEstatesRepository,
} from "../repository";
import { realEstateSchema } from "../schemas";

const createRealState = async (
  bodyRealEstate: RealEstateCreate
): Promise<RealEstate> => {
  const { address, categoryId, ...body } = bodyRealEstate;

  const adress: Address = addressesRepository.create({ ...address });

  await addressesRepository.save(adress);

  const verifyId: Category | null = await categoryRespository.findOneBy({
    id: categoryId,
  });

  if (!verifyId) {
    throw new AppError("Category not found");
  }

  const realEstare: RealEstate = realEstatesRepository.create({
    category: verifyId,
    address: adress,
    ...body,
  });

  await realEstatesRepository.save(realEstare);

  return realEstare;
};

const ReadRealEstates = async (): Promise<ReadRealEstate> => {
  const realEstates: ReadRealEstate = await realEstatesRepository.find({
    relations: ["address"],
  });
  return realEstates;
};

export { createRealState, ReadRealEstates };