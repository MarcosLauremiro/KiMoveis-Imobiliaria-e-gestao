import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {RealEstate} from "./realEstates.entitie";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
  realEstate: Array<RealEstate>;
};

export { Category };