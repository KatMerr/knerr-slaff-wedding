import { Router } from 'express'
import { getGuest, allGuests, addGuest, updateGuest } from '../controllers/guest.controller'

const router = new Router()

router.route("/test")
      .get((req, res) => {
            res.send("Hello World")
      })

router.route('/guest')
      .get(allGuests)
      .post(addGuest)

router.route('/guest/:names')
      .get(getGuest)
      .put(updateGuest)

export default router