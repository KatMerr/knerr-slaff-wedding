import { Router } from 'express'
import { getGuest, addGuest, updateGuest } from '../controllers/guest.controller'

const router = new Router()

router.route("/test")
      .get((req, res) => {
            res.send("Hello World")
      })

router.route('/guest')
      .get((req, res) => {
            res.send("All Guests")
      })
      .post(addGuest)

router.route('/guest:email')
      .get(getGuest)
      .put(updateGuest)

export default router