import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 1024 })
    username: string;

    @Column({ name: 'email', length: 1024 })
    myEmail: string;

    @Column()
    age: number;

    @OneToOne(() => Country, { eager: true })
    @JoinColumn({name:"country_id"})
    country:Country;

    @Column({name:'date_of_birth'})
    dateOfBirth:Date;
}


