import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 40 })
    password: string;

    @Column( { length: 40 })
    username: string;

}