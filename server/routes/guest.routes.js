import { Router } from 'express'
import { getGuest, addGuest, updateGuest } from '../controllers/guest.controller'

const router = new Router()

router.route("/test")
      .get((req, res) => {
            res.send("Hi World")
      })

router.route('/guest:email')
      .get(getGuest)
      .put(updateGuest)

router.route('/guest')
      .get((req, res) => {
          res.send("All Guests")
      })
      .post(addGuest)

router.put('/guest:email')

export default router