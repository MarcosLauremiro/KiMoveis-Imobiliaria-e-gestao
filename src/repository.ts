import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { AddressRepository, CategoryRepository, RealEstateRepository, ScheduleRepository, UserRepositoy } from "./interfaces";

const userRepository: UserRepositoy = AppDataSource.getRepository(User);
const categoryRespository: CategoryRepository = AppDataSource.getRepository(Category);
const realEstatesRepository: RealEstateRepository = AppDataSource.getRepository(RealEstate);
const addressesRepository: AddressRepository = AppDataSource.getRepository(Address);
const scheduleRepository: ScheduleRepository = AppDataSource.getRepository(Schedule);

export { userRepository, categoryRespository, realEstatesRepository, addressesRepository, scheduleRepository };