import { Router } from 'express'
import { TripController } from '../controller/TripController'


const router = Router()

const tripController = new TripController()

router.route("/").get(tripController.searchByTrip)

export default router