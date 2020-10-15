import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Phone {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    number: number

    @Column()
    extension: number

    @Column()
    id_user: number

    @Column()
    code: string

    @Column()
    state: boolean

}