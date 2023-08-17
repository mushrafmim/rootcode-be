import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SectionType } from "../enums/SectionType";
import { SpaceCraft } from "./SpaceCraft";

@Entity()
export class SpaceCraftSection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column({
        type: "enum",
        enum: SectionType
    })
    class: string;

    @Column()
    numberOfPeople: number;

    @Column()
    price: number;

    @ManyToOne(() => SpaceCraft, section => section.sections)
    spacecraft: SpaceCraft;
}