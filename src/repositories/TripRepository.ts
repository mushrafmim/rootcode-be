import { Repository } from "typeorm";
import { Trip } from "../entity/Trip";
import { AppDataSource } from "../data-source";

export class TripRepository {
    private tripRepository: Repository<Trip>;

    constructor() {
        this.tripRepository = AppDataSource.getRepository(Trip);
    }

    public async getTripsByFromAndTo(fromRegion: string, toRegion: string): Promise<Trip[]> {
        return await this.tripRepository.find({
            where: {
                fromRegion,
                toRegion
            }
        });
    }


}