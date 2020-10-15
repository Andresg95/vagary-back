import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  birthdate: Date;

  @Column()
  gender: "char"

  @Column()
  keytoken: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  password: string;
}


