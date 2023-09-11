import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entitie";
import {RealEstate} from "./realEstates.entitie";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, (real) => real.schedules)
  @JoinColumn()
  realEstate: RealEstate;

  @ManyToOne(() => User, (user) => user.schedules)
  @JoinColumn()
  user: User;
}

export { Schedule };
