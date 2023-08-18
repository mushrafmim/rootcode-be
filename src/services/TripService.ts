import { TripViewRepository } from "../repositories/TripViewRepository";

export class TripService {
    private tripViewRepository: TripViewRepository;

    constructor() {
        this.tripViewRepository = new TripViewRepository();
    }

    public async getTrips(from: string, to: string, departureTime: Date, travelMode?: string) {
        return await this.tripViewRepository.getTrips(from, to, departureTime, travelMode);
    }
}