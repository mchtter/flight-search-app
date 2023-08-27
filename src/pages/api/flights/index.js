import { flights } from "@/mocks/flights.mock"
import { sleep } from "@/utils/utils"

export default async function handler(req, res) {
     const data = {
          departure: [],
          returnFlights: [],
     }

     flights.filter(flight => {
          if (flight.from === req.body.from && flight.to === req.body.to && flight.departure === req.body.departure) {
               data.departure.push(flight)
          }
          if (flight.from === req.body.to && flight.to === req.body.from && flight.departure === req.body.returnDate) {
               data.returnFlights.push(flight)
          }
     })

     // simulate loading like business logic
     await sleep(1000)

     res.status(200).json(data)
}