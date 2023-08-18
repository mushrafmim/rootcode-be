import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SectionType } from "../enums/SectionType";
import { SpaceCraft } from "./SpaceCraft";
import { Booking } from "./Booking";

@Entity()
export class SpaceCraftSection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: SectionType
    })
    class: string;

    @Column()
    numberOfPeople: number;

    @Column()
    price_factor: number;

    @ManyToOne(() => SpaceCraft, section => section.sections)
    spacecraft: SpaceCraft;

    @OneToMany(() => Booking, (booking) => booking.spaceCraftSection)
    bookings: Booking[];
}