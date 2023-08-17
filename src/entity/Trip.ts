import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Trip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    from: string;

    @Column()
    to: string;

    @Column()
    departureTime: Date;

    @Column()
    spacecraft_id: number;

}
