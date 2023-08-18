import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SpaceCraftSection } from "./SpaceCraftSection";
import { Trip } from "./Trip";

@Entity()
export class SpaceCraft {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @OneToMany(() => SpaceCraftSection, (spaceCraft) => spaceCraft.spacecraft)
    sections: SpaceCraftSection[];

    @OneToMany(() => Trip, (trip) => trip.spaceCraft)
    trips: Trip[];
}