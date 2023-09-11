import { z } from 'zod';
import { RealEstate, Schedule } from "../entities";
import { createScheduleSchema, scheduleResultSchema } from '../schemas';
import { Repository } from 'typeorm';

type ScheduleRealEstate = {
  schedule: Schedule;
  realEstates: RealEstate;
};
type ScheduleCreate = z.infer<typeof createScheduleSchema>;
type ScheduleRead = Array<ScheduleRealEstate>;
type ScheduleRepository = Repository<Schedule>;
type ScheduleReturn = z.infer<typeof scheduleResultSchema>

export {ScheduleRealEstate, ScheduleCreate, ScheduleRead, ScheduleRepository, ScheduleReturn};