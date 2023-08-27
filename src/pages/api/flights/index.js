import { flights } from "@/mocks/flights.mock"
import { sleep } from "@/utils/utils"

export default async function handler(req, res) {
     const data = {
          flights
     }

     await sleep(1000)

     res.status(200).json(data)
}