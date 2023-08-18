import { Request, Response } from "express";
import { TripService } from "../services/TripService";

export class TripController {
    private tripService: TripService;

    constructor() {
        this.tripService = new TripService();
    }

    public searchByTrip = async (request: Request, response: Response): Promise<void> => {
        try {
            const from = String(request.query.from);
            const to = String(request.query.to);
            const travelMode = String(request.query.travelMode);

            let dateString = String(request.query.date);

            if (dateString === "undefined") {
                dateString = new Date().toISOString();
            }

            const date = new Date(dateString);

            response.json(await this.tripService.getTrips(from, to, date, travelMode))
            return
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}