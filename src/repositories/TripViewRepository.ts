import { MoreThan, Repository } from "typeorm";
import { TripView } from "../entity/TripView";
import { AppDataSource } from "../data-source";

export class TripViewRepository {
    private tripViewRepository: Repository<TripView>;

    constructor() {
        this.tripViewRepository = AppDataSource.getRepository(TripView);
    }

    public async getTrips(from: string, to: string, departureTime: Date, travelMode?: string): Promise<TripView[]> {

        return await this.tripViewRepository.find({
            where: {
                fromRegion: from,
                toRegion: to,
                departureTime: MoreThan(departureTime),
                spaceCraftTravelMode: travelMode === 'undefined' ? MoreThan('') : travelMode
            }
        });
    }
}