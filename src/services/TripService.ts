import { TripRepository } from "../repositories/TripRepository";
import { TripViewRepository } from "../repositories/TripViewRepository";

export class TripService {
    private tripViewRepository: TripViewRepository;
    private tripRepository: TripRepository;

    constructor() {
        this.tripViewRepository = new TripViewRepository();
        this.tripRepository = new TripRepository();
    }

    public async getTrips(from: string, to: string, departureTime: Date, travelMode?: string) {
        return await this.tripViewRepository.getTrips(from, to, departureTime, travelMode);
    }

    public async getTripById(id: number) {
        return await this.tripRepository.getTripById(id);
    }
}