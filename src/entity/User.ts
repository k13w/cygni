import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 40 })
    password: string;

    @Column( { length: 40 })
    username: string;

}