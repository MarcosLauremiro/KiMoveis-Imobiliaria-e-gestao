import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { hashSync, getRounds } from "bcryptjs";
import { Schedule } from "./schedules.entitie";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({
    type: "date",
    nullable: true,
  })
  deletedAt?: string | undefined | null;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Array<Schedule>;

  @BeforeInsert()
  @BeforeUpdate()
  criptPassword() {
    const hashPassword: number = getRounds(this.password);
    if (!hashPassword) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
