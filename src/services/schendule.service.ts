import { RealEstate, Schedule } from "../entities";
import { AppError } from "../errors/App.Error";
import { ScheduleCreate } from "../interfaces";
import { realEstatesRepository, scheduleRepository } from "../repository";

const createSchendule = async (
  userId: number,
  scheduleBody: ScheduleCreate
): Promise<Schedule> => {
  const { realEstateId, ...body } = scheduleBody;

  const verifyId: RealEstate | null = await realEstatesRepository.findOneBy({
    id: realEstateId,
  });

  if (!verifyId) {
    throw new AppError("RealEstate not found", 404);
  }

  const date = new Date(body.date + " " + body.hour);

  const day = date.getDay();
  const hours = date.getHours();

  if (day < 1 || day > 5) {
    throw new AppError("Invalid date, work days are monday to friday");
  }

  if (hours < 8 || hours > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM");
  }

  const schedule = scheduleRepository.create({
    realEstate: verifyId,
    user: { id: userId },
    ...body,
  });
  await scheduleRepository.save(schedule);

  return schedule;
};

const ReadscheduleEstates = async (id: number): Promise<RealEstate> => {
  const realEstate: RealEstate | null = await realEstatesRepository.findOne({
    where: { id: id },
    relations: { schedules: { user: true }, address: true, category: true },
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  return realEstate;
};

export { createSchendule, ReadscheduleEstates };